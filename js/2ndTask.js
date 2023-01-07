let userAgeYears = 0;
let userAgeMonths = 0;
let userAgeDays = 0;

function BDcalculator(userBirthDate) {
    const userBDArr = userBirthDate.split('/');

    const userBD = new Date(userBDArr[2], userBDArr[1] - 1, userBDArr[0]);

    const currentDate = new Date();

    userAgeYears = currentDate.getFullYear() - userBD.getFullYear();
    userAgeMonths = currentDate.getMonth() - userBD.getMonth();
    userAgeDays = currentDate.getDate() - userBD.getDate();

    let lastYearDays = new Date(userBDArr[2], userBDArr[1], 0).getDate();

    if (currentDate.getDate() == userBD.getDate() && currentDate.getMonth() == userBD.getMonth()) {
        console.log(`Happy Birthday! Сьогодні нашему юзеру виконується ${userAgeYears} років`)
    }
    else {
        if (currentDate.getDate() < userBD.getDate()) {
            userAgeMonths = userAgeMonths - 1;
            userAgeDays = userAgeDays + lastYearDays;
        }
        if (currentDate.getMonth() < userBD.getMonth() || userAgeMonths < 0) {
            userAgeYears = userAgeYears - 1;
            userAgeMonths = userAgeMonths + 12;
        }
    }
    return { userAgeDays, userAgeMonths, userAgeYears };
}

BDcalculator(prompt(`Введіть дату народження юзера у форматі дд/мм/рррр`));

console.log(`Нашему Юзеру ${userAgeYears} років, ${userAgeMonths} місяців, ${userAgeDays} днів`);