$(function () {
    console.log("hello world!!!");
    $(".hero-slider").slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 5000,
        centerMode: true,
        // centerPadding: "60px",
        slidesToShow: 1,
        // responsive: [
        //     {
        //         breakpoint: 600,
        //         settings: {
        //             slidesToShow: 2,
        //             slidesToScroll: 2
        //         }
        //     },
        //     {
        //         breakpoint: 480,
        //         settings: {
        //             slidesToShow: 1,
        //             slidesToScroll: 1
        //         }
        //     }
        // ]
    });
});