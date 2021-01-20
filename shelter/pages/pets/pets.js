const pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlet.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ]
let petName = '',
    popup = document.querySelector('.popup'),
    popupPetImg = document.querySelector('.popup__pet__img'), 
    popupPetName = document.querySelector('.popup__pet__name'),
    popupPetTypeBreed = document.querySelector('.popup__pet__type__breed'),
    popupPetDescription = document.querySelector('.popup__pet__description'),
    popupPetAge = document.querySelector('.popup__pet__age'),
    popupPetInoculations = document.querySelector('.popup__pet__inoculations'),
    popupPetDiseases = document.querySelector('.popup__pet__deseases'),
    popupPetParasites = document.querySelector('.popup__pet__parasites'),
    popupTextContent = document.querySelector('.popup__text__content'),
    popupContent = document.querySelector('.popup__content'),
    popupUnnamedList = document.querySelector('.properties__list'),
    popupListItem = document.querySelector('.li'),
    popupImg = document.querySelector('.popup__img'),
    popupBody = document.querySelector('.popup__body');


document.addEventListener('click', (e) => {
  
    if(e.target.parentNode.classList.contains("pets__card") || e.target.classList.contains("pets__card")) {
        popup.style.opacity = "100"
        popup.style.visibility = "visible"

        if(e.target.parentNode.classList.contains("pets__card")){
             petName = e.target.parentElement.children[1].textContent;
        }
        if (e.target.classList.contains("pets__card")){
             petName = e.target.children[1].textContent;
        }
           
        pets.forEach(pet => {
            if(petName == pet.name){
                popupPetImg.src = pet.img
                popupPetName.innerText = pet.name
                popupPetTypeBreed.innerText = `${pet.type}-${pet.breed}`
                popupPetDescription.innerText = pet.description;
                popupPetAge.innerHTML = pet.age;
                popupPetInoculations.innerText = pet.inoculations.join();
                popupPetDiseases.textContent = pet.diseases.join();
                popupPetParasites.textContent = pet.parasites.join();
            } 
        })
    }
})

popup.addEventListener('click', (e) => {
    if(e.target.parentNode == popupImg || e.target.parentNode == popupUnnamedList || e.target.parentNode == popupTextContent || e.target == popupTextContent ){
        popup.style.opacity = "100"
        popup.style.visibility = "visible"
    } else {
        popup.style.opacity = "0"
        popup.style.visibility = "hidden"
    }
   
})

popup.addEventListener('mouseover', (e) => {
    if(e.target.parentNode == popupImg || e.target.parentNode == popupUnnamedList || e.target.parentNode == popupTextContent || e.target == popupTextContent || e.target == popupContent || e.target.parentNode == popupListItem){
        popupBody.style.background = 'rgba(0, 0, 0, 0.8)';
    } else {
        popupBody.style.background = 'rgba(0, 0, 0, 0.5)';
    }
   
})





//Burger menu

let burgerButton = document.querySelector('.btn__burger'),
     burgerMenu = document.getElementById('burger__menu'),
     overlay = document.querySelector('.overlay'),
     burgerMenuButton = document.getElementById('btn__burger__menu'),
     mainLogo = document.querySelector('.logo');
     mainHeader = document.querySelector('.header'),
     linkFor = document.querySelector('.linkFor'),
     

linkFor.addEventListener('click', () => {
  
    mainLogo.style.opacity = '100';
    mainLogo.style.visibility = 'visible';
    burgerButton.style.opacity = '100';
    burgerButton.style.visibility = 'visible';
    let isOpen = burgerMenu.classList.contains('slide-in');
    if(isOpen == true){
        burgerMenu.setAttribute('class','slide-out')
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden'

    } else {
        burgerMenu.setAttribute('class','slide-in')
        overlay.style.opacity = '100';
        overlay.style.visibility = 'visible'
        
    }
});
burgerButton.addEventListener('click', () => {
    mainHeader.style.position = 'static';
    mainLogo.style.opacity = '0';
    mainLogo.style.visibility = 'hidden';
    burgerButton.style.opacity = '0';
    burgerButton.style.visibility = 'hidden';
    burgerMenu.style.opacity = '100';
    let isOpen = burgerMenu.classList.contains('slide-in');
    if(isOpen == true){
        burgerMenu.setAttribute('class','slide-out')
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden'; 
    } else {  
        burgerMenu.setAttribute('class','slide-in')
        overlay.style.opacity = '100';
        overlay.style.visibility = 'visible';
    }
});
overlay.addEventListener('click', () => {
    mainLogo.style.opacity = '100';
    mainLogo.style.visibility = 'visible';
    burgerButton.style.opacity = '100';
    burgerButton.style.visibility = 'visible';
    let isOpen = burgerMenu.classList.contains('slide-in');
    if(isOpen == true){
        burgerMenu.setAttribute('class','slide-out')
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden'

    } else {
        burgerMenu.setAttribute('class','slide-in')
        overlay.style.opacity = '100';
        overlay.style.visibility = 'visible'
        
    } 
});
burgerMenuButton.addEventListener('click', () => {
    mainLogo.style.opacity = '100';
    mainLogo.style.visibility = 'visible';
    burgerButton.style.opacity = '100';
    burgerButton.style.visibility = 'visible';
    
    let isOpen = burgerMenu.classList.contains('slide-in');
    if(isOpen == true){
        burgerMenu.setAttribute('class','slide-out')
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden'

    } else {
        burgerMenu.setAttribute('class','slide-in')
        overlay.style.opacity = '100';
        overlay.style.visibility = 'visible'
        
    } 
});


burgerButton.addEventListener('click', () => {
    let isOpen = burgerMenu.classList.contains('slide-in');
    if(isOpen == true){
        burgerMenuButton.setAttribute('class','open')
        
        
    } else {
        burgerMenuButton.setAttribute('class','closed')
        
    }
});
burgerMenu.addEventListener('click', () => {
    
    let isOpen = burgerMenu.classList.contains('slide-in');
    if(isOpen == true){
        burgerMenuButton.setAttribute('class','open')
        
    } else {
        burgerMenuButton.setAttribute('class','closed')
        
    }
});


window.addEventListener('resize', (e) => {
    burgerMenu.style.opacity = '0';
  });

