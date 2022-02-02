// Assignment Code
var generateBtn = document.querySelector("#generate");

/*function to generate new random passowrd*/

function generatePassword() {

    var password = "";

    var length = Number(prompt("How many characters would you like your password to be?"));

    while (isNaN(length) || length < 8 || length > 128)
        length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));
    
        var uppercase = confirm("Would you like to use uppercase letters?");
        var lowercase = confirm("Would you like to use lowercase letters?");
        var numbers = confirm("Would you like to use numbers?");
     
        var specialchar = confirm("Would you like to use special characters?");

        while (!uppercase && !lowercase && !numbers && !specialchar) {
            alert("You must select at least one character type!");
            uppercase = confirm("Would you like to use uppercase letters?");
            lowercase = confirm("Would you like to use lowercase letters?");
            numbers = confirm("Would you like to use numbers?");
            specialchar = confirm("Would you like to use special characters?");

            var final= {};

            if (uppercase) {
                password = password + rando(final.uppercase = "ABCDEFGHIJKLMNOPRSTUVWXYZ")
            };

            if (lowercase) {
                password = password + rando(final.lowercase = "abcdefghijklmnopqrstuvwxyz")
            }

            if (numbers) {
                password = password + rando(final.numbers = "1234567890");
            }
            if (specialchar) {
                password = password + rando(final.specialchar = "!@#$%^&*(){}[]=<>/,.");
            }
        }
}