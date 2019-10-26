let operation, num1;
let num2 = err = false;

// Function that display value
function dis(val) {
    // Set display value
    let x = document.getElementById('display').value;
    if (x === '0' && val != '.' && val != '%') {
        x = val;
    } else if (x === '-0' && val != '.' && val != '%') {
        x = -val;
    } else if (operation && num2 === false) {
        x = val;
        num2 = true;
    } else if (num1 == undefined && val != '.' && val != '%') {
        x = val;
    } else if (x.includes('.') && val === '.') {
        // Do nothing
    } else if (val === '%') {
        x = eval(x.concat('/100'));
    } else {
        x += val;
    }
    document.getElementById('display').value = x;

    // Set clear button
    if (x != '0') {
        document.getElementById('clear').value = 'C';
    } else {
        document.getElementById('clear').value = 'AC';
    }

    // Set operation buttons
    if (operation && val !== '%') {
        document.getElementById(operation).setAttribute('class', 'orange1');
    }
}

// Function that calculate and return the value
function solve() { 
    // Reset operation buttons style
    if (operation) {
        document.getElementById(operation).setAttribute('class', 'orange1');
    }

    errorList = ['0', '0.', '-0'];
    if (err === true) {
        document.getElementById('display').value = 'Error';
        num1 = undefined;
        operation = undefined;
        num2 = false;
    } else if (operation) {
        let x = document.getElementById('display').value;
        if (errorList.includes(x) && operation == 'divide') {
            document.getElementById('display').value = 'Error';
            err = true;
        } else {
            let y = '';
            if (operation === 'divide') {
                y = num1 + '/' + x;
            } else if (operation === 'multiply') {
                y = num1 + '*' + x;
            } else if (operation === 'minus') {
                y = num1 + '-' + x;
            } else if (operation === 'plus') {
                y = num1 + '+' + x;
            }
            document.getElementById('display').value = eval(y);
            document.getElementById(operation).setAttribute('class', 'orange1');
            operation = undefined;
            num1 = undefined;
            err = false;
            num2 = false;
        }
    }
}

// Function that clear the display 
function clr() { 
    document.getElementById('display').value = '0';
    document.getElementById('clear').value = 'AC';

    // Reset operation buttons style
    if (operation) {
        document.getElementById(operation).setAttribute('class', 'orange1');
    }
}

// Function that handles +/- button
function com() {
    if (err === true) {
        document.getElementById('display').value = '-0';
    } else {
        let value = document.getElementById('display').value;
        if (value === '0') {
            value = '-0';
        } else if (value === '0.') {
            value = '-0.';
        } else if (value === '-0.') {
            value = '0.';
        } else {
            value = -value;
        }
        document.getElementById('display').value = value;   
    }
}

// Function that handles operation buttons onclick event
function op(val) {
    num1 = document.getElementById('display').value;
    if (num1 != 'Error') {
        err = false;
    }

    // Set operation button style
    if (operation) {
        document.getElementById(operation).setAttribute('class', 'orange1');
        document.getElementById(val).setAttribute('class', 'orange2');
        operation = val;
    } else {
        document.getElementById(val).setAttribute('class', 'orange2');
        operation = val;
    }
}