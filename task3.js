document.addEventListener("DOMContentLoaded", function() {
    const inputField = document.getElementById('input');
    const buttons = document.querySelectorAll('.button');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonValue = button.innerText;

            if (buttonValue === 'AC') {
                inputField.value = '';
            } else if (buttonValue === '=') {
                try {
                    inputField.value = eval(inputField.value);
                } catch (error) {
                    inputField.value = 'Error';
                }
            } else {
                inputField.value += buttonValue;
            }
        });
    });
});
