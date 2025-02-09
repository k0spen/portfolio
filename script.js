// Initialize AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Create animated stars background
function createStars() {
    const svg = document.querySelector('.stars');
    const numberOfStars = 100;

    for (let i = 0; i < numberOfStars; i++) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 0.2;
        
        circle.setAttribute("cx", `${x}%`);
        circle.setAttribute("cy", `${y}%`);
        circle.setAttribute("r", size);
        circle.setAttribute("fill", "#ffffff");
        
        // Add animation
        const animate = document.createElementNS("http://www.w3.org/2000/svg", "animate");
        animate.setAttribute("attributeName", "opacity");
        animate.setAttribute("dur", `${Math.random() * 3 + 2}s`);
        animate.setAttribute("values", "0;1;0");
        animate.setAttribute("repeatCount", "indefinite");
        animate.setAttribute("begin", `${Math.random() * 3}s`);
        
        circle.appendChild(animate);
        svg.appendChild(circle);
    }
}

// Initialize stars on load
document.addEventListener('DOMContentLoaded', () => {
    createStars();
});

// Smooth scroll handling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Advanced navbar scroll effect
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.background = 'rgba(10, 10, 15, 0.8)';
        return;
    }
    
    if (currentScroll > lastScroll) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
    }
    lastScroll = currentScroll;
});


let T_Clicked = 0;

document.addEventListener('DOMContentLoaded', function () {
    const discordButton = document.getElementById('discord-button');
    const copyButton = document.getElementById('copy-discord');
    const discordUsername = "K0spen";

    discordButton.addEventListener('click', function(event) {
        T_Clicked++;
        
        if(T_Clicked >= 2) {
            navigator.clipboard.writeText(discordUsername);
            
            // Remove existing animation class
            discordButton.classList.remove('green-pulse');
            // Force reflow
            void discordButton.offsetWidth;
            // Add animation class
            discordButton.classList.add('green-pulse');
        }
        
        discordButton.innerHTML = discordUsername;
        discordButton.style.fontSize = '18px';
        discordButton.style.textAlign = 'center';
        discordButton.style.color = '#ffffff';
        copyButton.style.display = 'inline-block';
    });
});
