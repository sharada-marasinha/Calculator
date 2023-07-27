let txt=document.getElementById("txt");

let btnCE = document.getElementById("CE");
let btnC = document.getElementById("C");
let btnBack = document.getElementById("Back");

let btnMod=document.getElementById("%");
let btnDivi=document.getElementById("/");
let btnMul = document.getElementById("x");
let btnAddi = document.getElementById("+");
let btnMines = document.getElementById("-");

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
let btnDot = document.getElementById(".");

let num1;
let op;
let eqal;
btnAddi.addEventListener("click",e=>{
    op="+";
    num1=parseFloat(txt.value);
    txt.value='';
});
btnMul.addEventListener("click",e=>{
    op="*";
    num1=parseFloat(txt.value);
    txt.value='';
});
btnMines.addEventListener("click",e=>{
    op="-";
    num1=parseFloat(txt.value);
    txt.value='';
});
btnMod.addEventListener("click",e=>{
    op="%";
    num1=parseFloat(txt.value);
    txt.value='';
});
btnDivi.addEventListener("click",e=>{
    op="/";
    num1=parseFloat(txt.value);
    txt.value='';
})

let num2;
let sum;
btnEqual.addEventListener("click",e=>{
    eqal="=";
    num2=parseFloat(txt.value);
    oparate();
    txt.value=num1+" "+op+" "+num2+" "+"="+" "+sum;
    
    
});
function oparate(){
    switch(op){
        case '+':
            sum=num1+num2;
            break;
        case '-':
            sum=num1-num2;
            break;
        case '*':
            sum=num1*num2;
            break;
        case '/':
            sum=num1/num2;
            break;
        case '%':
            sum=num1%num2;
            break;
        default : 
            alert("Invalid Op");


    }
}


btnC.addEventListener("click",e=>{
    txt.value='';
});
btnBack.addEventListener("click",e=>{
    txt.value=txt.value.substr(0,txt.value.length-1);
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
btnDot.addEventListener("click", () => {
    if (!txt.value.includes(".")) {
        txt.value += ".";
    }
});
