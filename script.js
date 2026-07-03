const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    // Toggle the data-theme attribute
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    
    // Switch the icon
    const icon = themeToggle.querySelector('i');
    if (newTheme === 'dark') {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
    
    // Store preference
    localStorage.setItem('portfolio-theme', newTheme);
});

// Load saved theme on refresh
const savedTheme = localStorage.getItem('portfolio-theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    if (savedTheme === 'dark') {
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const textElement = document.querySelector(".typing");
    const words = ["AI Enthusiast", "Software Developer", "Web Developer", "Problem Solver", "Tech Explorer"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 150;

    function typeEffect() {
        const currentWord = words[wordIndex];
        
        if (isDeleting) {
            textElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 75; // Faster deletion
        } else {
            textElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 150; // Normal typing
        }

        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pause at the end of word
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typeSpeed = 500;
        }

        setTimeout(typeEffect, typeSpeed);
    }

    typeEffect();
});



// document.addEventListener("DOMContentLoaded", function () {
//     const observerOptions = {
//         root: null,
//         // Shrinks the top and bottom detection area so it only activates 
//         // when the section is safely inside the screen bounds.
//         rootMargin: "-15% 0px -15% 0px", 
//         threshold: 0.05 
//     };

//     const observer = new IntersectionObserver((entries) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add("visible");
//             } else {
//                 // Smoothly resets the state when completely out of view
//                 entry.target.classList.remove("visible");
//             }
//         });
//     }, observerOptions);

//     const targetElements = document.querySelectorAll(".animate-fade-up");
//     targetElements.forEach(element => observer.observe(element));
// });



document.addEventListener("DOMContentLoaded", () => {

    const observer = new IntersectionObserver((entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                // Stop observing so it never animates again
                observer.unobserve(entry.target);
            }

        });

    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -80px 0px"
    });

    document.querySelectorAll(".animate-fade-up").forEach(element => {
        observer.observe(element);
    });

});

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});