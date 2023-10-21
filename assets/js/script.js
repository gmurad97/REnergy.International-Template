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

    /* FAQ BLOCKS FUNCTION - START */
    const faq_container = $(".faq");
    const faq_blocks = faq_container ? $(".faq__block") : null;

    if (faq_container && faq_blocks) {
        faq_blocks.each(function (index, faq_block) {
            const faq_maximized_detail = $(faq_block).find(".faq__maximized-detail");
            const faq_minimized_detail = $(faq_block).find(".faq__minimazed-detail");

            $(faq_block).find(".faq__minimazed-detail-header--button").on("click", function () {
                faq_minimized_detail.css({
                    transform: "translate(0px, 50px)",
                    opacity: 0
                });
                faq_maximized_detail.css({
                    transform: "translate(0px, -50px)",
                    opacity: 1,
                    maxHeight: "384px"
                });

                faq_blocks.each(function (index, other_faq_block) {
                    if (other_faq_block !== faq_block) {
                        const other_faq_maximized_detail = $(other_faq_block).find(".faq__maximized-detail");
                        const other_faq_minimized_detail = $(other_faq_block).find(".faq__minimazed-detail");

                        other_faq_maximized_detail.css({
                            transform: "translate(0px, 0px)",
                            opacity: 0,
                            maxHeight: "0px"
                        });
                        other_faq_minimized_detail.css({
                            transform: "translate(0px, 0px)",
                            opacity: 1
                        });
                    }
                });
            });

            $(faq_block).find(".faq__maximized-detail-header--button").on("click", function () {
                faq_minimized_detail.css({
                    transform: "translate(0px, 0px)",
                    opacity: 1
                });
                faq_maximized_detail.css({
                    transform: "translate(0px, 0px)",
                    opacity: 0,
                    maxHeight: "0px"
                });
            });
        });
    }
    /* FAQ BLOCKS FUNCTION - ENDED */
});

// Получаем все кнопки по их id
const tradingButton = document.getElementById('trading');
const shippingButton = document.getElementById('shipping');
const seeAllButton = document.getElementById('see_all');

// Получаем все блоки по их data-item
const tradingContents = document.querySelectorAll('[data-item="trading"]');
const shippingContents = document.querySelectorAll('[data-item="shipping"]');

// Обработчик для кнопки "Trading"
tradingButton.addEventListener('click', () => {
  tradingContents.forEach(content => {
    content.style.display = 'block';
  });
  shippingContents.forEach(content => {
    content.style.display = 'none';
  });
});

// Обработчик для кнопки "Shipping"
shippingButton.addEventListener('click', () => {
  tradingContents.forEach(content => {
    content.style.display = 'none';
  });
  shippingContents.forEach(content => {
    content.style.display = 'block';
  });
});

// Обработчик для кнопки "See All"
seeAllButton.addEventListener('click', () => {
  tradingContents.forEach(content => {
    content.style.display = 'block';
  });
  shippingContents.forEach(content => {
    content.style.display = 'block';
  });
});
