//Adaptar Texto

function adaptarTexto() {
    var input = document.getElementById("awnswer");
    var texto = input.value;
    var tamanhoTexto = texto.length;
    var tamanhoFonte = Math.max(12, 20 - tamanhoTexto);
    input.style.fontSize = tamanhoFonte + "px";
}

// Mostrar Perguntas

function showNextInput() {
    var input1 = document.querySelector(".inputs_1");
    var input2 = document.querySelector(".inputs_2");
    var btn1 = document.querySelector("#submit_button_1");
    var btn2 = document.querySelector("#submit_button_2");

    input1.classList.add("hiddens");
    input2.classList.remove("hiddens");

    btn1.classList.add("hiddens");
    btn2.classList.remove("hiddens");
}

// Timer

var timerElement = document.getElementById("timer");
var userInput = document.getElementById("user-input");

function startTimer() {
  var timeInSeconds = 300;
  var timer = setInterval(function() {
    var minutes = Math.floor(timeInSeconds / 60);
    var seconds = timeInSeconds % 60;

    timerElement.innerHTML = minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");

    if (timeInSeconds === 0) {
      clearInterval(timer);
      timerElement.innerHTML = "Tempo esgotado!";
      userInput.disabled = true;
    }

    timeInSeconds--;
  }, 1000);
}