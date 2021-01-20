const levels = [
    
    {
        levelName:'Select the star',
        levelPicture: '<div class="galaxy__container"><img class="galaxy" src="assets/images/galaxy.svg" data-name="null"><img class="star__a" src="assets/images/star.svg" data-tag="<star></star>" data-name="solar" ><img class="star__b" src="assets/images/star.svg" data-tag="<star></star>" data-name="aldebaran"><img class="star__c" src="assets/images/star.svg" data-tag="<star></star>" data-name="sirius"><img class="star__d" src="assets/images/star.svg" data-tag="<star></star>" data-name="betelgeuse"></div>',
        html:'<div class="milkway">&lt;div class="milkway"&gt;<div class="solar" data-tag="<solar></solar>" data-name="solar">&nbsp;&nbsp;&lt;star/&gt;</div><div class="aldebaran" data-tag="<aldebaran></aldebaran>" data-name="aldebaran">&nbsp;&nbsp;&lt;star/&gt;</div><div class="sirius" data-tag="<sirius></sirius>" data-name="sirius">&nbsp;&nbsp;&lt;star/&gt;</div><div class="betelgeuse" data-tag="<betelgeuse ></betelgeuse>" data-name="betelgeuse">&nbsp;&nbsp;&lt;star /&gt;</div>&lt;/div&gt;</div>',
        levelHeading: 'Type Selectors',
        levelSubheading: 'Select elements by their type',
        level: 'A',
        levelDescription:'<div class="hint">Selects all elements of type <strong>A</strong>. Type refers to the type of tag, so <tag>div</tag>, <tag>p</tag> and <tag>ul</tag> are all different element types.</div>',
        exampleDescription: '<strong>div</strong> selects all <tag>div</tag> elements.',
        correctAnswer: 'star',
        status:'uncompleted',
        
    },
    {
        levelName:'Select the Red Giant',
        levelPicture: '<div class="galaxy__container"><img class="galaxy" src="assets/images/galaxy.svg" data-name="null"><img class="star__solar" src="assets/images/star.svg" data-tag="<solar></solar>" data-name="solar" ><img class="star__aldebaran" src="assets/images/star.svg" data-tag="<aldebaran class=&quot;red_giant&quot;></aldebaran>" data-name="aldebaran"><img class="star__sirius" src="assets/images/star.svg" data-tag="<sirius></sirius>" data-name="sirius"><img class="star__betelgeuse" src="assets/images/star.svg" data-tag="<betelgeuse ></betelgeuse>" data-name="betelgeuse"></div>',
        html:'<div>&lt;div class="milkway"&gt;<div class="solar" data-tag="<solar></solar>" data-name="solar">&nbsp;&nbsp;&lt;solar/&gt;</div><div class="aldebaran" data-tag= "<aldebaran></aldebaran>" data-name="aldebaran"> &nbsp;&nbsp;&lt;aldebaran class="red_giant"&gt;</div><div class="sirius" data-tag="<sirius></sirius>" data-name="sirius">&nbsp;&nbsp;&lt;sirius/&gt;</div><div class="betelgeuse" data-tag="<betelgeuse ></betelgeuse>" data-name="betelgeuse">&nbsp;&nbsp;&lt;betelgeuse /&gt;</div>&lt;/div&gt;</div>',
        levelHeading: 'Class Selector',
        levelSubheading: 'Select elements by their class',
        level: '.classname',
        levelDescription:'<div class="hint">The class selector selects all elements with that class attribute. Elements can only have one ID, but many classes.</div>',
        exampleDescription: '<strong>.supernova</strong> selects all elements with <strong>class="supernova"</strong>.',
        correctAnswer: '.red_gigant',
        status:'uncompleted',
    },
    {
        levelName:'Select the planet Earth',
        levelPicture:'<div class="solar_system"><img src="assets/images/mercury.svg" alt="" id="mercury" data-name="mercury" data-tag="<planet id=&quot;mercury&quot;></planet>"><img src="assets/images/venus.svg" alt="" id="venus" data-name="venus" data-tag="<planet id=&quot;venus&quot;></planet>"><img src="assets/images/earth.svg" alt="" id="earth" data-name="earth" data-tag="<planet id=&quot;earth&quot;></planet>"></div>    ',
        html:'<div>&lt;div class="solar__system"&gt;<div class ="mercury">&nbsp;&nbsp;&lt;planet id=&quot;mercury&quot;/&gt;</div><div class="venus">&nbsp;&nbsp;&lt;planet id=&quot;venus&quot; /&gt;</div><div class="earth">&nbsp;&nbsp;&lt;planet id=&quot;earth&quot; /&gt;</div>&lt;/div&gt;</div>',
        levelHeading: 'ID Selector',
        levelSubheading: 'Select elements with an ID',
        level: '#id',
        levelDescription:'<div class="hint">Selects the element with a specific <strong>id</strong>. You can also combine the ID selector with the type selector.</div>',
        exampleDescription: '<strong>#long</strong> selects any element<strong>id="long"</strong> ',
        correctAnswer: '#earth',
        status:'uncompleted',
        
    },
    {
        levelName:'Select the Earth\'s satellite',
        levelPicture:'<div class="solar_system"><img src="assets/images/mercury.svg" alt="" id="mercury" data-name="mercury" data-tag="<planet id=&quot;mercury&quot;></planet>"><img src="assets/images/venus.svg" alt="" id="venus" data-name="venus" data-tag="<planet id=&quot;venus&quot;></planet>"><div class ="earth" id="earth__orbit" data-parent="true" data-name="earth__orbit" data-tag="<planet id=&quot;earth&quot;></planet>"><img src="assets/images/lunar.svg" alt="" id="lunar" data-name="lunar" data-tag="<satellite></satellite>""></div></div>',
        html:' <div>&lt;div class="solar__system"&gt;<div class="mercury">&nbsp&nbsp&lt;planet id="mercury"&gt;</div><div class="venus">&nbsp&nbsp&lt;planet id="venus"&gt;</div><div class=earth__orbit>&nbsp&nbsp&lt;planet id="earth"&gt;&nbsp&nbsp&nbsp&nbsp<div class="lunar">&nbsp&nbsp&nbsp&nbsp&lt;satellite&gt/;</div>&nbsp&nbsp&lt;/planet&gt;</div>&lt;/div&gt;</div>',
        levelHeading: '',
        levelSubheading: 'Combine the Descendant & ID Selectors',
        level: '#id  A',
        levelDescription:'<div class="hint">You can combine any selector with the descendent selector.s.</div>',
        exampleDescription: '<strong>#cool span</strong>selects all span elements that are inside of elements with <strong>id="cool"</strong>',
        correctAnswer: '#earth satellite',
        status:'uncompleted',
        
    }
]
class App {
    constructor(arr){
        this.levels = arr
        this.currentLevel = 0
    }
    getCurrentLevel () {
        levelName.innerHTML = this.levels[this.currentLevel].levelName
        levelPicture.innerHTML = this.levels[this.currentLevel].levelPicture
        htmlMarkUp.innerHTML = this.levels[this.currentLevel].html
        levelHeading.innerHTML = this.levels[this.currentLevel].levelHeading
        levelSubheading.innerHTML = this.levels[this.currentLevel].levelSubheading
        level.innerHTML = this.levels[this.currentLevel].level
        levelDescription.innerHTML = this.levels[this.currentLevel].levelDescription
        exampleDescription.innerHTML = this.levels[this.currentLevel].exampleDescription;
        levelLevel.innerHTML = `Level ${this.currentLevel + 1} of ${this.levels.length}`
        //Get focus on input
        inputSelector.focus()
        this.validateStatus ()
        this.setEventListeners(levelPicture.firstChild.className)
       

        

    }
    getNextLevel () {
        if(this.currentLevel === this.levels.length - 1) {
            return 
        }
        this.currentLevel += 1
        this.getCurrentLevel (this.currentLevel)
    }
    getPreviousLevel () {
        if(this.currentLevel === 0) {
            return 
        }
        this.currentLevel -= 1
        this.getCurrentLevel (this.currentLevel)
    }
    validateAnswer (e) {
        if(e.code === 'Enter' || e.target === document.querySelector('.key_enter')) {
            if(e.target === document.querySelector('.key_enter')) {
                this.pushEnter()
            }
            if(inputSelector.value === this.levels[this.currentLevel].correctAnswer){
                inputSelector.value = ''
                this.levels[this.currentLevel].status = 'completed'
                this.validateStatus () 
                //Get next level after right level via getNextLevel ()
                this.getNextLevel ()
                //Get next level in level list after right level while burger menu is open
                
                if(menuButton.classList.contains('open')) {
                    this.doDefaultBackgroundInList ()
                    this.highlightLevelInList(levelList.children[this.currentLevel])
                    //Do status "completed" for previous level
                    levelList.children[this.currentLevel - 1].children[0].style.color = 'green'
                }
                
                this.setRocketAnimation()
            //Get needed level entering in input level number
            } else if(parseInt(inputSelector.value) >= 0 && parseInt(inputSelector.value) <= this.levels.length){
                this.currentLevel = parseInt(inputSelector.value) - 1
                this.getCurrentLevel (this.currentLevel)
                //Transition of highlighting in open burger menu according to current level
                if(menuButton.classList.contains('open')) {
                    this.doDefaultBackgroundInList()
                    this.highlightLevelInList(levelList.children[this.currentLevel]) 
                }
            } else {
                this.setAlienAnimation()
            }
            inputSelector.value = ''
        }
    }
    validateStatus () {
        this.levels[this.currentLevel].status === 'completed' ? completeIndicator.style.color = 'green' : completeIndicator.style.color = '#74818c';
    }
    openCloseBurgerMenu () {
        menuButton.classList.toggle('open')
        if (menuButton.classList.contains('open')) {
            this.setLevelList ()
            burgerMenuWindow.style.transform = 'translateX(-100%)'
        } else {
            burgerMenuWindow.style.transform = 'translateX(0%)'
            this.unsetLevelList ()
        }
    }
    setLevelList () {
        this.levels.forEach((item, idx) => {
            let level = document.createElement('a');
            level.classList.add('level');
            level.href = '#'
            let completeIndicatorSec = document.createElement('div');
            completeIndicatorSec.setAttribute('id','complete__status')
            completeIndicatorSec.innerHTML = '<i class="material-icons">done</i>'
            this.levels[idx].status === 'completed' ? completeIndicatorSec.style.color = 'green' : completeIndicatorSec.style.color = '#74818c';
            let levelNumber = document.createElement('div')
            levelNumber.classList.add('level__number')
            levelNumber.innerHTML = idx + 1
            let levelSyntax = document.createElement('div')  
            levelSyntax.classList.add('level__syntax')
            levelSyntax.innerHTML = item.level
            level.appendChild(completeIndicatorSec)
            level.appendChild(levelNumber)
            level.appendChild(levelSyntax)
            levelList.appendChild(level)
        })
        //Highlight the current level
        this.highlightLevelInList (levelList.children[this.currentLevel])
        
    }
    unsetLevelList () {
        levelList.innerHTML = ''
    }
    chooseLevelFromList (e) {
        let chosenLevelNumber;
        this.doDefaultBackgroundInList()
        if(e.target.classList.contains('level')) {
            // ...children[1].innerHTML includes order number in level list 
            chosenLevelNumber = e.target.children[1].innerHTML
            //Highlight the chosen level
            this.highlightLevelInList (e.target)
        } else if (e.target.classList.contains('material-icons')) {
            // ...children[1].innerHTML includes order number in level list 
            chosenLevelNumber = e.target.parentNode.parentNode.children[1].innerHTML
            //Highlight the chosen level
            this.highlightLevelInList (e.target.parentNode.parentNode)
        } else {
            // ...children[1].innerHTML includes order number in level list 
            chosenLevelNumber = e.target.parentNode.children[1].innerHTML
            //Highlight the chosen level
            this.highlightLevelInList (e.target.parentNode)
         }
         //I subtract '1' from chosenLevelNumber for according ordering in levels array 
         this.currentLevel = chosenLevelNumber - '1'
         this.getCurrentLevel(this.currentLevel)
         //The burger menu is closed after choosing of level in levels list 
         this.openCloseBurgerMenu ()
    }
    highlightLevelInList (level) {
        level.style.background = '#c2cdcb'
    }
    doDefaultBackgroundInList(){
        document.querySelectorAll('.level').forEach(item => item.style.background = '')
    
    }
    setEventListeners (element){
        document.querySelector(`.${element}`).childNodes.forEach(child => {
            if(child.dataset.name === 'null') {
                
            }
            else if(child.childElementCount === 0 ) {
                child.addEventListener('mouseenter', (event) => {
                    this.insertValueInModalWindow(event)
                    this.showModalWindow(event)
                    this.doRedFontColor(this.getName(event))
                })
                child.addEventListener('mouseleave', (event) => {
                    this.doWhiteFontColor(this.getName(event))
                    this.hideModalWindow()

                } )

            } else {
                child.addEventListener('mouseover', (event) => {
                    this.insertValueInModalWindow(event)
                    this.showModalWindow(event)
                    this.doRedFontColor(this.getName(event))
                })
                child.addEventListener('mouseout', (event) => {
                    this.doWhiteFontColor(this.getName(event))
                    this.hideModalWindow()

                } )
                this.setEventListeners (child.className)
            }

        })
    }
    findModalWindow () {
        return document.querySelector('.modal__tag')
    }
    getName (event) {
        let name =  event.target.dataset.name
        
        return name
        
    }
    getTag (event) {
        return event.target.dataset.tag
    }
    insertValueInModalWindow (event) {
        this.findModalWindow().innerText = this.getTag(event)
    }
    showModalWindow() {
        this.findModalWindow().style.display = 'block'
        
       
    }
    doRedFontColor (element) {
            document.querySelector(`.${element}`).style.color = 'white' 
            
    }
    doWhiteFontColor (element) {
        document.querySelector(`.${element}`).style.color = '#74818c' 
    }
    hideModalWindow() {
        this.findModalWindow().style.display = 'none' 
    }
    turnDimmingInInput () {
            if(inputSelector.value === ''){
                inputSelector.style.animation = 'input__dimming 1s linear infinite'
            } else {
                inputSelector.style.animation = 'none'
            }
    }
    setAlienAnimation () {
        alien.classList.add('alien__appearing')
    }
    removeAlienAnimation () {
        alien.classList.remove('alien__appearing')
    }
    setRocketAnimation () {
        rocket.classList.add('rocket__appearing')
        setTimeout(this.removeRocketAnimation, 7000)
    }
    removeRocketAnimation () {
        rocket.classList.remove('rocket__appearing')
    }
    pushEnter () {
        document.querySelector('.key_enter').classList.add('keydown')
        setTimeout(() => document.querySelector('.key_enter').classList.remove('keydown'), 1000)
    }
     

    
    
}
let levelName = document.querySelector('.level__name'),
    levelPicture = document.querySelector('.level__picture'),
    htmlMarkUp = document.querySelector('.html__markup'),
    levelHeading = document.querySelector('.level__heading'),
    levelSubheading = document.querySelector('.level__subheading'),
    level = document.querySelector('.level'),
    levelDescription = document.querySelector('.level__description'),
    exampleDescription = document.querySelector('.example__description'),
    levelLevel = document.querySelector("div.side__bar__heading > h1"),
    inputSelector = document.querySelector(".input__selector");
