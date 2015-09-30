
function RunPolishReverseNotation() {
    //RunSingleOperatorTests();
    RunMultipleOperatorTests();
}

//Multiple operator/stack using out of the box Javascript array =========================================
var MultipleStack = [];

function RunMultipleOperatorTests() {
    var result = RunMultipleOperatorTest('5 6 * 3 2 *', false);
    result = RunMultipleOperatorTest('5 6 * 3 2 * 3 * -', true);
}

function RunMultipleOperatorTest(expression, useEval) {
    PopulateMultipleStack(expression, useEval);
    var cont = true;

    while (cont) 
    {
        var op1 = null,op2 = null, operator = null, result = 0;

        while (operator == null || op1 == null || op2 == null)
        {
            var val = MultipleStack.pop();
            
            if (isNaN(val))
                operator = val;
            else if (op1 == null)
                op1 = val;
            else if (op2 == null)
                op2 = val;
        }

        result = GetValue(op1, op2, operator, useEval);

        result = parseInt(result);

        ctr++;
    }

    Stack.push(result);

    var calculatedValue = Stack.pop();

    return calculatedValue;
}
function GetValue(op1, op2, operator, useEval) {
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
function PopulateMultipleStack(expression, useEval) {
    var expressionArr = expression.split(' ');

    for (var i = 0; i < expressionArr.length; i++) {
        var value = expressionArr[i];

        if (!useEval && !isNaN(value))
            value = parseInt(expressionArr[i]);

        MultipleStack.push(value);
    }
}


//Single operator/stack using out of the box Javascript array =========================================
var Stack = [];

function RunSingleOperatorTests() {
    var asserts = new Asserts();

    asserts.areEqual(RunSingleOperatorTest('2 4 *', false), 8);
    asserts.areEqual(RunSingleOperatorTest('2 4 *', true), 8);
    asserts.areEqual(RunSingleOperatorTest('10 3 /', false), 3);
    asserts.areEqual(RunSingleOperatorTest('10 3 /', true), 3);
    asserts.areEqual(RunSingleOperatorTest('7 3 +', false), 10);
    asserts.areEqual(RunSingleOperatorTest('7 3 +', true), 10);
    asserts.areEqual(RunSingleOperatorTest('45 3 -', false), 42);
    asserts.areEqual(RunSingleOperatorTest('45 3 -', true), 42);
    asserts.areEqual(RunSingleOperatorTest('4 3 %', false), 1);
    asserts.areEqual(RunSingleOperatorTest('4 3 %', true), 1);
    asserts.areEqual(RunSingleOperatorTest('17 4 &', false), 0);
    asserts.areEqual(RunSingleOperatorTest('17 4 &', true), 0);
    asserts.areEqual(RunSingleOperatorTest('511 56 ^', false), 455);
    asserts.areEqual(RunSingleOperatorTest('511 56 ^', true), 455);
    asserts.areEqual(RunSingleOperatorTest('42 21 |', false), 63);
    asserts.areEqual(RunSingleOperatorTest('42 21 |', true), 63);

}

function RunSingleOperatorTest(expression, useEval) {
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


