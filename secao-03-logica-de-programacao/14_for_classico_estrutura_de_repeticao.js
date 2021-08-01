let array = [3, 63, 21, 8, 90, 31, 20, 65, 90];

for (let i = 0; i < array.length - 1; i++) {
  for (let j = 0; j < array.length - 1; j++) {
    if (array[j] > array[j + 1]) {
      let aux = array[j + 1];
      array[j + 1] = array[j];
      array[j] = aux;
    }
  }
}

console.log(array);

for (let i = 0; i < array.length - 1; i++) {
  for (let j = 0; j < array.length - 1; j++) {
    if (array[j] < array[j + 1]) {
      let aux = array[j + 1];
      array[j + 1] = array[j];
      array[j] = aux;
    }
  }
}

console.log(array);
