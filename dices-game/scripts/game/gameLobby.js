/* eslint-disable linebreak-style */
import { game } from "./game.js";
export var gameLobby = null;
import { languages } from "../language.js";

export class GameLobby {
  constructor(settings) {
    this.settings = settings;
    this.language = this.settings[2].settingValue;
    this.langIdx = languages.findIndex(item => item.langName === this.language);
    this.color = this.settings[4].settingValue;
    this.lobbyCloth = null;
    this.lobbyClothContainer = null;
    this.diceCellsSubscription = null;
    this.diceCells = null;
    this.rollDiceArea = null;
    this.rollButton = null;
    this.rollDiceButton = null;
    this.winnerWindow = null;
  }

  renderGameLobby() {
    this.createLobbyCloth();
    this.createLobbyClothContainer();
    this.addLobbyClothContainer();
    this.createDiceCellsSubscriptions();
    this.addDiceCellsSubscriptions();
    this.createDiceCells();
    if (game.savedGameData !== null) {
      this.setSavedDiceCells();
    }
    this.addDiceCells();
    this.createRollDiceArea();
    this.addRollDiceArea();
    if (game.savedGameData !== null) {
      this.setSavedRollDiceArea();
    }
    this.createButtons();
    this.addButtons();
    this.createWinnerWindow();
    this.addWinnerWindow();
    this.setEventListener();
    return this.lobbyCloth;
  }

  createLobbyCloth() {
    const lobbyCloth = document.createElement("div");
    lobbyCloth.setAttribute("data-lobby-cloth", "");
    lobbyCloth.style.background = `url('img/${this.color}.png') center / 90% 90% no-repeat`;
    this.lobbyCloth = lobbyCloth;
  }

  createLobbyClothContainer() {
    const lobbyClothContainer = document.createElement("div");
    lobbyClothContainer.setAttribute("data-lobby-cloth-container", "");
    this.lobbyClothContainer = lobbyClothContainer;
  }

  addLobbyClothContainer() {
    this.lobbyCloth.appendChild(this.lobbyClothContainer);
  }

  createDiceCellsSubscriptions() {
    const diceCellsSubscription = document.createElement("p");
    diceCellsSubscription.setAttribute("data-dice-cells-subscription", "");
    diceCellsSubscription.textContent = `${languages[this.langIdx].gameLobby[0]}`;
    this.diceCellsSubscription = diceCellsSubscription;
  }

  changeLanguageOfDiceCellsSubscription() {
    const diceCellsSubscription = this.diceCellsSubscription;
    diceCellsSubscription.textContent = `${languages[this.langIdx].gameLobby[0]}`;
  }

  addDiceCellsSubscriptions() {
    this.lobbyClothContainer.appendChild(this.diceCellsSubscription);
  }

  createDiceCells() {
    const diceCells = document.createElement("div");
    diceCells.setAttribute("data-dice-cells", "");
    diceCells.innerHTML = "<div data-dice-cell-1></div><div data-dice-cell-2></div><div data-dice-cell-3></div><div data-dice-cell-4></div><div data-dice-cell-5></div>";
    this.diceCells = diceCells;
  }

  setSavedDiceCells() {
    const currentCombination = game.currentGameData.currentCombination;
    const diceCells = this.diceCells.childNodes;
    diceCells.forEach((item, i) => {
      const cell = item;
      cell.attributes[0].nodeValue = currentCombination[i];
    });
  }

  addDiceCells() {
    this.lobbyClothContainer.appendChild(this.diceCells);
  }

  createRollDiceArea() {
    const rollDiceArea = document.createElement("div");
    rollDiceArea.setAttribute("data-roll-dice-area", "");
    rollDiceArea.innerHTML = "<div data-roll-dice-area-1></div><div data-roll-dice-area-2></div><div data-roll-dice-area-3></div><div data-roll-dice-area-4></div><div data-roll-dice-area-5></div>";
    this.rollDiceArea = rollDiceArea;
  }

