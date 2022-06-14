function createTable(form)
{
//Subtraction questions
let a,b;
//get values from the user through the form
let num = form.ques.value;
let ques = form.digit.value;
if(ques>3) { window.alert(" Enter a number less than 4 ");}
//creating number of questions user entered
for(let i=num;i>=1;i--)
{    
var x=document.getElementById('myTable').insertRow(0);
var cell1 = x.insertCell(0);
var cell2 = x.insertCell(1);
//Selecting how many digits the user selected
switch(ques)
{
case '1':
a=Math.floor(Math.random()*5)+5;
b=Math.floor(Math.random()*5)+1;
cell1.innerHTML = i;
cell2.innerHTML = a+"-"+b+" = ? ";
break;

case '2':
a=Math.floor(Math.random()*40)+60;
b=Math.floor(Math.random()*40)+20;
cell1.innerHTML = i;
cell2.innerHTML = a+"-"+b+" = ?";
break;

case '3':
a=Math.floor(Math.random()*500)+500;
b=Math.floor(Math.random()*400)+100;
cell1.innerHTML = i;
cell2.innerHTML = a+"-"+b+" = ? ";
break;
}
}
}

function createTableb(form)
{
//Subtraction questions
let a,b;
//get values from the user through the form
let num = form.ques.value;
let ques = form.digit.value;
if(ques>3) { window.alert(" Enter a number less than 4 ");}
//creating number of questions user entered
for(let i=num;i>=1;i--)
{    
var x=document.getElementById('myTable').insertRow(0);
var cell1 = x.insertCell(0);
var cell2 = x.insertCell(1);
//Selecting how many digits the user selected
switch(ques)
{
case '1':
a=Math.floor(Math.random()*5)+5;
b=Math.floor(Math.random()*5)+1;
cell1.innerHTML = i;
cell2.innerHTML = a+"-"+b+" = ? ";
break;

case '2':
a=Math.floor(Math.random()*40)+60;
b=Math.floor(Math.random()*40)+20;
cell1.innerHTML = i;
cell2.innerHTML = a+"-"+b+" = ?";
break;

case '3':
a=Math.floor(Math.random()*500)+500;
b=Math.floor(Math.random()*400)+100;
cell1.innerHTML = i;
cell2.innerHTML = a+"-"+b+" = ? ";
break;
}
}
}

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

  
