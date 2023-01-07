let age = 0;

function ageCal(userYear) {
    if (userYear % 100 == 0) {
        console.log(`${userYear} рік це ${parseInt(userYear / 100)} сторіччя`)
    }
    else { console.log(`${userYear} рік це ${parseInt(userYear / 100) + 1} сторіччя`) }
}

ageCal(prompt(`Введіть рік для візначення сторіччя`))