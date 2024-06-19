
 function func(){


    var x = document.getElementById("num").value
    document.getElementById("para").style.color = "red";
    document.getElementById("para").style.fontSize = "90px";
 document.getElementById("para").innerHTML = "Hello " + x;
 document.getElementById("num").value = "";
 alert("Hello" + x)
 }



 function table(){
    var n = document.getElementById("num").value
    var arr = []
    for(var i = 1; i<=10;i++)
        {   
            
            arr.push(n +" X "+ i +" = " + n*i)

        }
        document.getElementById("para").innerHTML= arr;
 }