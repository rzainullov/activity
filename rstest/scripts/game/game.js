/* eslint-disable linebreak-style */
import { initGameArea } from "./gameArea.js";
import { gameLobby } from "./gameLobby.js";
import { scoresSheet } from "./scoresSheet.js";
import { languages } from "../language.js";
import { defaultGameSettings } from "../default.js";
import { defaultPlayerData } from "../default.js";
import { audioAPI, globalSettings } from "../../main.js";
import { currentLogin } from "../../main.js";
import { DB } from "../../main.js";

export function loadGameFromLocalStorage() {
  return JSON.parse(localStorage.getItem("game")) || defaultGameSettings;
}

export function loadGameFromDB() {
  let loadGame = DB.loadGame(currentLogin.playerName);
  loadGame
    .then((loadedGame) => {
      initGame(globalSettings.getSettings(), loadedGame);
    })
    .catch((error) => {
      console.log(error);
    });
}

export var game = null;
const setHotKeys = (e) => {
  const keys = {
    " ": () => game.rollTheDices(),
    1: () => scoresSheet.acceptCombination(scoresSheet.currentColumn.childNodes[1]),
    2: () => scoresSheet.acceptCombination(scoresSheet.currentColumn.childNodes[2]),
    3: () => scoresSheet.acceptCombination(scoresSheet.currentColumn.childNodes[3]),
    4: () => scoresSheet.acceptCombination(scoresSheet.currentColumn.childNodes[4]),
    5: () => scoresSheet.acceptCombination(scoresSheet.currentColumn.childNodes[5]),
    6: () => scoresSheet.acceptCombination(scoresSheet.currentColumn.childNodes[6]),
    7: () => scoresSheet.acceptCombination(scoresSheet.currentColumn.childNodes[7]),
    8: () => scoresSheet.acceptCombination(scoresSheet.currentColumn.childNodes[8]),
    9: () => scoresSheet.acceptCombination(scoresSheet.currentColumn.childNodes[9]),
    0: () => scoresSheet.acceptCombination(scoresSheet.currentColumn.childNodes[10]),
    "-": () => scoresSheet.acceptCombination(scoresSheet.currentColumn.childNodes[11]),
    "=": () => scoresSheet.acceptCombination(scoresSheet.currentColumn.childNodes[12])
  };
  var pushTarget = () => keys[e.key]();
  var isKey = Object.prototype.hasOwnProperty.call(keys, e.key);
  if (isKey) {
    pushTarget();
  }
};

export class Game {
  constructor(settings, savedGame = null) {
    this.settings = settings.playerSettings;
    this.players = this.settings[1].settingValue;
    this.language = this.settings[2].settingValue;
    this.langIdx = languages.findIndex(item => item.langName === this.language);
    this.savedGameData = savedGame === null ? null : savedGame;
    this.currentGameData = null;
    this.lastEmptyRollDiceArea = [];
    this.templateGameData = defaultGameSettings;
    this.templatePlayerData = defaultPlayerData;
    this.templateGameData.playerName = currentLogin.playerName;
  }

  createNewGameArea() {
    if (this.savedGameData === null) {
      this.createNewGame(this.templateGameData, this.templatePlayerData);
      initGameArea(this.settings, this.currentGameData);
      scoresSheet.markCurrentPlayer();
      this.setEventListener();
    } else {
      this.players = this.settings[1].settingValue;
      this.currentGameData = this.savedGameData;
      initGameArea(this.settings, this.savedGameData);      
      this.restoreSavedGame();
      scoresSheet.markCurrentPlayer();
      this.setEventListener();
    }
  }

  createNewGame(gameData, playerData) {
    this.currentGameData = JSON.parse(JSON.stringify(gameData));
    this.setCurrentPlayer();
    this.players.forEach(player => {
      let currentPlayer = JSON.parse(JSON.stringify(playerData));
      currentPlayer.playerName = player;
      this.currentGameData.players.push(currentPlayer);
    });
  }

  setCurrentPlayer() {
    if (this.savedGameData === null) {
      const currentPlayer = this.players[0];
      this.currentGameData.currentPlayer = currentPlayer;
    } else {
      this.currentGameData.currentPlayer = this.savedGameData.currentPlayer;
    }
  }

  getRandomInt(min, max) {
    this.min = Math.ceil(min);
    this.max = Math.floor(max);
    return Math.floor(Math.random() * (this.max - this.min)) + min;
  }

