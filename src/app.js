window.addEventListener('scroll', () => {
    let wScroll = this.pageYOffset;

    //HEADER PARALLAX
    let logo = document.querySelector('.siteHeader__logo');
    logo.style.transform = 'translate(0, '+ wScroll / 3 + '%)';

    //WELCOME PARALLAX
    let welcomeImge = document.querySelector('.welcome__image');
    
});