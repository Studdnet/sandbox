var next = document.getElementById('next');
var prew = document.getElementById('prew');

var slides = document.getElementsByClassName('slide');

for (let i = 0; i < slides.length; i++) {
    slides[i].style.zIndex = slides.length - i;
}

next.onclick = function() {
    var activeElement = document.querySelector('.active');
        if (activeElement.nextElementSibling) {
            activeElement.style.left = '-100%';
            activeElement.classList.remove('active');
            activeElement.nextElementSibling.classList.add('active');
            this.classList.remove('no_active');
            prew.classList.remove('no_active');

            if (!activeElement.nextElementSibling.nextElementSibling) {
                this.classList.add('no_active');
            }
        }
}

prew.onclick = function() {
    var activeElement = document.querySelector('.active');
        if (activeElement.previousElementSibling) {
            activeElement.previousElementSibling.style.left = '0%';
            activeElement.classList.remove('active');
            activeElement.previousElementSibling.classList.add('active');
            this.classList.remove('no_active');
            prew.classList.remove('no_active');
            
            if (!activeElement.previousElementSibling.previousElementSibling) {
                this.classList.add('no_active');
            }
        }
}