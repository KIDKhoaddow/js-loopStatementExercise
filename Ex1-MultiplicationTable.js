let makeTable ="<table style=border-collapse:collapse>"

for (let i=1;i<=9;i++){
    makeTable +="<tr>"+"\n"
    for(let j=2;j<=9;j++){
        makeTable +="<td>"+j+"x"+i+"="+(j*i)+"\n"+"</td>"
    }
    makeTable +="</tr>"+"\n"
}
makeTable +="</table>"
document.getElementById("body").innerHTML=makeTable