// Assignment Code
var generateBtn = document.querySelector("#generate");

/*function to generate new random passowrd*/

function generatePassword() {

    var password = "";

    var length = Number(prompt("How many characters would you like your password to be?"));

    while (isNaN(length) || length < 8 || length > 128)
        length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
    
}