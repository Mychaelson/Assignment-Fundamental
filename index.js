// duplikasi method .indexOf()

// mencari index dari sebuah item di array
// akan return sebuah number (index)

const buah = ["apel", "mangga", "jeruk", "semangka", "jambu", "melon"];

const duplicateIndexOf = (arr, input) => {
  for (let i = 0; i < buah.length; i++) {
    if (buah[i] == input) {
      return i;
    }
  }
  return -1;
};

console.log(duplicateIndexOf(buah, "melon"));

// ------------------------------------------------------

// duplikasi method .find()

// Conditions (find)
// 1. Mencari sebuah value (item) dalam array yang
//    memenuhi condition yang kita berikan
// 2. Callback function kita harus return boolean
// 3. Ketika callback function return true, loop akan berhenti
//    lalu function find akan return item dari array.

const age = [20, 10, 15, 22, 24, 28];
let sortedAge = age.sort((a, b) => {
  return a - b;
});

const duplicateFind = (array, callback) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i], i, array)) {
      result = array[i];
      break;
    }
  }
  return result;
};

let findData = duplicateFind(sortedAge, (val) => {
  return val > 20;
});
console.log(findData);
