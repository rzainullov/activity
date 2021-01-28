/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import { modalTypesObject } from "../../main.js";
import { Modal } from "./modal.js";
import { ModalMain } from "./modal-main.js";
import { ModalSignup } from "./modal-signup.js";
import { currentLogin } from "../../main.js";
import { loadSettingsFromDB } from "../indexeddb/settings.js";
import { initModalMain } from "./modal-main.js";

export class ModalLogin extends Modal {
  constructor(isInitLogin = true) {
    super();
    this.isInitLogin = isInitLogin;
  }

  onVerifiedLogin() {
    modalTypesObject.modalLogin.checkPlaySound("Success");
    loadSettingsFromDB(initModalMain);
    return this;
  }

  onUnVerifiedLogin() {
    modalTypesObject.modalLogin.checkPlaySound("Error");
    modalTypesObject.modalLogin = new ModalLogin()
      .getSettings()
      .createModalLogin()
      .addErrorMessage();
    return this;
  }

  pushLogin(login, passWord) {
    currentLogin.checkPassword(login, passWord, this.onVerifiedLogin, this.onUnVerifiedLogin);
    return this;
  }

  pushSignup() {
    this.checkPlaySound("Push");
    modalTypesObject.modalSignup = new ModalSignup().getSettings().createModalSignup();
    return this;
  }

  pushBack() {
    this.checkPlaySound("Push");
    modalTypesObject.modalMain = new ModalMain().getSettings().createModalMain();
    return this;
  }

  createModalLogin() {
    this.clearModalArea();
    this.getWords("loginModal");
    this.createLogo();
    this.createWrap();

    const login = this.createInput(2);

    const passWord = this.createInput(3);
    passWord.setAttribute("type", "password");

    const signin = this.createBtn(4);
    signin.addEventListener("click", () => {
      this.pushLogin(login.value, passWord.value);
    });

    const signup = this.createBtn(5);
    signup.addEventListener("click", () => {
      this.pushSignup();
    });

    if (!this.isInitLogin) {
      const back = this.createBtn(6);
      back.addEventListener("click", () => {
        this.pushBack();
      });
    }
    return this;
  }

  addErrorMessage() {
    this.createError(7);
    return this;
  }
}

export function initModalLogin(isInitLogin) {
  modalTypesObject.modalLogin = new ModalLogin(isInitLogin)
    .getSettings()
    .setSettings()
    .createModalLogin();
}
