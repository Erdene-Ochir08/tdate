document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("IBjfjHLbfCQuiVlYK"); // Replace with your EmailJS API key
});
const text = document.querySelector(".text");
text.innerText="Hey!.. Long time no see. Thank you for meeting me all this time. If I've made you uncomfortable for any reason, I am really sorry. Meeting you has been full of excitement and happiness. Recently, I realized that no one else makes me feel the way you do... I really want to see you again and listen to new K-pop releases together and talk about our relationship :)";
document.getElementById('sendButton').addEventListener('click', function() {
    var templateParams = {
        to_name: 'Recipient Name',
        from_name: 'Your Name',
        message: 'This is a test message'
    };

    emailjs.send('service_3632rnn', 'template_0812kjs', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
            console.log('FAILED...', error);
            // alert('Failed to send email.');
        });
});

