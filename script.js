// script.js

const submitButton = document.getElementById('submit-button');
const authButtons = document.getElementById('auth-buttons');


submitButton.addEventListener('click', () => {
    authButtons.classList.remove('hidden');
});



