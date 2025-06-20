function outer(){
    let message = "Hello";
    return function inner() {
        return(message + ", World!");
    }
}

let vOuter = outer();
console.log(vOuter()); 