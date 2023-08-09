import{tag, pageFrame, scoreTask3Plus, scoreTask3Get} from '../../functions'
import'./3-1.css'

class Minus {
    open(){
        this.render()
        this.addListener()
        this.n = 1
    }
    render() {
        pageFrame()
        
        let page = document.querySelector('.page__content')

        let elem = tag({tag: "div", parent: page, className: 'task3__wrapper'})

        let btnExp = tag({tag: "div", parent: elem, className: 'task3__btnExp'})

        let explanationHolder = tag({tag: "div", parent: btnExp, className: 'task3__explanationHolder'})

        let explanation = tag({tag: "h2", parent: explanationHolder, className: 'task3__text'})

        explanation.innerHTML = "Задание 3.<br> <br> Теперь Вам необходимо несколько раз вычесть цифру 8.<br> Начните со 100 и продолжайте вычитать цифру 8 <br> из каждого вновь получившегося числа"

        this.button = tag({tag: "div", parent: btnExp, className: 'task3__button'})

        this.button.innerHTML = 'Далее'

        this.taskHolder = tag({tag: "form", parent: elem, className: 'task3__taskHolder'})

        let str1 = tag({tag: "div", parent: this.taskHolder, className: 'task3__str'})

        str1.innerHTML = '<h3>100 - 8 = </h3><input type="number" name="result" class="task3__input input1" data-result="100">'


        let str2 = tag({tag: "div", parent: this.taskHolder, className: 'task3__str'})

        str2.innerHTML = '<div class="enter enter1"></div><h3> - 8 = </h3><input type="number" name="result" data-result="84" class="task3__input input2" >'

       
        let str3 = tag({tag: "div", parent: this.taskHolder, className: 'task3__str'})

        str3.innerHTML = '<div class="enter enter2"></div><h3> - 8 = </h3><input type="number" name="result" data-result="76" class="task3__input input3" >'


        let str4 = tag({tag: "div", parent: this.taskHolder, className: 'task3__str'})

        str4.innerHTML = '<div class="enter enter3"></div><h3> - 8 = </h3><input type="number" name="result" data-result="68" class="task3__input input4" >'

       
    }

    addListener() {
        this.input = document.querySelector(".input1")
        this.enterElement = document.querySelector(".enter1")

        this.input.addEventListener('input', (event) => {
           
                                    
           this.enterElement.innerHTML = this.input.value

            
            this.input.classList.remove("input1")
            this.enterElement.classList.remove("enter1")
       })

       this.input2 = document.querySelector(".input2")
       this.enterElement2 = document.querySelector(".enter2")

       this.input2.addEventListener('input', (event) => {
          
                                   
          this.enterElement2.innerHTML = this.input2.value

           this.input.classList.remove("input2")
           this.enterElement.classList.remove("enter2")
      })

        this.input3 = document.querySelector(".input3")
        this.enterElement3 = document.querySelector(".enter3")

        this.input3.addEventListener('input', (event) => {
            
                                    
            this.enterElement3.innerHTML = this.input3.value

            this.input3.classList.remove("input3")
            this.enterElement.classList.remove("enter3")
        })

        this.input4 = document.querySelector(".input4")
        
        this.input4.addEventListener('input', (event) => {
           
            this.input3.classList.remove("input4")
            
            
        })
          this.button.addEventListener("click", (event) => {
            // scoreReset()
            if (this.input.value == 92) {
                scoreTask3Plus ()
                 }
                   
            if (this.input2.value == this.enterElement.innerHTML - 8) {
                    scoreTask3Plus ()
                } 
            if (this.input3.value == this.enterElement2.innerHTML - 8) {
                scoreTask3Plus ()
                }                     
            if (this.input4.value == this.enterElement3.innerHTML - 8) {
                let scoreEnd = scoreTask3Get()
                    if (scoreEnd < 3) {
                        scoreTask3Plus ()
                    }
                    else {
                        scoreTask3Get()
                    }
                }
                // console.log(localStorage.score)
                location.hash = '/module-1/task4(1)-1'
          })    
    }

   

}

// if (form.elements.result[1] === form.elements.result[0] - 8) {
//     // добавить балл
// }

// let enterElement2 = document.querySelector(".enter")
// enterElement2.innerHTML = form.elements.result[1]
// enterElement2.classList.remove('enter')

let minus 
export const getMinus = () => {
    if(!minus) {
        minus = new Minus
    }
    return minus
}