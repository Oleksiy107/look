function getCounter() {
  let counter = 0;
  return function (increment) {
    counter += increment;
    return counter;
  };
}

let count = getCounter();
console.log(count(6));
console.log(count(100));
console.log(count(20));
