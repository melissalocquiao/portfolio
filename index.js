// const portfolioApp = {};

// /* Function to open side bar navigation */
// portfolioApp.openSideBar = () => {
//     document.getElementById("sidebar").style.width = '100%';
// }

// /* Function to close side bar navigation */
// portfolioApp.closeSideBar = () => {
//     document.getElementById('sidebar').style.width = "0";
// }

// /* Function to close side bar if any navigation link is clicked */
// const sideNav = document.querySelectorAll('.sidebar a');
// for (let i = 0; i < sideNav.length; i++) {
//     sideNav[i].addEventListener('click', function (event) {
//         event.preventDefault();
//         let link = sideNav[i].getAttribute("href").replace('#', '.');
//         const section = document.querySelector(link);
//         section.scrollIntoView({ behavior: "smooth" });
//         portfolioApp.closeSideBar();
//     })
// }

// /* Fucntion to get about about button and scroll to contact section*/
// const aboutButton = document.querySelector('.about .button');
// portfolioApp.goToContact = () => {
//     aboutButton.addEventListener('click', function (event) {
//         event.preventDefault();
//         const contactSection = document.querySelector('.contact');
//         contactSection.scrollIntoView({ behavior: "smooth" });
//     })
// }

// /* Form Handler and submit button listener */
// document.querySelector("form").addEventListener("submit", portfolioApp.handleSubmit);
// portfolioApp.handleSubmit = (e) => {
//     e.preventDefault()
//     let myForm = document.getElementById('form');
//     let formData = new FormData(myForm)
//     fetch('/', {
//         method: 'POST',
//         headers: { "Content-Type": "application/x-www-form-urlencoded" },
//         body: new URLSearchParams(formData).toString()
//     }).then(() => console.log('Form successfully submitted')).catch((error) =>
//         alert(error))
// }


// /* Add event listeners to apply animations and scroll to sections */
// portfolioApp.addListeners = () => {
//     /* Query Selector to get nav a */
//     const liItem = document.querySelectorAll('nav a');

//     /* Query Selectors to animate */
//     /* Home Selectors */
//     const home = document.querySelector('.logo a');
//     const homeText = document.querySelector('.home .text-container');
//     const homeImage = document.querySelector('.home .img-container');

//     /* About Selectors */
//     const aboutImage = document.querySelector('.about .flex-container .img-container');
//     const aboutText = document.querySelector('.about .flex-container .text-container');
//     const aboutHeading = document.querySelector('.about h2');

//     /* Skills Selectors */
//     const skillsText = document.querySelector('.skills .skills-container');

//     /* Projects Selectors */
//     const projectLaptop = document.querySelector('.projects .laptop');
//     const projectIpad = document.querySelector('.projects .ipad');
//     const projectDesktop = document.querySelector('.projects .desktop');

//     /* Contact Selectors */
//     const contactHeading = document.querySelector('.contact h2');
//     const contactImage = document.querySelector('.contact .contact-container');
//     const contactForm = document.querySelector('.contact .form');

//     /* Home logo button event listener */
//     home.addEventListener('click', function (event) {
//         event.preventDefault();

//         /* Remove class animations */
//         homeText.classList.remove('animate-left');
//         homeImage.classList.remove('animate-bottom');
//         aboutImage.classList.remove('animate-bottom');
//         aboutHeading.classList.remove('animate-right');
//         aboutText.classList.remove('animate-right');
//         skillsText.classList.remove('animate-top');
//         projectLaptop.classList.remove('animate-left');
//         projectIpad.classList.remove('animate-bottom');
//         projectDesktop.classList.remove('animate-right');
//         contactHeading.classList.remove('animate-bottom');
//         contactImage.classList.remove('animate-bottom');
//         contactForm.classList.remove('animate-right');

//         /* Scroll to home section when clicked */
//         const homeSection = document.querySelector('.home');
//         homeSection.scrollIntoView({ behavior: "smooth" });

//         /* Animate home elements */
//         homeText.classList.add('animate-left');
//         homeImage.classList.add('animate-bottom');
//     });

//     /* For each nav link clicked, add an event listener to each */
//     for (let i = 0; i < liItem.length; i++) {
//         liItem[i].addEventListener('click', function (event) {
//             event.preventDefault();

//             //grab href value and replace # with .
//             let link = liItem[i].getAttribute("href").replace('#', '.');

//             //Scroll to section
//             const section = document.querySelector(link);
//             section.scrollIntoView({ behavior: "smooth" });
            
            
//             /* Remove animation classes */
//             homeText.classList.remove('animate-left');
//             homeImage.classList.remove('animate-bottom');

//             aboutImage.classList.remove('animate-bottom');
//             aboutHeading.classList.remove('animate-right');
//             aboutText.classList.remove('animate-right');

//             skillsText.classList.remove('animate-top');

//             projectLaptop.classList.remove('animate-left');
//             projectIpad.classList.remove('animate-bottom');
//             projectDesktop.classList.remove('animate-right');

//             contactHeading.classList.remove('animate-bottom');
//             contactImage.classList.remove('animate-bottom');
//             contactForm.classList.remove('animate-right');
            
//             /*Home Animations*/
//             if (link === '.home') {
//                 homeText.classList.add('animate-left');
//                 homeImage.classList.add('animate-bottom');
//             }

//             if (link === '.home') {
//                 homeText.classList.add('animate-left');
//                 homeImage.classList.add('animate-bottom');
//             }
//             /* About Animations */
//             if (link === '.about') {
//                 aboutImage.classList.add('animate-bottom');
//                 aboutHeading.classList.add('animate-right');
//                 aboutText.classList.add('animate-right');
//             }

//             /* Skills Animations */
//             if (link === '.skills') {
//                 skillsText.classList.add('animate-top');
//             }

//             /* Project Animations */
//             if (link === '.projects') {
//                 projectLaptop.classList.add('animate-left');
//                 projectIpad.classList.add('animate-bottom');
//                 projectDesktop.classList.add('animate-right');
//             }

//             /* Contact Animations */
//             if (link === '.contact') {
//                 contactHeading.classList.add('animate-bottom');
//                 contactImage.classList.add('animate-bottom');
//                 contactForm.classList.add('animate-right');
//             }
//         })
//     }
// }

// /* App Initialization */
// portfolioApp.init = () => {
//     portfolioApp.addListeners();

// }

// portfolioApp.init();


const holographicElement = document.getElementById("header");

function updateHolographicBackground(value) {
const percentage = value * 100;
holographicElement.style.backgroundPosition = percentage + "%";
}

function handleMouseMove(event) {
const x = event.clientX;
const width = document.documentElement.clientWidth;
const value = x / width;
updateHolographicBackground(value);
}

function handleDeviceOrientation(event) {
const z = Math.abs(event.alpha); // rotation degrees from 0 to 360
const value = z / 360;
updateHolographicBackground(value);
}

window.addEventListener("deviceorientation", handleDeviceOrientation, true);

