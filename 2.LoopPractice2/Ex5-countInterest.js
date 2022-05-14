function calculate() {
    let money = parseInt(document.getElementById("money").value);
    let month = parseInt(document.getElementById("month").value);
    let interest = parseFloat(document.getElementById("interest").value);
    let ratio=interest/100
    for(let i=0;i<month;i++){
        money+=(money*=ratio)
    }
    document.getElementById("Result").innerText=""+money


}