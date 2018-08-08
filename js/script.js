// nav

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
$(".navbar-nav>li>a").on("click", function() {
  $(".navbar-collapse").collapse("hide");
});

// galerii uus
$(document).on("click", '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox({
    alwaysShowClose: true
  });
});
