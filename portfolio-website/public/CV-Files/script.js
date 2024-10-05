// Smooth scroll to section
document.querySelectorAll("header nav ul li a").forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const sectionId = this.getAttribute("href").substring(1);
    document.getElementById(sectionId).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Back to Top button functionality
const backToTopButton = document.getElementById("backToTop");

window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
};

backToTopButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
