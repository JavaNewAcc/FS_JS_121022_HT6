let curMonthLength = 0;
let nextMonthLength = 0;

function monthDaysCalc(userYear, userMonth) {
    curMonthLength = new Date(userYear, parseInt(userMonth), 0).getDate();
    nextMonthLength = new Date(userYear, parseInt(userMonth) + 1, 0).getDate();
    return { curMonthLength, nextMonthLength };
}

monthDaysCalc(prompt(`Введіть поточний рік у форматі РРРР`), prompt(`Введіть поточній місяць у форматі ММ`));

console.log(`У поточному місяці ${curMonthLength} днів. У наступному - ${nextMonthLength} днів`)