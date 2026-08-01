const audio = document.querySelector("audio");
const disc = document.querySelector(".cover");
const button = document.getElementById("next");
const particles = document.getElementById("particles");

function createHeart(){

    const heart=document.createElement("div");

    heart.className="particle";

    const emojis = ["❤️","💕","💖","💗","💞","✨","🌸","🩷"];
heart.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

    let x;

do {
    x = Math.random() * 100;
} while (x > 30 && x < 70);

heart.style.left = x + "vw";
    heart.style.bottom="0px";

    particles.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },4000);

}

let interval;

audio.addEventListener("play", function(){

    disc.classList.add("spin");

    interval=setInterval(createHeart,120);

});

audio.addEventListener("pause", () => {

    disc.classList.remove("spin");

clearInterval(interval);
});

audio.addEventListener("ended", () => {

    disc.classList.remove("spin");

clearInterval(interval);
});

button.onclick = function(){

    localStorage.setItem("musicDone", "true");

    window.location.href = "gifts.html";

}