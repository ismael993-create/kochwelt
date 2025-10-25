const form = document.getElementById("kontaktFeld");
form.addEventListener('submit', function(event){
    event.preventDefault();// verhindert neuladen der Seite
    const name = document.getElementById('deinName').value;
    const eMail = document.getElementById('deineEmail').value;
    const nachricht = document.getElementById('deineNachricht').value;
    console.log('Kontaktfeld:');
    console.log('Name:', name);
    console.log('E-Mail:', eMail);
    console.log('Nachricht:', nachricht);

});