document.addEventListener("DOMContentLoaded", () => {
  // Toggle Nav Menu
  const toggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('nav-menu');

  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      nav.classList.toggle('show');
    });
  }

  // Highlight Active Link on Scroll
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset;
    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 50;
      const sectionId = section.getAttribute("id");
      const link = document.querySelector(".nav__menu a[href*=" + sectionId + "]");
      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add("active-link");
        } else {
          link.classList.remove("active-link");
        }
      }
    });
  });

  // Contact Form Submission
  const form = document.getElementById("contact-form");
  const thankYou = document.getElementById("thank-you");

  if (form && thankYou) {
    form.addEventListener("submit", async function (e) {
      e.preventDefault();

      const data = new FormData(form);
      const action = form.action;

      const response = await fetch(action, {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset();
        thankYou.innerText = "Thank you! Your message has been sent.";
        thankYou.style.color = "green";
        thankYou.style.display = "block";
      } else {
        thankYou.innerText = "Oops! There was a problem.";
        thankYou.style.color = "red";
        thankYou.style.display = "block";
      }
    });
  }
});
