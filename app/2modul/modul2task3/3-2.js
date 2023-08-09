import{tag, pageFrame} from '../../functions'
import './3-2.css'

function createMap() {
    return [
            
        {
            symbol: './img/symbol/road_symb.png',
            picture: './img/mappictures/road.png',
            meaning: 'шоссе',
            sound: './sound/road.m4a',
            id: 1,
        },
        {
            symbol: './img/symbol/path_symb.png',
            picture: './img/mappictures/path.png',
            meaning: 'тропа',
            sound: './sounds/road.m4a',
            id: 2,
        },
        {
            symbol: './img/symbol/fence_symb.png',
            picture: './img/mappictures/fence.png',
            meaning: 'непреодолимый забор',
            sound: './sounds/road.m4a',
            id: 3,
        },
        {
            symbol: './img/symbol/railway_symb.png',
            picture: './img/mappictures/railway.png',
            meaning: 'железная дорога',
            sound: './sounds/road.m4a',
            id: 4,
        },
        {
            symbol: './img/symbol/stown_symb.png',
            picture: './img/mappictures/stown.png',
            meaning: 'камень',
            sound: './sounds/road.m4a',
            id: 5,
        },
        {
            symbol: './img/symbol/hill_symb.png',
            picture: './img/mappictures/hill.png',
            meaning: 'бугор, холм',
            sound: './sounds/road.m4a',
            id: 6,
        },
        {
            symbol: './img/symbol/house_symb.png',
            picture: './img/mappictures/house.png',
            meaning: 'дом, строение',
            sound: './sounds/road.m4a',
            id: 7,
        },
        {
            symbol: './img/symbol/hole_symb.png',
            picture: './img/mappictures/hole.png',
            meaning: 'микроямка, воронка',
            sound: './sounds/road.m4a',
            id: 8,
        },
        {
            symbol: './img/symbol/swamp_symb.png',
            picture: './img/mappictures/swamp.png',
            meaning: 'болото',
            sound: './sounds/road.m4a',
            id: 9,
        },
    ]
}
 
let map1 = [
            
    {
        symbol: './img/symbol/railway_symb.png',
        picture: './img/mappictures/railway.png',
        meaning: 'железная дорога',
        sound: './sounds/road.m4a',
        id: 4,
    },
    {
        symbol: './img/symbol/house_symb.png',
        picture: './img/mappictures/house.png',
        meaning: 'дом, строение',
        sound: './sounds/road.m4a',
        id: 7,
    }, 
    {
        symbol: './img/symbol/fence_symb.png',
        picture: './img/mappictures/fence.png',
        meaning: 'непреодолимый забор',
        sound: './sounds/road.m4a',
        id: 3,
    },
    {
        symbol: './img/symbol/stown_symb.png',
        picture: './img/mappictures/stown.png',
        meaning: 'камень',
        sound: './sounds/road.m4a',
        id: 5,
    },
     {
        symbol: './img/symbol/road_symb.png',
        picture: './img/mappictures/road.png',
        meaning: 'шоссе',
        sound: './sound/road.m4a',
        id: 1,
    },
   
    {
        symbol: './img/symbol/hill_symb.png',
        picture: './img/mappictures/hill.png',
        meaning: 'бугор, холм',
        sound: './sounds/road.m4a',
        id: 6,
    },
  
      {
        symbol: './img/symbol/swamp_symb.png',
        picture: './img/mappictures/swamp.png',
        meaning: 'болото',
        sound: './sounds/road.m4a',
        id: 9,
    }, 
    {
        symbol: './img/symbol/hole_symb.png',
        picture: './img/mappictures/hole.png',
        meaning: 'микроямка, воронка',
        sound: './sounds/road.m4a',
        id: 8,
    },
 
     {
        symbol: './img/symbol/path_symb.png',
        picture: './img/mappictures/path.png',
        meaning: 'тропа',
        sound: './sounds/road.m4a',
        id: 2,
    },
]

