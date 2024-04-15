

(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "rWqeOSGzIJe0Sda96",
    });
})();


window.onload = function() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        // these IDs from the previous steps
        emailjs.sendForm('service_8dc8wu8', 'template_r36lot7', this)
            .then(() => {
                console.log('SUCCESS!');
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
}