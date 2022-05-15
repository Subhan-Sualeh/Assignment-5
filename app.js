// // // //   Chapter 31 - 34 


// // //  Question 1


// var currTime= new Date()


// document.write("<h1> Current Time </h1>")

// document.write("<h2>"+ currTime + "</h2>")


// // //  Question 2


// var currTime = new Date()

// var getMonth = currTime.getMonth()


// var monthNames= ['January','February','March','April','May','June','July','August','September','October','November','December']

// var monthByName = monthNames[getMonth]


// document.write("<h2> Current Month : "+ monthByName + "</h2>")


// // // Question 3


// var currTime = new Date()


// var getDay= currTime.getDay()


// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]


// var dayByName= dayNames[getDay]

// document.write("<h2> Current Day : "+ dayByName + "</h2>")


// // // Question 4


// var currTime = new Date()

// var getDay= currTime.getDay()

// if(getDay == 0 || getDay == 6){
    
//     document.write("<h2> Its Fun Day </h2>")

// }
// else{

//     document.write("<h2> Just Waiting For Weekend</h2>")

// }


// // // Question 5


// var currTime= new Date()

// var getDate= currTime.getDate()

// if(getDate < 15 ){

//     document.write("<h2> First fifteen days of the month </h2>")
    
// }
// else{

//     document.write("<h2> Last days of the month </h2>")

// }



// // //  Question 6


// var currTime= new Date()

// var elapMilliSec= currTime.getTime()

// var elapMinutes = elapMilliSec / (1000 * 60 )


// document.write("<h2> Current Date : " + currTime + "<h2>")

// document.write("<h2> Elapsed Milliseconds since january 1 , 1970 : "+ elapMilliSec +" </h2>")

// document.write("<h2> Elapsed Minutes since january 1 , 1970 : "+ elapMinutes +" </h2>")



// // // Question 7


// var currTime= new Date()

// var getHour= currTime.getHours()  

// if(getHour < 11){

//     console.log("its Am")

// }
// else{

//   console.log("Its PM")

// }


// // // Question 8


// var newDate= new Date("Dec 31 , 2022")


// document.write("<h2>"+newDate+"</h2>")


// // // Question 9


// var oldDate = new Date("June 18 , 2015")

// var currTime = new Date()

// var CurrDiff = currTime - oldDate 

// var Diff= CurrDiff / (1000 * 60 * 60 * 24)

// var Days = Math.floor(Diff)

// document.write("<h3>"+Days+" days have passed since 1st Ramadan , 2015")



// // // Question 10

 
// var oldDate = new Date("Jan 1, 2022")

// var currTime = new Date()

// var CurrDiff = currTime - oldDate 

// var Diff= CurrDiff / 1000 

// var Sec = Math.floor(Diff)

// document.write("<h3> On Reference date "+ currTime)

// document.write("<h3>"+Sec+" Seconds have passed since beginning of 2015")


// // // Question 11


// var time= new Date()

// var changingTime = new Date()

// var date = changingTime.setHours(changingTime.getHours() - 1 )


// document.write("<h3> On Reference date "+ time)

// document.write("<h3> 1 hour ago it was "+ changingTime)


// // // Question 12


// var time= new Date()

// var changingTime = new Date()

// var date = changingTime.setFullYear(changingTime.getFullYear() - 100 )


// document.write("<h3> On Reference date "+ time +"</h3>")

// document.write("<h3> 100 years back , it was "+ changingTime +"</h3>")


// // // Question 13


// var currTime= new Date()

// var getYear= currTime.getFullYear()

// var userAge= +prompt("Enter Your age in Numbers" , "Enter your Age")p

// var userBirth=getYear - userAge


// document.write("<h3> Your Age is "+ userAge +"</h3>")

// document.write("<h3>Your Birth Year is "+ userBirth +"</h3>")


// // // Question 14

 
// var customer= "Subhan Sualeh"
 
// var theMonth= 3

// var monthNames= ['January','February','March','April','May','June','July','August','September','October','November','December']

// var monthByName = monthNames[theMonth]

// var chargeUnit= 16

// var numUnit = 512

// var lateCharge= 350


// var amountPay= numUnit * chargeUnit

// var dueDatePay= amountPay + lateCharge


// document.write("<h2> K-Electric Bill </h2>")

// document.write(" Customer Name : <b>" + customer +"</b>" )

// document.write("<br> Month : <b>" + monthByName +"</b>" )

// document.write("<br> Number of Units : <b>" + numUnit +"</b>" )

// document.write("<br> Charges per Unit : <b>" + chargeUnit +"</b>" )

// document.write("<br><br> Net Amount Payable (within Due Date) : <b>" + amountPay +"</b>" )

