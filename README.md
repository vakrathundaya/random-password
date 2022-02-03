# passwordgenerator
Description
-----------

This project's main purpose is to generate random passwords. A Password is randomly generated based on criteria that the user
provides when prompted.

when the user clicks the button "Generate Password" they are first prompted for password length. If outside the
range 8 -128, the user is prompted to once again enter a password length within the range. The prompt will loop
until the user enters a valid number.

The program prompts the user to define if they would like to include uppercase, lowercase, numbers or special characters.
If the user selects none to all criteria, the program will ask it to select at least each one and will loop back through the prompts.

when all parameters have been defined, the password will appear within the password box.

Technologies used
-----------------

HTML,CSS, JavaScript

screenshot
----------

![random](https://user-images.githubusercontent.com/94205464/146275481-65f49e85-c15e-4926-95eb-54de0c32ed12.jpeg)


Tasks completed
---------------
When the generate button is clicked, a window prompt is generated asking the user for password criteria.

If the user enters the length within the range, another window prompt is generated asking whether password includes Uppercase letters.

If cancels he will be prompted asking whether his password includes Lowercase letters.

Once he confirms, another prompt is displayed asking whether to include numbers.

If canceled, another prompt generates asking to confirm whether he wants special characters in password.

If the user says cancel for all three choices then another prompt says he must choose one type.

Once he selects, a password is generated with the length of characters the user chose.


Links
------

Link to the deployed website

 https://vakrathundaya.github.io/random-password/

Link to the code repository

https://github.com/vakrathundaya/random-password

Installation
------------
Upload index.html,style.css,script.js to the deployed webserver. 

The website was deployed using GitHub Pages.

Usage
-----
Once deployed the application can be viewed in a traditional desktop web browser. It is optimized for smaller screens.