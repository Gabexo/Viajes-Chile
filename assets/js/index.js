/* SMOOTH SCROLL */
$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        500,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
  /* MENSAJE DE ALERTA */
const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
/* VIAJES */
$(document).ready(function () {
  $(".card-title").click(function () {
    $(this).closest(".card").find(".list-receta").toggle("hide");
  });
});
