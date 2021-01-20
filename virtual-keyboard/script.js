window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const  rec = new SpeechRecognition();
let textArea = document.querySelector('textarea')
textArea.focus()
textArea.addEventListener('click',() => {
    keyboard.open(textArea.value, currentValue => {
        textArea.value = currentValue;
    })
})

const keyboard = {
    elements :
    {
        main: null,
        keysContainer: null,
        keys: [],
        
    },
    eventsHandlers: {
        oninput: null,
        onclose: null
    },

    properties: {
        value: "",
        capsLock: false,
        shift:false,
        typeLayout:'rusUnshift',
        selectionStart:0,
        sound: true,
        voice: false
    },

    
    init() {
        //Create main elements
        this.elements.main = document.createElement('div');
        this.elements.keysContainer = document.createElement('div');
    

        //Setup main elements
        this.elements.main.classList.add('keyboard', 'keyboard--hidden');
        this.elements.keysContainer.classList.add('keyboard__keys');
        this.elements.keysContainer.appendChild(this._createKeys());
        
        this.elements.keys = this.elements.keysContainer.querySelectorAll('.keyboard__key')

        //Add to DOM
        this.elements.main.appendChild(this.elements.keysContainer);
        document.body.appendChild(this.elements.main);

        //Automatically use keyboard for elements with .use-keyboard-input
        document.querySelectorAll('.use-keyboard-input').forEach(element => {
            element.addEventListener("click", ()=> {
                this.open(element.value, currentValue => {
                    element.value = currentValue;
                })
            })
        })

    },

    _createKeys (){
        const fragment = document.createDocumentFragment();
        
        const keyLayout = {
                engUnshift: [  "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
                        "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
                        "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
                        "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/","Shift",
                        "volume_off","EN","space","keyboard_arrow_left","keyboard_arrow_right","keyboard_voice"
                    ],
                rusUnshift:  [
                        "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "backspace",
                        "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
                        "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter",
                        "done", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "Shift",
                        "volume_off","RU","space","keyboard_arrow_left","keyboard_arrow_right","keyboard_voice"
                ],
                engShift: [  "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "backspace",
                    "q", "w", "e", "r", "t", "y", "u", "i", "o", "p",
                    "caps", "a", "s", "d", "f", "g", "h", "j", "k", "l", "enter",
                    "done", "z", "x", "c", "v", "b", "n", "m", ",", ".", "?","Shift",
                    "volume_off","EN","space", "keyboard_arrow_left", "keyboard_arrow_right", "keyboard_voice"
                    ],
                rusShift:  [
                        "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "backspace",
                        "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ",
                        "caps", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "enter",
                        "done", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",","Shift",
                        "volume_off","RU","space","keyboard_arrow_left","keyboard_arrow_right","keyboard_voice"
                    ],
        
        }
            

        //Creates HTML for an icon
        const  createIconHTML = (icon_name) => {
            return `<i class='material-icons'>${icon_name}</i>`
        }

        keyLayout[this.properties.typeLayout].forEach( key => {
            
            const keyElement = document.createElement('button');
            const audio = document.createElement('audio')
            const insertLineBreak = ["backspace","p","enter", "Shift",,"ъ"].indexOf(key) !== -1;
       

            //Add attributes/classes
            keyElement.setAttribute("type","button")
            keyElement.classList.add("keyboard__key");
            keyElement.setAttribute('id',key)
            keyElement.setAttribute('data-key',key)
            audio.setAttribute('data-key',key)
            this.properties.typeLayout == 'rusUnshift' || this.properties.typeLayout == 'rusShift' ? audio.src = 'sounds/tink.wav' : audio.src = 'sounds/sound4.wav'

            switch (key) {
                
                case "volume_off":
                    keyElement.innerHTML = createIconHTML("volume_off");
                    keyElement.addEventListener('click', (e) => {  
                        let audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`)
                        // audio.play();
                        this.soundOFF();
                        console.log('success')
                    })
                    break;
                case "keyboard_arrow_left":
                    keyElement.innerHTML = createIconHTML("keyboard_arrow_left");
                    keyElement.addEventListener('click', (e) => {  
                        let audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`)
                        audio.play();
                        console.log('success')
                        if(textArea.selectionEnd > 0){
                            textArea.selectionEnd -= 1;
                            textArea.focus();
                        } else {
                            textArea.selectionEnd = 0;
                            textArea.focus();
                        }
                    })
                    
                        
                        
                    
                    break;
                case "keyboard_arrow_right":
                        keyElement.innerHTML = createIconHTML("keyboard_arrow_right");
                        keyElement.addEventListener('click', (e) => {  
                            let audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`)
                            audio.play();
                            if(textArea.selectionStart !== textArea.value.length){
                                textArea.selectionStart += 1;
                                textArea.focus();
                            }
                            
                        })
                        break;    

                case "Shift":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = 'Shift'
                    audio.src = 'sounds/sound2.mp3'

                    keyElement.addEventListener('click', (e) => {
                        
                        let audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`)
                        audio.play();
                        this._toggleShift()
                        document.getElementById('Shift').classList.toggle("key__pressed", keyboard.properties.shift);
                    });
                    break;
                case "EN":
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = 'EN'
                    keyElement.addEventListener('click', (e) => {
                        let audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`)
                        audio.play();
                        rec.lang = 'ru-RU';
                        if(this.properties.voice == true)document.getElementById('keyboard_voice').classList.add("key__pressed")
                        this.changeLanguage()
                    })
                    break;
                case "RU":
                        keyElement.classList.add("keyboard__key--wide");
                        keyElement.innerHTML = 'RU'
                        keyElement.addEventListener('click', (e) => {
                            let audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`)
                            audio.play();
                            rec.lang = 'en-US';
                            if(this.properties.voice == true)document.getElementById('keyboard_voice').classList.add("key__pressed")
                            this.changeLanguage()
                        })
                        break;
                case "keyboard_voice":
                    
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_voice");
                    keyElement.addEventListener('click', (e) => {
                        let audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`)
                        audio.play();
                       
                        this.recognizeVoice()
                    })
                    break;    
                case "backspace" :
                    audio.src = 'sounds/sound2.mp3'
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("backspace");
                
                    
                    keyElement.addEventListener('click', (e) => {
                        let audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`)
                        audio.play();
                        if(textArea.selectionStart !== textArea.selectionEnd){
                            let start = textArea.selectionStart;
                            let end = textArea.selectionEnd;
                            textArea.value = this.properties.value = this.properties.value.substring(0,textArea.selectionStart) + this.properties.value.substring(textArea.selectionEnd,this.properties.value.length);
                            textArea.selectionStart = textArea.selectionEnd = start = end -= 1;
                        } 
                        else if(textArea.selectionStart > 0){
                            let start = textArea.selectionStart;
                            let end = textArea.selectionEnd;
                            textArea.value = textArea.value.slice(0,textArea.selectionStart - 1) + textArea.value.slice(textArea.selectionEnd)
                            keyboard.properties.value = textArea.value;
                            keyboard._triggerEvent("oninput");
                            textArea.selectionStart = textArea.selectionEnd = start = end -= 1;
                            
                        }
                        
                        this._triggerEvent("oninput");
                        textArea.focus();
                    })
                    
                    break;
                case "caps" :
                    audio.src = 'sounds/sound2.mp3'
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--activatable");
                    keyElement.innerHTML = createIconHTML("keyboard_capslock");
                    
                    keyElement.addEventListener('click', (e) => {
                        let audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`)
                        audio.play();
                        this._toggleCapsLock()
                        keyElement.classList.toggle("keyboard__key--active", this.properties.capsLock);
                    });
                break;    
                case "enter" :
                    audio.src = 'sounds/sound2.mp3'
                    keyElement.classList.add("keyboard__key--wide");
                    keyElement.innerHTML = createIconHTML("keyboard_return");
                    
                    keyElement.addEventListener('click', (e) => {
                        let audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`)
                        audio.play();
                        if(textArea.selectionStart !== textArea.value.length){
                            let start = textArea.selectionStart;
                            let end = textArea.selectionEnd;
                            textArea.value = textArea.value.slice(0,textArea.selectionStart) + " " + textArea.value.slice(textArea.selectionEnd)
                            this.properties.value = textArea.value;
                            this._triggerEvent("oninput");
                            textArea.selectionStart = textArea.selectionEnd = start = end += 1;
                        }
                        else{
                            this.properties.value += "\n";  
                        }
                        this._triggerEvent("oninput");
                        textArea.focus();
                        
                    });
                    break;    
                case "space":
                    audio.src = 'sounds/sound3.wav'
                    keyElement.classList.add("keyboard__key--extra-wide");
                    keyElement.innerHTML = createIconHTML("space_bar");
                    
                    keyElement.addEventListener('click', (e) => {
                        let audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`)
                        audio.play();
                        if(textArea.selectionStart !== textArea.value.length){
                            let start = textArea.selectionStart;
                            let end = textArea.selectionEnd;
                            textArea.value = textArea.value.slice(0,textArea.selectionStart) + " " + textArea.value.slice(textArea.selectionEnd)
                            this.properties.value = textArea.value;
                            this._triggerEvent("oninput");
                            textArea.selectionStart = textArea.selectionEnd = start = end += 1;
                        }
                        else{
                            this.properties.value += " ";  
                        }
                        this._triggerEvent("oninput");
                        textArea.focus();
                        
                    });
                    break;
                case "done":
                    
                    keyElement.classList.add("keyboard__key--wide", "keyboard__key--dark");
                    keyElement.innerHTML = createIconHTML("check_circle");
                    
                    keyElement.addEventListener('click', (e) => {
                        let audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`)
                        audio.play();
                        this.close();
                        this._triggerEvent("onclose");
                       
                        
                    });
                    
                    break;  
                default:

                    keyElement.textContent = key.toLowerCase();
                    keyElement.addEventListener('click', (e) => {
                        
                        let audio = document.querySelector(`audio[data-key="${e.target.dataset.key}"]`)
                        audio.play();
                        if(textArea.selectionStart !== textArea.value.length){
                            let start = textArea.selectionStart;
                            let end = textArea.selectionEnd;
                            if(this.properties.capsLock && this.properties.shift || !this.properties.capsLock && !this.properties.shift) textArea.value = textArea.value.slice(0,textArea.selectionStart) + key.toLowerCase() + textArea.value.slice(textArea.selectionEnd)
                            else{
                                textArea.value = textArea.value.slice(0,textArea.selectionStart) + key.UPperCase() + textArea.value.slice(textArea.selectionEnd)
                            } 
                            
                            this.properties.value = textArea.value;
                            this._triggerEvent("oninput");
                            textArea.selectionStart = textArea.selectionEnd = start = end += 1;
                        }
                        else{
                            this.properties.value += this.properties.capsLock && this.properties.shift || !this.properties.capsLock && !this.properties.shift ? key.toLowerCase() : key.toUpperCase();  
                        }
                        
                        this._triggerEvent("oninput");
                        textArea.focus();
                        
                    });
                    break; 

            }
            fragment.appendChild(keyElement);
            fragment.appendChild(audio);

            if(insertLineBreak){
                fragment.appendChild(document.createElement('br'));
            }
        })

        return fragment;

    },

    _triggerEvent(handlerName){
        if (typeof this.eventsHandlers[handlerName] == 'function') {
            this.eventsHandlers[handlerName](this.properties.value)
        }
    },

    _toggleCapsLock() {
        this.properties.capsLock = ! this.properties.capsLock;
        if(this.properties.shift){
            for(const key of this.elements.keys) {
                if (key.childElementCount === 0 ) {
                    if(key.textContent == "Shift" || key.textContent == "EN" || key.textContent == "RU"){}
                    else{
                        key.textContent = this.properties.capsLock ? key.textContent.toLowerCase() : key.textContent.toUpperCase();
                    }
                }
            }
             
        } 
        else{
                for(const key of this.elements.keys) {
                if (key.childElementCount === 0 ) {
                    if(key.textContent == "Shift" || key.textContent == "EN" || key.textContent == "RU"){}
                    else{
                        key.textContent = this.properties.capsLock ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
                    }
                }
            }
        }
        
    },
    _toggleShift(){
        if(this.properties.typeLayout == 'engUnshift') {
            this.properties.typeLayout = 'engShift';
            this._triggerEvent("onclose");
            document.querySelector('.keyboard').remove();
            this.init()
            this.open(textArea.value, currentValue => {
                textArea.value = currentValue;
             })
             if(this.properties.capsLock) document.querySelector(".keyboard__key--activatable").classList.toggle("keyboard__key--active", keyboard.properties.capsLock);
            
        }
        else if(this.properties.typeLayout == 'engShift') {
            this.properties.typeLayout = 'engUnshift'
            this._triggerEvent("onclose");
            document.querySelector('.keyboard').remove();
            this.init()
            this.open(textArea.value, currentValue => {
                textArea.value = currentValue;
             })
             if(this.properties.capsLock) document.querySelector(".keyboard__key--activatable").classList.toggle("keyboard__key--active", keyboard.properties.capsLock);
        }
        if(this.properties.typeLayout == 'rusUnshift') {
            this.properties.typeLayout = 'rusShift';
            this._triggerEvent("onclose");
            document.querySelector('.keyboard').remove();
            this.init()
            this.open(textArea.value, currentValue => {
                textArea.value = currentValue;
             })
             if(this.properties.capsLock) document.querySelector(".keyboard__key--activatable").classList.toggle("keyboard__key--active", keyboard.properties.capsLock);
        }
        else if(this.properties.typeLayout == 'rusShift') {
            this.properties.typeLayout = 'rusUnshift'
            this._triggerEvent("onclose");
            document.querySelector('.keyboard').remove();
            this.init()
            this.open(textArea.value, currentValue => {
                textArea.value = currentValue;
             })
             if(this.properties.capsLock) document.querySelector(".keyboard__key--activatable").classList.toggle("keyboard__key--active", keyboard.properties.capsLock);
        }  
        this.properties.shift = ! this.properties.shift;
        
        if(this.properties.capsLock){       
            for(const key of this.elements.keys) {
                if (key.childElementCount === 0 ) {
                    if(key.textContent == "Shift" || key.textContent == "EN" || key.textContent == "RU" ){}
                    else{
                        key.textContent = this.properties.shift ? key.textContent.toLowerCase() : key.textContent.toUpperCase();
                    }
                }
            }
             
        } else{
                for(const key of this.elements.keys) {
                if (key.childElementCount === 0 ) {
                    if(key.textContent == "Shift" || key.textContent == "EN" || key.textContent == "RU"){}
                    else{
                        key.textContent = this.properties.shift ? key.textContent.toUpperCase() : key.textContent.toLowerCase();
                    }
                }
            }
        }
        

    },  
    changeLanguage(){
        this.properties.typeLayout == 'engUnshift' ? this.properties.typeLayout = 'rusUnshift' : this.properties.typeLayout = 'engUnshift';
        this.close();
        this._triggerEvent("onclose");
        document.querySelector('.keyboard').remove();
        this.init()
        this.open(textArea.value, currentValue => {
            textArea.value = currentValue;
        })
        if(this.properties.sound == false) {
            document.querySelectorAll('audio').forEach(sound => sound.src = "#")
            this.properties.sound = false;
            document.getElementById('volume_off').classList.add("key__pressed")
        }
    },

    soundOFF(){
        if(this.properties.sound){
            document.querySelectorAll('audio').forEach(sound => sound.src = "#")
            this.properties.sound = false;
            document.getElementById('volume_off').classList.add("key__pressed")
            
        } 
        else {
            this.properties.sound = true;
            this.close();
            this._triggerEvent("onclose");
            document.querySelector('.keyboard').remove();
            this.init()
            this.open(textArea.value, currentValue => {
                textArea.value = currentValue;
            })
            
        }
    },

    recognizeVoice(){
      
        rec.interimResults = true;
        
        
        if(!this.properties.voice){
            document.getElementById('keyboard_voice').classList.add("key__pressed")
            this.properties.voice = true;
            rec.addEventListener("result", (e) => {
                let transcript = Array.from(e.results) 
                
                .map(result => result[0])
                .map(result => result.transcript)
                .join('')
                if(e.results[0].isFinal){
                    if(textArea.selectionStart !== textArea.value.length){
                        let start = textArea.selectionStart;
                        let end = textArea.selectionEnd;
                        if(this.properties.capsLock && this.properties.shift || !this.properties.capsLock && !this.properties.shift) textArea.value = textArea.value.slice(0,textArea.selectionStart) + transcript.toLowerCase() + " " + textArea.value.slice(textArea.selectionEnd)
                        else{
                            textArea.value = textArea.value.slice(0,textArea.selectionStart) + transcript.UpperCase() + " " + textArea.value.slice(textArea.selectionEnd)
                        } 
                        
                        this.properties.value = textArea.value;
                        this._triggerEvent("oninput");
                        textArea.selectionStart = textArea.selectionEnd = start = end += 1;
                    }
                    else{
                        this.properties.value += this.properties.capsLock && this.properties.shift || !this.properties.capsLock && !this.properties.shift ? transcript.toLowerCase() + " " : transcript.toUpperCase() + " ";  
                    }
                    
                    this._triggerEvent("oninput");
                    textArea.focus();
                     rec.abort()
                }
            })
                
                // let text = Array.from(e.results)
                // .map(result => result[0])
                // .map(result => result.transcript)
                //  this.properties.value += text[0]; 
                // this._triggerEvent("oninput"); 
                
                
            
            rec.addEventListener("end", rec.start);
            rec.start()
           
           
            

        }
        else{
            document.getElementById('keyboard_voice').classList.remove("key__pressed")
            rec.addEventListener("end", rec.abort);
            this.properties.voice = false;
        }
        
        
    },

    open(initialValue, oninput, onclose) {
        this.properties.value = initialValue || "";
        this.eventsHandlers.oninput = oninput;
        this.eventsHandlers.onclose = onclose; 
        this.elements.main.classList.remove('keyboard--hidden')
    },
    close() {
        this.properties.value = "";
        this.eventsHandlers.oninput = oninput;
        this.eventsHandlers.onclose = onclose; 
        this.elements.main.classList.add('keyboard--hidden')
    }


}
window.addEventListener('DOMContentLoaded', () => {
    keyboard.init();
})


