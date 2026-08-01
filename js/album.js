const photos = [
"assets/album/1.jpeg",
"assets/album/2.jpeg",
"assets/album/3.jpeg",
"assets/album/4.jpeg",
"assets/album/5.jpeg",
"assets/album/6.jpeg",
"assets/album/7.jpeg",
"assets/album/8.jpeg",
"assets/album/9.jpeg",
"assets/album/10.jpeg",
"assets/album/11.jpeg",
"assets/album/12.jpeg",
"assets/album/13.jpeg",
"assets/album/14.jpeg",
"assets/album/15.jpeg"
];

const compliments = [
"Ești cea mai scumpică persoană pe care o am 🧸 ",
"Ai cel mai frumos zâmbet ☺️",
"Ai cei mai frumoși ochi 👀",
"Ești cea mai frumoasă fată 🌸",
"Ești gâza mea micuță 🌼",
"Oriunde aș fi tot la tine mă gândesc 🌍",
"Îmi place mult felul tău de a fi 🤍",
"Pentru mine vei fi mereu specială 🌹",
"Prezența ta îmi schimbă instant starea ☀️",
"Ești minunată din toate punctele de vedere 👑",
"Nu mă satur niciodată să mă uit la tine 🥺",
"Ești locul în care mă simt fericit 🏡",
"Îmi place copilul din tine 🎈",
"Mă faci cel mai mândru iubit din lume ❤️",
"Mai am încă două surprize pentru tine ❤️❤️❤️"
];

let index = 0;

const photo = document.getElementById("photo");
const text = document.getElementById("compliment");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const btn = document.getElementById("continue");

function updateAlbum(){

photo.src = photos[index];
text.innerText = compliments[index];

if(index === 14){
btn.style.display = "inline-block";
}else{
btn.style.display = "none";
}

}

next.onclick = function(){

if(index < photos.length-1){
index++;
updateAlbum();
}

}

prev.onclick = function(){

if(index > 0){
index--;
updateAlbum();
}

}

btn.onclick = function(){

localStorage.setItem("albumDone","true");

window.location.href="gifts.html";

}

updateAlbum();