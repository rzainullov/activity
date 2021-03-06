/* eslint-disable linebreak-style */
import { languages } from "../language.js";
import { DB } from "../../main.js";
import { defaultSettings } from "../default.js";
import { audioAPI } from "../../main.js";
import { globalSettings } from "../../main.js";
import { currentLogin } from "../../main.js";

export class Modal {
  constructor() {
    this.modal = document.querySelector("[data-modal]");
    this.burger = document.querySelector("[data-burger]");
  }

  addBurgerPush() {
    const pushBurger = () => {
      const isModalActive = this.burger.classList.contains("active");
      if (isModalActive) {
        this.makeUnactive();
      } else {
        this.makeActive();
      }
    };
    this.burger.addEventListener("click", pushBurger.bind(this));
    return this;
  }

  makeActive() {
    this.burger.classList.add("active");
    this.modal.classList.add("active");
  }

  makeUnactive() {
    this.burger.classList.remove("active");
    this.modal.classList.remove("active");
  }

  getSettings() {
    this.localSettings = globalSettings.getSettings() || defaultSettings;
    return this;
  }

  setSettings() {
    this.localSettings.playerName = currentLogin.playerName;
    globalSettings.setSettings(this.localSettings);
    localStorage.setItem("settings", JSON.stringify(globalSettings.getSettings()));
    DB.saveSettings(globalSettings.getSettings());
    return this;
  }

  clearModalArea() {
    this.modal.innerHTML = "";
  }

  getWords(typeOfModal) {
    const languageType = this.localSettings.playerSettings.find(el => el.settingName === "language").settingValue;
    this.wordsArr = languages.find(el => el.langName === languageType)[typeOfModal];
    return this;
  }

  createLogo() {
    const logo = document.createElement("div");
    logo.classList.add("modal__logo");
    this.modal.appendChild(logo);

    const logoImg = document.createElement("div");
    logoImg.classList.add("modal__img");
    logo.appendChild(logoImg);

    const logoText = document.createElement("div");
    logoText.innerText = this.wordsArr[0];
    logoText.classList.add("modal__text");
    logo.appendChild(logoText);

    const logoLogin = document.createElement("div");
    logoLogin.innerText = this.localSettings.playerName;
    logoLogin.classList.add("modal__login");
    logo.appendChild(logoLogin);
  }

  createWrap() {
    this.wrap = document.createElement("div");
    this.wrap.classList.add("modal__wrap");
    this.modal.appendChild(this.wrap);

    const wrapTitle = document.createElement("div");
    wrapTitle.innerText = this.wordsArr[1];
    wrapTitle.classList.add("modal__title");
    this.wrap.appendChild(wrapTitle);
  }

  createInput(wordNumber) {
    const input = document.createElement("input");
    input.classList.add("modal__input");
    input.placeholder = this.wordsArr[wordNumber];
    this.wrap.appendChild(input);
    return input;
  }

  createBtn(wordNumber) {
    const btn = document.createElement("div");
    btn.innerText = this.wordsArr[wordNumber];
    btn.classList.add("modal__item");
    this.wrap.appendChild(btn);
    return btn;
  }

  createError(wordNumber) {
    const err = document.createElement("div");
    err.innerText = this.wordsArr[wordNumber];
    err.classList.add("modal__error");
    this.wrap.prepend(err);
    return err;
  }

  checkPlaySound(noteName) {
    const isAudioOn = this.localSettings.playerSettings.find(el => el.settingName === "sound").settingValue === "on";
    if (isAudioOn) {
      audioAPI.playNote(noteName);
    }
  }
}
