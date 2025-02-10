function sendEmail() {
    const formData = new FormData(document.getElementById('echoForm'));
    const data = {};

    formData.forEach((value, key) => {
        data[key] = value;
    });

    const jsonData = JSON.stringify(data);

    // Using emailjs to send the email
    emailjs.init("YOUR_EMAILJS_USER_ID"); // Replace with your EmailJS user ID
    emailjs.send("YOUR_EMAILJS_SERVICE_ID", "YOUR_EMAILJS_TEMPLATE_ID", {
        message: jsonData, // Send the JSON data in the email body
        to_email: "fun.diagnostyka@gmail.com", // Recipient email
        subject: "Echocardiography Data" // Email subject
    })
    .then(function(response) {
        alert("Email sent successfully!");
        document.getElementById("echoForm").reset(); // Clear the form
    }, function(error) {
        alert("Email sending failed: " + error);
    });
}