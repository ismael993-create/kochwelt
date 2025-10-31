



let box = document.getElementById('resp_menu');
let btnOpen = document.getElementById('menuToggle');
let btnClose = document.getElementById('menuClose');

function openClosedRespmenu() {
  if (box.classList.contains('closed_menu')) {
    box.classList.remove('closed_menu');
    box.setAttribute('aria-hidden', 'false');
  } else {
    box.classList.add('closed_menu');
    box.setAttribute('aria-hidden', 'true');
  }
}


btnOpen.onclick = openClosedRespmenu;
btnClose.onclick = openClosedRespmenu;

const themeSwitch = document.querySelector('#themeSwitch');
const body = document.body;


if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark');
    themeSwitch.textContent = '🌞 Hell';
}


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

const inputChanger = document.querySelector('.inputChanger');
const changerBtn = document.querySelector('.changerBtn');
const zutaten = document.querySelectorAll('.zutatenBox');

const BASIS = 4;
const MIN = 1;
const MAX = 15;

// live verhindern (Tippen)
if (inputChanger) {
  inputChanger.addEventListener('input', () => {
    if (inputChanger.value === '') return;
    let v = Math.round(Number(inputChanger.value));
    if (isNaN(v)) { inputChanger.value = ''; return; }
    v = Math.min(Math.max(v, MIN), MAX);
    inputChanger.value = v;
  });

  // Paste abfangen
  inputChanger.addEventListener('paste', (e) => {
    const txt = (e.clipboardData || window.clipboardData).getData('text');
    const v = Math.round(Number(txt));
    if (isNaN(v)) { e.preventDefault(); return; }
    e.preventDefault();
    inputChanger.value = Math.min(Math.max(v, MIN), MAX);
    inputChanger.dispatchEvent(new Event('input', { bubbles: true }));
  });
}

// Button: prüfen + Zutaten anpassen
if (changerBtn) {
  changerBtn.addEventListener('click', () => {
    if (!inputChanger || inputChanger.value.trim() === '') { alert('Bitte Zahl eingeben.'); return; }
    let neuePortionen = Math.round(Number(inputChanger.value));
    if (isNaN(neuePortionen)) { alert('Ungültig.'); return; }
    neuePortionen = Math.min(Math.max(neuePortionen, MIN), MAX);
    inputChanger.value = neuePortionen;

    zutaten.forEach(z => {
      const orig = parseFloat(z.dataset.menge);
      const einheit = z.dataset.einheit || '';
      const span = z.querySelector('.menge');
      if (!isNaN(orig) && span) {
        let m = (orig / BASIS) * neuePortionen;
        m = Number.isInteger(m) ? m : +m.toFixed(1);
        span.textContent = einheit ? `${m} ${einheit}` : m;
      }
    });
  });
}



