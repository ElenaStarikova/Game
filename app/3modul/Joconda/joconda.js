import{tag, pageFrame} from '../../functions'
import'./joconda.css'

function createJocondaInfo() {
        return [
        {
            question: "Вопрос №1.<br> Рассмотрите картину. Почему у Мона Лизы нет бровей? Как Вы считаете?",
            summary: "Мнение искусствоведов:",
            details: "В Италии в XVI веке брови и ресницы высветляли женщины, предлагающие интимные услуги. (Почему тогда такая одежда и поза?)",
            type: 'info',
        },
        {
            question: "Вопрос №2. Рассмотрите картину. Почему у Мона Лизы бессильная улыбка? Как Вы считаете?",
            summary: "Мнение искусствоведов:",
            details: "Американские специалисты считают, что подобная улыбка является проявлением гипотиреоза – снижения функции щитовидной железы – и вызвана мышечной слабостью. Также из-за снижения процессов обмена клеток – выпадают волосы и, соответственно, брови и ресницы. Их также нет на картине. Желтоватый оттенок кожи также косвенно подтверждают данное мнение.",
            type: 'info',
        },
        {
            question: "Вопрос 3. Рассмотрите картину на боку. Видите ли Вы что-то необычное?",
            summary: "Мнение американского художника",
            details: "Американский художник Рон Пиччирилло перевернул картину на бок и обнаружил целый зоопарк на заднем плане картины: Голову льва, обезьяны и буйвола! Попробуйте и Вы их разглядеть на верхней картине! ",
            type: 'info1',
        },
        {
            question: 'Какова может быть медицинская причина бессильной улыбки с отсутствием бровей и ресниц Мона Лизы?',
            answer: ['Гипотиреоз – снижение функции щитовидной железы – замедление обменных процессов в организме', 'Гипертиреоз – повышение функции щитовидной железы – усиление обменных процессов в организме', 'Повышение уровня холестерина в организме', 'Повышение артериального давления'],
            correct: 'Правильный ответ: Гипотиреоз – снижение функции щитовидной железы – замедление обменных процессов в организме',
            type: 'variants',
        },
        
    ]
}


class Joconda {
    open() {
        this.init()
        this.render()
        this.addListener()
        // this.addListenerForm()
        // this.addListenerLastButton()
    }
    init() {
        this.jocondaInfo = createJocondaInfo()
        
    }
    render() {
        
        pageFrame()
        
        let page = document.querySelector('.page__content')

        let artHolder = tag({tag: "div", parent: page, className: 'artholder'})

        let textHolder = tag({tag: "div", parent: artHolder, className: 'textholder'})

        let heading = tag({tag: "div", parent: textHolder, className: 'textholder__header'})
        heading.innerHTML = 'Общие сведения'

        let text = tag({tag: "div", parent: textHolder, className: 'textholder__text'})
        text.innerHTML = '«Мо́на Ли́за», или «Джоко́нда»— картина Леонардо да Винчи, одно из самых известных произведений живописи. Написана в начале XVI века. Ныне хранится в Лувре (Париж, Франция). Считается, что на картине изображена Лиза Герардини, супруга флорентийского торговца шёлком Франческо дель Джокондо.'

        this.jocondaHolder = tag({tag: "div", parent: artHolder, className: 'joconda'})

        this.jocondaImage = tag({tag: "div", parent: this.jocondaHolder, className: 'joconda__image'})
        this.jocondaImage.innerHTML = '<img src="./img/art/Jaconda1.png" width=300px height=500px>'

        this.button = tag({tag: "div", parent: textHolder, className: 'art__button'})
        this.button.innerHTML = 'Далее'


        // this.artQuestion = tag({tag: "h2", parent: textHolder, className: 'textholder__artquestion'})
        // this.artQuestion.innerHTML = `${jocondaInfo[0].question}`
        // this.artDetails = tag({tag: "details", parent: textHolder, className: 'textholder__artdetails'})
        // this.artDetails.innerHTML = `${jocondaInfo[0].details}`

        // this.artSummary = tag({tag: "summary", parent: this.artDetails, className: 'textholder__artsummary'})
              
        // this.artSummary.innerHTML = `${jocondaInfo[0].summary}`

        // this.jocondaHolder = tag({tag: "div", parent: artHolder, className: 'joconda'})

        // this.jocondaImage = tag({tag: "div", parent: this.jocondaHolder, className: 'joconda__image'})
        // this.jocondaImage.innerHTML = '<img src="./img/art/Jaconda1.png" width=300px height=300px>'

        // this.button = tag({tag: "div", parent: textHolder, className: 'art__button'})
        // this.button.innerHTML = 'Далее'
      

    }
    addListener() {
        this.button.addEventListener('click', (event) => {
            this.clean()
            
           
           console.log(this.jocondaInfo[0])
           if (this.jocondaInfo[0].type == 'variants') {

                
                this.question()
                console.log('finish')
                // следующая страница с вопросами
                this.addListenerForm(this.jocondaInfo[0])
                this.addListenerLastButton()
           }
           else {
                this.information()
                this.addListener()
               
           }
            this.jocondaInfo.splice(0, 1) 
            
        //     if (jocondaInfo[0].type == 'info1') {
        //         this.information()
        //         this.jocondaImage.style.transform = 'rotate(-90deg)'
        //         this.artDetails.addEventListener('click', (event) => {
        //         this.jocondaHolder.insertAdjacentHTML('beforeEnd', '<img src="./img/art/Jaconda2.png" width=300px height=300px>')})

        //    }         
                   
        })
    }
    addListenerForm(variants){

       this.artForm.addEventListener('click', (event) => {
            
            let textHolderForm = document.querySelector(".textholder__artform")
            
            // textHolder.insertAdjacentHTML('beforeEnd', `<div  class="textholder__answer" >${variants.correct}</div>`)
            textHolderForm.innerHTML = `<div  class="textholder__answer" >${variants.correct}</div>`
        })
         
    }
    addListenerLastButton() {
        this.buttonQuestion.addEventListener('click', (event) => {
            this.clean()
            let artHolder = document.querySelector(".artholder")
            artHolder.innerHTML = '<div class="finish">Вы завершили задание! <br> Нажмите стрелочку в левом верхнем углу экрана, чтобы вернуться в главное меню.</div>'
        })
    }
        


        
    
