let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');  // Corrected selector to 'button'
let string = "";

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        let buttonValue = e.target.innerHTML;
        
        if (buttonValue == '=') {
            try {
                string = eval(string);  // Evaluates the string as an expression
                input.value = string;
            } catch (error) {
                input.value = "Error";  // If eval fails, show "Error"
                string = "";
            }
        } else if (buttonValue == 'AC') {
            string = "";  // Clear the string
            input.value = string;
        } else if (buttonValue == 'DEL') {
            string = string.substring(0, string.length - 1);  // Remove the last character
            input.value = string;
        } else {
            // Replace any non-numeric character (like 'x' for multiplication) with the proper symbol
            if (buttonValue === 'x') {
                buttonValue = '*';  // Replacing 'x' with '*' for multiplication
            }
            string += buttonValue;  // Append the clicked button's value (including operations)
            input.value = string;
        }
    });
});
