// ================= MENU MOBILE =================
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", open);
  });
}

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});


// ================= COMPROMISSOS =================
const commitmentButtons = document.querySelectorAll(".commit-button");
const commitCount = document.getElementById("commitCount");
const progressFill = document.getElementById("progressFill");

function updateCommitments() {
  const total = commitmentButtons.length;
  const completed = document.querySelectorAll(".commit-button.active").length;
  const percentage = (completed / total) * 100;

  commitCount.textContent = `${completed}/${total}`;
  progressFill.style.width = `${percentage}%`;
}

commitmentButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.classList.toggle("active");
    button.closest(".commitment-item").classList.toggle("done");
    updateCommitments();
  });
});


// ================= ANIMAÇÃO AO ROLAR =================
const revealElements = document.querySelectorAll(
  ".space-card, .attitude-row, .skill-card, .comparison-card, .commitment-item, .question-box"
);

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.08 }
);

revealElements.forEach(element => {
  element.classList.add("reveal");
  observer.observe(element);
});
