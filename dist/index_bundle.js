/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app/1modul/modul1task1-0/1(0)-1.js":
/*!********************************************!*\
  !*** ./app/1modul/modul1task1-0/1(0)-1.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTaskWords": () => (/* binding */ getTaskWords)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./app/functions.js");
/* harmony import */ var _1_0_1_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1(0)-1.css */ "./app/1modul/modul1task1-0/1(0)-1.css");


let words = [{
  word: "синица",
  mean: "птица"
}, {
  word: "береза",
  mean: "дерево"
}, {
  word: "сапоги",
  mean: "обувь"
}, {
  word: "апельсин",
  mean: "фрукт"
}, {
  word: "фиалка",
  mean: "цветок"
}, {
  word: "лодка",
  mean: "средство передвижения"
}, {
  word: "вельвет",
  mean: "ткань"
}, {
  word: "теннис",
  mean: "спорт"
}, {
  word: "озеро",
  mean: "водоем"
}, {
  word: "кровать",
  mean: "мебель"
}, {
  word: "листопад",
  mean: "осень"
}, {
  word: "дворец",
  mean: "здание"
}];
class TaskWords {
  open() {
    this.render();
    this.addListener();
  }
  render() {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.pageFrame)();
    let page = document.querySelector('.page__content');
    this.elem = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: page,
      className: 'task1-0__wrapper'
    });
    this.note = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.elem,
      className: 'task1-0__note'
    });
    let explanationHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.note,
      className: 'task1-0__explanationHolder'
    });
    this.wordExplanation = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h2",
      parent: explanationHolder,
      className: 'task1-0__text'
    });

    // wordExplanation.innerHTML = `${words.mean}`
    this.wordExplanation.innerHTML = 'Внимательно прочитайте вслух и запомните следующие слова. Как будете готовы, нажмите кнопку «Далее»:';
    this.wordsWrapper = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "form",
      parent: this.elem,
      className: 'task1-0__wordsWrapper'
    });
    for (let a of words) {
      this.wordsWrapper.insertAdjacentHTML('beforeEnd', `<div class='task1__wordHolder'><input type = "radio" name="words" data-mean='${a.mean}' id = ${a.word} disabled="disabled"> <label class="task1_label" for=${a.mean} id = ${a.mean}>${a.word}</label></div>`);
    }
    this.button = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.note,
      className: 'button1__futher'
    });
    this.button.innerHTML = 'Далее';
  }
  addListener() {
    this.button.addEventListener('click', event => {
      location.hash = '/module-1/task1-1';
    });
  }
}
let taskWords;
const getTaskWords = () => {
  if (!taskWords) {
    taskWords = new TaskWords();
  }
  return taskWords;
};

/***/ }),

/***/ "./app/1modul/modul1task1-2/1(2)-1.js":
/*!********************************************!*\
  !*** ./app/1modul/modul1task1-2/1(2)-1.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getPrintWords": () => (/* binding */ getPrintWords)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./app/functions.js");
/* harmony import */ var _1_2_1_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1(2)-1.css */ "./app/1modul/modul1task1-2/1(2)-1.css");


let words = [{
  word: "синица",
  mean: "птица"
}, {
  word: "береза",
  mean: "дерево"
}, {
  word: "сапоги",
  mean: "обувь"
}, {
  word: "апельсин",
  mean: "фрукт"
}, {
  word: "фиалка",
  mean: "цветок"
}, {
  word: "лодка",
  mean: "средство передвижения"
}, {
  word: "вельвет",
  mean: "ткань"
}, {
  word: "теннис",
  mean: "спорт"
}, {
  word: "озеро",
  mean: "водоем"
}, {
  word: "кровать",
  mean: "мебель"
}, {
  word: "листопад",
  mean: "осень"
}, {
  word: "дворец",
  mean: "здание"
}];
class PrintWords {
  open() {
    this.init();
    this.render();
    this.n = 0;
    this.addListener();
  }
  init() {
    this.correctWords = createCorrectWords();
  }
  render() {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.pageFrame)();
    let page = document.querySelector('.page__content');
    let elem = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: page,
      className: 'task1__wrapper'
    });
    let explanationWrapper = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: elem,
      className: 'task1__explanationWrapper'
    });
    let note = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: explanationWrapper,
      className: 'task1__note'
    });
    let explanationHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: note,
      className: 'explanationHolder'
    });
    explanationHolder.innerHTML = 'Вспомните все слова, которые Вы запомнили! Напишите их в рамки через Enter';
    this.wordsWrapper = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "form",
      parent: elem,
      className: 'task1__wordsWrapper'
    });
    for (let a of words) {
      this.wordsWrapper.insertAdjacentHTML('beforeEnd', '<input type = "text" placeholder="Введите слово" class = "active" name="word" autocomplete="off">');
    }
    this.buttonFinish = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: explanationWrapper,
      className: 'task1__button'
    });
    this.buttonFinish.innerHTML = "Закончил! Больше не помню";
  }
  addListener() {
    this.wordsWrapper.addEventListener('keydown', event => {
      if (event.code === 'Enter') {
        // подсчитать число инпутов
        this.n++;
        //поле в которое вводили заблокировать для введения, добавть серую окраску бордера
        event.target.disabled = true;
        event.target.style.borderColor = "gray";
      }
      this.check();
    });
    this.buttonFinish.addEventListener('click', event => {
      let inputs = document.querySelectorAll('.active');
      //   console.log(inputs) 
      for (let a of inputs) {
        for (let i = 0; i < this.correctWords.length; i++) {
          if (this.correctWords[i].enterWord.includes(a.value)) {
            (0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTask1Plus)();
            this.correctWords.splice(i, 1);
            i--;
          }
        }
      }
      location.hash = '/module-1/task2-1';

      // console.log(scoreGet())
    });
  }

  check() {
    if (this.n == 12) {
      this.buttonFinish.innerHTML = "";
      this.buttonFinish.innerHTML = "Закончил! Далее";
    }
    // for (let i = 0; i < )
  }
}

function createCorrectWords() {
  return [{
    enterWord: ["синица", "сеница"]
  }, {
    enterWord: ["береза", "берёза", "биреза", "бирёза"]
  }, {
    enterWord: ["сапоги", "сапоги"]
  }, {
    enterWord: ["фиалка", "феалка"]
  }, {
    enterWord: ["лодка", "лотка"]
  }, {
    enterWord: ["вельвет", "вильвет"]
  }, {
    enterWord: ["теннис", "тенис"]
  }, {
    enterWord: ["озеро", "озиро"]
  }, {
    enterWord: ["кровать", "кравать"]
  }, {
    enterWord: ["листопад", "листапад", "лестопад", "лестапад"]
  }, {
    enterWord: ["дворец", "дварец"]
  }, {
    enterWord: ["апельсин", "апильсин"]
  }];
}

//дано 12 слов - введеные
// по 2-3 варианта слова для проверки введенных слов
// найти совпадение, количество правильных ответов
// сгруппировать предложенные к каждому слову варианты, при совпадении с одним из введенных вариантов, остальные исключть из решения 
// 

let printWords;
const getPrintWords = () => {
  if (!printWords) {
    printWords = new PrintWords();
  }
  return printWords;
};

/***/ }),

/***/ "./app/1modul/modul1task1-instruction/1(inst)-1.js":
/*!*********************************************************!*\
  !*** ./app/1modul/modul1task1-instruction/1(inst)-1.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getTaskInstruction": () => (/* binding */ getTaskInstruction)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./app/functions.js");
/* harmony import */ var _1_inst_1_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1(inst)-1.css */ "./app/1modul/modul1task1-instruction/1(inst)-1.css");



// let words = [
//     {
//         word: "синица",
//         mean: "птица",
//     },
//     {
//         word: "береза",
//         mean: "дерево",
//     },
//     {
//         word: "сапоги",
//         mean: "обувь",
//     },
//     {
//         word: "апельсин",
//         mean: "фрукт",
//     },
//     {
//         word: "фиалка",
//         mean: "цветок",
//     },
//     {
//         word: "лодка",
//         mean: "средство передвижения",
//     },
//     {
//         word: "вельвет",
//         mean: "ткань",
//     },
//     {
//         word: "теннис",
//         mean: "спорт",
//     },
//     {
//         word: "озеро",
//         mean: "водоем",
//     },
//     {
//         word: "кровать",
//         mean: "мебель",
//     },
//     {
//         word: "листопад",
//         mean: "осень",
//     },
//     {
//         word: "дворец",
//         mean: "здание",
//     },
// ]
class TaskInstruction {
  open() {
    this.render();
    this.addListener();
  }
  render() {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.pageFrame)();
    let page = document.querySelector('.page__content');
    let instructionHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: page,
      className: 'instructionHolder1'
    });
    let imgInst = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: instructionHolder,
      className: 'instructionHolder__imgInst1'
    });
    let imageHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: imgInst,
      className: 'leftPanel__imageHolder1'
    });
    imageHolder.innerHTML = '<img src="./img/firstpage/modul1.png" width=150px height=170px>';
    this.textInst = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h2",
      parent: imgInst,
      className: 'leftPanel__textInst1'
    });
    this.textInst.innerHTML = "Инструкция";
    let textH1 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h1",
      parent: instructionHolder,
      className: 'leftPanel__textH1-1'
    });
    textH1.innerHTML = "Диагностика";
    let text = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h3",
      parent: instructionHolder,
      className: 'leftPanel__text1'
    });
    text.innerHTML = 'Обратите внимание! Тестирование занимает до 30 минут. В это время необходимо сконцентрироваться на заданиях теста. Пожалуйста, освободите достаточное количество времени и попросите окружающих Вас не отвлекать. Удачи!';

    // let rightPanel = tag({tag: "div", parent: instructionHolder, className: 'instructionHolder__righnPanel'})

    this.button = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: instructionHolder,
      className: 'button__ready1'
    });
    this.button.innerHTML = 'Я готов! Начинаем';

    // this.elem = tag({tag: "div", parent: document.body, className: 'task1__wrapper'})

    // this.note = tag({tag: "div", parent: this.elem, className: 'task1__note'})

    // let explanationHolder = tag({tag: "div", parent: this.note, className: 'explanationHolder'})

    // this.wordExplanation = tag({tag: "h2", parent: explanationHolder, className: 'task1__text current '})

    // // wordExplanation.innerHTML = `${words.mean}`
    // this.wordExplanation.innerHTML = 'Внимательно прочитайте вслух и запомните следующие слова. Как будете готовы, нажмите кнопку «Далее»:'

    // this.wordsWrapper = tag({tag: "form", parent: this.elem, className: 'task1__wordsWrapper'})

    // for (let a of words) {
    //     this.wordsWrapper.insertAdjacentHTML('beforeEnd', `<div class='task1__wordHolder'><input type = "radio" name="words" data-mean='${a.mean}' id = ${a.word}> <label class="task1_label" for=${a.mean} id = ${a.mean}>${a.word}</label></div>`)

    // }
    // let button = tag({tag: "div", parent: this.note, className: 'button__futher'})
    // button.innerHTML = 'Далее'
  }

  addListener() {
    this.button.addEventListener('click', event => {
      (0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreReset)();
      location.hash = '/module-1/task1-0';
    });
    this.textInst.addEventListener('click', event => {
      let instructionHolder = document.querySelector('.instructionHolder');
      instructionHolder.innerHTML = '<div class="instruction">Инструкция</div>';
      this.buttonInstruction = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
        tag: "div",
        parent: this.note,
        className: 'button__futher'
      });
      this.buttonInstruction.innerHTML = 'Вернуться к выполнению задания';
      this.addListener();
      this.buttonInstruction.addEventListener('click', event => {
        location.hash = '/module-1/instruction';
      });
    });
  }
}
let taskInstruction;
const getTaskInstruction = () => {
  if (!taskInstruction) {
    taskInstruction = new TaskInstruction();
  }
  return taskInstruction;
};

/***/ }),

/***/ "./app/1modul/modul1task1/1-1.js":
/*!***************************************!*\
  !*** ./app/1modul/modul1task1/1-1.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLearnWords": () => (/* binding */ getLearnWords)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./app/functions.js");
/* harmony import */ var _1_1_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1-1.css */ "./app/1modul/modul1task1/1-1.css");


function createWords() {
  return [{
    word: "синица",
    mean: "птица"
  }, {
    word: "береза",
    mean: "дерево"
  }, {
    word: "сапоги",
    mean: "обувь"
  }, {
    word: "апельсин",
    mean: "фрукт"
  }, {
    word: "фиалка",
    mean: "цветок"
  }, {
    word: "лодка",
    mean: "средство передвижения"
  }, {
    word: "вельвет",
    mean: "ткань"
  }, {
    word: "теннис",
    mean: "спорт"
  }, {
    word: "озеро",
    mean: "водоем"
  }, {
    word: "кровать",
    mean: "мебель"
  }, {
    word: "листопад",
    mean: "осень"
  }, {
    word: "дворец",
    mean: "здание"
  }];
}
class LearnWords {
  open() {
    this.init();
    this.render();
    this.addListener();
  }
  init() {
    this.words = createWords();
  }
  render() {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.pageFrame)();
    let page = document.querySelector('.page__content');
    this.elem = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: page,
      className: 'task1__wrapper'
    });
    this.note = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.elem,
      className: 'task1__note1'
    });
    let explanationHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.note,
      className: 'explanationHolder'
    });
    this.wordExplanation = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h2",
      parent: explanationHolder,
      className: 'task1__text'
    });

    // wordExplanation.innerHTML = `${words.mean}`
    this.wordExplanation.innerHTML = this.words[0].mean;
    this.wordExplanation.dataset.mean = this.words[0].mean;
    this.wordsWrapper = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "form",
      parent: this.elem,
      className: 'task1__wordsWrapper'
    });
    for (let a of this.words) {
      this.wordsWrapper.insertAdjacentHTML('beforeEnd', `<label class='task1__wordHolder'><input type = "radio" name="words" data-mean='${a.mean}' id = ${a.word}> <span class="task1_label" for=${a.mean} id = ${a.mean}>${a.word}</span></label>`);

      // this.wordsWrapper.insertAdjacentHTML('beforeEnd', `<div class='task1__wordHolder'><label for=${words[a].mean} class="task1_label">${words[a].word}</label><input type = "checkbox" data-mean=${words[a].mean}></div>`)
    }
  }

  shuffle(words) {
    // поменять порядок слов
    for (let i = words.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [words[i], words[j]] = [words[j], words[i]];
    }
  }
  // вывести значение слова в рамочку, убрать выведенное значение из массива words

  // проверка правильности выбранного значения объяснению

  addListener() {
    this.wordsWrapper.addEventListener('input', event => {
      // let target = event.target.closest('task1__wordHolder')
      // если пользователь правильно ответил
      if (event.target.dataset.mean === this.wordExplanation.dataset.mean) {
        console.log(1);

        // идет переключение на следующее слово в поле объяснения тк из массива удалили первый объект
        this.words.splice(0, 1);
        // проверка незакончился ли массив, если закончился выйти (return) на другую страницу
        if (this.words.length == 0) {
          location.hash = '/module-1/task1(2)-1';
          return;
        }
        this.shuffle(this.words);
        this.wordExplanation.innerHTML = this.words[0].mean;
        this.wordExplanation.dataset.mean = this.words[0].mean;
      } else {
        this.tryAgain();
      }
    });
  }

  // button() {
  //     this.button = tag({tag: "div", parent: this.elem, className: 'button__futher'})
  //     this.button.innerHTML = 'Далее'
  // }

  tryAgain() {
    let tryAgain = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.note,
      className: 'task1__tryagain'
    });
    tryAgain.innerHTML = 'Попробуй еще';
    setTimeout(() => {
      tryAgain.remove();
    }, 2000);
  }
}
let learnWords;
const getLearnWords = () => {
  if (!learnWords) {
    learnWords = new LearnWords();
  }
  return learnWords;
};

/***/ }),

/***/ "./app/1modul/modul1task2/2-1.js":
/*!***************************************!*\
  !*** ./app/1modul/modul1task2/2-1.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCountDots": () => (/* binding */ getCountDots)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./app/functions.js");
/* harmony import */ var _2_1_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2-1.css */ "./app/1modul/modul1task2/2-1.css");


class CountDots {
  open() {
    this.render();
    this.addListener();
  }
  render() {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.pageFrame)();
    let page = document.querySelector('.page__content');
    this.elem = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: page,
      className: 'task2__wrapper'
    });
    let taskHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.elem,
      className: 'task2__taskholder'
    });

    // let text = tag({tag: "h2", parent: taskHolder, className: 'task2__text'})
    taskHolder.innerHTML = "Задание 2. <br> <br>HE указывая (пальцем, ручкой, карандашом) на точки в квадрате, посчитайте количество точек в каждом отдельном квадрате и поочередно внесите ответы:";
    let imageWrapper = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.elem,
      className: 'image__wrapper'
    });
    imageWrapper.innerHTML = '<img src="./img/1modul2task/7dots.png">';
    imageWrapper.insertAdjacentHTML('beforeEnd', '<img src="./img/1modul2task/8dots.png">');
    imageWrapper.insertAdjacentHTML('beforeEnd', '<img src="./img/1modul2task/10dots.png">');
    imageWrapper.insertAdjacentHTML('beforeEnd', '<img src="./img/1modul2task/9dots.png">');
    this.form = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "form",
      parent: this.elem,
      className: 'task2__form'
    });
    // for (let i = 0; i <= 3; i++) {
    //     form.insertAdjacentHTML('beforeEnd', '<input type="number" class="task2__input">')
    // }
    this.form.innerHTML = '<input type="number" class="task2__input" name="seven" value="">';
    this.form.insertAdjacentHTML('beforeEnd', '<input type="number" class="task2__input" name="eight" value="">');
    this.form.insertAdjacentHTML('beforeEnd', '<input type="number" class="task2__input" name="ten" value="">');
    this.form.insertAdjacentHTML('beforeEnd', '<input type="number" class="task2__input" name="nine" value="">');
    this.button = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.elem,
      className: 'button__futher'
    });
    this.button.innerHTML = 'Далее';
  }

  // проверить чтобы все было введено

  addListener() {
    this.form.addEventListener('input', event => {
      this.checkIfFilled();
      if (this.form.elements.seven.value != '') {
        console.log(this.form.elements.seven);
        this.form.elements.seven.setAttribute('disabled', true);
      }
      if (this.form.elements.eight.value != '') {
        this.form.elements.eight.setAttribute('disabled', true);
      }
      if (this.form.elements.ten.value != '' && this.form.elements.ten.value.length == 2) {
        console.log(this.form.elements.seven);
        this.form.elements.ten.setAttribute('disabled', true);
      }
      if (this.form.elements.nine.value != '') {
        console.log(this.form.elements.seven);
        this.form.elements.nine.setAttribute('disabled', true);
      }
      // if (event.code === 'Enter') {

      //     // подсчитать число инпутов
      //     this.n++
      //     //поле в которое вводили заблокировать для введения, добавть серую окраску бордера
      //     event.target.disabled = true
      //     event.target.style.borderColor = "gray"
      // }
    });

    this.button.addEventListener('click', event => {
      this.checkIfCorrect();
      location.hash = '/module-1/task3-1';
    });
  }
  checkIfFilled() {
    if (this.form.elements.seven.value != '' && this.form.elements.eight.value != '' && this.form.elements.ten.value != '' && this.form.elements.nine.value != '') {

      // this.elem.insertAdjacentHTML('beforeEnd', '<button class="button__futher">Далее</button>')
      // this.button.style.visibility = 'visible'
    }
  }

  // проверить парвильно ли введено чилсо точек
  checkIfCorrect() {
    if (this.form.elements.seven.value == '7') {
      (0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTask2Plus)();
    }
    if (this.form.elements.eight.value == '8') {
      (0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTask2Plus)();
    }
    if (this.form.elements.ten.value == '10') {
      (0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTask2Plus)();
    }
    if (this.form.elements.nine.value == '9') {
      let scoreEnd = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTask2Get)();
      if (scoreEnd < 3) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTask2Plus)();
      } else {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTask2Get)();
      }
    }
  }
}
let countDots;
const getCountDots = () => {
  if (!countDots) {
    countDots = new CountDots();
  }
  return countDots;
};

/***/ }),

/***/ "./app/1modul/modul1task3/3-1.js":
/*!***************************************!*\
  !*** ./app/1modul/modul1task3/3-1.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMinus": () => (/* binding */ getMinus)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./app/functions.js");
/* harmony import */ var _3_1_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3-1.css */ "./app/1modul/modul1task3/3-1.css");


class Minus {
  open() {
    this.render();
    this.addListener();
    this.n = 1;
  }
  render() {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.pageFrame)();
    let page = document.querySelector('.page__content');
    let elem = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: page,
      className: 'task3__wrapper'
    });
    let btnExp = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: elem,
      className: 'task3__btnExp'
    });
    let explanationHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: btnExp,
      className: 'task3__explanationHolder'
    });
    let explanation = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h2",
      parent: explanationHolder,
      className: 'task3__text'
    });
    explanation.innerHTML = "Задание 3.<br> <br> Теперь Вам необходимо несколько раз вычесть цифру 8.<br> Начните со 100 и продолжайте вычитать цифру 8 <br> из каждого вновь получившегося числа";
    this.button = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: btnExp,
      className: 'task3__button'
    });
    this.button.innerHTML = 'Далее';
    this.taskHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "form",
      parent: elem,
      className: 'task3__taskHolder'
    });
    let str1 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.taskHolder,
      className: 'task3__str'
    });
    str1.innerHTML = '<h3>100 - 8 = </h3><input type="number" name="result" class="task3__input input1" data-result="100">';
    let str2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.taskHolder,
      className: 'task3__str'
    });
    str2.innerHTML = '<div class="enter enter1"></div><h3> - 8 = </h3><input type="number" name="result" data-result="84" class="task3__input input2" >';
    let str3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.taskHolder,
      className: 'task3__str'
    });
    str3.innerHTML = '<div class="enter enter2"></div><h3> - 8 = </h3><input type="number" name="result" data-result="76" class="task3__input input3" >';
    let str4 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.taskHolder,
      className: 'task3__str'
    });
    str4.innerHTML = '<div class="enter enter3"></div><h3> - 8 = </h3><input type="number" name="result" data-result="68" class="task3__input input4" >';
  }
  addListener() {
    this.input = document.querySelector(".input1");
    this.enterElement = document.querySelector(".enter1");
    this.input.addEventListener('input', event => {
      this.enterElement.innerHTML = this.input.value;
      this.input.classList.remove("input1");
      this.enterElement.classList.remove("enter1");
    });
    this.input2 = document.querySelector(".input2");
    this.enterElement2 = document.querySelector(".enter2");
    this.input2.addEventListener('input', event => {
      this.enterElement2.innerHTML = this.input2.value;
      this.input.classList.remove("input2");
      this.enterElement.classList.remove("enter2");
    });
    this.input3 = document.querySelector(".input3");
    this.enterElement3 = document.querySelector(".enter3");
    this.input3.addEventListener('input', event => {
      this.enterElement3.innerHTML = this.input3.value;
      this.input3.classList.remove("input3");
      this.enterElement.classList.remove("enter3");
    });
    this.input4 = document.querySelector(".input4");
    this.input4.addEventListener('input', event => {
      this.input3.classList.remove("input4");
    });
    this.button.addEventListener("click", event => {
      // scoreReset()
      if (this.input.value == 92) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTask3Plus)();
      }
      if (this.input2.value == this.enterElement.innerHTML - 8) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTask3Plus)();
      }
      if (this.input3.value == this.enterElement2.innerHTML - 8) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTask3Plus)();
      }
      if (this.input4.value == this.enterElement3.innerHTML - 8) {
        let scoreEnd = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTask3Get)();
        if (scoreEnd < 3) {
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTask3Plus)();
        } else {
          (0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTask3Get)();
        }
      }
      // console.log(localStorage.score)
      location.hash = '/module-1/task4(1)-1';
    });
  }
}

// if (form.elements.result[1] === form.elements.result[0] - 8) {
//     // добавить балл
// }

// let enterElement2 = document.querySelector(".enter")
// enterElement2.innerHTML = form.elements.result[1]
// enterElement2.classList.remove('enter')

let minus;
const getMinus = () => {
  if (!minus) {
    minus = new Minus();
  }
  return minus;
};

/***/ }),

/***/ "./app/1modul/modul1task4-2/4(2)-1.js":
/*!********************************************!*\
  !*** ./app/1modul/modul1task4-2/4(2)-1.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNumberTask": () => (/* binding */ getNumberTask)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./app/functions.js");
/* harmony import */ var _4_2_1_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./4(2)-1.css */ "./app/1modul/modul1task4-2/4(2)-1.css");


