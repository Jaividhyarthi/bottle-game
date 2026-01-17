const level = GameState.getCurrentLevel();
document.getElementById("levelTitle").innerText = "Level " + level;

const colors = ["red", "blue", "green", "yellow"];
let hidden = [...colors].sort(() => Math.random() - 0.5);
let player = [...colors].sort(() => Math.random() - 0.5);

let first = null;
let completed = false;

const container = document.getElementById("bottles");
const matchesText = document.getElementById("matches");
const nextBtn = document.getElementById("nextLevelBtn");
const congrats = document.getElementById("congrats");

function render() {
  container.innerHTML = "";
  player.forEach((color, i) => {
    const div = document.createElement("div");
    div.className = "bottle";
    div.style.background = color;
    div.onclick = () => select(i);
    container.appendChild(div);
  });

  checkMatches();
}

function select(i) {
  if (completed) return;

  if (first === null) {
    first = i;
  } else {
    [player[first], player[i]] = [player[i], player[first]];
    first = null;
    render();
  }
}

function checkMatches() {
  let matches = 0;
  for (let i = 0; i < player.length; i++) {
    if (player[i] === hidden[i]) matches++;
  }

  matchesText.innerText = matches;

  if (matches === hidden.length && !completed) {
    completed = true;

    congrats.style.display = "block";
    spawnBubbles(30);

    setTimeout(() => {
    nextBtn.style.display = "inline-block";
    }, 1500);

  }
}

nextBtn.onclick = () => {
  GameState.unlockNextLevel(level);
  GameState.setCurrentLevel(level + 1);
  window.location.href = "levels.html";
};

render();
function spawnBubbles(count = 25) {
  const container = document.getElementById("bubbles");

  for (let i = 0; i < count; i++) {
    const bubble = document.createElement("div");
    bubble.className = "bubble";

    bubble.style.left = Math.random() * 100 + "vw";
    bubble.style.width = bubble.style.height =
      10 + Math.random() * 30 + "px";

    bubble.style.animationDuration =
      2 + Math.random() * 2 + "s";

    container.appendChild(bubble);

    setTimeout(() => bubble.remove(), 4000);
  }
}
