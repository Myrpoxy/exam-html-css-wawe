// function sendForm(){
//     let name = document.getElementById('contactName').value;
//     let phone = document.getElementById('contactTel').value;
//     let message = document.getElementById('contactMsg').value;
// }


// (function() {
//     emailjs.init(userID);

//     const form = document.getElementById('contactForm');
//     form.addEventListener('submit', function(event) {
//         event.preventDefault();

//         emailjs.sendForm(serviceID, templateID, this)
//             .then(function() {
//                 alert('Письмо отправлено!');
//             }, function(error) {
//                 alert('Ошибка: ' + JSON.stringify(error));
//             });
//     });
// })();


const userID = "";
const serviceID = "";
const templateID = "";
const url = "https://api.emailjs.com/api/v1.0/email/send";
const nameInput = document.getElementById('contactName');
const phoneInput = document.getElementById('contactTel');
const messageInput = document.getElementById('textMsg');
const contactForm = document.getElementById('contactForm');


async function sendForm(event) {
    event.preventDefault();

    const data = {
        service_id: serviceID,
        template_id: templateID,
        user_id: userID,
        template_params: {
            'name': nameInput.value,
            'tel': phoneInput.value,
            'message': messageInput.value
        }
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if(response.ok) {
        alert('Your mail is sent!');
    }
    else {
        alert('Oops... ' + JSON.stringify(response));
    }
}

contactForm.addEventListener('submit', sendForm);