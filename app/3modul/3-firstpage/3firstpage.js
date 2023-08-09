import{tag, pageFrame} from '../../functions'
import'./3firstpage.css'

class Art {
    open() {
        this.render()
        this.addListener()
    }
    render() {
        
        pageFrame()
        
        let page = document.querySelector('.page__content')
        let artHolder = tag({tag: "div", parent: page, className: 'artholder'})

        this.jocondaHolder = tag({tag: "div", parent: artHolder, className: 'joconda'})

        let jocondaImage = tag({tag: "div", parent: this.jocondaHolder, className: 'joconda__image'})
        jocondaImage.innerHTML = '<img src="./img/art/Jaconda1.png" width=200px height=300px>'

        let jocondaText =tag({tag: "h2", parent: this.jocondaHolder, className: 'joconda__text'})
        jocondaText.innerHTML = "Мона Лиза или Джоконда - картина Леонардо да Винчи"

        
        this.adamHolder = tag({tag: "div", parent: artHolder, className: 'adam'})

        let adamImage = tag({tag: "div", parent: this.adamHolder, className: 'adam__image'})
        adamImage.innerHTML = '<img src="./img/art/Adam1.png" width=600px height=300px>'

        let adamText =tag({tag: "h2", parent: this.adamHolder, className: 'adam__text'})
        adamText.innerHTML = "Сотворение Адама - фреска Микеланджело"
    }
    addListener() {
        this.jocondaHolder.addEventListener('click', (event) => {
            
            let button = event.target.closest('.joconda')
            if (button) {
                // запуск страниц о Джоконде
                location.hash = '/module-3/Joconda'
            }
        })
        this.adamHolder.addEventListener('click', (event) => {
            
            let button = event.target.closest('.adam')
            if (button) {
                // запуск страниц о сотворении Адама
                location.hash = '/module-3/Adam'
            }
        })
    }
}
let art 
export const getArt = () => {
    if(!art) {
        art = new Art
    }
    return art
}