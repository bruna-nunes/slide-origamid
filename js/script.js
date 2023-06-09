import {SlideNav, Slide} from "./slide.js";

const slide = new SlideNav('.wrapper', '.slide');
slide.init();
slide.addArrow('.prev', '.next');

slide.addControl()
