/* eslint-disable linebreak-style */
import { modalTypesObject } from "../../main.js";
import { Modal } from "./modal.js";
import { ModalMain } from "./modal-main.js";
export class ModalSettings extends Modal {
  findSetting(settingName) {
    const setting = this.localSettings.playerSettings.find(el => el.settingName === settingName)
      .settingValue;
    return setting;
  }

  createTextBtn() {
    const textBtn = document.createElement("div");
    textBtn.classList.add("modal__text-item");
    this.wrap.appendChild(textBtn);
    return textBtn;
  }

  createModalSettings() {
    this.clearModalArea();
    this.getWords("settingModal");
    this.createLogo();
    this.createWrap();

    const wrapPlayers = this.createTextBtn();
    let playersCount = this.findSetting("playersCount");
    wrapPlayers.innerText = `${this.wordsArr[2]} ${playersCount}`;

    const wrapNames = document.createElement("div");
    wrapNames.classList.add("modal__wrap-names");
    this.wrap.appendChild(wrapNames);
    const playersNames = this.findSetting("playersNames");
    const createAreaForNames = () => {
      wrapNames.innerHTML = "";
      const namesInput = [];
      for (let i = 0; i < +playersCount; i += 1) {
        namesInput[i] = document.createElement("textarea");
        namesInput[i].classList.add("modal__names");
        namesInput[i].value = playersNames[i] || `Player ${i + 1}`;
        playersNames[i] = namesInput[i].value;
        namesInput[i].addEventListener("blur", () => {
          playersNames[i] = namesInput[i].value;
        });
        wrapNames.appendChild(namesInput[i]);
      }
      const maxPlayersCount = 4;
      playersNames.splice(playersCount, maxPlayersCount);
    };
    createAreaForNames();
    wrapPlayers.addEventListener("click", () => {
      this.checkPlaySound("Push");
      playersCount = (playersCount % 4) + 1;
      wrapPlayers.innerText = `${this.wordsArr[2]} ${playersCount}`;
      this.localSettings.playerSettings.find(el => el.settingName === "playersCount").settingValue = playersCount;
      createAreaForNames();
    });

    const wrapLanguage = this.createTextBtn();
    let languageType = this.findSetting("language");
    wrapLanguage.innerText = `${this.wordsArr[3]} ${languageType}`;
    const nextLanguage = () => {
      const languages = ["English", "Russian", "Italian"];
      const currentLanguageIndex = languages.indexOf(languageType);
      const languagesCount = 3;
      languageType = languages[(currentLanguageIndex + 1) % languagesCount];
    };
    wrapLanguage.addEventListener("click", () => {
      this.checkPlaySound("Push");
      nextLanguage();
      wrapLanguage.innerText = `${this.wordsArr[3]} ${languageType}`;
      this.localSettings.playerSettings.find(el => el.settingName === "language").settingValue = languageType;
    });

    const wrapSound = this.createTextBtn();
    let soundType = this.findSetting("sound");
    wrapSound.innerText = `${this.wordsArr[4]} ${soundType}`;
    wrapSound.addEventListener("click", () => {
      this.checkPlaySound("Push");
      soundType = soundType === "on" ? "off" : "on";
      wrapSound.innerText = `${this.wordsArr[4]} ${soundType}`;
      this.localSettings.playerSettings.find(el => el.settingName === "sound").settingValue = soundType;
    });

    const wrapColor = this.createTextBtn();
    let colorType = this.findSetting("color");
    wrapColor.innerText = `${this.wordsArr[5]} ${colorType}`;
    wrapColor.addEventListener("click", () => {
      this.checkPlaySound("Push");
      colorType = colorType === "red" ? "green" : "red";
      wrapColor.innerText = `${this.wordsArr[5]} ${colorType}`;
      this.localSettings.playerSettings.find(el => el.settingName === "color").settingValue = colorType;
    });

    const saveSettingsBtn = this.createBtn(6);
    saveSettingsBtn.addEventListener("click", () => {
      this.checkPlaySound("Push");
      this.setSettings();
      modalTypesObject.modalSettings = new ModalSettings().getSettings().createModalSettings();
    });

    const backSettings = this.createBtn(7);
    backSettings.addEventListener("click", () => {
      this.checkPlaySound("Push");
      modalTypesObject.modalMain = new ModalMain().getSettings().createModalMain();
    });
    return this;
  }
}
