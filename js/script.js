// nav

// algus > algus
$("#navLogo").on("click", function() {
  const logo = $("#lehe_algus").position().top;
  $("html, body").animate(
    {
      scrollTop: logo
    },
    300
  );
});

// lõpp > algus
$("#tagasi-ules").on("click", function() {
  const algus = $("#lehe_algus").position().top;
  $("html, body").animate(
    {
      scrollTop: algus
    },
    300
  );
});

// nool alla > Bussid
$(".scroll-down").on("click", function() {
  const bussid = $("#reisid").position().top;
  $("html, body").animate(
    {
      scrollTop: bussid
    },
    300
  );
});

// menu > Bussid
$("#navBussid").on("click", function() {
  const bussid = $("#bussid").position().top;
  $("html, body").animate(
    {
      scrollTop: bussid
    },
    300
  );
});

// menu > Galerii
$("#navGalerii").on("click", function() {
  const galerii = $("#galerii").position().top;
  $("html, body").animate(
    {
      scrollTop: galerii
    },
    300
  );
});

// menu > Firmast
$("#navFirmast").on("click", function() {
  const firmast = $("#firmast").position().top;
  $("html, body").animate(
    {
      scrollTop: firmast
    },
    300
  );
});

// menu > Reisid
$("#navReisid").on("click", function() {
  const reisid = $("#reisid").position().top;
  $("html, body").animate(
    {
      scrollTop: reisid
    },
    300
  );
});

// menu > Kontakt
$("#navKontakt").on("click", function() {
  const kontakt = $("#kontakt").position().top;
  $("html, body").animate(
    {
      scrollTop: kontakt
    },
    300
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

// registreeri
function mitu_inimest(inimese_number) {
  if (inimese_number === 1) {
    inimese_number.style.display = "block";
  } else {
    inimese_number.style.display = "none";
  }
}
