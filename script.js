const salaryid = document.getElementById("salary")
const extraid = document.getElementById("extra")
const showleft = document.getElementById("showleftover")
const foodid = document.getElementById("food")
const houseid = document.getElementById("house")
const carid = document.getElementById("car")
const entertainmentid = document.getElementById("entertainment")
const electricityid = document.getElementById("electricity")
const loanid = document.getElementById("loan")
const kidsid = document.getElementById("kids")
const moreid = document.getElementById("more")
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
let leftovers = 0
let money = localStorage.getItem("betalt")


console.log("yes")
salaryid.value = money

function showincome(){
    localStorage.setItem("betalt", null)
    pay = document.getElementById("salary").value
    localStorage.setItem("betalt", pay)
    extra = document.getElementById("other").value
    income = parseInt(extra) + parseInt(pay)
    document.getElementById("showfunds").textContent = "Monthly Income: " + income 
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
    document.getElementById("showexpenses").textContent = "Monthly Expenses: " + expense
    leftover()
}
function leftover(){
    leftovers = income - expense
    showleft.textContent = "money left: " + leftovers
    if(leftovers >= 0){
        showleft.style.color = "green"
    }else{
        showleft.style.color = "red"
    }
}
