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





