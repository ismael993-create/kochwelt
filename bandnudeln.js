// ===============================
// PORTIONSRECHNER
// ===============================

const input = document.querySelector('.inputChanger');
const btn = document.querySelector('.changerBtn');
const zutaten = document.querySelectorAll('.zutatenBox');

const BASIS = 4;
const MIN = 1;
const MAX = 15;

if (input) {
  input.addEventListener('input', () => {
    if (input.value === '') return;

    let value = Math.round(Number(input.value));

    if (isNaN(value)) {
      input.value = '';
      return;
    }

    if (value > MAX) value = MAX;
    if (value < MIN) value = MIN;

    input.value = value;
  });

  input.addEventListener('paste', (e) => {
    const text = (e.clipboardData || window.clipboardData).getData('text');
    let value = Math.round(Number(text));

    if (isNaN(value)) {
      e.preventDefault();
      return;
    }

    e.preventDefault();
    value = Math.min(Math.max(value, MIN), MAX);
    input.value = value;
    input.dispatchEvent(new Event('input', { bubbles: true }));
  });
}

if (btn && input && zutaten.length > 0) {
  btn.addEventListener('click', () => {

    if (input.value.trim() === '') {
      alert('Bitte eine Zahl eingeben.');
      return;
    }

    let neuePortion = Math.round(Number(input.value));

    if (isNaN(neuePortion)) {
      alert('Ungültige Eingabe.');
      return;
    }

    neuePortion = Math.min(Math.max(neuePortion, MIN), MAX);
    input.value = neuePortion;

    zutaten.forEach(zutat => {
      const originalMenge = parseFloat(zutat.dataset.menge);
      const einheit = zutat.dataset.einheit || '';
      const mengeSpan = zutat.querySelector('.menge');

      if (!isNaN(originalMenge) && mengeSpan) {
        let neueMenge = (originalMenge / BASIS) * neuePortion;

        neueMenge = Number.isInteger(neueMenge)
          ? neueMenge
          : +neueMenge.toFixed(1);

        mengeSpan.textContent = einheit
          ? `${neueMenge} ${einheit}`
          : neueMenge;
      }
    });

  });
}


// ===============================
// DARK / LIGHT MODE
// ===============================

const themeSwitch = document.querySelector('#themeSwitch');
const body = document.body;

if (themeSwitch) {

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
}


// ===============================
// RESPONSIVE MENU
// ===============================

const box = document.getElementById('resp_menu');
const btnOpen = document.getElementById('menuToggle');
const btnClose = document.getElementById('menuClose');

function openClosedRespmenu() {
  if (!box) return;

  if (box.classList.contains('closed_menu')) {
    box.classList.remove('closed_menu');
    box.setAttribute('aria-hidden', 'false');
  } else {
    box.classList.add('closed_menu');
    box.setAttribute('aria-hidden', 'true');
  }
}

if (btnOpen && btnClose && box) {
  btnOpen.addEventListener('click', openClosedRespmenu);
  btnClose.addEventListener('click', openClosedRespmenu);
}