function goAbout() {
  window.location = "About.html";
}

function sendMessage(e) {
  e.preventDefault();

  alert("Thank you for your message!");

  e.target.reset();
}

const words = ["BSIT Freshman", "Future Developer", "Creative Student"];
let i = 0;

setInterval(() => {
  const el = document.getElementById("typing");
  if (el) {
    el.textContent = words[i];
    i = (i + 1) % words.length;
  }
}, 2000);