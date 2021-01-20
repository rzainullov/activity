const listThemes = [
    [
    {   
        '1':'url(assets/images/morning/01.jpg)',
        '2':'url(assets/images/morning/02.jpg)',
        '3':'url(assets/images/morning/03.jpg)',
        '4':'url(assets/images/morning/04.jpg)',
        '5':'url(assets/images/morning/05.jpg)',
        '6':'url(assets/images/morning/06.jpg)',
    
    },
    {   
        '1':'url(assets/images/day/01.jpg)',
        '2':'url(assets/images/day/02.jpg)',
        '3':'url(assets/images/day/03.jpg)',
        '4':'url(assets/images/day/04.jpg)',
        '5':'url(assets/images/day/05.jpg)',
        '6':'url(assets/images/day/06.jpg)',
        
      
    },

    {   
        '1':'url(assets/images/evening/01.jpg)',
        '2':'url(assets/images/evening/02.jpg)',
        '3':'url(assets/images/evening/03.jpg)',
        '4':'url(assets/images/evening/04.jpg)',
        '5':'url(assets/images/evening/05.jpg)',
        '6':'url(assets/images/evening/06.jpg)',
    
    },
    {   
        '1':'url(assets/images/night/01.jpg)',
        '2':'url(assets/images/night/02.jpg)',
        '3':'url(assets/images/night/03.jpg)',
        '4':'url(assets/images/night/04.jpg)',
        '5':'url(assets/images/night/05.jpg)',
        '6':'url(assets/images/night/06.jpg)',
    }
      
    
],
[
    {   
        '1':'url(assets/images/morning/07.jpg)',
        '2':'url(assets/images/morning/08.jpg)',
        '3':'url(assets/images/morning/09.jpg)',
        '4':'url(assets/images/morning/10.jpg)',
        '5':'url(assets/images/morning/11.jpg)',
        '6':'url(assets/images/morning/12.jpg)',
    },
    {   
        '1':'url(assets/images/day/07.jpg)',
        '2':'url(assets/images/day/08.jpg)',
        '3':'url(assets/images/day/09.jpg)',
        '4':'url(assets/images/day/10.jpg)',
        '5':'url(assets/images/day/11.jpg)',
        '6':'url(assets/images/day/12.jpg)',
    },

    {   
        '1':'url(assets/images/evening/07.jpg)',
        '2':'url(assets/images/evening/08.jpg)',
        '3':'url(assets/images/evening/09.jpg)',
        '4':'url(assets/images/evening/10.jpg)',
        '5':'url(assets/images/evening/11.jpg)',
        '6':'url(assets/images/evening/12.jpg)',
    },
    {   
        '1':'url(assets/images/night/07.jpg)',
        '2':'url(assets/images/night/08.jpg)',
        '3':'url(assets/images/night/09.jpg)',
        '4':'url(assets/images/night/10.jpg)',
        '5':'url(assets/images/night/11.jpg)',
        '6':'url(assets/images/night/06.jpg)',
    }

],
[
    {   
        '1':'url(assets/images/morning/13.jpg)',
        '2':'url(assets/images/morning/14.jpg)',
        '3':'url(assets/images/morning/15.jpg)',
        '4':'url(assets/images/morning/16.jpg)',
        '5':'url(assets/images/morning/17.jpg)',
        '6':'url(assets/images/morning/18.jpg)',
    },
    {   
        '1':'url(assets/images/day/13.jpg)',
        '2':'url(assets/images/day/14.jpg)',
        '3':'url(assets/images/day/15.jpg)',
        '4':'url(assets/images/day/16.jpg)',
        '5':'url(assets/images/day/17.jpg)',
        '6':'url(assets/images/day/18.jpg)',
    },

    {   
        '1':'url(assets/images/evening/13.jpg)',
        '2':'url(assets/images/evening/14.jpg)',
        '3':'url(assets/images/evening/15.jpg)',
        '4':'url(assets/images/evening/16.jpg)',
        '5':'url(assets/images/evening/17.jpg)',
        '6':'url(assets/images/evening/18.jpg)',
    },
    {   
        '1':'url(assets/images/night/13.jpg)',
        '2':'url(assets/images/night/14.jpg)',
        '3':'url(assets/images/night/15.jpg)',
        '4':'url(assets/images/night/16.jpg)',
        '5':'url(assets/images/night/17.jpg)',
        '6':'url(assets/images/night/18.jpg)',
    }

]

]
let i;
if (localStorage.getItem('i') > 0){
    i = localStorage.getItem('i')
    i = parseFloat(i)
    i > 2 ? localStorage.setItem('i',0) : localStorage.setItem('i',i + 1)
    
}
if(localStorage.getItem('i') == 0){
    i = 0
    localStorage.setItem('i',i + 1)
} 
if(localStorage.getItem('i') == null){
    i = 0 
    localStorage.setItem('i',i)
} 


let bgThemes = listThemes[i],
 morningThemes = bgThemes[0],
 dayThemes = bgThemes[1],
 eveningThemes = bgThemes[2],
 nightThemes = bgThemes[3],
 numTheme = 1,
 t = 0;
 
 

