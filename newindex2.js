var arr = ["Egypt", "Russia", "Turkey","USA","US","Morroco","China","France","Italy","Qatar"] ;
var index= Math.floor(Math.random()*10)
console.log(arr[index])



var today = new Date ();
var date = today.getFullYear()+'-'+(today.getMonth())+'-'+today.getDate();



var userName = prompt ("Enter Your Name");
var reg = /[a-z]{3,50}/
var email = prompt ("Enter Your Email");
 var reg2 = /^[a-z @a-z.]/
console.log(reg.test(userName))
console.log(reg2.test(email))




var birth = prompt ("Enter you birth");
var birth1 = new Date().getFullYear();
console.log(birth1-birth);


var Arr = [{username:"Nada",degree:90},{username:"Noor",degree:95}, {username:"Anas",degree:100}]
Arr.sort(function(z,x)
{
return x.degree-z.degree
})
console.log(Arr)
Arr.push([{username:"Youssef",degree:91}])
//console.log(Arr)
Arr.pop([{username:"Nada",degree:90}])
//console.log(Arr)


var student= [{degree:60, degree:100,degree: 10, degree:15, degree:85}];
student.sort(function()
{
return student;
})

console.log(student)


var birth = new Birth (age);
var age =2022-birth.getFullYear()
console.log(age)




try{
var grades = [60,100,10,15,85];
grades.sort(function(m,n){
return m-n


})
}
catch (error){

console.error(error);

}


var start =0;
var end = grades.length -1;
var hights = grades[i];
for(var i = start; i<end; i++){

}