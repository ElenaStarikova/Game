import{tag, pageFrame, scoreTask4Plus,scoreTask4Get, scoreTask2Get, scoreTask3Get, scoreTask1Get, scoreTotalGet} from '../../functions'
import'./4(2)-1.css'

let arr = [
    {
        num: 1,
        symbol: '[',
    },
    {
        num: 2,
        symbol: 'Ʇ',
    },
    {
        num: 3,
        symbol: '┘',
    },
    {
        num: 4,
        symbol: '=',
    },
    {
        num: 5,
        symbol: '└',
    },
    {
        num: 6,
        symbol: '>',
    },
    {
        num: 7,
        symbol: ']',
    },
    {
        num: 8,
        symbol: '+',
    },
    {
        num: 9,
        symbol: '∩',
    }
]
let arrBlack = [
    {
        num: 1,
        symbol: '!',
        sense: '',
    },
    {
        num: 2,
        symbol: '@',
        sense: '',
    },
    {
        num: 3,
        symbol: '#',
        sense: '',
    },
    {
        num: 4,
        symbol: '$',
        sense: '',
    },
    {
        num: 5,
        symbol: '%',
        sense: '',
    },
    {
        num: 6,
        symbol: '^',
        sense: '',
    },
    {
        num: 7,
        symbol: '&',
        sense: '',
    },
    {
        num: 8,
        symbol: '*',
        sense: '',
    },
    {
        num: 9,
        symbol: '(',
        sense: '',
    }
]
let n = 0
class NumberTask {
    open() {
        this.render();
        this.addListener();
        setTimeout(this.result.bind(this), 90000)
       
    }
    render() {
        pageFrame()
        
        let page = document.querySelector('.page__content')

        this.wrapper = tag({tag: "div", parent: page, className: 'task4__wrapper2'})

        // синие клавиши
        let keyboardInner = tag({tag: "div", parent: this.wrapper, className: 'keyboard__inner_big2'})

        let keyboardInner1 = tag({tag: "div", parent: keyboardInner, className: 'keyboard__inner2'})

        let keyboardInner2 = tag({tag: "div", parent: keyboardInner, className: 'keyboard__inner_darker2'})

        for (let a of arr) {
            keyboardInner1.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item2"><div class = "keyboard__img2">${a.symbol}</div></div>`)
        }

        for (let a of arr) {
            keyboardInner2.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item2"><div class = "keyboard__img2">${a.num}</div></div>`)
        }

        // зеленые клавиши
       

        let keyboardInnerGreen = tag({tag: "div", parent: this.wrapper, className: 'keyboard__innergreen2'})

        

        let strGreen1 = tag({tag: "div", parent: keyboardInnerGreen, className: 'keyboard__str_light2 keyboard__str_symbol'})

        let strGreen2 = tag({tag: "div", parent: keyboardInnerGreen, className: 'keyboard__str_dark2 keyboard__str_empty'})

        let strGreen3 = tag({tag: "div", parent: keyboardInnerGreen, className: 'keyboard__str_dark2  keyboard__str_number'})


        let arr1 = this.shuffle(arr)
        let arr2 = this.shuffle(arr)
        arr2 = arr2.slice(0, 6)
       
        let arrSum = [...arr1, ...arr2] // ... распространяет все элементы из массива arr1 тоже самое с arr2
     
        for (let a of arrSum) {
            
            strGreen1.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item_green2 keyboard__item_symbol" data-number=${a.num}><div class = "keyboard__img_green">${a.symbol}</div></div>`)
        }

        strGreen2.insertAdjacentHTML('beforeEnd', '<div class="keyboard__item_green2 keyboard__item_empty keyboard__item_green_dark"><div class = "keyboard__img_green2"></div></div>'.repeat(15))
        strGreen3.insertAdjacentHTML('beforeEnd', '<div class="keyboard__item_green2 keyboard__item_green_dark keyboard__item_number"><div class = "keyboard__img_green2"></div></div>'.repeat(15))


   
    

        // черные клавиши

        this.keyboardInner3 = tag({tag: "div", parent: this.wrapper, className: 'keyboard__inner_black2'})
        
        for (let a of arrBlack) {
            this.keyboardInner3.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item_gray2 keyboard__item_gray_number" data-number='${a.num}'><div class = "keyboard__img12" >${a.num}</div></div>`)
        }
    }
    shuffle(arr) {
        
        arr = arr.slice()
        
        // при загрузке зеленой сткрои порядок элементов в arr меняется
        for (let i = arr.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }

        return arr
    }
    newStr(){
        // перемешали массив
        let arr1 = this.shuffle(arr)
        let arr2 = this.shuffle(arr)
        arr2 = arr2.slice(0, 6)
       
        let arrSum = [...arr1, ...arr2] // ... распространяет все элементы из массива arr1 тоже самое с arr2
        // удалить из зеленой таблицы прежние ячейки, заполнить новым содержимым
        let symbolStr = document.querySelector('.keyboard__str_light2')
        
        symbolStr.innerHTML = ""
        for (let a of arrSum) {
            
            symbolStr.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item_green2 keyboard__item_symbol" data-number=${a.num}><div class = "keyboard__img_green">${a.symbol}</div></div>`)
        }
        // надо очистить строку и сделать 30 пустых ячеек (в 2 ряда по 15)
        // let emptyStr = document.querySelectorAll(".keyboard__item_green_dark")

        // for (let a of emptyStr) {
        //     a.innerHTML =""
        //     a.style.background = ''
        // }
 
        let numberStr = document.querySelector('.keyboard__str_number')
        numberStr.innerHTML = ""
        numberStr.insertAdjacentHTML('beforeEnd', '<div class="keyboard__item_green2 keyboard__item_number keyboard__item_green_dark"><div class = "keyboard__img_green"></div></div>'.repeat(15))
        
    

        let emptyStr = document.querySelector('.keyboard__str_empty')
        emptyStr.innerHTML = ""                
        emptyStr.insertAdjacentHTML('beforeEnd', '<div class="keyboard__item_green2 keyboard__item_empty keyboard__item_green_dark"><div class = "keyboard__img_green"></div></div>'.repeat(15))
        
    }


    
    addListener() {
        this.keyboardInner3.addEventListener("click", (event) => {
            //при клике на любую цифру по черной клавиатуре,  (первую зеленую пустую ячейку), добавляем ей содержимое - число из dataset,)
            let emptyCell = document.querySelector(".keyboard__item_empty")

            let numberButton  = event.target.closest(".keyboard__item_gray_number")

             // если кликнули не накнопку, а на ободок клавиатуры
            if (numberButton === null) {
                return
            }

            emptyCell.innerHTML = numberButton.dataset.number
            //    убираем класс empty
            emptyCell.classList.remove('keyboard__item_empty')

            
            // цифру сопряженную с символом, находящимся в strGreen1 или symbolStr добавляем в 3 строку
            let numberCell = document.querySelector('.keyboard__item_number')
            let symbolCell = document.querySelector('.keyboard__item_symbol')
            console.log(symbolCell)
            numberCell.innerHTML = symbolCell.dataset.number

            numberCell.classList.remove('keyboard__item_number')
            symbolCell.classList.remove('keyboard__item_symbol')

            // сравнени если не правильно щелкнули, подсветка красным
            if(symbolCell.dataset.number != numberButton.dataset.number) {
                emptyCell.style.background = "red"
                
           

            }

            if(symbolCell.dataset.number == numberButton.dataset.number) {
                
                scoreTask4Plus()

            }

            if (!document.querySelector('.keyboard__item_empty')) {
                n++
                if(n <= 4) {
                    this.newStr()
                }   
                else  {
                   
                    this.result()
                }        
                
            }

                     
        })
    }
    result() {
         
        this.wrapper.innerHTML = `<div class="result">Задание 1 - ${scoreTask1Get()}  <br><br> Задание 2 - ${scoreTask2Get()}  <br><br> Задание 3 - ${scoreTask3Get()} <br><br> Задание 4 - ${scoreTask4Get()}  <br><br>  Суммарный балл - ${scoreTotalGet()} балла <br> Чтобы вернуться в основное меню, нажмите на стрелочку в левом верхнем углу экрана.</div>`
    }


}
let numberTask 
export const getNumberTask = () => {
    if(!numberTask) {
        numberTask = new NumberTask
    }
    return numberTask
}