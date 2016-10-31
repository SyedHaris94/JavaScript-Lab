var num = Number(prompt("Enter A Number to Generate Table Of Your Choice:"));

function generateTabel(num) {
    for(var i=1; i<=10; i++) {
       document.write("<h2>" + num +  "*" + i + "=" + (num*i)  + "</h2>"+  "</br>");
 }
}

generateTabel(num);