import{tag, pageFrame} from '../../functions'
import './2-2.css'


function createMapTask() {
        return [
                
        {
            answers: [
                {
                    picture:'./img/mappictures/road.png',
                    isCorrect: true,
                    meaning: 'шоссе',
                    word: 'шоссе',
                },
                {
                    picture:'./img/mappictures/path.png',
                    isCorrect: false,
                    word: 'тропинка',
                },
                {
                    picture:'./img/mappictures/fence.png',
                    isCorrect: false,
                    word: 'непреодолимый забор',
                },
                {
                    picture:'./img/mappictures/railway.png',
                    isCorrect: false,
                    word: 'железная дорога',
                },
            ],
            symbol: './img/symbol/road_symb.png',
        },
        {
            answers: [
                {
                    picture:'./img/mappictures/road.png',
                    isCorrect: false,
                    word: 'шоссе',
                },
                {
                    picture:'./img/mappictures/path.png',
                    isCorrect: true,
                    meaning: 'тропинка',
                    word: 'тропинка',
                },
                {
                    picture:'./img/mappictures/fence.png',
                    isCorrect: false,
                    word: 'непреодолимый забор',
                },
                {
                    picture:'./img/mappictures/railway.png',
                    isCorrect: false,
                    word: 'железная дорога',
                },
            ],
            symbol: './img/symbol/path_symb.png',
        },
        {
            answers: [
                {
                    picture:'./img/mappictures/road.png',
                    isCorrect: false,
                    word: 'шоссе',
                },
                {
                    picture:'./img/mappictures/path.png',
                    isCorrect: false,
                    word: 'тропинка',
                },
                {
                    picture:'./img/mappictures/fence.png',
                    isCorrect: true,
                    meaning: 'непреодолимый забор',
                    word: 'непреодолимый <br> забор',
                },
                {
                    picture:'./img/mappictures/railway.png',
                    isCorrect: false,
                    word: 'железная дорога',
                },
                ],
            symbol: './img/symbol/fence_symb.png',
            
        },
        {
            answers: [
                {
                    picture:'./img/mappictures/road.png',
                    isCorrect: false,
                    word: 'шоссе',
                },
                {
                    picture:'./img/mappictures/path.png',
                    isCorrect: false,
                    word: 'тропинка',
                },
                {
                    picture:'./img/mappictures/fence.png',
                    isCorrect: false,
                    word: 'непреодолимый забор',
                },
                {
                    picture:'./img/mappictures/railway.png',
                    isCorrect: true,
                    meaning: 'железная дорога',
                    word: 'железная дорога',
                },
                ],
            symbol: './img/symbol/railway_symb.png',
            
        },
        {
            answers: [
                {
                    picture:'./img/mappictures/hill.png',
                    isCorrect: false,
                    word: 'бугор, холм',
                },
                {
                    picture:'./img/mappictures/house.png',
                    isCorrect: false,
                    word: 'дом, строение',
                },
                {
                    picture:'./img/mappictures/hole.png',
                    isCorrect: false,
                    word: 'микроямка, воронка',
                },
                {
                    picture:'./img/mappictures/stown.png',
                    isCorrect: true,
                    meaning: 'камень',
                    word: 'камень',
                },
                ],
            symbol: './img/symbol/stown_symb.png',
            
        },
        {
            answers: [
                {
                    picture:'./img/mappictures/hill.png',
                    isCorrect: true,
                    meaning: 'бугор, холм',
                    word: 'бугор, холм',
                },
                {
                    picture:'./img/mappictures/house.png',
                    isCorrect: false,
                    word: 'дом, строение',
                },
                {
                    picture:'./img/mappictures/hole.png',
                    isCorrect: false,
                    word: 'микроямка, воронка',
                },
                {
                    picture:'./img/mappictures/stown.png',
                    isCorrect: false,
                    word: 'камень',
                },
                ],
            symbol: './img/symbol/hill_symb.png',
            
        },
        {
            answers: [
                {
                    picture:'./img/mappictures/hill.png',
                    isCorrect: false,
                    word: 'бугор, холм',
                },
                {
                    picture:'./img/mappictures/house.png',
                    isCorrect: true,
                    meaning: 'дом, строение',
                    word: 'дом, строение',
                },
                {
                    picture:'./img/mappictures/hole.png',
                    isCorrect: false,
                    word: 'микроямка, воронка',
                },
                {
                    picture:'./img/mappictures/stown.png',
                    isCorrect: false,
                    word: 'камень',
                },
                ],
            symbol: './img/symbol/house_symb.png',
            
        },
        {
            answers: [
                {
                    picture:'./img/mappictures/hill.png',
                    isCorrect: false,
                    word: 'бугор, холм',
                },
                {
                    picture:'./img/mappictures/house.png',
                    isCorrect: false,
                    word: 'дом, строение',
                },
                {
                    picture:'./img/mappictures/stown.png',
                    isCorrect: false,
                    word: 'камень',
                },
                {
                    picture:'./img/mappictures/hole.png',
                    isCorrect: true,
                    meaning: 'микроямка, воронка',
                    word: 'микрямка, воронка',
                },
                ],
            symbol: './img/symbol/hole_symb.png',
            
        },
        {
            answers: [
                {
                    picture:'./img/mappictures/hill.png',
                    isCorrect: false,
                    word: 'бугор, холм',
                },
                {
                    picture:'./img/mappictures/house.png',
                    isCorrect: false,
                    word: 'дом, строение',
                },
                {
                    picture:'./img/mappictures/hole.png',
                    isCorrect: false,
                    word: 'микроямка, воронка',
                },
                {
                    picture:'./img/mappictures/swamp.png',
                    isCorrect: true,
                    meaning: 'болото',
                    word: 'болото',
                },
                ],
            symbol: './img/symbol/swamp_symb.png',
            
        },
        
    ]
}

