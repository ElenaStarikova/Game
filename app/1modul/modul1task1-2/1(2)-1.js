import{tag, pageFrame, scoreTask1Plus} from '../../functions'
import'./1(2)-1.css'

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
class PrintWords {
    open() {
        this.init()
        this.render()
        this.n = 0
        this.addListener()
        
        
    }
    init() {
        this.correctWords = createCorrectWords()
    }
    render() {
        pageFrame()
        
        let page = document.querySelector('.page__content')

        let elem = tag({tag: "div", parent: page, className: 'task1__wrapper'})

        let explanationWrapper = tag({tag: "div", parent: elem, className: 'task1__explanationWrapper'})


        let note = tag({tag: "div", parent: explanationWrapper, className: 'task1__note'})

        
        let explanationHolder = tag({tag: "div", parent: note, className: 'explanationHolder'})
       
        explanationHolder.innerHTML = 'Вспомните все слова, которые Вы запомнили! Напишите их в рамки через Enter'

        this.wordsWrapper = tag({tag: "form", parent: elem, className: 'task1__wordsWrapper'})

                
        for (let a of words) {
            this.wordsWrapper.insertAdjacentHTML('beforeEnd', '<input type = "text" placeholder="Введите слово" class = "active" name="word" autocomplete="off">')
        }

      

        this.buttonFinish = tag({tag: "div", parent: explanationWrapper, className: 'task1__button'})
        this.buttonFinish.innerHTML = "Закончил! Больше не помню"
    }
    
    addListener() {
    this.wordsWrapper.addEventListener('keydown', (event) => {
            
            if (event.code === 'Enter') {
                
                // подсчитать число инпутов
                this.n++
                //поле в которое вводили заблокировать для введения, добавть серую окраску бордера
                event.target.disabled = true
                event.target.style.borderColor = "gray"
            }
            this.check()
        
    })

    this.buttonFinish.addEventListener('click', (event) => {
       
          let inputs = document.querySelectorAll('.active')
        //   console.log(inputs) 
            for (let a of inputs) {
                for (let i = 0; i < this.correctWords.length; i++) {

                    if (this.correctWords[i].enterWord.includes(a.value)) {
                        scoreTask1Plus()
                        this.correctWords.splice(i, 1)
                        i--
                    }
                }
                             
            }

            location.hash = '/module-1/task2-1'

            // console.log(scoreGet())
    })
    
}
    check() {
        if (this.n == 12) {
            this.buttonFinish.innerHTML = ""
            this.buttonFinish.innerHTML = "Закончил! Далее"
        }
            // for (let i = 0; i < )
    }       
           
  
        
        
    }
   
function createCorrectWords() {
        return [
        {
            enterWord: ["синица", "сеница"],
            
        },
        {
            enterWord: ["береза", "берёза", "биреза", "бирёза"],
            
        },
        {
            enterWord: ["сапоги", "сапоги"],
            
        },
        {
            enterWord: ["фиалка", "феалка"],
            
        },
        {
            enterWord: ["лодка", "лотка"],
            
        },
        {
            enterWord: ["вельвет", "вильвет"],
            
        },
        {
            enterWord: ["теннис", "тенис"],
            
        },
        {
            enterWord: ["озеро", "озиро"],
            
        },
        {
            enterWord: ["кровать", "кравать"],
            
        },
        {
            enterWord: ["листопад", "листапад", "лестопад", "лестапад" ],
            
        },
        {
            enterWord: ["дворец", "дварец"],
            
        },
        {
            enterWord: ["апельсин", "апильсин"],
            
        },
    ]
}



//дано 12 слов - введеные
// по 2-3 варианта слова для проверки введенных слов
// найти совпадение, количество правильных ответов
// сгруппировать предложенные к каждому слову варианты, при совпадении с одним из введенных вариантов, остальные исключть из решения 
// 

let printWords 
export const getPrintWords = () => {
    if(!printWords) {
        printWords = new PrintWords
    }
    return printWords
}