const levelsContainer = document.getElementById("levels");
const unlocked = GameState.getUnlockedLevel();
const TOTAL_LEVELS = 10;

levelsContainer.innerHTML = "";

for (let i = 1; i <= TOTAL_LEVELS; i++) {
  const btn = document.createElement("button");
  btn.textContent = "Level " + i;

  if (i <= unlocked) {
    btn.onclick = () => {
      GameState.setCurrentLevel(i);
      window.location.href = "game.html";
    };
  } else {
    btn.disabled = true;
  }

  levelsContainer.appendChild(btn);
}
