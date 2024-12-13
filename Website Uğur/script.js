// script.js
document.addEventListener('DOMContentLoaded', () => {
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            alert('Thank you for your interest!');
        });
    });
});
