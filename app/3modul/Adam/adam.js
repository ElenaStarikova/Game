import{tag, pageFrame} from '../../functions'
import'./adam.css'


class Adam {
    open() {
        this.render()
        this.addListener()
    }
    render() {
        pageFrame()
        
        let page = document.querySelector('.page__content')

        let artHolder = tag({tag: "div", parent: page, className: 'artholder1'})

        let textHolder = tag({tag: "div", parent: artHolder, className: 'textholder1'})

        let heading = tag({tag: "div", parent: textHolder, className: 'textholder__header1'})
        heading.innerHTML = 'Общие сведения'

        let text = tag({tag: "div", parent: textHolder, className: 'textholder__text1'})
        text.innerHTML = '«Сотворение Адама» — фреска Микеланджело, написанная в начале XVI века. Фреска является четвёртой из девяти центральных композиций потолка Сикстинской капеллы (Ватикан), посвящённых девяти сюжетам книги Бытия. Фреска иллюстрирует эпизод: И сотворил Бог человека по образу Своему (Быт.1:27)'

        this.adamHolder = tag({tag: "div", parent: artHolder, className: 'adam'})

        this.adamImage = tag({tag: "div", parent: this.adamHolder, className: 'adam__image'})
        this.adamImage.innerHTML = '<img src="./img/art/Adam1.png" width=600px height=300px>'

        this.button = tag({tag: "div", parent: this.adamHolder, className: 'art__button1'})
        this.button.innerHTML = 'Далее'

    }
   
