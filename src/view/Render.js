import { DOM, TEMPLATE } from '../utils/constant.js';

export default class Render {
  constructor() {
    this.$app = document.querySelector(DOM.$APP);
  }

  mainTemplate = () => {
    this.$app.innerHTML = TEMPLATE.MAIN;
  };
}