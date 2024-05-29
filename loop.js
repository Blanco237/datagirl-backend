const arr = [1, 2, 3, "egss", "ham", false, "next", { person: "me" }];

console.log("With Normal For Loop: [");

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

console.log("]");

console.log(" For of Loop: [");

for (let element of arr) {
  console.log(element);
}
console.log("]");

console.log("For in Loop: [");

for (let idx in arr) {
  const val = arr[idx];
  console.log(val);
}
console.log("]");

console.log("For each Loop: [");
arr.forEach((element) => {
  console.log(element);
});
console.log("]");
