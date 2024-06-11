"use strict";

//Створіть колекцію Map з цього масиву
const ordinalNumbers = new Map();
ordinalNumbers.set(1, "first").set(3, "third");
console.log(ordinalNumbers);
//Отримайте кількість елементів.
console.log(ordinalNumbers.size);
//Додати та видалити елемент.
ordinalNumbers.set(2, "second").set(4, "fourth");
console.log(ordinalNumbers.delete(4));
console.log(ordinalNumbers);
//Здійсніть пошук за ключом.
console.log(ordinalNumbers.has(1));
//Перевірити, чи є в мапі числівник для числа 2.
console.log(ordinalNumbers.get(2));
//Отримайте список ключів та значень окремо.
console.log([...ordinalNumbers.keys()]);
console.log([...ordinalNumbers.values()]);
// *Написати функцію, яка перероблятиме текст з числами
// "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents."
//  на текст з порядковими числівниками за допомогою мапи вище:
// "This year I will enter the first grade. I have two brothers. I am the third child of my parents."

const phraseWithNumbers =
  "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.";

function changePhrase(phraseWithNumbers) {
  //   //get array words
  const findNumbers = phraseWithNumbers.split(" ");
  //   //розбили масив за пробілом за допомогою split
  console.log(findNumbers);
  //   //translate words if words are in dictionary
  //   debugger;
  const ordNumbers = findNumbers.map((number) => {
    if (ordinalNumbers.has(number === "1")) {
      return ordinalNumbers.get(number);
    }
    return number;
  });
  console.log(ordNumbers);
  //   //create line with ukr words
  const phraseWithOrdNum = ordNumbers.join(" ");
  return phraseWithOrdNum;
}

const phraseWithOrdNum = changePhrase(phraseWithNumbers);
console.log(phraseWithOrdNum);
