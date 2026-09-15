let pay = document.getElementById("salary").value
let extra = document.getElementById("other").value
let income = 0

function showincome(){
    pay = document.getElementById("salary").value
    extra = document.getElementById("other").value
    income = parseInt(extra) + parseInt(pay)
    document.getElementById("showfunds").textContent = "total income: " + income
}