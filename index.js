// Function that display value
function dis(val) {
    let x = document.getElementById('display').value;
    if (x === '0' && val != '.') {
        document.getElementById('display').value = val;
    } else {
        document.getElementById('display').value += val;
    }
}

// Function that calculate and return the value
function solve() { 
    let x = document.getElementById('display').value;
    document.getElementById('display').value = eval(x);
}

// Function that clear the display 
function clr() { 
    document.getElementById('display').value = '0'; 
}