  setSavedRollDiceArea() {
    const currentDices = game.currentGameData.currentDices;
    const dices = this.rollDiceArea.childNodes;
    dices.forEach((item, i) => {
      const dice = item;
      dice.attributes[0].nodeValue = currentDices[i];
    });
  }

  addRollDiceArea() {
    this.lobbyClothContainer.appendChild(this.rollDiceArea);
  }

  createButtons() {
    const rollButton = document.createElement("div");
    const rollDiceButton = document.createElement("img");
    rollDiceButton.src = "img/roll.svg";
    rollButton.setAttribute("data-roll-btn", "");
    rollDiceButton.setAttribute("data-roll-dice-btn", "");
    rollButton.textContent = `${languages[this.langIdx].gameLobby[1]}`;
    this.rollButton = rollButton;
    this.rollDiceButton = rollDiceButton;
  }

  changeLanguageOfButton() {
    const rollButton = this.rollButton;
    rollButton.textContent = `${languages[this.langIdx].gameLobby[1]}`;
  }

  addButtons() {
    this.lobbyClothContainer.appendChild(this.rollDiceButton);
    this.lobbyClothContainer.appendChild(this.rollButton);
  }

  createWinnerWindow() {
    const winnerWindow = document.createElement("div");
    const winnerWindowContainer = document.createElement("div");
    const winnerCaption = document.createElement("div");
    const winnerName = document.createElement("div");
    const winnerCaptionPoints = document.createElement("div");
    const winnerPoints = document.createElement("div");
    const winnerWord = languages[this.langIdx].winnerWindow[0].split("");
    const pointsWord = languages[this.langIdx].winnerWindow[1].split("");
    winnerWindow.setAttribute("data-winner-window", "");
    winnerWindowContainer.setAttribute("data-winner-window-container", "");
    winnerCaption.setAttribute("data-winner-caption", "");
    winnerName.setAttribute("data-winner-name", "");
    winnerCaptionPoints.setAttribute("data-winner-caption-points", "");
    winnerPoints.setAttribute("data-winner-points", "");
    winnerWord.forEach(item => {
      const letter = item;
      const letterBox = document.createElement("div");
      letterBox.setAttribute("data-letter", `${letter}`);
      winnerCaption.appendChild(letterBox);
    });
    winnerName.textContent = "Name";
    pointsWord.forEach(item => {
      const letter = item;
      const letterBox = document.createElement("div");
      letterBox.setAttribute("data-letter", `${letter}`);
      winnerCaptionPoints.appendChild(letterBox);
    });
    winnerPoints.textContent = "1000";
    winnerWindowContainer.append(winnerCaption, winnerName, winnerCaptionPoints, winnerPoints);
    winnerWindow.append(winnerWindowContainer);
    this.renderWinnerCaption(winnerCaption);
    this.renderWinnerCaption(winnerCaptionPoints);
    this.winnerWindow = winnerWindow;
  }

  renderWinnerCaption(caption) {
    this.caption = caption.childNodes;
    this.caption.forEach(item => {
      const letter = item;
      letter.style.background = "white";
      letter.style.borderRadius = "5px";
      letter.style.color = "black";
      letter.textContent = letter.attributes[0].nodeValue.toUpperCase();
    });
  }

  addWinnerWindow() {
    this.lobbyCloth.appendChild(this.winnerWindow);
  }

  setEventListener() {
    const lobbyCloth = this.lobbyCloth;
    lobbyCloth.addEventListener("click", (e) => {
      if (e.target === document.querySelector("[data-roll-btn]") || e.target === document.querySelector("[data-roll-dice-btn]")) {
        game.rollTheDices();
      }
      if (e.target.style.background !== "" && e.target.style.background !== "none" && e.target.style.background !== undefined) {
        if (e.target.parentNode === document.querySelector("[data-roll-dice-area]")) {
          game.moveDiceToDicesCells(e.target);
        }
        if (e.target.parentNode === document.querySelector("[data-dice-cells]")) {
          game.moveDiceToRollDiceArea(e.target);
        }
      }
    });
  }
}
export function initGameLobby(settings) {
  gameLobby = new GameLobby(settings);
}
