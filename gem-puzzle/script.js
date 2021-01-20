"use strict";
const gemPuzzle = {
    currentTarget:null,
    emptyField:null,
    type:4,
    puzzleContent:null,
    counter:0,
    stopWatch: {
        min: 0,
        sec: 0,
    },
    reset:false,
    upload:false,
    savedOrder:[],
    sound:'off',
    standard:[]
}
    

function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; 
  }
function getGridColumns(type){
        switch(type){
            case 3:
                document.querySelector('.puzzle__content').children[0].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[3].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[6].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[1].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[4].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[7].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[2].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[5].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[8].style.gridColumn = '3 / 4'
                break;
            case 4:
                document.querySelector('.puzzle__content').children[0].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[4].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[8].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[12].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[1].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[5].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[9].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[13].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[2].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[6].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[10].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[14].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[3].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[7].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[11].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[15].style.gridColumn = '4 / 5'
                break;
            case 5:
                document.querySelector('.puzzle__content').children[0].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[5].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[10].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[15].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[20].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[1].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[6].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[11].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[16].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[21].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[2].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[7].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[12].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[17].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[22].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[3].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[8].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[13].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[18].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[23].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[4].style.gridColumn = '5 / 6'
                document.querySelector('.puzzle__content').children[9].style.gridColumn = '5 / 6'
                document.querySelector('.puzzle__content').children[14].style.gridColumn = '5 / 6'
                document.querySelector('.puzzle__content').children[19].style.gridColumn = '5 / 6'
                document.querySelector('.puzzle__content').children[24].style.gridColumn = '5 / 6'
                break;    
            case 6:
                document.querySelector('.puzzle__content').children[0].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[6].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[12].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[18].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[24].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[30].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[1].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[7].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[13].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[19].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[25].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[31].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[2].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[8].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[14].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[20].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[26].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[32].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[3].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[9].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[15].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[21].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[27].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[33].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[4].style.gridColumn = '5 / 6'
                document.querySelector('.puzzle__content').children[10].style.gridColumn = '5 / 6'
                document.querySelector('.puzzle__content').children[16].style.gridColumn = '5 / 6'
                document.querySelector('.puzzle__content').children[22].style.gridColumn = '5 / 6'
                document.querySelector('.puzzle__content').children[28].style.gridColumn = '5 / 6'
                document.querySelector('.puzzle__content').children[34].style.gridColumn = '5 / 6'
                document.querySelector('.puzzle__content').children[5].style.gridColumn = '6 / 7'
                document.querySelector('.puzzle__content').children[11].style.gridColumn = '6 / 7'
                document.querySelector('.puzzle__content').children[17].style.gridColumn = '6 / 7'
                document.querySelector('.puzzle__content').children[23].style.gridColumn = '6 / 7'
                document.querySelector('.puzzle__content').children[29].style.gridColumn = '6 / 7'
                document.querySelector('.puzzle__content').children[35].style.gridColumn = '6 / 7'
                break;
            case 7:
                document.querySelector('.puzzle__content').children[0].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[7].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[14].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[21].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[28].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[35].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[42].style.gridColumn = '1 / 2'
                document.querySelector('.puzzle__content').children[1].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[8].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[15].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[22].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[29].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[36].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[43].style.gridColumn = '2 / 3'
                document.querySelector('.puzzle__content').children[2].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[9].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[16].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[23].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[30].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[37].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[44].style.gridColumn = '3 / 4'
                document.querySelector('.puzzle__content').children[3].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[10].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[17].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[24].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[31].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[38].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[45].style.gridColumn = '4 / 5'
                document.querySelector('.puzzle__content').children[4].style.gridColumn = '5 / 6'
                document.querySelector('.puzzle__content').children[11].style.gridColumn = '5 / 6'
                document.querySelector('.puzzle__content').children[18].style.gridColumn = '5 / 6'
                document.querySelector('.puzzle__content').children[25].style.gridColumn = '5 / 6'
                document.querySelector('.puzzle__content').children[32].style.gridColumn = '5 / 6'
                document.querySelector('.puzzle__content').children[39].style.gridColumn = '5 / 6'
                document.querySelector('.puzzle__content').children[46].style.gridColumn = '5 / 6'
                document.querySelector('.puzzle__content').children[5].style.gridColumn = '6 / 7'
                document.querySelector('.puzzle__content').children[12].style.gridColumn = '6 / 7'
                document.querySelector('.puzzle__content').children[19].style.gridColumn = '6 / 7'
                document.querySelector('.puzzle__content').children[26].style.gridColumn = '6 / 7'
                document.querySelector('.puzzle__content').children[33].style.gridColumn = '6 / 7'
                document.querySelector('.puzzle__content').children[40].style.gridColumn = '6 / 7'
                document.querySelector('.puzzle__content').children[47].style.gridColumn = '6 / 7'
                document.querySelector('.puzzle__content').children[6].style.gridColumn = '7 / 8'
                document.querySelector('.puzzle__content').children[13].style.gridColumn = '7 / 8'
                document.querySelector('.puzzle__content').children[20].style.gridColumn = '7 / 8'
                document.querySelector('.puzzle__content').children[27].style.gridColumn = '7 / 8'
                document.querySelector('.puzzle__content').children[34].style.gridColumn = '7 / 8'
                document.querySelector('.puzzle__content').children[41].style.gridColumn = '7 / 8'
                document.querySelector('.puzzle__content').children[48].style.gridColumn = '7 / 8'
                break;
            case 8:
            document.querySelector('.puzzle__content').children[0].style.gridColumn = '1 / 2'
            document.querySelector('.puzzle__content').children[8].style.gridColumn = '1 / 2'
            document.querySelector('.puzzle__content').children[16].style.gridColumn = '1 / 2'
            document.querySelector('.puzzle__content').children[24].style.gridColumn = '1 / 2'
            document.querySelector('.puzzle__content').children[32].style.gridColumn = '1 / 2'
            document.querySelector('.puzzle__content').children[40].style.gridColumn = '1 / 2'
            document.querySelector('.puzzle__content').children[48].style.gridColumn = '1 / 2'
            document.querySelector('.puzzle__content').children[56].style.gridColumn = '1 / 2'
            document.querySelector('.puzzle__content').children[1].style.gridColumn = '2 / 3'
            document.querySelector('.puzzle__content').children[9].style.gridColumn = '2 / 3'
            document.querySelector('.puzzle__content').children[17].style.gridColumn = '2 / 3'
            document.querySelector('.puzzle__content').children[25].style.gridColumn = '2 / 3'
            document.querySelector('.puzzle__content').children[33].style.gridColumn = '2 / 3'
            document.querySelector('.puzzle__content').children[41].style.gridColumn = '2 / 3'
            document.querySelector('.puzzle__content').children[49].style.gridColumn = '2 / 3'
            document.querySelector('.puzzle__content').children[57].style.gridColumn = '2 / 3'
            document.querySelector('.puzzle__content').children[2].style.gridColumn = '3 / 4'
            document.querySelector('.puzzle__content').children[10].style.gridColumn = '3 / 4'
            document.querySelector('.puzzle__content').children[18].style.gridColumn = '3 / 4'
            document.querySelector('.puzzle__content').children[26].style.gridColumn = '3 / 4'
            document.querySelector('.puzzle__content').children[34].style.gridColumn = '3 / 4'
            document.querySelector('.puzzle__content').children[42].style.gridColumn = '3 / 4'
            document.querySelector('.puzzle__content').children[50].style.gridColumn = '3 / 4'
            document.querySelector('.puzzle__content').children[58].style.gridColumn = '3 / 4'
            document.querySelector('.puzzle__content').children[3].style.gridColumn = '4 / 5'
            document.querySelector('.puzzle__content').children[11].style.gridColumn = '4 / 5'
            document.querySelector('.puzzle__content').children[19].style.gridColumn = '4 / 5'
            document.querySelector('.puzzle__content').children[27].style.gridColumn = '4 / 5'
            document.querySelector('.puzzle__content').children[35].style.gridColumn = '4 / 5'
            document.querySelector('.puzzle__content').children[43].style.gridColumn = '4 / 5'
            document.querySelector('.puzzle__content').children[51].style.gridColumn = '4 / 5'
            document.querySelector('.puzzle__content').children[59].style.gridColumn = '4 / 5'
            document.querySelector('.puzzle__content').children[4].style.gridColumn = '5 / 6'
            document.querySelector('.puzzle__content').children[12].style.gridColumn = '5 / 6'
            document.querySelector('.puzzle__content').children[20].style.gridColumn = '5 / 6'
            document.querySelector('.puzzle__content').children[28].style.gridColumn = '5 / 6'
            document.querySelector('.puzzle__content').children[36].style.gridColumn = '5 / 6'
            document.querySelector('.puzzle__content').children[44].style.gridColumn = '5 / 6'
            document.querySelector('.puzzle__content').children[52].style.gridColumn = '5 / 6'
            document.querySelector('.puzzle__content').children[60].style.gridColumn = '5 / 6'
            document.querySelector('.puzzle__content').children[5].style.gridColumn = '6 / 7'
            document.querySelector('.puzzle__content').children[13].style.gridColumn = '6 / 7'
            document.querySelector('.puzzle__content').children[21].style.gridColumn = '6 / 7'
            document.querySelector('.puzzle__content').children[29].style.gridColumn = '6 / 7'
            document.querySelector('.puzzle__content').children[37].style.gridColumn = '6 / 7'
            document.querySelector('.puzzle__content').children[45].style.gridColumn = '6 / 7'
            document.querySelector('.puzzle__content').children[53].style.gridColumn = '6 / 7'
            document.querySelector('.puzzle__content').children[61].style.gridColumn = '6 / 7'
            document.querySelector('.puzzle__content').children[6].style.gridColumn = '7 / 8'
            document.querySelector('.puzzle__content').children[14].style.gridColumn = '7 / 8'
            document.querySelector('.puzzle__content').children[22].style.gridColumn = '7 / 8'
            document.querySelector('.puzzle__content').children[30].style.gridColumn = '7 / 8'
            document.querySelector('.puzzle__content').children[38].style.gridColumn = '7 / 8'
            document.querySelector('.puzzle__content').children[46].style.gridColumn = '7 / 8'
            document.querySelector('.puzzle__content').children[54].style.gridColumn = '7 / 8'
            document.querySelector('.puzzle__content').children[62].style.gridColumn = '7 / 8'
            document.querySelector('.puzzle__content').children[7].style.gridColumn = '8 / 9'
            document.querySelector('.puzzle__content').children[15].style.gridColumn = '8 / 9'
            document.querySelector('.puzzle__content').children[23].style.gridColumn = '8 / 9'
            document.querySelector('.puzzle__content').children[31].style.gridColumn = '8 / 9'
            document.querySelector('.puzzle__content').children[39].style.gridColumn = '8 / 9'
            document.querySelector('.puzzle__content').children[47].style.gridColumn = '8 / 9'
            document.querySelector('.puzzle__content').children[55].style.gridColumn = '8 / 9'
            document.querySelector('.puzzle__content').children[63].style.gridColumn = '8 / 9'
            default: 
                return;

        }
}
function insertEmpty(parentNode){
        let empty = document.createElement('button');
        empty.classList.add('num__field');
        empty.classList.add('empty');
        empty.textContent = 'empty'
        let numberItem = getRandomInt(1,Math.pow(gemPuzzle.type,2));
        parentNode.insertBefore(empty,parentNode.children[numberItem]);
    
}

