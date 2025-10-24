

 function moreItems(data_pro_menge) {
let personen = document.getElementById("personen").value;
let liste = document.getElementById("zutatenListe");
  let zutaten = liste.getElementsByTagName("li");
  for (let i = 0; i < zutaten.length; i++) { let proMenge = zutaten[i].getAttribute("data_pro_menge");
    let einheit = zutaten[i].getAttribute("data-einheit");
 let neueMenge = proMenge * personen;
   neueMenge = neueMenge.toFixed(2);
   zutaten[i].getElementsByClassName("menge")[0].textContent = neueMenge;
  }
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