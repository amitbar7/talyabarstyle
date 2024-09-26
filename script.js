document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Extract values from the form
    const fullName = document.getElementById('full-name').value;
    const phone = document.getElementById('phone').value;
    const comments = document.getElementById('comments').value;

    // Mock sending an email (replace with actual email sending functionality)
    console.log(`Sending email to test111@gmail.com\nName: ${fullName}\nPhone: ${phone}\nComments: ${comments}`);

    alert('Your message has been sent!');

    // Optionally, clear the form
    this.reset();
});
