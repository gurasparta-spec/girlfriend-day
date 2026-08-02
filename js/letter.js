const text = document.getElementById("text");
const backBtn = document.getElementById("backBtn");

const message = `Dragostea mea,
Pentru astăzi am vrut să îți pregătesc ceva mai diferit... nu doar un mesaj obișnuit.
Vreau să îți mulțumesc pentru fiecare moment petrecut împreună, fie el bun sau rău, pentru fiecare zâmbet și pentru felul în care reușești să îmi faci zilele mai frumoase.
Îți mulțumesc chiar și pentru unele certuri sau discuții care ne-au făcut să ne dăm seama că nu putem trăi unul fără celălalt. Și nici nu aș vrea să mai simțim vreodată lipsa asta.
Când vom fi în permanență unul lângă altul, îți promit că voi încerca mereu să te fac fericită, să îți văd zâmbetul în fiecare dimineață, să îți fiu cel mai mare sprijin și să fac tot posibilul ca să nu ne lipsească niciodată nimic.
Sper să nu uiți niciodată cât de specială ești pentru mine și cât de mult te iubesc.
Îți mulțumesc că exiști și că faci parte din viața mea. ❤️
Happy Girlfriend Day, My Love! ❤️
Cu tot dragul,
Iubitu ❤️`;

let i = 0;

function typeWriter(){

    if(i < message.length){

        text.innerHTML += message.charAt(i);

        i++;

        setTimeout(typeWriter,35);

    }else{

        backBtn.style.display="block";

    }

}

window.onload = function(){

    typeWriter();

}

const transition = document.getElementById("transition");
const page = document.querySelector(".page");

backBtn.onclick = function(){

    localStorage.setItem("letterDone","true");

    page.style.opacity = "0";

    setTimeout(()=>{
        window.location.href = "gifts.html";
    },400);

}