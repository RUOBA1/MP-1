let one=document.getElementById('one');
let two=document.getElementById('two');
let output=document.getElementById('output');

function doAdd(){
    output.innerHTML=String(Number(one.value)+Number(two.value));
}

function doMinus(){
    output.innerHTML=String(Number(one.value)-Number(two.value));
}

function doMultiply(){
    output.innerHTML=String(Number(one.value)*Number(two.value));
}

function doDivide(){
    output.innerHTML=String(Number(one.value)/Number(two.value));
}

function doPower(){
    let ans=1;
    for(let i=0; i<Number(two.value); i=i+1){
        ans=Number(one.value)*ans;
    }
    output.innerHTML=String(ans);
}

function doClear(){
    one.value="";
    two.value="";
    output.innerHTML="";
}