function createMap() {
        return [
                
        {
            symbol: './img/symbol/road_symb.png',
            picture: './img/mappictures/road.png',
            meaning: 'шоссе',
            sound: './sound/road.m4a',
        },
        {
            symbol: './img/symbol/path_symb.png',
            picture: './img/mappictures/path.png',
            meaning: 'тропа',
            sound: './sounds/road.m4a',
        },
        {
            symbol: './img/symbol/fence_symb.png',
            picture: './img/mappictures/fence.png',
            meaning: 'непреодолимый забор',
            sound: './sounds/road.m4a',
        },
        {
            symbol: './img/symbol/railway_symb.png',
            picture: './img/mappictures/railway.png',
            meaning: 'железная дорога',
            sound: './sounds/road.m4a',
        },
        {
            symbol: './img/symbol/stown_symb.png',
            picture: './img/mappictures/stown.png',
            meaning: 'камень',
            sound: './sounds/road.m4a',
        },
        {
            symbol: './img/symbol/hill_symb.png',
            picture: './img/mappictures/hill.png',
            meaning: 'бугор, холм',
            sound: './sounds/road.m4a',
        },
        {
            symbol: './img/symbol/house_symb.png',
            picture: './img/mappictures/house.png',
            meaning: 'дом, строение',
            sound: './sounds/road.m4a',
        },
        {
            symbol: './img/symbol/hole_symb.png',
            picture: './img/mappictures/hole.png',
            meaning: 'микроямка, воронка',
            sound: './sounds/road.m4a',
        },
        {
            symbol: './img/symbol/swamp_symb.png',
            picture: './img/mappictures/swamp.png',
            meaning: 'болото',
            sound: './sounds/road.m4a',
        },
    ]
}


class MemorizeMap {

