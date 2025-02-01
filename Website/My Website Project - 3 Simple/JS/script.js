// ========================================
//  header nav
//  ========================================
const mobile_nav_Button = document.querySelector(".mobile-navbar-btn");
const Header_Elm = document.querySelector(".header");

mobile_nav_Button.addEventListener("click", () => {
  Header_Elm.classList.toggle("active");
});



// ========================================
//  Header Nav Hide
//  ========================================
// const Nav_link = document.querySelector(".navbar-link");
// const Mobile_Nav_Button = document.querySelector(".mobile-navbar-btn");

// Nav_link.forEach(function(a) {
//   a.addEventListener("click", function(){
//     Mobile_Nav_Button.classList.remove("show");
//   })
// })



// ========================================
//  Create Sticky Header
//  ========================================
// https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect

const heroSection = document.querySelector(".section-hero");

const observer = new IntersectionObserver( (entries) => {
  const ent = entries[0];
  // console.log(ent);
  !ent.isIntersecting ? document.body.classList.add("sticky") : document.body.classList.remove("sticky");
  }, {
      // viewport
      root: null,
      threshold: 0,
      rootMargin: "-100px",
  }
);
// when the hero section end part reached then we need to show the sticky navigation
observer.observe(heroSection);



var swiper = new Swiper(".Main_Slider", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});






// ========================================
//  creating a portfolio tabbed component
//  ========================================
const port_btn = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const img_div = document.querySelectorAll(".img-ovelay");

port_btn.addEventListener("click", (e) => {
  // we will get which child element was clicked
  const p_btn_clicked = e.target;
  console.log(p_btn_clicked);

  // always remove the classList first then add the class
  p_btn.forEach((curElem) => {
    curElem.classList.remove("p-btn-active");
  });

  // always AD the classList first then add the class
  p_btn_clicked.classList.add("p-btn-active");

  // to find the number in date attr
  const btn_num = p_btn_clicked.dataset.btnNum;
  console.log(btn_num);

  // to find the images Number class ( p-btn--1, p-btn--2, p-btn--3 )
  const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

  // to find image class ( p-image-not-active ) display - none
  img_div.forEach((curElem) => {
    curElem.classList.add("p-image-not-active");
  });

  // to find image class remove ( p-image-not-active ) display - active
  img_active.forEach((curElem) => {
    curElem.classList.remove("p-image-not-active");
  });
});



// ========================================
//  work completed counter section Start
//  ========================================

const workSection = document.querySelectorAll(".section-work-data");
const counterNum = document.querySelectorAll(".counter-numbers");
const speed = 300;

counterNum.forEach((curElem) => {

  const updateNumber = () => {
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(targetNumber);

    const intialNum = parseInt(curElem.innerText);
    // console.log(intialNum);

    // Suggested code may be subject to a license. Learn more: ~LicenseLog:1364057432.
    const incrementNumber = Math.trunc(targetNumber/speed);
    // console.log(incrementNumber);

    if(intialNum < targetNumber){
      curElem.innerText = `${intialNum + incrementNumber}+`;
      setTimeout(updateNumber, 10);
    }
  };

  updateNumber();
});




// ========================================
//  Testimonial Swiper Queries Section
// ========================================
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 30,
  // centeredSlides: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});



// ========================================
//  Scroll To Top Functionality
//  ========================================

const footerElm = document.querySelector(".section-footer");
// const heroSection = document.querySelector(".section-hero");

// DIV Create
const scrollElement = document.createElement("div");
scrollElement.classList.add("scrolltop-style");

// DIV Ma Icon Create
scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`;

// footer ma Affter Ma Ad Kariyo
footerElm.after(scrollElement);

// Click Ma Event Ad Kari
const scrollTop = () => {
  heroSection.scrollIntoView({ behavior: "smooth" });
};

scrollElement.addEventListener("click", scrollTop);



// ========================================
//  Click ID : Scroll Smooth
//  ========================================

const Section_Biodeta = document.querySelector(".section-biodata");
const Section_Portfolio = document.querySelector(".section-portfolio");
const Section_Services = document.querySelector(".section-services");
const Section_Contact = document.querySelector(".section-contact");

const About_Link = document.querySelector(".about-link");
const Portfolio_Link = document.querySelector(".portfolio-link");
const Service_Link = document.querySelector(".service-link");
const Contact_Link = document.querySelector(".contact-link");

// Function : 1
About_Link.addEventListener("click", () => {
  Section_Biodeta.scrollIntoView({ behavior: "smooth" });
});

// Function : 2
Portfolio_Link.addEventListener("click", () => {
  Section_Portfolio.scrollIntoView({ behavior: "smooth" });
});

// Function : 3
Service_Link.addEventListener("click", () => {
  Section_Services.scrollIntoView({ behavior: "smooth" });
});




// ========================================
//  Main Hero Section : Hire Me : click
//  ========================================

const Contact_Section = document.querySelector(".section-contact");
const Hireme_btn = document.querySelector(".hireme-btn");

Hireme_btn.addEventListener("click", () => {
  Contact_Section.scrollIntoView({ behavior: "smooth" });
});
