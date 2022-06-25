// expression function

// var number = function() {
//     var n1 = 3
//     var n2 = 5
//     alert("addition is " + n1+n2)
// }

// number()

//------//

// default variable for a function

// var number = function(num1 = 1 , num2 = 2){
//     alert(num1+num2)
// }
// number(10)

//------//

// var user = prompt("Enter yout username")
// var pass = prompt("Enter yout password")

// if(user.length >= 3 && pass.length >= 8){
//     alert("you are successfully login")
// }else{
//     alert("your data is no accessable")
// }

//------//

// var number = Math.floor(Math.random()*100000)
// var test = prompt("Are you a robot?" +" "+ number)

// if(test == number){
//     alert("wellcome")
// }else{
//     alert("please try again my friend !")
// }

//------//

// for(var i=0 ; i<=100 ; i++){
//     if (i%2==0){
//         console.log(i)
//     }
// }

//------//

/*
var number = Number(prompt("Enter your number : "))
var sum = 0

for (var i=1 ; (number / 10 ) != 0 ; i++){
    sum += (number % 10 )
    number = Math.floor(number/10)
}
console.log(sum)
*/

//------//

// var digit = Number(prompt("Enter your number : "))
// sum = 0

// while (digit / 10 != 0){
//     sum += digit % 10
//     digit = Math.floor(digit/ 10)
// }
// console.log(sum)

//------//

// var first = Number(prompt("Enter your number : "))
// var second = Number(prompt("Enter your second number : "))

// if (first % 2 == 0){
//     while (first<second){
//         console.log(first)
//         first+=2
//     }
// }else{
//     first++
//     while (first<second){
//         console.log(first)
//         first+=2
//     }
// }

//------//

// var element = Number(prompt("Enter your element : "))
// var sum = 0
// var x = 1
// while(x<=element){
//     var digit = Number(prompt("Enter your numebrs : "))
//     sum+=digit
//     x++
// }
// console.log(sum/element)

//------//

// var number = Number(prompt("Enter your number : "))
// var power = Number(prompt("Enter your power : "))

// var final = 1
// while(power!=0){
//     final*=number
//     power-=1
// }
// console.log(final)

//------//

// write a program to get a number and add them into a array

// var lst = []
// var number = 0
// while (number!=-1){
//     number = Number(prompt("Enter your number : "))
//     if (number!=-1){
//         lst.push(number)
//     }
// }
// console.log(lst)

//------//

// var user = [
//     {name:"amir" , family: "khier", nickname:"amdukf", age:19},
//     {name:"mamad" , family: "varz", nickname:"duke", age:32}
// ]

// console.log(user[0].nickname)

//------//

// سامانه ثبت نام

// var database = [
// {id : 1, name:"tyrell", lastname : "wellick", age : 40, email : "tyrellwellick@gmail.com"},
// {id : 2, name:"amir", lastname : "khiery", age : 19, email : "amir@gmail.com"},
// {id : 3, name:"elliot", lastname : "Alderson", age : 40, email : "elliot@gmail.com"},

// ]
// var username = String(prompt("Enter your name : "))
// var userlastname = String(prompt("Enter your lastname : "))
// var userage = Number(prompt("Enter your age : "))
// var useremail = String(prompt("Enter your email : "))

// if (username.length < 3 || username.length > 10) {
//     alert("Please Enter your username again")
// }
// else if (userlastname.length < 3 || userlastname.length > 15) {
//     alert("Please Enter your lastname again")
// }
// else if (isNaN(userage) || userage.length > 3  ){
//     alert("Please Enter your age again")
// }
// else {
//     var newdata = {
//         id : 4,
//         name: username,
//         lastname: userlastname,
//         family: userlastname,
//         age : userage,
//         email : useremail
//     }
// }
// console.log(newdata)

//------//

// var data = [10,20,30,40,50]

// data.forEach(function(number){
//     console.log(number)
// })

//------//

// include example

// var username = prompt("Enter your username : ")

// var names = [
//     'ali',
//     'reza',
//     'saman',
//     'mousa',
//     'amir'
// ]

// if (names.includes(username) == true ){
//     console.log("Wellcome to your account")
// }else{
//     console.log("You have to sign up")
// }

//------//

// var database = [
// {id : 1, name:"tyrell", lastname : "wellick", age : 40, email : "tyrellwellick@gmail.com"},
// {id : 2, name:"amir", lastname : "khiery", age : 19, email : "amir@gmail.com"},
// {id : 3, name:"elliot", lastname : "Alderson", age : 40, email : "elliot@gmail.com"},

// ]

// var sometest = database.some(function(user){

