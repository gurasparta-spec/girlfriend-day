const backBtn = document.getElementById("backBtn");

const transition = document.getElementById("transition");
const page = document.querySelector(".page");

window.onload = function(){

    backBtn.style.display = "block";

}

backBtn.onclick = function(){

    localStorage.setItem("letterDone","true");

    page.style.opacity = "0";

    setTimeout(()=>{

        window.location.href = "gifts.html";

    },400);

}