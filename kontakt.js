

function sendMail(event) {
  event.preventDefault();

  fetch("https://formspree.io/f/mvgvzqgn", {
    method: "POST",
    body: new FormData(event.target),
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(() => {
    alert('Mail wurde gesendet!');
    event.target.reset(); 
  })
  .catch((error) => {
    console.log(error);
  });
}

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
