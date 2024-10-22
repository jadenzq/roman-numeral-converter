const numberInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click", (e) => {

    e.preventDefault();

    checkInput();
})

// check input
const checkInput = () => {

    const nonDigitRegex = /\D/;
    const negRegex = /^-/;

    if (numberInput.value.match(negRegex) || numberInput.value === "0"){  
        // check negative
        output.textContent = "Please enter a number greater than or equal to 1.";
    } 
    else if (numberInput.value === "" || numberInput.value.match(nonDigitRegex)){ 
        // check empty and invalid
        output.textContent = "Please enter a valid number.";
    } 
    else if (parseInt(numberInput.value) >= 4000) { 
        // check >= 4000
        output.textContent = "Please enter a number less than or equal to 3999.";
    } 
    else {
        // convert to roman number
        output.textContent = convertNumericalToRomanNumber(parseInt(numberInput.value));
    }
    
    displayOutput();
}

const convertNumericalToRomanNumber = (number) => {

    if (number === 0) return "";

    if (number / 1000 >= 1){
        return "M" + convertNumericalToRomanNumber(number - 1000);
    }

    else if (number / 900 >= 1){
        return "CM" + convertNumericalToRomanNumber(number - 900);
    } 
    
    else if (number / 500 >= 1){
        return "D" + convertNumericalToRomanNumber(number - 500);
    }

    else if (number / 400 >= 1){
        return "CD" + convertNumericalToRomanNumber(number - 400);
    }

    else if (number / 100 >= 1){
        return "C" + convertNumericalToRomanNumber(number - 100);
    }

    else if (number / 90 >= 1){
        return "XC" + convertNumericalToRomanNumber(number - 90);
    }

    else if (number / 50 >= 1){
        return "L" + convertNumericalToRomanNumber(number - 50);
    }

    else if (number / 40 >= 1){
        return "XL" + convertNumericalToRomanNumber(number - 40);
    }

    else if (number / 10 >= 1){
        return "X" + convertNumericalToRomanNumber(number - 10);
    }

    else if (number / 9 >= 1){
        return "IX"  + convertNumericalToRomanNumber(number - 9);
    }

    else if (number / 5 >= 1){
        return "V" + convertNumericalToRomanNumber(number - 5);
    }

    else if (number / 4 >= 1){
        return "IV" + convertNumericalToRomanNumber(number - 4);
    }

    else if (number / 3 >= 1){
        return "III" + convertNumericalToRomanNumber(number - 3);
    }

    else if (number / 2 >= 1){
        return "II" + convertNumericalToRomanNumber(number - 2);
    }

    else if (number / 1 >= 1){
        return "I" + convertNumericalToRomanNumber(number - 1);
    }
};

const displayOutput = () => {
    output.style.display = "block";
};

convertBtn.addEventListener("click", checkInput);

numberInput.addEventListener("keydown", (e) => {
    
    if (e.key === "Enter"){
        checkInput();
    }
});