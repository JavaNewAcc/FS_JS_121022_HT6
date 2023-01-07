function summCalc(...arg) {
    let summ = 0;
    arg.forEach(element => {
        element = parseInt(element);
        if (element != element || element == null) {
            element = 0;
            summ += element;
        }
        else {
            summ += element;
        }
    });
    return summ;
}

console.log(summCalc(1, 2, 3, 4, 5));
console.log(summCalc(1, 2, 3, 4, 5, "cat", "dog", 9));