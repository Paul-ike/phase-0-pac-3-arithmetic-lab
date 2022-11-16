var a, b;

a = Math.floor(Math.random() * 1000)
b = Math.floor(Math.random() * 1000)

function add(a,b) {
    return a + b;
}
add(a,b);

function subtract(a,b) {
    return a - b;
}
subtract(a,b);

function multiply(a,b) {
    return a * b;
}
multiply(a,b);

function divide(a,b) {
    return a / b;
}
divide(a,b);

function increment(a) {
    return a+=1;
}
increment(a);

function decrement(a) {
    return a-=1;
}
decrement(a);

function makeInt(n) {
    return parseInt('n');
}

function makeInt(a) {
    return parseInt(a);
}

function makeInt(a) {
    return parseInt(a, 10);
}

function preserveDecimal(n) {
    return parseFloat("n");
}

function preserveDecimal(a) {
    return parseFloat(a);
}