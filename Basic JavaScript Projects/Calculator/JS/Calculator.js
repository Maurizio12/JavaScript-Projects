//Creates an object to keep track of values.
const Calculator = {
    //This will display 0 on the calculator scrre.
    Display_Value: '0',
    //This will hold the first operand for any expression, we set it to nullfor now.
    First_Operand: null,
    //This check wether or not the second operand has been inputted by the user.
    Wait_Second_Operand: false,
    //This will hold the operator, we set it to null for now.
    operator: null,
};

//This modifies values each time a button is cliccked on.
function Input_Digit(digit) {
    const {Display_Value, Wait_Second_Operand } = Calculator;
    //This checks if Wait_Second_Operand is true and sets Display_Value
    //to the key that was clicked on.
    if (Wait_Second_Operand === true) {
        Calculator.Display_Value = digit;
        Calculator.Wait_Second_Operand = false;
    } else {
        //This overwrites Display_Value if the current value is 0
        //otherwise it add onto it.
        Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit;
    }
}

//This section handles decimal points.
function Input_Decimal(dot) {
    //This ensure that accidental clicking of the decimal point doesn't
    //cause bugs in the operation.
    if (Calculator.Wait_Second_Operand === true) return;
    if (!Calculator.Display_Value.includes(dot)) {
        //We are saying that if the Display_Value does not contain a decimal point 
        //we want to add a decimal point.
        Calculator.Display_Value += dot;
    }
}

//This section handles operators
function Handle_Opereator(Next_Operator) {
    const {First_Operand, Display_Value, operator} = Calculator;
    //When an operator key is pressed we convert the current number
    //displayed on the screen to a number and then store the result in 
    //Calculator. First_Operand if it doesn't already exist.
    const Value_of_Input = parseFloat(Display_Value);
    //Checks if an operator already exist and if Wait_Second_Operand is true,
    //then updates the operator an exist from the function.
    if (operator && Calculator.Wait_Second_Operand) {
        Calculator.operator = Next_Operator;
        return;
    }
    if (First_Operand == null) {
        Calculator.First_Operand = Value_of_Input;
    } else if (operator) {//checks if an operator already exist
        const Value_Now = First_Operand || 0;
        //If operatoe exist, property lookup is performed for the operator
        //in the Perform_Calculation object and the function that matches the
        //operator is executed.
        let result = Perform_Calculation[operator](Value_Now,Value_of_Input);
        //Here we add a fixed amount of numbers after a decimal.
        result = (result *1).toString();
        Calculator.Display_Value = parseFloat(result);
        Calculator.First_Operand = parseFloat(result);
    }
    Calculator.Wait_Second_Operand = true;
    Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
    '/' : (First_Operand, Second_Operand) => First_Operand / Second_Operand,
    '*' : (First_Operand, Second_Operand) => First_Operand * Second_Operand,
    '+' : (First_Operand, Second_Operand) => First_Operand + Second_Operand,
    '-' : (First_Operand, Second_Operand) => First_Operand - Second_Operand,
    '=' : (First_Operand, Second_Operand) => First_Operand / Second_Operand
};

function Calculator_Reset() {
    Calculator.Display_Value = '0';
    Calculator.First_Operand == null;
    Calculator.Wait_Second_Operand = false;
    Calculator.operator = null;
}

//This function update the calculator screen with the contents of Display_Value
function Update_Display () {
    //Makes use of the calculator-screen class to target the
    //input tag in the HTML document.
    const display = document.querySelector('.calculator-screen');
    display.value = Calculator.Display_Value;
}

Update_Display();
//This section monitors button clicks
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    //The target variable in a object that rapresents the element
    //that was clicked.
    const { target } = event;
    //if the element that was clicked on is not a button, exit the function.
    if (target.classList.contains('operator')) {
        Handle_Opereator(target.value);
        Update_Display();
        return;
    }
    if (target.classList.contains('decimal')) {
        Input_Decimal(target.value);
        Update_Display();
        return;
    }
    //Ensures that AC clears all inputs from the Calculator screen.
    if (target.classList.contains('all-clear')) {
        Calculator_Reset();
        Update_Display();
        return;
    }
    Input_Digit(target.value);
    Update_Display();
})