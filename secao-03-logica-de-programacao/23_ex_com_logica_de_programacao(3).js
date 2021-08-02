function fizzBuzz(num) {
  if (typeof num !== "number") return num;
  if (num % 5 === 0 && num % 3 === 0) return "FizzBuzz";
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  return num;
}

console.log(fizzBuzz("a"), "a");
for (let i = 0; i < 100; i++) {
  let rand = Math.random() * 100 + 1;
  rand = Math.floor(rand);
  console.log(fizzBuzz(rand), rand);
}
