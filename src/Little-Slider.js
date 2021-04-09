function createSlider(o) {
	let $element = document.createElement('div')
	$element.className = 'little-scale';
	$element.insertAdjacentHTML('afterbegin',`
			<div class="little-slider-line"></div>
			<div class="little-pointer"></div>
	`)
	return $element;
}

export default class LittleSlider {
	constructor(el, options = {}){
		this.x1 = 0
		this.x2 = 0;
		this.options = options
		this.max = options.max || 100
		this.min = options.min || 0
		this.value = typeof options.value === 'number' ? options.value : this.min
		this.step = options.step || 1
		this.currentValue = 0
		this.$element = createSlider()
		this.$sliderLine = this.$element.querySelector('.little-slider-line')
		this.$pointer = this.$element.querySelector('.little-pointer')
		document.querySelector(el).appendChild(this.$element)

		this.init()
	}

	init(){
		this.options.onInit && this.options.onInit.call();
		['mouseDownHandler', 'mouseUpHandler', 'mouseMoveHandler', 
		'resizeHandler', 'wheelHandler'].forEach( element => this[element] = this[element].bind(this))
		this.$element.addEventListener("mousedown", this.mouseDownHandler)
		window.addEventListener('resize', this.resizeHandler)
		this.$element.addEventListener("wheel", this.wheelHandler)
		this.calculate();
		this.setPosition(this.getPositionFromValue(this.value))
	}

	calculate() {
		this.pointerWidth = this.$pointer.offsetWidth
		this.pointToMiddle = this.pointerWidth/2
		this.scaleWidth = this.$element.offsetWidth - this.pointerWidth;
		this.setPosition(this.getPositionFromValue(this.value))
	}

	resizeHandler() {
		this.calculate();
	}

	wheelHandler(e) {
		let step = Math.round(e.deltaY * 0.01) * this.step
		this.setPosition(this.getPositionFromValue(this.value + step))
	}

	//при нажатии кнопки мыши
	mouseDownHandler(e){
		e.preventDefault()
		//console.log('mouseDown')
		this.options.onMouseDown && this.options.onMouseDown.call(this.options, e);
		this.x2 = this.eventPos(e, this.$element)
		this.setPosition(this.x2 - this.pointToMiddle)

		document.addEventListener('mouseup', this.mouseUpHandler)
		document.addEventListener('mousemove', this.mouseMoveHandler)
	}

	//при отпускании кнопки мыши
	mouseUpHandler(e){
		//console.log('mouseup')
		this.options.onMouseUp && this.options.onMouseUp.call(this.options, e);
		document.removeEventListener("mousemove", this.mouseMoveHandler)
		document.removeEventListener('mouseup', this.mouseUpHandler)
	}

	//при движении мыши
	mouseMoveHandler(e){
		e.preventDefault();
		this.options.onSlide && this.options.onSlide.call(this.options, e);
		const x1 = this.eventPos(e, this.$element)
    this.setPosition(x1 - this.pointToMiddle)
	}

	//установить позицию и отобразить результат
	setPosition (pos) {
		pos = pos < 0 ? 0 : pos >= this.scaleWidth ? this.scaleWidth : pos;
		let value = this.getValueFromPosition(pos)
		value = value > this.max ? this.max : value < this.min ? this.min : value
		const x = this.getPositionFromValue(value);
		//выполнится, когда величина изменится
		if(value > this.currentValue || value < this.currentValue){
			this.currentValue = value
			this.options.onChange && this.options.onChange.call(this.options, this.currentValue);

			//конец слайдера
			if(value === this.max){
				this.options.onSlideEnd && this.options.onSlideEnd.call(this.options, this.currentValue);
			}
			
		}
		this.value = value
		this.$sliderLine.style.width = x + "px";
		this.$pointer.style.left = x + "px";
	}

	//получить позицию по величине
	getPositionFromValue (val) {
    const percent = (val - this.min) / (this.max - this.min)
    return percent * this.scaleWidth
  }

  //получить величину по позиции
	getValueFromPosition(pos) {
    const percent = pos / this.scaleWidth
    const value = this.step * Math.round(percent * (this.max - this.min) / this.step) + this.min
    return Number(value.toFixed(this.fixTofractional(this.step)))
  }

  //возвращает количество чисел, после запятой
  fixTofractional(fractional){
		return fractional.toString().replace(".",'').length-1;
	}

	//возвращает позицию x от длинны  элемента
	eventPos(ev, toElement) {
    return ev.pageX - toElement.getBoundingClientRect().left
	}
}