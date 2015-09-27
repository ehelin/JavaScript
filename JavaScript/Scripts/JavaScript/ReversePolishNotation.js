
function PolishReverseNotation() {
    var result = RunSingleOperatorTest('2 4 *');
    result = RunTest('10 3 /');
    result = RunTest('7 3 +');
    result = RunTest('"45 3 -"');
}

//Single operator/stack using out of the box Javascript array
var Stack = [];

function RunSingleOperatorTest(expression) {
    var result = 0;

    PopulateStack(expression);
    var operator = expression.substring(expression.length - 1, expression.length);
    var op1 = Stack.pop();
    var op2 = Stack.pop();

    if (operator == "*")
        result = op1 * op2;
    else if (operator == "+")
        result = op1 + op2;
    else if (operator == "-")
        result = op1 - op2;
    else if (operator == "/")
        result = op1 / op2;

    Stack.push(result);

    var calculatedValue = Stack.pop();

    return calculatedValue;
}

function PopulateStack(expression) {
    var expression = expression.split(' ');

    for (var i = 0; i < expression.length; i++) {
        var convertedNumber = parseInt(expression[i]);

        if (!isNaN(convertedNumber))
            Stack.push(convertedNumber);
    }
}
function InsertValue(insertValue, endIndex) {
    var ctr = 0;
    var newStack = [];

    newStack[0] = insertValue;

    for (var i = 0; i < Stack.length; i++) {
        newStack[ctr + 1] = Stack[ctr];
    }

    Stack = newStack;
}
function GetEndIndex() {
    var endIndex = 0;

    for (var i = 0; i < Stack.length; i++) {
        if (Stack[i] == null) {
            endIndex = i;
            break;
        }
    }

    return endIndex;
}


