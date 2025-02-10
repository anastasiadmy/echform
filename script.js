function sendEmail() {
    const formData = new FormData(document.getElementById('echoForm'));

    // Convert form data to a string (you can customize the format)
    let message = "";
    for (let [key, value] of formData.entries()) {
        message += `${key}: ${value}\n`;
    }

    //
