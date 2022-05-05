
function Std(){

    var userName = document.getElementById("userName").value;
    var password = document.getElementById("password").value;
    localStorage.setItem("userName",JSON.stringify(userName));
    localStorage.setItem("password",JSON.stringify(password));
    
    
    var date=new Date()
    date.setDate(date.getDate()+20)
    
    document.cookie="userName=nada;expires="+date.toDateString()+";"
    

}



var xhr=new XMLHttpRequest();
 xhr.open("GET","https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products")

 xhr.onreadystatechange=function()
 {
     if(xhr.readyState==4&&xhr.status==200)
     {
         var products=JSON.parse(xhr.responseText)
                 for(var i=0;i<products.length;i++)
         {
             var newdiv=document.createElement("div");
             var newtxt=document.createElement("h2");
             var txt=document.createTextNode(products[i].price)
            
             newtxt.style.color="pink"
             newdiv.style.backgroundColor="black"
            
             newtxt.appendChild(txt);




             
 


             var img=document.createElement("img");
             img.setAttribute("src",products[i].image)
             newdiv.appendChild(newtxt);
            newdiv.appendChild(img);
             document.body.appendChild(newdiv)
img.style.borderRadius="40px";







        }   
     }
}
 xhr.send()



 var books=new XMLHttpRequest();
books.open("GET","https://www.googleapis.com/books/v1/volumes?q=${bookName}");
books.onreadystatechange=function()
{
    if(books.readyState==4&&books.status==200)
    {
        var products=JSON.parse(books.responseText);
        for(var i=0;i<products.length;i++)
        {
            var img =document.createElement("img");
            img.src=products[i].image;
            var title=document.createTextNode(products.items[i].id)


            document.body.appendChild(id)
            document.body.appendChild(title)
        }
        console.log(products)
    }
}
books.send();



var todos = new  XMLHttpRequest();
todos.open("GET","https://jsonplaceholder.typicode.com/todos");
todos.onreadystatechange=function(){
    if(todos.readyState==3&&todos.status==100){
        var production=JSON.parse(todos.responseText);
        for(var n=0;n<production.length; n++)
        {
            if(production[n].completed ==true){
                console.log(production[n].completed)
            }

        }
        console.log(production)
    }
}
todos.send()