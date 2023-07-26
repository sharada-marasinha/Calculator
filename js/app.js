let txt=document.getElementById("txt");

let btnMod=document.getElementById("%");
let btnCE = document.getElementById("CE");
let btnC = document.getElementById("C");
let btnBack = document.getElementById("Back");
let btnMul = document.getElementById("x");
let btnAddi = document.getElementById("+");
let btnDot = document.getElementById(".");
let btnEqual = document.getElementById("=");

let btnOne = document.getElementById("1");
let btnTwo = document.getElementById("2");
let btnTree = document.getElementById("3");
let btnFore = document.getElementById("4");
let btnFive = document.getElementById("5");
let btnSix = document.getElementById("6");
let btnSeven = document.getElementById("7");
let btnEight = document.getElementById("8");
let btnNine = document.getElementById("9");
let btnDobZiro = document.getElementById("00");
let btnZero = document.getElementById("0");

let num1;
let op;
btnAddi.addEventListener("click",e=>{
    op=btnAddi.value;
    num1=parseInt(txt.value);
    txt.value='';
});

let num2;
btnEqual.addEventListener("click",e=>{
    num2=parseInt(txt.value);
    oparate();
});

function oparate(){
    switch(op){
        case '+':
            txt.value=num1+num2;
            break;
        case '-':
            txt.value=num1-num2;
            break;
        case '*':
            txt.value=num1*num2;
            break;
        case '/':
            txt.value=num1/num2;
            break;
        case '%':
            txt.value=num1%num2;
            break;
        default : 
            alert("Invalid Op");


    }
}


btnC.addEventListener("click",e=>{
    txt.value='';
});

btnOne.addEventListener("click",e=>{
    btnOne=txt.value+=1;
});
btnTwo.addEventListener("click",e=>{
    btnTwo=txt.value+=2;
});
btnTree.addEventListener("click",e=>{
    btnTree=txt.value+=3;
});
btnFore.addEventListener("click",e=>{
    btnFore=txt.value+=4;
});
btnFive.addEventListener("click",e=>{
    btnFive=txt.value+=5;
});
btnSix.addEventListener("click",e=>{
    btnSix=txt.value+=6;
});
btnSeven.addEventListener("click",e=>{
    btnSeven=txt.value+=7;
});
btnEight.addEventListener("click",e=>{
    btnEight=txt.value+=8;
});
btnNine.addEventListener("click",e=>{
    btnEight=txt.value+=9;
});
btnDobZiro.addEventListener("click",e=>{
    btnDobZiro=txt.value+="00";
});
btnZero.addEventListener("click",e=>{
    btnZero=txt.value+=0;
});
