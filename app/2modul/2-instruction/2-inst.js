import{tag, pageFrame} from '../../functions'
import'./2-inst.css'

class InstructionSecond {
    open() {
        this.render()
        this.addListener()
    }
    render() {
        
        pageFrame()
        
        let page = document.querySelector('.page__content')  

        let instructionHolder2 = tag({tag: "div", parent: page, className: 'instructionHolder2'})

        let imgInst2= tag({tag: "div", parent: instructionHolder2, className: 'instructionHolder__ImgInst2'})

        let imageHolder2 = tag({tag: "div", parent: imgInst2, className: 'ImgInst2__image'})
        imageHolder2.innerHTML = '<img src="./img/firstpage/modul2.png" width=150px height=170px>'

        this.textInst2 = tag({tag: "h2", parent: imgInst2, className: 'ImgInst2__text'})
        this.textInst2.innerHTML = "Инструкция"

        let textH12 = tag({tag: "h1", parent: instructionHolder2, className: 'leftPanel__textH1-2'})
        textH12.innerHTML = "Символьная реабилитация"

        let text2 = tag({tag: "h3", parent: instructionHolder2, className: 'leftPanel__text2'})
        text2.innerHTML = 'Символьная поддержка (Модуль подготовки к выходу в модуль географии, правила ориентирования зашифрованы в заданиях)'

        // let rightPanel = tag({tag: "div", parent: instructionHolder, className: 'instructionHolder__righnPanel'})

        this.button2 = tag({tag: "div", parent: instructionHolder2, className: 'button__ready2'})
        this.button2.innerHTML = 'Я готов! Начинаем'


      
        
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
        this.button2.addEventListener('click', (event) => {
            location.hash = '/module-2/task1-2'
            
        })
        this.textInst.addEventListener('click', (event) => {
            let instructionHolder2 = document.querySelector('.instructionHolder')
            instructionHolder2.innerHTML = '<div class="instruction">Инструкция</div>'
            this.buttonInstruction = tag({tag: "div", parent: this.note, className: 'button__futher'})
            this.buttonInstruction.innerHTML = 'Вернуться к выполнению задания'
            this.addListener()
            this.buttonInstruction.addEventListener('click', (event) => {
            location.hash = '/module-2/task1-2'
        })
        })
       
    }
} 
let instructionSecond 
export const getInstructionSecond = () => {
    if(!instructionSecond) {
        instructionSecond = new InstructionSecond
    }
    return instructionSecond
}