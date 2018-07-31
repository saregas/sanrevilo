// algus > algus
$("#navLogo").on("click", function() {
  const logo = $("#lehe_algus").position().top;
  $("html, body").animate(
    {
      scrollTop: logo
    },
    900
  );
});

// lõpp > algus
$("#tagasi-ules").on("click", function() {
  const algus = $("#lehe_algus").position().top;
  $("html, body").animate(
    {
      scrollTop: algus
    },
    900
  );
});

// nool alla > Bussid
$(".scroll-down").on("click", function() {
  const bussid = $("#bussid").position().top;
  $("html, body").animate(
    {
      scrollTop: bussid
    },
    900
  );
});

// menu > Bussid
$("#navBussid").on("click", function() {
  const bussid = $("#bussid").position().top;
  $("html, body").animate(
    {
      scrollTop: bussid
    },
    900
  );
});

// menu > Galerii
$("#navGalerii").on("click", function() {
  const galerii = $("#galerii").position().top;
  $("html, body").animate(
    {
      scrollTop: galerii
    },
    900
  );
});

// menu > Firmast
$("#navFirmast").on("click", function() {
  const firmast = $("#firmast").position().top;
  $("html, body").animate(
    {
      scrollTop: firmast
    },
    900
  );
});

// menu > Reisid
$("#navReisid").on("click", function() {
  const reisid = $("#reisid").position().top;
  $("html, body").animate(
    {
      scrollTop: reisid
    },
    900
  );
});

// menu > Kontakt
$("#navKontakt").on("click", function() {
  const kontakt = $("#kontakt").position().top;
  $("html, body").animate(
    {
      scrollTop: kontakt
    },
    900
  );
});

// peida nav
$(".nav-pills>li>a").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});

/* // ekraani suurus
const getBrowserWidth = function() {
    if(window.innerWidth < 991){
        // Mobiil
        return "sm"
    } else {
        // Tavaline
        return "lg"
    }
};
const device = getBrowserWidth();

if(device === "sm") {
    // fluid galerii
    $(function () {
        $('#galerii a').fluidbox({
            viewportFill: 1,
            loader: true
        });
    });
    // fluid bussid
    $(function () {
        $('#bussid a').fluidbox({
            viewportFill: 1,
            loader: true
        });
    }); 
} else {
    // fluid galerii
    $(function () {
        $('#galerii a').fluidbox({
            viewportFill: 0.8,
            loader: true
        });
    });
    // fluid bussid
    $(function () {
        $('#bussid a').fluidbox({
            viewportFill: 0.8,
            loader: true
        });
    });
} */

// galerii uus
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox({
    alwaysShowClose: true
  });
});
