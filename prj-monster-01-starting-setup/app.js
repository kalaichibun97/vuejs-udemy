function getRandomValue(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: []
    }
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        // Draw
        this.winner = 'draw';
      } else if (value <= 0) {
        // Player lost
        this.winner = 'monster';
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        // Draw
        this.winner = 'draw';
      } else if (value <= 0) {
        // Player lost
        this.winner = 'player';
      }
    }
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth < 0) {
        return {width: 0 + '%'}
      }
      return {width: this.monsterHealth + '%'};
    },
    playerBarStyles() {
      if (this.playerHealth < 0) {
        return {width: 0 + '%'}
      }
      return {width: this.playerHealth + '%'};
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    }
  },
  methods: {
    surrender() {
      this.winner = 'monster';
    },
    startNewGame() {
      this.playerHealth = 100;
      this.monsterHealth = 100;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    attackMonster() {
      this.currentRound++;
      const attackValue = getRandomValue(5, 12);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attacks', attackValue);
      this.attackPlayer();
    },
    attackPlayer() {
      const attackValue = getRandomValue(5, 13);
      this.playerHealth -= attackValue;
      this.addLogMessage('monster', 'attacks', attackValue);
    },
    specialAttack() {
      this.currentRound++;
      const attackValue = getRandomValue(10, 25);
      this.monsterHealth -= attackValue;
      this.addLogMessage('player', 'attacks', attackValue);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      this.playerHealth = Math.min(100, this.playerHealth + healValue);
      this.addLogMessage('player', 'heal', healValue);
      this.attackPlayer();
    },
    addLogMessage(who, what, value) {
      this.logMessages.unshift({
        who,
        what,
        value,
        timestamp: new Date()
      });
      if (this.logMessages.length > 10) {
        this.logMessages.pop();
      }
    }
  }
})

app.mount('#game');
