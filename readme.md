# LittleSlider

![alt text](/assets/1.JPG)

Слайдер - ползунок, без лишнего.
Позволяет менять значения как целых, так и десятичных чисел.
Можно менять колесиком или мышью

## Совместимость

* `ie 9+`
* `Chrome`	
* `Edge`	
* `Firefox`
*	`Opera`	
* `Safar`

## Как использовать

```html
<html>
  <head>
    <link rel="stylesheet" href="dist/style.css">
    <title></title>
  </head>
  <body>
		<div class="slider1"></div>
		<div class="slider2"></div>
		<div class="slider3"></div>

		<script type="text/javascript" src="dist/little-slider.js"></script>
  </body>
</html>
```

```js
LittleSlider.init('.slider1').show();
LittleSlider.init('.slider2', {
  min: -12,
  max: 12,
  step: 0.5,
  value: 0,
  onChange: function(value) {
    console.log('value changed', value)
  },
}).show();
LittleSlider.init('.slider3', {
  min: 0,
  max: 11,
  step: 2,
  value: 3,
  onInit: function(){
    console.log('slider initialization')
  },
  onChange: function(value) {
    console.log('value changed', value)
  },
  onSlide: function(event) {
    console.log('slide on')
  },
  onSlideEnd: function(event) {
    console.log('slide end')
  },
  onMouseUp: function(event) {
    console.log('mouse up')
  },
  onMouseDown: function(event) {
    console.log('mouse down')
  }
}).show();
```

### Опции

```js
let options = {
	//Минимальное значение
	min: 'Number | Float',
	//Максимальное значение
	max: 'Number | Float',
	//Шаг слайдера
	step: 'Number | Float',
	//Начальное значение
	value: 'Number | Float'
}
```

### Методы 

Инициализация
- ``onInit()``

Отобразить слайдер
- ``onInit()``



### События

При инициализации
- ``onInit()``

При изменении значения слайдера
- ``onChange(value)``

При движении слайдера
- ``onSlide(e)``

Когда слайдер достиг конца
- ``onSlideEnd(e)``

При отпускании кнопки мыши
- ``onMouseUp(e)``

При нажатии кнопки мыши
- ``onMouseDown(e)``


### Лицензия

The MIT License (MIT)

Copyright (c) 2021-present LioneNET

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.