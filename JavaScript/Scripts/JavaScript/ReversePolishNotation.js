
function RunPolishReverseNotation() {
    //TODO - display results
    //document.body.appendChild(document.createElement('div'));
    //var contentPane = document.getElementById("div");
    //contentPane.appendChild('hi there');
    
    RunSingleOperatorTests();
    //RunMultipleOperatorTest();
}

//Multiple operator/stack using out of the box Javascript array =========================================
var MultipleStack = [];

function RunMultipleOperatorTest() {
    //var result = RunMultipleOperatorTest('5 * 6 – 3 * 2 * 3', false, true);
    //result = RunMultipleOperatorTest('5 6 * 3 2 * 3 * -', true, false);
}

//Single operator/stack using out of the box Javascript array =========================================
var Stack = [];

function RunSingleOperatorTests() {
    var result = RunSingleOperatorTest('2 4 *', false);
    result = RunSingleOperatorTest('2 4 *', true);
    result = RunSingleOperatorTest('10 3 /', false);
    result = RunSingleOperatorTest('10 3 /', true);
    result = RunSingleOperatorTest('7 3 +', false);
    result = RunSingleOperatorTest('7 3 +', true);
    result = RunSingleOperatorTest('45 3 -', false);
    result = RunSingleOperatorTest('45 3 -', true);
    result = RunSingleOperatorTest('4 3 %', false);
    result = RunSingleOperatorTest('4 3 %', true);
    result = RunSingleOperatorTest('17 4 &', false);
    result = RunSingleOperatorTest('17 4 &', true);
    result = RunSingleOperatorTest('511 56 ^', false);
    result = RunSingleOperatorTest('511 56 ^', true);
    result = RunSingleOperatorTest('42 21 |', false);
    result = RunSingleOperatorTest('42 21 |', true);
}function RunSingleOperatorTest(expression, useEval) {
    var result = 0;

    PopulateStack(expression, useEval);

    var operator = Stack.pop();
    var op2 = Stack.pop();
    var op1 = Stack.pop();

    result = GetValue(op1, op2, operator, useEval);

    result = parseInt(result);

    Stack.push(result);

    var calculatedValue = Stack.pop();

    return calculatedValue;
}
function GetValue(op1, op2, operator, useEval)
{
    if (useEval != null && useEval != undefined && useEval == true)
        result = eval(op1 + operator + op2);
    else if (operator == "*")
        result = op1 * op2;
    else if (operator == "+")
        result = op1 + op2;
    else if (operator == "-")
        result = op1 - op2;
    else if (operator == "/")
        result = op1 / op2;
    else if (operator == "%")
        result = op1 % op2;
    else if (operator == "&")
        result = op1 & op2;
    else if (operator == "^")
        result = op1 ^ op2;
    else if (operator == "|")
        result = op1 | op2;
    else 
        alert('unknown operator');

    return result;
}
function PopulateStack(expression, useEval) {
    var expressionArr = expression.split(' ');

    for (var i = 0; i < expressionArr.length; i++) {
        var value = expressionArr[i];

        if (!useEval && !isNaN(value))
            value = parseInt(expressionArr[i]);

        Stack.push(value);
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