    information() {
        let artHolder = document.querySelector('.artholder1')
        artHolder.innerHTML = ""

        let textHolder = tag({tag: "div", parent: artHolder, className: 'textholder1'})

        this.artQuestion = tag({tag: "h2", parent: textHolder, className: 'textholder__artquestion1'})
        this.artQuestion.innerHTML = 'Вопрос №1. <br> Рассмотрите картину. Почему руки Бога и Адама не соприкасаются? Что хотел передать автор? Как Вы считаете?'
        this.artDetails = tag({tag: "details", parent: textHolder, className: 'textholder__artdetails1'})
        this.artDetails.innerHTML = 'Вся композиция сконцентрирована на жесте двух рук. Рука Бога даёт импульс, а рука Адама принимает его, давая всему телу жизненную энергию. Тем, что их руки не соприкасаются, Микеланджело подчеркнул невозможность соединения божественного и человеческого'
        this.artSummary = tag({tag: "summary", parent: this.artDetails, className: 'textholder__artsummary1'})
              
        this.artSummary.innerHTML = 'Мнение'

        // this.adamHolder = tag({tag: "div", parent: this.artHolder, className: 'adam'})

        this.adamImage = tag({tag: "div", parent: artHolder, className: 'adam__image'})
        this.adamImage.innerHTML = '<img src="./img/art/Adam1.png" width=500px height=300px>'
        this.adamImage.insertAdjacentHTML('beforeEnd', '<img src="./img/art/Adam2.png" width=200px height=200px>')


        this.buttonInfoFirst = tag({tag: "div", parent: artHolder, className: 'art__button1'})
        this.buttonInfoFirst.innerHTML = 'Далее'
        
      
    }
    informationSecond() {
        let artHolder = document.querySelector('.artholder1')
        artHolder.innerHTML = ""

        let textHolder = tag({tag: "div", parent: artHolder, className: 'textholder1'})

        this.artQuestion = tag({tag: "h2", parent: textHolder, className: 'textholder__artquestion1'})
        this.artQuestion.innerHTML = '"Вопрос №2. <br> Рассмотрите картину. На что, по Вашему мнению, похож развевающийся вокруг Бога и его спутников красный плащ?"'
        this.artDetails = tag({tag: "details", parent: textHolder, className: 'textholder__artdetails1'})
        this.artDetails.innerHTML = 'Американский врач Фрэнк Линн Мешбергер отметил сходство очертаний плаща с очертаниями человеческого мозга. Многие другие врачи и биологи поддержали данную идею. <br> Автор фрески, по словам Джорджо Вазари, «постоянно занимался анатомией, вскрывая трупы, дабы усмотреть начала и связи костяка, мышц, нервов и жил…» Поэтому художник мог изучить в деталях и содержимое черепной коробки. А в эпоху Ренессанса существовали представления о том, что мозг –– вместилище разума.'
        this.artSummary = tag({tag: "summary", parent: this.artDetails, className: 'textholder__artsummary1'})
              
        this.artSummary.innerHTML = 'Мнение'

        // this.adamHolder = tag({tag: "div", parent: this.artHolder, className: 'adam'})

        this.adamImage = tag({tag: "div", parent: artHolder, className: 'adam__image'})
        this.adamImage.innerHTML = '<img src="./img/art/Adam1.png" width=500px height=300px>'
        this.adamImage.insertAdjacentHTML('beforeEnd', '<img src="./img/art/Adam3.png" width=200px height=200px>')

        this.artDetails.addEventListener('click', (event) => {
            this.adamImage.innerHTML = '<img src="./img/art/Adam4.png" width=300px height=300px>'
            this.adamImage.insertAdjacentHTML('beforeEnd', '<img src="./img/art/Adam5.png" width=300px height=300px>')
        })

        this.buttonInfoSecond = tag({tag: "div", parent: artHolder, className: 'art__button1'})
        this.buttonInfoSecond.innerHTML = 'Далее'
        
      
    }
    question() {
        let artHolder = document.querySelector(".artholder1")
        artHolder.innerHTML = ""
        

        this.artQuestion = tag({tag: "h2", parent: artHolder, className: 'textholder__artquestion1'})
        this.artQuestion.innerHTML = 'На что похож развевающийся вокруг Бога и его спутников красный плащ по мнению врачей и биологов?'

        let textHolder = tag({tag: "div", parent: artHolder, className: 'adam__textholder'})

        this.artForm =  tag({tag: "form", parent: textHolder, className: 'textholder__artform1'})
        console.log(9)
       
        this.artForm.insertAdjacentHTML('beforeEnd', `<label class="artform__label1"><input type="radio" name="adam"><span class="artform__text1">На желудок, в котором заключен разум</span></label>`)
        this.artForm.insertAdjacentHTML('beforeEnd', `<label class="artform__label1"><input type="radio" name="adam"><span class="artform__text1">На человеческий мозг, в который заключен разум</span></label>`)
        this.artForm.insertAdjacentHTML('beforeEnd', `<label class="artform__label1"><input type="radio" name="adam"><span class="artform__text1">На печень, в которую заключен разум</span></label>`)
       

        this.adamImage = tag({tag: "div", parent: textHolder, className: 'adam__image'})
        this.adamImage.innerHTML = '<img src="./img/art/Adam1.png" width=500px height=300px>'

        this.buttonQuestion = tag({tag: "div", parent: artHolder, className: 'art__button1'})
        this.buttonQuestion.innerHTML = 'Далее'
    }
     addListener() {
        this.button.addEventListener('click', (event) => {
            this.information()
            this.addListener()              
       
        })
        this.buttonInfoFirst.addEventListener('click', (event) => {
            this.informationSecond()
            this.addListener() 
        })
        this.buttonInfoSecond.addEventListener('click', (event) => {
            this.question()
            this.addListener() 
        })

        this.artForm.addEventListener('click', (event) => {
            let artHolderForm1 = document.querySelector(".textholder__artform1")
            // artHolderForm1.insertAdjacentHTML('beforeEnd', '<div  class="textholder__answer1" >Правильный ответ: На человеческий мозг, в который заключен разум</div>')
            artHolderForm1.innerHTML = '<div  class="textholder__answer1" >Правильный ответ: На человеческий мозг, в который заключен разум</div>'
        }) 

        this.buttonQuestion.addEventListener('click', (event) => {
           
            let artHolder = document.querySelector(".artholder1")
            artHolder.innerHTML = '<div class="finish1">Вы завершили задание! <br> Нажмите на стрелочку в левом верхнем углу экрана, чтобы вернуться в главное меню.</div>'
        })
    }
}
let adam 
export const getAdam = () => {
    if(!adam) {
        adam = new Adam
    }
    return adam
}