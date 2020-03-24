'use strict';


function showMultiplicationTable(input) {
    for (var i = 1; i <= 10; i++) {
        console.log(input + ' X ' + i + ' = ' + (input * i));
    }
}

showMultiplicationTable(7);

for (var i = 1; i <= 10; i++) {
    var randomNumber = Math.floor(Math.random() * 180) + 20;
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + ' is even');
    } else if (randomNumber % 2 !== 0) {
        console.log(randomNumber + ' is odd');
    }
}

for (var i = 1; i < 10; i++) {
    console.log(String(i).repeat(i));
}

for (var i = 100; i >= 5; i -= 5) {
    console.log(i);
}