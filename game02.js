'use strict';
//не смог реализовать при ввооде числа кнопку ОТМЕНА, но ОТМЕНА работатет при первоначальном вводе чисел
//не смог сделать БОЛЬШЕ-МЕНЬШЕ. сначала забыл про это, а потом уже не смог реализовать к сожалению
{
const arrNumbers = [];
let minNumber = () => {
    let userNumber = prompt(`Введите первое число:`);
    if (Number.isNaN(+userNumber) || userNumber == "") minNumber();
    if (userNumber.includes(' ')) minNumber();
    if (userNumber > null) arrNumbers.push(+userNumber);
    return +userNumber;
};
let maxNumber = () => {
    let userNumber = prompt(`Введите второе число:`);
    if (Number.isNaN(+userNumber) || userNumber == "") maxNumber();
    if (userNumber.includes(' ')) maxNumber();
    if (userNumber > null) arrNumbers.push(+userNumber);
    return +userNumber;
};
const getRandom = (a=arrNumbers[0], b=arrNumbers[1]) => {
    arrNumbers.unshift(Math.ceil((Math.max(a, b) - Math.min(a, b))/3));
    return +arrNumbers.unshift(Math.floor(Math.random() * (Math.max(a, b) - Math.min(a, b)) + Math.min(a, b)));
}
const getNumber = (a, b=`Введите число`) => {
    if (arrNumbers[1]-a > 0) {
        let userNumber = +prompt(`Осталось попыток: ${arrNumbers[1]-a}. ${b}:`);
        if (Number.isNaN(userNumber) || userNumber == "") getNumber(a);
        arrNumbers.includes(userNumber, 3) ? getNumber(a, 'Это число вы уже вводили') : arrNumbers.push(+userNumber);
        if (userNumber == arrNumbers[0]) arrNumbers.push('win', 'over');
    } else arrNumbers.push('lose', 'over');
}
(function userGame () {
    minNumber(), maxNumber(), getRandom();
    console.log(arrNumbers);
    alert(`У Вас есть ${arrNumbers[1]} попыток угадать моё число. Погнали!`);
    let a=0;
    while (arrNumbers[arrNumbers.length-1] != 'over') {
        getNumber(a);
        a++;
    }
    if (arrNumbers[arrNumbers.length-2] == 'win') alert('Поздравляю. Вы угадали!');
    if (arrNumbers[arrNumbers.length-2] == 'lose') alert('К сожалению, Вы проиграли.');
})();


}