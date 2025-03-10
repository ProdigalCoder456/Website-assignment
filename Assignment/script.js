let person = prompt("Please enter your name", "Name");
let text;
if (person == null || person == "") {
  text = "User cancelled the prompt.";
} else {
  text = "Hello " + person + "! How are you today?";
}

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