document.addEventListener('keydown', (e) => {
   
    switch (e.key) {
        case "ArrowRight":
            document.getElementById("keyboard_arrow_right").classList.add("key__pressed");
            break;
        
        case "ArrowLeft":
            document.getElementById("keyboard_arrow_left").classList.add("key__pressed");
            break;
        
        case "Control":
        case "Alt":
                    break;
        case "Backspace" :
                keyboard.properties.value = textArea.value;
                keyboard._triggerEvent("oninput");
                if(textArea.selectionStart !== textArea.selectionEnd){
                    keyboard.properties.value = keyboard.properties.value.substring(0,textArea.selectionStart) + keyboard.properties.value.substring(textArea.selectionEnd,keyboard.properties.value.length);
                } else {
                    keyboard.properties.value = keyboard.properties.value.substring(0,keyboard.properties.value.length)
                }
                keyboard._triggerEvent("oninput");
                document.getElementById('backspace').classList.add("key__pressed")
                break;
        case "CapsLock" :
                keyboard._toggleCapsLock()
                document.querySelector(".keyboard__key--activatable").classList.toggle("keyboard__key--active", keyboard.properties.capsLock);
                document.getElementById('caps').classList.add("key__pressed")
                break;    
        
        case "Enter" :
                document.getElementById('enter').classList.add("key__pressed")
                keyboard.properties.value += "\n"
                break;   
        case " ":
               document.getElementById('space').classList.add("key__pressed")
               keyboard.properties.value += e.key
               break;
        case "Shift":
                keyboard._toggleShift()
                document.getElementById('Shift').classList.toggle("key__pressed", keyboard.properties.shift);
                break;
        default:
            keyboard.properties.value += e.key;
            document.getElementById(e.key).classList.toggle("key__pressed")
            break; 

    }
    

});

document.addEventListener('keyup', (e) => {
    switch (e.key) {


        case "ArrowLeft":
            document.getElementById("keyboard_arrow_left").classList.remove("key__pressed");
            break;
        
    
        case "ArrowRight":
            document.getElementById("keyboard_arrow_right").classList.remove("key__pressed");
            break;
        
       
        case "Backspace" :
                document.getElementById('backspace').classList.remove("key__pressed")
                break;
        case "CapsLock" :
                document.getElementById('caps').classList.remove("key__pressed")
                break; 

        case "Enter" :
                document.getElementById('enter').classList.remove("key__pressed")
                break;   
        case " ":
                document.getElementById('space').classList.remove("key__pressed")
                break;
        case "Shift" :
             break;  
        default:
            document.getElementById(e.key).classList.toggle("key__pressed")
            break; 
    }
});










