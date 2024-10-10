document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("mode-toggle");
  const bodyElement = document.body;

  if (localStorage.getItem("dark-mode") === "enabled") {
    bodyElement.classList.add("dark-mode");
    toggleButton.textContent = "Light Mode";
  }

  toggleButton.addEventListener("click", function () {
    if (bodyElement.classList.contains("dark-mode")) {
      bodyElement.classList.remove("dark-mode");
      toggleButton.textContent = "Dark Mode";
      localStorage.setItem("dark-mode", "disabled");
    } else {
      bodyElement.classList.add("dark-mode");
      toggleButton.textContent = "Light Mode";
      localStorage.setItem("dark-mode", "enabled");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const scrollLinks = document.querySelectorAll(".scroll-link");
  scrollLinks.forEach(function (scrollLink) {
    scrollLink.addEventListener("click", function (event) {
      event.preventDefault();

      const targetClass = scrollLink.getAttribute("data-target");
      const targetSection = document.querySelector(targetClass);

      if (targetSection) {
        targetSection.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
document.getElementById("menu-toggle").addEventListener("click", function () {
  const navList = document.getElementById("list-nav");
  navList.classList.toggle("active");
});
const navItem = document.querySelectorAll(".scroll-link");

navItem.forEach((item) => {
  item.addEventListener("click", () => {
    const navList = document.getElementById("list-nav");
    navList.classList.remove("active");
  });
});
