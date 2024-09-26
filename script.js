document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Extract values from the form
    const fullName = document.getElementById('full-name').value;
    const phone = document.getElementById('phone').value;
    const comments = document.getElementById('comments').value;

    // Mock sending an email (replace with actual email sending functionality)
    console.log(`Sending email to test111@gmail.com\nName: ${fullName}\nPhone: ${phone}\nComments: ${comments}`);

    // Hide the form
    this.style.display = 'none';

    // Create a message element
    const message = document.createElement('p');
    message.textContent = 'בקשתך נשלחה בהצלחה.';
    message.style.color = 'white'; // Set text color to white for visibility
    message.style.fontSize = '1.5em'; // Optional: increase font size
    message.style.marginTop = '20px'; // Optional: add some margin

    // Append the message to the container
    document.querySelector('.container').appendChild(message);
});