let arr = [{
  num: 1,
  symbol: '['
}, {
  num: 2,
  symbol: 'Ʇ'
}, {
  num: 3,
  symbol: '┘'
}, {
  num: 4,
  symbol: '='
}, {
  num: 5,
  symbol: '└'
}, {
  num: 6,
  symbol: '>'
}, {
  num: 7,
  symbol: ']'
}, {
  num: 8,
  symbol: '+'
}, {
  num: 9,
  symbol: '∩'
}];
let arrBlack = [{
  num: 1,
  symbol: '!',
  sense: ''
}, {
  num: 2,
  symbol: '@',
  sense: ''
}, {
  num: 3,
  symbol: '#',
  sense: ''
}, {
  num: 4,
  symbol: '$',
  sense: ''
}, {
  num: 5,
  symbol: '%',
  sense: ''
}, {
  num: 6,
  symbol: '^',
  sense: ''
}, {
  num: 7,
  symbol: '&',
  sense: ''
}, {
  num: 8,
  symbol: '*',
  sense: ''
}, {
  num: 9,
  symbol: '(',
  sense: ''
}];
let n = 0;
class NumberTask {
  open() {
    this.render();
    this.addListener();
    setTimeout(this.result.bind(this), 90000);
  }
  render() {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.pageFrame)();
    let page = document.querySelector('.page__content');
    this.wrapper = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: page,
      className: 'task4__wrapper2'
    });

    // синие клавиши
    let keyboardInner = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.wrapper,
      className: 'keyboard__inner_big2'
    });
    let keyboardInner1 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: keyboardInner,
      className: 'keyboard__inner2'
    });
    let keyboardInner2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: keyboardInner,
      className: 'keyboard__inner_darker2'
    });
    for (let a of arr) {
      keyboardInner1.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item2"><div class = "keyboard__img2">${a.symbol}</div></div>`);
    }
    for (let a of arr) {
      keyboardInner2.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item2"><div class = "keyboard__img2">${a.num}</div></div>`);
    }

    // зеленые клавиши

    let keyboardInnerGreen = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.wrapper,
      className: 'keyboard__innergreen2'
    });
    let strGreen1 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: keyboardInnerGreen,
      className: 'keyboard__str_light2 keyboard__str_symbol'
    });
    let strGreen2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: keyboardInnerGreen,
      className: 'keyboard__str_dark2 keyboard__str_empty'
    });
    let strGreen3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: keyboardInnerGreen,
      className: 'keyboard__str_dark2  keyboard__str_number'
    });
    let arr1 = this.shuffle(arr);
    let arr2 = this.shuffle(arr);
    arr2 = arr2.slice(0, 6);
    let arrSum = [...arr1, ...arr2]; // ... распространяет все элементы из массива arr1 тоже самое с arr2

    for (let a of arrSum) {
      strGreen1.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item_green2 keyboard__item_symbol" data-number=${a.num}><div class = "keyboard__img_green">${a.symbol}</div></div>`);
    }
    strGreen2.insertAdjacentHTML('beforeEnd', '<div class="keyboard__item_green2 keyboard__item_empty keyboard__item_green_dark"><div class = "keyboard__img_green2"></div></div>'.repeat(15));
    strGreen3.insertAdjacentHTML('beforeEnd', '<div class="keyboard__item_green2 keyboard__item_green_dark keyboard__item_number"><div class = "keyboard__img_green2"></div></div>'.repeat(15));

    // черные клавиши

    this.keyboardInner3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.wrapper,
      className: 'keyboard__inner_black2'
    });
    for (let a of arrBlack) {
      this.keyboardInner3.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item_gray2 keyboard__item_gray_number" data-number='${a.num}'><div class = "keyboard__img12" >${a.num}</div></div>`);
    }
  }
  shuffle(arr) {
    arr = arr.slice();

    // при загрузке зеленой сткрои порядок элементов в arr меняется
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  newStr() {
    // перемешали массив
    let arr1 = this.shuffle(arr);
    let arr2 = this.shuffle(arr);
    arr2 = arr2.slice(0, 6);
    let arrSum = [...arr1, ...arr2]; // ... распространяет все элементы из массива arr1 тоже самое с arr2
    // удалить из зеленой таблицы прежние ячейки, заполнить новым содержимым
    let symbolStr = document.querySelector('.keyboard__str_light2');
    symbolStr.innerHTML = "";
    for (let a of arrSum) {
      symbolStr.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item_green2 keyboard__item_symbol" data-number=${a.num}><div class = "keyboard__img_green">${a.symbol}</div></div>`);
    }
    // надо очистить строку и сделать 30 пустых ячеек (в 2 ряда по 15)
    // let emptyStr = document.querySelectorAll(".keyboard__item_green_dark")

    // for (let a of emptyStr) {
    //     a.innerHTML =""
    //     a.style.background = ''
    // }

    let numberStr = document.querySelector('.keyboard__str_number');
    numberStr.innerHTML = "";
    numberStr.insertAdjacentHTML('beforeEnd', '<div class="keyboard__item_green2 keyboard__item_number keyboard__item_green_dark"><div class = "keyboard__img_green"></div></div>'.repeat(15));
    let emptyStr = document.querySelector('.keyboard__str_empty');
    emptyStr.innerHTML = "";
    emptyStr.insertAdjacentHTML('beforeEnd', '<div class="keyboard__item_green2 keyboard__item_empty keyboard__item_green_dark"><div class = "keyboard__img_green"></div></div>'.repeat(15));
  }
  addListener() {
    this.keyboardInner3.addEventListener("click", event => {
      //при клике на любую цифру по черной клавиатуре,  (первую зеленую пустую ячейку), добавляем ей содержимое - число из dataset,)
      let emptyCell = document.querySelector(".keyboard__item_empty");
      let numberButton = event.target.closest(".keyboard__item_gray_number");

      // если кликнули не накнопку, а на ободок клавиатуры
      if (numberButton === null) {
        return;
      }
      emptyCell.innerHTML = numberButton.dataset.number;
      //    убираем класс empty
      emptyCell.classList.remove('keyboard__item_empty');

      // цифру сопряженную с символом, находящимся в strGreen1 или symbolStr добавляем в 3 строку
      let numberCell = document.querySelector('.keyboard__item_number');
      let symbolCell = document.querySelector('.keyboard__item_symbol');
      console.log(symbolCell);
      numberCell.innerHTML = symbolCell.dataset.number;
      numberCell.classList.remove('keyboard__item_number');
      symbolCell.classList.remove('keyboard__item_symbol');

      // сравнени если не правильно щелкнули, подсветка красным
      if (symbolCell.dataset.number != numberButton.dataset.number) {
        emptyCell.style.background = "red";
      }
      if (symbolCell.dataset.number == numberButton.dataset.number) {
        (0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTask4Plus)();
      }
      if (!document.querySelector('.keyboard__item_empty')) {
        n++;
        if (n <= 4) {
          this.newStr();
        } else {
          this.result();
        }
      }
    });
  }
  result() {
    this.wrapper.innerHTML = `<div class="result">Задание 1 - ${(0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTask1Get)()}  <br><br> Задание 2 - ${(0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTask2Get)()}  <br><br> Задание 3 - ${(0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTask3Get)()} <br><br> Задание 4 - ${(0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTask4Get)()}  <br><br>  Суммарный балл - ${(0,_functions__WEBPACK_IMPORTED_MODULE_0__.scoreTotalGet)()} балла <br> Чтобы вернуться в основное меню, нажмите на стрелочку в левом верхнем углу экрана.</div>`;
  }
}
let numberTask;
const getNumberTask = () => {
  if (!numberTask) {
    numberTask = new NumberTask();
  }
  return numberTask;
};

/***/ }),

/***/ "./app/1modul/modul1task4/4(1)-1.js":
/*!******************************************!*\
  !*** ./app/1modul/modul1task4/4(1)-1.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getNumberMemorize": () => (/* binding */ getNumberMemorize)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./app/functions.js");
/* harmony import */ var _4_1_1_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./4(1)-1.css */ "./app/1modul/modul1task4/4(1)-1.css");


let arr = [{
  num: 1,
  symbol: '['
}, {
  num: 2,
  symbol: 'Ʇ'
}, {
  num: 3,
  symbol: '┘'
}, {
  num: 4,
  symbol: '='
}, {
  num: 5,
  symbol: '└'
}, {
  num: 6,
  symbol: '>'
}, {
  num: 7,
  symbol: ']'
}, {
  num: 8,
  symbol: '+'
}, {
  num: 9,
  symbol: '∩'
}];
let arrBlack = [{
  num: 1
}, {
  num: 2
}, {
  num: 3
}, {
  num: 4
}, {
  num: 5
}, {
  num: 6
}, {
  num: 7
}, {
  num: 8
}, {
  num: 9
}];
class NumberMemorize {
  open(arr) {
    this.render();
    this.addListener();
  }
  render() {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.pageFrame)();
    let page = document.querySelector('.page__content');
    this.wrapper = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: page,
      className: 'task4__wrapper1'
    });
    let text = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h2",
      parent: this.wrapper,
      className: 'task4__text1'
    });
    text.innerHTML = 'Задание 4. Вам необходимо рассмотреть голубую таблицу. Там каждому символу соответствует определённая цифра (эта таблица будет видна Вам на протяжении выполнения всего задания). После рассмотрения таблицы Вам предстоит работа в таблице ниже. Глядя на голубую таблицу, поочередно щелкайте мышкой на цифры, соответствующие указанным символам. Как только Вы закончите с постепенным заполнением серой таблицы, откроется большая зеленая таблица. Там предстоит задание на время (90 секунд).';
    let keyboardInner = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.wrapper,
      className: 'keyboard__inner_big1'
    });
    let keyboardInner1 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: keyboardInner,
      className: 'keyboard__inner1'
    });
    let keyboardInner2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: keyboardInner,
      className: 'keyboard__inner_darker1'
    });
    for (let a of arr) {
      keyboardInner1.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item1"><div class = "keyboard__img1">${a.symbol}</div></div>`);
    }
    for (let a of arr) {
      keyboardInner2.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item1"><div class = "keyboard__img1">${a.num}</div></div>`);
    }

    // серые кнопки

    let keyboardInnerGray = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.wrapper,
      className: 'keyboard__inner_gray1'
    });
    let strGray1 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: keyboardInnerGray,
      className: 'keyboard__str_light1'
    });
    this.strGray2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: keyboardInnerGray,
      className: 'keyboard__str_dark1'
    });
    let arrGray = this.shuffle(arr);
    for (let b of arrGray) {
      strGray1.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item_gray1"><div class = "keyboard__img_gray1">${b.symbol}</div></div>`);
    }
    for (let b of arrGray) {
      this.strGray2.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item_graylight1 keyboard__item_empty" data-number="${b.num}"></div>`);
    }

    // черные кнопки
    this.keyboardInner3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.wrapper,
      className: 'keyboard__inner_black1'
    });
    for (let a of arrBlack) {
      this.keyboardInner3.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item_gray11 keyboard__item_gray_number" data-number='${a.num}'><div class = "keyboard__img11">${a.num}</div></div>`);
    }
  }
  shuffle(arr) {
    arr = arr.slice();

    // при загрузке зеленой сткрои порядок элементов в arr меняется
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  addListener() {
    this.keyboardInner3.addEventListener("click", function (event) {
      //при клике на любую цифру,  (первую серую пустую ячейку), добавляем ей содержимое - число из dataset,)
      let emptyCell = document.querySelector(".keyboard__item_empty");
      let numberButton = event.target.closest(".keyboard__item_gray_number");

      // если кликнули не накнопку, а на ободок клавиатуры
      if (numberButton === null) {
        return;
      }
      emptyCell.innerHTML = numberButton.dataset.number;
      console.log(numberButton.dataset.number, emptyCell.dataset.number);
      // сравнение правильно щелкнули, подсветка
      if (numberButton.dataset.number != emptyCell.dataset.number) {
        emptyCell.style.background = "red";
      }
      //    убираем класс empty
      emptyCell.classList.remove('keyboard__item_empty');

      // // переход на следующую страницу, если нет больше элементов с классом empty

      if (!document.querySelector('.keyboard__item_empty')) {
        this.wrapper = document.querySelector('.task4__wrapper1');
        let nextTask = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
          tag: "div",
          parent: this.wrapper,
          className: 'task41__nexttask'
        });
        nextTask.innerHTML = 'Внимание! Сейчас начнутся 90 секунд!';
        setTimeout(() => {
          location.hash = '/module-1/task4(2)-1';
        }, 5000);
      }
    });
  }
}
let numberMemorize;
const getNumberMemorize = () => {
  if (!numberMemorize) {
    numberMemorize = new NumberMemorize();
  }
  return numberMemorize;
};

/***/ }),

/***/ "./app/2modul/2-instruction/2-inst.js":
/*!********************************************!*\
  !*** ./app/2modul/2-instruction/2-inst.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInstructionSecond": () => (/* binding */ getInstructionSecond)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./app/functions.js");
/* harmony import */ var _2_inst_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2-inst.css */ "./app/2modul/2-instruction/2-inst.css");


class InstructionSecond {
  open() {
    this.render();
    this.addListener();
  }
  render() {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.pageFrame)();
    let page = document.querySelector('.page__content');
    let instructionHolder2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: page,
      className: 'instructionHolder2'
    });
    let imgInst2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: instructionHolder2,
      className: 'instructionHolder__ImgInst2'
    });
    let imageHolder2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: imgInst2,
      className: 'ImgInst2__image'
    });
    imageHolder2.innerHTML = '<img src="./img/firstpage/modul2.png" width=150px height=170px>';
    this.textInst2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h2",
      parent: imgInst2,
      className: 'ImgInst2__text'
    });
    this.textInst2.innerHTML = "Инструкция";
    let textH12 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h1",
      parent: instructionHolder2,
      className: 'leftPanel__textH1-2'
    });
    textH12.innerHTML = "Символьная реабилитация";
    let text2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h3",
      parent: instructionHolder2,
      className: 'leftPanel__text2'
    });
    text2.innerHTML = 'Символьная поддержка (Модуль подготовки к выходу в модуль географии, правила ориентирования зашифрованы в заданиях)';

    // let rightPanel = tag({tag: "div", parent: instructionHolder, className: 'instructionHolder__righnPanel'})

    this.button2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: instructionHolder2,
      className: 'button__ready2'
    });
    this.button2.innerHTML = 'Я готов! Начинаем';

    //     this.wrapper = tag({tag: "div", parent: document.body, className: 'map__wrapper'})

    //    this.picturesWrapper = tag({tag: "div", parent: this.wrapper, className: 'map__pictureswrapper'})

    //     // picturesWrapper.innerHTML =  "url(" + map[0].picture +  ")"

    //     this.picturesWrapper.innerHTML =  `<img src='./img/mappictures/house.png' width=200px height=200px>`

    //     this.picturesWrapper.insertAdjacentHTML('beforeEnd', `<img src='./img/symbol/house_symb.png' width=200px height=200px>`) 

    //     // picturesWrapper.insertAdjacentHTML('beforeEnd', `${map[0].symbol}`)
    //     // picturesWrapper.insertAdjacentHTML('beforeEnd', `${map[0].sound}`)

    //     let mapText = tag({tag: "h2", parent: this.wrapper, className: 'map__text'})

    //     mapText.innerHTML = 'дом, строение'

    //     let mapButton = tag({tag: "div", parent: this.wrapper, className: 'map__button'})
    //     mapButton.innerHTML = "Далее"
  }

  addListener() {
    this.button2.addEventListener('click', event => {
      location.hash = '/module-2/task1-2';
    });
    this.textInst.addEventListener('click', event => {
      let instructionHolder2 = document.querySelector('.instructionHolder');
      instructionHolder2.innerHTML = '<div class="instruction">Инструкция</div>';
      this.buttonInstruction = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
        tag: "div",
        parent: this.note,
        className: 'button__futher'
      });
      this.buttonInstruction.innerHTML = 'Вернуться к выполнению задания';
      this.addListener();
      this.buttonInstruction.addEventListener('click', event => {
        location.hash = '/module-2/task1-2';
      });
    });
  }
}
let instructionSecond;
const getInstructionSecond = () => {
  if (!instructionSecond) {
    instructionSecond = new InstructionSecond();
  }
  return instructionSecond;
};

/***/ }),

/***/ "./app/2modul/modul2task1/1-2.js":
/*!***************************************!*\
  !*** ./app/2modul/modul2task1/1-2.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLearnMap": () => (/* binding */ getLearnMap)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./app/functions.js");
/* harmony import */ var _1_2_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1-2.css */ "./app/2modul/modul2task1/1-2.css");


function createMap() {
  return [{
    symbol: './img/symbol/road_symb.png',
    picture: './img/mappictures/road.png',
    meaning: 'шоссе',
    sound: './sound/road.m4a'
  }, {
    symbol: './img/symbol/path_symb.png',
    picture: './img/mappictures/path.png',
    meaning: 'тропа',
    sound: './sounds/road.m4a'
  }, {
    symbol: './img/symbol/fence_symb.png',
    picture: './img/mappictures/fence.png',
    meaning: 'непреодолимый забор',
    sound: './sounds/road.m4a'
  }, {
    symbol: './img/symbol/railway_symb.png',
    picture: './img/mappictures/railway.png',
    meaning: 'железная дорога',
    sound: './sounds/road.m4a'
  }, {
    symbol: './img/symbol/stown_symb.png',
    picture: './img/mappictures/stown.png',
    meaning: 'камень',
    sound: './sounds/road.m4a'
  }, {
    symbol: './img/symbol/hill_symb.png',
    picture: './img/mappictures/hill.png',
    meaning: 'бугор, холм',
    sound: './sounds/road.m4a'
  }, {
    symbol: './img/symbol/house_symb.png',
    picture: './img/mappictures/house.png',
    meaning: 'дом, строение',
    sound: './sounds/road.m4a'
  }, {
    symbol: './img/symbol/hole_symb.png',
    picture: './img/mappictures/hole.png',
    meaning: 'микроямка, воронка',
    sound: './sounds/road.m4a'
  }, {
    symbol: './img/symbol/swamp_symb.png',
    picture: './img/mappictures/swamp.png',
    meaning: 'болото',
    sound: './sounds/road.m4a'
  }];
}
(0,_functions__WEBPACK_IMPORTED_MODULE_0__.preloadImages)(createMap().map(obj => obj.picture));
(0,_functions__WEBPACK_IMPORTED_MODULE_0__.preloadImages)(createMap().map(obj => obj.symbol));
class LearnMap {
  open() {
    this.init();
    this.render();
    this.addListener();
  }
  init() {
    this.map = createMap();
  }
  render() {
    this.shuffle(this.map);
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.pageFrame)();
    let page = document.querySelector('.page__content');
    this.wrapperMap = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: page,
      className: 'map__wrapper1'
    });
    this.picturesWrapperMap = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.wrapperMap,
      className: 'map__pictureswrapper1'
    });

    // picturesWrapper.innerHTML =  "url(" + map[0].picture +  ")"

    this.picturesWrapperMap.innerHTML = `<img src='${this.map[0].picture}' width=200px height=200px>`;
    this.picturesWrapperMap.insertAdjacentHTML('beforeEnd', `<img src='${this.map[0].symbol}' width=200px height=200px>`);
    // this.picturesWrapper.insertAdjacentHTML('beforeEnd', `<audio src='${map[0].sound}'>`) 

    // picturesWrapper.insertAdjacentHTML('beforeEnd', `${map[0].symbol}`)
    // picturesWrapper.insertAdjacentHTML('beforeEnd', `${map[0].sound}`)

    let mapTextMain = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h2",
      parent: this.wrapperMap,
      className: 'map__text1'
    });
    mapTextMain.innerHTML = this.map[0].meaning;
    this.mapButtonMain = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.wrapperMap,
      className: 'map__button1'
    });
    this.mapButtonMain.innerHTML = "Далее";
  }
  shuffle(map) {
    // поменять порядок слов
    for (let i = map.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [map[i], map[j]] = [map[j], map[i]];
    }
  }
  addListener() {
    this.mapButtonMain.addEventListener('click', event => {
      this.map.splice(0, 1);
      if (this.map.length == 0) {
        location.hash = '/module-2/task2-2';
        return;
      }
      this.wrapperMap.innerHTML = "";
      this.render();
      this.addListener();
    });
  }
}
let learnMap;
const getLearnMap = () => {
  if (!learnMap) {
    learnMap = new LearnMap();
  }
  return learnMap;
};

/***/ }),

/***/ "./app/2modul/modul2task2/2-2.js":
/*!***************************************!*\
  !*** ./app/2modul/modul2task2/2-2.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMemorizeMap": () => (/* binding */ getMemorizeMap)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./app/functions.js");
/* harmony import */ var _2_2_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./2-2.css */ "./app/2modul/modul2task2/2-2.css");


function createMapTask() {
  return [{
    answers: [{
      picture: './img/mappictures/road.png',
      isCorrect: true,
      meaning: 'шоссе',
      word: 'шоссе'
    }, {
      picture: './img/mappictures/path.png',
      isCorrect: false,
      word: 'тропинка'
    }, {
      picture: './img/mappictures/fence.png',
      isCorrect: false,
      word: 'непреодолимый забор'
    }, {
      picture: './img/mappictures/railway.png',
      isCorrect: false,
      word: 'железная дорога'
    }],
    symbol: './img/symbol/road_symb.png'
  }, {
    answers: [{
      picture: './img/mappictures/road.png',
      isCorrect: false,
      word: 'шоссе'
    }, {
      picture: './img/mappictures/path.png',
      isCorrect: true,
      meaning: 'тропинка',
      word: 'тропинка'
    }, {
      picture: './img/mappictures/fence.png',
      isCorrect: false,
      word: 'непреодолимый забор'
    }, {
      picture: './img/mappictures/railway.png',
      isCorrect: false,
      word: 'железная дорога'
    }],
    symbol: './img/symbol/path_symb.png'
  }, {
    answers: [{
      picture: './img/mappictures/road.png',
      isCorrect: false,
      word: 'шоссе'
    }, {
      picture: './img/mappictures/path.png',
      isCorrect: false,
      word: 'тропинка'
    }, {
      picture: './img/mappictures/fence.png',
      isCorrect: true,
      meaning: 'непреодолимый забор',
      word: 'непреодолимый <br> забор'
    }, {
      picture: './img/mappictures/railway.png',
      isCorrect: false,
      word: 'железная дорога'
    }],
    symbol: './img/symbol/fence_symb.png'
  }, {
    answers: [{
      picture: './img/mappictures/road.png',
      isCorrect: false,
      word: 'шоссе'
    }, {
      picture: './img/mappictures/path.png',
      isCorrect: false,
      word: 'тропинка'
    }, {
      picture: './img/mappictures/fence.png',
      isCorrect: false,
      word: 'непреодолимый забор'
    }, {
      picture: './img/mappictures/railway.png',
      isCorrect: true,
      meaning: 'железная дорога',
      word: 'железная дорога'
    }],
    symbol: './img/symbol/railway_symb.png'
  }, {
    answers: [{
      picture: './img/mappictures/hill.png',
      isCorrect: false,
      word: 'бугор, холм'
    }, {
      picture: './img/mappictures/house.png',
      isCorrect: false,
      word: 'дом, строение'
    }, {
      picture: './img/mappictures/hole.png',
      isCorrect: false,
      word: 'микроямка, воронка'
    }, {
      picture: './img/mappictures/stown.png',
      isCorrect: true,
      meaning: 'камень',
      word: 'камень'
    }],
    symbol: './img/symbol/stown_symb.png'
  }, {
    answers: [{
      picture: './img/mappictures/hill.png',
      isCorrect: true,
      meaning: 'бугор, холм',
      word: 'бугор, холм'
    }, {
      picture: './img/mappictures/house.png',
      isCorrect: false,
      word: 'дом, строение'
    }, {
      picture: './img/mappictures/hole.png',
      isCorrect: false,
      word: 'микроямка, воронка'
    }, {
      picture: './img/mappictures/stown.png',
      isCorrect: false,
      word: 'камень'
    }],
    symbol: './img/symbol/hill_symb.png'
  }, {
    answers: [{
      picture: './img/mappictures/hill.png',
      isCorrect: false,
      word: 'бугор, холм'
    }, {
      picture: './img/mappictures/house.png',
      isCorrect: true,
      meaning: 'дом, строение',
      word: 'дом, строение'
    }, {
      picture: './img/mappictures/hole.png',
      isCorrect: false,
      word: 'микроямка, воронка'
    }, {
      picture: './img/mappictures/stown.png',
      isCorrect: false,
      word: 'камень'
    }],
    symbol: './img/symbol/house_symb.png'
  }, {
    answers: [{
      picture: './img/mappictures/hill.png',
      isCorrect: false,
      word: 'бугор, холм'
    }, {
      picture: './img/mappictures/house.png',
      isCorrect: false,
      word: 'дом, строение'
    }, {
      picture: './img/mappictures/stown.png',
      isCorrect: false,
      word: 'камень'
    }, {
      picture: './img/mappictures/hole.png',
      isCorrect: true,
      meaning: 'микроямка, воронка',
      word: 'микрямка, воронка'
    }],
    symbol: './img/symbol/hole_symb.png'
  }, {
    answers: [{
      picture: './img/mappictures/hill.png',
      isCorrect: false,
      word: 'бугор, холм'
    }, {
      picture: './img/mappictures/house.png',
      isCorrect: false,
      word: 'дом, строение'
    }, {
      picture: './img/mappictures/hole.png',
      isCorrect: false,
      word: 'микроямка, воронка'
    }, {
      picture: './img/mappictures/swamp.png',
      isCorrect: true,
      meaning: 'болото',
      word: 'болото'
    }],
    symbol: './img/symbol/swamp_symb.png'
  }];
}
function createMap() {
  return [{
    symbol: './img/symbol/road_symb.png',
    picture: './img/mappictures/road.png',
    meaning: 'шоссе',
    sound: './sound/road.m4a'
  }, {
    symbol: './img/symbol/path_symb.png',
    picture: './img/mappictures/path.png',
    meaning: 'тропа',
    sound: './sounds/road.m4a'
  }, {
    symbol: './img/symbol/fence_symb.png',
    picture: './img/mappictures/fence.png',
    meaning: 'непреодолимый забор',
    sound: './sounds/road.m4a'
  }, {
    symbol: './img/symbol/railway_symb.png',
    picture: './img/mappictures/railway.png',
    meaning: 'железная дорога',
    sound: './sounds/road.m4a'
  }, {
    symbol: './img/symbol/stown_symb.png',
    picture: './img/mappictures/stown.png',
    meaning: 'камень',
    sound: './sounds/road.m4a'
  }, {
    symbol: './img/symbol/hill_symb.png',
    picture: './img/mappictures/hill.png',
    meaning: 'бугор, холм',
    sound: './sounds/road.m4a'
  }, {
    symbol: './img/symbol/house_symb.png',
    picture: './img/mappictures/house.png',
    meaning: 'дом, строение',
    sound: './sounds/road.m4a'
  }, {
    symbol: './img/symbol/hole_symb.png',
    picture: './img/mappictures/hole.png',
    meaning: 'микроямка, воронка',
    sound: './sounds/road.m4a'
  }, {
    symbol: './img/symbol/swamp_symb.png',
    picture: './img/mappictures/swamp.png',
    meaning: 'болото',
    sound: './sounds/road.m4a'
  }];
}
class MemorizeMap {
  open() {
    this.init();
    this.render();
    this.addListener();
  }
  init() {
    this.mapTask = createMapTask();
    this.map = createMap();
  }
  render() {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.pageFrame)();
    let page = document.querySelector('.page__content');
    if (!this.wrapperMemorize) {
      console.log('page');
      this.wrapperMemorize = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
        tag: "div",
        parent: page,
        className: 'map__wrapper'
      });
    } else {
      page.append(this.wrapperMemorize);
      this.wrapperMemorize.innerHTML = "";
    }
    let explanation = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.wrapperMemorize,
      className: 'map__explanation'
    });
    explanation.innerHTML = "Условные знаки <br> Вам представлен условный знак и 4 варианта ответа в виде картинки с названием. Нажмите на верный вариант. При неверном нажатии Вы увидите правильный ответ, его необходимо запомнить. Успехов!";
    let mapTaskWrapper = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.wrapperMemorize,
      className: 'map__taskwrapper'
    });
    let explanationHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: mapTaskWrapper,
      className: 'map__explanationholder'
    });
    let imgExplanation = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: explanationHolder,
      className: 'map__imgexplanation'
    });
    imgExplanation.innerHTML = `<img src='${this.mapTask[0].symbol}' width=200px height=200px>`;
    this.taskHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: mapTaskWrapper,
      className: 'map__taskholder'
    });
    let pict1 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.taskHolder,
      className: 'map__pict1 map__pict'
    });
    pict1.innerHTML = `<div class="pict__wrapper"><img class="picture__button" src='${this.mapTask[0].answers[0].picture}' data-correct='${this.mapTask[0].answers[0].isCorrect}' width=200px height=150px><h3>${this.mapTask[0].answers[0].word}</h3></div>`;
    let pict2 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.taskHolder,
      className: 'map__pict2 map__pict'
    });
    pict2.innerHTML = `<div class="pict__wrapper"><img class="picture__button" src='${this.mapTask[0].answers[1].picture}' data-correct='${this.mapTask[0].answers[1].isCorrect}' width=200px height=150px><h3>${this.mapTask[0].answers[1].word}</h3></div>`;
    let pict3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.taskHolder,
      className: 'map__pict3 map__pict'
    });
    pict3.innerHTML = `<div class="pict__wrapper"><img class="picture__button" src='${this.mapTask[0].answers[2].picture}' data-correct='${this.mapTask[0].answers[2].isCorrect}' width=200px height=150px><h3>${this.mapTask[0].answers[2].word}</h3></div>`;
    let pict4 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.taskHolder,
      className: 'map__pict4 map__pict'
    });
    pict4.innerHTML = `<div class="pict__wrapper"><img class="picture__button" src='${this.mapTask[0].answers[3].picture}' data-correct='${this.mapTask[0].answers[3].isCorrect}' width=200px height=150px><h3>${this.mapTask[0].answers[3].word}</h3></div>`;
    let question = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.taskHolder,
      className: 'map__quest'
    });
    question.innerHTML = "?";
  }
  addListener() {
    this.taskHolder.addEventListener('click', event => {
      let pictureButton = event.target.closest('.picture__button');
      if (pictureButton.dataset.correct == null) {
        return;
      }
      if (pictureButton.dataset.correct && pictureButton.dataset.correct == "true") {
        this.correct();
        this.next();
        this.mapTask.splice(0, 1);
      } else {
        this.wrong();
        this.next();
      }
    });
  }
  correct() {
    this.mapWrapper = document.querySelector('.map__wrapper');
    this.clean();
    let textCorrect = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.mapWrapper,
      className: 'map__textcorrect'
    });
    textCorrect.innerHTML = "Верно";
    let picturesWrapperMemorize = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.mapWrapper,
      className: 'map__pictureswrapper'
    });
    picturesWrapperMemorize.innerHTML = `<img src='${this.mapTask[0].symbol}'  width=200px height=200px>`;
    let pict = this.mapTask[0].answers.find(item => {
      return item.isCorrect;
    });
    picturesWrapperMemorize.insertAdjacentHTML('beforeEnd', `<img src='${pict.picture}' width=200px height=200px>`);
    let mapText = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h2",
      parent: this.mapWrapper,
      className: 'map__text'
    });
    mapText.innerHTML = pict.meaning;
    this.mapButton = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.mapWrapper,
      className: 'map__button'
    });
    this.mapButton.innerHTML = "Ознакомился! Продолжить";
    this.next();
  }
  wrong() {
    console.log(6);
    this.mapWrapper = document.querySelector('.map__wrapper');
    this.clean();
    let textCorrect = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.mapWrapper,
      className: 'map__textwrong'
    });
    textCorrect.innerHTML = "НЕВЕРНО, правильный ответ:";
    let picturesWrapperMemorizeWrong = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.mapWrapper,
      className: 'map__pictureswrapper'
    });
    picturesWrapperMemorizeWrong.innerHTML = `<img src='${this.mapTask[0].symbol}'  width=200px height=200px>`;
    let pict = this.mapTask[0].answers.find(item => {
      return item.isCorrect;
    });
    picturesWrapperMemorizeWrong.insertAdjacentHTML('beforeEnd', `<img src='${pict.picture}' width=200px height=200px>`);
    let mapText = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h2",
      parent: this.mapWrapper,
      className: 'map__text'
    });
    mapText.innerHTML = pict.meaning;
    this.mapButton = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.mapWrapper,
      className: 'map__button'
    });
    this.mapButton.innerHTML = "Ознакомился! Продолжить";
    console.log(7);
    this.next();
  }
  next() {
    this.mapButton.addEventListener('click', event => {
      if (this.mapTask.length == 0) {
        location.hash = '/module-2/task3-2';
      }
      console.log('correct');
      this.clean();
      this.render();
      this.addListener();
    });
  }
  clean() {
    this.wrapperMemorize.innerHTML = "";
    this.mapWrapper.innerHTML = "";
  }
}
let memorizeMap;
const getMemorizeMap = () => {
  if (!memorizeMap) {
    memorizeMap = new MemorizeMap();
  }
  return memorizeMap;
};