    information() {
        let artHolder = document.querySelector(".artholder")
        let textHolder = tag({tag: "div", parent: artHolder, className: 'textholder'})

        this.artQuestion = tag({tag: "h2", parent: textHolder, className: 'textholder__artquestion'})
        this.artQuestion.innerHTML = `${this.jocondaInfo[0].question}`
        this.artDetails = tag({tag: "details", parent: textHolder, className: 'textholder__artdetails'})
        this.artDetails.innerHTML = `${this.jocondaInfo[0].details}`

        this.artSummary = tag({tag: "summary", parent: this.artDetails, className: 'textholder__artsummary'})
              
        this.artSummary.innerHTML = `${this.jocondaInfo[0].summary}`

        this.jocondaHolder = tag({tag: "div", parent: artHolder, className: 'joconda'})

        this.jocondaImage = tag({tag: "div", parent: this.jocondaHolder, className: 'joconda__image'})
        this.jocondaImage.innerHTML = '<img src="./img/art/Jaconda1.png" width=300px height=500px>'

        this.button = tag({tag: "div", parent: textHolder, className: 'art__button'})
        this.button.innerHTML = 'Далее'
        if (this.jocondaInfo[0].type == 'info1') {
            this.jocondaImage.style.transform = 'rotate(90deg)'
            this.jocondaHolder.classList.remove('joconda')
            this.artDetails.addEventListener('click', (event) => {
                this.jocondaImage.insertAdjacentHTML('beforeEnd', '<img src="./img/art/Jaconda 2.png" width=500px height=300px style="transform: rotate(-90deg)">')
            })
            // this.artDetails.addEventListener.remove()style="transform: rotate(-90deg)"
        }
    }
    clean() {
        let artHolder = document.querySelector(".artholder")
        artHolder.innerHTML = ""
    }

    question() {
        let artHolder = document.querySelector(".artholder")
        let textHolder = tag({tag: "div", parent: artHolder, className: 'textholder'})

        this.artQuestion = tag({tag: "h2", parent: textHolder, className: 'textholder__artquestion'})
        this.artQuestion.innerHTML = `${this.jocondaInfo[0].question}`

        this.artForm =  tag({tag: "form", parent: textHolder, className: 'textholder__artform'})
        console.log(9)
       
        this.artForm.insertAdjacentHTML('beforeEnd', `<label class="artform__label"><input type="radio" name="joconda"><span class="artform__text">${this.jocondaInfo[0].answer[0]}</span></label>`)
        this.artForm.insertAdjacentHTML('beforeEnd', `<label class="artform__label"><input type="radio" name="joconda"><span class="artform__text">${this.jocondaInfo[0].answer[1]}</span></label>`)
        this.artForm.insertAdjacentHTML('beforeEnd', `<label class="artform__label"><input type="radio" name="joconda"><span class="artform__text">${this.jocondaInfo[0].answer[2]}</span></label>`)
        this.artForm.insertAdjacentHTML('beforeEnd', `<label class="artform__label"><input type="radio" name="joconda"><span class="artform__text">${this.jocondaInfo[0].answer[3]}</span></label>`)

        this.jocondaHolder = tag({tag: "div", parent: artHolder, className: 'joconda'})

        this.jocondaImage = tag({tag: "div", parent: this.jocondaHolder, className: 'joconda__image'})
        this.jocondaImage.innerHTML = '<img src="./img/art/Jaconda1.png" width=300px height=500px>'

        this.buttonQuestion = tag({tag: "div", parent: textHolder, className: 'art__button'})
        this.buttonQuestion.innerHTML = 'Далее'
        
    }
 
}
let joconda 
export const getJoconda = () => {
    if(!joconda) {
        joconda = new Joconda
    }
    return joconda
}