$(document).ready(function () {
    /* MAIN SCROLL BUTTON - START */
    const mainScrollBtn = $("#description_block_main_scroll_btn");
    mainScrollBtn.on("click", function () {
        window.scrollTo(0, window.innerHeight);
    });
    /* MAIN SCROLL BUTTON - ENDED */

    /* SERVICES ANIMATION ANIME.JS - START */
    $(".services__block").each(function () {
        const circleService = $(this).find(".services__icon-block--circle");

        $(this).on("mouseenter", function () {
            anime.remove(circleService[0]);
            anime({
                targets: circleService[0],
                scale: 8,
                easing: "linear",
                duration: 256
            });
        });

        $(this).on("mouseleave", function () {
            anime.remove(circleService[0]);
            anime({
                targets: circleService[0],
                scale: 1,
                easing: 'spring(1, 50, 10, 0)'
            });
        });
    });
    /* SERVICES ANIMATION ANIME.JS - ENDED */

    /* FOOTER PARTNERS OWL CAROUSEL - START */
    $(document).ready(function () {
        if ($('#owl-carousel-partners').length) {
            $('#owl-carousel-partners').owlCarousel({
                items: 8,
                loop: true,
                center: false,
                nav: false,
                dots: false
            });
        }
    });
    /* FOOTER PARTNERS OWL CAROUSEL - ENDED */
});




let miniblock = document.querySelector(".faq__minimazed-detail");
let maxiblock = document.querySelector(".faq__maximized-detail");

function on(ret){
    if(ret){
        miniblock.style.transform = "translate(0px, 50px)";
        miniblock.style.opacity = "0";
    
        maxiblock.style.transform = "translate(0px, -50px)";
        maxiblock.style.opacity = "1";
        maxiblock.style.maxHeight = "384px";




    }
    else{
        miniblock.style.transform = "translate(0px, 0px)";
        miniblock.style.opacity = "1";
    
    
        maxiblock.style.transform = "translate(0px, 0px)";
        maxiblock.style.opacity = "0";
        maxiblock.style.maxHeight = "0px";
    }
}


document.querySelector("#maximized_detail").addEventListener("click", function () {
    on(true);
});

document.querySelector("#minimazed_detail").addEventListener("click", function () {
    on(false);

});

