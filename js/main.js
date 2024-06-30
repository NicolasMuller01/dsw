document.addEventListener("DOMContentLoaded", function () {
  let carousel = document.querySelector("#carouselExampleCaptions");
  if (carousel) {
    new bootstrap.Carousel(carousel, {
      interval: 2000,
      ride: "carousel",
    });
  }

  let comprarBtn = document.querySelector(".btn-success");
  if (comprarBtn) {
    comprarBtn.addEventListener("click", function () {
      alert("Producto agregado al carrito!");
    });
  }
});
