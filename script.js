const salaryid = document.getElementById("salary")
const extraid = document.getElementById("other")
const showleft = document.getElementById("showleftover")
const foodid = document.getElementById("food")
const houseid = document.getElementById("house")
const carid = document.getElementById("car")
const entertainmentid = document.getElementById("entertainment")
const electricityid = document.getElementById("electricity")
const loanid = document.getElementById("loan")
const travelid = document.getElementById("travel")
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
let ekstra = localStorage.getItem("ekstra")
let mat = localStorage.getItem("mat")
let hus = localStorage.getItem("hus")
let bil = localStorage.getItem("bil")
let moro = localStorage.getItem("moro")
let strøm = localStorage.getItem("strøm")
let lan = localStorage.getItem("lan")
let reise = localStorage.getItem("reise")
let barn = localStorage.getItem("barn")
let mer = localStorage.getItem("mer")


salaryid.value = money
extraid.value = ekstra
foodid.value = mat
houseid.value = hus
carid.value = bil
entertainmentid.value = moro
electricityid.value = strøm
loanid.value = lan
travelid.value = reise
kidsid.value = barn
moreid.value = mer


function showincome(){
    pay = document.getElementById("salary").value
    localStorage.setItem("betalt", pay)
    extra = document.getElementById("other").value
    localStorage.setItem("ekstra", extra)
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
    localStorage.setItem("mat", food)
    localStorage.setItem("hus", house)
    localStorage.setItem("bil", car)
    localStorage.setItem("moro", entertainment)
    localStorage.setItem("strøm", electricity)
    localStorage.setItem("lan", loan)
    localStorage.setItem("reise", travel)
    localStorage.setItem("barn", kids)
    localStorage.setItem("mer", more)
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
