// select all the buttons
const buttons = document.querySelectorAll('button');
// select the <input type="text" class="display" disabled> element
const input = document.querySelector('.input');
// add eventListener to each button
buttons.forEach(function(button) {
    button.addEventListener('click', calculate);
  });
  // calculate function
function calculate(event) {
    // current clicked buttons value
    const clickedButtonValue = event.target.value;
  
    if (clickedButtonValue === '=') {
      // check if the input is not empty then only do the calculation
      if (input.value !== '') {
        // calculate and show the answer to input
        input.value = eval(input.value);
      }
    } else if (clickedButtonValue === 'C') {
      // clear everything on input
      input.value = '';
    } else {
      // otherwise concatenate it to the input
      input.value += clickedButtonValue;
    }
  }