//document.getElementById("count").innerText = 5

//function increment() {
//console.log("the button was clicked")
//}
//console.log (increment())

//function countdown() {
//   console.log (5)
//  console.log (4)
//  console.log (3)
//  console.log (2)
//  console.log (1)
//}

//countdown ()

// function myNumber() {
// console.log(42)
// }
// myNumber()

// let lap1=30
// let lap2=40
// let lap3=20

// function sum() {
// console.log(lap1+lap2+lap3)
// }
// sum()

// let lapsCompleted=0

// function incrementLap(){
// lapsCompleted= lapsCompleted + 1
// }
// incrementLap()
// incrementLap()
// incrementLap()

// console.log(lapsCompleted)
//console.log ("clicked")
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let count = 0

console.log(countEl)

function increment() {

     count += 1
     countEl.innerText = count
   
}
increment()

function save() {
    let countStr= count + " - "
    saveEl.innerText += countStr
    countEl.textContent = 0
    count = 0
}


// let username = "per"
// let message = "You have three new notifications"

// console.log(message + "," + username + "!")

// let messageToUser = (message + "," + username + "!")

// console.log(messageToUser)

// let name = "Anthony"
// let greeting= "Hi, my name is"

// let myGreeting= (greeting + " " + name)

// console.log(myGreeting)
// let welcomeEl= document.getElementById("welcome-el")
// let name = "Anthony"
// let greeting= "Hi, my name is"

// welcomeEl.innerText = greeting + name 
// welcomeEl.innerText = welcome.innerText + "👏" 



