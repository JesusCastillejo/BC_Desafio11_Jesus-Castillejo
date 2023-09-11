document.getElementById('screen').onclick = function() {this.value = ''};

document.getElementById('btn1').onclick = function() {document.getElementById('screen').value += '1'};
document.getElementById('btn2').onclick = function() {document.getElementById('screen').value += '2'};
document.getElementById('btn3').onclick = function() {document.getElementById('screen').value += '3'};
document.getElementById('btnPlus').onclick = function() {document.getElementById('screen').value += '+'};

document.getElementById('btn4').onclick = function() {document.getElementById('screen').value += '4'};
document.getElementById('btn5').onclick = function() {document.getElementById('screen').value += '5'};
document.getElementById('btn6').onclick = function() {document.getElementById('screen').value += '6'};
document.getElementById('btnMinus').onclick = function() {document.getElementById('screen').value += '-'};

document.getElementById('btn7').onclick = function() {document.getElementById('screen').value += '7'};
document.getElementById('btn8').onclick = function() {document.getElementById('screen').value += '8'};
document.getElementById('btn9').onclick = function() {document.getElementById('screen').value += '9'};
document.getElementById('btnMultiply').onclick = function() {document.getElementById('screen').value += '*'};

document.getElementById('btn0').onclick = function() {document.getElementById('screen').value += '0'};
document.getElementById('btnEqual').onclick = calcular;
document.getElementById('btnClear').onclick = function() {document.getElementById('screen').value = ''};
document.getElementById('btnDivide').onclick = function() {document.getElementById('screen').value += '/'};

function calcular() {
  try {
    let pantalla = document.getElementById('screen');
    let valor = pantalla.value;
    if (valor.length > 13) {
      pantalla.value = "Error: Demasiados dígitos";
    } else {
      pantalla.value = eval(valor);
    }
  } catch(err) {
    document.getElementById('screen').value = "Error";
  }
}