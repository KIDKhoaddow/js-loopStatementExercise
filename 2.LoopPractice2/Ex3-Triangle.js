let result1="", result2="",result3="";

for(let i=1;i<=5;i++ ){
    for (let j=0;j<i;j++){
        result1+="*"
    }
    result1+="<br/>"
}
result1+="<br/>"
for (let i=5;i>0;i--){
    for(let j=0;j<i;j++){
        result1+="*"
    }
    result1+="<br/>"
}
result1+="<br/>"
for(let i=1;i<=5;i++ ){
    for (let j=0;j<i;j++){
        result2+="*"
    }
    result2+="<br/>"
}
result2+="<br/>"
for (let i=5;i>0;i--){
    for(let j=0;j<i;j++){
        result2+="*"
    }
    result2+="<br/>"
}
result2+="</br>"
document.getElementById("result1").innerHTML=result1
document.getElementById("result2").innerHTML=result2

for(let i=0;i<6;i++){
    if(i===0||i===5){
        for(let j=0;j<20;j++){
            result3 += "*";
        }
    }else{
        for(let j=0;j<20;j++){
            if(j===0||j===19){
                result3 += "*";
            }
            else{result3+="&ensp;"}
        }
    }

    result3 +="<br/>"
}





document.getElementById("result3").innerHTML=result3



