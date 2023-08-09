import{tag, pageFrame, scoreTask2Plus, scoreTask2Get} from '../../functions'
import'./2-1.css'

class CountDots {
     
     open() {
        this.render()
        this.addListener()
       
    }
    render() {
        pageFrame()
        
        let page = document.querySelector('.page__content')
        
       this.elem = tag({tag: "div", parent: page, className: 'task2__wrapper'})

       let taskHolder =  tag({tag: "div", parent: this.elem, className: 'task2__taskholder'})

        // let text = tag({tag: "h2", parent: taskHolder, className: 'task2__text'})
        taskHolder.innerHTML = "Задание 2. <br> <br>HE указывая (пальцем, ручкой, карандашом) на точки в квадрате, посчитайте количество точек в каждом отдельном квадрате и поочередно внесите ответы:"

        let imageWrapper = tag({tag: "div", parent: this.elem, className: 'image__wrapper'})
      
        imageWrapper.innerHTML = '<img src="./img/1modul2task/7dots.png">' 
       
        imageWrapper.insertAdjacentHTML('beforeEnd', '<img src="./img/1modul2task/8dots.png">')
        imageWrapper.insertAdjacentHTML('beforeEnd', '<img src="./img/1modul2task/10dots.png">')
        imageWrapper.insertAdjacentHTML('beforeEnd', '<img src="./img/1modul2task/9dots.png">')
        

        this.form = tag({tag: "form", parent: this.elem, className: 'task2__form'})
        // for (let i = 0; i <= 3; i++) {
        //     form.insertAdjacentHTML('beforeEnd', '<input type="number" class="task2__input">')
        // }
        this.form.innerHTML = '<input type="number" class="task2__input" name="seven" value="">'
        this.form.insertAdjacentHTML('beforeEnd','<input type="number" class="task2__input" name="eight" value="">')
        this.form.insertAdjacentHTML('beforeEnd', '<input type="number" class="task2__input" name="ten" value="">')
        this.form.insertAdjacentHTML('beforeEnd', '<input type="number" class="task2__input" name="nine" value="">')

        this.button = tag({tag: "div", parent: this.elem, className: 'button__futher'})
        this.button.innerHTML = 'Далее'
        
    }

    // проверить чтобы все было введено

    addListener() {
        this.form.addEventListener('input', (event) => {
          
            this.checkIfFilled()
            if(this.form.elements.seven.value != '') {
                console.log(this.form.elements.seven)
                this.form.elements.seven.setAttribute('disabled', true)
            }
            if(this.form.elements.eight.value != '') {
                
                this.form.elements.eight.setAttribute('disabled', true)
            }
            if(this.form.elements.ten.value != '' && this.form.elements.ten.value.length == 2) {
                console.log(this.form.elements.seven)
                this.form.elements.ten.setAttribute('disabled', true)
            }
            if(this.form.elements.nine.value != '') {
                console.log(this.form.elements.seven)
                this.form.elements.nine.setAttribute('disabled', true)
            }
            // if (event.code === 'Enter') {
                
            //     // подсчитать число инпутов
            //     this.n++
            //     //поле в которое вводили заблокировать для введения, добавть серую окраску бордера
            //     event.target.disabled = true
            //     event.target.style.borderColor = "gray"
            // }
        })
        
        this.button.addEventListener('click', (event) => {
              this.checkIfCorrect()
              location.hash = '/module-1/task3-1'
        })
    }

    checkIfFilled() {
        
      if (this.form.elements.seven.value != '' && this.form.elements.eight.value != '' && this.form.elements.ten.value != '' && this.form.elements.nine.value != '') {
       
        // this.elem.insertAdjacentHTML('beforeEnd', '<button class="button__futher">Далее</button>')
        // this.button.style.visibility = 'visible'
      }
    }

// проверить парвильно ли введено чилсо точек
    checkIfCorrect() {
        if (this.form.elements.seven.value == '7') {
            scoreTask2Plus ()
        }
        if (this.form.elements.eight.value == '8') {
            scoreTask2Plus ()
        }
        if (this.form.elements.ten.value =='10') {
            scoreTask2Plus ()
        }
        if (this.form.elements.nine.value == '9') {
            let scoreEnd = scoreTask2Get()
            if (scoreEnd < 3) {
                scoreTask2Plus ()
            }
            else {
                scoreTask2Get()
            }
               
        }
    }

    

}

let countDots 
export const getCountDots = () => {
    if(!countDots) {
        countDots = new CountDots
    }
    return countDots
}