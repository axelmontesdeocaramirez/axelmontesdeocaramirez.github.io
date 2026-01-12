const sections = document.querySelectorAll("div[id^='conteneur']");
const menuLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
const skillsSection = document.getElementById("conteneur-skills");
const bars = document.querySelectorAll(".progressbar span");

let animated = false;

window.addEventListener("scroll", () => {
  const sectionTop = skillsSection.getBoundingClientRect().top;

  if (sectionTop < window.innerHeight - 100 && !animated) {
    bars.forEach(bar => {
      if (bar.classList.contains("html")) bar.style.width = "40%";
      if (bar.classList.contains("css")) bar.style.width = "35%";
      if (bar.classList.contains("javascript")) bar.style.width = "50%";
      if (bar.classList.contains("php")) bar.style.width = "10%";
      if (bar.classList.contains("sql")) bar.style.width = "60%";
    });
    animated = true;
  }
});
