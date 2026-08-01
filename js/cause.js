function startAdventure(){

    // Explozie de inimioare
    for(let i=0;i<40;i++){
        createParticle();
    }

    // Ecran negru
    const transition = document.createElement("div");

    transition.style.position = "fixed";
    transition.style.top = "0";
    transition.style.left = "0";
    transition.style.width = "100%";
    transition.style.height = "100%";
    transition.style.background = "black";
    transition.style.opacity = "0";
    transition.style.transition = "opacity .8s ease";
    transition.style.zIndex = "99999";

    document.body.appendChild(transition);

    // Cardul dispare ușor
    const card = document.querySelector(".card");

    card.style.transition = ".8s";
    card.style.transform = "translateY(-20px) scale(.96)";
    card.style.opacity = "0";

    // Apare ecranul negru
    setTimeout(function(){
        transition.style.opacity = "1";
    },200);

    // Mergem la cadouri
    setTimeout(function(){

        window.location.href="gifts.html";

    },1000);

}

const particles=document.getElementById("particles");

function createParticle(){

    const el=document.createElement("div");

    const icons=["❤️","💖","🌸","✨"];

    el.innerHTML=icons[Math.floor(Math.random()*icons.length)];

    el.style.position="absolute";
    el.style.left=Math.random()*100+"vw";
    el.style.top="-40px";
    el.style.fontSize=(18+Math.random()*20)+"px";
    el.style.opacity=Math.random();

    particles.appendChild(el);

    const duration=6000+Math.random()*4000;

    el.animate([

        {
            transform:"translateY(0px) rotate(0deg)"
        },

        {
            transform:`translateY(${window.innerHeight+100}px) translateX(${Math.random()*200-100}px) rotate(360deg)`
        }

    ],{

        duration:duration,
        easing:"linear"

    });

    setTimeout(()=>{

        el.remove();

    },duration);

}

setInterval(createParticle,350);