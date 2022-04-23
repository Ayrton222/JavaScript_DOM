function changeMode(){
    //console.log('cliquei');
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle(darkModeClass); 
    h1.classList.toggle(darkModeClass); 
    body.classList.toggle(darkModeClass); 
    footer.classList.toggle(darkModeClass); 
}

function changeText(){
    const lightmode = "Light Mode";
    const darkmode = "Dark Mode";
    //vai verificar se exsite a classe dark-mode
    if(body.classList.contains(darkModeClass)){
        button.innerHTML = lightmode;
        h1.innerHTML = darkmode + " ON";
        return;
    }
    button.innerHTML = darkmode;
    h1.innerHTML = lightmode + " ON";
}

const darkModeClass = 'dark-mode'
const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0]; // para nao retornar como uma array tem q colcoar o index
const footer = document.getElementsByTagName('footer')[0]; 

button.addEventListener('click', changeMode)