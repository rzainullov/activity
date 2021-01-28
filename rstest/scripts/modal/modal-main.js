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

    const wrapNewGame = this.createBtn(2);
    wrapNewGame.addEventListener("click", () => {
      this.checkPlaySound("Push");
      this.newGame();
    });

    const wrapSaveGame = this.createBtn(3);
    wrapSaveGame.addEventListener("click", () => {
      this.checkPlaySound("Push");
      this.saveGame();
    });

    const wrapLoadGame = this.createBtn(4);
    wrapLoadGame.addEventListener("click", () => {
      this.checkPlaySound("Push");
      this.loadGame();
    });

    const wrapSettings = this.createBtn(5);
    wrapSettings.addEventListener("click", () => {
      this.checkPlaySound("Push");
      modalTypesObject.modalSettings = new ModalSettings().getSettings().createModalSettings();
    });

    const wrapLogin = this.createBtn(6);
    wrapLogin.addEventListener("click", () => {
      this.checkPlaySound("Push");
      modalTypesObject.modalLogin = new ModalLogin(false).getSettings().createModalLogin();
    });

    const wrapRules = this.createBtn(7);
    wrapRules.addEventListener("click", () => {
      this.checkPlaySound("Push");
      modalTypesObject.modalRules = new ModalRules().getSettings().createModalRules();
    });
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
