const buah = ["apel", "mangga", "jeruk", "semangka", "jambu", "melon"];

// -----------------------------------------------------

// duplikasi method .indexOf()

// mencari index dari sebuah item di array
// akan return sebuah number (index)

const indexOf = (arr, input) => {
  for (let i = 0; i < buah.length; i++) {
    if (buah[i] == input) {
      return i;
    }
  }
};

console.log(indexOf(buah, "melon"));

// ------------------------------------------------------

// duplikasi method .find()

// Conditions (find)
// 1. Mencari sebuah value (item) dalam array yang
//    memenuhi condition yang kita berikan
// 2. Callback function kita harus return boolean
// 3. Ketika callback function return true, loop akan berhenti
//    lalu function find akan return item dari array.
