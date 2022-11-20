/* ================ LOADER =============== */ 
onload = () => {
    const load =  document.getElementById('load')

    setTimeout(()=> {
        load.style.display = 'none'
    }, 2500)
}

/* ================ SHOW MENU =============== */ 
const navMenu = document.getElementById('nav-menu'); 
const navClose = document.getElementById('nav-close');
const navToggle = document.getElementById('nav-toggle');

/* ====== MENU SHOW ===== */ 
/* Validate if constant exists */ 
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

/* ====== MENU SHOW ===== */ 
/* Validate if constant exists */ 
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* ================ REMOVE MENU MOBILE =============== */ 
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // when we click each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* ================ CHANGE BACKGROUD HEADER =============== */ 
function scrollHeader(){
    const header = document.getElementById('header');
    // when the scroll is greater than 50 viewport height, and the the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader)

/* ================ MIXTUP FILTER PRODUCT =============== */
let mixerProduct = mixitup('.product__content', {
    selectors: {
        target: '.product__card'
    },
    animation: {
        duration: 300
    }
}); 

/* Default filter product */ 
mixerProduct.filter('.delicacies')

/* Link active product */ 
const LinkProduct = document.querySelectorAll('.product__item')

function activeProduct() {
    LinkProduct.forEach(l=> l.classList.remove('active-product'))
    this.classList.add('active-product')
}
LinkProduct.forEach(l=> l.addEventListener('click', activeProduct))

/* ================ SHOW SCROLL UP =============== */
function scrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    // when the scroll is higher than 350 viewport height, and the the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* ================ SCROLL SECTION ACTIVE LINK =============== */
const section = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    section.forEach(current => {
        const   sectionHeight = current.offsetHeight,
                sectionTop = current.offsetTop - 58,
                sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        } else {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)