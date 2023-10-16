/* JS HEADER MAIN SCROLL BUTTON - START */
document.querySelector("#header-content-scroll-btn").addEventListener("click", function () {
    window.scroll(0, window.innerHeight);
});
/* JS HEADER MAIN SCROLL BUTTON - ENDED */

/* SERVICES ANIMATION - START */
const serviceBlocks = document.querySelectorAll(".main__service-block");
serviceBlocks.forEach((serviceBlock) => {
    const circle = serviceBlock.querySelector(".main__service-block-circle");
    serviceBlock.addEventListener("mouseenter", function () {
        circle.style.transform = "scale(8)";
    });

    serviceBlock.addEventListener("mouseleave", function () {
        circle.style.transform = "scale(0.7)";
        setTimeout(function () {
            circle.style.transform = "scale(1)";
        }, 512);
    });
});
/* SERVICES ANIMATION - ENDED */