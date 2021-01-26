/* eslint-disable linebreak-style */
import { modalTypesObject } from "../../main.js";
import { Modal } from "./modal.js";
import { ModalSettings } from "./modal-settings.js";
import { ModalLogin } from "./modal-login.js";
import { ModalRules } from "./modal-rules.js";
import { initGame } from "../game/game.js";
import { DB } from "../../main.js";
import { game } from "../game/game.js";
import { loadGameFromDB } from "../game/game.js";


export class ModalMain extends Modal {
  createModalMain() {
    this.clearModalArea();
    this.getWords("mainModal");
    this.createLogo();
    this.createWrap();

    const wrapNewGame = document.createElement("div");
    wrapNewGame.innerText = this.wordsArr[2];
    wrapNewGame.classList.add("modal__item");
    wrapNewGame.addEventListener("click", () => {
      this.checkPlaySound("A4");
      this.newGame();
    });
    this.wrap.appendChild(wrapNewGame);

    const wrapSaveGame = document.createElement("div");
    wrapSaveGame.innerText = this.wordsArr[3];
    wrapSaveGame.classList.add("modal__item");
    wrapSaveGame.addEventListener("click", () => {
      this.checkPlaySound("A4");
      this.saveGame();
    });
    this.wrap.appendChild(wrapSaveGame);

    const wrapLoadGame = document.createElement("div");
    wrapLoadGame.innerText = this.wordsArr[4];
    wrapLoadGame.classList.add("modal__item");
    wrapLoadGame.addEventListener("click", () => {
      this.checkPlaySound("A4");
      this.loadGame();
    });
    this.wrap.appendChild(wrapLoadGame);

    const wrapSettings = document.createElement("div");
    wrapSettings.innerText = this.wordsArr[5];
    wrapSettings.classList.add("modal__item");
    wrapSettings.addEventListener("click", () => {
      this.checkPlaySound("A4");
      modalTypesObject.modalSettings = new ModalSettings().getSettings().createModalSettings();
    });
    this.wrap.appendChild(wrapSettings);

    const wrapLogin = document.createElement("div");
    wrapLogin.innerText = this.wordsArr[6];
    wrapLogin.classList.add("modal__item");
    wrapLogin.addEventListener("click", () => {
      this.checkPlaySound("A4");
      modalTypesObject.modalLogin = new ModalLogin(false).getSettings().createModalLogin();
    });
    this.wrap.appendChild(wrapLogin);

    const wrapRules = document.createElement("div");
    wrapRules.innerText = this.wordsArr[7];
    wrapRules.classList.add("modal__item");
    wrapRules.addEventListener("click", () => {
      this.checkPlaySound("A4");
      modalTypesObject.modalRules = new ModalRules().getSettings().createModalRules();
    });
    this.wrap.appendChild(wrapRules);
    return this;
  }

  newGame() {
    modalTypesObject.modal.makeUnactive();
    initGame(this.localSettings);
    return this;
  }

  saveGame() {
    modalTypesObject.modal.makeUnactive();
    DB.saveGame(JSON.parse(JSON.stringify(game.currentGameData)));
    return this;
  }

  loadGame() {
    modalTypesObject.modal.makeUnactive();
    loadGameFromDB();
    return this;
  }
}

export function initModalMain(settings, isInitLogin) {
  modalTypesObject.modalLogin = new ModalMain(settings, isInitLogin)
    .getSettings()
    .setSettings()
    .createModalMain();
}