  restoreSavedGame() {
    if (game.currentGameData.currentAttempt === 3 && this.currentCombinationIsChosen === false) {
      return null;
    }
    const rollDiceArea = document.querySelector("[data-roll-dice-area]").childNodes;
    rollDiceArea.forEach((item) => {
      let area = item;
      if (area.attributes[0].nodeValue !== "") {
        area.style.background = `url('img/game/dice-${area.attributes[0].nodeValue}.png') center / cover no-repeat `;
      }
    });
    const diceCells = gameLobby.diceCells.childNodes;
    diceCells.forEach((item) => {
      const cell = item;
      if (cell.attributes[0].nodeValue !== "") {
        cell.style.background = `url('img/game/dice-${cell.attributes[0].nodeValue}.png ') center / cover no-repeat `;
      }
    });
    if (this.findFirstFreeCellInDiceCells() !== (-1)) {
      this.getCurrentDices();
      this.getTotalCombination();
      scoresSheet.updateScoresSheet(this.currentGameData.totalCombination);
    }
    scoresSheet.putValuesInTable(this.currentGameData.currentPlayer);
    game.currentCombinationIsChosen = false;
    return this;
  }

  rollTheDices() {
    if (this.isGameFinished) {
      return null;
    }
    this.checkPlaySound("A1");
    if (game.currentGameData.currentAttempt === 3 && this.currentCombinationIsChosen === false) {
      return null;
    }
    const dices = document.querySelector("[data-roll-dice-area]").childNodes;
    dices.forEach((item, i) => {
      let dice = item;
      let randomNum = this.getRandomInt(1, 7);
      if (dice.attributes[0].nodeValue === "" && this.currentGameData.currentAttempt !== 0) {
        dice.setAttribute(`data-roll-dice-area-${i + 1}`, "");
        dice.style.background = "none";
      } else {
        dice.setAttribute(`data-roll-dice-area-${i + 1}`, `${randomNum}`);
        dice.style.background = `url('img/game/dice-${randomNum}.png') center / cover no-repeat `;
      }
    });
    if (this.findFirstFreeCellInDiceCells() !== (-1)) {
      this.initNextAttempt();
      this.getCurrentDices();
      this.getTotalCombination();
      scoresSheet.updateScoresSheet(this.currentGameData.totalCombination);
    }
    scoresSheet.putValuesInTable(this.currentGameData.currentPlayer);
    game.currentCombinationIsChosen = false;
    return this;
  }

  clearRollDiceArea() {
    this.dices = document.querySelector("[data-roll-dice-area]").childNodes;
    this.dices.forEach((dice, i) => {
      this.dice = dice;
      this.dice.setAttribute(`data-roll-dice-area-${i + 1}`, "");
      this.dice.style.background = "none";
    });
  }

  clearDiceCells() {
    this.dices = document.querySelector("[data-dice-cells]").childNodes;
    this.dices.forEach((item, i) => {
      let dice = item;
      dice.setAttribute(`data-dice-cell-${i + 1}`, "");
      dice.style.background = "none";
    });
  }

  initNextAttempt() {
    if (this.currentGameData.currentAttempt <= 3) {
      this.currentGameData.currentAttempt += 1;
    }
    if (this.currentGameData.currentAttempt === 4) {
      if (this.currentGameData.currentPlayer === this.players[this.players.length - 1]) {
        this.changeCurrentRound();
        this.currentGameData.currentPlayer = this.players[-1];
      }
      this.currentGameData.currentAttempt = 0;
      this.clearRollDiceArea();
      this.changeCurrentPlayer();
    }
    this.changeCurrentAttemptIndicator();
  }

  changeCurrentPlayer() {
    if (this.isGameFinished) {
      this.currentGameData.currentPlayer = "-";
      scoresSheet.changeIndicator("data-current-player-indicator", `${languages[this.langIdx].scoresSheet[1]}:${this.currentGameData.currentPlayer}`);
      return;
    }
    const currentPlayer = this.currentGameData.currentPlayer;
    const players = this.currentGameData.players;
    const indexPlayer = players.findIndex(player => player.playerName === currentPlayer);
    this.currentGameData.currentPlayer = this.currentGameData.players[indexPlayer + 1].playerName;
    scoresSheet.markCurrentPlayer();
    scoresSheet.changeIndicator("data-current-player-indicator", `${languages[this.langIdx].scoresSheet[1]}:${this.currentGameData.currentPlayer}`);
  }

  changeCurrentAttemptIndicator() {
    scoresSheet.changeIndicator("data-current-attempt-indicator", `${languages[this.langIdx].scoresSheet[2]}:${this.currentGameData.currentAttempt}`);
  }

  changeCurrentRound() {
    this.currentGameData.playRound += 1;
    if (this.currentGameData.playRound === 13) {
      this.finishGame();
      this.currentGameData.playRound = "-";
      scoresSheet.changeIndicator("data-current-round-indicator", `${languages[this.langIdx].scoresSheet[0]}:${this.currentGameData.playRound}`);
      return;
    }
    scoresSheet.changeIndicator("data-current-round-indicator", `${languages[this.langIdx].scoresSheet[0]}:${this.currentGameData.playRound}`);
  }

