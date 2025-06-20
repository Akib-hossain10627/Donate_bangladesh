function getInputFieldValueById(id) {
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

function getTextFieldValueById(id) {
    const textValue = document.getElementById(id).innerText;
    const textNumber = parseFloat(textValue);
    return textNumber;
}

function resetBalance() {
    localStorage.removeItem('mainBalance');
    // reload to apply default
    location.reload();
}

window.addEventListener('DOMContentLoaded', () => {
    const savedBalance = localStorage.getItem('mainBalance');
    if (savedBalance !== null) {
        document.getElementById('main-balance').innerText = savedBalance;
    }
});



