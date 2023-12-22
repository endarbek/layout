const email = document.querySelector('.email');


email.addEventListener('focus', function() {
    this.parentNode.classList.add('focused')
})

email.addEventListener('blur', function() {
    this.parentNode.classList.remove('focused')
})