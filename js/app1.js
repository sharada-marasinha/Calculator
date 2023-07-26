
//Dont Copy Paste. Try yourself :)



//Accesing DOM model
let txtNumber1 = document.getElementById("txt-number1");
let txtNumber2 = document.getElementById("txt-number2");


function retriveValueAndCalculate(){
    let numberOne = txtNumber1.value;
    let numberTwo = txtNumber2.value;
    calculateSum(numberOne, numberTwo)
}

function calculateSum (valueOne, valueTwo){
    let total = valueOne + valueTwo;
    console.log(total);
    alert(total)

    //Below Codeline may help you to fix String concat issue
    //Number.parseFloat(valueOne) + Number.parseFloat(valueTwo)
}

function devide(valueOne, valueTwo){
    let sum = valueOne / valueTwo;
    console.log(sum);
    alert(sum);
}






