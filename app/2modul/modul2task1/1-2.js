import{tag, pageFrame, preloadImages} from '../../functions'
import './1-2.css'

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
preloadImages(createMap().map(obj => obj.picture))
preloadImages(createMap().map(obj => obj.symbol))

class LearnMap {
    open() {
        this.init()
        this.render()
        this.addListener()
    }

    init() {
        this.map = createMap()
    }
    render() {
        
        this.shuffle(this.map)

        pageFrame()
        
        let page = document.querySelector('.page__content')


        
        this.wrapperMap = tag({tag: "div", parent: page, className: 'map__wrapper1'})

       this.picturesWrapperMap = tag({tag: "div", parent: this.wrapperMap, className: 'map__pictureswrapper1'})

        // picturesWrapper.innerHTML =  "url(" + map[0].picture +  ")"

        this.picturesWrapperMap.innerHTML =  `<img src='${this.map[0].picture}' width=200px height=200px>`

        this.picturesWrapperMap.insertAdjacentHTML('beforeEnd', `<img src='${this.map[0].symbol}' width=200px height=200px>`) 
        // this.picturesWrapper.insertAdjacentHTML('beforeEnd', `<audio src='${map[0].sound}'>`) 


        // picturesWrapper.insertAdjacentHTML('beforeEnd', `${map[0].symbol}`)
        // picturesWrapper.insertAdjacentHTML('beforeEnd', `${map[0].sound}`)

        let mapTextMain = tag({tag: "h2", parent: this.wrapperMap, className: 'map__text1'})

        mapTextMain.innerHTML = this.map[0].meaning

        this.mapButtonMain = tag({tag: "div", parent: this.wrapperMap, className: 'map__button1'})
        this.mapButtonMain.innerHTML = "Далее"
    }
    shuffle(map) {
        // поменять порядок слов
        for (let i = map.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [map[i], map[j]] = [map[j], map[i]];
          }
    }
    addListener() {
        this.mapButtonMain.addEventListener('click', (event) => {
            this.map.splice(0, 1)
            if(this.map.length == 0) {
                location.hash = '/module-2/task2-2'
                return
            }
            
            this.wrapperMap.innerHTML = ""
            this.render()
            this.addListener()
          
        })
    }
    
}
let learnMap 
export const getLearnMap = () => {
    if(!learnMap) {
        learnMap = new LearnMap
    }
    return learnMap
}