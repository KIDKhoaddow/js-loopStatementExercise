function printFactorial(){
    let number=parseInt(document.getElementById("Factorial").value);
    let result=1;
    for(let i=1;i<=number;i++){
        result*=i
    }
    document.getElementById("result").innerText+=result;

}