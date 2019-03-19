function openNav () {
    document.getElementById("info").style.height = "100%";
    document.getElementsByClassName("container")[0].classList.add('blur');
}

function closeNav () {
    document.getElementById("info").style.height = "0%";
    document.getElementsByClassName("container")[0].classList.remove('blur');
}

function openError () {
    document.getElementById("error").style.height = "100%";
    document.getElementsByClassName("container")[0].classList.add('blur');
}

function closeError () {
    document.getElementById("error").style.height = "0%";
    document.getElementsByClassName("container")[0].classList.remove('blur');
}




function hiddenButton() {
  let button = document.querySelector('.fortune-btn');
  button.remove();
}

function random(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1)
  rand = Math.round(rand);
  return rand;
}

function createInput() {
  let button = document.createElement('button');
  button.setAttribute("class", "fortune-btn");
  button.innerHTML = 'Отправить';
  document.querySelector('.submit-number').appendChild(button);
}

function valueInput(value) {
  let input = document.querySelector('.submit-number__result');
  input.value = value;
}
function tease(number) {
  if (number === 450) {
    return 'Азазазаз))'
  } else {
    if ((number / 10) % 2 === 0) {
      return 1;
    } else {
      return 100;
    }
  }
}
function digits(i, number) {
  if (i < 500) {
    setTimeout(function() {
      if (i < 100) {
        i += 4;
      } else {
        i += 10;
      }
      let number;
      if (i < 400 || i === 500) {
        number = random(10, 100);
      } else {
        number = tease(i);
      }
      document.querySelector('.random-number').innerHTML = number;
      valueInput(number);
      digits(i, number);
    }, i);
  } else {
    createInput();
  }
}

function start() {
	hiddenButton();
  	digits(0); 
}