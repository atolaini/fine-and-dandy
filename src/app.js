window.addEventListener('scroll', () => {
    let wScroll = this.pageYOffset;

    //HEADER PARALLAX
    let logo = document.querySelector('.siteHeader__logo');
    logo.style.transform = 'translate(0, '+ wScroll / 3 + '%)';

    //WELCOME PARALLAX
    let welcome = document.querySelector('.welcome');
    let welcomeImg = document.querySelector('.welcome__image');

    if(wScroll > welcome.offsetTop - (window.innerHeight / 2)) {
        welcomeImg.style.transform = 'translate(0,' + wScroll / -57 + '%)';
    }

});