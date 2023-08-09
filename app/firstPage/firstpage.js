import{tag} from '../functions.js'

import'./firstpage.css'

class FirstPage {
    open() {
        this.render()
        this.addListeners()
    }
    render() {
        let wrapper = tag({tag: "div", parent: document.body, className: 'wrapper'})
        

        let textHolder = tag({tag: "div", parent: wrapper, className: 'firstpage__textholder'})
        let triangle = tag({tag: "div", parent: textHolder, className: 'firstpage__triangle'})

        triangle.innerHTML = '<img src="./img/firstpage/triangle.png">'

        let text = tag({tag: "h3", parent: textHolder, className: 'firstpage__text'})
        text.innerHTML = 'Если Вы ещё не провели оценку когнитивных функций, то это  необходимо сделать прямо сейчас! <br>  Благодаря модулю «Диагностика» узнайте, какие упражнения  подходят Вам сегодня и приступайте к работе! Удачи!'

        let chooseText = tag({tag: "h3", parent: wrapper, className: 'firstpage__choosetext'})
        chooseText.innerHTML = "Выберите модуль"

        let modul = tag({tag: "div", parent: wrapper, className: 'modul'})

        this.modulHolder1 = tag({tag: "div", parent: modul, className: 'modul__holder modul__holder_brown'})

        this.modulHolder2 = tag({tag: "div", parent: modul, className: 'modul__holder modul__holder_blue'})

        this.modulHolder3 = tag({tag: "div", parent: modul, className: 'modul__holder modul__holder_gray'})

        this.modulHolder1.insertAdjacentHTML('beforeEnd', "<img class='modul__image' src='./img/firstpage/modul1.png'> <h2 class='modul__text'>Диагностика</h2>")
        this.modulHolder2.insertAdjacentHTML('beforeEnd', "<img class='modul__image' src='./img/firstpage/modul2.png'> <h2 class='modul__text'>Символьная <br> реабилитация</h2>")
        this.modulHolder3.insertAdjacentHTML('beforeEnd', "<img class='modul__image' src='./img/firstpage/modul3.png'> <h2 class='modul__text'>Искусство и <br>география</h2>")

        this.colorButton = tag({tag: "div", parent: wrapper, className: 'colorButton'})

        let colorButtonItem = tag({tag: "div", parent: this.colorButton, className: 'colorButton__item colorButton__item_green'})

        let colorButtonItem1 = tag({tag: "div", parent: this.colorButton, className: 'colorButton__item colorButton__item_pink'})

        let colorButtonItem2 = tag({tag: "div", parent: this.colorButton, className: 'colorButton__item colorButton__item_lightblue'})

        let colorButtonItem3 = tag({tag: "div", parent: this.colorButton, className: 'colorButton__item colorButton__item_blue'})

        // let colorButtonItem4 = tag({tag: "div", parent: this.colorButton, className: 'colorButton__item colorButton__item_gray'})
    }
    addListeners() {
        this.modulHolder1.addEventListener('click',  () => {
            location.hash = '/module-1/instruction'
        }) 
         
        this.modulHolder2.addEventListener('click', (event)=> {
            location.hash = '/module-2/instruction'
        })
        this.modulHolder3.addEventListener('click', (event)=> {
            location.hash = '/module-3/instruction'
        })


        this.colorButton.addEventListener('click', (event)=> {
            if (event.target.classList.contains('colorButton__item_green')) {
                document.documentElement.dataset.mode = "green"
                
            }
            if (event.target.classList.contains('colorButton__item_pink')) {
                document.documentElement.dataset.mode = "pink"
            }
            if (event.target.classList.contains('colorButton__item_lightblue')) {
                document.documentElement.dataset.mode = "lightblue"
            }
            if (event.target.classList.contains('colorButton__item_blue')) {
                document.documentElement.dataset.mode = "blue"
            }
            // if (event.target.classList.contains('colorButton__item_gray')) {
            //     document.documentElement.dataset.mode = "gray"
            // }
        })
    }
}
let firstPage 
export const getFirstPage = () => {
    if(!firstPage) {
        firstPage = new FirstPage
    }
    return firstPage
}
