function sfor() {

 let num1 = parseFloat(document.getElementById("Enternum").value);

 let text = document.getElementById("Entertext").value;


 let output = "";



 for (let i = 1; i <= num1; i++) {

 output += i + ": " + text + "<br>";

 }



 document.getElementById("show").innerHTML = output;

}



function clearFields() {

 document.getElementById("show").innerHTML = "";

}





function wfor() {

 let num1 = parseFloat(document.getElementById("Enternum1").value);

 let text = document.getElementById("Entertext1").value;


 let output = "";



 let i = 1;

 while (i <= num1) {
 output += i + ": " + text + "<br>";

 i++;

 }


 document.getElementById("wfor").innerHTML = output;

}



function clearFields1() {
 document.getElementById("wfor").innerHTML = "";

}


function dwfor() {

 let num1 = parseFloat(document.getElementById("Enternum2").value);

 let text = document.getElementById("Entertext2").value;


 let output = "";


 let i = 1;

 do {

 output += i + ": " + text + "<br>";

 i++;

 } while (i <= num1);



 document.getElementById("dwfor").innerHTML = output;

}



function clearFields2() {

 document.getElementById("dwfor").innerHTML = "";

}