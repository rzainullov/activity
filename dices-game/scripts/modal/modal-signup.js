/* eslint-disable linebreak-style */
import { currentLogin, modalTypesObject } from "../../main.js";
import { Modal } from "./modal.js";
import { ModalLogin } from "./modal-login.js";

export class ModalSignup extends Modal {
  constructor() {
    super();
  }

  onSuccsessSignUp() {
    modalTypesObject.modalSignup.checkPlaySound("Success");
    modalTypesObject.modalLogin = new ModalLogin()
      .getSettings()
      .createModalLogin();
    return this;
  }

  onErrorSignUp() {
    modalTypesObject.modalSignup.checkPlaySound("Error");
    modalTypesObject.modalSignup = new ModalSignup()
      .getSettings()
      .createModalSignup()
      .addErrorMessage();
    return this;
  }

  pushSignup(password1, password2, login) {
    const isPasswordsEqual = password1 === password2;
    if (isPasswordsEqual) {
      currentLogin.saveLogin(login, password1, this.onErrorSignUp, this.onSuccsessSignUp);
    } else {
      this.onErrorSignUp();
    }
    return this;
  }

  pushBack() {
    modalTypesObject.modalLogin = new ModalLogin()
      .getSettings()
      .createModalLogin();
    return this;
  }

  createModalSignup() {
    this.clearModalArea();
    this.getWords("signupModal");
    this.createLogo();
    this.createWrap();

    const login = this.createInput(2);

    const passWord = this.createInput(3);
    passWord.setAttribute("type", "password");

    const repeatPassWord = this.createInput(4);
    repeatPassWord.setAttribute("type", "password");

    const signup = this.createBtn(5);
    signup.addEventListener("click", () => {
      this.pushSignup(passWord.value, repeatPassWord.value, login.value);
    });

    const back = this.createBtn(6);
    back.addEventListener("click", () => {
      this.pushBack();
    });
    return this;
  }

  addErrorMessage() {
    this.createError(7);
    return this;
  }
}