const arrowRightButton = document.getElementById('arrow__right'),
      arrowLeftButton = document.getElementById('arrow__left'),
      completeIndicator = document.querySelector('#done > i'),
      menuButton = document.querySelector('.menu__btn'),
      burgerMenuWindow = document.querySelector('.burger__menu'),
      levelList = document.querySelector('.level__list'),
      alien = document.querySelector('.alien'),
      rocket = document.querySelector('.rocket'),
      enterButton = document.querySelector('.key_enter');

const rssCss = new App(levels)
rssCss.getCurrentLevel (rssCss.currentLevel)
arrowRightButton.addEventListener('click', rssCss.getNextLevel.bind(rssCss))
arrowLeftButton.addEventListener('click', rssCss.getPreviousLevel.bind(rssCss))
window.addEventListener('keydown', rssCss.validateAnswer.bind(rssCss))
enterButton.addEventListener('click', rssCss.validateAnswer.bind(rssCss))
menuButton.addEventListener('click', rssCss.openCloseBurgerMenu.bind(rssCss))
levelList.addEventListener('click', rssCss.chooseLevelFromList.bind(rssCss))
inputSelector.addEventListener('keyup', rssCss.turnDimmingInInput.bind(rssCss))
inputSelector.addEventListener('keydown', rssCss.removeAlienAnimation.bind(rssCss))