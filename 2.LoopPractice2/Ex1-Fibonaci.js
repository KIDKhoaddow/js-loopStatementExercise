function printFib() {
    let number = parseInt(document.getElementById("numberFib").value)
    let a = 0;
    b = 1;
    c = 1;
    let result = "";
    if (number === 1)
        document.getElementById("result").innerText = a

    else if (number === 2)
        document.getElementById("result").innerText = "0" + "\n" + "1";
    else if (number >= 3) {
        result += a + "\n" + b + "\n" ;
        for (let i = 0; i < number - 2; i++) {
            c = a + b;
            a = b;
            b = c;
            result += "" + c + "\n";
        }
        document.getElementById("result").innerText = result


    }
    /*result+=a+"\n"+b+"\n"+c+"\n";
    for(let i=0;i<number;i++){
        a=b;
        b=c;
        c=a+b;
        result+=""+c+"\n";
    }*/
    // document.getElementById("result").innerText=result


}