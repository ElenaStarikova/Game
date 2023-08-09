import{tag, pageFrame} from '../../functions'
import'./3-inst.css'

class InstructionThird {
    open() {
        this.render()
        this.addListener()
    }
    render() {
        
        pageFrame()
        
        let page = document.querySelector('.page__content')  

        let instructionHolder3 = tag({tag: "div", parent: page, className: 'instructionHolder3'})

        let ImgInst3 = tag({tag: "div", parent: instructionHolder3, className: 'instructionHolder__imgInst3'})

        let imageHolder3 = tag({tag: "div", parent: ImgInst3, className: 'imgInst3__image'})
        imageHolder3.innerHTML = '<img src="./img/firstpage/modul3.png" width=150px height=170px>'

        this.textInst3 = tag({tag: "h2", parent: ImgInst3, className: 'imgInst3__text'})
        this.textInst3.innerHTML = "Инструкция"

        let textH13 = tag({tag: "h1", parent: instructionHolder3, className: 'leftPanel__textH1-3'})
        textH13.innerHTML = "Искусство и география"

        let text3 = tag({tag: "h3", parent: instructionHolder3, className: 'leftPanel__text3'})
        text3.innerHTML = 'Вам предоставлены две неподписанные картины на выбор. В случае выбора картины "Мона Лиза", откроются факты и задания к ней. В случае выбора фрески "Сотворение Адама", откроются факты и задания к ней.'

        // let rightPanel = tag({tag: "div", parent: instructionHolder3, className: 'instructionHolder__righnPanel'})

        this.button3 = tag({tag: "div", parent: instructionHolder3, className: 'button__ready3'})
        this.button3.innerHTML = 'Я готов! Начинаем'


      

    }
    addListener() {
        this.button3.addEventListener('click', (event) => {
            location.hash = '/module-3/3firstpage'
            
        })
        this.textInst3.addEventListener('click', (event) => {
            let instructionHolder3 = document.querySelector('.instructionHolder3')
            instructionHolder3.innerHTML = '<div class="instruction">Инструкция</div>'
            this.buttonInstruction = tag({tag: "div", parent: this.note, className: 'button__futher'})
            this.buttonInstruction.innerHTML = 'Вернуться к выполнению задания'
            this.addListener()
        })
        this.buttonInstruction.addEventListener('click', (event) => {
            location.hash = '/module-3/instruction'
        })
    }
} 
let instructionThird 
export const getInstructionThird = () => {
    if(!instructionThird) {
        instructionThird = new InstructionThird
    }
    return instructionThird
}