  getCurrentDices() {
    const dices = document.querySelector("[data-roll-dice-area]").childNodes;
    this.currentGameData.currentDices = [];
    dices.forEach((dice, i) => {
      this.currentGameData.currentDices.push(dice.getAttribute(`data-roll-dice-area-${i + 1}`));
    });
    this.currentGameData.currentDices.sort((a, b) => a - b);
  }

  getCurrentCombination() {
    const dices = document.querySelector("[data-dice-cells]").childNodes;
    this.currentGameData.currentCombination = [];
    dices.forEach((dice, i) => {
      this.currentGameData.currentCombination.push(dice.getAttribute(`data-dice-cell-${i + 1}`));
    });
  }

  getTotalCombination() {
    const currentCombination = this.currentGameData.currentCombination;
    const totalCombination = currentCombination.concat(this.currentGameData.currentDices);
    this.currentGameData.totalCombination = totalCombination.filter(dice => dice !== "");
  }

  moveDiceToDicesCells(target) {
    this.checkPlaySound("A2");
    this.putChosenDiceInFreeDiceCell(target);
    this.removeOneDice(target);
  }

  moveDiceToRollDiceArea(target) {
    this.checkPlaySound("A1");
    this.putChosenDiceInRollDiceArea(target);
    this.removeOneDice(target);
  }

  getDiceValueFromChosenDice(target) {
    this.diceValue = target.attributes[0].nodeValue;
    return this.diceValue;
  }

  findFirstFreeCellInDiceCells() {
    this.diceCells = gameLobby.diceCells;
    this.diceCellsNodes = this.diceCells.childNodes;
    this.diceCellsValues = [];
    this.diceCellsNodes.forEach((node) => {
      this.diceCellsValues.push(node);
    });
    return this.diceCellsValues.findIndex(item => item.attributes[0].nodeValue === "");
  }

  putChosenDiceInFreeDiceCell(target) {
    const freeCell = this.findFirstFreeCellInDiceCells();
    const value = this.getDiceValueFromChosenDice(target);
    const diceCells = gameLobby.diceCells;
    diceCells.childNodes[freeCell].setAttribute(`data-dice-cell-${freeCell + 1}`, `${value}`);
    diceCells.childNodes[freeCell].style.background = `url('img/game/dice-${value}.png ') center / cover no-repeat `;
    this.getCurrentCombination();
  }

  putChosenDiceInRollDiceArea(target) {
    var freeCell = this.lastEmptyRollDiceArea.pop();
    if (freeCell === undefined) {
      gameLobby.rollDiceArea.childNodes.forEach(item => {
        if (item.attributes[0].nodeValue === "") {
          freeCell = item.attributes[0].name;
        }
      });
    }
    const value = this.getDiceValueFromChosenDice(target);
    this.target = target;
    this.target.attributes[0].nodeValue = "";
    const rollDiceArea = document.querySelector(`[${freeCell}]`);
    rollDiceArea.attributes[0].nodeValue = value;
    rollDiceArea.style.background = `url('img/game/dice-${value}.png') center / cover no-repeat `;
    this.getCurrentCombination();
  }

  removeOneDice(target) {
    this.target = target;
    this.target.attributes[0].nodeValue = "";
    this.target.style.background = "none";
    this.getCurrentDices();
    if (target.parentNode === document.querySelector("[data-roll-dice-area]")) {
      this.lastEmptyRollDiceArea.push(target.attributes[0].name);
    }
  }

  finishGame() {
    this.isGameFinished = true;
    this.scoresSheet = scoresSheet;
    this.scoresSheet.getTotal();
    const totalNodes = document.querySelectorAll("[data-player-prop=\"Total\"]");
    const totals = [];
    totalNodes.forEach(item => {
      const node = item;
      totals.push(node.textContent);
    });
    const winnerTotal = totals.sort((a, b) => a - b).reverse()[0];
    const winner = [];
    const players = document.querySelectorAll("[data-player-column]");
    players.forEach(item => {
      const player = item;
      const playerProps = player.childNodes;
      if (playerProps[playerProps.length - 1].textContent === winnerTotal) {
        winner.push(playerProps[0].textContent);
      }
    });
    const winnerName = document.querySelector("[data-winner-name]");
    winnerName.textContent = winner.join();
    const winnerPoints = document.querySelector("[data-winner-points]");
    winnerPoints.textContent = winnerTotal;
    gameLobby.winnerWindow.style.display = "block";
  }

  checkPlaySound(note) {
    const isAudioOn = this.settings[3].settingValue === "on";
    if (isAudioOn) {
      audioAPI.playNote(note);
    }
  }

  setEventListener() {
    this.window = window;
    this.window.addEventListener("keypress", setHotKeys, false);
  }
}

export function initGame(settings, savedGame = null) {
  const main = document.querySelector("[data-main]");
  main.innerHTML = "";
  game = new Game(settings, savedGame);
  game.createNewGameArea();
}
