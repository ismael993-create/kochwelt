const input = document.querySelector('.inputChanger');
const btn = document.querySelector('.changerBtn');
const zutaten = document.querySelectorAll('.zutatenBox');
const BASIS = 4;
const MIN = 1, MAX = 15;

if (input) {
  input.addEventListener('input', () => {
    if (input.value === '') return;
    let v = Math.round(Number(input.value));
    if (isNaN(v)) { input.value = ''; return; }
    if (v > MAX) v = MAX;
    if (v < MIN) v = MIN;
    input.value = v;
  });

  input.addEventListener('paste', (e) => {
    const txt = (e.clipboardData || window.clipboardData).getData('text');
    const v = Math.round(Number(txt));
    if (isNaN(v)) { e.preventDefault(); return; }
    e.preventDefault();
    input.value = Math.min(Math.max(v, MIN), MAX);
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });
}

if (btn) {
  btn.addEventListener('click', () => {
    if (!input || input.value.trim() === '') { alert('Bitte Zahl eingeben.'); return; }
    let neue = Math.round(Number(input.value));
    if (isNaN(neue)) { alert('Ungültig.'); return; }
    neue = Math.min(Math.max(neue, MIN), MAX);
    input.value = neue;

    zutaten.forEach(z => {
      const orig = parseFloat(z.dataset.menge);
      const einheit = z.dataset.einheit || '';
      const span = z.querySelector('.menge');
      if (!isNaN(orig) && span) {
        let m = (orig / BASIS) * neue;
        m = Number.isInteger(m) ? m : +m.toFixed(1);
        span.textContent = einheit ? `${m} ${einheit}` : m;
      }
    });
  });
}




// Toogle-theme
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
