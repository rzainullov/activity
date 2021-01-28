/* eslint-disable linebreak-style */
export const defaultSettings = {
  playerName: "Player1",
  playerPass: "",
  playerSettings: [
    { settingName: "playersCount", settingValue: "4" },
    { settingName: "playersNames", settingValue: ["Player1", "Player2", "Player3", "Player4"] },
    { settingName: "language", settingValue: "English" },
    { settingName: "sound", settingValue: "on" },
    { settingName: "color", settingValue: "red" }
  ]
};

export const defaultGameSettings = {
  playerName: defaultSettings.playerName,
  playID: "1",
  playBeginDateTime: Date.now(),
  playRound: 1,
  playElapsedTime: null,
  currentPlayer: defaultSettings.playerName,
  currentAttempt: 0,
  currentCombination: ["", "", "", "", ""],
  currentDices: [],
  totalCombination: "",
  settings: defaultSettings,
  players: []
};

export const defaultPlayerData = {
  playerName: defaultSettings.playerName,
  playerCombos: {
    one: { value: 0, accepted: false },
    two: { value: 0, accepted: false },
    three: { value: 0, accepted: false },
    four: { value: 0, accepted: false },
    five: { value: 0, accepted: false },
    six: { value: 0, accepted: false },
    sum: { value: 0, accepted: false },
    smallStraight: { value: 0, accepted: false },
    longStraight: { value: 0, accepted: false },
    fullHouse: { value: 0, accepted: false },
    fourOfKind: { value: 0, accepted: false },
    poker: { value: 0, accepted: false }
  },
  playerTotal: 0
};
