var showTemp
const tp=setInterval(temperature,2000)
const st=setInterval(playGame,1000)

function playGame(){
    if(showTemp>50){
        document.getElementById("showStatus").innerText="Giảm Xuống"
    }
    else if(showTemp<20){
        document.getElementById("showStatus").innerText="Tăng lên"
    }
    else document.getElementById("showStatus").innerText=""

}
function stopGame(){
    clearInterval(tp)
    clearInterval(st)
}
function temperature(){
    showTemp=parseInt (Math.random()*120+10)
    document.getElementById("showTemp").innerText=""+showTemp;
}