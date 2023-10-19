/* SCROLL 100VH BUTTON - START */
const mainScrollBtn = document.querySelector("#description_block_main_scroll_btn");

if (mainScrollBtn) {
    mainScrollBtn.addEventListener("click", function () {
        window.scroll(0, window.innerHeight);
    });
}
/* SCROLL 100VH BUTTON - ENDED */

/* SERVICES ANIME.JS - START */
const serviceBlocks = document.querySelectorAll(".services__block");

serviceBlocks.forEach(function (serviceBlock) {
    const circleService = serviceBlock.querySelector(".services__icon-block--circle");

    serviceBlock.addEventListener("mouseenter", function () {
        anime.remove(circleService);
        anime({
            targets: circleService,
            scale: 7,
            easing: "linear", // Используйте линейное замедление, чтобы избежать "прыгучести"
            duration: 256
        });
    });

    serviceBlock.addEventListener("mouseleave", function () {
        anime.remove(circleService);
        anime({
            targets: circleService,
            scale: 1,
            easing: 'spring(1, 50, 9, 0)'
        });
    });
});
/* SERVICES ANIME.JS - ENDED */