/***/ }),

/***/ "./app/2modul/modul2task3/3-2.js":
/*!***************************************!*\
  !*** ./app/2modul/modul2task3/3-2.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMapShow": () => (/* binding */ getMapShow)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./app/functions.js");
/* harmony import */ var _3_2_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3-2.css */ "./app/2modul/modul2task3/3-2.css");


function createMap() {
  return [{
    symbol: './img/symbol/road_symb.png',
    picture: './img/mappictures/road.png',
    meaning: 'шоссе',
    sound: './sound/road.m4a',
    id: 1
  }, {
    symbol: './img/symbol/path_symb.png',
    picture: './img/mappictures/path.png',
    meaning: 'тропа',
    sound: './sounds/road.m4a',
    id: 2
  }, {
    symbol: './img/symbol/fence_symb.png',
    picture: './img/mappictures/fence.png',
    meaning: 'непреодолимый забор',
    sound: './sounds/road.m4a',
    id: 3
  }, {
    symbol: './img/symbol/railway_symb.png',
    picture: './img/mappictures/railway.png',
    meaning: 'железная дорога',
    sound: './sounds/road.m4a',
    id: 4
  }, {
    symbol: './img/symbol/stown_symb.png',
    picture: './img/mappictures/stown.png',
    meaning: 'камень',
    sound: './sounds/road.m4a',
    id: 5
  }, {
    symbol: './img/symbol/hill_symb.png',
    picture: './img/mappictures/hill.png',
    meaning: 'бугор, холм',
    sound: './sounds/road.m4a',
    id: 6
  }, {
    symbol: './img/symbol/house_symb.png',
    picture: './img/mappictures/house.png',
    meaning: 'дом, строение',
    sound: './sounds/road.m4a',
    id: 7
  }, {
    symbol: './img/symbol/hole_symb.png',
    picture: './img/mappictures/hole.png',
    meaning: 'микроямка, воронка',
    sound: './sounds/road.m4a',
    id: 8
  }, {
    symbol: './img/symbol/swamp_symb.png',
    picture: './img/mappictures/swamp.png',
    meaning: 'болото',
    sound: './sounds/road.m4a',
    id: 9
  }];
}
let map1 = [{
  symbol: './img/symbol/railway_symb.png',
  picture: './img/mappictures/railway.png',
  meaning: 'железная дорога',
  sound: './sounds/road.m4a',
  id: 4
}, {
  symbol: './img/symbol/house_symb.png',
  picture: './img/mappictures/house.png',
  meaning: 'дом, строение',
  sound: './sounds/road.m4a',
  id: 7
}, {
  symbol: './img/symbol/fence_symb.png',
  picture: './img/mappictures/fence.png',
  meaning: 'непреодолимый забор',
  sound: './sounds/road.m4a',
  id: 3
}, {
  symbol: './img/symbol/stown_symb.png',
  picture: './img/mappictures/stown.png',
  meaning: 'камень',
  sound: './sounds/road.m4a',
  id: 5
}, {
  symbol: './img/symbol/road_symb.png',
  picture: './img/mappictures/road.png',
  meaning: 'шоссе',
  sound: './sound/road.m4a',
  id: 1
}, {
  symbol: './img/symbol/hill_symb.png',
  picture: './img/mappictures/hill.png',
  meaning: 'бугор, холм',
  sound: './sounds/road.m4a',
  id: 6
}, {
  symbol: './img/symbol/swamp_symb.png',
  picture: './img/mappictures/swamp.png',
  meaning: 'болото',
  sound: './sounds/road.m4a',
  id: 9
}, {
  symbol: './img/symbol/hole_symb.png',
  picture: './img/mappictures/hole.png',
  meaning: 'микроямка, воронка',
  sound: './sounds/road.m4a',
  id: 8
}, {
  symbol: './img/symbol/path_symb.png',
  picture: './img/mappictures/path.png',
  meaning: 'тропа',
  sound: './sounds/road.m4a',
  id: 2
}];
class MapShow {
  open() {
    this.init();
    this.render();
    this.addListener();
  }
  init() {
    this.map = createMap();
  }
  render() {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.pageFrame)();
    let page = document.querySelector('.page__content');
    if (!this.wrapper3) {
      this.wrapper3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
        tag: "div",
        parent: page,
        className: 'mapshow__wrapper'
      });
    } else {
      page.append(this.wrapper3);
    }
    this.wrapper3.innerHTML = '';
    let text = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.wrapper3,
      className: 'mapshow__text'
    });
    text.innerHTML = "Условные знаки";
    this.picturesWrapper3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.wrapper3,
      className: 'mapshow__taskwrapper'
    });
    let pictureText3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h3",
      parent: this.picturesWrapper3,
      className: 'mapshow__picturetext'
    });
    pictureText3.innerHTML = this.map[0].meaning;
    let pictureQuestion3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.picturesWrapper3,
      className: 'mapshow__picturequestion'
    });
    pictureQuestion3.innerHTML = "?";

    //блок с верным ответом (до выполнения задания не видим)
    this.correctBlock = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.wrapper3,
      className: 'mapshow__taskanswer'
    });
    let correctText = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h3",
      parent: this.correctBlock,
      className: 'mapshow__correcttext'
    });
    correctText.innerHTML = "ВЕРНО";
    let answerHolderCorrect = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.correctBlock,
      className: 'mapshow__answerholder'
    });
    let pictureTextCorrect = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h3",
      parent: answerHolderCorrect,
      className: 'mapshow__picturetext'
    });
    pictureTextCorrect.innerHTML = this.map[0].meaning;
    let pictureSymbolCorrect = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: answerHolderCorrect,
      className: 'mapshow__picturesymbol'
    });
    pictureSymbolCorrect.innerHTML = `<img src='${this.map[0].symbol}' width=100px height=100px>`;

    //блок с НЕверным ответом (до выполнения задания не видим)
    this.wrongBlock = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.wrapper3,
      className: 'mapshow__taskanswerwrong'
    });
    let wrongText = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h3",
      parent: this.wrongBlock,
      className: 'mapshow__wrongtext'
    });
    wrongText.innerHTML = "НЕВЕРНО";
    let answerHolderWrong = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.wrongBlock,
      className: 'mapshow__answerholder'
    });
    let pictureTextWrong = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h3",
      parent: answerHolderWrong,
      className: 'mapshow__picturetext'
    });
    pictureTextWrong.innerHTML = this.map[0].meaning;
    this.pictureSymbolWrong = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: answerHolderWrong,
      className: 'mapshow__picturesymbol'
    });
    this.picturesHolder3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.wrapper3,
      className: 'mapshow__picturesholder'
    });
    // console.log(map[0].symbol)
    for (let i = 0; i < map1.length; i++) {
      this.picturesHolder3.insertAdjacentHTML('beforeEnd', `<div class='mapshow__button' data-id=${map1[i].id}><img src='${map1[i].symbol}' width=100px height=100px></div>`);
    }
  }
  addListener() {
    this.picturesHolder3.addEventListener('click', event => {
      // let pictureButton = event.target.clossest('.mapshow__button')
      //          if(this.map.length == 0) {
      //         location.hash = '/module-2/task4-2'
      //    }
      this.pressedButton = event.target.closest('.mapshow__button');
      console.log(this.pressedButton.dataset.id);
      if (this.pressedButton.dataset.id == this.map[0].id) {
        this.correct();
      } else {
        this.wrong();
      }
      this.map.splice(0, 1);
      this.addListener();
    });
  }
  correct() {
    this.picturesWrapper3.style.display = 'none';
    this.wrongBlock.style.display = 'none';
    this.correctBlock.style.display = 'block';

    // this.picturesWrapper3.innerHTML = ""
    // this.picturesWrapper3.classList.remove('mapshow__taskwrapper')
    // this.picturesWrapper.classList.add('mapshow__taskanswer')
    // this.picturesWrapper.classList.add('mapshow__taskanswer_correct')

    // let text = document.querySelector('.mapshow__text')
    // text.style.display = 'none'

    // let correctText = tag({tag: "h3", parent: this.picturesWrapper, className: 'mapshow__correcttext'})
    // correctText.innerHTML = "ВЕРНО"

    // let answerHolder = tag({tag: "div", parent: this.picturesWrapper, className: 'mapshow__answerholder'})

    // let pictureText = tag({tag: "h3", parent: answerHolder, className: 'mapshow__picturetext'})
    // pictureText.innerHTML = map[0].meaning

    // let pictureSymbol = tag({tag: "div", parent: answerHolder, className: 'mapshow__picturesymbol'})

    // pictureSymbol.innerHTML = `<img src='${map[0].symbol}' width=200px height=200px>`
    // // pictureSymbol.innerHTML = `<img src='${this.pressedButton.symbol}' width=200px height=200px>`

    setTimeout(() => {
      if (this.map.length == 0) {
        location.hash = '/module-2/task4-2';
      }
      this.render();
      this.addListener();
    }, 3000);
  }
  wrong() {
    this.picturesWrapper3.style.display = 'none';
    this.correctBlock.style.display = 'none';
    this.wrongBlock.style.display = 'block';
    this.pictureSymbolWrong.innerHTML = `<img src='${map1.find(item => item.id == this.pressedButton.dataset.id).symbol}' width=100px height=100px>`;
    // let picturesWrapper = document.querySelector('.mapshow__taskwrapper')
    // this.picturesWrapper.innerHTML = ""
    // this.picturesWrapper.classList.remove('mapshow__taskwrapper')
    // this.picturesWrapper.classList.add('mapshow__taskanswer')
    // this.picturesWrapper.classList.add('mapshow__taskanswer_wrong')

    // this.wrongBlock = tag({tag: "div", parent: this.wrapper, className: 'mapshow__taskanswer mapshow__taskanswer_wrong'})

    // let correctText = tag({tag: "h3", parent: this.picturesWrapper2, className: 'mapshow__wrongtext'})
    // correctText.innerHTML = "НЕВЕРНО"

    // let answerHolder = tag({tag: "div", parent: this.picturesWrapper2, className: 'mapshow__taskwrapper'})

    // let pictureText = tag({tag: "h3", parent: answerHolder, className: 'mapshow__picturetext'})
    // pictureText.innerHTML = map[0].meaning

    // let pictureSymbol = tag({tag: "div", parent: answerHolder, className: 'mapshow__picturesymbol'})

    // pictureSymbol.innerHTML = `<img src='${this.pressedButton.symbol}' width=200px height=200px>`

    setTimeout(this.correct.bind(this), 3000);
  }
}
let mapShow;
const getMapShow = () => {
  if (!mapShow) {
    mapShow = new MapShow();
  }
  return mapShow;
};

/***/ }),

/***/ "./app/2modul/modul2task4/4-2.js":
/*!***************************************!*\
  !*** ./app/2modul/modul2task4/4-2.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getMatchHills": () => (/* binding */ getMatchHills)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./app/functions.js");
/* harmony import */ var _4_2_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./4-2.css */ "./app/2modul/modul2task4/4-2.css");


class MatchHills {
  open() {
    this.render();
    this.addListener();
  }
  render() {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.pageFrame)();
    let page = document.querySelector('.page__content');
    this.elem = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: page,
      className: 'task4-2__wrapper'
    });
    let taskHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.elem,
      className: 'task4-2__taskholder'
    });
    let text = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h2",
      parent: taskHolder,
      className: 'task4-2__text'
    });
    text.innerHTML = "Задание 3. <br> Посмотрите на изображение рельефа в натуре с изображением рельефа на карте. Сопоставьте картинки и буквы. Успехов!";
    let taskContainer = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.elem,
      className: 'task4-2__taskcontainer'
    });
    let imageWrapper = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: taskContainer,
      className: 'image__wrapper'
    });
    imageWrapper.innerHTML = '<img src="./img/2modul4task/first.png" width=100px height=100px>';
    imageWrapper.insertAdjacentHTML('beforeEnd', '<img src="./img/2modul4task/second.png" width=100px height=100px>');
    imageWrapper.insertAdjacentHTML('beforeEnd', '<img src="./img/2modul4task/third.png" width=100px height=100px>');
    imageWrapper.insertAdjacentHTML('beforeEnd', '<img src="./img/2modul4task/fouth.png" width=100px height=100px>');
    imageWrapper.insertAdjacentHTML('beforeEnd', '<img src="./img/2modul4task/fiveth.png" width=100px height=100px>');
    this.form = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "form",
      parent: taskContainer,
      className: 'task4-2__form'
    });
    // for (let i = 0; i <= 3; i++) {
    //     form.insertAdjacentHTML('beforeEnd', '<input type="number" class="task2__input">')
    // }
    this.form.innerHTML = '<input type="text" class="task4-2__input" name="one" value="" autocomplete="off">';
    this.form.insertAdjacentHTML('beforeEnd', '<input type="text" class="task4-2__input" name="two" value="" autocomplete="off">');
    this.form.insertAdjacentHTML('beforeEnd', '<input type="text" class="task4-2__input" name="three" value="" autocomplete="off">');
    this.form.insertAdjacentHTML('beforeEnd', '<input type="text" class="task4-2__input" name="four" value="" autocomplete="off">');
    this.form.insertAdjacentHTML('beforeEnd', '<input type="text" class="task4-2__input" name="five" value="" autocomplete="off">');
    this.answerLine = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: taskContainer,
      className: 'task4-2__answerline'
    });
    this.answerLine.innerHTML = '<span class="answeline__answer" id="one">1</span>';
    this.answerLine.insertAdjacentHTML('beforeEnd', '<span class="answeline__answer" id="four">4</span>');
    this.answerLine.insertAdjacentHTML('beforeEnd', '<span class="answeline__answer" id="two">2</span>');
    this.answerLine.insertAdjacentHTML('beforeEnd', '<span class="answeline__answer" id="three">3</span>');
    this.answerLine.insertAdjacentHTML('beforeEnd', '<span class="answeline__answer" id="five">5</span>');
    let answersHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.elem,
      className: 'task4-2__answersholder'
    });
    answersHolder.insertAdjacentHTML('beforeEnd', '<div class="task4-2__answer"><h3>1</h3><img src="./img/2modul4task/B.png" width=100px height=50px></div>');
    answersHolder.insertAdjacentHTML('beforeEnd', '<div class="task4-2__answer"><h3>2</h3><img src="./img/2modul4task/P.png" width=100px height=50px></div>');
    answersHolder.insertAdjacentHTML('beforeEnd', '<div class="task4-2__answer"><h3>3</h3><img src="./img/2modul4task/H.png" width=100px height=50px></div>');
    answersHolder.insertAdjacentHTML('beforeEnd', '<div class="task4-2__answer"><h3>4</h3><img src="./img/2modul4task/E.png" width=100px height=50px></div>');
    answersHolder.insertAdjacentHTML('beforeEnd', '<div class="task4-2__answer"><h3>5</h3><img src="./img/2modul4task/O.png" width=100px height=50px></div>');

    // this.correctAnswers = tag({tag: "div", parent: this.elem, className: 'task4-2__correctanswers'})
    // this.correctAnswers.innerHTML = 'Ответ: <br>1B <br> 2E <br>3P <br> 4H <br> 5O'

    this.backText = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.elem,
      className: 'task4-2__backtext'
    });
    this.backText.innerHTML = 'Вы прошли все задания модуля Символьная реабилитация. <br> Для возвращения в главное меню нажмите на стрелочку в верхнем левом углу экрана.';
  }
  addListener() {
    this.form.addEventListener('input', event => {
      this.checkIfFilled();
    });
  }
  matchCorrect() {
    if (this.form.elements.one.value == '1') {
      this.form.elements.one.style.background = 'green';
    } else {
      this.form.elements.one.style.background = 'red';
    }
    if (this.form.elements.two.value == '4') {
      this.form.elements.two.style.background = 'green';
    } else {
      this.form.elements.two.style.background = 'red';
    }
    if (this.form.elements.three.value == '2') {
      this.form.elements.three.style.background = 'green';
    } else {
      this.form.elements.three.style.background = 'red';
    }
    if (this.form.elements.four.value == '3') {
      this.form.elements.four.style.background = 'green';
    } else {
      this.form.elements.four.style.background = 'red';
    }
    if (this.form.elements.five.value == '5') {
      this.form.elements.five.style.background = 'green';
    } else {
      this.form.elements.five.style.background = 'red';
    }
  }
  checkIfFilled() {
    if (this.form.elements.one.value != '' && this.form.elements.two.value != '' && this.form.elements.three.value != '' && this.form.elements.four.value != '' && this.form.elements.five.value != '') {
      this.answerLine.style.visibility = 'visible';
      this.backText.style.visibility = 'visible';
      this.matchCorrect();
    }
  }
}
let matchHills;
const getMatchHills = () => {
  if (!matchHills) {
    matchHills = new MatchHills();
  }
  return matchHills;
};

/***/ }),

/***/ "./app/3modul/3-firstpage/3firstpage.js":
/*!**********************************************!*\
  !*** ./app/3modul/3-firstpage/3firstpage.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getArt": () => (/* binding */ getArt)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./app/functions.js");
/* harmony import */ var _3firstpage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3firstpage.css */ "./app/3modul/3-firstpage/3firstpage.css");


class Art {
  open() {
    this.render();
    this.addListener();
  }
  render() {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.pageFrame)();
    let page = document.querySelector('.page__content');
    let artHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: page,
      className: 'artholder'
    });
    this.jocondaHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: artHolder,
      className: 'joconda'
    });
    let jocondaImage = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.jocondaHolder,
      className: 'joconda__image'
    });
    jocondaImage.innerHTML = '<img src="./img/art/Jaconda1.png" width=200px height=300px>';
    let jocondaText = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h2",
      parent: this.jocondaHolder,
      className: 'joconda__text'
    });
    jocondaText.innerHTML = "Мона Лиза или Джоконда - картина Леонардо да Винчи";
    this.adamHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: artHolder,
      className: 'adam'
    });
    let adamImage = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.adamHolder,
      className: 'adam__image'
    });
    adamImage.innerHTML = '<img src="./img/art/Adam1.png" width=600px height=300px>';
    let adamText = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h2",
      parent: this.adamHolder,
      className: 'adam__text'
    });
    adamText.innerHTML = "Сотворение Адама - фреска Микеланджело";
  }
  addListener() {
    this.jocondaHolder.addEventListener('click', event => {
      let button = event.target.closest('.joconda');
      if (button) {
        // запуск страниц о Джоконде
        location.hash = '/module-3/Joconda';
      }
    });
    this.adamHolder.addEventListener('click', event => {
      let button = event.target.closest('.adam');
      if (button) {
        // запуск страниц о сотворении Адама
        location.hash = '/module-3/Adam';
      }
    });
  }
}
let art;
const getArt = () => {
  if (!art) {
    art = new Art();
  }
  return art;
};

/***/ }),

/***/ "./app/3modul/3-instr/3-inst.js":
/*!**************************************!*\
  !*** ./app/3modul/3-instr/3-inst.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getInstructionThird": () => (/* binding */ getInstructionThird)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./app/functions.js");
/* harmony import */ var _3_inst_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./3-inst.css */ "./app/3modul/3-instr/3-inst.css");


class InstructionThird {
  open() {
    this.render();
    this.addListener();
  }
  render() {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.pageFrame)();
    let page = document.querySelector('.page__content');
    let instructionHolder3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: page,
      className: 'instructionHolder3'
    });
    let ImgInst3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: instructionHolder3,
      className: 'instructionHolder__imgInst3'
    });
    let imageHolder3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: ImgInst3,
      className: 'imgInst3__image'
    });
    imageHolder3.innerHTML = '<img src="./img/firstpage/modul3.png" width=150px height=170px>';
    this.textInst3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h2",
      parent: ImgInst3,
      className: 'imgInst3__text'
    });
    this.textInst3.innerHTML = "Инструкция";
    let textH13 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h1",
      parent: instructionHolder3,
      className: 'leftPanel__textH1-3'
    });
    textH13.innerHTML = "Искусство и география";
    let text3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h3",
      parent: instructionHolder3,
      className: 'leftPanel__text3'
    });
    text3.innerHTML = 'Вам предоставлены две неподписанные картины на выбор. В случае выбора картины "Мона Лиза", откроются факты и задания к ней. В случае выбора фрески "Сотворение Адама", откроются факты и задания к ней.';

    // let rightPanel = tag({tag: "div", parent: instructionHolder3, className: 'instructionHolder__righnPanel'})

    this.button3 = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: instructionHolder3,
      className: 'button__ready3'
    });
    this.button3.innerHTML = 'Я готов! Начинаем';
  }
  addListener() {
    this.button3.addEventListener('click', event => {
      location.hash = '/module-3/3firstpage';
    });
    this.textInst3.addEventListener('click', event => {
      let instructionHolder3 = document.querySelector('.instructionHolder3');
      instructionHolder3.innerHTML = '<div class="instruction">Инструкция</div>';
      this.buttonInstruction = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
        tag: "div",
        parent: this.note,
        className: 'button__futher'
      });
      this.buttonInstruction.innerHTML = 'Вернуться к выполнению задания';
      this.addListener();
    });
    this.buttonInstruction.addEventListener('click', event => {
      location.hash = '/module-3/instruction';
    });
  }
}
let instructionThird;
const getInstructionThird = () => {
  if (!instructionThird) {
    instructionThird = new InstructionThird();
  }
  return instructionThird;
};

/***/ }),

/***/ "./app/3modul/Adam/adam.js":
/*!*********************************!*\
  !*** ./app/3modul/Adam/adam.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getAdam": () => (/* binding */ getAdam)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./app/functions.js");
/* harmony import */ var _adam_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./adam.css */ "./app/3modul/Adam/adam.css");


class Adam {
  open() {
    this.render();
    this.addListener();
  }
  render() {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.pageFrame)();
    let page = document.querySelector('.page__content');
    let artHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: page,
      className: 'artholder1'
    });
    let textHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: artHolder,
      className: 'textholder1'
    });
    let heading = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: textHolder,
      className: 'textholder__header1'
    });
    heading.innerHTML = 'Общие сведения';
    let text = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: textHolder,
      className: 'textholder__text1'
    });
    text.innerHTML = '«Сотворение Адама» — фреска Микеланджело, написанная в начале XVI века. Фреска является четвёртой из девяти центральных композиций потолка Сикстинской капеллы (Ватикан), посвящённых девяти сюжетам книги Бытия. Фреска иллюстрирует эпизод: И сотворил Бог человека по образу Своему (Быт.1:27)';
    this.adamHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: artHolder,
      className: 'adam'
    });
    this.adamImage = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.adamHolder,
      className: 'adam__image'
    });
    this.adamImage.innerHTML = '<img src="./img/art/Adam1.png" width=600px height=300px>';
    this.button = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.adamHolder,
      className: 'art__button1'
    });
    this.button.innerHTML = 'Далее';
  }
  information() {
    let artHolder = document.querySelector('.artholder1');
    artHolder.innerHTML = "";
    let textHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: artHolder,
      className: 'textholder1'
    });
    this.artQuestion = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h2",
      parent: textHolder,
      className: 'textholder__artquestion1'
    });
    this.artQuestion.innerHTML = 'Вопрос №1. <br> Рассмотрите картину. Почему руки Бога и Адама не соприкасаются? Что хотел передать автор? Как Вы считаете?';
    this.artDetails = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "details",
      parent: textHolder,
      className: 'textholder__artdetails1'
    });
    this.artDetails.innerHTML = 'Вся композиция сконцентрирована на жесте двух рук. Рука Бога даёт импульс, а рука Адама принимает его, давая всему телу жизненную энергию. Тем, что их руки не соприкасаются, Микеланджело подчеркнул невозможность соединения божественного и человеческого';
    this.artSummary = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "summary",
      parent: this.artDetails,
      className: 'textholder__artsummary1'
    });
    this.artSummary.innerHTML = 'Мнение';

    // this.adamHolder = tag({tag: "div", parent: this.artHolder, className: 'adam'})

    this.adamImage = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: artHolder,
      className: 'adam__image'
    });
    this.adamImage.innerHTML = '<img src="./img/art/Adam1.png" width=500px height=300px>';
    this.adamImage.insertAdjacentHTML('beforeEnd', '<img src="./img/art/Adam2.png" width=200px height=200px>');
    this.buttonInfoFirst = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: artHolder,
      className: 'art__button1'
    });
    this.buttonInfoFirst.innerHTML = 'Далее';
  }
  informationSecond() {
    let artHolder = document.querySelector('.artholder1');
    artHolder.innerHTML = "";
    let textHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: artHolder,
      className: 'textholder1'
    });
    this.artQuestion = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h2",
      parent: textHolder,
      className: 'textholder__artquestion1'
    });
    this.artQuestion.innerHTML = '"Вопрос №2. <br> Рассмотрите картину. На что, по Вашему мнению, похож развевающийся вокруг Бога и его спутников красный плащ?"';
    this.artDetails = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "details",
      parent: textHolder,
      className: 'textholder__artdetails1'
    });
    this.artDetails.innerHTML = 'Американский врач Фрэнк Линн Мешбергер отметил сходство очертаний плаща с очертаниями человеческого мозга. Многие другие врачи и биологи поддержали данную идею. <br> Автор фрески, по словам Джорджо Вазари, «постоянно занимался анатомией, вскрывая трупы, дабы усмотреть начала и связи костяка, мышц, нервов и жил…» Поэтому художник мог изучить в деталях и содержимое черепной коробки. А в эпоху Ренессанса существовали представления о том, что мозг –– вместилище разума.';
    this.artSummary = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "summary",
      parent: this.artDetails,
      className: 'textholder__artsummary1'
    });
    this.artSummary.innerHTML = 'Мнение';

    // this.adamHolder = tag({tag: "div", parent: this.artHolder, className: 'adam'})

    this.adamImage = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: artHolder,
      className: 'adam__image'
    });
    this.adamImage.innerHTML = '<img src="./img/art/Adam1.png" width=500px height=300px>';
    this.adamImage.insertAdjacentHTML('beforeEnd', '<img src="./img/art/Adam3.png" width=200px height=200px>');
    this.artDetails.addEventListener('click', event => {
      this.adamImage.innerHTML = '<img src="./img/art/Adam4.png" width=300px height=300px>';
      this.adamImage.insertAdjacentHTML('beforeEnd', '<img src="./img/art/Adam5.png" width=300px height=300px>');
    });
    this.buttonInfoSecond = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: artHolder,
      className: 'art__button1'
    });
    this.buttonInfoSecond.innerHTML = 'Далее';
  }
  question() {
    let artHolder = document.querySelector(".artholder1");
    artHolder.innerHTML = "";
    this.artQuestion = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h2",
      parent: artHolder,
      className: 'textholder__artquestion1'
    });
    this.artQuestion.innerHTML = 'На что похож развевающийся вокруг Бога и его спутников красный плащ по мнению врачей и биологов?';
    let textHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: artHolder,
      className: 'adam__textholder'
    });
    this.artForm = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "form",
      parent: textHolder,
      className: 'textholder__artform1'
    });
    console.log(9);
    this.artForm.insertAdjacentHTML('beforeEnd', `<label class="artform__label1"><input type="radio" name="adam"><span class="artform__text1">На желудок, в котором заключен разум</span></label>`);
    this.artForm.insertAdjacentHTML('beforeEnd', `<label class="artform__label1"><input type="radio" name="adam"><span class="artform__text1">На человеческий мозг, в который заключен разум</span></label>`);
    this.artForm.insertAdjacentHTML('beforeEnd', `<label class="artform__label1"><input type="radio" name="adam"><span class="artform__text1">На печень, в которую заключен разум</span></label>`);
    this.adamImage = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: textHolder,
      className: 'adam__image'
    });
    this.adamImage.innerHTML = '<img src="./img/art/Adam1.png" width=500px height=300px>';
    this.buttonQuestion = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: artHolder,
      className: 'art__button1'
    });
    this.buttonQuestion.innerHTML = 'Далее';
  }
  addListener() {
    this.button.addEventListener('click', event => {
      this.information();
      this.addListener();
    });
    this.buttonInfoFirst.addEventListener('click', event => {
      this.informationSecond();
      this.addListener();
    });
    this.buttonInfoSecond.addEventListener('click', event => {
      this.question();
      this.addListener();
    });
    this.artForm.addEventListener('click', event => {
      let artHolderForm1 = document.querySelector(".textholder__artform1");
      // artHolderForm1.insertAdjacentHTML('beforeEnd', '<div  class="textholder__answer1" >Правильный ответ: На человеческий мозг, в который заключен разум</div>')
      artHolderForm1.innerHTML = '<div  class="textholder__answer1" >Правильный ответ: На человеческий мозг, в который заключен разум</div>';
    });
    this.buttonQuestion.addEventListener('click', event => {
      let artHolder = document.querySelector(".artholder1");
      artHolder.innerHTML = '<div class="finish1">Вы завершили задание! <br> Нажмите на стрелочку в левом верхнем углу экрана, чтобы вернуться в главное меню.</div>';
    });
  }
}
let adam;
const getAdam = () => {
  if (!adam) {
    adam = new Adam();
  }
  return adam;
};

