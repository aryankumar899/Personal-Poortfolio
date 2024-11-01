document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page reload

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        // Example: You can use the Fetch API here to send the form data to your server
        fetch('/api/send-message', { method: 'POST', body: JSON.stringify({ name, email, message }) });

        document.getElementById('responseMessage').textContent = 'Thank you! Your message has been sent.';
        document.getElementById('contactForm').reset();
    } else {
        document.getElementById('responseMessage').textContent = 'Please fill out all fields.';
    }
});
