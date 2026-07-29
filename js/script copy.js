"use strict";

document.addEventListener("DOMContentLoaded", () => {

    /*==================================
    ELEMENTS
    ==================================*/

    const envelope = document.getElementById("envelope");
    const seal = document.getElementById("seal");
    const landing = document.getElementById("landing");
    const summit = document.getElementById("summit");
    const paperTransition =
        document.getElementById("paperTransition");

    const sealInstruction =
        document.querySelector(".seal-instruction");

    const cards = document.querySelectorAll(".card");
    const fadeSections =
        document.querySelectorAll(".fade-section");

    const navLinks =
        document.querySelectorAll(".navbar a");

    const pageSections =
        document.querySelectorAll("section[id]");

    const rsvpButton =
        document.getElementById("rsvpButton");

    let invitationOpened = false;


    /*==================================
    RESET LANDING PAGE POSITION
    ==================================*/

    function resetLandingPosition() {

        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "instant"
        });

        if (landing) {
            landing.scrollTop = 0;
        }

    }

    window.requestAnimationFrame(
        resetLandingPosition
    );

    window.setTimeout(
        resetLandingPosition,
        100
    );

    window.setTimeout(
        resetLandingPosition,
        500
    );


    /*==================================
    REVEAL SUMMIT CARDS
    ==================================*/

    function revealCards() {

        cards.forEach((card, index) => {

            window.setTimeout(() => {

                card.classList.add("show");

            }, 250 + index * 180);

        });

    }


    /*==================================
    OPEN INVITATION
    ==================================*/

    function openInvitation() {

        if (invitationOpened) {
            return;
        }

        if (
            !envelope ||
            !seal ||
            !landing ||
            !summit ||
            !paperTransition
        ) {

            console.error(
                "Invitation elements could not be found."
            );

            return;

        }

        invitationOpened = true;
        seal.disabled = true;

        envelope.classList.add("unwrapping");

        window.setTimeout(() => {

            envelope.classList.add("open");

        }, 1150);

        window.setTimeout(() => {

            paperTransition.classList.add("active");

        }, 3400);

        window.setTimeout(() => {

            window.scrollTo(0, 0);
            summit.classList.add("show");

        }, 4000);

        window.setTimeout(() => {

            paperTransition.classList.add("fade-out");

        }, 4300);

        window.setTimeout(() => {

            landing.classList.add("hide");
            revealCards();

        }, 4850);

        /*
        Remove the landing page after its fade finishes.
        This prevents it from interfering with scrolling.
        */

        window.setTimeout(() => {

            landing.style.display = "none";

        }, 5900);

    }


    /*==================================
    ENVELOPE EVENTS
    ==================================*/

    if (seal) {

        seal.addEventListener(
            "click",
            openInvitation
        );

    }

    if (sealInstruction) {

        sealInstruction.addEventListener(
            "click",
            openInvitation
        );

    }


    /*==================================
    SECTION FADE-IN
    ==================================*/

    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                entries => {

                    entries.forEach(entry => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "show"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.2
                }
            );

        fadeSections.forEach(section => {

            observer.observe(section);

        });

    } else {

        fadeSections.forEach(section => {

            section.classList.add("show");

        });

    }


    /*==================================
    ACTIVE NAVIGATION LINK
    ==================================*/

    function updateActiveNavigation() {

        let currentSection = "";

        pageSections.forEach(section => {

            const sectionTop =
                section.offsetTop - 180;

            if (
                window.scrollY >= sectionTop
            ) {

                currentSection =
                    section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            const destination =
                link.getAttribute("href");

            if (
                destination ===
                `#${currentSection}`
            ) {

                link.classList.add("active");

            }

        });

    }

    window.addEventListener(
        "scroll",
        updateActiveNavigation,
        {
            passive: true
        }
    );


    /*==================================
    RSVP BUTTON
    ==================================*/

    if (rsvpButton) {

        rsvpButton.addEventListener(
            "click",
            () => {

                const formWindow = window.open(
                    "https://forms.cloud.microsoft/r/zVhQau0qk5",
                    "_blank",
                    "noopener,noreferrer"
                );

                /*
                Some browsers block pop-ups.
                This fallback opens the form
                in the same tab.
                */

                if (!formWindow) {

                    window.location.href =
                        "https://forms.cloud.microsoft/r/zVhQau0qk5";

                }

            }
        );

    }

});