const date = document.getElementById('date');
function showDate(){
    let today = new Date(),
        dayOfWeek = today.getDay(),
        dayOfMonth = today.getDate(),
        month = today.getMonth();
        date.innerHTML = `${showRusDayOfWeek(dayOfWeek)}<span>, </span>${dayOfMonth} ${showRusMonth(month)}`
        setTimeout(showDate,1000)
       
}
showDate();
function showRusDayOfWeek(dayOfWeek){
    switch(dayOfWeek){
            case 0:
                return dayOfWeek = 'Воскресенье';
                break;
            case 1:
                return dayOfWeek = 'Понедельник';
                break;
            case 2:
                return dayOfWeek = 'Вторник';
                break;
            case 3:
                return dayOfWeek = 'Среда';
                break;
            case 4:
                return dayOfWeek = 'Четверг';
                break;
            case 5:
                return dayOfWeek = 'Пятница';
                break;
            case 6:
                return dayOfWeek = 'Суббота';
                break;
            default:
                return;    
        }
}
function showRusMonth(month){
    switch(month){
            case 0:
                return month = 'Января';
                break;
            case 1:
                return month = 'Февраля';
                break;
            case 2:
                return month = 'Марта';
                break;
            case 3:
                return month = 'Апреля';
                break;
            case 4:
                return month = 'Мая';
                break;
            case 5:
                return month = 'Июня';
                break;
            case 6:
                return month = 'Июля';
                break;
            case 7:
                return month = 'Августа';
                break;
            case 8:
                return month = 'Сентября';
                break;
            case 9:
                return month = 'Октября';
                break;
            case 10:
                return month = 'Ноября';
                break;
            case 11:
                return month = 'Декабря';
                break;
            default:
                return; 
        }
}


const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');
    
    

 function showTime() {
     let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();

    
    if(sec < 10) sec = '0' + sec;
    if(min < 10) min = '0' + min;
    if(hour < 10) hour = '0' + hour;   


    time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`

    setTimeout(showTime,1000)
 }  

 function setBgGreet () {
     let today = new Date(),
        hour = today.getHours();
        if(hour >= 6 && hour < 12){
            document.body.style.backgroundImage = morningThemes[numTheme];
            document.body.style.backgroundSize = 'cover'
            document.body.style.backgroundPosition = 'center center'
            document.body.style.backgroundRepeat = 'no-repeat'
            document.body.style.backgroundAttachment = 'fixed'
            greeting.textContent = 'Доброе утро, '
        }
        else if(hour >= 12 && hour < 18){
            document.body.style.backgroundImage = dayThemes[numTheme];
            document.body.style.backgroundSize = 'cover'
            document.body.style.backgroundPosition = 'center center'
            document.body.style.backgroundRepeat = 'no-repeat'
            document.body.style.backgroundAttachment = 'fixed'
            greeting.textContent = 'Добрый день, '
        }
        else if(hour >= 18 && hour < 24){
   
            document.body.style.background = eveningThemes[numTheme];
            document.body.style.backgroundSize = 'cover'
            document.body.style.backgroundPosition = 'center center'
            document.body.style.backgroundRepeat = 'no-repeat'
            document.body.style.backgroundAttachment = 'fixed'
            greeting.textContent = 'Добрый вечер, '

            
        }
        else if(hour >= 0 && hour < 6){
            document.body.style.backgroundImage = nightThemes[numTheme];
            document.body.style.backgroundSize = 'cover'
            document.body.style.backgroundPosition = 'center center'
            document.body.style.backgroundAttachment = 'fixed'
            document.body.style.backgroundRepeat = 'no-repeat'
            greeting.textContent = 'Доброй ночи,'
        }
 }
 showTime();
 setBgGreet();
 autoChangeBg();
 getName()
 getFocus()
 
 
 

const changeBgButton = document.getElementById('btn__change__bg') 
  changeBgButton.addEventListener('click',() => {
    if(numTheme > 6){
        t += 1;
        numTheme = 1

    } else {
        numTheme += 1; 
    }
    let today = new Date();
        // hour = today.getHours();
    document.body.style.backgroundImage=bgThemes[t][numTheme];
    document.body.style.transition = '2s ease';
    if(numTheme == 6 && t == 3) {
        numTheme = 0;
        t = 0;
    }

 })

 function autoChangeBg(){
    let today = new Date(),
        hour = today.getHours(); 
        minutes = today.getMinutes();
        seconds = today.getSeconds();
    if(seconds + '0'== '00' && minutes + '0'== '00' ){
        numTheme > 20 ? numTheme = 1 : numTheme += 1;   
        if(hour >= 6 && hour < 12){
           
            document.body.style.backgroundImage = morningThemes[numTheme] 
           
            document.body.style.color = 'white';
            document.body.style.transition = '0.5s ease';
        }
        else if(hour >= 12 && hour < 18){
            document.body.style.backgroundImage = dayThemes[numTheme] 
           
            document.body.style.transition = '0.5s ease';
        }
        else if(hour >= 18 && hour < 24){
            
            document.body.style.backgroundImage = eveningThemes[numTheme]
          
            document.body.style.transition = '0.5s ease';
    
    
        }
        else if(hour >= 0 && hour < 6){
            document.body.style.backgroundImage = nightThemes[numTheme]
            document.body.style.color = 'white';
           
            document.body.style.transition = '0.5s ease';
        }
    }
    setTimeout(autoChangeBg,1000)
 }
 
 //Weather
 const weathe = document.querySelector('.weather');
 const weatherIcon = document.querySelector('.weather-icon');
 const temperature = document.querySelector('.temperature');
 const temperature__icon = document.querySelector('.temperature__icon');
 const pressure = document.querySelector('.pressure');
 const pressure__icon = document.querySelector('.pressure__icon');
 const wind = document.querySelector('.wind');
 const wind__icon = document.querySelector('.wind__icon');
 const humidity = document.querySelector('.humidity');
 const humidity__icon = document.querySelector('.humidity__icon');
 const weatherDescription = document.querySelector('.weather-description');
 const city = document.querySelector('.city');
 if(localStorage.getItem('city') == null) city.textContent = '1'
else city.textContent = localStorage.getItem('city')
 
 
 async function getWeather() {
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.textContent}&lang=ru&appid=7e77892cbba19fd4c0b08efd118a3a62&units=metric`;
   const res = await fetch(url);
   console.log(res)
   const data = await res.json();
   console.log(data);
   if(data.cod == '404'){
    city.textContent = "Город не найден или не введено название населенного пункта. Пожалуйста введите название населенного пункта"
    document.querySelector('.owf').style.display = 'none';
    temperature.textContent = '';
    pressure__icon.style.display = 'none';
    temperature__icon.style.display = 'none';
    wind__icon.style.display = 'none';
    humidity__icon.style.display = 'none';
    pressure.textContent = '';
    wind.textContent = '';
    humidity.textContent = ''; 
    weatherDescription.textContent = ''
    
   }
   if(data.cod == '400'){
       city.textContent = localStorage.getItem('city');
       
       
       
       
   }
   else{
   weatherIcon.className = 'weather-icon owf';
   document.querySelector('.owf').style.display = 'inline-block';
   weatherIcon.classList.add(`owf-${data.weather[0].id}`);
   temperature.textContent = `${data.main.temp.toFixed(0)}°C`;
   pressure.textContent = `${Math.floor((data.main.pressure.toFixed(0) / 10 / 101.3) * 760)} мм.рт.ст`;
   wind.textContent = `${data.wind.speed.toFixed(0)} м/с`;
   humidity.textContent = `${data.main.humidity.toFixed(0)}%`; 
   weatherDescription.textContent = data.weather[0].description;
   localStorage.setItem('city', city.textContent) 
   pressure__icon.style.display = 'block';
    temperature__icon.style.display = 'block';
    wind__icon.style.display = 'block';
    humidity__icon.style.display = 'block';
   }
 }
 
 function setCity(event) {
   if (event.code === 'Enter') {
     getWeather();
     city.blur();
   }
 }
