import './main.css'

 export const tag = (params) => {
    let elem = document.createElement(params.tag)
    params.parent.append(elem)
    elem.className = params.className
    return elem
}
export const cleanAll = () => {
    document.body.innerHTML = ''
}
export const addButton  = (elem)  => {
    elem.insertAdjacentHTML('beforeEnd', '<button class="button__futher">Далее</button>')
}
export const scoreTask1Plus = () => {
    if(!localStorage.scoreTask1) {
        localStorage.scoreTask1 = 0
    }
    localStorage.scoreTask1++
    console.log('score1', localStorage.scoreTask1)
}
export const scoreTask2Plus = () => {
    if(!localStorage.scoreTask2) {
        localStorage.scoreTask2 = 0
    }
    localStorage.scoreTask2++
    console.log('score2', localStorage.scoreTask2)
}
export const scoreTask3Plus = () => {
    if(!localStorage.scoreTask3) {
        localStorage.scoreTask3 = 0
    }
    localStorage.scoreTask3++
    console.log('score3', localStorage.scoreTask3)
}
export const scoreTask4Plus = () => {
    if(!localStorage.scoreTask4) {
        localStorage.scoreTask4 = 0
    }
    localStorage.scoreTask4++
    console.log('score4', localStorage.scoreTask4)
}
export const scoreReset = () => {
    localStorage.scoreTask1 = 0
    localStorage.scoreTask2 = 0
    localStorage.scoreTask3 = 0
    localStorage.scoreTask4 = 0
}

export const scoreTask1Get = () => {
    return +localStorage.scoreTask1
}
export const scoreTask2Get = () => {
    return +localStorage.scoreTask2
}
export const scoreTask3Get = () => {
    return +localStorage.scoreTask3
}
export const scoreTask4Get = () => {
    return +localStorage.scoreTask4
}
export const scoreTotalGet = () => {
    return scoreTask1Get() + scoreTask2Get() + scoreTask3Get() + scoreTask4Get()
}
export const pageFrame = () => {
    if(!pageFrame.page) {

        let page = pageFrame.page = tag({tag: "div", parent: document.body, className: 'page'})
        // let page = tag({tag: "div", parent: document.body, className: 'page'})

        let arrowWrapper = tag({tag: "div", parent: page, className: 'page__arrowwrapper'})
        
        let arrowHolder = tag({tag: "div", parent: arrowWrapper, className: 'page__arrowholder'})

        let arrowPlace = tag({tag: "div", parent: arrowHolder, className: 'page__arrowplace'})

        arrowPlace.innerHTML =  '<svg width="25" height="23" viewBox="0 0 25 23" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M0.892273 10.9886C0.33369 11.6004 0.376815 12.5491 0.988597 13.1077L10.9582 22.2104C11.5699 22.7689 12.5187 22.7258 13.0773 22.114C13.6359 21.5023 13.5927 20.5535 12.981 19.9949L4.11913 11.9037L12.2104 3.04185C12.7689 2.43007 12.7258 1.4813 12.114 0.922718C11.5023 0.364134 10.5535 0.40726 9.99491 1.01904L0.892273 10.9886ZM23.9319 9.50155L1.93189 10.5015L2.06811 13.4985L24.0681 12.4985L23.9319 9.50155Z" fill="white"/> </svg> '

        arrowHolder.addEventListener('click', (event) => {
            location.hash = ''
        })
        let pageContent = tag({tag: "div", parent: page, className: 'page__content'})
    }
    document.body.append(pageFrame.page)
     let pageContent = document.querySelector('.page__content')
     pageContent.innerHTML = ''  
}
    
export function preloadImages(sources, callback) {
    // let counter = 0;

    // function onLoad() {
    //   counter++;
    //   if (counter == sources.length) callback();
    // }

    for(let source of sources) {
      let img = document.createElement('img');
    //   img.onload = img.onerror = onLoad;
      img.src = source;
    }
  }