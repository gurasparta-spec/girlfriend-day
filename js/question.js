const title = document.getElementById("title");
const buttons = document.getElementById("buttons");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");
const hearts = document.getElementById("hearts");

const text = "Mai am o singură întrebare...\n\nVrei să fii iubita mea? ❤️\n(din nou 🤭)";

let i = 0;

function typeWriter(){

    if(i < text.length){

        title.innerHTML += text.charAt(i) === "\n" ? "<br>" : text.charAt(i);

        i++;

        setTimeout(typeWriter,55);

    }else{

        buttons.style.display="flex";

    }

}

window.onload = function(){

    typeWriter();

}

noBtn.addEventListener("mouseover",()=>{

    const maxX = window.innerWidth - noBtn.offsetWidth - 30;
    const maxY = window.innerHeight - noBtn.offsetHeight - 30;

    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random()*maxX + "px";
    noBtn.style.top = Math.random()*maxY + "px";

});

yesBtn.onclick = function(){

    title.innerHTML = "❤️ Știam că răspunsul va fi DA! ❤️<br><br>Te iubesc enorm!";

    buttons.style.display = "none";

    setInterval(createHeart,180);

    setTimeout(()=>{

        document.getElementById("overlay").style.opacity="0";

    },4000);

    setTimeout(()=>{

        document.getElementById("theEnd").style.opacity="1";

    },6000);

}

function createHeart(){

    const heart=document.createElement("div");

    heart.innerHTML="❤️";

    heart.style.position="absolute";

    heart.style.left=Math.random()*100+"vw";

    heart.style.top="100vh";

    heart.style.fontSize=(20+Math.random()*25)+"px";

    heart.style.transition="5s linear";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.style.top="-10vh";

        heart.style.opacity="0";

    },50);

    setTimeout(()=>{

        heart.remove();

    },5000);

}