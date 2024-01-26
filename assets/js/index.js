/* SMOOTH SCROLL */
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offset =
        targetElement.offsetTop -
        document.querySelector(".navbar").offsetHeight;

      window.scrollTo({
        top: offset,
        behavior: "smooth",
      });
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
