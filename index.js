let calcu = document.getElementById("calculate")
let bill = document.getElementById("bill")
let tip = document.getElementById("tip")
let total = document.getElementById("total")
function calculaor(){
    let billup = Number(bill.value);
    let tipup = Number(tip.value);
    let sucess = billup + tipup
    console.log(Math.floor(sucess))
    total.innerHTML = sucess
}

calcu.addEventListener("click",calculaor)