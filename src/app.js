//PARALLAX FUNCTIONALITY..............................

window.addEventListener('scroll', () => {
    let wScroll = this.pageYOffset;

    //HEADER PARALLAX
    let logo = document.querySelector('.siteHeader__logo');
    logo.style.transform = 'translate(0, '+ wScroll / 3 + '%)';

    //WELCOME PARALLAX
    let welcome = document.querySelector('.welcome');
    let welcomeImg = document.querySelector('.welcome__image');

    if(wScroll > welcome.offsetTop - (window.innerHeight / 1)) {
        welcomeImg.style.transform = 'translate(0px,' + wScroll / -20 + '%)';
    }
    
});


//GALLERY MODAL AND SLIDER FUNCTIONALITY...............

let myImages = document.querySelectorAll('.gallery__img');
let modal = document.querySelector('.galleryModal');
let closeBtn = document.querySelector('.closeBtn');
let current = document.querySelector('.current');
let next = document.querySelector('.nextBtn');
let prev = document.querySelector('.prevBtn');
let newSrc = [];

//OPEN MODAL ON IMAGE CLICK
myImages.forEach(img => {
    img.addEventListener('click', (e) => {
        modal.style.display = 'block';
        current.src = e.target.src;
        console.log(current.src)
    })
})

//CLOSE MODAL
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
})

//SLIDER FUNCTIONALITY  



