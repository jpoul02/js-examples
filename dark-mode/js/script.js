const toogleButton = document.getElementById('theme-toggle');

toogleButton.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
})