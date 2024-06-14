function outer() {
    let name = "outer";
    let str = inner();
    return str;
}
    
function inner() {
    let name = "inner";
    return "Hello Annilei!";
}

console.log("before outer() call");
console.log(outer());
console.log("after outer() call");