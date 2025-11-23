/**
 * leet code Counter II
 * @param number start counter
 * @returns counter status
 */
const counterFunction = (init) => {
  let counter = init;
  return {
    increment: () => counter++,
    decrement: () => --counter,
    reset: () => {
      counter = init;
      return counter;
    },
  };
};

const counter = counterFunction(10);
// console.log(counter.increment());
// console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.reset());
