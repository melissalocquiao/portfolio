const portfolioApp = {};

const aboutButton = document.querySelector('.about .button');

portfolioApp.goToContact = () => {
    aboutButton.addEventListener('click', function (event) {
        event.preventDefault();
        const contactSection = document.querySelector('.contact');
        contactSection.scrollIntoView({ behavior: "smooth" });
    })
}

document.querySelector("form").addEventListener("submit", portfolioApp.handleSubmit);

portfolioApp.handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.getElementById('form');
    let formData = new FormData(myForm)
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
        alert(error))
}

portfolioApp.addListeners = () => {
    const home = document.querySelector('.logo a');
    const liItem = document.querySelectorAll('nav a');
    const homeText = document.querySelector('.home .text-container');
    const homeImage = document.querySelector('.home .img-container');

    const aboutImage = document.querySelector('.about .flex-container .img-container');
    const aboutText = document.querySelector('.about .flex-container .text-container');
    const aboutHeading = document.querySelector('.about h2');

    const skillsText = document.querySelector('.skills .skills-container');
    const educationText = document.querySelector('.skills .education-wrapper');

    const projectLaptop = document.querySelector('.projects .laptop');
    const projectIpad = document.querySelector('.projects .ipad');
    const projectDesktop = document.querySelector('.projects .desktop');

    const contactHeading = document.querySelector('.contact h2');
    const contactImage = document.querySelector('.contact .contact-container');
    const contactForm = document.querySelector('.contact .form');


    home.addEventListener('click', function (event) {
        event.preventDefault();

        homeText.classList.remove('animate-left');
        homeImage.classList.remove('animate-bottom');
        aboutImage.classList.remove('animate-bottom');
        aboutHeading.classList.remove('animate-right');
        aboutText.classList.remove('animate-right');
        skillsText.classList.remove('animate-top');
        educationText.classList.remove('animate-bottom');
        projectLaptop.classList.remove('animate-left');
        projectIpad.classList.remove('animate-bottom');
        projectDesktop.classList.remove('animate-right');
        contactHeading.classList.remove('animate-bottom');
        contactImage.classList.remove('animate-bottom');
        contactForm.classList.remove('animate-right');

        const homeSection = document.querySelector('.home');
        homeSection.scrollIntoView({ behavior: "smooth" });

        homeText.classList.add('animate-left');
        homeImage.classList.add('animate-bottom');
    });

    for (let i = 0; i < liItem.length; i++) {
        liItem[i].addEventListener('click', function (event) {
            event.preventDefault();
            let link = liItem[i].getAttribute("href").replace('#', '.');
            const section = document.querySelector(link);
            section.scrollIntoView({ behavior: "smooth" });

            aboutImage.classList.remove('animate-bottom');
            aboutHeading.classList.remove('animate-right');
            aboutText.classList.remove('animate-right');

            skillsText.classList.remove('animate-top');
            educationText.classList.remove('animate-bottom');

            projectLaptop.classList.remove('animate-left');
            projectIpad.classList.remove('animate-bottom');
            projectDesktop.classList.remove('animate-right');

            contactHeading.classList.remove('animate-bottom');
            contactImage.classList.remove('animate-bottom');
            contactForm.classList.remove('animate-right');

            if (link === '.about') {
                aboutImage.classList.add('animate-bottom');
                aboutHeading.classList.add('animate-right');
                aboutText.classList.add('animate-right');
            }
            if (link === '.skills') {
                skillsText.classList.add('animate-top');
                educationText.classList.add('animate-bottom');
            }
            if (link === '.projects') {
                projectLaptop.classList.add('animate-left');
                projectIpad.classList.add('animate-bottom');
                projectDesktop.classList.add('animate-right');
            }
            if (link === '.contact') {
                contactHeading.classList.add('animate-bottom');
                contactImage.classList.add('animate-bottom');
                contactForm.classList.add('animate-right');
            }

        });
    }


}

portfolioApp.init = () => {
    // portfolioApp.resetHomeAnimation();
    portfolioApp.addListeners();

}

portfolioApp.init();