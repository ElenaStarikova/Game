import{tag, pageFrame, scoreReset} from '../../functions'
import'./1(inst)-1.css'



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
        this.render()
        this.addListener()
        
    }
    render() {
        pageFrame()
        
        let page = document.querySelector('.page__content')

        let instructionHolder = tag({tag: "div", parent: page, className: 'instructionHolder1'})

        let imgInst = tag({tag: "div", parent: instructionHolder, className: 'instructionHolder__imgInst1'})

        let imageHolder = tag({tag: "div", parent: imgInst, className: 'leftPanel__imageHolder1'})
        imageHolder.innerHTML = '<img src="./img/firstpage/modul1.png" width=150px height=170px>'

        this.textInst = tag({tag: "h2", parent: imgInst, className: 'leftPanel__textInst1'})
        this.textInst.innerHTML = "Инструкция"

        let textH1 = tag({tag: "h1", parent: instructionHolder, className: 'leftPanel__textH1-1'})
        textH1.innerHTML = "Диагностика"

        let text = tag({tag: "h3", parent: instructionHolder, className: 'leftPanel__text1'})
        text.innerHTML = 'Обратите внимание! Тестирование занимает до 30 минут. В это время необходимо сконцентрироваться на заданиях теста. Пожалуйста, освободите достаточное количество времени и попросите окружающих Вас не отвлекать. Удачи!'

        // let rightPanel = tag({tag: "div", parent: instructionHolder, className: 'instructionHolder__righnPanel'})

        this.button = tag({tag: "div", parent: instructionHolder, className: 'button__ready1'})
        this.button.innerHTML = 'Я готов! Начинаем'





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
        this.button.addEventListener('click', (event) => {
            scoreReset()
            location.hash = '/module-1/task1-0'
        })
        this.textInst.addEventListener('click', (event) => {
            let instructionHolder = document.querySelector('.instructionHolder')
            instructionHolder.innerHTML = '<div class="instruction">Инструкция</div>'
            this.buttonInstruction = tag({tag: "div", parent: this.note, className: 'button__futher'})
            this.buttonInstruction.innerHTML = 'Вернуться к выполнению задания'
            this.addListener() 
            this.buttonInstruction.addEventListener('click', (event) => {
            location.hash = '/module-1/instruction'
        })
        })
       
    }
}
let taskInstruction
export const getTaskInstruction = () => {
    if(!taskInstruction) {
        taskInstruction = new TaskInstruction
    }
    return taskInstruction
}