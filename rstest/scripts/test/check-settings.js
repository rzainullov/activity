/* eslint-disable linebreak-style */
export const checkSettings = {
  settings: JSON.parse(localStorage.getItem("settings")),
  checkPlayerName() {
    return Boolean(this.settings.playerName);
  },
  checkPlayerPass() {
    return Boolean(this.settings.playerPass);
  },
  findSetting(settingName) {
    return this.settings.playerSettings.find(el => el.settingName === settingName).settingValue;
  },
  checkPlayersCount() {
    const playersCount = this.findSetting("playersCount");
    const isPlayersCountCorrect = (playersCount >= 1) && (playersCount <= 4);
    return isPlayersCountCorrect;
  },
  checkPlayersNames() {
    const playersNamesCount = this.findSetting("playersNames").length;
    const isNamesCountCorrect = (playersNamesCount >= 1) && (playersNamesCount <= 4);
    return isNamesCountCorrect;
  },
  checkLanguage() {
    const language = this.findSetting("language");
    const isLanguageCorrect = (language === "English") || (language === "Russian") || (language === "Italian");
    return isLanguageCorrect;
  },
  checkSound() {
    const sound = this.findSetting("sound");
    const isSoundCorrect = (sound === "on") || (sound === "off");
    return isSoundCorrect;
  },
  checkColor() {
    const color = this.findSetting("color");
    const isColorCorrect = (color === "green") || (color === "red");
    return isColorCorrect;
  }
};