city.addEventListener('click',() => {
    localStorage.setItem('city', city.textContent) 
    city.textContent = ''
    
  })

 document.addEventListener('DOMContentLoaded', getWeather);
 city.addEventListener('keypress', setCity);

 const blockquote = document.querySelector('blockquote');
 const figcaption = document.querySelector('figcaption');
 const btn = document.querySelector('.btn');
 
 async function getQuote() {  
    console.log('i\'m');  
  const url = `https://favqs.com/api/qotd`;
  let res = await fetch(url);
  console.log('here');
  const data = await res.json(); 
  console.log(data);
  blockquote.textContent = data.quote.body;
  figcaption.textContent = data.quote.author;
}
document.addEventListener('DOMContentLoaded', getQuote);
btn.addEventListener('click', getQuote);

// Get Name
function getName() {
    if (localStorage.getItem('name') === null || localStorage.getItem('name') === '') {
      name.textContent = '[Enter Name]';
    } else {
      name.textContent = localStorage.getItem('name');
    }
  }
// Set Name
function setName(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
        if(e.target.innerText == ""){
            getName();
            name.blur();
          }
          else{
            localStorage.setItem('name', e.target.innerText);
            name.blur();
          }
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Get Focus
function getFocus() {
    
  if (localStorage.getItem('focus') === null || localStorage.getItem('focus') === '') {
    focus.textContent = '[Enter your focus]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Set Focus
function setFocus(e) {
  if (e.type === 'keypress') {
    // Make sure enter is pressed
    if (e.which == 13 || e.keyCode == 13) {
      if(e.target.innerText == ""){
        getFocus();
        focus.blur();
      }
      else{
        localStorage.setItem('focus', e.target.innerText);
        focus.blur();
      }
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
name.addEventListener('click', (e) =>{
    e.target.innerText = ''
    
})
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);
focus.addEventListener('click', (e) =>{
    e.target.innerText = ''
   
})

