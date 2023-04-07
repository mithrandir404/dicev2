function rollMixedDice(diceList, modifier) {
    let total = 0;
    const rolls = [];
    for (let i = 0; i < diceList.length; i++) {
      const match = diceList[i].match(/^(\d+)d(\d+)$/);
      if (!match) {
        alert('Invalid dice notation! Please enter a valid notation, such as "2d6".');
        return;
      }
      const numDice = parseInt(match[1]);
      const numSides = parseInt(match[2]);
      for (let j = 0; j < numDice; j++) {
        const roll = Math.floor(Math.random() * numSides) + 1;
        rolls.push(roll);
        total += roll;
      }
    }
    total += modifier;
    const rollsString = rolls.join(', ');
    return { total, rollsString };
  }
  
  function rollMixedDiceAndDisplayResult() {
    const diceInput = document.getElementById('dice-input');
    const modifierInput = document.getElementById('modifier-input');
    const resultHeader = document.getElementById('result-header');
    const resultText = document.getElementById('result-text');
    const resultCard = document.getElementById('result-card');
  
    const diceNotation = diceInput.value.trim();
    const diceList = diceNotation.split('+');
    const modifier = parseInt(modifierInput.value) || 0;
  
    const rollResult = rollMixedDice(diceList, modifier);
    resultHeader.textContent = `Rolling ${diceNotation}${modifier > 0 ? `+${modifier}` : modifier < 0 ? modifier : ''}`;
    resultText.textContent = `You rolled: ${rollResult.rollsString}. Total: ${rollResult.total}`;
    resultCard.classList.remove('hidden');
  }
  function clearForm() {
    const diceInput = document.getElementById('dice-input');
    const modifierInput = document.getElementById('modifier-input');
    const resultHeader = document.getElementById('result-header');
    const resultText = document.getElementById('result-text');
    const resultCard = document.getElementById('result-card');
  
    diceInput.value = '';
    modifierInput.value = '';
    resultHeader.textContent = '';
    resultText.textContent = '';
    resultCard.classList.add('hidden');
  }
  
  const clearButton = document.getElementById('clear-button');
  clearButton.addEventListener('click', clearForm);
  const rollButton = document.getElementById('roll-button');
  rollButton.addEventListener('click', rollMixedDiceAndDisplayResult);
  
  