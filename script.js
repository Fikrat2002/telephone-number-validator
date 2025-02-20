const userInput = document.getElementById('user-input');
const checkBtn = document.getElementById('check-btn');
const clearBtn = document.getElementById('clear-btn');
const resultsDiv = document.getElementById('results-div');

function checkNumber() {
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s-]?\d{3}[\s-]?\d{4}$/;

  if (userInput.value.trim() === '') {
    alert('Please provide a phone number');
    return;
  }

  const item = document.createElement('li');
  resultsDiv.appendChild(item);

  if (regex.test(userInput.value)) {
    item.textContent = `Valid US number: ${userInput.value}`;
    item.classList.add('valid');
    userInput.value = '';
  } else {
    item.textContent = `Invalid US number: ${userInput.value}`;
    item.classList.add('invalid');
    userInput.value = '';
  }
}

checkBtn.addEventListener('click', checkNumber);

clearBtn.addEventListener('click', () => {
  resultsDiv.innerHTML = '';
});

userInput.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    checkNumber();
  }
});