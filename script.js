const supportBtn = document.getElementById("supportBtn");
const supportPopup = document.getElementById("supportPopup");

supportBtn.addEventListener("click", e => {
  e.stopPropagation(); // 🔥 VIGTIG
  supportPopup.classList.toggle("show");
});

supportPopup.addEventListener("click", e => {
  e.stopPropagation(); // så klik inde i popup ikke lukker den
});

document.addEventListener("click", () => {
  supportPopup.classList.remove("show");
});
