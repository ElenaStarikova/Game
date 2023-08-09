import{tag, pageFrame} from '../../functions'
import'./1-1.css'

function createWords() {
        return [
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
} 
class LearnWords {
    open() {
        this.init()
        this.render()
        this.addListener()
        
    }
    init() {
        this.words = createWords()
    }
    render() {
        
        pageFrame()
        
        let page = document.querySelector('.page__content')
        this.elem = tag({tag: "div", parent: page, className: 'task1__wrapper'})

        this.note = tag({tag: "div", parent: this.elem, className: 'task1__note1'})

        let explanationHolder = tag({tag: "div", parent: this.note, className: 'explanationHolder'})

        this.wordExplanation = tag({tag: "h2", parent: explanationHolder, className: 'task1__text'})
       
        // wordExplanation.innerHTML = `${words.mean}`
        this.wordExplanation.innerHTML = this.words[0].mean
        this.wordExplanation.dataset.mean = this.words[0].mean

        this.wordsWrapper = tag({tag: "form", parent: this.elem, className: 'task1__wordsWrapper'})

                
        for (let a of this.words) {
            this.wordsWrapper.insertAdjacentHTML('beforeEnd', `<label class='task1__wordHolder'><input type = "radio" name="words" data-mean='${a.mean}' id = ${a.word}> <span class="task1_label" for=${a.mean} id = ${a.mean}>${a.word}</span></label>`)

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

    addListener () {
        this.wordsWrapper.addEventListener('input', (event) => {
            // let target = event.target.closest('task1__wordHolder')
            // если пользователь правильно ответил
            if (event.target.dataset.mean === this.wordExplanation.dataset.mean) {
              console.log(1)
            
                  // идет переключение на следующее слово в поле объяснения тк из массива удалили первый объект
                this.words.splice(0, 1)
                // проверка незакончился ли массив, если закончился выйти (return) на другую страницу
                if(this.words.length == 0) {
                    location.hash = '/module-1/task1(2)-1'
                    return
                }
                this.shuffle(this.words)
                
                this.wordExplanation.innerHTML = this.words[0].mean
                this.wordExplanation.dataset.mean = this.words[0].mean

                

            }
            else {

                this.tryAgain()
            }

           
           
        
        })
    }
   
    // button() {
    //     this.button = tag({tag: "div", parent: this.elem, className: 'button__futher'})
    //     this.button.innerHTML = 'Далее'
    // }

    tryAgain() {
        

        let tryAgain = tag({tag: "div", parent: this.note, className: 'task1__tryagain'})
        tryAgain.innerHTML = 'Попробуй еще'

        setTimeout(() => {
            tryAgain.remove()
        }, 2000)
    }
    
}
let learnWords 
export const getLearnWords = () => {
    if(!learnWords) {
        learnWords = new LearnWords
    }
    return learnWords
}