function startPuzzle(){
            
            let wrapper = document.createElement('div');
            let puzzleField = document.createElement('div');
            let operationButtons = document.createElement('div');
            let changeButtons = document.createElement('div')
            let chooseHeading = document.createElement('h3');
            let buttonThree = document.createElement('a');
            let buttonFour = document.createElement('a')
            let buttonFive = document.createElement('a')
            let buttonSix = document.createElement('a')
            let buttonSeven = document.createElement('a')
            let buttonEight = document.createElement('a')
            let resetButton = document.createElement('a')
            let saveGameButton = document.createElement('a');
            let uploadGameButton = document.createElement('a');
            let soundButton = document.createElement('a');
            // let autoMoveButton = document.createElement('a');
            let getTopResultsButton = document.createElement('a')    
            let showDigitsButton= document.createElement('a')    
            let counter = document.createElement('div');
            
            
            changeButtons.classList.add('change__buttons')
            operationButtons.classList.add('operation__buttons')
            buttonThree.classList.add('button__three');
            buttonFour.classList.add('button__four');
            buttonFive.classList.add('button__five');
            buttonSix.classList.add('button__six');
            buttonSeven.classList.add('button__seven');
            buttonEight.classList.add('button__eight');
            resetButton.classList.add('reset__button');
            saveGameButton.classList.add('save__game__button');
            uploadGameButton.classList.add('upload__game__button');
            soundButton.classList.add('sound__button');
            showDigitsButton.classList.add('show__digits__button')
            // autoMoveButton.classList.add('auto__move__button')
            getTopResultsButton.classList.add('get__top__results__button')
            counter.classList.add('counter')
            chooseHeading.classList.add('choose__heading')
            buttonThree.textContent = '3 x 3'
            buttonFour.textContent = '4 x 4'
            buttonFive.textContent = '5 x 5'
            buttonSix.textContent = '6 x 6'
            buttonSeven.textContent = '7 x 7'
            buttonEight.textContent = '8 x 8'
            resetButton.textContent = 'Reset game';
            saveGameButton.textContent = 'Save game'
            uploadGameButton.textContent = 'Upload saved game'
            soundButton.textContent = `Sound ${gemPuzzle.sound}`
            // autoMoveButton.textContent = 'Automatic finish'
            getTopResultsButton.textContent = "Best results"
            showDigitsButton.innerText = "Show digits"
            counter.innerText = `Step: ${gemPuzzle.counter}`
            chooseHeading.innerText = `Choose scheme of puzzle`
            changeButtons.appendChild(buttonThree)
            changeButtons.appendChild(buttonFour)
            changeButtons.appendChild(buttonFive)
            changeButtons.appendChild(buttonSix)
            changeButtons.appendChild(buttonSeven)
            changeButtons.appendChild(buttonEight)
            operationButtons.appendChild(resetButton)
            operationButtons.appendChild(saveGameButton)
            operationButtons.appendChild(uploadGameButton)
            operationButtons.appendChild(soundButton)
            // operationButtons.appendChild(autoMoveButton)
            operationButtons.appendChild(getTopResultsButton)
            operationButtons.appendChild(showDigitsButton)
            
            let order = [];
            let nuOrder = []
            wrapper.classList.add('wrapper');
            puzzleField.classList.add('puzzle__content');
            
            if(gemPuzzle.puzzleContent == null){
                if(gemPuzzle.upload == true){
                    order = gemPuzzle.savedOrder
                }
                else{
                    while(order.length !== Math.pow(gemPuzzle.type,2) - 1){
                    let item = getRandomInt(1,Math.pow(gemPuzzle.type,2))
                    if(!order.includes(item)) order.push(item)
                    }
                }
                
                order.forEach((item) => {
                    let numField = document.createElement('button');
                    numField.setAttribute('type','button');
                    numField.classList.add('num__field');
                    numField.setAttribute('data-key', 'sound')
                    numField.textContent = item;
                    if(item !== 'empty'){
                        numField.style.background = `url('assets/images/${gemPuzzle.type}x${gemPuzzle.type}/image_part_${item}.png') center / cover no-repeat`
                        numField.draggable = true;
                    }
                    if(item == 'empty')numField.classList.add('empty');
                    puzzleField.appendChild(numField);

                })
                gemPuzzle.standard = order.sort( (a, b) => a - b );
                if(gemPuzzle.upload !== true)gemPuzzle.standard.push('empty');
                
                if(gemPuzzle.upload == false)insertEmpty(puzzleField)
                
                
            } else {
                
                document.body.removeChild(document.querySelector('.wrapper'))
                gemPuzzle.puzzleContent.childNodes.forEach(child => {
                    child.textContent !== 'empty' ? nuOrder.push(parseInt(child.textContent)) : nuOrder.push(child.textContent)
                })     
                nuOrder.forEach((item) => {
                    let numField = document.createElement('button');
                    numField.setAttribute('type','button');
                    numField.classList.add('num__field');
                    numField.setAttribute('data-key', 'sound')
                    numField.textContent = item
                    if(item !== 'empty'){
                        numField.style.background = `url('assets/images/${gemPuzzle.type}x${gemPuzzle.type}/image_part_${item}.png') center / cover no-repeat`
                        numField.draggable = true;
                    }
                    if(item == 'empty')numField.classList.add('empty');
                    puzzleField.appendChild(numField);
                })
                if (nuOrder.toString() == gemPuzzle.standard.toString()){
                    localStorage.setItem('savedMinutes', gemPuzzle.stopWatch.min)
                    localStorage.setItem('savedSeconds', gemPuzzle.stopWatch.sec)
                    localStorage.setItem('savedSteps', gemPuzzle.counter)
                    alert(`«Ура! Вы решили головоломку за ${parseInt(localStorage.getItem('savedMinutes'))} мин. : ${parseInt(localStorage.getItem('savedSeconds'))} сек. и ${parseInt(localStorage.getItem('savedSteps'))} ходов» `)
                    if(document.querySelector('tbody').lastChild.firstChild.textContent == "№"){
                        let tableRow = document.createElement('tr')
                        let numCell = document.createElement('td')
                        let gameTimeCell = document.createElement('td')
                        let stepsCell = document.createElement('td')
                        numCell.textContent = '1';
                        gameTimeCell.textContent = `${localStorage.getItem('savedMinutes')}:${localStorage.getItem('savedSeconds')}`
                        stepsCell.textContent = `${localStorage.getItem('savedSteps')}`
                        tableRow.appendChild(numCell)
                        tableRow.appendChild(gameTimeCell)
                        tableRow.appendChild(stepsCell)
                        document.querySelector('tbody').appendChild(tableRow);
                        let res = []
                        res.push(gameTimeCell.textContent)
                        res.push(stepsCell.textContent)
                        localStorage.setItem(numCell.textContent, res)
                        
                    } else {
                        let tableRow = document.createElement('tr')
                        let numCell = document.createElement('td')
                        let gameTimeCell = document.createElement('td')
                        let stepsCell = document.createElement('td')
                        numCell.textContent = parseInt(document.querySelector('tbody').lastChild.firstChild.textContent) + 1
                        gameTimeCell.textContent = `${localStorage.getItem('savedMinutes')}:${localStorage.getItem('savedSeconds')}`
                        stepsCell.textContent = `${localStorage.getItem('savedSteps')}`
                        tableRow.appendChild(numCell)
                        tableRow.appendChild(gameTimeCell)
                        tableRow.appendChild(stepsCell)
                        document.querySelector('tbody').appendChild(tableRow);
                        let res = []
                        res.push(gameTimeCell.textContent)
                        res.push(stepsCell.textContent)
                        localStorage.setItem(numCell.textContent, res)
                    }
                    

                }
               
                
            }

            let audio = document.createElement('audio');
            audio.classList.add('audio')
            audio.src = 'sounds/game.mp3'
            audio.setAttribute('data-key', 'sound')
            wrapper.appendChild(audio);
            wrapper.appendChild(counter)
            wrapper.appendChild(puzzleField)
            wrapper.appendChild(chooseHeading)
            wrapper.appendChild(changeButtons)
            wrapper.appendChild(operationButtons)
            document.body.appendChild(wrapper)
            puzzleField.childNodes.forEach((item,i) => {
                item.setAttribute('id',`_${i}`)
                item.style.gridRowStart =  Math.ceil((i+1)/gemPuzzle.type)
                

            
            })
            switch(gemPuzzle.type){
                case 3:
                    puzzleField.classList.add('puzzle__three')
                    break;
                case 4:
                    puzzleField.classList.add('puzzle__four')
                    break; 
                case 5:
                    puzzleField.classList.add('puzzle__five')
                    break; 
                case 6:
                    puzzleField.classList.add('puzzle__six')
                    break;
                case 7:
                    puzzleField.classList.add('puzzle__seven')
                    break; 
                case 8:
                    puzzleField.classList.add('puzzle__eight')
                    break; 
                default:
                    return;
             }
            
          
            getGridColumns(gemPuzzle.type);
            resetPuzzle();
            changeType();
            saveGame();
            uploadGame();
            controlSound();
            showDigitButton()
            
            
            
    
}
function changePlace(){
        if(gemPuzzle.counter > 0 && gemPuzzle.sound == 'off') document.querySelector('.audio').play(); 
        gemPuzzle.counter += 1
        buttons = document.getElementsByClassName('num__field');
        for(let i = 0;i < buttons.length; i++){
            buttons[i].addEventListener('click', (e) => {
           
           
            gemPuzzle.reset = false;    
            if(gemPuzzle.stopWatch.sec == 0 && gemPuzzle.counter == 1 || gemPuzzle.upload == true){
                stopWatchCounter()  
                gemPuzzle.upload = false;
            }   
             
            
               
                if(e.target.style.gridRowStart !== gemPuzzle.type + "" && e.target.style.gridRowStart !== "1" ){
                    if(e.target.parentNode.children[i + gemPuzzle.type].textContent == 'empty' ){
                                
                                gemPuzzle.currentTarget = e.target; 
                                gemPuzzle.emptyField =  e.target.parentNode.children[i + gemPuzzle.type];
                                document.querySelector('.puzzle__content').insertBefore(gemPuzzle.currentTarget,gemPuzzle.emptyField )
                                gemPuzzle.currentTarget.style.gridRowStart = parseInt(gemPuzzle.currentTarget.style.gridRowStart) + 1;
                                document.querySelector('.puzzle__content').removeChild(gemPuzzle.emptyField)
                                document.querySelector('.puzzle__content').insertBefore(gemPuzzle.emptyField,document.querySelector('.puzzle__content').children[i] )
                                gemPuzzle.emptyField.style.gridRowStart -=1;
                                gemPuzzle.puzzleContent = document.querySelector('.puzzle__content')
                                startPuzzle();
                                changePlace();
                                
                             
                            }
                    if(e.target.parentNode.children[i - gemPuzzle.type].textContent == 'empty' ){
                               

                                gemPuzzle.currentTarget = e.target; 
                                gemPuzzle.emptyField =  e.target.parentNode.children[i - gemPuzzle.type];
                                document.querySelector('.puzzle__content').insertBefore(gemPuzzle.currentTarget,gemPuzzle.emptyField)
                                gemPuzzle.currentTarget.style.gridRowStart = parseInt(gemPuzzle.currentTarget.style.gridRowStart) - 1
                                document.querySelector('.puzzle__content').removeChild(gemPuzzle.emptyField)
                                document.querySelector('.puzzle__content').insertBefore(gemPuzzle.emptyField,document.querySelector('.puzzle__content').children[i])
                                gemPuzzle.emptyField.style.gridRowStart = parseInt(gemPuzzle.emptyField.style.gridRowStart) + 1
                                gemPuzzle.puzzleContent = document.querySelector('.puzzle__content')
                                startPuzzle();
                                changePlace();
                               
                            }   
                            if(e.target.nextSibling && e.target.nextSibling.style.gridRowStart === e.target.style.gridRowStart){
                                if (e.target.nextSibling.textContent == 'empty'){
                                    
                                    gemPuzzle.currentTarget = e.target; 
                                    gemPuzzle.emptyField =  e.target.nextSibling;
                                    document.querySelector('.puzzle__content').insertBefore(gemPuzzle.emptyField,gemPuzzle.currentTarget);
                                    gemPuzzle.emptyField.style.gridColumnStart -= 1;
                                    gemPuzzle.emptyField.style.gridColumnEnd -= 1;
                                    gemPuzzle.currentTarget.style.gridColumnStart = parseInt(gemPuzzle.currentTarget.style.gridColumnStart) + 1
                                    gemPuzzle.currentTarget.style.gridColumnEnd= parseInt(gemPuzzle.currentTarget.style.gridColumnEnd) + 1
                                    gemPuzzle.puzzleContent = document.querySelector('.puzzle__content')
                                    startPuzzle();
                                    changePlace();
                                 
                                 
                                    
                                }
                                
                            }
                            if(e.target.previousSibling && e.target.previousSibling.style.gridRowStart === e.target.style.gridRowStart){
                                if (e.target.previousSibling.textContent == 'empty' ){
                                    
                                    gemPuzzle.currentTarget = e.target; 
                                    gemPuzzle.emptyField =  e.target.previousSibling;
                                    document.querySelector('.puzzle__content').insertBefore(gemPuzzle.currentTarget,gemPuzzle.emptyField);
                                    gemPuzzle.currentTarget.style.gridColumnStart -= 1
                                    gemPuzzle.currentTarget.style.gridColumnEnd -= 1
                                    gemPuzzle.emptyField.style.gridColumnStart = parseInt(gemPuzzle.currentTarget.style.gridColumnStart) + 1
                                    gemPuzzle.emptyField.style.gridColumnEnd = parseInt(gemPuzzle.currentTarget.style.gridColumnEnd) + 1
                                    gemPuzzle.puzzleContent = document.querySelector('.puzzle__content')
                                    startPuzzle();
                                    changePlace();

                                }
                                
                            }
                                 
                    
                }
                else{
                    if(e.target.style.gridRowStart === gemPuzzle.type + "" || e.target.style.gridRowStart === "1"){
                        if(e.target.nextSibling  && e.target.nextSibling.style.gridRowStart === e.target.style.gridRowStart){
                            if (e.target.nextSibling.textContent == 'empty'){
                              
                                gemPuzzle.currentTarget = e.target; 
                                gemPuzzle.emptyField =  e.target.nextSibling;
                                document.querySelector('.puzzle__content').insertBefore(gemPuzzle.emptyField,gemPuzzle.currentTarget);
                                gemPuzzle.emptyField.style.gridColumnStart -= 1;
                                gemPuzzle.emptyField.style.gridColumnEnd -= 1;
                                gemPuzzle.currentTarget.style.gridColumnStart = parseInt(gemPuzzle.currentTarget.style.gridColumnStart) + 1
                                gemPuzzle.currentTarget.style.gridColumnEnd= parseInt(gemPuzzle.currentTarget.style.gridColumnEnd) + 1
                                gemPuzzle.puzzleContent = document.querySelector('.puzzle__content')
                                startPuzzle();
                                changePlace();
                               
                            }
                            
                        }
                        if(e.target.previousSibling  && e.target.previousSibling.style.gridRowStart === e.target.style.gridRowStart){
                            if (e.target.previousSibling.textContent == 'empty'){
                            
                                    gemPuzzle.currentTarget = e.target; 
                                    gemPuzzle.emptyField =  e.target.previousSibling;
                                    document.querySelector('.puzzle__content').insertBefore(gemPuzzle.currentTarget,gemPuzzle.emptyField);
                                    gemPuzzle.currentTarget.style.gridColumnStart -= 1
                                    gemPuzzle.currentTarget.style.gridColumnEnd -= 1
                                    gemPuzzle.emptyField.style.gridColumnStart = parseInt(gemPuzzle.currentTarget.style.gridColumnStart) + 1
                                    gemPuzzle.emptyField.style.gridColumnEnd = parseInt(gemPuzzle.currentTarget.style.gridColumnEnd) + 1
                                    gemPuzzle.puzzleContent = document.querySelector('.puzzle__content')
                                    startPuzzle();
                                    changePlace();
                                
                            }
                            
                        }
                        if(e.target.style.gridRowStart === gemPuzzle.type + "" && e.target.parentNode.children[i - gemPuzzle.type].textContent == 'empty' ){
                            gemPuzzle.currentTarget = e.target; 
                                gemPuzzle.emptyField =  e.target.parentNode.children[i - gemPuzzle.type];
                                document.querySelector('.puzzle__content').insertBefore(gemPuzzle.currentTarget,gemPuzzle.emptyField)
                                gemPuzzle.currentTarget.style.gridRowStart = parseInt(gemPuzzle.currentTarget.style.gridRowStart) - 1
                                document.querySelector('.puzzle__content').removeChild(gemPuzzle.emptyField)
                                document.querySelector('.puzzle__content').insertBefore(gemPuzzle.emptyField,document.querySelector('.puzzle__content').children[i])
                                gemPuzzle.emptyField.style.gridRowStart = parseInt(gemPuzzle.emptyField.style.gridRowStart) + 1
                                gemPuzzle.puzzleContent = document.querySelector('.puzzle__content')
                                startPuzzle();
                                changePlace();
                            

                       } 
                       if(e.target.style.gridRowStart === "1" && e.target.parentNode.children[i + gemPuzzle.type].textContent == 'empty' ){
                            gemPuzzle.currentTarget = e.target; 
                            gemPuzzle.emptyField =  e.target.parentNode.children[i + gemPuzzle.type];
                            document.querySelector('.puzzle__content').insertBefore(gemPuzzle.currentTarget,gemPuzzle.emptyField )
                            gemPuzzle.currentTarget.style.gridRowStart = parseInt(gemPuzzle.currentTarget.style.gridRowStart) + 1;
                            document.querySelector('.puzzle__content').removeChild(gemPuzzle.emptyField)
                            document.querySelector('.puzzle__content').insertBefore(gemPuzzle.emptyField,document.querySelector('.puzzle__content').children[i] )
                            gemPuzzle.emptyField.style.gridRowStart -=1;
                            gemPuzzle.puzzleContent = document.querySelector('.puzzle__content')
                            startPuzzle();
                            changePlace();
                            
                        } 
                       
                       
                    }
                    
                }
                  
            })
            getResultWindow();
        }
        for(let i = 0;i < buttons.length; i++){
            buttons[i].addEventListener('dragend', (e) => {
           
           
            gemPuzzle.reset = false;    
            if(gemPuzzle.stopWatch.sec == 0 && gemPuzzle.counter == 1 || gemPuzzle.upload == true){
                stopWatchCounter()  
                gemPuzzle.upload = false;
            }   
             
            
               
                if(e.target.style.gridRowStart !== gemPuzzle.type + "" && e.target.style.gridRowStart !== "1" ){
                    if(e.target.parentNode.children[i + gemPuzzle.type].textContent == 'empty' ){
                                
                        gemPuzzle.currentTarget = e.target; 
                        gemPuzzle.emptyField =  e.target.parentNode.children[i + gemPuzzle.type];
                        document.querySelector('.puzzle__content').insertBefore(gemPuzzle.currentTarget,gemPuzzle.emptyField )
                        gemPuzzle.currentTarget.style.gridRowStart = parseInt(gemPuzzle.currentTarget.style.gridRowStart) + 1;
                        document.querySelector('.puzzle__content').removeChild(gemPuzzle.emptyField)
                        document.querySelector('.puzzle__content').insertBefore(gemPuzzle.emptyField,document.querySelector('.puzzle__content').children[i] )
                        gemPuzzle.emptyField.style.gridRowStart -=1;
                        gemPuzzle.puzzleContent = document.querySelector('.puzzle__content')
                        startPuzzle();
                        changePlace();
                                
                             
                            }
                    if(e.target.parentNode.children[i - gemPuzzle.type].textContent == 'empty' ){
                               
                        gemPuzzle.currentTarget = e.target; 
                        gemPuzzle.emptyField =  e.target.parentNode.children[i - gemPuzzle.type];
                        document.querySelector('.puzzle__content').insertBefore(gemPuzzle.currentTarget,gemPuzzle.emptyField)
                        gemPuzzle.currentTarget.style.gridRowStart = parseInt(gemPuzzle.currentTarget.style.gridRowStart) - 1
                        document.querySelector('.puzzle__content').removeChild(gemPuzzle.emptyField)
                        document.querySelector('.puzzle__content').insertBefore(gemPuzzle.emptyField,document.querySelector('.puzzle__content').children[i])
                        gemPuzzle.emptyField.style.gridRowStart = parseInt(gemPuzzle.emptyField.style.gridRowStart) + 1
                        gemPuzzle.puzzleContent = document.querySelector('.puzzle__content')
                        startPuzzle();
                        changePlace();
                               
                            }   
                            if(e.target.nextSibling && e.target.nextSibling.style.gridRowStart === e.target.style.gridRowStart){
                                if (e.target.nextSibling.textContent == 'empty'){
                                    
                                    gemPuzzle.currentTarget = e.target; 
                                    gemPuzzle.emptyField =  e.target.nextSibling;
                                    document.querySelector('.puzzle__content').insertBefore(gemPuzzle.emptyField,gemPuzzle.currentTarget);
                                    gemPuzzle.emptyField.style.gridColumnStart -= 1;
                                    gemPuzzle.emptyField.style.gridColumnEnd -= 1;
                                    gemPuzzle.currentTarget.style.gridColumnStart = parseInt(gemPuzzle.currentTarget.style.gridColumnStart) + 1
                                    gemPuzzle.currentTarget.style.gridColumnEnd= parseInt(gemPuzzle.currentTarget.style.gridColumnEnd) + 1
                                    gemPuzzle.puzzleContent = document.querySelector('.puzzle__content')
                                    startPuzzle();
                                    changePlace();
                                 
                                 
                                    
                                }
                                
                            }
                            if(e.target.previousSibling && e.target.previousSibling.style.gridRowStart === e.target.style.gridRowStart){
                                if (e.target.previousSibling.textContent == 'empty' ){
                                    
                                    gemPuzzle.currentTarget = e.target; 
                                    gemPuzzle.emptyField =  e.target.previousSibling;
                                    document.querySelector('.puzzle__content').insertBefore(gemPuzzle.currentTarget,gemPuzzle.emptyField);
                                    gemPuzzle.currentTarget.style.gridColumnStart -= 1
                                    gemPuzzle.currentTarget.style.gridColumnEnd -= 1
                                    gemPuzzle.emptyField.style.gridColumnStart = parseInt(gemPuzzle.currentTarget.style.gridColumnStart) + 1
                                    gemPuzzle.emptyField.style.gridColumnEnd = parseInt(gemPuzzle.currentTarget.style.gridColumnEnd) + 1
                                    gemPuzzle.puzzleContent = document.querySelector('.puzzle__content')
                                    startPuzzle();
                                    changePlace();

                                }
                                
                            }
                                 
                    
                }
                else{
                    if(e.target.style.gridRowStart === gemPuzzle.type + "" || e.target.style.gridRowStart === "1"){
                        if(e.target.nextSibling  && e.target.nextSibling.style.gridRowStart === e.target.style.gridRowStart){
                            if (e.target.nextSibling.textContent == 'empty'){
                              
                                gemPuzzle.currentTarget = e.target; 
                                gemPuzzle.emptyField =  e.target.nextSibling;
                                document.querySelector('.puzzle__content').insertBefore(gemPuzzle.emptyField,gemPuzzle.currentTarget);
                                gemPuzzle.emptyField.style.gridColumnStart -= 1;
                                gemPuzzle.emptyField.style.gridColumnEnd -= 1;
                                gemPuzzle.currentTarget.style.gridColumnStart = parseInt(gemPuzzle.currentTarget.style.gridColumnStart) + 1
                                gemPuzzle.currentTarget.style.gridColumnEnd= parseInt(gemPuzzle.currentTarget.style.gridColumnEnd) + 1
                                gemPuzzle.puzzleContent = document.querySelector('.puzzle__content')
                                startPuzzle();
                                changePlace();
                               
                            }
                            
                        }
                        if(e.target.previousSibling  && e.target.previousSibling.style.gridRowStart === e.target.style.gridRowStart){
                            if (e.target.previousSibling.textContent == 'empty'){
                            
                                    gemPuzzle.currentTarget = e.target; 
                                    gemPuzzle.emptyField =  e.target.previousSibling;
                                    document.querySelector('.puzzle__content').insertBefore(gemPuzzle.currentTarget,gemPuzzle.emptyField);
                                    gemPuzzle.currentTarget.style.gridColumnStart -= 1
                                    gemPuzzle.currentTarget.style.gridColumnEnd -= 1
                                    gemPuzzle.emptyField.style.gridColumnStart = parseInt(gemPuzzle.currentTarget.style.gridColumnStart) + 1
                                    gemPuzzle.emptyField.style.gridColumnEnd = parseInt(gemPuzzle.currentTarget.style.gridColumnEnd) + 1
                                    gemPuzzle.puzzleContent = document.querySelector('.puzzle__content')
                                    startPuzzle();
                                    changePlace();
                                
                            }
                            
                        }
                        if(e.target.style.gridRowStart === gemPuzzle.type + "" && e.target.parentNode.children[i - gemPuzzle.type].textContent == 'empty' ){
                            gemPuzzle.currentTarget = e.target; 
                            gemPuzzle.emptyField =  e.target.parentNode.children[i - gemPuzzle.type];
                            document.querySelector('.puzzle__content').insertBefore(gemPuzzle.currentTarget,gemPuzzle.emptyField)
                            gemPuzzle.currentTarget.style.gridRowStart = parseInt(gemPuzzle.currentTarget.style.gridRowStart) - 1
                            document.querySelector('.puzzle__content').removeChild(gemPuzzle.emptyField)
                            document.querySelector('.puzzle__content').insertBefore(gemPuzzle.emptyField,document.querySelector('.puzzle__content').children[i])
                            gemPuzzle.emptyField.style.gridRowStart = parseInt(gemPuzzle.emptyField.style.gridRowStart) + 1
                            gemPuzzle.puzzleContent = document.querySelector('.puzzle__content')
                            startPuzzle();
                            changePlace();
                            

                       } 
                       if(e.target.style.gridRowStart === "1" && e.target.parentNode.children[i + gemPuzzle.type].textContent == 'empty' ){
                            gemPuzzle.currentTarget = e.target; 
                            gemPuzzle.emptyField =  e.target.parentNode.children[i + gemPuzzle.type];
                            document.querySelector('.puzzle__content').insertBefore(gemPuzzle.currentTarget,gemPuzzle.emptyField )
                            gemPuzzle.currentTarget.style.gridRowStart = parseInt(gemPuzzle.currentTarget.style.gridRowStart) + 1;
                            document.querySelector('.puzzle__content').removeChild(gemPuzzle.emptyField)
                            document.querySelector('.puzzle__content').insertBefore(gemPuzzle.emptyField,document.querySelector('.puzzle__content').children[i] )
                            gemPuzzle.emptyField.style.gridRowStart -=1;
                            gemPuzzle.puzzleContent = document.querySelector('.puzzle__content')
                            startPuzzle();
                            changePlace();
                            
                        } 
                       
                       
                    }
                    
                }
                  
            })
        }
        for(let i = 0;i < buttons.length; i++){
            buttons[i].addEventListener('dragstart', (e) => {
             
                if(e.target.style.gridRowStart !== gemPuzzle.type + "" && e.target.style.gridRowStart !== "1" ){
                    if(e.target.parentNode.children[i + gemPuzzle.type].textContent == 'empty' ){
                                gemPuzzle.currentTarget = e.target; 
                                gemPuzzle.emptyField =  e.target.parentNode.children[i + gemPuzzle.type];
                                setTimeout(() => {
                                    gemPuzzle.currentTarget.style.display = 'none'
                                },0)
                            }
                    if(e.target.parentNode.children[i - gemPuzzle.type].textContent == 'empty' ){
                                gemPuzzle.currentTarget = e.target; 
                                gemPuzzle.emptyField =  e.target.parentNode.children[i - gemPuzzle.type];
                                setTimeout(() => {
                                    gemPuzzle.currentTarget.style.display = 'none'
                                },0)
                            }   
                            if(e.target.nextSibling && e.target.nextSibling.style.gridRowStart === e.target.style.gridRowStart){
                                if (e.target.nextSibling.textContent == 'empty'){
                                    
                                    gemPuzzle.currentTarget = e.target; 
                                    gemPuzzle.emptyField =  e.target.nextSibling;
                                    setTimeout(() => {
                                        gemPuzzle.currentTarget.style.display = 'none'
                                    },0)
                                 
                                }    
                            }
                            if(e.target.previousSibling && e.target.previousSibling.style.gridRowStart === e.target.style.gridRowStart){
                                if (e.target.previousSibling.textContent == 'empty' ){
                                    
                                    gemPuzzle.currentTarget = e.target; 
                                    gemPuzzle.emptyField =  e.target.previousSibling;
                                    setTimeout(() => {
                                        gemPuzzle.currentTarget.style.display = 'none'
                                    },0)
                                }
                            }
                }
                else{
                    if(e.target.style.gridRowStart === gemPuzzle.type + "" || e.target.style.gridRowStart === "1"){
                        if(e.target.nextSibling  && e.target.nextSibling.style.gridRowStart === e.target.style.gridRowStart){
                            if (e.target.nextSibling.textContent == 'empty'){
                              
                                gemPuzzle.currentTarget = e.target; 
                                gemPuzzle.emptyField =  e.target.nextSibling;
                                setTimeout(() => {
                                    gemPuzzle.currentTarget.style.display = 'none'
                                },0)
                            }
                            
                        }
                        if(e.target.previousSibling  && e.target.previousSibling.style.gridRowStart === e.target.style.gridRowStart){
                            if (e.target.previousSibling.textContent == 'empty'){
                            
                                    gemPuzzle.currentTarget = e.target; 
                                    gemPuzzle.emptyField =  e.target.previousSibling;
                                    setTimeout(() => {
                                        gemPuzzle.currentTarget.style.display = 'none'
                                    },0)
                            }
                            
                        }
                        if(e.target.style.gridRowStart === gemPuzzle.type + "" && e.target.parentNode.children[i - gemPuzzle.type].textContent == 'empty' ){
                            gemPuzzle.currentTarget = e.target; 
                            gemPuzzle.emptyField =  e.target.parentNode.children[i - gemPuzzle.type];
                            setTimeout(() => {
                                gemPuzzle.currentTarget.style.display = 'none'
                            },0)
                       } 
                       if(e.target.style.gridRowStart === "1" && e.target.parentNode.children[i + gemPuzzle.type].textContent == 'empty' ){
                            gemPuzzle.currentTarget = e.target; 
                            gemPuzzle.emptyField =  e.target.parentNode.children[i + gemPuzzle.type];
                            setTimeout(() => {
                                gemPuzzle.currentTarget.style.display = 'none'
                            },0)
                        } 
                    }
                }  
            })

        }
        
}
function resetPuzzle(){
    
 let resetButton = document.querySelector('.reset__button');
 
 resetButton.addEventListener('click', () => {
        document.querySelector('.stop__watch').innerHTML = `Game time: 00<span>:</span>00`
        gemPuzzle.upload = false;
        gemPuzzle.reset = true;
        gemPuzzle.stopWatch.sec = 0;
        gemPuzzle.stopWatch.min = 0;
        gemPuzzle.stopWatch.hours = 0;
        gemPuzzle.puzzleContent = null;
        gemPuzzle.counter = 0;
        document.body.removeChild(document.querySelector('.wrapper'))
        startPuzzle();
        changePlace();
        
     })
   
}
function changeType(){
        
        document.querySelector('.change__buttons').childNodes.forEach(item => {
            item.addEventListener('click', () => {
                gemPuzzle.counter = 0;
                switch(item.textContent){
                    case '3 x 3':
                        gemPuzzle.type = 3;
                        break;
                    case '4 x 4':
                        gemPuzzle.type = 4;
                        break; 
                    case '5 x 5':
                        gemPuzzle.type = 5;
                        break; 
                    case '6 x 6':
                            gemPuzzle.type = 6;
                        break;
                    case '7 x 7':
                        gemPuzzle.type = 7;
                        break; 
                    case '8 x 8':
                        gemPuzzle.type = 8;
                        break;   
                    default:
                        return;
                 }

                document.querySelector('.stop__watch').innerHTML = `Game time: 00<span>:</span>00`;
                gemPuzzle.upload = false;
                gemPuzzle.reset = true;
                gemPuzzle.stopWatch.sec = 0;
                gemPuzzle.stopWatch.min = 0;
                gemPuzzle.stopWatch.hours = 0;
                gemPuzzle.puzzleContent = null;
                gemPuzzle.counter = 0;
                document.body.removeChild(document.querySelector('.wrapper'))
                startPuzzle();
                changePlace();
                
                switch(item.textContent){
                    case '3 x 3':
                        document.querySelector('.puzzle__content').classList.add('puzzle__three')
                        break;
                    case '4 x 4':
                        document.querySelector('.puzzle__content').classList.add('puzzle__four')
                        break; 
                    case '5 x 5':
                        document.querySelector('.puzzle__content').classList.add('puzzle__five')
                        break; 
                    case '6 x 6':
                        document.querySelector('.puzzle__content').classList.add('puzzle__six')
                        break;
                    case '7 x 7':
                        document.querySelector('.puzzle__content').classList.add('puzzle__seven')
                        break; 
                    case '8 x 8':
                        document.querySelector('.puzzle__content').classList.add('puzzle__eight')
                        break; 
                    default:
                        return;
                 }

            })
            
        })
}
function saveGame(){
        document.querySelector('.save__game__button').addEventListener('click', () => {
            let saveOrder = [];
            if(gemPuzzle.step > 0){
                gemPuzzle.puzzleContent.childNodes.forEach(child => {
                saveOrder.push(child.textContent);
                })
            } else {
                document.querySelector('.puzzle__content').childNodes.forEach(child => {
                    saveOrder.push(child.textContent);
                    })
            }
            
            localStorage.setItem('savedOrder', saveOrder)
            localStorage.setItem('savedMinutes', gemPuzzle.stopWatch.min)
            localStorage.setItem('savedSeconds', gemPuzzle.stopWatch.sec)
            localStorage.setItem('savedSteps', gemPuzzle.counter)
            localStorage.setItem('savedType', gemPuzzle.type)
            
        })
}
function uploadGame(){
        document.querySelector('.upload__game__button').addEventListener('click', () => {
             if(gemPuzzle.counter !== 1) return
             gemPuzzle.upload = true;
             gemPuzzle.savedOrder = localStorage.getItem('savedOrder').split(',');
             gemPuzzle.stopWatch.hours = parseInt(localStorage.getItem('savedHours'));
             gemPuzzle.stopWatch.min = parseInt(localStorage.getItem('savedMinutes'));
             gemPuzzle.stopWatch.sec = parseInt(localStorage.getItem('savedSeconds'));
             gemPuzzle.counter = parseInt(localStorage.getItem('savedSteps')) - 1;
             gemPuzzle.type = parseInt(localStorage.getItem('savedType'));
             document.body.removeChild(document.querySelector('.stop__watch'));
             document.body.removeChild(document.querySelector('.wrapper'))
             stopWatchField()
             startPuzzle();
             changePlace();
            //  gemPuzzle.upload = false;

        });
   
}
function controlSound(){
        document.querySelector('.sound__button').addEventListener('click', () => {
            if(gemPuzzle.sound == 'off'){
                gemPuzzle.sound = 'on'
                document.querySelector('.sound__button').textContent = `Sound ${gemPuzzle.sound}`
                document.querySelector('.audio').setAttribute('data-key', '0')
            }
            else{
                gemPuzzle.sound = 'off'
                document.querySelector('.sound__button').textContent = `Sound ${gemPuzzle.sound}`
                document.querySelector('.audio').setAttribute('data-key', 'sound')
            }
        })
} 
function autoMove(){
    let puzzleContent = document.querySelector('.puzzle__content');
    puzzleContent.childNodes.forEach(item => {

    })


    document.querySelector('.auto__move__button').addEventListener('click', () =>{



    })

}    
    
 
 function stopWatchField(){
    let stopWatch = document.createElement('h5')      
    stopWatch.classList.add('stop__watch')
    document.body.appendChild(stopWatch)
    let seconds = '';
    let minutes = '';
   
    if(gemPuzzle.stopWatch.sec < 10) seconds = '0' + gemPuzzle.stopWatch.sec
    else seconds =  gemPuzzle.stopWatch.sec
    if(gemPuzzle.stopWatch.min < 10) minutes = '0' + gemPuzzle.stopWatch.min
    else minutes =  gemPuzzle.stopWatch.min
   
    

    stopWatch.innerHTML = `Game time: ${minutes}<span>:</span>${seconds}`

   

}
function stopWatchCounter(){
    
    if(gemPuzzle.reset == true) return 
    let seconds = '';
    let minutes = '';
  
    
    
    gemPuzzle.stopWatch.sec += 1;
    if(gemPuzzle.stopWatch.sec == 60){
        gemPuzzle.stopWatch.sec = 0;
        gemPuzzle.stopWatch.min += 1
    }
    if(gemPuzzle.stopWatch.sec < 10) seconds = '0' + gemPuzzle.stopWatch.sec
    else seconds =  gemPuzzle.stopWatch.sec
    if(gemPuzzle.stopWatch.min < 10) minutes = '0' + gemPuzzle.stopWatch.min
    else minutes =  gemPuzzle.stopWatch.min
    




    document.querySelector('.stop__watch').innerHTML = `Game time: ${minutes}<span>:</span>${seconds}`
    setTimeout(stopWatchCounter,1000)
    
    
}
function startHelloWindow(){
    let modalWindow = document.createElement('div'); 
    let modalContainer = document.createElement('div');
    let modalContent = document.createElement('div');
    let helloHeading = document.createElement('h1');
    let helloContentText = document.createElement('div');
    let modalButtons = document.createElement('div');
    let startButton = document.createElement('a');
    modalWindow.classList.add('modal__window')
    modalContainer.classList.add('modal__container')
    modalContent.classList.add('modal__content')
    helloHeading.classList.add('hello__heading')
    helloContentText.classList.add('hello__text__content')
    modalButtons.classList.add('modal__buttons')
    startButton.classList.add('start__button')
    helloHeading.textContent = "Добро пожаловать, приятель, в игру \"Пятнашки\""
    helloContentText.innerHTML = '<p>Краткая инструкция:</p><p>1)Для того чтобы начать игру достаточно передвинуть одну из фишек, расположенных близ пустого поля;</p><p>2)Для выбора типа игры используй кнопки, расположенные под надписью "Choose scheme of puzzle";</p><p>3)Если хочешь начать заново игру, тогда нажми кнопку "Reset";</p><p>4)Нажми кнопку "Save game", если хочешь сохранить игру. Для того чтобы загрузить сохраненную игру сначало тебе необходимо нажать кнопку "Reset",затем нажать кнопку "Upload saved game". </p>'
    startButton.textContent = "Начать игру"
    modalWindow.appendChild(modalContainer)
    modalContainer.appendChild(modalContent)
    modalContent.appendChild(helloHeading)
    modalContent.appendChild(helloContentText)
    modalButtons.appendChild(startButton)
    modalContent.appendChild(modalButtons)
    document.body.appendChild(modalWindow)
    document.querySelector('.start__button').addEventListener('click', () => document.querySelector('.modal__window').style.display = 'none')
            
}
function startResultWindow(){
    let topTenResultsWindow = document.createElement('div');
    let topTenResultsContainer = document.createElement('div');
    let topTenResultsContent = document.createElement('div');
    let topTenResultsHeading = document.createElement('h1');
    let topTenResultsTable = document.createElement('div');
    let closeButton = document.createElement('a');
    
    topTenResultsWindow.classList.add('top__results__window')
    topTenResultsContainer.classList.add('top__results__container')
    topTenResultsContent.classList.add('top__results__content')
    topTenResultsHeading.classList.add('top__results__heading')
    topTenResultsTable.classList.add('top__results__table')
    closeButton.classList.add('close__button')
    
    topTenResultsHeading.textContent = 'TOP 10 results'
    topTenResultsTable.innerHTML = '<table class="table" border="2px solid white" cellpadding="3" width="50%"><tbody><tr><th id="number">№</th><th id="game__time">Game time</th><th id="steps">Steps</th></tr><tbody></table>'
    closeButton.textContent = 'Close results'
    topTenResultsWindow.appendChild(topTenResultsContainer)
    topTenResultsContainer.appendChild(topTenResultsContent)
    topTenResultsContent.appendChild(topTenResultsHeading)
    topTenResultsContent.appendChild(topTenResultsTable)
    topTenResultsContent.appendChild(closeButton)
    document.body.appendChild(topTenResultsWindow)

}
function getResultWindow(){
    
    let num = 1
    document.querySelector('.get__top__results__button').addEventListener('click', () => document.querySelector('.top__results__window').style.display = 'flex');
    document.querySelector('.close__button').addEventListener('click', () => document.querySelector('.top__results__window').style.display = '');

    if(gemPuzzle.counter == 0){
        while(localStorage.getItem(`${num}`) !== null){
            let arr = localStorage.getItem(`${num}`).split(',')
            let tableRow = document.createElement('tr')
            let numCell = document.createElement('td')
            let gameTimeCell = document.createElement('td')
            let stepsCell = document.createElement('td')
            numCell.textContent = `${num}`;
            gameTimeCell.textContent = arr[0]
            stepsCell.textContent = arr[1]
            tableRow.appendChild(numCell)
            tableRow.appendChild(gameTimeCell)
            tableRow.appendChild(stepsCell)
            document.querySelector('tbody').appendChild(tableRow);
            num += 1
        }
    }
}
function showDigitButton(){
    document.querySelector('.show__digits__button').addEventListener('click',() => {
        if(document.querySelector('.show__digits__button').textContent == 'Show digits'){
            document.querySelector('.puzzle__content').childNodes.forEach(item => { item.style.fontSize = '20px'})
            document.querySelector('.show__digits__button').textContent = 'Hide digits'
            console.log('success1')
        } 
        else {
            document.querySelector('.puzzle__content').childNodes.forEach(item => { item.style.fontSize = '0px'})
            document.querySelector('.show__digits__button').textContent = 'Show digits'
            console.log('success2')
        }
    })
}
let buttons;
let puzzleField = document.querySelector('.puzzle__content')
document.addEventListener("DOMContentLoaded",() => {
    startHelloWindow()
    startResultWindow();
    stopWatchField();
    startPuzzle();
    getResultWindow();
    changePlace();
    saveGame();
    document.addEventListener('dragover', (e)=> {
        e.preventDefault();
    })

})
