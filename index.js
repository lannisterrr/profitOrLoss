const input1 = document.getElementById('input-1');
const input2 = document.getElementById('input-2');
const input3 = document.getElementById('input-3');
const button = document.getElementById('btn');
const output = document.getElementById('output');

function clickHandler() {
  let ip = Number(input1.value);
  let qty = Number(input2.value);
  let curr = Number(input3.value);
  calculate(ip, qty, curr);
}

function calculate(initial, quantity, current) {
  if (initial > current) {
    let loss = (initial - current) * quantity;
    let lossPercentage = (loss / initial) * 100;
    showOutput(`Loss :${loss} and lost percent : ${lossPercentage}%`);
  } else if (current > initial) {
    let profit = (current - initial) * quantity;
    let profitPercentage = (profit / initial) * 100;
    showOutput(`Profit :${profit} and profit percent: ${profitPercentage}%`);
  } else {
    showOutput('No profit or no loss');
  }
}

function showOutput(msg) {
  output.innerText = msg;
}

button.addEventListener('click', clickHandler);
