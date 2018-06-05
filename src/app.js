//NAVIGATION    

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  const navigation = document.querySelector('.navigation')
  const navCheckbox = navigation.querySelector('.navigation__checkbox')
  const navItems = navigation.querySelectorAll('.navigation__list--item')
  navItems.forEach(item =>
      item.addEventListener('click', _ => navCheckbox.checked = false))



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


//TESTIMONIALS SLIDER
$(document).ready(function(){
    $('.testimonials__cardsWrap').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        centerMode: true,
        centerPadding: '60px',
        autoplay: true
    });
  });


