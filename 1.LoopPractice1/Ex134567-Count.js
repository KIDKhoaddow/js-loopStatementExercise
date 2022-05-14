var number=0
var show=true
const myInterval = setInterval(myTimer, 100);

function myTimer() {
    document.getElementById("result1").innerHTML = ""+number
    ++number
    if(number>100){
        clearInterval(myInterval);

    }
}


function printFibonacci(){
    let a=0
    let b=1
    let c
    let arrFibonacci=""
    if(show){
        for(let i=0;i<20;i++){
            c=a+b
            a=b
            b=c
            arrFibonacci+=c+"-"
        }
        document.getElementById("result2").innerText="0-"+arrFibonacci
        show=false
    }
    else {
        document.getElementById("result2").innerText = ""
        show=true
    }
}

function findNumber(){
    let a=0
    let b=1
    let c
    let arrFibonacci=""
    while(c%5!=0){
        c=a+b
        a=b
        b=c
    }
    document.getElementById("result3").innerText=""+c

}

function sumFibonocci(){
    let a=0
    let b=1
    let c
    let sum=0
    if(show){
        for(let i=0;i<20;i++){
            c=a+b
            a=b
            b=c
            sum+=c
        }
        document.getElementById("result4").innerText=""+sum
        show=false
    }
    else {
        document.getElementById("result4").innerText = ""
        show=true
    }
}
function sumMutiSeven(){
    let Number=0
    let sum=7
    for (let i=2;i<30;i++){
        Number+=(sum*i)
    }
    document.getElementById("result5").innerText =""+Number
}

function printNumber(){
    if(show){
        for(let i=1;i<=100;i++){
            if(i%15==0){
                document.getElementById("result6").innerText +="FizzBuzz\n"
            }
            else if(i%3==0){
                document.getElementById("result6").innerText +="Fizz\n"
            }
            else if(i%5==0){
                document.getElementById("result6").innerText +="Buzz\n"
            }else   {
                document.getElementById("result6").innerText +=i+"\n"
            }
        }
        show=false
    }
    else {
        document.getElementById("result6").innerText =""
        show=true
    }

}


