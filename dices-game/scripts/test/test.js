/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable func-names */
import { audioAPI } from "../../main.js";
import { checkElements } from "./check-size.js";
import { checkSettings } from "./check-settings.js";

/** Settings */
describe("Проверка настроек", function () {
  it("Объект с настройками создан", function () {
    assert.equal(typeof checkSettings.settings, "object");
  });
  it("Есть имя пользователя", function () {
    assert.equal(checkSettings.checkPlayerName(), true);
  });
  it("Есть пароль", function () {
    assert.equal(checkSettings.checkPlayerPass(), true);
  });
  it("Верное количество игроков", function () {
    assert.equal(checkSettings.checkPlayersCount(), true);
  });
  it("Верное количество имен игроков", function () {
    assert.equal(checkSettings.checkPlayersNames(), true);
  });
  it("Верный язык", function () {
    assert.equal(checkSettings.checkLanguage(), true);
  });
  it("Верная настройка для аудио", function () {
    assert.equal(checkSettings.checkSound(), true);
  });
  it("Верная настройка для цвета", function () {
    assert.equal(checkSettings.checkColor(), true);
  });
});

/** Audio */
describe("Проверка аудио", function () {
  it("Нота А0 сыграла", function () {
    assert.equal(audioAPI.playNote("A0"), undefined);
  });
  it("Нота А1 сыграла", function () {
    assert.equal(audioAPI.playNote("A1"), undefined);
  });
  it("Нота А2 сыграла", function () {
    assert.equal(audioAPI.playNote("A2"), undefined);
  });
  it("Нота А3 сыграла", function () {
    assert.equal(audioAPI.playNote("A3"), undefined);
  });
  it("Нота А4 сыграла", function () {
    assert.equal(audioAPI.playNote("A4"), undefined);
  });
  it("Нота А5 сыграла", function () {
    assert.equal(audioAPI.playNote("A5"), undefined);
  });
  it("Нота А6 сыграла", function () {
    assert.equal(audioAPI.playNote("A6"), undefined);
  });
  it("Нота А7 сыграла", function () {
    assert.equal(audioAPI.playNote("A7"), undefined);
  });
});

/** Elements sizes */
describe("Размеры хидера", function () {
  it("Ширина хидера не искажается", function () {
    assert.equal(checkElements.checkHeaderWidth(), document.documentElement.scrollWidth);
  });
  it("Высота хидера не искажается", function () {
    assert.equal(checkElements.checkHeaderHeight(), 50);
  });
});
describe("Размеры главного блока", function () {
  it("Ширина главного блока не искажается", function () {
    assert.equal(checkElements.checkMainWidth(), document.documentElement.scrollWidth);
  });
  it("Высота главного блока не искажается", function () {
    assert.equal(checkElements.checkMainHeight(), document.documentElement.clientHeight - 120);
  });
});
describe("Размеры футера", function () {
  it("Ширина футера не искажается", function () {
    assert.equal(checkElements.checkFooterWidth(), document.documentElement.scrollWidth);
  });
  it("Высота футера не искажается", function () {
    assert.equal(checkElements.checkFooterHeight(), 70);
  });
});
