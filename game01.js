'use strict';
// вроде получилось, но с пробелами не смог номарльно обойти
// пробелы не принимает, но кидает красную ошибку в консоли на null
// буду рад, если скажете куда копать. уже 3 часа не могу обойти пробел
// кроме того способа, который реализовал.
// но при прочих равных всё работает, как надо.
{
const botNumber = Math.floor(Math.random() * 100);
alert('Я загадал число от 1 до 100. Попробуй угадать...');
let anyNumber = (a ='Введите число:') => {
    let userNumber = prompt(`${a}`);
    if (Number.isNaN(+userNumber) || userNumber == "") anyNumber();
    if (userNumber.includes(' ')) anyNumber();
    if (userNumber > null) resultGame(userNumber);
    return userNumber;
};
const resultGame = (a, b=botNumber) => {
    if (b > a) anyNumber('Больше!');
    if (b < a) anyNumber('Меньше!');
    if (b == a) return alert('Вы угадали. Поздравляю!');
}
anyNumber();
}