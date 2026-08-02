const button = document.getElementById("openBtn");
const transition = document.getElementById("transition");
const page = document.querySelector(".page");

button.onclick = function(){

    page.style.opacity = "0";

    setTimeout(()=>{

        transition.style.opacity = "1";

    },150);

    setTimeout(()=>{

        window.location.href = "letter.html";

    },550);

}