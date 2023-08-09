// import {getLearnMap} from './2modul/1-2/1-2'
import {getFirstPage} from './firstPage/firstpage'
import {getTaskInstruction} from './1modul/modul1task1-instruction/1(inst)-1'
import{cleanAll} from './functions'
import{getTaskWords} from './1modul/modul1task1-0/1(0)-1'
import{getLearnWords} from './1modul/modul1task1/1-1'
import{getPrintWords} from './1modul/modul1task1-2/1(2)-1'
import{getCountDots} from './1modul/modul1task2/2-1'
import{getMinus} from './1modul/modul1task3/3-1'
import{getNumberMemorize} from './1modul/modul1task4/4(1)-1'
import{getNumberTask} from './1modul/modul1task4-2/4(2)-1'

import{getInstructionSecond} from './2modul/2-instruction/2-inst'
import{getLearnMap} from './2modul/modul2task1/1-2'
import{getMemorizeMap} from './2modul/modul2task2/2-2'
import{getMapShow} from './2modul/modul2task3/3-2'
import{getMatchHills} from './2modul/modul2task4/4-2'

import{getInstructionThird} from './3modul/3-instr/3-inst'
import{getArt} from './3modul/3-firstpage/3firstpage'
import{getAdam} from './3modul/Adam/adam'
import{getJoconda} from './3modul/Joconda/joconda'

// 1.подписываемся на событие, когда hash меняется
// запускается функция - в зависимости от хеш открывается нужная страница

window.addEventListener('hashchange', openPage)
openPage()
function openPage() {
    console.log(location)
    cleanAll()
    if (location.hash == '') {
        
        const firstPage = getFirstPage()
               
        firstPage.open()

       
    }
    else if (location.hash == '#/module-1/instruction') {
        console.log(location)
        const taskInstruction = getTaskInstruction()
        taskInstruction.open()
    }
    else if(location.hash == '#/module-1/task1-0') {
        const taskWords = getTaskWords()
        taskWords.open()
    }
    else if(location.hash == '#/module-1/task1-1') {
        const learnWords = getLearnWords()
        learnWords.open()
    }
    else if(location.hash == '#/module-1/task1(2)-1') {
        const printWords = getPrintWords()
        printWords.open()
    }
    else if(location.hash == '#/module-1/task2-1') {
        const countDots = getCountDots()
        countDots.open()
    }
    else if(location.hash == '#/module-1/task3-1') {
        const minus = getMinus()
        minus.open()
    }
    else if(location.hash == '#/module-1/task4(1)-1') {
        const numberMemorize = getNumberMemorize()
        numberMemorize.open()
    }
    else if(location.hash == '#/module-1/task4(2)-1') {
        const numberTask = getNumberTask()
        numberTask.open()
    }


    else if(location.hash == '#/module-2/instruction') {
        const instructionSecond = getInstructionSecond()
        instructionSecond.open()
    }
    else if(location.hash == '#/module-2/task1-2') {
        const learnMap = getLearnMap()
        learnMap.open()
    }
    else if(location.hash == '#/module-2/task2-2') {
        const memorizeMap = getMemorizeMap ()
        memorizeMap.open()
    }
    else if(location.hash == '#/module-2/task3-2') {
        const mapShow = getMapShow ()
        mapShow.open()
    }
    else if(location.hash == '#/module-2/task4-2') {
        const matchHills = getMatchHills ()
        matchHills.open()
    }

    else if(location.hash == '#/module-3/instruction') {
        const instructionThird = getInstructionThird()
        instructionThird.open()
    }
    else if(location.hash == '#/module-3/3firstpage') {
        const art = getArt()
        art.open()
    }
    else if(location.hash == '#/module-3/Joconda') {
        const joconda = getJoconda()
        joconda.open()
    }
    else if(location.hash == '#/module-3/Adam') {
        const adam = getAdam()
        adam.open()
    }
}