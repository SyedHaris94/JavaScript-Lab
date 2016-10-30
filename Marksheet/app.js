var name = prompt("Enter Your Name","Your Name");
var fname = prompt("Enter Your Father's Name","Your Father's Name");
var regNum = Number(prompt("Enter Your Reg num"));
var batch = Number(prompt("Enter Your Batch num ", "4.0"))
var html = parseInt(prompt("Enter Your HTML Marks ","Your Marks"));
var css1 = parseInt(prompt("Enter Your CSS 1 Marks ","Your Marks"));
var css2 = parseInt(prompt("Enter Your CSS 2 Marks ","Your Marks"));

var add = (html+css1+css2);
var avg = (add/3);

 document.getElementById('sname').innerHTML=name;
 document.getElementById('fname').innerHTML=fname;
 document.getElementById('rnum').innerHTML=regNum;
 document.getElementById('bnum').innerHTML=batch;



// conditions for grade in html
if (html >= 90){
        document.getElementById('html').innerHTML=html + "%" +" A+ Grade";
}

else if(html >= 80){
        document.getElementById('html').innerHTML=html + "%" + " A Grade";        
}

else if(html >= 70){
        document.getElementById('html').innerHTML=html + "%" + " B Grade";
}

else if(html >= 60){
        document.getElementById('html').innerHTML=html + "%" + " C Grade";
}

else if(html <= 50){
       document.getElementById('html').innerHTML=html + "%" + "  F Grade";
}

// conditions for grade in CSS1
if (css1 >= 90){
        document.getElementById('css1').innerHTML=css1 + "%" +" A+ Grade";
}

else if(css1 >= 80){
        document.getElementById('css1').innerHTML=css1 + "%" + " A Grade";        
}

else if(css1 >= 70){
        document.getElementById('css1').innerHTML=css1 + "%" + " B Grade";
}

else if(css1 >= 60){
        document.getElementById('css1').innerHTML=css1 + "%" + " C Grade";
}

else if(css1 <= 50){
       document.getElementById('css1').innerHTML=css1 + "%" + "  F Grade";
}

// conditions for grade in css2
if (css2 >= 90){
        document.getElementById('css2').innerHTML=css2 + "%" +" A+ Grade";
}

else if(css2 >= 80){
        document.getElementById('css2').innerHTML=css2 + "%" + " A Grade";        
}

else if(css2 >= 70){
        document.getElementById('css2').innerHTML=css2 + "%" + " B Grade";
}

else if(css2 >= 60){
        document.getElementById('css2').innerHTML=css2 + "%" + " C Grade";
}

else if(css2 < 50){
       document.getElementById('css2').innerHTML=css2 + "%" + "  F Grade";
}

// conditions for grade in avg
if (avg >= 90){
        document.getElementById('avg').innerHTML=avg + "%" +" A+ Grade";
}

else if(avg >= 80){
        document.getElementById('avg').innerHTML=avg + "%" + " A Grade";        
}

else if(avg >= 70){
        document.getElementById('avg').innerHTML=avg + "%" + " B Grade";
}

else if(avg >= 60){
        document.getElementById('avg').innerHTML=avg + "%" + " C Grade";
}

else if(avg < 50){
       document.getElementById('avg').innerHTML=avg + "%" + "  F Grade";
}


