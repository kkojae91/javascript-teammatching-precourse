import { DOM, TEMPLATE } from '../utils/constant.js';

export default class Render {
  constructor() {
    this.$app = document.querySelector(DOM.$APP);
  }

  mainTemplate = () => {
    this.$app.innerHTML = TEMPLATE.MAIN;
  };

  crewManageTemplate = () => {
    const $main = document.querySelector('main');
    $main.innerHTML = TEMPLATE.CREW_MANAGE;
  };

  crewFrontendTemplate = () => {
    const $main = document.querySelector('main');
    $main.innerHTML += TEMPLATE.CREW_FRONTEND;
  };
}