class MapShow {
    open() {
        this.init()
        this.render()
        this.addListener()
    }
    init() {
        this.map = createMap()
    }
    render() {
        
        pageFrame()
        
        let page = document.querySelector('.page__content')

        

        if (!this.wrapper3) {
            this.wrapper3 = tag({tag: "div", parent: page, className: 'mapshow__wrapper'})
        }
        else {
            page.append(this.wrapper3)
        }
        this.wrapper3.innerHTML = ''

        let text = tag({tag: "div", parent: this.wrapper3, className: 'mapshow__text'})
        text.innerHTML = "Условные знаки"

        

        this.picturesWrapper3 = tag({tag: "div", parent: this.wrapper3, className: 'mapshow__taskwrapper'})

        let pictureText3 = tag({tag: "h3", parent: this.picturesWrapper3, className: 'mapshow__picturetext'})
        pictureText3.innerHTML = this.map[0].meaning

        let pictureQuestion3 = tag({tag: "div", parent: this.picturesWrapper3, className: 'mapshow__picturequestion'})

        pictureQuestion3.innerHTML = "?"
        
        

        
        //блок с верным ответом (до выполнения задания не видим)
        this.correctBlock =  tag({tag: "div", parent: this.wrapper3, className: 'mapshow__taskanswer'})
        let correctText = tag({tag: "h3", parent: this.correctBlock, className: 'mapshow__correcttext'})
        correctText.innerHTML = "ВЕРНО"
        
        let answerHolderCorrect = tag({tag: "div", parent: this.correctBlock, className: 'mapshow__answerholder'})

        let pictureTextCorrect = tag({tag: "h3", parent: answerHolderCorrect, className: 'mapshow__picturetext'})
        pictureTextCorrect.innerHTML = this.map[0].meaning

        let pictureSymbolCorrect = tag({tag: "div", parent: answerHolderCorrect, className: 'mapshow__picturesymbol'})

        pictureSymbolCorrect.innerHTML = `<img src='${this.map[0].symbol}' width=100px height=100px>`



        //блок с НЕверным ответом (до выполнения задания не видим)
        this.wrongBlock = tag({tag: "div", parent: this.wrapper3, className: 'mapshow__taskanswerwrong'})

        let wrongText = tag({tag: "h3", parent: this.wrongBlock, className: 'mapshow__wrongtext'})
        wrongText.innerHTML = "НЕВЕРНО"
        
        let answerHolderWrong = tag({tag: "div", parent: this.wrongBlock, className: 'mapshow__answerholder'})

        let pictureTextWrong = tag({tag: "h3", parent: answerHolderWrong, className: 'mapshow__picturetext'})
        pictureTextWrong.innerHTML = this.map[0].meaning

        this.pictureSymbolWrong = tag({tag: "div", parent: answerHolderWrong, className: 'mapshow__picturesymbol'})




      this.picturesHolder3 = tag({tag: "div", parent: this.wrapper3, className: 'mapshow__picturesholder'})
        // console.log(map[0].symbol)
        for (let i = 0; i < map1.length; i++) {
            
            this.picturesHolder3.insertAdjacentHTML('beforeEnd', `<div class='mapshow__button' data-id=${map1[i].id}><img src='${map1[i].symbol}' width=100px height=100px></div>`) 
        }
        
    }

    addListener() {
        this.picturesHolder3.addEventListener('click', (event) => {
          
            // let pictureButton = event.target.clossest('.mapshow__button')
        //          if(this.map.length == 0) {
        //         location.hash = '/module-2/task4-2'
        //    }
            this.pressedButton = event.target.closest('.mapshow__button')
            console.log(this.pressedButton.dataset.id)
            if (this.pressedButton.dataset.id == this.map[0].id) {
                
                this.correct()
               
            }
            
            else {
                this.wrong()
            }
            this.map.splice(0, 1)
          
            this.addListener()

           
        }) 
         
    }

    correct() {
        this.picturesWrapper3.style.display = 'none'
        this.wrongBlock.style.display = 'none'
        this.correctBlock.style.display = 'block'

        
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
            if(this.map.length == 0) {
                location.hash = '/module-2/task4-2'
           }
            this.render()
            this.addListener()
        }, 3000) 
        

    }

    wrong() {
        this.picturesWrapper3.style.display = 'none'
        this.correctBlock.style.display = 'none'
        this.wrongBlock.style.display = 'block'
        this.pictureSymbolWrong.innerHTML = `<img src='${map1.find(item => item.id == this.pressedButton.dataset.id).symbol}' width=100px height=100px>`
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

        setTimeout(this.correct.bind(this), 3000)
    }

}
let mapShow
export const getMapShow = () => {
    if(!mapShow) {
        mapShow = new MapShow
    }
    return mapShow
}