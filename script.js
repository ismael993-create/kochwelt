const themeSwitch = document.querySelector('#themeSwitch');
const body = document.body;

// damit die seite direkt dunkel lädt
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    themeSwitch.textContent = '🌞 Hell';
}

//function zum wechsel zwischen hell und dunkel
function toggleTheme() {

    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
    themeSwitch.textContent = '🌞 Hell';
    localStorage.setItem('theme', 'dark');
  } else {
    themeSwitch.textContent = '🌙 Dunkel';
    localStorage.setItem('theme', 'light');
  }
}

themeSwitch.addEventListener('click', toggleTheme);


<<<<<<< HEAD



//bandnudel-rezept.html code
const inputChanger = document.querySelector('.inputChanger');
const changerBtn = document.querySelector('.changerBtn');
const zutaten = document.querySelectorAll('.zutatenBox');

const basisPortionen = 4; // Originalwert entspricht 4 Portionen

changerBtn.addEventListener('click', () => {
    const neuePortionen = parseFloat(inputChanger.value);
    
    if(isNaN(neuePortionen) || neuePortionen <= 0){
        alert('Bitte eine gültige Zahl eingeben.');
        return;
    }

    zutaten.forEach(zutat => {
        const originalMenge = parseFloat(zutat.dataset.menge);
        const einheit = zutat.dataset.einheit;
        const mengeSpan = zutat.querySelector('.menge');

        if(!isNaN(originalMenge)){
            let neueMenge = (originalMenge / basisPortionen) * neuePortionen;
            
            
            neueMenge = Number.isInteger(neueMenge) ? neueMenge : neueMenge.toFixed(1);

            mengeSpan.textContent = einheit ? `${neueMenge} ${einheit}` : neueMenge;
        }
    });
});

//bandnudel-rezept.html Code

