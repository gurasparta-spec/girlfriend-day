const envelope = document.getElementById("envelope");
const button = document.getElementById("openBtn");
const text = document.getElementById("text");

button.onclick = function(){

    envelope.classList.add("open");

    button.style.display = "none";

    let i = 0;

    text.innerHTML = "";

    const typing = setInterval(function(){

        text.innerHTML += message.charAt(i);

        i++;

        if(i >= message.length){

            clearInterval(typing);

        }

    },35);

}

const hearts = document.getElementById("hearts");

function createHeart(){

    const heart = document.createElement("div");

    heart.className = "flying-heart";

    const icons = ["❤️","💖","💕","💗","🌸","✨"];

    heart.innerHTML = icons[Math.floor(Math.random()*icons.length)];

    heart.style.left = Math.random()*100+"vw";

    heart.style.fontSize = (20+Math.random()*18)+"px";

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },5000);

}

button.addEventListener("click",()=>{

    setInterval(createHeart,250);

});

document.getElementById("openBtn").onclick = function(){

    window.location.href = "letter.html";

}