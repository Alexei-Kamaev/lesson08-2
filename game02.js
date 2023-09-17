'use strict';
{
const arrNumbers = [];
let minNumber = () => {
    let userNumber = prompt(`Введите первое число:`);
    if (Number.isNaN(+userNumber) || userNumber == "") minNumber();
    if (userNumber.includes(' ')) minNumber();
    if (userNumber > null) console.log(userNumber);
    return +userNumber;
};
let maxNumber = () => {
    let userNumber = prompt(`Введите второе число:`);
    if (Number.isNaN(+userNumber) || userNumber == "") maxNumber();
    if (userNumber.includes(' ')) maxNumber();
    if (userNumber > null) console.log(userNumber);
    return +userNumber;
};
const getRandom = (a, b) => {
    return Math.floor(Math.random() * (Math.max(a, b) - Math.min(a, b)) + Math.min(a, b));
}
console.log(getRandom(minNumber(), maxNumber()));



}