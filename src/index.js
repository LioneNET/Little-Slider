//import capital from "./capital"
//import addDOMContent from "./addDOMContent"
import LittleSlider from "./Little-Slider.js"
import './style.scss'

export { LittleSlider }



export default {

  //обертка для класса
  init: (el, o={}) => {
  	let instance = null

  	return {
  		show: () => {
		  	instance = instance === null ? new LittleSlider(el, o) : instance
		  }
  	}
  }
}