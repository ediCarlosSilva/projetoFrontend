function ativaScrollSuave(seletor) {

    $(seletor).click(function(event) {

        event.preventDefault();

        // var target = this.href; DOM direto
        var target = $(this).attr("href");

        console.log($(target).offset().top);
        $("html, body").animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });
}

ativaScrollSuave("a[href*=panel-about]");
ativaScrollSuave('a[href*=panel-speakers]');
ativaScrollSuave("a[href*=panel-form]");

// $("#botao-sobre").on("click", function() {
//     console.log("cliquei no botao sobre");
//     scrollSobre();
// });

// $("#botao-palestrantes").on("click", function() {
//     console.log("Cliquei no botão palestrantes");
//     scrollPaletrantes();
// });

// $("#botao-inscrever").on("click", function() {
//     console.log("Cliquei no botão inscrever");
//     scrollInscrever();
// });

// function scrollSobre() {
//     var posicaoSobre = $(".panel-about").offset().top;

//     $("html, body").animate({
//         scrollTop: posicaoSobre + "px"
//     }, 1000);

// }

// function scrollPaletrantes() {
//     var posicaoPalestrantes = $(".panel-speakers").offset().top;

//     $("html, body").animate({
//         scrollTop: posicaoPalestrantes + "px"
//     }, 1000);
// }

// function scrollInscrever() {
//     var posicaoInscrever = $(".panel-form").offset().top;

//     $("html, body").animate({
//         scrollTop: posicaoInscrever + "px"
//     }, 1500);
// }