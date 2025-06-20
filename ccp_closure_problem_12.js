function createCounter() {
  let count = 0;
    return {
        increment: function() {
        count += 1;
        return (`Count : ${count}`);
        },
        getCount: function() {
        return (`Current value of the counter : ${count}`);
        }
    };
}


const counter = createCounter();

console.log(counter.increment()); // Output: 1;

console.log(counter.increment()); // Output: 2;

console.log(counter.getCount()); // Output: 2;