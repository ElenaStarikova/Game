import{tag, pageFrame} from '../../functions'
import'./1(0)-1.css'

let words = [
    {
        word: "синица",
        mean: "птица",
    },
    {
        word: "береза",
        mean: "дерево",
    },
    {
        word: "сапоги",
        mean: "обувь",
    },
    {
        word: "апельсин",
        mean: "фрукт",
    },
    {
        word: "фиалка",
        mean: "цветок",
    },
    {
        word: "лодка",
        mean: "средство передвижения",
    },
    {
        word: "вельвет",
        mean: "ткань",
    },
    {
        word: "теннис",
        mean: "спорт",
    },
    {
        word: "озеро",
        mean: "водоем",
    },
    {
        word: "кровать",
        mean: "мебель",
    },
    {
        word: "листопад",
        mean: "осень",
    },
    {
        word: "дворец",
        mean: "здание",
    },
]
class TaskWords {
    open() {
        this.render()
        this.addListener()
        
    }
    render() {
        pageFrame()
        
        let page = document.querySelector('.page__content')

        this.elem = tag({tag: "div", parent: page, className: 'task1-0__wrapper'})

        this.note = tag({tag: "div", parent: this.elem, className: 'task1-0__note'})

        let explanationHolder = tag({tag: "div", parent: this.note, className: 'task1-0__explanationHolder'})

        this.wordExplanation = tag({tag: "h2", parent: explanationHolder, className: 'task1-0__text'})
       
        // wordExplanation.innerHTML = `${words.mean}`
        this.wordExplanation.innerHTML = 'Внимательно прочитайте вслух и запомните следующие слова. Как будете готовы, нажмите кнопку «Далее»:'

        this.wordsWrapper = tag({tag: "form", parent: this.elem, className: 'task1-0__wordsWrapper'})

                
        for (let a of words) {
            this.wordsWrapper.insertAdjacentHTML('beforeEnd', `<div class='task1__wordHolder'><input type = "radio" name="words" data-mean='${a.mean}' id = ${a.word} disabled="disabled"> <label class="task1_label" for=${a.mean} id = ${a.mean}>${a.word}</label></div>`)

               
        }
        this.button = tag({tag: "div", parent: this.note, className: 'button1__futher'})
        this.button.innerHTML = 'Далее'
    }
    addListener() {
        this.button.addEventListener('click', (event) => {
            location.hash = '/module-1/task1-1'
        })
    }
}
let taskWords
export const getTaskWords = () => {
    if(!taskWords) {
        taskWords = new TaskWords
    }
    return taskWords
}