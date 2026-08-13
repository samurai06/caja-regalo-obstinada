const MESSAGE = "Ya comiste obstinada 🍰";
const CONFETTI_COLORS = ["#ff4d6d", "#ffd166", "#06d6a0", "#4cc9f0", "#f8f3ff"];
const CONFETTI_PIECES = 70;

const gift = document.getElementById("gift");
const messageEl = document.getElementById("message");
const hintEl = document.getElementById("hint");
const resetBtn = document.getElementById("reset");
const confettiEl = document.getElementById("confetti");

let isOpen = false;

function throwConfetti() {
  const fragment = document.createDocumentFragment();

  for (let i = 0; i < CONFETTI_PIECES; i += 1) {
    const piece = document.createElement("span");
    piece.style.left = `${Math.random() * 100}vw`;
    piece.style.background = CONFETTI_COLORS[i % CONFETTI_COLORS.length];
    piece.style.animationDuration = `${2.4 + Math.random() * 2}s`;
    piece.style.animationDelay = `${Math.random() * 0.7}s`;
    piece.addEventListener("animationend", () => piece.remove());
    fragment.appendChild(piece);
  }

  confettiEl.appendChild(fragment);
}

function openGift() {
  if (isOpen) return;
  isOpen = true;

  gift.classList.add("is-open");
  gift.setAttribute("aria-label", "Caja de regalo abierta");
  hintEl.classList.add("is-hidden");
  messageEl.textContent = MESSAGE;
  messageEl.classList.add("is-visible");
  resetBtn.hidden = false;

  throwConfetti();
}

function closeGift() {
  isOpen = false;

  gift.classList.remove("is-open");
  gift.setAttribute("aria-label", "Abrir la caja de regalo");
  hintEl.classList.remove("is-hidden");
  messageEl.classList.remove("is-visible");
  messageEl.textContent = "";
  resetBtn.hidden = true;
  confettiEl.replaceChildren();
  gift.focus();
}

gift.addEventListener("click", openGift);
resetBtn.addEventListener("click", closeGift);
