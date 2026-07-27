const sections = document.querySelectorAll(".fade-section");

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

sections.forEach(section=>{

    observer.observe(section);

});


/* ==========================
   RSVP MODAL
========================== */

const modal = document.getElementById("rsvpModal");
const openBtn = document.getElementById("openRSVP");
const closeBtn = document.getElementById("closeModal");

openBtn.addEventListener("click", function(){

    modal.classList.add("show");

});

closeBtn.addEventListener("click", function(){

    modal.classList.remove("show");

});

window.addEventListener("click", function(event){

    if(event.target === modal){

        modal.classList.remove("show");

    }

});
const form = document.getElementById("rsvpForm");
const thankYou = document.getElementById("thankYouMessage");
const closeThankYou = document.getElementById("closeThankYou");

form.addEventListener("submit", function(event){

    event.preventDefault();

    form.style.display = "none";

    thankYou.classList.remove("hidden");

    thankYou.classList.add("show");

});

closeThankYou.addEventListener("click", function(){

    modal.classList.remove("show");

    form.style.display = "block";

    thankYou.classList.remove("show");

    thankYou.classList.add("hidden");

    form.reset();

});
