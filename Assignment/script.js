const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (event) => {

    event.preventDefault();
    

    if (!document.getElementById('name').value || !document.getElementById('email').value) {

        alert('Please fill in your name and email.');

        return;

    }


    fetch('/submit-contact', {

        method: 'POST',

        body: new FormData(contactForm)

    })

    .then(response => {

        

    })

    .catch(error => {

        

    });

});