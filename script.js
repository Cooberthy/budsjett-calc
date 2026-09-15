let pay = document.getElementById("salary").value
let extra = document.getElementById("other").value
let food = document.getElementById("food").value
let house = document.getElementById("house").value
let car = document.getElementById("car").value
let entertainment = document.getElementById("entertainment").value
let electricity = document.getElementById("electricity").value
let loan = document.getElementById("loan").value
let travel = document.getElementById("travel").value
let kids = document.getElementById("kids").value
let more = document.getElementById("other").value
let income = 0
let expense = 0
more = 0

function showincome(){
    pay = document.getElementById("salary").value
    extra = document.getElementById("other").value
    income = parseInt(extra) + parseInt(pay)
    document.getElementById("showfunds").textContent = "total income: " + income
}
function expences(){
    food = document.getElementById("food").value
    house = document.getElementById("house").value
    car = document.getElementById("car").value
    entertainment = document.getElementById("entertainment").value
    electricity = document.getElementById("electricity").value
    loan = document.getElementById("loan").value
    travel = document.getElementById("travel").value
    kids = document.getElementById("kids").value
    more = document.getElementById("more").value
    expense = parseInt(food) + parseInt(house) + parseInt(car) + parseInt(entertainment) + parseInt(electricity) + parseInt(loan) + parseInt(travel) + parseInt(kids) + parseInt(more)
    document.getElementById("showexpenses").textContent = "total expenses: " + expense
    console.log(expense)
}