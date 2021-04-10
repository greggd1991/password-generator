var get = document.querySelector("#generate");

//user input vars:
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;

//Special Characters
var character = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "=", "+", "[", "{", "]", "}", ";", ":", "'", "", "<", ",", ">", ".", "/", "?", "~"];
//Number Characters
var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
//Alphabetic Characters
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//Space for uppercase conversion
var alphabet2 = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var choices;
var space = []; 


function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;

//function to generate password
function generatePassword(){
    var enter = prompt("How many characters would you like to make your password? Choose between 8 and 128");
        if (enter<8 || enter>128) {
            alert("This needs a value");
            generatePassword();
        } else {
            console.log(enter);
        };

    choices = "";
        var confirmNumber = confirm("Will this contain numbers?");
        var confirmCharacter  = confirm("Will this contain characters?");
        var confirmLowercase = confirm("Will this contain Lowercase letters?");
        var confirmUppercase = confirm("Will this contain Uppercase letters?");
    };

//else if for 4 negative options

if (!confirmCharacter && !confirmNumber && !confirmLowercase && !confirmUppercase) {
    choices = alert("You must choose a criteria");

}
//else if for 4 positive options
    else if (confirmCharacter && confirmNumber && confirmLowercase && confirmUppercase) {
        choices = character.concat(number, alphabet, alphabet2);
    }
    ///3 positive options
    else if (confirmCharacter && confirmNumber && confirmUppercase) {
        choices = character.concat(number, alphabet2);
    }
    else if (confirmCharacter && confirmNumber && confirmLowercase) {
        choices = character.concat(number, alphabet);
    }
    else if (confirmCharacter && confirmLowercase && confirmUppercase){
        choices = character.concat(alphabet. alphabet2);
    }
    else if (confirmNumber && confirmLowercase && confirmUppercase) {
        choices = number.concat(alphabet2, alphabet);
    }
    //2 positive options
    else if (confirmCharacter && confirmNumber) {
        choices = character.concat(number);
    }
    else if (confirmCharacter && confirmLowercase) {
        choices = character.concat(alphabet);
    }
    else if (confirmCharacter && confirmUppercase) {
        choices = character.concat(alphabet2);
    } 
    else if (confirmNumber && confirmLowercase) {
        choices = number.concat(alphabet);
    }
    else if (confirmNumber && confirmUppercase) {
        choices = number.concat(alphabet2);
    }
    else if (confirmUppercase && confirmLowercase) {
        choices = alphabet2.concat(alphabet);
    }
    //1 positive option
    else if (confirmCharacter) {
        choices = character;
    }
    else if (confirmNumber) {
        choices = number;
    }
    else if (confirmLowercase) {
        choices = alphabet
    }
    else if (confirmUppercase) {
        choices = space.concat(alphabet2);
    };

    //password variable is an array placeholder for user generated amount of length
    var password = [];

    //random selection variables
    for (var i = 0; i< enter; i++) {
        var pickchoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }
    //joins password array and converts to string
    var ps = password.join("");
    UserInput(ps);
    return ps;


//puts password value in textbox
//changed function input to use textcontent

function UserInput(ps) {
    document.getElementById("password").textContent = ps;

}

var copy = document.querySelector("#copy");
copy.addEventListener("click", fuction ()) {
    copyPassword();
};
//copies password value

function copyPassword() {
    document.getElementById("password").select();
    document.execCommand("Copy");
    alert("Password copied to clipboard");
}