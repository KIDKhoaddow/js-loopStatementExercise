function playGameGN(){
    let max =parseInt(document.getElementById("maxNumber").value);
    let min=parseInt(document.getElementById("minNumber").value);
    let rand=parseInt(Math.random()*(max-min)+min)
    let inputFromUser;
    for(let i=0;i<3;i++){
        inputFromUser=parseInt(prompt("Xin mời nhập số bạn muốn kiểm tra"));
        if(inputFromUser==rand){
            alert("Chúc mừng , bạn đã chiến thắng trò chơi")
            break;
        }
        else if(inputFromUser<rand){
            alert("Thật đáng tiếc nhỏ hơn rồi")
        }
        else {
            alert("Thật đáng tiếc lớn hơn rồi")
        }
    }
    document.getElementById("Result").innerText="Sô cần tìm là :"+rand;
}

function resetGame(){
    document.getElementById("Result").innerText="";
}
