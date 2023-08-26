let winner = ""
document.addEventListener('DOMContentLoaded', () => {
    winner = localStorage.getItem('winner')
    document.getElementById('winner').innerHTML = winner
    
    const confettiWrapper = document.getElementById("confettiWrapper");

    const colors = ['#d13447', '#ffbf00', '#263672', '#6495ed', '#a52a2a'];

    for (let i = 0; i < 150; i++) {
        const confettiDiv = document.createElement("div");
        confettiDiv.className = "confetti-" + i;
    
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        confettiDiv.style.backgroundColor = randomColor;
    
        const width = Math.random() * 6.5;
        const height = width * 0.6;
        confettiDiv.style.width = width + "px";
        confettiDiv.style.height = height + "px";
    
        const left = Math.random() * 100;
        const top = -10;
        confettiDiv.style.left = left + "%";
        confettiDiv.style.top = top + "%";
    
        const opacity = Math.random() + 0.5;
        confettiDiv.style.opacity = opacity;
    
        const rotation = Math.random() * 360;
        confettiDiv.style.transform = `rotate(${rotation}deg)`;
    
        const animationDuration = `4s`;
        const animationDelay = `${Math.random() * 4}s`;
        confettiDiv.style.animation = `drop-${i} ${animationDuration} ${animationDelay} infinite`;

        document.styleSheets[0].insertRule(`
            @keyframes drop-${i} {
                100% {
                    top: 110%;
                    left: ${left + Math.random() * 15}%;
                }
            }
        `);

        confettiWrapper.appendChild(confettiDiv);
    }
})