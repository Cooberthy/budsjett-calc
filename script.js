const showleft = document.getElementById("showleftover")
let pay = 0
let extra = 0
let food = 0
let house = 0
let car = 0
let entertainment = 0
let electricity = 0
let loan = 0
let travel = 0
let kids = 0
let more = 0
let income = 0
let expense = 0
more = 0
let leftovers = 0






function showincome(){
    pay = document.getElementById("salary").value
    extra = document.getElementById("other").value
    income = parseInt(extra) + parseInt(pay)
    document.getElementById("showfunds").textContent = "total income: " + income
    leftover()
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
    leftover()
}
function leftover(){
    leftovers = income - expense
    showleft.textContent = leftovers
    if(leftovers >= 0){
        showleft.style.color = "green"
    }else{
        showleft.style.color = "red"
        console.log("iunno")
    }
}