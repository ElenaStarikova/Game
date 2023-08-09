import{tag, pageFrame} from '../../functions'
import './4-2.css'

class MatchHills {
    open() {
        this.render()
        this.addListener()
    }
    render() {
        pageFrame()
        
        let page = document.querySelector('.page__content')

        this.elem = tag({tag: "div", parent: page, className: 'task4-2__wrapper'})

       let taskHolder =  tag({tag: "div", parent: this.elem, className: 'task4-2__taskholder'})

        let text = tag({tag: "h2", parent: taskHolder, className: 'task4-2__text'})
        text.innerHTML = "Задание 3. <br> Посмотрите на изображение рельефа в натуре с изображением рельефа на карте. Сопоставьте картинки и буквы. Успехов!"
        
        let taskContainer = tag({tag: "div", parent: this.elem, className: 'task4-2__taskcontainer'})


        let imageWrapper = tag({tag: "div", parent: taskContainer, className: 'image__wrapper'})
      
        imageWrapper.innerHTML = '<img src="./img/2modul4task/first.png" width=100px height=100px>' 
       
        imageWrapper.insertAdjacentHTML('beforeEnd', '<img src="./img/2modul4task/second.png" width=100px height=100px>')
        imageWrapper.insertAdjacentHTML('beforeEnd', '<img src="./img/2modul4task/third.png" width=100px height=100px>')
        imageWrapper.insertAdjacentHTML('beforeEnd', '<img src="./img/2modul4task/fouth.png" width=100px height=100px>')
        imageWrapper.insertAdjacentHTML('beforeEnd', '<img src="./img/2modul4task/fiveth.png" width=100px height=100px>')

        this.form = tag({tag: "form", parent: taskContainer, className: 'task4-2__form'})
        // for (let i = 0; i <= 3; i++) {
        //     form.insertAdjacentHTML('beforeEnd', '<input type="number" class="task2__input">')
        // }
        this.form.innerHTML = '<input type="text" class="task4-2__input" name="one" value="" autocomplete="off">'
        this.form.insertAdjacentHTML('beforeEnd','<input type="text" class="task4-2__input" name="two" value="" autocomplete="off">')
        this.form.insertAdjacentHTML('beforeEnd', '<input type="text" class="task4-2__input" name="three" value="" autocomplete="off">')
        this.form.insertAdjacentHTML('beforeEnd', '<input type="text" class="task4-2__input" name="four" value="" autocomplete="off">')
        this.form.insertAdjacentHTML('beforeEnd', '<input type="text" class="task4-2__input" name="five" value="" autocomplete="off">')


        this.answerLine = tag({tag: "div", parent: taskContainer, className: 'task4-2__answerline'})
        this.answerLine.innerHTML = '<span class="answeline__answer" id="one">1</span>'
        this.answerLine.insertAdjacentHTML('beforeEnd', '<span class="answeline__answer" id="four">4</span>')
        this.answerLine.insertAdjacentHTML('beforeEnd', '<span class="answeline__answer" id="two">2</span>')
        this.answerLine.insertAdjacentHTML('beforeEnd', '<span class="answeline__answer" id="three">3</span>')
        this.answerLine.insertAdjacentHTML('beforeEnd', '<span class="answeline__answer" id="five">5</span>')


        let answersHolder = tag({tag: "div", parent: this.elem, className: 'task4-2__answersholder'})

        answersHolder.insertAdjacentHTML('beforeEnd', '<div class="task4-2__answer"><h3>1</h3><img src="./img/2modul4task/B.png" width=100px height=50px></div>')
        answersHolder.insertAdjacentHTML('beforeEnd', '<div class="task4-2__answer"><h3>2</h3><img src="./img/2modul4task/P.png" width=100px height=50px></div>')
        answersHolder.insertAdjacentHTML('beforeEnd', '<div class="task4-2__answer"><h3>3</h3><img src="./img/2modul4task/H.png" width=100px height=50px></div>')
        answersHolder.insertAdjacentHTML('beforeEnd', '<div class="task4-2__answer"><h3>4</h3><img src="./img/2modul4task/E.png" width=100px height=50px></div>')
        answersHolder.insertAdjacentHTML('beforeEnd', '<div class="task4-2__answer"><h3>5</h3><img src="./img/2modul4task/O.png" width=100px height=50px></div>')

       
        // this.correctAnswers = tag({tag: "div", parent: this.elem, className: 'task4-2__correctanswers'})
        // this.correctAnswers.innerHTML = 'Ответ: <br>1B <br> 2E <br>3P <br> 4H <br> 5O'

        this.backText = tag({tag: "div", parent: this.elem, className: 'task4-2__backtext'})
        this.backText.innerHTML = 'Вы прошли все задания модуля Символьная реабилитация. <br> Для возвращения в главное меню нажмите на стрелочку в верхнем левом углу экрана.'
    }

    addListener() {
        this.form.addEventListener('input', (event) => {
            this.checkIfFilled()
            
        })
    } 
    matchCorrect(){
        if (this.form.elements.one.value == '1') {
                this.form.elements.one.style.background = 'green'
            }else {
                this.form.elements.one.style.background = 'red'
            }
        
            if (this.form.elements.two.value == '4') {
                this.form.elements.two.style.background = 'green'
            }else {
                this.form.elements.two.style.background = 'red'
            }

            if (this.form.elements.three.value == '2') {
                this.form.elements.three.style.background = 'green'
            }else {
                this.form.elements.three.style.background = 'red'
            }

            if (this.form.elements.four.value == '3') {
                this.form.elements.four.style.background = 'green'
            }else {
                this.form.elements.four.style.background = 'red'
            }

            if (this.form.elements.five.value == '5') {
                this.form.elements.five.style.background = 'green'
            }else {
                this.form.elements.five.style.background = 'red'
            }
        }
   

    checkIfFilled() {
        
        if (this.form.elements.one.value != '' && this.form.elements.two.value != '' && this.form.elements.three.value != '' && this.form.elements.four.value != '' && this.form.elements.five.value != '') {
        
          this.answerLine.style.visibility = 'visible'
          this.backText.style.visibility = 'visible'
          this.matchCorrect()    
    }
 }
}
let matchHills
export const getMatchHills = () => {
    if(!matchHills) {
        matchHills = new MatchHills
    }
    return matchHills
}