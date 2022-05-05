 alert("Welcome in my page ");
 
    var userName = prompt ("Please Enter Your Name");
    document.write("Welcom" + userName )
 
 document.write("<br><br>")

 
var tem1 = parseInt(prompt("Enter the temprature in your city"));

 if(tem1 >=30 )
 {
   // console.log("It's very hot")
   document.write("It's very hot")

 }
 else if ( tem1 <30)
 {
   // console.log("It's Cold")
   document.write("It's Cold")
 }
 document.write("<br><br>")
var faculty = prompt ("FCI , Engineering  , Commerce  , Other ");
switch (faculty)
{
    case "FCI":
    document.write("You’re eligible to Programing tracks.")
    break;
}

switch (faculty)
{
    case "Engineering":
    document.write("You’re eligible to Network and Embedded tracks.")
    break;
}


switch (faculty)
{
    case "Commerce":
    document.write("You’re eligible to ERP and Social media tracks.")
    break;
}


switch (faculty)
{
    case "Other":
    document.write("You’re eligible to SW fundamentals track.")
    break;
}

document.write("<br><br>")

 
var userName = prompt ("Please Enter Your Name");
if ( !isFinite(userName))
{
    document.write(userName)
}
else
{
    document.write()
}


document.write("<br><br>")

var birth = parseInt(prompt("Enter Your Birth"))
alert( 2022-birth)



document.write("<br><br>")

var start = prompt ("Enter Start Number")
var count ;
for ( var count =0; count <10 ; count++)
{
    if (count%2 != 0)
    {
document.write(count)
    }
}
document.write("<br><br>")


var express = parseInt (prompt("Ex. 3+4*5/10*8 "))
var result = (3+4*5/10*8)
alert ("You entered: 3+4*5, and the result is:  " + result )

document.write("<br><br>")

var x = parseInt (prompt("Shape of the triangle , X =" ))
var y = parseInt (prompt("Shape of the triangle , Y=" ))
var z = parseInt (prompt("Shape of the triangle , Z =" ))
var x, y ,z;
if (x==y , y==z,z==x )
{
document.write("is equilateral")
}
else if (x==y, y!=z, z==x)
{
    document.write(" is  isosceles")
}
else if(x==y, y!=z, z!=x)
{
    document.write("is scalene")
}