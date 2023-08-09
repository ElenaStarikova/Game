import{tag, pageFrame} from '../../functions'
import'./4(1)-1.css'

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
       
    },
    {
        num: 2,
        
    },
    {
        num: 3,
        
    },
    {
        num: 4,
        
    },
    {
        num: 5,
        
    },
    {
        num: 6,
        
    },
    {
        num: 7,
        
    },
    {
        num: 8,
       
    },
    {
        num: 9,
        
    }
]
class NumberMemorize {
    open(arr) {
        this.render();
        this.addListener();
    }
    render() {
        pageFrame()
        
        let page = document.querySelector('.page__content')

        this.wrapper = tag({tag: "div", parent: page, className: 'task4__wrapper1'})

        let text = tag({tag: "h2", parent: this.wrapper, className: 'task4__text1'})

        text.innerHTML = 'Задание 4. Вам необходимо рассмотреть голубую таблицу. Там каждому символу соответствует определённая цифра (эта таблица будет видна Вам на протяжении выполнения всего задания). После рассмотрения таблицы Вам предстоит работа в таблице ниже. Глядя на голубую таблицу, поочередно щелкайте мышкой на цифры, соответствующие указанным символам. Как только Вы закончите с постепенным заполнением серой таблицы, откроется большая зеленая таблица. Там предстоит задание на время (90 секунд).' 


        let keyboardInner = tag({tag: "div", parent: this.wrapper, className: 'keyboard__inner_big1'})

        let keyboardInner1 = tag({tag: "div", parent: keyboardInner, className: 'keyboard__inner1'})

        let keyboardInner2 = tag({tag: "div", parent: keyboardInner, className: 'keyboard__inner_darker1'})
         for (let a of arr) {
            keyboardInner1.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item1"><div class = "keyboard__img1">${a.symbol}</div></div>`)
        }

        for (let a of arr) {
            keyboardInner2.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item1"><div class = "keyboard__img1">${a.num}</div></div>`)
        }

      

        // серые кнопки

        let keyboardInnerGray = tag({tag: "div", parent: this.wrapper, className: 'keyboard__inner_gray1'})

        let strGray1 = tag({tag: "div", parent: keyboardInnerGray, className: 'keyboard__str_light1'})

        this.strGray2 = tag({tag: "div", parent: keyboardInnerGray, className: 'keyboard__str_dark1'})
      
        let arrGray = this.shuffle(arr)
        for (let b of arrGray) {
            strGray1.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item_gray1"><div class = "keyboard__img_gray1">${b.symbol}</div></div>`)
        }

        for (let b of arrGray) {
            this.strGray2.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item_graylight1 keyboard__item_empty" data-number="${b.num}"></div>`)
        }

        // черные кнопки
        this.keyboardInner3 = tag({tag: "div", parent: this.wrapper, className: 'keyboard__inner_black1'})
        
        for (let a of arrBlack) {
            this.keyboardInner3.insertAdjacentHTML('beforeEnd', `<div class="keyboard__item_gray11 keyboard__item_gray_number" data-number='${a.num}'><div class = "keyboard__img11">${a.num}</div></div>`)
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
    addListener() {
        this.keyboardInner3.addEventListener("click", function(event){
         

            //при клике на любую цифру,  (первую серую пустую ячейку), добавляем ей содержимое - число из dataset,)
            let emptyCell = document.querySelector(".keyboard__item_empty")
            let numberButton  = event.target.closest(".keyboard__item_gray_number")

             // если кликнули не накнопку, а на ободок клавиатуры
            if (numberButton === null) {
                return
            }

            emptyCell.innerHTML = numberButton.dataset.number
            console.log(numberButton.dataset.number, emptyCell.dataset.number)
            // сравнение правильно щелкнули, подсветка
            if(numberButton.dataset.number != emptyCell.dataset.number) {
                emptyCell.style.background = "red"
            }
            //    убираем класс empty
            emptyCell.classList.remove('keyboard__item_empty')

             

            // // переход на следующую страницу, если нет больше элементов с классом empty
            
            if (!document.querySelector('.keyboard__item_empty')) {
                this.wrapper = document.querySelector('.task4__wrapper1')
                let nextTask = tag({tag: "div", parent: this.wrapper, className: 'task41__nexttask'})
                nextTask.innerHTML = 'Внимание! Сейчас начнутся 90 секунд!'
                setTimeout(() => {
                    location.hash = '/module-1/task4(2)-1'
                }, 5000) 
                
            }
            
        })
    }

}
let numberMemorize
export const getNumberMemorize = () => {
    if(!numberMemorize) {
        numberMemorize = new NumberMemorize
    }
    return numberMemorize
}