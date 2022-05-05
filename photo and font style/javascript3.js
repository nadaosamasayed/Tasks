    
 
//     // function detectspecialkeys(e){ 
//     // var evtobj=window.event? event : e 
//     //  if (evtobj.altKey || evtobj.ctrlKey || evtobj.shiftKey) 
//     // alert("you pressed one of the 'Alt', 'Ctrl', or 'Shift' keys") 
//     // } 
//     // document.onkeypress=detectspecialkeys; 
//     // function showChar(e) {
//     // alert("Key Pressed: " + String.fromCharCode(e.charCode) + "\n" + "charCode: " + e.charCode + "\n" + "SHIFT key pressed: " + e.shiftKey + "\n" + "ALT key pressed: " + e.altKey + "\n");
//     // }
var index = 0 ;
var img = document.getElementById('image') ;
var timer = 0;
var images = ["./1.jpg" , "./2.jpg " , "./3.jpg","./4.jpg","./5.jpg","./6.jpg"]
function Start(){
    console.log(img)
 timer = setInterval(show , 1000) ;
}

function show(){
    index++ ;
    if (index>images.length-1) {
        index=0
    }
    img.src=images[index]

}
function Stop() {
    clearInterval (timer)
}