/***/ }),

/***/ "./app/3modul/Joconda/joconda.js":
/*!***************************************!*\
  !*** ./app/3modul/Joconda/joconda.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getJoconda": () => (/* binding */ getJoconda)
/* harmony export */ });
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../functions */ "./app/functions.js");
/* harmony import */ var _joconda_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./joconda.css */ "./app/3modul/Joconda/joconda.css");


function createJocondaInfo() {
  return [{
    question: "Вопрос №1.<br> Рассмотрите картину. Почему у Мона Лизы нет бровей? Как Вы считаете?",
    summary: "Мнение искусствоведов:",
    details: "В Италии в XVI веке брови и ресницы высветляли женщины, предлагающие интимные услуги. (Почему тогда такая одежда и поза?)",
    type: 'info'
  }, {
    question: "Вопрос №2. Рассмотрите картину. Почему у Мона Лизы бессильная улыбка? Как Вы считаете?",
    summary: "Мнение искусствоведов:",
    details: "Американские специалисты считают, что подобная улыбка является проявлением гипотиреоза – снижения функции щитовидной железы – и вызвана мышечной слабостью. Также из-за снижения процессов обмена клеток – выпадают волосы и, соответственно, брови и ресницы. Их также нет на картине. Желтоватый оттенок кожи также косвенно подтверждают данное мнение.",
    type: 'info'
  }, {
    question: "Вопрос 3. Рассмотрите картину на боку. Видите ли Вы что-то необычное?",
    summary: "Мнение американского художника",
    details: "Американский художник Рон Пиччирилло перевернул картину на бок и обнаружил целый зоопарк на заднем плане картины: Голову льва, обезьяны и буйвола! Попробуйте и Вы их разглядеть на верхней картине! ",
    type: 'info1'
  }, {
    question: 'Какова может быть медицинская причина бессильной улыбки с отсутствием бровей и ресниц Мона Лизы?',
    answer: ['Гипотиреоз – снижение функции щитовидной железы – замедление обменных процессов в организме', 'Гипертиреоз – повышение функции щитовидной железы – усиление обменных процессов в организме', 'Повышение уровня холестерина в организме', 'Повышение артериального давления'],
    correct: 'Правильный ответ: Гипотиреоз – снижение функции щитовидной железы – замедление обменных процессов в организме',
    type: 'variants'
  }];
}
class Joconda {
  open() {
    this.init();
    this.render();
    this.addListener();
    // this.addListenerForm()
    // this.addListenerLastButton()
  }

  init() {
    this.jocondaInfo = createJocondaInfo();
  }
  render() {
    (0,_functions__WEBPACK_IMPORTED_MODULE_0__.pageFrame)();
    let page = document.querySelector('.page__content');
    let artHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: page,
      className: 'artholder'
    });
    let textHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: artHolder,
      className: 'textholder'
    });
    let heading = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: textHolder,
      className: 'textholder__header'
    });
    heading.innerHTML = 'Общие сведения';
    let text = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: textHolder,
      className: 'textholder__text'
    });
    text.innerHTML = '«Мо́на Ли́за», или «Джоко́нда»— картина Леонардо да Винчи, одно из самых известных произведений живописи. Написана в начале XVI века. Ныне хранится в Лувре (Париж, Франция). Считается, что на картине изображена Лиза Герардини, супруга флорентийского торговца шёлком Франческо дель Джокондо.';
    this.jocondaHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: artHolder,
      className: 'joconda'
    });
    this.jocondaImage = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.jocondaHolder,
      className: 'joconda__image'
    });
    this.jocondaImage.innerHTML = '<img src="./img/art/Jaconda1.png" width=300px height=500px>';
    this.button = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: textHolder,
      className: 'art__button'
    });
    this.button.innerHTML = 'Далее';

    // this.artQuestion = tag({tag: "h2", parent: textHolder, className: 'textholder__artquestion'})
    // this.artQuestion.innerHTML = `${jocondaInfo[0].question}`
    // this.artDetails = tag({tag: "details", parent: textHolder, className: 'textholder__artdetails'})
    // this.artDetails.innerHTML = `${jocondaInfo[0].details}`

    // this.artSummary = tag({tag: "summary", parent: this.artDetails, className: 'textholder__artsummary'})

    // this.artSummary.innerHTML = `${jocondaInfo[0].summary}`

    // this.jocondaHolder = tag({tag: "div", parent: artHolder, className: 'joconda'})

    // this.jocondaImage = tag({tag: "div", parent: this.jocondaHolder, className: 'joconda__image'})
    // this.jocondaImage.innerHTML = '<img src="./img/art/Jaconda1.png" width=300px height=300px>'

    // this.button = tag({tag: "div", parent: textHolder, className: 'art__button'})
    // this.button.innerHTML = 'Далее'
  }

  addListener() {
    this.button.addEventListener('click', event => {
      this.clean();
      console.log(this.jocondaInfo[0]);
      if (this.jocondaInfo[0].type == 'variants') {
        this.question();
        console.log('finish');
        // следующая страница с вопросами
        this.addListenerForm(this.jocondaInfo[0]);
        this.addListenerLastButton();
      } else {
        this.information();
        this.addListener();
      }
      this.jocondaInfo.splice(0, 1);

      //     if (jocondaInfo[0].type == 'info1') {
      //         this.information()
      //         this.jocondaImage.style.transform = 'rotate(-90deg)'
      //         this.artDetails.addEventListener('click', (event) => {
      //         this.jocondaHolder.insertAdjacentHTML('beforeEnd', '<img src="./img/art/Jaconda2.png" width=300px height=300px>')})

      //    }         
    });
  }

  addListenerForm(variants) {
    this.artForm.addEventListener('click', event => {
      let textHolderForm = document.querySelector(".textholder__artform");

      // textHolder.insertAdjacentHTML('beforeEnd', `<div  class="textholder__answer" >${variants.correct}</div>`)
      textHolderForm.innerHTML = `<div  class="textholder__answer" >${variants.correct}</div>`;
    });
  }
  addListenerLastButton() {
    this.buttonQuestion.addEventListener('click', event => {
      this.clean();
      let artHolder = document.querySelector(".artholder");
      artHolder.innerHTML = '<div class="finish">Вы завершили задание! <br> Нажмите стрелочку в левом верхнем углу экрана, чтобы вернуться в главное меню.</div>';
    });
  }
  information() {
    let artHolder = document.querySelector(".artholder");
    let textHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: artHolder,
      className: 'textholder'
    });
    this.artQuestion = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h2",
      parent: textHolder,
      className: 'textholder__artquestion'
    });
    this.artQuestion.innerHTML = `${this.jocondaInfo[0].question}`;
    this.artDetails = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "details",
      parent: textHolder,
      className: 'textholder__artdetails'
    });
    this.artDetails.innerHTML = `${this.jocondaInfo[0].details}`;
    this.artSummary = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "summary",
      parent: this.artDetails,
      className: 'textholder__artsummary'
    });
    this.artSummary.innerHTML = `${this.jocondaInfo[0].summary}`;
    this.jocondaHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: artHolder,
      className: 'joconda'
    });
    this.jocondaImage = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.jocondaHolder,
      className: 'joconda__image'
    });
    this.jocondaImage.innerHTML = '<img src="./img/art/Jaconda1.png" width=300px height=500px>';
    this.button = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: textHolder,
      className: 'art__button'
    });
    this.button.innerHTML = 'Далее';
    if (this.jocondaInfo[0].type == 'info1') {
      this.jocondaImage.style.transform = 'rotate(90deg)';
      this.jocondaHolder.classList.remove('joconda');
      this.artDetails.addEventListener('click', event => {
        this.jocondaImage.insertAdjacentHTML('beforeEnd', '<img src="./img/art/Jaconda 2.png" width=500px height=300px style="transform: rotate(-90deg)">');
      });
      // this.artDetails.addEventListener.remove()style="transform: rotate(-90deg)"
    }
  }

  clean() {
    let artHolder = document.querySelector(".artholder");
    artHolder.innerHTML = "";
  }
  question() {
    let artHolder = document.querySelector(".artholder");
    let textHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: artHolder,
      className: 'textholder'
    });
    this.artQuestion = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h2",
      parent: textHolder,
      className: 'textholder__artquestion'
    });
    this.artQuestion.innerHTML = `${this.jocondaInfo[0].question}`;
    this.artForm = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "form",
      parent: textHolder,
      className: 'textholder__artform'
    });
    console.log(9);
    this.artForm.insertAdjacentHTML('beforeEnd', `<label class="artform__label"><input type="radio" name="joconda"><span class="artform__text">${this.jocondaInfo[0].answer[0]}</span></label>`);
    this.artForm.insertAdjacentHTML('beforeEnd', `<label class="artform__label"><input type="radio" name="joconda"><span class="artform__text">${this.jocondaInfo[0].answer[1]}</span></label>`);
    this.artForm.insertAdjacentHTML('beforeEnd', `<label class="artform__label"><input type="radio" name="joconda"><span class="artform__text">${this.jocondaInfo[0].answer[2]}</span></label>`);
    this.artForm.insertAdjacentHTML('beforeEnd', `<label class="artform__label"><input type="radio" name="joconda"><span class="artform__text">${this.jocondaInfo[0].answer[3]}</span></label>`);
    this.jocondaHolder = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: artHolder,
      className: 'joconda'
    });
    this.jocondaImage = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.jocondaHolder,
      className: 'joconda__image'
    });
    this.jocondaImage.innerHTML = '<img src="./img/art/Jaconda1.png" width=300px height=500px>';
    this.buttonQuestion = (0,_functions__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: textHolder,
      className: 'art__button'
    });
    this.buttonQuestion.innerHTML = 'Далее';
  }
}
let joconda;
const getJoconda = () => {
  if (!joconda) {
    joconda = new Joconda();
  }
  return joconda;
};

/***/ }),

/***/ "./app/firstPage/firstpage.js":
/*!************************************!*\
  !*** ./app/firstPage/firstpage.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getFirstPage": () => (/* binding */ getFirstPage)
/* harmony export */ });
/* harmony import */ var _functions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions.js */ "./app/functions.js");
/* harmony import */ var _firstpage_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./firstpage.css */ "./app/firstPage/firstpage.css");


class FirstPage {
  open() {
    this.render();
    this.addListeners();
  }
  render() {
    let wrapper = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: document.body,
      className: 'wrapper'
    });
    let textHolder = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: wrapper,
      className: 'firstpage__textholder'
    });
    let triangle = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: textHolder,
      className: 'firstpage__triangle'
    });
    triangle.innerHTML = '<img src="./img/firstpage/triangle.png">';
    let text = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h3",
      parent: textHolder,
      className: 'firstpage__text'
    });
    text.innerHTML = 'Если Вы ещё не провели оценку когнитивных функций, то это  необходимо сделать прямо сейчас! <br>  Благодаря модулю «Диагностика» узнайте, какие упражнения  подходят Вам сегодня и приступайте к работе! Удачи!';
    let chooseText = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "h3",
      parent: wrapper,
      className: 'firstpage__choosetext'
    });
    chooseText.innerHTML = "Выберите модуль";
    let modul = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: wrapper,
      className: 'modul'
    });
    this.modulHolder1 = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: modul,
      className: 'modul__holder modul__holder_brown'
    });
    this.modulHolder2 = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: modul,
      className: 'modul__holder modul__holder_blue'
    });
    this.modulHolder3 = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: modul,
      className: 'modul__holder modul__holder_gray'
    });
    this.modulHolder1.insertAdjacentHTML('beforeEnd', "<img class='modul__image' src='./img/firstpage/modul1.png'> <h2 class='modul__text'>Диагностика</h2>");
    this.modulHolder2.insertAdjacentHTML('beforeEnd', "<img class='modul__image' src='./img/firstpage/modul2.png'> <h2 class='modul__text'>Символьная <br> реабилитация</h2>");
    this.modulHolder3.insertAdjacentHTML('beforeEnd', "<img class='modul__image' src='./img/firstpage/modul3.png'> <h2 class='modul__text'>Искусство и <br>география</h2>");
    this.colorButton = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: wrapper,
      className: 'colorButton'
    });
    let colorButtonItem = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.colorButton,
      className: 'colorButton__item colorButton__item_green'
    });
    let colorButtonItem1 = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.colorButton,
      className: 'colorButton__item colorButton__item_pink'
    });
    let colorButtonItem2 = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.colorButton,
      className: 'colorButton__item colorButton__item_lightblue'
    });
    let colorButtonItem3 = (0,_functions_js__WEBPACK_IMPORTED_MODULE_0__.tag)({
      tag: "div",
      parent: this.colorButton,
      className: 'colorButton__item colorButton__item_blue'
    });

    // let colorButtonItem4 = tag({tag: "div", parent: this.colorButton, className: 'colorButton__item colorButton__item_gray'})
  }

  addListeners() {
    this.modulHolder1.addEventListener('click', () => {
      location.hash = '/module-1/instruction';
    });
    this.modulHolder2.addEventListener('click', event => {
      location.hash = '/module-2/instruction';
    });
    this.modulHolder3.addEventListener('click', event => {
      location.hash = '/module-3/instruction';
    });
    this.colorButton.addEventListener('click', event => {
      if (event.target.classList.contains('colorButton__item_green')) {
        document.documentElement.dataset.mode = "green";
      }
      if (event.target.classList.contains('colorButton__item_pink')) {
        document.documentElement.dataset.mode = "pink";
      }
      if (event.target.classList.contains('colorButton__item_lightblue')) {
        document.documentElement.dataset.mode = "lightblue";
      }
      if (event.target.classList.contains('colorButton__item_blue')) {
        document.documentElement.dataset.mode = "blue";
      }
      // if (event.target.classList.contains('colorButton__item_gray')) {
      //     document.documentElement.dataset.mode = "gray"
      // }
    });
  }
}

let firstPage;
const getFirstPage = () => {
  if (!firstPage) {
    firstPage = new FirstPage();
  }
  return firstPage;
};

/***/ }),

/***/ "./app/functions.js":
/*!**************************!*\
  !*** ./app/functions.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addButton": () => (/* binding */ addButton),
/* harmony export */   "cleanAll": () => (/* binding */ cleanAll),
/* harmony export */   "pageFrame": () => (/* binding */ pageFrame),
/* harmony export */   "preloadImages": () => (/* binding */ preloadImages),
/* harmony export */   "scoreReset": () => (/* binding */ scoreReset),
/* harmony export */   "scoreTask1Get": () => (/* binding */ scoreTask1Get),
/* harmony export */   "scoreTask1Plus": () => (/* binding */ scoreTask1Plus),
/* harmony export */   "scoreTask2Get": () => (/* binding */ scoreTask2Get),
/* harmony export */   "scoreTask2Plus": () => (/* binding */ scoreTask2Plus),
/* harmony export */   "scoreTask3Get": () => (/* binding */ scoreTask3Get),
/* harmony export */   "scoreTask3Plus": () => (/* binding */ scoreTask3Plus),
/* harmony export */   "scoreTask4Get": () => (/* binding */ scoreTask4Get),
/* harmony export */   "scoreTask4Plus": () => (/* binding */ scoreTask4Plus),
/* harmony export */   "scoreTotalGet": () => (/* binding */ scoreTotalGet),
/* harmony export */   "tag": () => (/* binding */ tag)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.css */ "./app/main.css");

const tag = params => {
  let elem = document.createElement(params.tag);
  params.parent.append(elem);
  elem.className = params.className;
  return elem;
};
const cleanAll = () => {
  document.body.innerHTML = '';
};
const addButton = elem => {
  elem.insertAdjacentHTML('beforeEnd', '<button class="button__futher">Далее</button>');
};
const scoreTask1Plus = () => {
  if (!localStorage.scoreTask1) {
    localStorage.scoreTask1 = 0;
  }
  localStorage.scoreTask1++;
  console.log('score1', localStorage.scoreTask1);
};
const scoreTask2Plus = () => {
  if (!localStorage.scoreTask2) {
    localStorage.scoreTask2 = 0;
  }
  localStorage.scoreTask2++;
  console.log('score2', localStorage.scoreTask2);
};
const scoreTask3Plus = () => {
  if (!localStorage.scoreTask3) {
    localStorage.scoreTask3 = 0;
  }
  localStorage.scoreTask3++;
  console.log('score3', localStorage.scoreTask3);
};
const scoreTask4Plus = () => {
  if (!localStorage.scoreTask4) {
    localStorage.scoreTask4 = 0;
  }
  localStorage.scoreTask4++;
  console.log('score4', localStorage.scoreTask4);
};
const scoreReset = () => {
  localStorage.scoreTask1 = 0;
  localStorage.scoreTask2 = 0;
  localStorage.scoreTask3 = 0;
  localStorage.scoreTask4 = 0;
};
const scoreTask1Get = () => {
  return +localStorage.scoreTask1;
};
const scoreTask2Get = () => {
  return +localStorage.scoreTask2;
};
const scoreTask3Get = () => {
  return +localStorage.scoreTask3;
};
const scoreTask4Get = () => {
  return +localStorage.scoreTask4;
};
const scoreTotalGet = () => {
  return scoreTask1Get() + scoreTask2Get() + scoreTask3Get() + scoreTask4Get();
};
const pageFrame = () => {
  if (!pageFrame.page) {
    let page = pageFrame.page = tag({
      tag: "div",
      parent: document.body,
      className: 'page'
    });
    // let page = tag({tag: "div", parent: document.body, className: 'page'})

    let arrowWrapper = tag({
      tag: "div",
      parent: page,
      className: 'page__arrowwrapper'
    });
    let arrowHolder = tag({
      tag: "div",
      parent: arrowWrapper,
      className: 'page__arrowholder'
    });
    let arrowPlace = tag({
      tag: "div",
      parent: arrowHolder,
      className: 'page__arrowplace'
    });
    arrowPlace.innerHTML = '<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.892273 10.9886C0.33369 11.6004 0.376815 12.5491 0.988597 13.1077L10.9582 22.2104C11.5699 22.7689 12.5187 22.7258 13.0773 22.114C13.6359 21.5023 13.5927 20.5535 12.981 19.9949L4.11913 11.9037L12.2104 3.04185C12.7689 2.43007 12.7258 1.4813 12.114 0.922718C11.5023 0.364134 10.5535 0.40726 9.99491 1.01904L0.892273 10.9886ZM23.9319 9.50155L1.93189 10.5015L2.06811 13.4985L24.0681 12.4985L23.9319 9.50155Z" fill="white"/> </svg> ';
    arrowHolder.addEventListener('click', event => {
      location.hash = '';
    });
    let pageContent = tag({
      tag: "div",
      parent: page,
      className: 'page__content'
    });
  }
  document.body.append(pageFrame.page);
  let pageContent = document.querySelector('.page__content');
  pageContent.innerHTML = '';
};
function preloadImages(sources, callback) {
  // let counter = 0;

  // function onLoad() {
  //   counter++;
  //   if (counter == sources.length) callback();
  // }

  for (let source of sources) {
    let img = document.createElement('img');
    //   img.onload = img.onerror = onLoad;
    img.src = source;
  }
}

/***/ }),

/***/ "./app/router.js":
/*!***********************!*\
  !*** ./app/router.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _firstPage_firstpage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./firstPage/firstpage */ "./app/firstPage/firstpage.js");
/* harmony import */ var _1modul_modul1task1_instruction_1_inst_1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./1modul/modul1task1-instruction/1(inst)-1 */ "./app/1modul/modul1task1-instruction/1(inst)-1.js");
/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions */ "./app/functions.js");
/* harmony import */ var _1modul_modul1task1_0_1_0_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./1modul/modul1task1-0/1(0)-1 */ "./app/1modul/modul1task1-0/1(0)-1.js");
/* harmony import */ var _1modul_modul1task1_1_1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./1modul/modul1task1/1-1 */ "./app/1modul/modul1task1/1-1.js");
/* harmony import */ var _1modul_modul1task1_2_1_2_1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./1modul/modul1task1-2/1(2)-1 */ "./app/1modul/modul1task1-2/1(2)-1.js");
/* harmony import */ var _1modul_modul1task2_2_1__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./1modul/modul1task2/2-1 */ "./app/1modul/modul1task2/2-1.js");
/* harmony import */ var _1modul_modul1task3_3_1__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./1modul/modul1task3/3-1 */ "./app/1modul/modul1task3/3-1.js");
/* harmony import */ var _1modul_modul1task4_4_1_1__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./1modul/modul1task4/4(1)-1 */ "./app/1modul/modul1task4/4(1)-1.js");
/* harmony import */ var _1modul_modul1task4_2_4_2_1__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./1modul/modul1task4-2/4(2)-1 */ "./app/1modul/modul1task4-2/4(2)-1.js");
/* harmony import */ var _2modul_2_instruction_2_inst__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./2modul/2-instruction/2-inst */ "./app/2modul/2-instruction/2-inst.js");
/* harmony import */ var _2modul_modul2task1_1_2__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./2modul/modul2task1/1-2 */ "./app/2modul/modul2task1/1-2.js");
/* harmony import */ var _2modul_modul2task2_2_2__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./2modul/modul2task2/2-2 */ "./app/2modul/modul2task2/2-2.js");
/* harmony import */ var _2modul_modul2task3_3_2__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./2modul/modul2task3/3-2 */ "./app/2modul/modul2task3/3-2.js");
/* harmony import */ var _2modul_modul2task4_4_2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./2modul/modul2task4/4-2 */ "./app/2modul/modul2task4/4-2.js");
/* harmony import */ var _3modul_3_instr_3_inst__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./3modul/3-instr/3-inst */ "./app/3modul/3-instr/3-inst.js");
/* harmony import */ var _3modul_3_firstpage_3firstpage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./3modul/3-firstpage/3firstpage */ "./app/3modul/3-firstpage/3firstpage.js");
/* harmony import */ var _3modul_Adam_adam__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./3modul/Adam/adam */ "./app/3modul/Adam/adam.js");
/* harmony import */ var _3modul_Joconda_joconda__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./3modul/Joconda/joconda */ "./app/3modul/Joconda/joconda.js");
// import {getLearnMap} from './2modul/1-2/1-2'




















// 1.подписываемся на событие, когда hash меняется
// запускается функция - в зависимости от хеш открывается нужная страница

