/* eslint-disable linebreak-style */
// Это для примера. За ненадобностью можно удалить файл
// Объект игры для сохранения необходимо забирать отсюда: game.currentGameData
const savedGame = {
  playerName: "Player1",
  playID: "1",
  playBeginDateTime: null,
  playRound: 2,
  playElapsedTime: null,
  currentPlayer: "Rashid",
  currentAttempt: 1,
  currentCombination: ["1", "2", "1", "2", ""],
  currentDices: ["", "", "", "", "6"],
  totalCombination: ["1", "2", "1", "2", "6"],
  players: [
    {
      playerName: "Holly",
      playerCombos: {
        one: { value: 0, accepted: true },
        two: { value: 0, accepted: false },
        three: { value: 0, accepted: false },
        four: { value: 0, accepted: false },
        five: { value: 0, accepted: false },
        six: { value: 0, accepted: false },
        sum: { value: 0, accepted: false },
        smallStraight: { value: 25, accepted: true },
        longStraight: { value: 0, accepted: false },
        fullHouse: { value: 0, accepted: false },
        fourOfKind: { value: 0, accepted: false },
        poker: { value: 0, accepted: false }
      },
      playerTotal: 0
    },
    {
      playerName: "Rashid",
      playerCombos: {
        one: {
          value: 0,
          accepted: false
        },
        two: { value: 0, accepted: false },
        three: { value: 0, accepted: false },
        four: { value: 0, accepted: false },
        five: { value: 0, accepted: false },
        six: { value: 0, accepted: false },
        sum: { value: 0, accepted: false },
        smallStraight: { value: 25, accepted: true },
        longStraight: { value: 0, accepted: false },
        fullHouse: { value: 0, accepted: false },
        fourOfKind: { value: 0, accepted: false },
        poker: { value: 0, accepted: false }
      },
      playerTotal: 0
    }
  ]
};