//     return user.name == 'amir'
// })

// console.log(sometest)   // only returns true or false

//------//

// every example

// var ages = [10,33,49,13,18,19]

// ages.every(function(number){
//     console.log(number)
//     return true
// })

//------//

// every example

// var groupuser = [
//     {id : 1 , name : 'Alex' , age : 10},
//     {id : 2 , name : 'mrpink' , age : 41},
//     {id : 3 , name : 'Reza' , age : 24},
//     {id : 4 , name : 'Amir' , age : 20},
//     {id : 5 , name : 'Tyrell' , age : 38}

// ]

// var userchecker = groupuser.every(function(info){

//     if (info.age < 18){
//         console.log("You cant access to this group" + " " + info.name)
//     }else{
//         console.log("Wellcome to this group")
//     }
// })

//------//

// delete product

// var allProducts = [
// 	{id: 1, name: 'Laptop', price: 17000000},
// 	{id: 2, name: 'Phone', price: 7000000},
// 	{id: 3, name: 'Pen', price: 12000},
// 	{id: 4, name: 'Pencil', price: 9000},
// 	{id: 5, name: 'Eraser', price: 6000},
// 	{id: 6, name: 'Milk', price: 35000},
// ]

// var userBasket = [
// 	{id: 1, name: 'pen', price: 12000},
// 	{id: 2, name: 'pencil', price: 9000},
// 	{id: 3, name: 'sandwitch', price: 10000}
// ]

// var menu = Number(prompt("Enter your option : (For delete something from your basket , Enter 1 or for adding something in your basket , Enter 2) "))
// var delindex;
// if (menu == 1 ){
//     userBasket.forEach(function(basket){
//         console.log(basket.name)
//     })
//     var del = prompt("Enter your product to wanna delete")
//     userBasket.some(function(deloption){
//         if (deloption.name == del){
//             delindex = deloption.id
//             userBasket.splice(delindex-1 , 1)
            
//         }
//     })

//     console.log(userBasket)

// }

//------//

// map

// var numbers = [2,5,7,9,12]

// var shownum = numbers.map(function(score){

//     return score ** 2
// })

// console.log(shownum)

//------//

// قرینه 

// var str = prompt("Enter your string : ")
// var strarr = str.split('')
// var strrev = strarr.reverse()
// var strjo = strrev.join('')


// if (str == strjo){
//     console.log("Your string is indictable")
// }else{
//     console.log("Next time dude")
// }

//------//

// ToDo list 

// var todos = [
//     {id :1 , title : "learn Docker" , situation : false},
//     {id :2 , title : "buying Hardware" , situation : false},
//     {id :3 , title : "going to party" , situation : false}
// ]

// var menu = prompt("Enter your option , 1 for Enter a Todo , 2 for Deleting a Todo , 3 for changing the situation")

// if (menu === "1"){
//     var new_todo = prompt("Enter your Todo")
//     var new_option = {
//         id : todos.length + 1,
//         title : new_todo,
//         situation : false
    
//     }

//     todos.push(new_option)
//     console.log(todos)
    
// }else if (menu === "2"){
//     var del = prompt("Enter the list that you wanna to delete")

//     var remove = todos.findIndex(function(todo){
//         return todo.title === del
//     })

//     todos.splice(remove , 1)

//     console.log(todos)


// }else if (menu === "3"){
//     var sit = prompt("Enter your title to change the situation ")

//     var situationchange = todos.forEach(function(todo){
//         if (todo.title === sit){
//             todo.situation = true
//         }
//     })

//     console.log(todos)



// }else{
//     alert("go , go")
// }

//------//

// IIFE Function

// (function(){
//     alert("This is a test")
// })()

//------//

// Hoisting

// num1 = 10

// console.log(num1)

// var num1

//------//

//  setInterval

// var i = 10

// var timer = setInterval(function(){

//     if (i === 0){
//         clearInterval(timer) // This is for stoping the Interval
//     }

//     console.log(i)
//     i--

// } , 1000)

//------//

// setTimeout

// setTimeout(function(a,b) {
//     console.log(a+b)    
// }, 2000 , 10 , 20);  // arguments that send to a and b
 
//------//

let h1style = document.getElementById('text1')

// استایل دهی به عناصر

h1style.style.color = "blue"
h1style.style.fontSize = "40px"

h1style.innerHTML = "This is a second test"

// createElement 

let cre = "js_test"

let tagDiv = document.createElement('div')

// append a tag

let alltag = document.querySelector('ul')

let newtag = document.createElement('li')

newtag.innerHTML = "IBM"

alltag.append(newtag) // we can also use appendChild

console.log(alltag)

//------//

