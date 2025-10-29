

function sendMail(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    fetch("https://formspree.io/f/mvgvzqgn", {
        method: "POST",
        body: new FormData(event.target),
        headers: {
            'Accept': 'application/json'
        }
    }).then(() => {
        alert('Mail wurde gesendet!')
    }).catch((error) => {
        console.log(error);
    });
}