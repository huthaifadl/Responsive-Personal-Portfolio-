const toggle = document.querySelector(".toggle");
const banner = document.querySelector(".banner");
toggle.onclick = function () {
  toggle.classList.toggle("active");
  banner.classList.toggle("active");
};

function parallax(e) {
  this.querySelectorAll(".elements").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");
    const x = (window.innerWidth - e.pageX * speed) / 100;
    layer.style.transform = `translateX(${x}px)`;
  });
}

document.addEventListener("mousemove", parallax);
