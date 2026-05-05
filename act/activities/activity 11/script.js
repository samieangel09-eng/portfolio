function calculate() {
    const num1 = parseFloat(document.getElementById("num1").value);
    const num2 = parseFloat(document.getElementById("num2").value);
 
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("sum").innerHTML = "Please enter valid numbers.";
        return;
    }
 
    const add = (num1 + num2).toFixed(2);
    const subtract = (num1 - num2).toFixed(2);
    const multiply = (num1 * num2).toFixed(2);
    const divide = num2 !== 0 ? (num1 / num2).toFixed(2) : "Cannot divide by 0";
    const modulus = (num1 % num2).toFixed(2);
 
    document.getElementById("sum").innerHTML = `
        Sum: ${add} <br>
        Difference: ${subtract} <br>
        Product: ${multiply} <br>
        Quotient: ${divide} <br>
        Remainder: ${modulus}
    `;
}
 
function clearFields() {
    document.getElementById("sum").innerHTML = "";
}