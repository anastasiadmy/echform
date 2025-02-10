function saveToFile() {
    const formData = new FormData(document.getElementById('echoForm'));
    const data = {};

    for (let [key, value] of formData.entries()) {
        data[key] = value;
    }

    const jsonData = JSON.stringify(data, null, 2); // Beautify JSON output
    const blob = new Blob([jsonData], { type: 'application/json' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'echo_data.json';
    link.click();
}
