console.clear();

console.log('=== 1 uzduotis ===');
//Palyginti du skaičius a ir b. 
//Išvesti į konsolę, kuris didesnis arba jie lygūs;

const a = 50;
const b = 20;

if ( a <= b ) {
    console.log('true');
} else {
    console.log('false');
} 

console.log('=== 2 uzduotis ===');
// Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10;

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log('=== 3 uzduotis ===');
//Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10;

const numbers2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = numbers2.filter( number => {
    return number % 2 === 0;
});
console.log(even);


//for (let i = 2 - 1; i < numbers2.length; i += 2) {
  // console.log(i, '-', numbers2[i]);
//};


console.log('=== 4 uzduotis ===');
// Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. 
//Išvesti juos konsolėje

let numbers3 = [];
for (let i = 0; i < 5; i++) {
    numbers3.push(Math.floor(Math.random() * (10 - 1 + 1) + 1));
}
console.log(numbers3);

console.log('=== 5 uzduotis ===');
// Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10.
// Paskutinis atspausdintas skaičius turi būti 5.



console.log('=== 6 uzduotis ===');
// Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30,
// o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę,
//NENAUDOJANT sort() bei Math.max() funkcijų

let numbers4 = [];
const arrLength = Math.floor(Math.random() * (30 - 20 + 1) + 20);

console.log(arrLength);

for (let i = 0; i < arrLength; i++) {
    numbers4.push(Math.floor(Math.random() * (30 - 10 + 1) + 10));
}
console.log(numbers4);





console.log('=== 7 uzduotis ===');
//Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, 
//o ilgis 100.
// Suskaičiuokite kiek yra kiekvienos raidės

let abc100 = [...Array(100)]
abc100 = abc100.map(n => Math.floor(Math.random()*2) === 0 ? 'A':'B','C', 'D');

console.log(abc100);

const countA = abc100[2].filter(n => n === );