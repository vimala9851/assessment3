function appendToDisplay(value) {
  document.getElementById('calc-display').value += value;
}

function clearDisplay() {
  document.getElementById('calc-display').value = '';
}

function deleteLastCharacter() {
  const display = document.getElementById('calc-display');
  display.value = display.value.slice(0, -1);
}

function calculateResult() {
  const display = document.getElementById('calc-display').value;
  try {
      const result = eval(display); // Simple evaluation of the string as a math expression
      document.getElementById('calc-display').value = result;
  } catch (e) {
      document.getElementById('calc-display').value = 'Error'; // Error handling for invalid expressions
  }
}
function handleArrayInput() {
  const arrayInput = document.getElementById('array-input').value;
  const numbers = arrayInput.split(',').map(Number); // Convert input string to an array of numbers
  document.getElementById('array-result').innerText = sumOfEvens(numbers);
}

function sumOfEvens(numbers) {
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] % 2 === 0) {
          sum += numbers[i];
      }
  }

  return sum;
}


let Person = {
  firstName: '',
  lastName: '',
  age: 0,

  getFullName: function() {
      return `${this.firstName} ${this.lastName}`;
  },

  increaseAge: function(years) {
      this.age += years;
  }
};

function updatePerson() {
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const age = parseInt(document.getElementById('ageInput').value, 10);
  const increment = parseInt(document.getElementById('incrementInput').value, 10);

  // Update person object
  Person.firstName = firstName;
  Person.lastName = lastName;
  Person.age = age;

  // Increment age by the specified number of years
  if (!isNaN(increment)) {
      Person.increaseAge(increment);
  }

  // Update the display
  document.getElementById('fullName').innerText = `Full Name: ${Person.getFullName()}`;
  document.getElementById('age').innerText = `Age: ${Person.age}`;
}
