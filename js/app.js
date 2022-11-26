function sendMail() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
       event.preventDefault();

       emailjs.sendForm('service_g291p1l', 'template_1snrw1d', '#contact-form')
          .then(function() {
            console.log('SUCCESS!');

            let success = document.getElementById('sendButton');


            let contactForm = document.getElementById('contact-form');

            contactForm.reset()

            success.innerHTML = "Message Sent";

            success.style.backgroundColor = "green";

            setInterval(() => window.location.reload(true), 3000);
        },  function(error) {
             console.log('FAILED...', error);
           });
       });
    }

  
