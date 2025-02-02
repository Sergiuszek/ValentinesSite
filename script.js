document.addEventListener("DOMContentLoaded", function() {
  hideButton("no-button");
  hideButton("yesButton");
});

function hideButton(buttonId) {
  const button = document.getElementById(buttonId);
  if (button) {
      button.style.display = "none";
  }
}

function showMessage(response) {
  if (response === "Dalej") {
    document.getElementById("question").textContent = "Czy zostaniesz moją walentynką?";
    showButton("no-button");
    showButton("yesButton");
    const nameElement = document.getElementById("name");
    if (nameElement) {
      nameElement.remove();
    }
    if (Dalej) {
      Dalej.remove();
    }
  }

  if (response === "No") {
    const noButton = document.getElementById("no-button");
    const container = document.querySelector(".container");
    const maxWidth = window.innerWidth - noButton.offsetWidth;
    const maxHeight = window.innerHeight - noButton.offsetHeight;

    noButton.style.position = "absolute";
    document.getElementsByClassName("image")[0].src = "images/gun.gif";

    const randomX = Math.max(0, Math.floor(Math.random() * maxWidth));
    const randomY = Math.max(0, Math.floor(Math.random() * maxHeight));

    noButton.style.left = randomX + "px";
    noButton.style.top = randomY + "px";

    document.getElementById("question").textContent =
      "Taka opcja nawet nie istnieje ";
    const nameElement = document.getElementById("name");
    if (nameElement) {
      nameElement.style.display = "none";
    }
  }

  if (response === "Yes") {
    const nameElement = document.getElementById("name");
    if (nameElement) {
      nameElement.remove();
    }
    const noButton = document.getElementById("no-button");
    if (noButton) {
      noButton.remove();
    }

    const yesMessage = document.getElementById("question");
    yesMessage.textContent = "No i super, Kocham Cię😻😻";
    yesMessage.style.display = "block";
    yesMessage.style.fontStyle = "normal";
    document.getElementsByClassName("image")[0].src = "images/dance.gif";

    const yesButton = document.getElementById("yesButton");
    if (yesButton) {
      yesButton.remove();
    }
  }
}

function showButton(buttonId) {
  const button = document.getElementById(buttonId);
  if (button) {
    button.style.display = "block";
  }
}
