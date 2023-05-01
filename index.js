do {
    mathOperator = prompt('What math operator do you want to use? (+ - / *)');
} while (!mathOperator || !(mathOperator.trim() === '+' || mathOperator.trim() === '-' 
    || mathOperator.trim() === '/' || mathOperator.trim() === '*'));

do {
    numberOfOperands = +prompt('How much operands do you want to use?');
} while (!numberOfOperands || isNaN(numberOfOperands) || !(1 < numberOfOperands && numberOfOperands < 7));

numberFromUser = null;
operandCounter = 1;
finalResult = 0


while ( operandCounter <= numberOfOperands) {
    do {
        numberFromUser = prompt(`Please enter ${operandCounter} operand?`);
    } while (numberFromUser === null || isNaN(parseFloat(numberFromUser.trim())));
    if (operandCounter === 1) {
        finalResult = parseFloat(numberFromUser.trim());
    } else {
        switch (mathOperator) {
            case '+':
                finalResult += parseFloat(numberFromUser.trim());
                break;
            case '-':
                finalResult -= parseFloat(numberFromUser.trim());
                break;
            case '/':
                finalResult /= parseFloat(numberFromUser.trim());
                break;
            case '*':
                finalResult *= parseFloat(numberFromUser.trim());
                break;
        }
    }
    operandCounter++;
}


alert(`Final result of action '${mathOperator}' is ${finalResult}`);

