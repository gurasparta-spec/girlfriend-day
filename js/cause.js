function startAdventure(){

    // Explozie de inimioare
    for(let i = 0; i < 40; i++){
        createParticle();
    }

    // Cardul dispare ușor
    const card = document.querySelector(".card");

    card.style.transition = ".6s";
    card.style.transform = "translateY(-20px) scale(.96)";
    card.style.opacity = "0";

    // Trecere directă la cadouri (fără ecran negru)
    setTimeout(function(){

        window.location.href = "gifts.html";

    },600);

}

const particles = document.getElementById("particles");

function createParticle(){

    const el = document.createElement("div");

    const icons = ["❤️","💖","🌸","✨"];

    el.innerHTML = icons[Math.floor(Math.random()*icons.length)];

    el.style.position = "absolute";
    el.style.left = Math.random()*100 + "vw";
    el.style.top = "-40px";
    el.style.fontSize = (18 + Math.random()*20) + "px";
    el.style.opacity = Math.random();

    particles.appendChild(el);

    const duration = 6000 + Math.random()*4000;

    el.animate([

        {
            transform:"translateY(0px) rotate(0deg)"
        },

        {
            transform:`translateY(${window.innerHeight+100}px) translateX(${Math.random()*200-100}px) rotate(360deg)`
        }

    ],{

        duration: duration,
        easing: "linear"

    });

    setTimeout(()=>{

        el.remove();

    },duration);

}

setInterval(createParticle,350);