function person (id, name , age){
    if (this instanceof person){
      //  throw "person class can not be instanced"
    }
this.id=id;
this.name=name;
this.age=age
}
person.prototype.display=function()
{
    console.log(this.id+" "+this.name+" "+this.age)
}
var p1= new person (1,"Nada", 25);
var p2= new person (2, "Noor", 19)
p1.display;
p2.display

function Emp (id,name,age,address)
{
    if(this  instanceof Emp){
   //throw "this is abstract class"
    }
    Emp.count = ++Emp.count||2;
    Emp.GetTotalCount = function()
    {
        return Emp.count;
    }
    if(Emp.count>=5){
throw "You can not create constructor function"

    }



    Emp.display = Emp.display||"You Should be patient person";
    Emp.displayHTRules = function()
    {
        return Emp.display
    }



    
    person.call(this,id,name,age)
this.address=address;
}
Emp.prototype.display= Object.create(person.prototype) 
Emp.prototype.constructor=Emp;
Emp.prototype.show= function()
{
    console.log("Hey I'am From Aswan")
}

Emp.prototype.display =function()
{
    console.log(this.id+" "+this.name+" "+this.age+" "+this.address)
}
var e1= new Emp (1,"Anas",5,"Aswan");
var e2= new Emp (2,"Aml",49,"Aswan  ")

function Std (id,name,age,address,phone){
    person.call(this,id ,name ,age ,address)
this.phone = phone;
}
Std.prototype=Object.create(person.prototype);
Std.prototype.constructor=Std;
Std.prototype.show=function()
{
    console.log("Hello")
}
Std.prototype.display = function()
{
    console.log(this.id+" "+this.name+" "+this.age+" "+this.address+" "+this.phone);
}
var s1 = new Std (1,"Anas",5,"Aswan",+201147477616);
var s2 = new Std  (2,"Aml",49,"Aswan",+201147476617)
        




function driver(_name,_age)
{
var name = _name;
var age = _age;


this.getName=function(){
    return _name;
}
this.setName=function(moon){
_name=moon;
}


this.getAge=function(){
    return age;
}
this.setAge=function(){
    _age=moon
}
function moon(){
    console.log(moon);
}
}




var course = ["1,2,3,4"]
var std = course
console.log(std)