   open() {
        this.init()
        this.render()
        this.addListener()              
    }
    init() {
        this.mapTask =createMapTask()
        this.map = createMap()
    }
    render() {
       
        pageFrame()
        
        let page = document.querySelector('.page__content')
        if(!this.wrapperMemorize) { 
             console.log('page')
            this.wrapperMemorize = tag({tag: "div", parent: page, className: 'map__wrapper'})
        }
        else {
            page.append(this.wrapperMemorize) 
            this.wrapperMemorize.innerHTML = "" 
        }
      
        
        let explanation = tag({tag: "div", parent: this.wrapperMemorize, className: 'map__explanation'})
        explanation.innerHTML = "Условные знаки <br> Вам представлен условный знак и 4 варианта ответа в виде картинки с названием. Нажмите на верный вариант. При неверном нажатии Вы увидите правильный ответ, его необходимо запомнить. Успехов!"

        let mapTaskWrapper = tag({tag: "div", parent: this.wrapperMemorize, className: 'map__taskwrapper'})

        let explanationHolder = tag({tag: "div", parent: mapTaskWrapper, className: 'map__explanationholder'})

        let imgExplanation = tag({tag: "div", parent: explanationHolder, className: 'map__imgexplanation'})
        imgExplanation.innerHTML =  `<img src='${this.mapTask[0].symbol}' width=200px height=200px>`

        this.taskHolder = tag({tag: "div", parent: mapTaskWrapper, className: 'map__taskholder'})

        let pict1 = tag({tag: "div", parent: this.taskHolder, className: 'map__pict1 map__pict'})
        pict1.innerHTML = `<div class="pict__wrapper"><img class="picture__button" src='${this.mapTask[0].answers[0].picture}' data-correct='${this.mapTask[0].answers[0].isCorrect}' width=200px height=150px><h3>${this.mapTask[0].answers[0].word}</h3></div>`

        let pict2 = tag({tag: "div", parent: this.taskHolder, className: 'map__pict2 map__pict'})
        pict2.innerHTML = `<div class="pict__wrapper"><img class="picture__button" src='${this.mapTask[0].answers[1].picture}' data-correct='${this.mapTask[0].answers[1].isCorrect}' width=200px height=150px><h3>${this.mapTask[0].answers[1].word}</h3></div>`

        let pict3 = tag({tag: "div", parent: this.taskHolder, className: 'map__pict3 map__pict'})
        pict3.innerHTML = `<div class="pict__wrapper"><img class="picture__button" src='${this.mapTask[0].answers[2].picture}' data-correct='${this.mapTask[0].answers[2].isCorrect}' width=200px height=150px><h3>${this.mapTask[0].answers[2].word}</h3></div>`

        let pict4 = tag({tag: "div", parent: this.taskHolder, className: 'map__pict4 map__pict'})
        pict4.innerHTML = `<div class="pict__wrapper"><img class="picture__button" src='${this.mapTask[0].answers[3].picture}' data-correct='${this.mapTask[0].answers[3].isCorrect}' width=200px height=150px><h3>${this.mapTask[0].answers[3].word}</h3></div>`

        

        let question = tag({tag: "div", parent: this.taskHolder, className: 'map__quest'})  
        question.innerHTML = "?"      

    }
    addListener() {
        this.taskHolder.addEventListener('click', (event) => {
            let pictureButton = event.target.closest('.picture__button')
            
            if (pictureButton.dataset.correct == null) {
                return
            }
            if (pictureButton.dataset.correct && pictureButton.dataset.correct == "true") {
                this.correct()
                this.next()
                this.mapTask.splice(0, 1)
            }
            else {
                this.wrong()
                this.next()
            }
           

           
        })
    }
    correct() {
        this.mapWrapper = document.querySelector('.map__wrapper')
        this.clean()
        
        let textCorrect = tag({tag: "div", parent: this.mapWrapper, className: 'map__textcorrect'})
        textCorrect.innerHTML = "Верно"

        let picturesWrapperMemorize = tag({tag: "div", parent: this.mapWrapper, className: 'map__pictureswrapper'})

        picturesWrapperMemorize.innerHTML = `<img src='${this.mapTask[0].symbol}'  width=200px height=200px>`

        
        let pict = this.mapTask[0].answers.find(item => {
            return item.isCorrect;
        })

        picturesWrapperMemorize.insertAdjacentHTML('beforeEnd', `<img src='${pict.picture}' width=200px height=200px>`)

    

        let mapText = tag({tag: "h2", parent: this.mapWrapper, className: 'map__text'})

        mapText.innerHTML = pict.meaning

        

        this.mapButton = tag({tag: "div", parent: this.mapWrapper, className: 'map__button'})
        this.mapButton.innerHTML = "Ознакомился! Продолжить"

        this.next()
    }
    wrong() {
        console.log(6)
        this.mapWrapper = document.querySelector('.map__wrapper')

        this.clean()

       

        let textCorrect = tag({tag: "div", parent:  this.mapWrapper, className: 'map__textwrong'})
        textCorrect.innerHTML = "НЕВЕРНО, правильный ответ:"
  
        let picturesWrapperMemorizeWrong = tag({tag: "div", parent: this.mapWrapper, className: 'map__pictureswrapper'})

        picturesWrapperMemorizeWrong.innerHTML = `<img src='${this.mapTask[0].symbol}'  width=200px height=200px>`

        let pict = this.mapTask[0].answers.find(item => {
            return item.isCorrect;
        })

        picturesWrapperMemorizeWrong.insertAdjacentHTML('beforeEnd', `<img src='${pict.picture}' width=200px height=200px>`)

    

        let mapText = tag({tag: "h2", parent: this.mapWrapper, className: 'map__text'})

        mapText.innerHTML = pict.meaning

      

        this.mapButton = tag({tag: "div", parent:  this.mapWrapper, className: 'map__button'})
        this.mapButton.innerHTML = "Ознакомился! Продолжить"
        console.log(7)
        this.next()

    }
    next() {
        this.mapButton.addEventListener('click', (event) => {
            if(this.mapTask.length == 0) {
                location.hash = '/module-2/task3-2'
            }
            console.log('correct')
            this.clean()
            this.render()
            this.addListener()
        })
    }
    clean() {
        this.wrapperMemorize.innerHTML = ""
        this.mapWrapper.innerHTML = ""

    }
}
let memorizeMap
export const getMemorizeMap = () => {
    if(!memorizeMap) {
        memorizeMap = new MemorizeMap
    }
    return memorizeMap
}