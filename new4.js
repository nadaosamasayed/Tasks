
var time;
var nada;
var noor;

function y(){


    var o=0;
   // win=window.open("","_blank",'width=90,height=30')
    time=setInterval(() =>{
        win.moveBy(o,o)
        if(o>70){
            clearInterval(time);
        }
        o+=20;
        win.focus();

    },1000);
    
}
y();



var timer2= setInterval(function(){
    
    var now = new Date()
    document.write(now.toLocalTimeString()+"<br>")
   
},1000);

function display(){
    clearInterval(timer2)
}

setTimeout(display,2000)
var win=window.open("","_blank",'width=300,height=250')














