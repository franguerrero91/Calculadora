//1º creamos las funciones para obtener el valor de los inputs
var input1 = () => parseInt(document.getElementById("input1").value);
var input2 = () => parseInt(document.getElementById("input2").value);

//Creamos las funciones para las operaciones
var sumNumber = () => input1() + input2()
var restNumber = () => input1() - input2()
var multiplynumber = () => input1() * input2()
var divideNumber = () => input1() / input2()

//Creamos las funciones para injertar texto en resuly y añadir el evento al clcik
var showResultSum =()=> document.getElementById("result").innerText = sumNumber()
document.getElementById("sum").addEventListener("click", showResultSum)

var showResultRest =()=> document.getElementById("result").innerText = restNumber()
document.getElementById("rest").addEventListener("click", showResultRest)

var showResultMultiply =()=> document.getElementById("result").innerText = multiplynumber()
document.getElementById("multiply").addEventListener("click", showResultMultiply)

var showResultDivide =()=> document.getElementById("result").innerText = divideNumber()
document.getElementById("divide").addEventListener("click", showResultDivide)

function indefined () {
    if (isNaN(input1()) || isNaN(input2())) {
        document.getElementById("result").innerText = "Error, debe introducir un número"
    } else {
    showResultSum();
    }
}

//No se porque no se ejecuta
