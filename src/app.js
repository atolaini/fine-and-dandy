//Header parallax
window.addEventListener('scroll', function() {
    let wScroll = this.pageYOffset;
    let logo = document.querySelector('.siteHeader__logo');

    logo.style.transform = 'translate(0, '+ wScroll / 3 + '%)';
});