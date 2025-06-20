function createFunctionList() {

    let functions = [];

    for (var i = 0; i < 5; i++) {
        functions[i] = (function(index) {
            return function() {
                console.log("Index:", index);
            };
        })(i);
    }

    return functions; 
}

const functionList = createFunctionList();

functionList[0]();    // Expected Output: "Index: 0"

functionList[1]();   // Expected Output: "Index: 1"

functionList[2]();   // Expected Output: "Index: 2"

functionList[3]();   // Expected Output: "Index: 3"

functionList[4]();   // Expected Output: "Index: 4"