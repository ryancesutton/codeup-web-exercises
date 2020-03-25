

// var douglas = 'Douglas H';
// var fer = 'Fer M';

var cohort = ['Douglas H', 'Fer M', 1, 3.4];

console.log('cohort.length', cohort.length);
console.log(cohort.length - 1);
console.log(cohort[1]);
console.log('index of Fer M', cohort.indexOf('Fer M'));
console.log('get douglas', cohort[cohort.indexOf('Douglas H')]);

// console.log(cohort[0]);
// console.log(cohort[1]);
// console.log(cohort[2]);
// console.log(cohort[3]);

// the for loop will help with this

for (var index = 0; index < cohort.length; index++) {
    console.log('cohort[index] ' + index , cohort[index]);
}

// Foreach works with callback functions that get executed while the loop runs

cohort.forEach(function(element,index, array) {
    console.log('element', element);
    console.log('index', index);
    console.log('array', array);
});
