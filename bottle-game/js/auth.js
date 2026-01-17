const existingUser = localStorage.getItem("bottleGameUser");
if (existingUser) {
  window.location.href = "menu.html";
}

function login() {
  const usernameInput = document.getElementById("usernameInput");
  const error = document.getElementById("error");

  const username = usernameInput.value.trim();

  if (username === "") {
    error.innerText = "Please enter your name";
    return;
  }

  const userData = {
    username: username,
    unlockedLevel: 1,
    lastPlayedLevel: 1
  };

  localStorage.setItem("bottleGameUser", JSON.stringify(userData));

  window.location.href = "menu.html";
}