window.addEventListener('hashchange', openPage);
openPage();
function openPage() {
  console.log(location);
  (0,_functions__WEBPACK_IMPORTED_MODULE_2__.cleanAll)();
  if (location.hash == '') {
    const firstPage = (0,_firstPage_firstpage__WEBPACK_IMPORTED_MODULE_0__.getFirstPage)();
    firstPage.open();
  } else if (location.hash == '#/module-1/instruction') {
    console.log(location);
    const taskInstruction = (0,_1modul_modul1task1_instruction_1_inst_1__WEBPACK_IMPORTED_MODULE_1__.getTaskInstruction)();
    taskInstruction.open();
  } else if (location.hash == '#/module-1/task1-0') {
    const taskWords = (0,_1modul_modul1task1_0_1_0_1__WEBPACK_IMPORTED_MODULE_3__.getTaskWords)();
    taskWords.open();
  } else if (location.hash == '#/module-1/task1-1') {
    const learnWords = (0,_1modul_modul1task1_1_1__WEBPACK_IMPORTED_MODULE_4__.getLearnWords)();
    learnWords.open();
  } else if (location.hash == '#/module-1/task1(2)-1') {
    const printWords = (0,_1modul_modul1task1_2_1_2_1__WEBPACK_IMPORTED_MODULE_5__.getPrintWords)();
    printWords.open();
  } else if (location.hash == '#/module-1/task2-1') {
    const countDots = (0,_1modul_modul1task2_2_1__WEBPACK_IMPORTED_MODULE_6__.getCountDots)();
    countDots.open();
  } else if (location.hash == '#/module-1/task3-1') {
    const minus = (0,_1modul_modul1task3_3_1__WEBPACK_IMPORTED_MODULE_7__.getMinus)();
    minus.open();
  } else if (location.hash == '#/module-1/task4(1)-1') {
    const numberMemorize = (0,_1modul_modul1task4_4_1_1__WEBPACK_IMPORTED_MODULE_8__.getNumberMemorize)();
    numberMemorize.open();
  } else if (location.hash == '#/module-1/task4(2)-1') {
    const numberTask = (0,_1modul_modul1task4_2_4_2_1__WEBPACK_IMPORTED_MODULE_9__.getNumberTask)();
    numberTask.open();
  } else if (location.hash == '#/module-2/instruction') {
    const instructionSecond = (0,_2modul_2_instruction_2_inst__WEBPACK_IMPORTED_MODULE_10__.getInstructionSecond)();
    instructionSecond.open();
  } else if (location.hash == '#/module-2/task1-2') {
    const learnMap = (0,_2modul_modul2task1_1_2__WEBPACK_IMPORTED_MODULE_11__.getLearnMap)();
    learnMap.open();
  } else if (location.hash == '#/module-2/task2-2') {
    const memorizeMap = (0,_2modul_modul2task2_2_2__WEBPACK_IMPORTED_MODULE_12__.getMemorizeMap)();
    memorizeMap.open();
  } else if (location.hash == '#/module-2/task3-2') {
    const mapShow = (0,_2modul_modul2task3_3_2__WEBPACK_IMPORTED_MODULE_13__.getMapShow)();
    mapShow.open();
  } else if (location.hash == '#/module-2/task4-2') {
    const matchHills = (0,_2modul_modul2task4_4_2__WEBPACK_IMPORTED_MODULE_14__.getMatchHills)();
    matchHills.open();
  } else if (location.hash == '#/module-3/instruction') {
    const instructionThird = (0,_3modul_3_instr_3_inst__WEBPACK_IMPORTED_MODULE_15__.getInstructionThird)();
    instructionThird.open();
  } else if (location.hash == '#/module-3/3firstpage') {
    const art = (0,_3modul_3_firstpage_3firstpage__WEBPACK_IMPORTED_MODULE_16__.getArt)();
    art.open();
  } else if (location.hash == '#/module-3/Joconda') {
    const joconda = (0,_3modul_Joconda_joconda__WEBPACK_IMPORTED_MODULE_18__.getJoconda)();
    joconda.open();
  } else if (location.hash == '#/module-3/Adam') {
    const adam = (0,_3modul_Adam_adam__WEBPACK_IMPORTED_MODULE_17__.getAdam)();
    adam.open();
  }
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task1-0/1(0)-1.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task1-0/1(0)-1.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".task1-0__wrapper{\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: var(--background-color, #ABFCC2);\r\n    gap: 300px; \r\n    position: relative;\r\n    height: 100vh;\r\n}\r\n.task1-0__note {\r\n    align-self: center;\r\n    width: 400px;\r\n   \r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    align-items: center;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 20px; \r\n    border-radius: 10px;\r\n}\r\n.task1-0__explanationHolder {\r\n    /* position: absolute;\r\n    top: 50%;\r\n    left: 50%; \r\n    transform: translate(-50%, -50%);  */\r\n   \r\n    padding: 5px;\r\n    position: relative;\r\n   \r\n\r\n}\r\n.task1-0__text {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 28px;\r\n    /* position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);  */\r\n    text-align: center; \r\n     /* align-self: flex-start; */ \r\n}\r\n.task1-0__wordsWrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 14px;\r\n    padding: 40px 80px 40px 80px;\r\n    background: var(--task-color, #F6F897);\r\n    border-radius: 20px;\r\n}\r\n.task1__wordHolder {\r\n    display: flex;\r\n    gap: 23px;\r\n}\r\n.task1_label {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n}\r\n.button1__futher {\r\n    width: 150px;\r\n    height: 50px;\r\n    background: var(--button-color, #4AEC47);\r\n    \r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n    \r\n} \r\n.button1__futher:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}", "",{"version":3,"sources":["webpack://./app/1modul/modul1task1-0/1(0)-1.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,4CAA4C;IAC5C,UAAU;IACV,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,YAAY;;IAEZ,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,sCAAsC;IACtC,aAAa;IACb,mBAAmB;AACvB;AACA;IACI;;;wCAGoC;;IAEpC,YAAY;IACZ,kBAAkB;;;AAGtB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB;;;wCAGoC;IACpC,kBAAkB;KACjB,4BAA4B;AACjC;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;IACT,4BAA4B;IAC5B,sCAAsC;IACtC,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,SAAS;AACb;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,wCAAwC;;IAExC,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;;AAErC;AACA;IACI,uBAAuB;IACvB,eAAe;AACnB","sourcesContent":[".task1-0__wrapper{\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: var(--background-color, #ABFCC2);\r\n    gap: 300px; \r\n    position: relative;\r\n    height: 100vh;\r\n}\r\n.task1-0__note {\r\n    align-self: center;\r\n    width: 400px;\r\n   \r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    align-items: center;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 20px; \r\n    border-radius: 10px;\r\n}\r\n.task1-0__explanationHolder {\r\n    /* position: absolute;\r\n    top: 50%;\r\n    left: 50%; \r\n    transform: translate(-50%, -50%);  */\r\n   \r\n    padding: 5px;\r\n    position: relative;\r\n   \r\n\r\n}\r\n.task1-0__text {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 28px;\r\n    /* position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);  */\r\n    text-align: center; \r\n     /* align-self: flex-start; */ \r\n}\r\n.task1-0__wordsWrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 14px;\r\n    padding: 40px 80px 40px 80px;\r\n    background: var(--task-color, #F6F897);\r\n    border-radius: 20px;\r\n}\r\n.task1__wordHolder {\r\n    display: flex;\r\n    gap: 23px;\r\n}\r\n.task1_label {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n}\r\n.button1__futher {\r\n    width: 150px;\r\n    height: 50px;\r\n    background: var(--button-color, #4AEC47);\r\n    \r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n    \r\n} \r\n.button1__futher:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task1-2/1(2)-1.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task1-2/1(2)-1.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".task1__wrapper{\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    justify-content: center;\r\n    background: var(--background-color, #ABFCC2);\r\n    gap: 250px;\r\n    padding: 30px;\r\n    /* height: 100vw; */\r\n}\r\n.task1__explanationWrapper{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 150px;\r\n    align-content: center;\r\n    padding-top: 80px;\r\n}\r\n.task1__note {\r\n    width: 200px;\r\n    height: 100px;\r\n    position: relative;\r\n    background: var(--task-color, #F6F897);\r\n    border-radius: 20px;\r\n    padding: 30px;\r\n}\r\n.explanationHolder {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    position: relative;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n    text-align: center;\r\n}\r\n.task1__wordsWrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 28px;\r\n    padding: 40px 90px 40px 90px;\r\n    background: var(--task-color, #F6F897);\r\n    border-radius: 20px;\r\n}\r\n.task1__wordHolder {\r\n    display: flex;\r\n    gap: 20px;\r\n}\r\n/* .task1_label {\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n} */\r\n.task1__button {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 28px;\r\n    background: var(--button-color, #4AEC47);\r\n    padding: 20px;\r\n    color: var(--text-color, #171710);\r\n    border-radius: 20px;\r\n}", "",{"version":3,"sources":["webpack://./app/1modul/modul1task1-2/1(2)-1.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,4CAA4C;IAC5C,UAAU;IACV,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,qBAAqB;IACrB,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,sCAAsC;IACtC,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;IACjC,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;IACT,4BAA4B;IAC5B,sCAAsC;IACtC,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,SAAS;AACb;AACA;;;;;;GAMG;AACH;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,wCAAwC;IACxC,aAAa;IACb,iCAAiC;IACjC,mBAAmB;AACvB","sourcesContent":[".task1__wrapper{\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    justify-content: center;\r\n    background: var(--background-color, #ABFCC2);\r\n    gap: 250px;\r\n    padding: 30px;\r\n    /* height: 100vw; */\r\n}\r\n.task1__explanationWrapper{\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 150px;\r\n    align-content: center;\r\n    padding-top: 80px;\r\n}\r\n.task1__note {\r\n    width: 200px;\r\n    height: 100px;\r\n    position: relative;\r\n    background: var(--task-color, #F6F897);\r\n    border-radius: 20px;\r\n    padding: 30px;\r\n}\r\n.explanationHolder {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    position: relative;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n    text-align: center;\r\n}\r\n.task1__wordsWrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 28px;\r\n    padding: 40px 90px 40px 90px;\r\n    background: var(--task-color, #F6F897);\r\n    border-radius: 20px;\r\n}\r\n.task1__wordHolder {\r\n    display: flex;\r\n    gap: 20px;\r\n}\r\n/* .task1_label {\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 16px;\r\n    line-height: 24px;\r\n} */\r\n.task1__button {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 28px;\r\n    background: var(--button-color, #4AEC47);\r\n    padding: 20px;\r\n    color: var(--text-color, #171710);\r\n    border-radius: 20px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task1-instruction/1(inst)-1.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task1-instruction/1(inst)-1.css ***!
  \************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".instructionHolder1 {\r\n    grid-area: wrapper;\r\n    position: relative;\r\n    z-index: 2;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: var(--task-color, #F6F897);\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n.instructionHolder__imgInst1 {\r\n    display: flex;\r\n    gap: 100px;\r\n}\r\n/* .leftPanel__imageHolder {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 50px;\r\n}\r\n.leftPanel__textInst {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 250px;\r\n} */\r\n.leftPanel__textH1-1 {\r\n    /* position: absolute;\r\n    top: 250px;\r\n    left: 50px; */\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    line-height: 28px;\r\n    color: var(--text-color, #171710);\r\n    text-align: center;\r\n}\r\n.leftPanel__text1 {\r\n    /* position: absolute;\r\n    top: 300px;\r\n    left: 50px; */\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 26px;\r\n    line-height: 34px;\r\n    color: var(--text-color, #171710);\r\n    text-align: center;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n\r\n/* .instructionHolder__righnPanel {\r\n    background: gray;\r\n    opacity: 50%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 400px;\r\n    height: 100vh;\r\n    width: 1200px;\r\n} */\r\n\r\n.leftPanel__textInst1{\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 34px;\r\n}\r\n.button__ready1 {\r\n    /* position: absolute;\r\n    bottom: 100px;\r\n    left: 100px; */\r\n\r\n    width: 250px;\r\n    height: 50px;\r\n    background: var(--button-color, #4AEC47);\r\n    \r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.button__ready1:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}\r\n\r\n.task1__wrapper{\r\n    display: flex;\r\n    justify-content: center;\r\n    background: var(--background-color, #ABFCC2);\r\n    padding-top: 50px;\r\n    padding-bottom: 100px;\r\n    gap: 300px; \r\n    height: 100%;\r\n}\r\n.task1__note {\r\n    align-self: center;\r\n    width: 400px;\r\n   \r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    align-items: center;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 20px; \r\n    border-radius: 10px;\r\n}\r\n.explanationHolder {\r\n    /* position: absolute;\r\n    top: 50%;\r\n    left: 50%; \r\n    transform: translate(-50%, -50%);  */\r\n   \r\n    padding: 5px;\r\n    position: relative;\r\n   \r\n\r\n}\r\n.task1__text {\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    /* text-align: center;\r\n     align-self: flex-start; */\r\n}\r\n.task1__wordsWrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 14px;\r\n    padding: 40px 80px 40px 80px;\r\n    background: var(--task-color, #F6F897);\r\n    border-radius: 20px;\r\n}\r\n.task1__wordHolder {\r\n    display: flex;\r\n    gap: 23px;\r\n}\r\n.task1_label {\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n}\r\n.button__futher {\r\n    width: 150px;\r\n    height: 50px;\r\n    background: var(--button-color, #4AEC47);\r\n    \r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n    \r\n} \r\n.instruction {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    line-height: 36px;\r\n    color: var(--text-color, #171710);\r\n}\r\n@media screen and (max-width: 768px) {\r\n    .leftPanel__textH1-1 {\r\n        font-size: 16px;\r\n        line-height: 18px;\r\n    }\r\n    .leftPanel__text1 {\r\n        font-size: 16px;\r\n        line-height: 18px;\r\n    }\r\n    .instructionHolder__imgInst1{\r\n        gap: 0px;\r\n        flex-direction: column;\r\n        text-align: center;\r\n    }\r\n    .button__ready1 {\r\n        font-size: 12px;\r\n        line-height: 14px;\r\n        width: 150px;\r\n        height: 30px;\r\n    }\r\n    .leftPanel__textInst1 {\r\n        font-size: 12px;\r\n        line-height: 12px;\r\n    }\r\n}", "",{"version":3,"sources":["webpack://./app/1modul/modul1task1-instruction/1(inst)-1.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,sCAAsC;IACtC,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;AACb;AACA;IACI,aAAa;IACb,UAAU;AACd;AACA;;;;;;;;;GASG;AACH;IACI;;iBAEa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;IACjC,kBAAkB;AACtB;AACA;IACI;;iBAEa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;IACjC,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;;;;;;;;GAQG;;AAEH;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI;;kBAEc;;IAEd,YAAY;IACZ,YAAY;IACZ,wCAAwC;;IAExC,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;AACA;IACI,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,4CAA4C;IAC5C,iBAAiB;IACjB,qBAAqB;IACrB,UAAU;IACV,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,YAAY;;IAEZ,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,sCAAsC;IACtC,aAAa;IACb,mBAAmB;AACvB;AACA;IACI;;;wCAGoC;;IAEpC,YAAY;IACZ,kBAAkB;;;AAGtB;AACA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB;8BAC0B;AAC9B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;IACT,4BAA4B;IAC5B,sCAAsC;IACtC,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,SAAS;AACb;AACA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,wCAAwC;;IAExC,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,oBAAoB;IACpB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;;AAErC;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,sCAAsC;IACtC,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;AACA;IACI;QACI,eAAe;QACf,iBAAiB;IACrB;IACA;QACI,eAAe;QACf,iBAAiB;IACrB;IACA;QACI,QAAQ;QACR,sBAAsB;QACtB,kBAAkB;IACtB;IACA;QACI,eAAe;QACf,iBAAiB;QACjB,YAAY;QACZ,YAAY;IAChB;IACA;QACI,eAAe;QACf,iBAAiB;IACrB;AACJ","sourcesContent":[".instructionHolder1 {\r\n    grid-area: wrapper;\r\n    position: relative;\r\n    z-index: 2;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: var(--task-color, #F6F897);\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n}\r\n.instructionHolder__imgInst1 {\r\n    display: flex;\r\n    gap: 100px;\r\n}\r\n/* .leftPanel__imageHolder {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 50px;\r\n}\r\n.leftPanel__textInst {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 250px;\r\n} */\r\n.leftPanel__textH1-1 {\r\n    /* position: absolute;\r\n    top: 250px;\r\n    left: 50px; */\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    line-height: 28px;\r\n    color: var(--text-color, #171710);\r\n    text-align: center;\r\n}\r\n.leftPanel__text1 {\r\n    /* position: absolute;\r\n    top: 300px;\r\n    left: 50px; */\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 26px;\r\n    line-height: 34px;\r\n    color: var(--text-color, #171710);\r\n    text-align: center;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n\r\n/* .instructionHolder__righnPanel {\r\n    background: gray;\r\n    opacity: 50%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 400px;\r\n    height: 100vh;\r\n    width: 1200px;\r\n} */\r\n\r\n.leftPanel__textInst1{\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 34px;\r\n}\r\n.button__ready1 {\r\n    /* position: absolute;\r\n    bottom: 100px;\r\n    left: 100px; */\r\n\r\n    width: 250px;\r\n    height: 50px;\r\n    background: var(--button-color, #4AEC47);\r\n    \r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.button__ready1:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}\r\n\r\n.task1__wrapper{\r\n    display: flex;\r\n    justify-content: center;\r\n    background: var(--background-color, #ABFCC2);\r\n    padding-top: 50px;\r\n    padding-bottom: 100px;\r\n    gap: 300px; \r\n    height: 100%;\r\n}\r\n.task1__note {\r\n    align-self: center;\r\n    width: 400px;\r\n   \r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 30px;\r\n    align-items: center;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 20px; \r\n    border-radius: 10px;\r\n}\r\n.explanationHolder {\r\n    /* position: absolute;\r\n    top: 50%;\r\n    left: 50%; \r\n    transform: translate(-50%, -50%);  */\r\n   \r\n    padding: 5px;\r\n    position: relative;\r\n   \r\n\r\n}\r\n.task1__text {\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    /* text-align: center;\r\n     align-self: flex-start; */\r\n}\r\n.task1__wordsWrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 14px;\r\n    padding: 40px 80px 40px 80px;\r\n    background: var(--task-color, #F6F897);\r\n    border-radius: 20px;\r\n}\r\n.task1__wordHolder {\r\n    display: flex;\r\n    gap: 23px;\r\n}\r\n.task1_label {\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n}\r\n.button__futher {\r\n    width: 150px;\r\n    height: 50px;\r\n    background: var(--button-color, #4AEC47);\r\n    \r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n    \r\n} \r\n.instruction {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    line-height: 36px;\r\n    color: var(--text-color, #171710);\r\n}\r\n@media screen and (max-width: 768px) {\r\n    .leftPanel__textH1-1 {\r\n        font-size: 16px;\r\n        line-height: 18px;\r\n    }\r\n    .leftPanel__text1 {\r\n        font-size: 16px;\r\n        line-height: 18px;\r\n    }\r\n    .instructionHolder__imgInst1{\r\n        gap: 0px;\r\n        flex-direction: column;\r\n        text-align: center;\r\n    }\r\n    .button__ready1 {\r\n        font-size: 12px;\r\n        line-height: 14px;\r\n        width: 150px;\r\n        height: 30px;\r\n    }\r\n    .leftPanel__textInst1 {\r\n        font-size: 12px;\r\n        line-height: 12px;\r\n    }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task1/1-1.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task1/1-1.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".task1__wrapper{\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: var(--background-color, #ABFCC2);\r\n    gap: 300px; \r\n    position: relative;\r\n    height: 100vh;\r\n}\r\n.task1__note1 {\r\n    align-self: center;\r\n    width: 200px;\r\n    height: 100px;\r\n    position: relative;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 10%;\r\n}\r\n.explanationHolder {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n   \r\n    padding: 5px;\r\n    position: relative;\r\n\r\n}\r\n.task1__text {\r\n    position: absolute;\r\n    top: 10%;\r\n    left: 50%;\r\n    transform: translate(-50%, -90%); \r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 28px;\r\n    line-height: 30px;\r\n   \r\n}\r\n.task1__wordsWrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 14px;\r\n    padding: 40px 80px 40px 80px;\r\n    background: var(--task-color, #F6F897);\r\n    border-radius: 20px;\r\n}\r\n.task1__wordHolder {\r\n    display: flex;\r\n    gap: 23px;\r\n}\r\n.task1_label {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 28px;\r\n}\r\n.task1__tryagain {\r\n    height: 80px;\r\n    width: 400px;\r\n    text-align: center;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 28px;\r\n    line-height: 30px;\r\n    border-radius: 10%;\r\n    border: solid 3px red;\r\n    background: white;\r\n    position: relative;\r\n    padding-top: 30px;\r\n\r\n}", "",{"version":3,"sources":["webpack://./app/1modul/modul1task1/1-1.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,4CAA4C;IAC5C,UAAU;IACV,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,kBAAkB;IAClB,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,sCAAsC;IACtC,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;;IAEhC,YAAY;IACZ,kBAAkB;;AAEtB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;;AAErB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,SAAS;IACT,4BAA4B;IAC5B,sCAAsC;IACtC,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,SAAS;AACb;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,qBAAqB;IACrB,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;;AAErB","sourcesContent":[".task1__wrapper{\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: var(--background-color, #ABFCC2);\r\n    gap: 300px; \r\n    position: relative;\r\n    height: 100vh;\r\n}\r\n.task1__note1 {\r\n    align-self: center;\r\n    width: 200px;\r\n    height: 100px;\r\n    position: relative;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 10%;\r\n}\r\n.explanationHolder {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n   \r\n    padding: 5px;\r\n    position: relative;\r\n\r\n}\r\n.task1__text {\r\n    position: absolute;\r\n    top: 10%;\r\n    left: 50%;\r\n    transform: translate(-50%, -90%); \r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 28px;\r\n    line-height: 30px;\r\n   \r\n}\r\n.task1__wordsWrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: flex-start;\r\n    gap: 14px;\r\n    padding: 40px 80px 40px 80px;\r\n    background: var(--task-color, #F6F897);\r\n    border-radius: 20px;\r\n}\r\n.task1__wordHolder {\r\n    display: flex;\r\n    gap: 23px;\r\n}\r\n.task1_label {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 28px;\r\n}\r\n.task1__tryagain {\r\n    height: 80px;\r\n    width: 400px;\r\n    text-align: center;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 28px;\r\n    line-height: 30px;\r\n    border-radius: 10%;\r\n    border: solid 3px red;\r\n    background: white;\r\n    position: relative;\r\n    padding-top: 30px;\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task2/2-1.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task2/2-1.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".task2__wrapper {\r\n    grid-area: wrapper;\r\n    padding-top: 40px;\r\n    /* padding-left: 200px; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n    align-items: center;\r\n    background: var(--background-color, #ABFCC2);\r\n    position: relative;\r\n    height: 100vh;\r\n}\r\n.image__wrapper {\r\n    display: flex;\r\n    gap: 30px;\r\n    justify-content: center;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px;\r\n    \r\n}\r\n.task2__taskholder {\r\n    width: 900px;\r\n    height: 100px;\r\n    border-radius: 10%;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px 0px 30px 40px;\r\n    border-radius: 20px;\r\n\r\n    position: relative;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 28px;\r\n    color: var(--text-color, #171710);    \r\n}\r\n/* .task2__text {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 50px;\r\n    color: var(--text-color, #171710);\r\n} */\r\n.task2__form {\r\n    display: flex;\r\n    gap: 30px;\r\n    padding-left: 10px;\r\n    align-items: center;\r\n}\r\n.task2__input {\r\n    width: 195px;\r\n    border: solid 2px black;\r\n}\r\n.button__futher {\r\n    width: 200px;\r\n    height: 50px;\r\n    background: var(--button-color, #4AEC47);\r\n    /* visibility: hidden; */\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n} \r\n.button__futher:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./app/1modul/modul1task2/2-1.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,4CAA4C;IAC5C,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,aAAa;IACb,SAAS;IACT,uBAAuB;IACvB,sCAAsC;IACtC,aAAa;;AAEjB;AACA;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,sCAAsC;IACtC,2BAA2B;IAC3B,mBAAmB;;IAEnB,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;AACA;;;;;;;;;;;GAWG;AACH;IACI,aAAa;IACb,SAAS;IACT,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,uBAAuB;AAC3B;AACA;IACI,YAAY;IACZ,YAAY;IACZ,wCAAwC;IACxC,wBAAwB;IACxB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;AACA;IACI,uBAAuB;IACvB,eAAe;AACnB","sourcesContent":[".task2__wrapper {\r\n    grid-area: wrapper;\r\n    padding-top: 40px;\r\n    /* padding-left: 200px; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 50px;\r\n    align-items: center;\r\n    background: var(--background-color, #ABFCC2);\r\n    position: relative;\r\n    height: 100vh;\r\n}\r\n.image__wrapper {\r\n    display: flex;\r\n    gap: 30px;\r\n    justify-content: center;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px;\r\n    \r\n}\r\n.task2__taskholder {\r\n    width: 900px;\r\n    height: 100px;\r\n    border-radius: 10%;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px 0px 30px 40px;\r\n    border-radius: 20px;\r\n\r\n    position: relative;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 28px;\r\n    color: var(--text-color, #171710);    \r\n}\r\n/* .task2__text {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n    font-family: 'Inter';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 50px;\r\n    color: var(--text-color, #171710);\r\n} */\r\n.task2__form {\r\n    display: flex;\r\n    gap: 30px;\r\n    padding-left: 10px;\r\n    align-items: center;\r\n}\r\n.task2__input {\r\n    width: 195px;\r\n    border: solid 2px black;\r\n}\r\n.button__futher {\r\n    width: 200px;\r\n    height: 50px;\r\n    background: var(--button-color, #4AEC47);\r\n    /* visibility: hidden; */\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n} \r\n.button__futher:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task3/3-1.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task3/3-1.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".task3__wrapper{\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: var(--background-color, #ABFCC2);\r\n    gap: 200px;\r\n    position: relative;\r\n    height: 100vh;\r\n}\r\n.task3__btnExp {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 200px;\r\n    align-content: center;\r\n    justify-content: center;\r\n}\r\n\r\n.task3__explanationHolder{\r\n    align-self: center;\r\n    /* width: 200px;\r\n    height: 100px; */\r\n    position: relative;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px;\r\n    border-radius: 20px;\r\n    padding: 20px 60px 20px 60px;\r\n}\r\n.task3__text{\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 22px;\r\n    line-height: 24px;\r\n    /* text-align: center; */\r\n    color: var(--text-color, #171710);\r\n}\r\n\r\n.task3__taskHolder{\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* align-items: center; */\r\n    gap: 30px;\r\n    padding: 100px 80px 160px 80px;\r\n    border-radius: 20px;\r\n    background: var(--task-color, #F6F897);\r\n    \r\n}\r\n.task3__str{\r\n    display: flex;\r\n    gap: 10px;\r\n    \r\n}\r\n.task3__number{\r\n    width: 30px;\r\n}\r\n.task3__input{\r\n    width: 50px;\r\n    height: 40px;\r\n    background: var(--background-color, #ABFCC2);;\r\n}\r\n.enter {\r\n    width: 50px;\r\n    height: 40px;\r\n    background: var(--background-color, #ABFCC2);;\r\n    padding-left: 30px;\r\n    padding-top: 13px;\r\n}\r\n.task3__button {\r\n    align-self: center;\r\n   \r\n    background: var(--button-color, #4AEC47);\r\n    color: var(--button-text, #171710);\r\n    border: none;\r\n    text-align: center;\r\n    padding: 15px 100px 15px 100px;\r\n    border-radius: 20px;\r\n    font-size: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    /* text-align: center; */\r\n    color: var(--text-color, #171710);\r\n}\r\n.task3__button:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./app/1modul/modul1task3/3-1.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,4CAA4C;IAC5C,UAAU;IACV,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,qBAAqB;IACrB,uBAAuB;AAC3B;;AAEA;IACI,kBAAkB;IAClB;oBACgB;IAChB,kBAAkB;IAClB,sCAAsC;IACtC,aAAa;IACb,mBAAmB;IACnB,4BAA4B;AAChC;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,wBAAwB;IACxB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,yBAAyB;IACzB,SAAS;IACT,8BAA8B;IAC9B,mBAAmB;IACnB,sCAAsC;;AAE1C;AACA;IACI,aAAa;IACb,SAAS;;AAEb;AACA;IACI,WAAW;AACf;AACA;IACI,WAAW;IACX,YAAY;IACZ,4CAA4C;AAChD;AACA;IACI,WAAW;IACX,YAAY;IACZ,4CAA4C;IAC5C,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,kBAAkB;;IAElB,wCAAwC;IACxC,kCAAkC;IAClC,YAAY;IACZ,kBAAkB;IAClB,8BAA8B;IAC9B,mBAAmB;IACnB,eAAe;IACf,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,wBAAwB;IACxB,iCAAiC;AACrC;AACA;IACI,uBAAuB;IACvB,eAAe;AACnB","sourcesContent":[".task3__wrapper{\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: var(--background-color, #ABFCC2);\r\n    gap: 200px;\r\n    position: relative;\r\n    height: 100vh;\r\n}\r\n.task3__btnExp {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 200px;\r\n    align-content: center;\r\n    justify-content: center;\r\n}\r\n\r\n.task3__explanationHolder{\r\n    align-self: center;\r\n    /* width: 200px;\r\n    height: 100px; */\r\n    position: relative;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px;\r\n    border-radius: 20px;\r\n    padding: 20px 60px 20px 60px;\r\n}\r\n.task3__text{\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 22px;\r\n    line-height: 24px;\r\n    /* text-align: center; */\r\n    color: var(--text-color, #171710);\r\n}\r\n\r\n.task3__taskHolder{\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* align-items: center; */\r\n    gap: 30px;\r\n    padding: 100px 80px 160px 80px;\r\n    border-radius: 20px;\r\n    background: var(--task-color, #F6F897);\r\n    \r\n}\r\n.task3__str{\r\n    display: flex;\r\n    gap: 10px;\r\n    \r\n}\r\n.task3__number{\r\n    width: 30px;\r\n}\r\n.task3__input{\r\n    width: 50px;\r\n    height: 40px;\r\n    background: var(--background-color, #ABFCC2);;\r\n}\r\n.enter {\r\n    width: 50px;\r\n    height: 40px;\r\n    background: var(--background-color, #ABFCC2);;\r\n    padding-left: 30px;\r\n    padding-top: 13px;\r\n}\r\n.task3__button {\r\n    align-self: center;\r\n   \r\n    background: var(--button-color, #4AEC47);\r\n    color: var(--button-text, #171710);\r\n    border: none;\r\n    text-align: center;\r\n    padding: 15px 100px 15px 100px;\r\n    border-radius: 20px;\r\n    font-size: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    /* text-align: center; */\r\n    color: var(--text-color, #171710);\r\n}\r\n.task3__button:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task4-2/4(2)-1.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task4-2/4(2)-1.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".task4__wrapper2 {\r\n    padding-top: 40px;\r\n    padding-left: 100px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 60px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    height: 100vh;\r\n}\r\n\r\n/* голубые кнопки */\r\n.keyboard__inner_big2 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    \r\n    color: var(--text-color, #171710);\r\n}\r\n.keyboard__inner2{\r\n    width: 540px;\r\n    height: 80px;\r\n    display: grid;\r\n    grid-template-columns: repeat(9, 1fr);\r\n    /* grid-template-rows: repeat(2, 1fr); */\r\n    place-items: center;    \r\n    background-color: #B9E5E8;\r\n    grid-gap: 2px;\r\n}\r\n.keyboard__inner_darker2 {\r\n    background: #9BC3C6;\r\n    width: 540px;\r\n    height: 80px;\r\n    display: grid;\r\n    grid-template-columns: repeat(9, 1fr);\r\n    /* grid-template-rows: repeat(2, 1fr); */\r\n    place-items: center; \r\n \r\n   }\r\n.keyboard__item2 {\r\n    height: 100%;\r\n    width: 100%;\r\n    border: solid 1px #0A2893;\r\n    position: relative;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    /* color: var(--text-color, #171710); */\r\n    color: black;\r\n}\r\n.keyboard__img2{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n   /* зеленые кнопки */\r\n   .keyboard__innergreen2 {\r\n    background-color: #D1F0CE;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 800px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n      \r\n    color: var(--text-color, #171710);\r\n}\r\n.keyboard__str_light2 {\r\n    background-color: #D1F0CE;\r\n    width: 800px;\r\n    height: 80px;\r\n    display: flex;\r\n   \r\n}\r\n.keyboard__str_dark2 {\r\n    background-color: #B7E3A8;\r\n    width: 800px;\r\n    height: 80px;\r\n    display: flex;  \r\n}\r\n.keyboard__item_green2 {\r\n    height: 100%;\r\n    width: 100%;\r\n    border: solid 1px #09A823;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n.keyboard__img_green{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n/* черные кнопки */\r\n\r\n\r\n.keyboard__inner_black2 {\r\n    width: 840px;\r\n    height: 80px;\r\n    display: grid;\r\n    grid-template-columns: repeat(9, 1fr);\r\n    background-color: black;\r\n    padding: 8px 8px 8px 8px;\r\n}\r\n.keyboard__item_gray2 {\r\n    height: 90%;\r\n    width: 90%;\r\n    background-color: #4a4b4f;\r\n    border-style: hidden;\r\n    position: relative;\r\n}\r\n.keyboard__img12 {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: white;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    \r\n    text-align: center;\r\n}\r\n/* .keyboard__img2 {\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 30%;\r\n    transform: translate(-70%, -70%);\r\n    color: rgb(148, 146, 146);\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n} */\r\n/* .keyboard__inner_big {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.keyboard__inner_green {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.keyboard__str_light {\r\n    background-color: #D1F0CE;\r\n    width: 540px;\r\n    height: 80px;\r\n    display: grid;\r\n    grid-template-columns: repeat(15, 1fr);\r\n    place-items: center;    \r\n    grid-gap: 2px\r\n}\r\n.keyboard__str_dark {\r\n    background-color: #B7E3A8;\r\n    width: 540px;\r\n    height: 80px;\r\n    display: grid;\r\n    grid-template-columns: repeat(15, 1fr);\r\n    place-items: center;    \r\n    grid-gap: 2px\r\n}\r\n.keyboard__item_green {\r\n    height: 100%;\r\n    width: 100%;\r\n    border: solid 1px #09A823;\r\n    position: relative;\r\n}\r\n.keyboard__img_green{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n} */\r\n.result {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    line-height: 40px;\r\n    color: var(--text-color, #171710);\r\n}", "",{"version":3,"sources":["webpack://./app/1modul/modul1task4-2/4(2)-1.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,aAAa;AACjB;;AAEA,mBAAmB;AACnB;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;;IAEf,iCAAiC;AACrC;AACA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,qCAAqC;IACrC,wCAAwC;IACxC,mBAAmB;IACnB,yBAAyB;IACzB,aAAa;AACjB;AACA;IACI,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,qCAAqC;IACrC,wCAAwC;IACxC,mBAAmB;;GAEpB;AACH;IACI,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,uCAAuC;IACvC,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;GAEG,mBAAmB;GACnB;IACC,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;;IAEf,iCAAiC;AACrC;AACA;IACI,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,aAAa;;AAEjB;AACA;IACI,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,aAAa;AACjB;AACA;IACI,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;;AAGA,kBAAkB;;;AAGlB;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,qCAAqC;IACrC,uBAAuB;IACvB,wBAAwB;AAC5B;AACA;IACI,WAAW;IACX,UAAU;IACV,yBAAyB;IACzB,oBAAoB;IACpB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,YAAY;IACZ,gBAAgB;IAChB,eAAe;;IAEf,kBAAkB;AACtB;AACA;;;;;;;;GAQG;AACH;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAsCG;AACH;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,sCAAsC;IACtC,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC","sourcesContent":[".task4__wrapper2 {\r\n    padding-top: 40px;\r\n    padding-left: 100px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 60px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    height: 100vh;\r\n}\r\n\r\n/* голубые кнопки */\r\n.keyboard__inner_big2 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    \r\n    color: var(--text-color, #171710);\r\n}\r\n.keyboard__inner2{\r\n    width: 540px;\r\n    height: 80px;\r\n    display: grid;\r\n    grid-template-columns: repeat(9, 1fr);\r\n    /* grid-template-rows: repeat(2, 1fr); */\r\n    place-items: center;    \r\n    background-color: #B9E5E8;\r\n    grid-gap: 2px;\r\n}\r\n.keyboard__inner_darker2 {\r\n    background: #9BC3C6;\r\n    width: 540px;\r\n    height: 80px;\r\n    display: grid;\r\n    grid-template-columns: repeat(9, 1fr);\r\n    /* grid-template-rows: repeat(2, 1fr); */\r\n    place-items: center; \r\n \r\n   }\r\n.keyboard__item2 {\r\n    height: 100%;\r\n    width: 100%;\r\n    border: solid 1px #0A2893;\r\n    position: relative;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    /* color: var(--text-color, #171710); */\r\n    color: black;\r\n}\r\n.keyboard__img2{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n   /* зеленые кнопки */\r\n   .keyboard__innergreen2 {\r\n    background-color: #D1F0CE;\r\n    display: flex;\r\n    flex-direction: column;\r\n    width: 800px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n      \r\n    color: var(--text-color, #171710);\r\n}\r\n.keyboard__str_light2 {\r\n    background-color: #D1F0CE;\r\n    width: 800px;\r\n    height: 80px;\r\n    display: flex;\r\n   \r\n}\r\n.keyboard__str_dark2 {\r\n    background-color: #B7E3A8;\r\n    width: 800px;\r\n    height: 80px;\r\n    display: flex;  \r\n}\r\n.keyboard__item_green2 {\r\n    height: 100%;\r\n    width: 100%;\r\n    border: solid 1px #09A823;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n.keyboard__img_green{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n/* черные кнопки */\r\n\r\n\r\n.keyboard__inner_black2 {\r\n    width: 840px;\r\n    height: 80px;\r\n    display: grid;\r\n    grid-template-columns: repeat(9, 1fr);\r\n    background-color: black;\r\n    padding: 8px 8px 8px 8px;\r\n}\r\n.keyboard__item_gray2 {\r\n    height: 90%;\r\n    width: 90%;\r\n    background-color: #4a4b4f;\r\n    border-style: hidden;\r\n    position: relative;\r\n}\r\n.keyboard__img12 {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: white;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    \r\n    text-align: center;\r\n}\r\n/* .keyboard__img2 {\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 30%;\r\n    transform: translate(-70%, -70%);\r\n    color: rgb(148, 146, 146);\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n} */\r\n/* .keyboard__inner_big {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n\r\n.keyboard__inner_green {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.keyboard__str_light {\r\n    background-color: #D1F0CE;\r\n    width: 540px;\r\n    height: 80px;\r\n    display: grid;\r\n    grid-template-columns: repeat(15, 1fr);\r\n    place-items: center;    \r\n    grid-gap: 2px\r\n}\r\n.keyboard__str_dark {\r\n    background-color: #B7E3A8;\r\n    width: 540px;\r\n    height: 80px;\r\n    display: grid;\r\n    grid-template-columns: repeat(15, 1fr);\r\n    place-items: center;    \r\n    grid-gap: 2px\r\n}\r\n.keyboard__item_green {\r\n    height: 100%;\r\n    width: 100%;\r\n    border: solid 1px #09A823;\r\n    position: relative;\r\n}\r\n.keyboard__img_green{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n} */\r\n.result {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    text-align: center;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    line-height: 40px;\r\n    color: var(--text-color, #171710);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task4/4(1)-1.css":
/*!*********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task4/4(1)-1.css ***!
  \*********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".task4__wrapper1 {\r\n    grid-area: wrapper;\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 20px;\r\n    background: var(--background-color, #ABFCC2);\r\n    position: relative;\r\n    height: 100vh;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    /* color: var(--text-color, #171710); */\r\n    color: black;\r\n}\r\n\r\n.task4__text1 {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px;\r\n    border-radius: 20px;\r\n}\r\n.keyboard__inner_big1 {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.keyboard__inner1{\r\n    width: 540px;\r\n    height: 80px;\r\n    display: grid;\r\n    grid-template-columns: repeat(9, 1fr);\r\n    place-items: center;    \r\n    background-color: #B9E5E8;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.keyboard__inner_darker1 {\r\n    background: #9BC3C6;\r\n    width: 540px;\r\n    height: 80px;\r\n    display: grid;\r\n    grid-template-columns: repeat(9, 1fr);\r\n    /* grid-template-rows: repeat(2, 1fr); */\r\n    place-items: center; \r\n    /* grid-gap: 2px; */\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    color: var(--text-color, #171710);\r\n   }\r\n.keyboard__item1 {\r\n    height: 100%;\r\n    width: 100%;\r\n    border: solid 1px #0A2893;\r\n    position: relative;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    /* color: var(--text-color, #171710); */\r\n    color: black;\r\n}\r\n.keyboard__img1{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    color: black;\r\n}\r\n\r\n\r\n.keyboard__inner_gray1 {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.keyboard__str_light1 {\r\n    background-color: #d4d5d4;\r\n    width: 540px;\r\n    height: 80px;\r\n    display: flex;\r\n    place-items: center;    \r\n}\r\n.keyboard__item_gray1 {\r\n    height: 100%;\r\n    width: 100%;\r\n    border-style: hidden;\r\n    position: relative;\r\n    background-color: #d4d5d4;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    padding-top: 15px;\r\n    border: solid 1px black;\r\n}\r\n.keyboard__item_gray11 {\r\n    height: 90%;\r\n    width: 90%;\r\n    border-style: hidden;\r\n    position: relative;\r\n    background-color: #7a7b7a;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    padding-top: 15px;\r\n    border: solid 1px black;\r\n}\r\n.keyboard__str_dark1 {\r\n    background-color:  #babbba;;\r\n    width: 540px;\r\n    height: 80px;\r\n    display: flex;\r\n    place-items: center;    \r\n}\r\n.keyboard__item_graylight1 {\r\n    height: 100%;\r\n    width: 100%;\r\n    border-style: hidden;\r\n    position: relative;\r\n    background-color:rgb(148, 146, 146);\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    border: solid 1px black;\r\n}\r\n.keyboard__img_gray1 {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.keyboard__inner_black1 {\r\n    width: 840px;\r\n    height: 80px;\r\n    display: grid;\r\n    grid-template-columns: repeat(9, 1fr);\r\n    background-color: black;\r\n    padding: 8px 8px 8px 8px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n/* .keyboard__item_gray1 {\r\n    height: 90%;\r\n    width: 90%;\r\n    background-color: #4a4b4f;\r\n    border-style: hidden;\r\n    position: relative;\r\n    color: white;\r\n} */\r\n.keyboard__img11 {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: white;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n}\r\n/* .keyboard__img21 {\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 30%;\r\n    transform: translate(-70%, -70%);\r\n    color: rgb(148, 146, 146);\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n} */\r\n.task41__nexttask {\r\n    width: 400px;\r\n    height: 200px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    border-radius: 10px;\r\n    border: solid 1px red;\r\n    background: white;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    padding-top: 50px;\r\n}", "",{"version":3,"sources":["webpack://./app/1modul/modul1task4/4(1)-1.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,4CAA4C;IAC5C,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,uCAAuC;IACvC,YAAY;AAChB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,sCAAsC;IACtC,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,qCAAqC;IACrC,mBAAmB;IACnB,yBAAyB;IACzB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iCAAiC;AACrC;AACA;IACI,mBAAmB;IACnB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,qCAAqC;IACrC,wCAAwC;IACxC,mBAAmB;IACnB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iCAAiC;GAClC;AACH;IACI,YAAY;IACZ,WAAW;IACX,yBAAyB;IACzB,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,uCAAuC;IACvC,YAAY;AAChB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;;;AAGA;IACI,aAAa;IACb,sBAAsB;AAC1B;AACA;IACI,yBAAyB;IACzB,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,WAAW;IACX,oBAAoB;IACpB,kBAAkB;IAClB,yBAAyB;IACzB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;IACI,WAAW;IACX,UAAU;IACV,oBAAoB;IACpB,kBAAkB;IAClB,yBAAyB;IACzB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,iBAAiB;IACjB,uBAAuB;AAC3B;AACA;IACI,0BAA0B;IAC1B,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,WAAW;IACX,oBAAoB;IACpB,kBAAkB;IAClB,mCAAmC;IACnC,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,uBAAuB;AAC3B;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;;;;;;;;;AASA;IACI,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,qCAAqC;IACrC,uBAAuB;IACvB,wBAAwB;IACxB,qBAAqB;IACrB,mBAAmB;AACvB;AACA;;;;;;;GAOG;AACH;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,YAAY;IACZ,gBAAgB;IAChB,eAAe;AACnB;AACA;;;;;;;;GAQG;AACH;IACI,YAAY;IACZ,aAAa;IACb,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;IACjB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,kBAAkB;IAClB,iBAAiB;AACrB","sourcesContent":[".task4__wrapper1 {\r\n    grid-area: wrapper;\r\n    padding: 20px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 20px;\r\n    background: var(--background-color, #ABFCC2);\r\n    position: relative;\r\n    height: 100vh;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    /* color: var(--text-color, #171710); */\r\n    color: black;\r\n}\r\n\r\n.task4__text1 {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px;\r\n    border-radius: 20px;\r\n}\r\n.keyboard__inner_big1 {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.keyboard__inner1{\r\n    width: 540px;\r\n    height: 80px;\r\n    display: grid;\r\n    grid-template-columns: repeat(9, 1fr);\r\n    place-items: center;    \r\n    background-color: #B9E5E8;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.keyboard__inner_darker1 {\r\n    background: #9BC3C6;\r\n    width: 540px;\r\n    height: 80px;\r\n    display: grid;\r\n    grid-template-columns: repeat(9, 1fr);\r\n    /* grid-template-rows: repeat(2, 1fr); */\r\n    place-items: center; \r\n    /* grid-gap: 2px; */\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    color: var(--text-color, #171710);\r\n   }\r\n.keyboard__item1 {\r\n    height: 100%;\r\n    width: 100%;\r\n    border: solid 1px #0A2893;\r\n    position: relative;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    /* color: var(--text-color, #171710); */\r\n    color: black;\r\n}\r\n.keyboard__img1{\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    color: black;\r\n}\r\n\r\n\r\n.keyboard__inner_gray1 {\r\n    display: flex;\r\n    flex-direction: column;\r\n}\r\n.keyboard__str_light1 {\r\n    background-color: #d4d5d4;\r\n    width: 540px;\r\n    height: 80px;\r\n    display: flex;\r\n    place-items: center;    \r\n}\r\n.keyboard__item_gray1 {\r\n    height: 100%;\r\n    width: 100%;\r\n    border-style: hidden;\r\n    position: relative;\r\n    background-color: #d4d5d4;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    padding-top: 15px;\r\n    border: solid 1px black;\r\n}\r\n.keyboard__item_gray11 {\r\n    height: 90%;\r\n    width: 90%;\r\n    border-style: hidden;\r\n    position: relative;\r\n    background-color: #7a7b7a;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    padding-top: 15px;\r\n    border: solid 1px black;\r\n}\r\n.keyboard__str_dark1 {\r\n    background-color:  #babbba;;\r\n    width: 540px;\r\n    height: 80px;\r\n    display: flex;\r\n    place-items: center;    \r\n}\r\n.keyboard__item_graylight1 {\r\n    height: 100%;\r\n    width: 100%;\r\n    border-style: hidden;\r\n    position: relative;\r\n    background-color:rgb(148, 146, 146);\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    border: solid 1px black;\r\n}\r\n.keyboard__img_gray1 {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.keyboard__inner_black1 {\r\n    width: 840px;\r\n    height: 80px;\r\n    display: grid;\r\n    grid-template-columns: repeat(9, 1fr);\r\n    background-color: black;\r\n    padding: 8px 8px 8px 8px;\r\n    justify-items: center;\r\n    align-items: center;\r\n}\r\n/* .keyboard__item_gray1 {\r\n    height: 90%;\r\n    width: 90%;\r\n    background-color: #4a4b4f;\r\n    border-style: hidden;\r\n    position: relative;\r\n    color: white;\r\n} */\r\n.keyboard__img11 {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    color: white;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n}\r\n/* .keyboard__img21 {\r\n    position: absolute;\r\n    top: 30%;\r\n    left: 30%;\r\n    transform: translate(-70%, -70%);\r\n    color: rgb(148, 146, 146);\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n} */\r\n.task41__nexttask {\r\n    width: 400px;\r\n    height: 200px;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    border-radius: 10px;\r\n    border: solid 1px red;\r\n    background: white;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    text-align: center;\r\n    padding-top: 50px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/2modul/2-instruction/2-inst.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/2modul/2-instruction/2-inst.css ***!
  \***********************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".instructionHolder2 {\r\n    grid-area: wrapper;\r\n    position: relative;\r\n    z-index: 2;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: var(--task-color, #F6F897);\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n}\r\n.instructionHolder__ImgInst2 {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 100px;\r\n}\r\n/* .leftPanel__imageHolder {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 50px;\r\n}\r\n.leftPanel__textInst {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 250px;\r\n} */\r\n.leftPanel__textH1-2 {\r\n    /* position: absolute;\r\n    top: 250px;\r\n    left: 50px; */\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    line-height: 28px;\r\n    color: var(--text-color, #171710);\r\n    text-align: center;\r\n}\r\n.leftPanel__text2 {\r\n    /* position: absolute;\r\n    top: 300px;\r\n    left: 50px; */\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 26px;\r\n    line-height: 34px;\r\n    color: var(--text-color, #171710);\r\n    text-align: center;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n\r\n/* .instructionHolder__righnPanel {\r\n    background: gray;\r\n    opacity: 50%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 400px;\r\n    height: 100vh;\r\n    width: 1200px;\r\n} */\r\n\r\n\r\n.button__ready2 {\r\n    /* position: absolute;\r\n    bottom: 100px;\r\n    left: 100px; */\r\n\r\n    width: 250px;\r\n    height: 50px;\r\n    background: var(--button-color, #4AEC47);\r\n    \r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.button__ready2:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}", "",{"version":3,"sources":["webpack://./app/2modul/2-instruction/2-inst.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,sCAAsC;IACtC,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,mBAAmB;IACnB,UAAU;AACd;AACA;;;;;;;;;GASG;AACH;IACI;;iBAEa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;IACjC,kBAAkB;AACtB;AACA;IACI;;iBAEa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;IACjC,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;;;;;;;;GAQG;;;AAGH;IACI;;kBAEc;;IAEd,YAAY;IACZ,YAAY;IACZ,wCAAwC;;IAExC,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;AACA;IACI,uBAAuB;IACvB,eAAe;AACnB","sourcesContent":[".instructionHolder2 {\r\n    grid-area: wrapper;\r\n    position: relative;\r\n    z-index: 2;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: var(--task-color, #F6F897);\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n}\r\n.instructionHolder__ImgInst2 {\r\n    display: flex;\r\n    flex-direction: row;\r\n    gap: 100px;\r\n}\r\n/* .leftPanel__imageHolder {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 50px;\r\n}\r\n.leftPanel__textInst {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 250px;\r\n} */\r\n.leftPanel__textH1-2 {\r\n    /* position: absolute;\r\n    top: 250px;\r\n    left: 50px; */\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    line-height: 28px;\r\n    color: var(--text-color, #171710);\r\n    text-align: center;\r\n}\r\n.leftPanel__text2 {\r\n    /* position: absolute;\r\n    top: 300px;\r\n    left: 50px; */\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 26px;\r\n    line-height: 34px;\r\n    color: var(--text-color, #171710);\r\n    text-align: center;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n\r\n/* .instructionHolder__righnPanel {\r\n    background: gray;\r\n    opacity: 50%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 400px;\r\n    height: 100vh;\r\n    width: 1200px;\r\n} */\r\n\r\n\r\n.button__ready2 {\r\n    /* position: absolute;\r\n    bottom: 100px;\r\n    left: 100px; */\r\n\r\n    width: 250px;\r\n    height: 50px;\r\n    background: var(--button-color, #4AEC47);\r\n    \r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.button__ready2:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/2modul/modul2task1/1-2.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/2modul/modul2task1/1-2.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".map__wrapper1 {\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    align-items: center;\r\n    background: var(--background-color, #ABFCC2);\r\n    position: relative;\r\n    height: 100vh;\r\n    padding: 200px;\r\n\r\n}\r\n.map__pictureswrapper1 {\r\n    display: flex;\r\n    gap: 100px;\r\n}\r\n.map__text1 {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 28px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.map__button1 {\r\n    background: var(--button-color, #4AEC47);\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n}\r\n.map__button1:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n", "",{"version":3,"sources":["webpack://./app/2modul/modul2task1/1-2.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,4CAA4C;IAC5C,kBAAkB;IAClB,aAAa;IACb,cAAc;;AAElB;AACA;IACI,aAAa;IACb,UAAU;AACd;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;AACA;IACI,wCAAwC;IACxC,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,uBAAuB;IACvB,eAAe;AACnB","sourcesContent":[".map__wrapper1 {\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    align-items: center;\r\n    background: var(--background-color, #ABFCC2);\r\n    position: relative;\r\n    height: 100vh;\r\n    padding: 200px;\r\n\r\n}\r\n.map__pictureswrapper1 {\r\n    display: flex;\r\n    gap: 100px;\r\n}\r\n.map__text1 {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 28px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.map__button1 {\r\n    background: var(--button-color, #4AEC47);\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n}\r\n.map__button1:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/2modul/modul2task2/2-2.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/2modul/modul2task2/2-2.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".map__wrapper {\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 40px;\r\n    align-items: center;\r\n    background: var(--background-color, #ABFCC2);\r\n    padding-top: 20px;\r\n    position: relative;\r\n    height: 100vh;\r\n    \r\n}\r\n.map__explanation {\r\n    background: var(--task-color, #F6F897);\r\n    width: 600px;\r\n    height: 100px;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n}\r\n.map__taskwrapper {\r\n    display: flex;\r\n    gap: 300px;\r\n   \r\n}\r\n.map__explanationholder {\r\n    background:var(--task-color, #F6F897);\r\n    position: relative;\r\n    \r\n}\r\n.map__imgexplanation {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n}\r\n.map__taskholder {\r\n    display: grid;\r\n    grid-template-rows: repeat(1fr, 2);\r\n    grid-template-columns: repeat(1fr, 2);\r\n    gap: 20px;\r\n    grid-template-areas: \r\n        'pict1 . pict2'\r\n        /* '. ques .' */\r\n        'pict3 . pict4';\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n.map__pict1 {\r\n    grid-area: pict1;\r\n}\r\n.map__pict2 {\r\n    grid-area: pict2;\r\n}\r\n.map__pict3 {\r\n    grid-area: pict3;\r\n}\r\n.map__pict4 {\r\n    grid-area: pict4;\r\n}\r\n\r\n.map__quest {\r\n    /* grid-area: ques; */\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 60px;\r\n    line-height: 68px;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 50%;\r\n    transform: translate(-60%, -50%);\r\n}\r\n.map__pictureswrapper {\r\n    display: flex;\r\n    gap: 100px;\r\n    padding: 10px;\r\n}\r\n.map__text {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24 px;\r\n    line-height: 24px;\r\n}\r\n.map__textcorrect {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 32px;\r\n    line-height: 48px;\r\n    color: green;\r\n}\r\n.map__textwrong {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 32px;\r\n    line-height: 48px;\r\n    color: red;\r\n}\r\n.map__button {\r\n    background: var(--button-color, #4AEC47);\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n}\r\n.pict__wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.map__button:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}\r\n", "",{"version":3,"sources":["webpack://./app/2modul/modul2task2/2-2.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,4CAA4C;IAC5C,iBAAiB;IACjB,kBAAkB;IAClB,aAAa;;AAEjB;AACA;IACI,sCAAsC;IACtC,YAAY;IACZ,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,UAAU;;AAEd;AACA;IACI,qCAAqC;IACrC,kBAAkB;;AAEtB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;AACA;IACI,aAAa;IACb,kCAAkC;IAClC,qCAAqC;IACrC,SAAS;IACT;;;uBAGmB;IACnB,qCAAqC;IACrC,aAAa;IACb,kBAAkB;AACtB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;AACA;IACI,gBAAgB;AACpB;;AAEA;IACI,qBAAqB;IACrB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;AACpC;AACA;IACI,aAAa;IACb,UAAU;IACV,aAAa;AACjB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,YAAY;AAChB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,UAAU;AACd;AACA;IACI,wCAAwC;IACxC,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,uBAAuB;IACvB,eAAe;AACnB","sourcesContent":[".map__wrapper {\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 40px;\r\n    align-items: center;\r\n    background: var(--background-color, #ABFCC2);\r\n    padding-top: 20px;\r\n    position: relative;\r\n    height: 100vh;\r\n    \r\n}\r\n.map__explanation {\r\n    background: var(--task-color, #F6F897);\r\n    width: 600px;\r\n    height: 100px;\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n}\r\n.map__taskwrapper {\r\n    display: flex;\r\n    gap: 300px;\r\n   \r\n}\r\n.map__explanationholder {\r\n    background:var(--task-color, #F6F897);\r\n    position: relative;\r\n    \r\n}\r\n.map__imgexplanation {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%); \r\n}\r\n.map__taskholder {\r\n    display: grid;\r\n    grid-template-rows: repeat(1fr, 2);\r\n    grid-template-columns: repeat(1fr, 2);\r\n    gap: 20px;\r\n    grid-template-areas: \r\n        'pict1 . pict2'\r\n        /* '. ques .' */\r\n        'pict3 . pict4';\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px;\r\n    position: relative;\r\n}\r\n.map__pict1 {\r\n    grid-area: pict1;\r\n}\r\n.map__pict2 {\r\n    grid-area: pict2;\r\n}\r\n.map__pict3 {\r\n    grid-area: pict3;\r\n}\r\n.map__pict4 {\r\n    grid-area: pict4;\r\n}\r\n\r\n.map__quest {\r\n    /* grid-area: ques; */\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 60px;\r\n    line-height: 68px;\r\n    position: absolute;\r\n    top: 40%;\r\n    left: 50%;\r\n    transform: translate(-60%, -50%);\r\n}\r\n.map__pictureswrapper {\r\n    display: flex;\r\n    gap: 100px;\r\n    padding: 10px;\r\n}\r\n.map__text {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24 px;\r\n    line-height: 24px;\r\n}\r\n.map__textcorrect {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 32px;\r\n    line-height: 48px;\r\n    color: green;\r\n}\r\n.map__textwrong {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 32px;\r\n    line-height: 48px;\r\n    color: red;\r\n}\r\n.map__button {\r\n    background: var(--button-color, #4AEC47);\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n}\r\n.pict__wrapper {\r\n    display: flex;\r\n    flex-direction: column;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.map__button:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/2modul/modul2task3/3-2.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/2modul/modul2task3/3-2.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".mapshow__wrapper {\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 50px;\r\n    background: var(--background-color, #ABFCC2);\r\n    padding-top: 50px;\r\n    padding-bottom: 10px;\r\n    position: relative;\r\n    height: 100vh;\r\n    \r\n}\r\n.mapshow__text {\r\n    background: var(--task-color, #F6F897);\r\n    width: 600px;\r\n    height: 100px;\r\n    padding: 20px;\r\n    text-align: center;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 60px;\r\n    line-height: 68px;\r\n    border-radius: 20px;\r\n}\r\n.mapshow__taskwrapper{\r\n    display: flex;\r\n    gap: 200px;\r\n    background: var(--task-color, #F6F897);\r\n    padding-left: 60px;\r\n    padding-right: 60px;\r\n \r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 20px;\r\n    height: 320px;\r\n}\r\n.mapshow__picturetext {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 40px;\r\n    line-height: 45px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.mapshow__picturequestion{\r\n \r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 100px;\r\n    line-height: 68px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.mapshow__picturesholder {\r\n    display: flex;\r\n    align-self: space-evenly;\r\n    gap: 20px;\r\n\r\n}\r\n.mapshow__button {\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 20px;\r\n    border-width: 2px;\r\n    border: solid black;\r\n    box-shadow: 10px 10px rgba(0, 0, 0, 0.5);\r\n    padding-top: 5px;\r\n    padding-left: 5px;\r\n}\r\n/* .mapshow__picturesymbol {\r\n\r\n} */\r\n.mapshow__correcttext {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 40px;\r\n    /* line-height: 50px; */\r\n    color: green;\r\n    text-align: center;\r\n}\r\n.mapshow__wrongtext {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 40px;\r\n    line-height: 50px;\r\n    color: red;\r\n    text-align: center;\r\n}\r\n.mapshow__taskanswer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: var(--background-color, #ABFCC2);\r\n    border-radius: 20px;\r\n    /* margin-top: 30px;\r\n    margin-bottom: 50px; */\r\n    display: none;\r\n    border: solid 2px green;\r\n    box-shadow: 10px 10px 10px 10px rgba(17, 239, 54, 0.5);\r\n    width: 600px;\r\n    height: 320px;    \r\n}\r\n\r\n.mapshow__taskanswerwrong {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: var(--background-color, #ABFCC2);\r\n    border-radius: 20px;\r\n    /* margin-top: 30px;\r\n    margin-bottom: 50px; */\r\n    display: none;\r\n    border: solid 2px red;\r\n    box-shadow: 10px 10px 10px 10px rgba(236, 42, 42, 0.5);\r\n    background: var(--background-color, #ABFCC2);\r\n    width: 600px;\r\n    height: 320px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.mapshow__answerholder {\r\n    display: flex;\r\n    gap: 20px;\r\n    \r\n    /* padding-left: 60px;\r\n    padding-right: 60px;\r\n  */\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    background: var(--background-color, #ABFCC2);\r\n}", "",{"version":3,"sources":["webpack://./app/2modul/modul2task3/3-2.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,SAAS;IACT,4CAA4C;IAC5C,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;;AAEjB;AACA;IACI,sCAAsC;IACtC,YAAY;IACZ,aAAa;IACb,aAAa;IACb,kBAAkB;IAClB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,UAAU;IACV,sCAAsC;IACtC,kBAAkB;IAClB,mBAAmB;;IAEnB,uBAAuB;IACvB,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;AACjB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;AACA;;IAEI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,gBAAgB;IAChB,iBAAiB;IACjB,iCAAiC;AACrC;AACA;IACI,aAAa;IACb,wBAAwB;IACxB,SAAS;;AAEb;AACA;IACI,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,iBAAiB;IACjB,mBAAmB;IACnB,wCAAwC;IACxC,gBAAgB;IAChB,iBAAiB;AACrB;AACA;;GAEG;AACH;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,uBAAuB;IACvB,YAAY;IACZ,kBAAkB;AACtB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,UAAU;IACV,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,4CAA4C;IAC5C,mBAAmB;IACnB;0BACsB;IACtB,aAAa;IACb,uBAAuB;IACvB,sDAAsD;IACtD,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,4CAA4C;IAC5C,mBAAmB;IACnB;0BACsB;IACtB,aAAa;IACb,qBAAqB;IACrB,sDAAsD;IACtD,4CAA4C;IAC5C,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,SAAS;;IAET;;GAED;IACC,6BAA6B;IAC7B,mBAAmB;IACnB,4CAA4C;AAChD","sourcesContent":[".mapshow__wrapper {\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    gap: 50px;\r\n    background: var(--background-color, #ABFCC2);\r\n    padding-top: 50px;\r\n    padding-bottom: 10px;\r\n    position: relative;\r\n    height: 100vh;\r\n    \r\n}\r\n.mapshow__text {\r\n    background: var(--task-color, #F6F897);\r\n    width: 600px;\r\n    height: 100px;\r\n    padding: 20px;\r\n    text-align: center;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 60px;\r\n    line-height: 68px;\r\n    border-radius: 20px;\r\n}\r\n.mapshow__taskwrapper{\r\n    display: flex;\r\n    gap: 200px;\r\n    background: var(--task-color, #F6F897);\r\n    padding-left: 60px;\r\n    padding-right: 60px;\r\n \r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 20px;\r\n    height: 320px;\r\n}\r\n.mapshow__picturetext {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 40px;\r\n    line-height: 45px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.mapshow__picturequestion{\r\n \r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 100px;\r\n    line-height: 68px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.mapshow__picturesholder {\r\n    display: flex;\r\n    align-self: space-evenly;\r\n    gap: 20px;\r\n\r\n}\r\n.mapshow__button {\r\n    width: 120px;\r\n    height: 120px;\r\n    border-radius: 20px;\r\n    border-width: 2px;\r\n    border: solid black;\r\n    box-shadow: 10px 10px rgba(0, 0, 0, 0.5);\r\n    padding-top: 5px;\r\n    padding-left: 5px;\r\n}\r\n/* .mapshow__picturesymbol {\r\n\r\n} */\r\n.mapshow__correcttext {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 40px;\r\n    /* line-height: 50px; */\r\n    color: green;\r\n    text-align: center;\r\n}\r\n.mapshow__wrongtext {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 40px;\r\n    line-height: 50px;\r\n    color: red;\r\n    text-align: center;\r\n}\r\n.mapshow__taskanswer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: var(--background-color, #ABFCC2);\r\n    border-radius: 20px;\r\n    /* margin-top: 30px;\r\n    margin-bottom: 50px; */\r\n    display: none;\r\n    border: solid 2px green;\r\n    box-shadow: 10px 10px 10px 10px rgba(17, 239, 54, 0.5);\r\n    width: 600px;\r\n    height: 320px;    \r\n}\r\n\r\n.mapshow__taskanswerwrong {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: var(--background-color, #ABFCC2);\r\n    border-radius: 20px;\r\n    /* margin-top: 30px;\r\n    margin-bottom: 50px; */\r\n    display: none;\r\n    border: solid 2px red;\r\n    box-shadow: 10px 10px 10px 10px rgba(236, 42, 42, 0.5);\r\n    background: var(--background-color, #ABFCC2);\r\n    width: 600px;\r\n    height: 320px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.mapshow__answerholder {\r\n    display: flex;\r\n    gap: 20px;\r\n    \r\n    /* padding-left: 60px;\r\n    padding-right: 60px;\r\n  */\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    background: var(--background-color, #ABFCC2);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/2modul/modul2task4/4-2.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/2modul/modul2task4/4-2.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".task4-2__wrapper {\r\n    grid-area: wrapper;\r\n    padding-top: 20px;\r\n    /* padding-left: 200px; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 40px;\r\n    align-items: center;\r\n    justify-items: center;\r\n    background: var(--background-color, #ABFCC2);\r\n    position: relative;\r\n    height: 100vh;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n}\r\n\r\n.task4-2__taskcontainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    background: var(--task-color, #F6F897);\r\n    gap: 10px;\r\n}\r\n.image__wrapper {\r\n    display: flex;\r\n    justify-content: center;\r\n    \r\n    /* padding: 10px; */\r\n    \r\n}\r\n.task4-2__taskholder {\r\n    width: 600px;\r\n    /* height: 150px; */\r\n    background: var(--task-color, #F6F897);\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n\r\n}\r\n\r\n.task4-2__text {\r\n\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.task4-2__form {\r\n    display: flex;\r\n    gap: 100px;\r\n    align-items: center;\r\n    padding-left: 30px;\r\n}\r\n.task4-2__input {\r\n    width: 40px;\r\n    border: solid 2px black;\r\n}\r\n.task4-2__answersholder {\r\n    display: flex;\r\n    gap: 30px;\r\n    background: var(--task-color, #F6F897);\r\n}\r\n.task4-2__answer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.task4-2__correctanswers {\r\n    position: absolute;\r\n    top: 100px;\r\n    right: 150px;\r\n    width: 100px;\r\n    height: 200px;\r\n    background: var(--task-color, #F6F897);\r\n    visibility: hidden;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n} \r\n.task4-2__backtext {\r\n    /* position: absolute;\r\n    bottom: 50px;\r\n    left: 400px; */\r\n    width: 900px;\r\n    height: 50px;\r\n    background: var(--task-color, #F6F897);\r\n    visibility: hidden;\r\n    text-align: center;\r\n    padding: 20px;\r\n    \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.task4-2__answerline {\r\n    display: flex;\r\n    gap: 130px;\r\n    align-items: flex-start;\r\n    padding-left: 60px;\r\n    visibility: hidden;\r\n}\r\n.answeline__answer {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n}", "",{"version":3,"sources":["webpack://./app/2modul/modul2task4/4-2.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,yBAAyB;IACzB,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,mBAAmB;IACnB,qBAAqB;IACrB,4CAA4C;IAC5C,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,sCAAsC;IACtC,SAAS;AACb;AACA;IACI,aAAa;IACb,uBAAuB;;IAEvB,mBAAmB;;AAEvB;AACA;IACI,YAAY;IACZ,mBAAmB;IACnB,sCAAsC;IACtC,aAAa;IACb,mBAAmB;;AAEvB;;AAEA;;IAEI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;AACA;IACI,aAAa;IACb,UAAU;IACV,mBAAmB;IACnB,kBAAkB;AACtB;AACA;IACI,WAAW;IACX,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,SAAS;IACT,sCAAsC;AAC1C;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,kBAAkB;IAClB,UAAU;IACV,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,sCAAsC;IACtC,kBAAkB;IAClB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;AACA;IACI;;kBAEc;IACd,YAAY;IACZ,YAAY;IACZ,sCAAsC;IACtC,kBAAkB;IAClB,kBAAkB;IAClB,aAAa;;IAEb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;AACA;IACI,aAAa;IACb,UAAU;IACV,uBAAuB;IACvB,kBAAkB;IAClB,kBAAkB;AACtB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC","sourcesContent":[".task4-2__wrapper {\r\n    grid-area: wrapper;\r\n    padding-top: 20px;\r\n    /* padding-left: 200px; */\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 40px;\r\n    align-items: center;\r\n    justify-items: center;\r\n    background: var(--background-color, #ABFCC2);\r\n    position: relative;\r\n    height: 100vh;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n}\r\n\r\n.task4-2__taskcontainer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding: 10px;\r\n    background: var(--task-color, #F6F897);\r\n    gap: 10px;\r\n}\r\n.image__wrapper {\r\n    display: flex;\r\n    justify-content: center;\r\n    \r\n    /* padding: 10px; */\r\n    \r\n}\r\n.task4-2__taskholder {\r\n    width: 600px;\r\n    /* height: 150px; */\r\n    background: var(--task-color, #F6F897);\r\n    padding: 20px;\r\n    border-radius: 20px;\r\n\r\n}\r\n\r\n.task4-2__text {\r\n\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.task4-2__form {\r\n    display: flex;\r\n    gap: 100px;\r\n    align-items: center;\r\n    padding-left: 30px;\r\n}\r\n.task4-2__input {\r\n    width: 40px;\r\n    border: solid 2px black;\r\n}\r\n.task4-2__answersholder {\r\n    display: flex;\r\n    gap: 30px;\r\n    background: var(--task-color, #F6F897);\r\n}\r\n.task4-2__answer {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.task4-2__correctanswers {\r\n    position: absolute;\r\n    top: 100px;\r\n    right: 150px;\r\n    width: 100px;\r\n    height: 200px;\r\n    background: var(--task-color, #F6F897);\r\n    visibility: hidden;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n} \r\n.task4-2__backtext {\r\n    /* position: absolute;\r\n    bottom: 50px;\r\n    left: 400px; */\r\n    width: 900px;\r\n    height: 50px;\r\n    background: var(--task-color, #F6F897);\r\n    visibility: hidden;\r\n    text-align: center;\r\n    padding: 20px;\r\n    \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.task4-2__answerline {\r\n    display: flex;\r\n    gap: 130px;\r\n    align-items: flex-start;\r\n    padding-left: 60px;\r\n    visibility: hidden;\r\n}\r\n.answeline__answer {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/3modul/3-firstpage/3firstpage.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/3modul/3-firstpage/3firstpage.css ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".artholder {\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 50px;\r\n    background: var(--background-color, #ABFCC2);\r\n    position: relative;\r\n    height: 100vh;\r\n    padding: 50px;\r\n}\r\n.joconda {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px;\r\n    height: 500px;\r\n    border-radius: 20px;\r\n}\r\n/* .joconda__image {\r\n    align-self: stretch;\r\n} */\r\n.joconda__text {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 34px;\r\n    text-align: center;\r\n}\r\n.adam {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px;\r\n    height: 500px;\r\n    border-radius: 20px;\r\n    text-align: center;\r\n}\r\n/* .adam__image {\r\n    align-self: stretch;\r\n} */\r\n.adam__text {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 34px;\r\n\r\n}", "",{"version":3,"sources":["webpack://./app/3modul/3-firstpage/3firstpage.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,uBAAuB;IACvB,SAAS;IACT,4CAA4C;IAC5C,kBAAkB;IAClB,aAAa;IACb,aAAa;AACjB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,qCAAqC;IACrC,aAAa;IACb,aAAa;IACb,mBAAmB;AACvB;AACA;;GAEG;AACH;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,qCAAqC;IACrC,aAAa;IACb,aAAa;IACb,mBAAmB;IACnB,kBAAkB;AACtB;AACA;;GAEG;AACH;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;;AAErB","sourcesContent":[".artholder {\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    justify-content: center;\r\n    gap: 50px;\r\n    background: var(--background-color, #ABFCC2);\r\n    position: relative;\r\n    height: 100vh;\r\n    padding: 50px;\r\n}\r\n.joconda {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px;\r\n    height: 500px;\r\n    border-radius: 20px;\r\n}\r\n/* .joconda__image {\r\n    align-self: stretch;\r\n} */\r\n.joconda__text {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 34px;\r\n    text-align: center;\r\n}\r\n.adam {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px;\r\n    height: 500px;\r\n    border-radius: 20px;\r\n    text-align: center;\r\n}\r\n/* .adam__image {\r\n    align-self: stretch;\r\n} */\r\n.adam__text {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 34px;\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/3modul/3-instr/3-inst.css":
/*!*****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/3modul/3-instr/3-inst.css ***!
  \*****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".instructionHolder3 {\r\n    grid-area: wrapper;\r\n    position: relative;\r\n    z-index: 2;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: var(--task-color, #F6F897);\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n}\r\n.instructionHolder__imgInst3 {\r\n    display: flex;\r\n    gap: 100px;\r\n}\r\n/* .leftPanel__imageHolder {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 50px;\r\n}\r\n.leftPanel__textInst {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 250px;\r\n} */\r\n.leftPanel__textH1-3 {\r\n    /* position: absolute;\r\n    top: 250px;\r\n    left: 50px; */\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    line-height: 28px;\r\n    color: var(--text-color, #171710);\r\n    text-align: center;\r\n}\r\n.leftPanel__text3 {\r\n    /* position: absolute;\r\n    top: 300px;\r\n    left: 50px; */\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 26px;\r\n    line-height: 34px;\r\n    color: var(--text-color, #171710);\r\n    text-align: center;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n\r\n/* .instructionHolder__righnPanel {\r\n    background: gray;\r\n    opacity: 50%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 400px;\r\n    height: 100vh;\r\n    width: 1200px;\r\n} */\r\n\r\n\r\n.button__ready3 {\r\n    /* position: absolute;\r\n    bottom: 100px;\r\n    left: 100px; */\r\n\r\n    width: 250px;\r\n    height: 50px;\r\n    background: var(--button-color, #4AEC47);\r\n    \r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.button__ready3:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}", "",{"version":3,"sources":["webpack://./app/3modul/3-instr/3-inst.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,kBAAkB;IAClB,UAAU;IACV,aAAa;IACb,aAAa;IACb,sBAAsB;IACtB,sCAAsC;IACtC,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,UAAU;AACd;AACA;;;;;;;;;GASG;AACH;IACI;;iBAEa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;IACjC,kBAAkB;AACtB;AACA;IACI;;iBAEa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;IACjC,kBAAkB;IAClB,iBAAiB;IACjB,kBAAkB;AACtB;;AAEA;;;;;;;;GAQG;;;AAGH;IACI;;kBAEc;;IAEd,YAAY;IACZ,YAAY;IACZ,wCAAwC;;IAExC,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;AACA;IACI,uBAAuB;IACvB,eAAe;AACnB","sourcesContent":[".instructionHolder3 {\r\n    grid-area: wrapper;\r\n    position: relative;\r\n    z-index: 2;\r\n    height: 100vh;\r\n    display: flex;\r\n    flex-direction: column;\r\n    background: var(--task-color, #F6F897);\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    padding-left: 50px;\r\n    padding-right: 50px;\r\n}\r\n.instructionHolder__imgInst3 {\r\n    display: flex;\r\n    gap: 100px;\r\n}\r\n/* .leftPanel__imageHolder {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 50px;\r\n}\r\n.leftPanel__textInst {\r\n    position: absolute;\r\n    top: 50px;\r\n    left: 250px;\r\n} */\r\n.leftPanel__textH1-3 {\r\n    /* position: absolute;\r\n    top: 250px;\r\n    left: 50px; */\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    line-height: 28px;\r\n    color: var(--text-color, #171710);\r\n    text-align: center;\r\n}\r\n.leftPanel__text3 {\r\n    /* position: absolute;\r\n    top: 300px;\r\n    left: 50px; */\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 26px;\r\n    line-height: 34px;\r\n    color: var(--text-color, #171710);\r\n    text-align: center;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n}\r\n\r\n/* .instructionHolder__righnPanel {\r\n    background: gray;\r\n    opacity: 50%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 400px;\r\n    height: 100vh;\r\n    width: 1200px;\r\n} */\r\n\r\n\r\n.button__ready3 {\r\n    /* position: absolute;\r\n    bottom: 100px;\r\n    left: 100px; */\r\n\r\n    width: 250px;\r\n    height: 50px;\r\n    background: var(--button-color, #4AEC47);\r\n    \r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.button__ready3:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/3modul/Adam/adam.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/3modul/Adam/adam.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".artholder1{\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    background: var(--background-color, #ABFCC2);\r\n    position: relative;\r\n    height: 100vh;\r\n    /* padding: 10px; */\r\n}\r\n.textholder1 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n\r\n}\r\n.textholder__header1 {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    line-height: 40px;\r\n    color: var(--text-color, #171710);\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n\r\n}\r\n.textholder__text1 {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 36px;\r\n    color: var(--text-color, #171710);\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.textholder__artquestion1 {\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 36px;\r\n}\r\n.textholder__artdetails1 {\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n}\r\n.textholder__artsummary1 {\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 36px;\r\n}\r\n.artsummary__text1 {\r\n    text-decoration: underline;\r\n}\r\n.adam {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n.adam__image {\r\n    display: flex;\r\n    gap: 100px;\r\n    align-items: flex-end;\r\n}\r\n.art__button1 {\r\n    width: 200px;\r\n    height: 50px;\r\n    background: var(--button-color, #4AEC47);\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n} \r\n.art__button1:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}\r\n\r\n.textholder__artform1 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 36px;\r\n    text-align: center;\r\n}\r\n.artform__label1 {\r\n    display: flex;\r\n    gap: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n}\r\n.artform__text1 {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 36px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.textholder__answer1 {\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    /* visibility: hidden; */\r\n}\r\n.finish1 {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    text-align: center;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    line-height: 46px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.adam__textholder {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 36px;\r\n}", "",{"version":3,"sources":["webpack://./app/3modul/Adam/adam.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,SAAS;IACT,4CAA4C;IAC5C,kBAAkB;IAClB,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,SAAS;IACT,aAAa;IACb,mBAAmB;;AAEvB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;IACjC,qCAAqC;IACrC,aAAa;IACb,mBAAmB;;AAEvB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;IACjC,qCAAqC;IACrC,aAAa;IACb,mBAAmB;AACvB;;;;;;;AAOA;IACI,qCAAqC;IACrC,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,qCAAqC;IACrC,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,qCAAqC;IACrC,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,0BAA0B;AAC9B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,QAAQ;AACZ;AACA;IACI,aAAa;IACb,UAAU;IACV,qBAAqB;AACzB;AACA;IACI,YAAY;IACZ,YAAY;IACZ,wCAAwC;IACxC,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;AACA;IACI,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,sCAAsC;IACtC,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,aAAa;IACb,SAAS;IACT,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;AACA;IACI,sCAAsC;IACtC,aAAa;IACb,mBAAmB;IACnB,wBAAwB;AAC5B;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,sCAAsC;IACtC,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sCAAsC;IACtC,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB","sourcesContent":[".artholder1{\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 20px;\r\n    background: var(--background-color, #ABFCC2);\r\n    position: relative;\r\n    height: 100vh;\r\n    /* padding: 10px; */\r\n}\r\n.textholder1 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 20px;\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n\r\n}\r\n.textholder__header1 {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    line-height: 40px;\r\n    color: var(--text-color, #171710);\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n\r\n}\r\n.textholder__text1 {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 36px;\r\n    color: var(--text-color, #171710);\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n.textholder__artquestion1 {\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 36px;\r\n}\r\n.textholder__artdetails1 {\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n}\r\n.textholder__artsummary1 {\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 36px;\r\n}\r\n.artsummary__text1 {\r\n    text-decoration: underline;\r\n}\r\n.adam {\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n    gap: 5px;\r\n}\r\n.adam__image {\r\n    display: flex;\r\n    gap: 100px;\r\n    align-items: flex-end;\r\n}\r\n.art__button1 {\r\n    width: 200px;\r\n    height: 50px;\r\n    background: var(--button-color, #4AEC47);\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n} \r\n.art__button1:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}\r\n\r\n.textholder__artform1 {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 36px;\r\n    text-align: center;\r\n}\r\n.artform__label1 {\r\n    display: flex;\r\n    gap: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n}\r\n.artform__text1 {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 36px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.textholder__answer1 {\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    /* visibility: hidden; */\r\n}\r\n.finish1 {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    text-align: center;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    line-height: 46px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.adam__textholder {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 36px;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/3modul/Joconda/joconda.css":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/3modul/Joconda/joconda.css ***!
  \******************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".artholder{\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    gap: 150px;\r\n    background: var(--background-color, #ABFCC2);\r\n    position: relative;\r\n    height: 100vh;\r\n    padding: 50px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.textholder {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 100px;\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n\r\n}\r\n.textholder__artquestion {\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 30px;\r\n}\r\n.textholder__artdetails {\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 30px;\r\n}\r\n.textholder__artsummary {\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 30px;\r\n}\r\n.artsummary__text {\r\n    text-decoration: underline;\r\n}\r\n\r\n.art__button {\r\n    width: 200px;\r\n    height: 50px;\r\n    background: var(--button-color, #4AEC47);\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n} \r\n.art__button:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}\r\n\r\n.textholder__header {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    line-height: 40px;\r\n    color: var(--text-color, #171710);\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n\r\n}\r\n.textholder__text {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 36px;\r\n    color: var(--text-color, #171710);\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n}\r\n.textholder__artquestion {\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n}\r\n.textholder__artform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 30px;\r\n\r\n}\r\n.artform__label {\r\n    display: flex;\r\n    gap: 20px;\r\n}\r\n.artform__text {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 30px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.textholder__answer {\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    /* visibility: hidden; */\r\n}\r\n.finish {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    text-align: center;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    line-height: 46px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.joconda__image {\r\n     display: flex;\r\n  \r\n    justify-content: flex-start;\r\n    align-content: flex-start;\r\n    gap: 3px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./app/3modul/Joconda/joconda.css"],"names":[],"mappings":"AAAA;IACI,kBAAkB;IAClB,aAAa;IACb,2BAA2B;IAC3B,uBAAuB;IACvB,UAAU;IACV,4CAA4C;IAC5C,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,uBAAuB;IACvB,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;IACV,aAAa;IACb,mBAAmB;;AAEvB;AACA;IACI,qCAAqC;IACrC,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,qCAAqC;IACrC,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,qCAAqC;IACrC,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,0BAA0B;AAC9B;;AAEA;IACI,YAAY;IACZ,YAAY;IACZ,wCAAwC;IACxC,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;AACA;IACI,uBAAuB;IACvB,eAAe;AACnB;;AAEA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;IACjC,qCAAqC;IACrC,aAAa;IACb,mBAAmB;;AAEvB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;IACjC,qCAAqC;IACrC,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,qCAAqC;IACrC,aAAa;IACb,mBAAmB;AACvB;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,QAAQ;IACR,sCAAsC;IACtC,aAAa;IACb,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;;AAErB;AACA;IACI,aAAa;IACb,SAAS;AACb;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;AACA;IACI,sCAAsC;IACtC,aAAa;IACb,mBAAmB;IACnB,wBAAwB;AAC5B;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,sCAAsC;IACtC,aAAa;IACb,kBAAkB;IAClB,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,iCAAiC;AACrC;AACA;KACK,aAAa;;IAEd,2BAA2B;IAC3B,yBAAyB;IACzB,QAAQ;AACZ","sourcesContent":[".artholder{\r\n    grid-area: wrapper;\r\n    display: flex;\r\n    justify-content: flex-start;\r\n    align-items: flex-start;\r\n    gap: 150px;\r\n    background: var(--background-color, #ABFCC2);\r\n    position: relative;\r\n    height: 100vh;\r\n    padding: 50px;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n.textholder {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 100px;\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n\r\n}\r\n.textholder__artquestion {\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 30px;\r\n}\r\n.textholder__artdetails {\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 30px;\r\n}\r\n.textholder__artsummary {\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 30px;\r\n}\r\n.artsummary__text {\r\n    text-decoration: underline;\r\n}\r\n\r\n.art__button {\r\n    width: 200px;\r\n    height: 50px;\r\n    background: var(--button-color, #4AEC47);\r\n    text-align: center;\r\n    padding-top: 20px;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 24px;\r\n    line-height: 24px;\r\n    color: var(--text-color, #171710);\r\n} \r\n.art__button:hover {\r\n    border: solid 2px black;\r\n    cursor: pointer;\r\n}\r\n\r\n.textholder__header {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    line-height: 40px;\r\n    color: var(--text-color, #171710);\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n\r\n}\r\n.textholder__text {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 36px;\r\n    color: var(--text-color, #171710);\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n}\r\n.textholder__artquestion {\r\n    background:var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n}\r\n.textholder__artform {\r\n    display: flex;\r\n    flex-direction: column;\r\n    gap: 5px;\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 30px;\r\n\r\n}\r\n.artform__label {\r\n    display: flex;\r\n    gap: 20px;\r\n}\r\n.artform__text {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 24px;\r\n    line-height: 30px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.textholder__answer {\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    border-radius: 20px;\r\n    /* visibility: hidden; */\r\n}\r\n.finish {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%);\r\n    background: var(--task-color, #F6F897);\r\n    padding: 10px; \r\n    text-align: center;\r\n    border-radius: 20px;\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 36px;\r\n    line-height: 46px;\r\n    color: var(--text-color, #171710);\r\n}\r\n.joconda__image {\r\n     display: flex;\r\n  \r\n    justify-content: flex-start;\r\n    align-content: flex-start;\r\n    gap: 3px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/firstPage/firstpage.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/firstPage/firstpage.css ***!
  \***************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".wrapper {\r\n    padding-top: 40px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* gap: 100px; */\r\n    background: var(--main-page);\r\n    align-items: center;\r\n    position: relative;\r\n    height: 100vh;\r\n}\r\n.firstpage__choosetext{\r\n    font-family: 'Poppins';\r\n    font-style: bold;\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n    line-height: 14px;\r\n    margin-top: 70px;\r\n    /* margin-left: 25px; */\r\n    text-decoration: underline;\r\n}\r\n.firstpage__textholder {\r\n    display: flex;\r\n    justify-content: center;\r\n    background:rgb(249, 244, 158);\r\n    border: solid 8px;\r\n    border-radius: 5px;\r\n    border: rgb(103, 98, 98);\r\n    width: 550px;\r\n    height: 130px;\r\n    gap: 20px;\r\n    padding: 10px 10px 10px 10px;\r\n}\r\n.firstpage__triangle {\r\n        /* align-self: flex-start; */\r\n        width: 20px;\r\n        height: 20px;\r\n        margin-top: 20px;\r\n}\r\n.firstpage__text {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 22px;\r\n}\r\n.modul {\r\n    /* margin-left: 300px; */\r\n    display: flex;\r\n    gap: 120px;\r\n}\r\n.modul__holder{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 20px;\r\n    margin-top: 20px;\r\n}\r\n.modul__holder_brown {\r\n    background: linear-gradient(to bottom, #ffffcc -9%, #ffcc66 100%);;\r\n    border-radius: 20px;\r\n}\r\n.modul__holder_blue {\r\n    background: linear-gradient(to bottom, #ccffff -9%, #33ccff 100%);\r\n    border-radius: 20px;\r\n}\r\n.modul__holder_gray {\r\n    background: linear-gradient(to bottom, #ccffcc 0%, #00cc99 100%);\r\n    border-radius: 20px;\r\n}\r\n.modul__image {\r\n    width: 150px;\r\n    height: 180px;\r\n}\r\n.modul__text {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    text-align: center;\r\n}\r\n.colorButton {\r\n    align-self: flex-start;\r\n    display: flex;\r\n    gap: 16px;\r\n    padding: 0px 0px 10px 80px;\r\n    margin-top: 100px;\r\n}\r\n.colorButton__item {\r\n    border-radius: 50%;\r\n    border: solid 3px;\r\n    background: #B9E5E8;\r\n    height: 25px;\r\n    width: 25px;\r\n}\r\n.colorButton__item:hover{\r\n    border: solid 4px;\r\n}\r\n.colorButton__item_green {\r\n    border-color: #F6F897;\r\n    background: #ABFCC2;\r\n}\r\n.colorButton__item_pink {\r\n    border-color: #F5AEC8;\r\n    background: #99F7F1;\r\n}\r\n.colorButton__item_lightblue {\r\n    border-color: #92F8D3;\r\n    background: #A27DF1;\r\n}\r\n.colorButton__item_blue {\r\n    border-color: #89B5F8;\r\n    background: #69F4F4;\r\n}\r\n/* .colorButton__item_gray {\r\n    border-color: rgb(154, 154, 154);\r\n    background: white;\r\n} */\r\n@media screen and (max-width: 768px) {\r\n    .modul {\r\n        flex-direction: column;\r\n        gap: 20px;\r\n    }\r\n    /* .modul__holder{\r\n        padding: 0px;\r\n        margin-top: 0px;\r\n    } */\r\n    .firstpage__textholder {\r\n        width: 200px;\r\n        height: 300px;\r\n        margin-top: 20px;\r\n    }\r\n    .firstpage__text {\r\n        font-size: 12px;\r\n        line-height: 14px;\r\n    }\r\n    .firstpage__choosetext {\r\n        font-size: 14px;\r\n        line-height: 16px;\r\n    }\r\n    .modul__image {\r\n        width: 80px;\r\n        height: 80px;\r\n    }\r\n    .modul__text {\r\n        font-size: 12px;\r\n        line-height: 14px;\r\n    }\r\n   \r\n}", "",{"version":3,"sources":["webpack://./app/firstPage/firstpage.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,aAAa;IACb,sBAAsB;IACtB,gBAAgB;IAChB,4BAA4B;IAC5B,mBAAmB;IACnB,kBAAkB;IAClB,aAAa;AACjB;AACA;IACI,sBAAsB;IACtB,gBAAgB;IAChB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;IAChB,uBAAuB;IACvB,0BAA0B;AAC9B;AACA;IACI,aAAa;IACb,uBAAuB;IACvB,6BAA6B;IAC7B,iBAAiB;IACjB,kBAAkB;IAClB,wBAAwB;IACxB,YAAY;IACZ,aAAa;IACb,SAAS;IACT,4BAA4B;AAChC;AACA;QACQ,4BAA4B;QAC5B,WAAW;QACX,YAAY;QACZ,gBAAgB;AACxB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;AACrB;AACA;IACI,wBAAwB;IACxB,aAAa;IACb,UAAU;AACd;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,aAAa;IACb,gBAAgB;AACpB;AACA;IACI,iEAAiE;IACjE,mBAAmB;AACvB;AACA;IACI,iEAAiE;IACjE,mBAAmB;AACvB;AACA;IACI,gEAAgE;IAChE,mBAAmB;AACvB;AACA;IACI,YAAY;IACZ,aAAa;AACjB;AACA;IACI,sBAAsB;IACtB,kBAAkB;IAClB,gBAAgB;IAChB,eAAe;IACf,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,sBAAsB;IACtB,aAAa;IACb,SAAS;IACT,0BAA0B;IAC1B,iBAAiB;AACrB;AACA;IACI,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,WAAW;AACf;AACA;IACI,iBAAiB;AACrB;AACA;IACI,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,qBAAqB;IACrB,mBAAmB;AACvB;AACA;IACI,qBAAqB;IACrB,mBAAmB;AACvB;AACA;;;GAGG;AACH;IACI;QACI,sBAAsB;QACtB,SAAS;IACb;IACA;;;OAGG;IACH;QACI,YAAY;QACZ,aAAa;QACb,gBAAgB;IACpB;IACA;QACI,eAAe;QACf,iBAAiB;IACrB;IACA;QACI,eAAe;QACf,iBAAiB;IACrB;IACA;QACI,WAAW;QACX,YAAY;IAChB;IACA;QACI,eAAe;QACf,iBAAiB;IACrB;;AAEJ","sourcesContent":[".wrapper {\r\n    padding-top: 40px;\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* gap: 100px; */\r\n    background: var(--main-page);\r\n    align-items: center;\r\n    position: relative;\r\n    height: 100vh;\r\n}\r\n.firstpage__choosetext{\r\n    font-family: 'Poppins';\r\n    font-style: bold;\r\n    font-weight: 700;\r\n    font-size: 30px;\r\n    line-height: 14px;\r\n    margin-top: 70px;\r\n    /* margin-left: 25px; */\r\n    text-decoration: underline;\r\n}\r\n.firstpage__textholder {\r\n    display: flex;\r\n    justify-content: center;\r\n    background:rgb(249, 244, 158);\r\n    border: solid 8px;\r\n    border-radius: 5px;\r\n    border: rgb(103, 98, 98);\r\n    width: 550px;\r\n    height: 130px;\r\n    gap: 20px;\r\n    padding: 10px 10px 10px 10px;\r\n}\r\n.firstpage__triangle {\r\n        /* align-self: flex-start; */\r\n        width: 20px;\r\n        height: 20px;\r\n        margin-top: 20px;\r\n}\r\n.firstpage__text {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 400;\r\n    font-size: 20px;\r\n    line-height: 22px;\r\n}\r\n.modul {\r\n    /* margin-left: 300px; */\r\n    display: flex;\r\n    gap: 120px;\r\n}\r\n.modul__holder{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    padding: 20px;\r\n    margin-top: 20px;\r\n}\r\n.modul__holder_brown {\r\n    background: linear-gradient(to bottom, #ffffcc -9%, #ffcc66 100%);;\r\n    border-radius: 20px;\r\n}\r\n.modul__holder_blue {\r\n    background: linear-gradient(to bottom, #ccffff -9%, #33ccff 100%);\r\n    border-radius: 20px;\r\n}\r\n.modul__holder_gray {\r\n    background: linear-gradient(to bottom, #ccffcc 0%, #00cc99 100%);\r\n    border-radius: 20px;\r\n}\r\n.modul__image {\r\n    width: 150px;\r\n    height: 180px;\r\n}\r\n.modul__text {\r\n    font-family: 'Poppins';\r\n    font-style: normal;\r\n    font-weight: 700;\r\n    font-size: 20px;\r\n    line-height: 24px;\r\n    text-align: center;\r\n}\r\n.colorButton {\r\n    align-self: flex-start;\r\n    display: flex;\r\n    gap: 16px;\r\n    padding: 0px 0px 10px 80px;\r\n    margin-top: 100px;\r\n}\r\n.colorButton__item {\r\n    border-radius: 50%;\r\n    border: solid 3px;\r\n    background: #B9E5E8;\r\n    height: 25px;\r\n    width: 25px;\r\n}\r\n.colorButton__item:hover{\r\n    border: solid 4px;\r\n}\r\n.colorButton__item_green {\r\n    border-color: #F6F897;\r\n    background: #ABFCC2;\r\n}\r\n.colorButton__item_pink {\r\n    border-color: #F5AEC8;\r\n    background: #99F7F1;\r\n}\r\n.colorButton__item_lightblue {\r\n    border-color: #92F8D3;\r\n    background: #A27DF1;\r\n}\r\n.colorButton__item_blue {\r\n    border-color: #89B5F8;\r\n    background: #69F4F4;\r\n}\r\n/* .colorButton__item_gray {\r\n    border-color: rgb(154, 154, 154);\r\n    background: white;\r\n} */\r\n@media screen and (max-width: 768px) {\r\n    .modul {\r\n        flex-direction: column;\r\n        gap: 20px;\r\n    }\r\n    /* .modul__holder{\r\n        padding: 0px;\r\n        margin-top: 0px;\r\n    } */\r\n    .firstpage__textholder {\r\n        width: 200px;\r\n        height: 300px;\r\n        margin-top: 20px;\r\n    }\r\n    .firstpage__text {\r\n        font-size: 12px;\r\n        line-height: 14px;\r\n    }\r\n    .firstpage__choosetext {\r\n        font-size: 14px;\r\n        line-height: 16px;\r\n    }\r\n    .modul__image {\r\n        width: 80px;\r\n        height: 80px;\r\n    }\r\n    .modul__text {\r\n        font-size: 12px;\r\n        line-height: 14px;\r\n    }\r\n   \r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./app/main.css":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./app/main.css ***!
  \************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Bold.ttf */ "./assets/fonts/Roboto-Bold.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/Roboto-Regular.ttf */ "./assets/fonts/Roboto-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, " body {\r\n    margin: 0;\r\n}\r\n.button__futher {\r\n    width: 200px;\r\n    height: 50px;\r\n    background: var(--button-color, #4AEC47);\r\n    color: var(--button-text, #171710)\r\n}\r\n\r\n.root {\r\n    --background-color: #ABFCC2;\r\n    --text-color: #171710;\r\n    --button-color: #4AEC47;\r\n    --button-text: #171710;\r\n    --task-color: #F6F897;\r\n    --main-page: linear-gradient(45deg, #a1ffce, #f9ffd1);\r\n}\r\nhtml[data-mode='green'] {\r\n    --background-color: #ABFCC2;\r\n    --text-color: #171710;\r\n    --button-color: #4AEC47;\r\n    --button-text: #171710;\r\n    --task-color: #F6F897;\r\n    --main-page: linear-gradient(45deg, #a1ffce, #f9ffd1);\r\n}\r\nhtml[data-mode='lightblue'] {\r\n    --background-color: #92F8D3;\r\n    --text-color: #140E10;\r\n    --button-color: #00FF19;\r\n    --button-text: #140E10;\r\n    --task-color: #A27DF1;\r\n    --main-page: linear-gradient(45deg, #9890e3, #b1f4cf);\r\n}\r\nhtml[data-mode='pink'] {\r\n    --background-color: #99F7F1;\r\n    --text-color: #171710;\r\n    --button-color: #0FD7CB;\r\n    --button-text: #140E10;\r\n    --task-color: #F5AEC8;\r\n    --main-page: linear-gradient(45deg, #d299c2, #fef9d7);\r\n}\r\nhtml[data-mode='blue'] {\r\n    --background-color: #89B5F8;\r\n    --text-color: #171710;\r\n    --button-color: #3246F2;\r\n    --button-text: #E0E2EE;\r\n    --task-color: #69F4F4;\r\n    --main-page: linear-gradient(45deg, #30cfd0, #330867);\r\n}\r\n/* html[data-mode='white'] {\r\n    --background-color: #ffffff;\r\n    --text-color: #171710;\r\n    --button-color: #606260;\r\n    --button-text: #171710;\r\n    --task-color: #aaacaa;\r\n    --main-page: #ffffff;\r\n} */\r\n\r\n\r\n\r\n.page {\r\n    display: grid;\r\n    grid-template-columns:  50px 1fr;\r\n    grid-template-rows:  min-content;\r\n    grid-template-areas: \r\n        'arrow wrapper';\r\n    background: var(--background-color, #ABFCC2);\r\n    \r\n}\r\n.page__arrowwrapper {\r\n    grid-area: arrow;\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* align-content: flex-start; */\r\n    background: #EAEFEF;\r\n    /* height: 100vh;   */\r\n}\r\n.page__arrowholder {\r\n    width: 50px;\r\n    height: 50px;\r\n    background: black;\r\n    position: relative;\r\n}\r\n.page__arrowplace {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%)\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Poppins\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\r\n    font-style: normal; \r\n    font-weight: bold; \r\n}\r\n@font-face {\r\n    font-family: \"Poppins\";\r\n    src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n    font-style: normal; \r\n    font-weight: normal; \r\n}\r\n@media screen and (max-width: 768px) {\r\n    .page {\r\n        display: grid;\r\n        grid-template-rows:  50px 1fr;\r\n        /* grid-template-columns:  min-content; */\r\n        grid-template-areas: \r\n            'arrow wrapper';\r\n        background: var(--background-color, #ABFCC2);\r\n        \r\n    }\r\n    .page__arrowwrapper {\r\n        display: flex;\r\n        flex-direction: row;\r\n    }\r\n\r\n}", "",{"version":3,"sources":["webpack://./app/main.css"],"names":[],"mappings":"CAEA;IACI,SAAS;AACb;AACA;IACI,YAAY;IACZ,YAAY;IACZ,wCAAwC;IACxC;AACJ;;AAEA;IACI,2BAA2B;IAC3B,qBAAqB;IACrB,uBAAuB;IACvB,sBAAsB;IACtB,qBAAqB;IACrB,qDAAqD;AACzD;AACA;IACI,2BAA2B;IAC3B,qBAAqB;IACrB,uBAAuB;IACvB,sBAAsB;IACtB,qBAAqB;IACrB,qDAAqD;AACzD;AACA;IACI,2BAA2B;IAC3B,qBAAqB;IACrB,uBAAuB;IACvB,sBAAsB;IACtB,qBAAqB;IACrB,qDAAqD;AACzD;AACA;IACI,2BAA2B;IAC3B,qBAAqB;IACrB,uBAAuB;IACvB,sBAAsB;IACtB,qBAAqB;IACrB,qDAAqD;AACzD;AACA;IACI,2BAA2B;IAC3B,qBAAqB;IACrB,uBAAuB;IACvB,sBAAsB;IACtB,qBAAqB;IACrB,qDAAqD;AACzD;AACA;;;;;;;GAOG;;;;AAIH;IACI,aAAa;IACb,gCAAgC;IAChC,gCAAgC;IAChC;uBACmB;IACnB,4CAA4C;;AAEhD;AACA;IACI,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,+BAA+B;IAC/B,mBAAmB;IACnB,qBAAqB;AACzB;AACA;IACI,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,kBAAkB;AACtB;AACA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT;AACJ;;AAEA;IACI,sBAAsB;IACtB,4CAA2C;IAC3C,kBAAkB;IAClB,iBAAiB;AACrB;AACA;IACI,sBAAsB;IACtB,4CAA8C;IAC9C,kBAAkB;IAClB,mBAAmB;AACvB;AACA;IACI;QACI,aAAa;QACb,6BAA6B;QAC7B,yCAAyC;QACzC;2BACmB;QACnB,4CAA4C;;IAEhD;IACA;QACI,aAAa;QACb,mBAAmB;IACvB;;AAEJ","sourcesContent":[" @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');\r\n\r\nbody {\r\n    margin: 0;\r\n}\r\n.button__futher {\r\n    width: 200px;\r\n    height: 50px;\r\n    background: var(--button-color, #4AEC47);\r\n    color: var(--button-text, #171710)\r\n}\r\n\r\n.root {\r\n    --background-color: #ABFCC2;\r\n    --text-color: #171710;\r\n    --button-color: #4AEC47;\r\n    --button-text: #171710;\r\n    --task-color: #F6F897;\r\n    --main-page: linear-gradient(45deg, #a1ffce, #f9ffd1);\r\n}\r\nhtml[data-mode='green'] {\r\n    --background-color: #ABFCC2;\r\n    --text-color: #171710;\r\n    --button-color: #4AEC47;\r\n    --button-text: #171710;\r\n    --task-color: #F6F897;\r\n    --main-page: linear-gradient(45deg, #a1ffce, #f9ffd1);\r\n}\r\nhtml[data-mode='lightblue'] {\r\n    --background-color: #92F8D3;\r\n    --text-color: #140E10;\r\n    --button-color: #00FF19;\r\n    --button-text: #140E10;\r\n    --task-color: #A27DF1;\r\n    --main-page: linear-gradient(45deg, #9890e3, #b1f4cf);\r\n}\r\nhtml[data-mode='pink'] {\r\n    --background-color: #99F7F1;\r\n    --text-color: #171710;\r\n    --button-color: #0FD7CB;\r\n    --button-text: #140E10;\r\n    --task-color: #F5AEC8;\r\n    --main-page: linear-gradient(45deg, #d299c2, #fef9d7);\r\n}\r\nhtml[data-mode='blue'] {\r\n    --background-color: #89B5F8;\r\n    --text-color: #171710;\r\n    --button-color: #3246F2;\r\n    --button-text: #E0E2EE;\r\n    --task-color: #69F4F4;\r\n    --main-page: linear-gradient(45deg, #30cfd0, #330867);\r\n}\r\n/* html[data-mode='white'] {\r\n    --background-color: #ffffff;\r\n    --text-color: #171710;\r\n    --button-color: #606260;\r\n    --button-text: #171710;\r\n    --task-color: #aaacaa;\r\n    --main-page: #ffffff;\r\n} */\r\n\r\n\r\n\r\n.page {\r\n    display: grid;\r\n    grid-template-columns:  50px 1fr;\r\n    grid-template-rows:  min-content;\r\n    grid-template-areas: \r\n        'arrow wrapper';\r\n    background: var(--background-color, #ABFCC2);\r\n    \r\n}\r\n.page__arrowwrapper {\r\n    grid-area: arrow;\r\n    display: flex;\r\n    flex-direction: column;\r\n    /* align-content: flex-start; */\r\n    background: #EAEFEF;\r\n    /* height: 100vh;   */\r\n}\r\n.page__arrowholder {\r\n    width: 50px;\r\n    height: 50px;\r\n    background: black;\r\n    position: relative;\r\n}\r\n.page__arrowplace {\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%, -50%)\r\n}\r\n\r\n@font-face {\r\n    font-family: \"Poppins\";\r\n    src: url('../assets/fonts/Roboto-Bold.ttf');\r\n    font-style: normal; \r\n    font-weight: bold; \r\n}\r\n@font-face {\r\n    font-family: \"Poppins\";\r\n    src: url('../assets/fonts/Roboto-Regular.ttf');\r\n    font-style: normal; \r\n    font-weight: normal; \r\n}\r\n@media screen and (max-width: 768px) {\r\n    .page {\r\n        display: grid;\r\n        grid-template-rows:  50px 1fr;\r\n        /* grid-template-columns:  min-content; */\r\n        grid-template-areas: \r\n            'arrow wrapper';\r\n        background: var(--background-color, #ABFCC2);\r\n        \r\n    }\r\n    .page__arrowwrapper {\r\n        display: flex;\r\n        flex-direction: row;\r\n    }\r\n\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./app/1modul/modul1task1-0/1(0)-1.css":
/*!*********************************************!*\
  !*** ./app/1modul/modul1task1-0/1(0)-1.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_1_0_1_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./1(0)-1.css */ "./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task1-0/1(0)-1.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_1_0_1_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_1_0_1_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_1_0_1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_1_0_1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/1modul/modul1task1-2/1(2)-1.css":
/*!*********************************************!*\
  !*** ./app/1modul/modul1task1-2/1(2)-1.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_1_2_1_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./1(2)-1.css */ "./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task1-2/1(2)-1.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_1_2_1_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_1_2_1_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_1_2_1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_1_2_1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/1modul/modul1task1-instruction/1(inst)-1.css":
/*!**********************************************************!*\
  !*** ./app/1modul/modul1task1-instruction/1(inst)-1.css ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_1_inst_1_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./1(inst)-1.css */ "./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task1-instruction/1(inst)-1.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_1_inst_1_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_1_inst_1_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_1_inst_1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_1_inst_1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/1modul/modul1task1/1-1.css":
/*!****************************************!*\
  !*** ./app/1modul/modul1task1/1-1.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_1_1_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./1-1.css */ "./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task1/1-1.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_1_1_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_1_1_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_1_1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_1_1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/1modul/modul1task2/2-1.css":
/*!****************************************!*\
  !*** ./app/1modul/modul1task2/2-1.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_2_1_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./2-1.css */ "./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task2/2-1.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_2_1_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_2_1_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_2_1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_2_1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/1modul/modul1task3/3-1.css":
/*!****************************************!*\
  !*** ./app/1modul/modul1task3/3-1.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_3_1_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./3-1.css */ "./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task3/3-1.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_3_1_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_3_1_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_3_1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_3_1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/1modul/modul1task4-2/4(2)-1.css":
/*!*********************************************!*\
  !*** ./app/1modul/modul1task4-2/4(2)-1.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_4_2_1_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./4(2)-1.css */ "./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task4-2/4(2)-1.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_4_2_1_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_4_2_1_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_4_2_1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_4_2_1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/1modul/modul1task4/4(1)-1.css":
/*!*******************************************!*\
  !*** ./app/1modul/modul1task4/4(1)-1.css ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_4_1_1_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./4(1)-1.css */ "./node_modules/css-loader/dist/cjs.js!./app/1modul/modul1task4/4(1)-1.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_4_1_1_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_4_1_1_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_4_1_1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_4_1_1_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/2modul/2-instruction/2-inst.css":
/*!*********************************************!*\
  !*** ./app/2modul/2-instruction/2-inst.css ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_2_inst_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./2-inst.css */ "./node_modules/css-loader/dist/cjs.js!./app/2modul/2-instruction/2-inst.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_2_inst_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_2_inst_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_2_inst_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_2_inst_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/2modul/modul2task1/1-2.css":
/*!****************************************!*\
  !*** ./app/2modul/modul2task1/1-2.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_1_2_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./1-2.css */ "./node_modules/css-loader/dist/cjs.js!./app/2modul/modul2task1/1-2.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_1_2_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_1_2_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_1_2_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_1_2_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/2modul/modul2task2/2-2.css":
/*!****************************************!*\
  !*** ./app/2modul/modul2task2/2-2.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_2_2_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./2-2.css */ "./node_modules/css-loader/dist/cjs.js!./app/2modul/modul2task2/2-2.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_2_2_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_2_2_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_2_2_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_2_2_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/2modul/modul2task3/3-2.css":
/*!****************************************!*\
  !*** ./app/2modul/modul2task3/3-2.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_3_2_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./3-2.css */ "./node_modules/css-loader/dist/cjs.js!./app/2modul/modul2task3/3-2.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_3_2_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_3_2_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_3_2_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_3_2_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/2modul/modul2task4/4-2.css":
/*!****************************************!*\
  !*** ./app/2modul/modul2task4/4-2.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_4_2_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./4-2.css */ "./node_modules/css-loader/dist/cjs.js!./app/2modul/modul2task4/4-2.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_4_2_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_4_2_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_4_2_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_4_2_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/3modul/3-firstpage/3firstpage.css":
/*!***********************************************!*\
  !*** ./app/3modul/3-firstpage/3firstpage.css ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_3firstpage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./3firstpage.css */ "./node_modules/css-loader/dist/cjs.js!./app/3modul/3-firstpage/3firstpage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_3firstpage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_3firstpage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_3firstpage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_3firstpage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/3modul/3-instr/3-inst.css":
/*!***************************************!*\
  !*** ./app/3modul/3-instr/3-inst.css ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_3_inst_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./3-inst.css */ "./node_modules/css-loader/dist/cjs.js!./app/3modul/3-instr/3-inst.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_3_inst_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_3_inst_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_3_inst_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_3_inst_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/3modul/Adam/adam.css":
/*!**********************************!*\
  !*** ./app/3modul/Adam/adam.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_adam_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./adam.css */ "./node_modules/css-loader/dist/cjs.js!./app/3modul/Adam/adam.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_adam_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_adam_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_adam_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_adam_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/3modul/Joconda/joconda.css":
/*!****************************************!*\
  !*** ./app/3modul/Joconda/joconda.css ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_joconda_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./joconda.css */ "./node_modules/css-loader/dist/cjs.js!./app/3modul/Joconda/joconda.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_joconda_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_joconda_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_joconda_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_joconda_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/firstPage/firstpage.css":
/*!*************************************!*\
  !*** ./app/firstPage/firstpage.css ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_firstpage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./firstpage.css */ "./node_modules/css-loader/dist/cjs.js!./app/firstPage/firstpage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_firstpage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_firstpage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_firstpage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_firstpage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./app/main.css":
/*!**********************!*\
  !*** ./app/main.css ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./app/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./assets/fonts/Roboto-Bold.ttf":
/*!**************************************!*\
  !*** ./assets/fonts/Roboto-Bold.ttf ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35eab922fdbe4b5324d4.ttf";

/***/ }),

/***/ "./assets/fonts/Roboto-Regular.ttf":
/*!*****************************************!*\
  !*** ./assets/fonts/Roboto-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "160d7a6ac26376e5e977.ttf";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./app/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router.js */ "./app/router.js");
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main.css */ "./app/main.css");
console.log(1);


})();

/******/ })()
;
//# sourceMappingURL=index_bundle.js.map