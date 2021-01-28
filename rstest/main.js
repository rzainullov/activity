/* eslint-disable linebreak-style */
import { Settings } from "./scripts/indexeddb/settings.js";
import { loadSettingsFromLocalStorage } from "./scripts/indexeddb/settings.js";
import { DataBase } from "./scripts/indexeddb/database.js";
import { Login } from "./scripts/indexeddb/login.js";
import { Modal } from "./scripts/modal/modal.js";
import { loadSettingsFromDB } from "./scripts/indexeddb/settings.js";
import { initModalLogin } from "./scripts/modal/modal-login.js";
import { Audio } from "./scripts/audio.js";
import anime from "./scripts/animejs/lib/anime.es.js";

anime({
  targets: ".preloader__logo",
  // translateX: "250",
  rotate: "2turn",
  loop: true,
  duration: 1000
});
const finder = setInterval(() => {
  const modalLogo = document.querySelector(".modal__img");
  if (modalLogo !== null) {
    clearInterval(finder);
    document.querySelector(".preloader").style.display = "none";
  }
}, 5000);

export let currentLogin = new Login();
export const globalSettings = new Settings(loadSettingsFromLocalStorage());
export let DB = new DataBase();
export const audioAPI = new Audio();
export const modalTypesObject = {
  modal: {},
  modalLogin: {},
  modalSignup: {},
  modalMain: {},
  modalRules: {},
  modalSettings: {}
};
modalTypesObject.modal = new Modal(globalSettings.getSettings()).addBurgerPush();
loadSettingsFromDB(initModalLogin);
