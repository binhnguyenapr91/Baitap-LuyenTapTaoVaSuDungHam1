
function calculate(num1,num2) {
    if (num1<num2){
        alert("Number 1 is less than number 2");
    }else if(num1>num2){
        alert("Sum of two number:"+(num1+num2));
    }
}

function  mainFunction(){
    let number1 = parseFloat(document.getElementById("number1").value);
    let number2 = parseFloat(document.getElementById("number2").value);
    console.log(number1,number2);
    calculate(number1,number2);
}