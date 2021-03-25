const portfolioApp = {};

portfolioApp.addListeners = () => {
    const home = document.querySelector('.logo a');
    const liItem = document.querySelectorAll('nav a');
    
    home.addEventListener('click', function(event) {
        event.preventDefault();
        console.log(home);
        const homeSection  = document.querySelector('.home');
        homeSection.scrollIntoView({behavior: "smooth"});
    });
    
    for (let i = 0; i < liItem.length; i++) {
        liItem[i].addEventListener('click', function (event) {
            event.preventDefault();
            let link = liItem[i].getAttribute("href").replace('#', '.');
            const section  = document.querySelector(link);
            section.scrollIntoView({behavior: "smooth"});
        });
    }
}

portfolioApp.init = () => {
    portfolioApp.addListeners();
}

portfolioApp.init();