// document.write("<br> Late payment surcharge : <b>" + lateCharge +"</b>" )

// document.write("<br> Gross Amount Payable (after Due Date) : <b>" + dueDatePay +"</b>" )




// // // //   Chapter 35 - 38


// // // Question 1

// var currTime = new Date()

// document.write("<h2>" + currTime+ "</h2>")


// // // Question 2


// var firstName=prompt("Enter your First Name")

// var lastName=prompt("Enter your Last Name")

// function fullname(firstName = "" , lastName = ""){

//    var combine = firstName+ " " + lastName 

//    return combine ;

// }

// var name = fullname(firstName , lastName)

// alert("Hello "+name)


// // // question 3


// var sum1=+prompt("Enter 1st Number")

// var sum2=+prompt("Enter 2nd Number")

// function plus(sum1 = 0 , sum2 = 0){

//    var add = sum1 + sum2 

//    return add ;

// }

// var sum = plus(sum1 , sum2)

// alert(sum1 +" + "+ sum2 + " = " + sum)


// // // question 4


// var digit1=+prompt("Enter 1st Number")

// var Operator=prompt("Enter Operator + - * /")

// var digit2=+prompt("Enter 2nd Number")

// // // //

// function calculator(digit1 , Operator , digit2){

// if(Operator==="+"){
//     var Ans=digit1 + digit2
//     document.write(digit1 + " " +Operator + " " + digit2 +" = " + Ans )
// }
// else if(Operator==="-"){
//     var Ans=digit1 - digit2
//     document.write(digit1 + " " +Operator + " " + digit2 +" = " + Ans )
// }
// else if(Operator==="*"){
//     var Ans=digit1 * digit2
//     document.write(digit1 + " " +Operator + " " + digit2 +" = " + Ans )
// }
// else if(Operator==="/"){
//     var Ans=digit1 / digit2
//     document.write(digit1 + " " +Operator + " " + digit2 +" = " + Ans )
// }

// }

// calculator(digit1 , Operator , digit2)


// // // Question 5


// var num=+prompt("Enter a Number to get its square")

// function square(num){

//     var sum = num * num

//     return sum ;

// }

// var sqRoot= square(num)

// alert("Square of " + num + " is " + sqRoot)


// // // Question 6


// var num=+prompt("Enter a Number to get its factorial")

// function factorialize(num) {

//     if (num === 0 || num === 1)

//         return 1;

//     for (var i = num - 1; i >= 1; i--) {

//         num = num * i ;

//     }

//     return num;

// }

// var answer= factorialize(num)

// alert("Factor of " + num + " is " + answer)


// // // Question 7


// var num=+prompt("Enter a Number to Start Counting with")

// var last=+prompt("Enter a Number to Stop counting with")

// function counter(num , last){

// for(i = num ; i <= last ; i++){

//     document.write(i + "<br>")

// }

// }

// var count=counter(num , last)


// // // Question 8


// var base=+prompt("Enter Base Square \n to calculate Hypotenuse")

// var perpendicular =+prompt("Enter Base Square \n to calculate Hypotenuse")


// var base2 = 0

// var perpendicular2 = 0

// function square(base , perpendicular){

//     base2 = base * base

//     perpendicular2 = perpendicular * perpendicular

// }

// square(base , perpendicular)

// var hypotenuse = base2 + perpendicular2

// document.write("<h2> Hyptenuse<sup>2</sup>=Base<sup>2</sup> + Perpendicular<sup>2</sup> </h2>")

// document.write("<h3> Hyptenuse<sup>2</sup> = " + base +"<sup>2</sup> + " + perpendicular +"<sup>2</sup> </h3>" )

// document.write("<h3> Hyptenuse<sup>2</sup> = " + base2 +" + " + perpendicular2 +"</h3>" )

// document.write("<h3> Hyptenuse<sup>2</sup> = " + hypotenuse + "<h3>")


// // // Question 9


// var width=+prompt("Enter Width of Rectangle")

// var height=+prompt("Enter Height of Rectangle")

// function calculate(width , height){

//     A= width * height

//     return A ;

// }

// var rectangle=calculate(width , height)

// alert("Area of Rectangle is "+rectangle)


// // // Question 10


// var text = "the quick brown fox"

// var sepe= text.split(" ")

// var newArray = []

// var work = null

// var work2 = null

// function capitilaize(sepe){

//     for(var i = 0 ; i < sepe.length ; i++){

//         work = sepe[i].charAt(0).toUpperCase()
//         work2= work + sepe[i].slice(1)

//         newArray.push(work2)
//     }

//     return newArray.join(" ") ;

// }

// var answer=capitilaize(sepe)

// document.write("<h3>" + text +"</h3>")

// document.write("<h3>" + answer +"</h3>")





