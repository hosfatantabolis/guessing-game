class GuessingGame {
  constructor() {
    this.answer = Math.ceil((this.min + this.max) / 2);
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.answer = Math.ceil((this.min + this.max) / 2);
    return this.answer;
  }

  lower() {
    this.setRange(this.min, this.answer);
  }

  greater() {
    this.setRange(this.answer, this.max);
  }
}

module.exports = GuessingGame;
