const GameState = {
  getUnlockedLevel() {
    return parseInt(localStorage.getItem("unlockedLevel")) || 1;
  },

  unlockNextLevel(currentLevel) {
    const unlocked = this.getUnlockedLevel();
    if (currentLevel >= unlocked) {
      localStorage.setItem("unlockedLevel", currentLevel + 1);
    }
  },

  setCurrentLevel(level) {
    localStorage.setItem("currentLevel", level);
  },

  getCurrentLevel() {
    return parseInt(localStorage.getItem("currentLevel")) || 1;
  }
};
