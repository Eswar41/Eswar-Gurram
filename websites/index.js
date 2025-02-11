const scriptURL = 'https://script.google.com/macros/s/AKfycbwXmmqrV_teDYI5yX7rwIHcmRIBywDuK10hlgigekAkZgOlYXVXYNLZtfHNxg-9zvyVag/exec'
const form = document.forms['contact-form']
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new FormData(form)})
    .then(response =>alert("Thank you! your form issubmitted successfully."))
    .then(() =>{ window.location.reloaded();})
    .catch(error => console.error('Error!', error.message))
})