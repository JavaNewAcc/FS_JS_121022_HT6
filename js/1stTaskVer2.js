function summCalc(arg) {
    let summ = 0;
    let arrArg = arg.split(",");
    arrArg.forEach(element => {
        tempElement = parseInt(element);
        if (tempElement != tempElement || tempElement == null) {
            tempElement = 0;
            summ = summ + tempElement;
        }
        else {
            summ = summ + tempElement;
        }
    });
    return summ;
}

console.log(summCalc(prompt(`Введіть числа, які треба підсумувати, через кому без пробілів`)));