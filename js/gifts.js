const albumDone = localStorage.getItem("albumDone");
const musicDone = localStorage.getItem("musicDone");
const letterDone = localStorage.getItem("letterDone");

if(albumDone){
    document.getElementById("albumCheck").style.display="flex";
}

if(musicDone){
    document.getElementById("musicCheck").style.display="flex";
}

if(letterDone){
    document.getElementById("letterCheck").style.display="flex";
}

if(albumDone && musicDone && letterDone){

    document.getElementById("finalContainer").style.display="block";

}

const gifts = document.querySelectorAll(".gift");

window.addEventListener("load",()=>{

    const flash=document.getElementById("flash");

    setTimeout(()=>{

        flash.style.display="none";

    },1000);

    gifts.forEach((gift,index)=>{

        setTimeout(()=>{

            gift.classList.add("show");

        },500+(250*index));

    });

});

const transition = document.getElementById("transition");
const page = document.querySelector(".page");

document.querySelectorAll(".gift").forEach(gift=>{

    gift.addEventListener("click",function(e){

        e.preventDefault();

        const link=this.href;

        page.style.opacity="0";

        setTimeout(()=>{

            window.location.href=link;

        },400);

    });

});

const finalBtn = document.getElementById("finalBtn");

finalBtn.onclick = function(){

    page.style.opacity = "0";

    setTimeout(()=>{

        window.location.href = "question.html";

    },400);

}