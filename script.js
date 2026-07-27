const button = document.getElementById("openBtn");
const envelopeSection = document.getElementById("envelope-section");

const ribbon = document.getElementById("ribbon");
const seal = document.getElementById("seal");
const flap = document.getElementById("flap");
const letter = document.getElementById("letter");
const invitationScreen = document.getElementById("invitation-screen");
const exploreBtn = document.getElementById("exploreBtn");
const summitPage = document.getElementById("summit-page");

button.addEventListener("click", function(){

    envelopeSection.classList.remove("hidden");

    button.style.display = "none";

});

seal.addEventListener("click", function(){

    seal.classList.add("pop");

    ribbon.classList.add("remove");

   setTimeout(function(){

    flap.classList.add("open");

},800);

setTimeout(function(){

    letter.classList.add("pull-out");

},1700);

setTimeout(function(){

    letter.classList.add("expand");

},3300);

setTimeout(function(){

    invitationScreen.classList.remove("hidden");

    invitationScreen.classList.add("show");
setTimeout(function(){

    document
        .querySelector(".invitation-content")
        .classList.add("show");

},500);
},4700);
setTimeout(function(){

    document.getElementById("envelope").classList.add("fade");

},4200);
});
setTimeout(function(){

    document.querySelectorAll(".reveal").forEach((item,index)=>{

        setTimeout(()=>{

            item.style.opacity="1";
            item.style.transform="translateY(0)";
            item.style.transition="0.8s ease";

        },index*250);

    });

},500);
exploreBtn.addEventListener("click", function(){

    window.location.href = "summit.html";

});
