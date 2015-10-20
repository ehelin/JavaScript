var Stack = [];

function RunPolishReverseNotation() {
    Display('Starting Run Polish Reverse Notation!');
    Display(' ');
    RunRunPolishReverseNotationTests();
    Display('Polish Reverse Notation Complete!');
}
function RunRunPolishReverseNotationTests() {
    var asserts = new Asserts();

    asserts.areEqual(RunTest('5 6 * 3 2 * 3 * -', false), 12);
    asserts.areEqual(RunTest('5 6 * 3 2 * 3 * -', true), 12);
    asserts.areEqual(RunTest('2 4 *', false), 8);
    asserts.areEqual(RunTest('2 4 *', true), 8);
    asserts.areEqual(RunTest('10 3 /', false), 3);
    asserts.areEqual(RunTest('10 3 /', true), 3);
    asserts.areEqual(RunTest('7 3 +', false), 10);
    asserts.areEqual(RunTest('7 3 +', true), 10);
    asserts.areEqual(RunTest('45 3 -', false), 42);
    asserts.areEqual(RunTest('45 3 -', true), 42);
    asserts.areEqual(RunTest('4 3 %', false), 1);
    asserts.areEqual(RunTest('4 3 %', true), 1);
    asserts.areEqual(RunTest('17 4 &', false), 0);
    asserts.areEqual(RunTest('17 4 &', true), 0);
    asserts.areEqual(RunTest('511 56 ^', false), 455);
    asserts.areEqual(RunTest('511 56 ^', true), 455);
    asserts.areEqual(RunTest('42 21 |', false), 63);
    asserts.areEqual(RunTest('42 21 |', true), 63);
}
function RunTest(expression, useEval) {
    Display('Running test -------------------------------------------------------------');
    Display('Expression: ' + expression);

    if (useEval == true)
        Display('Using Eval() function');
    else
        Display('Using Expression tree');

    var expressionArr = expression.split(' ');
    var cont = true;
    var op1 = null, op2 = null, operator = null, result = 0;

    for(var i=0;i< expressionArr.length;i++)
    {
        var value = expressionArr[i];

        if (!isNaN(value))
        {
            var value = parseInt(value);
            Stack.push(value);
        }
        else
        {
            operator = value;
            op2 = Stack.pop();
            op1 = Stack.pop();
        }

        if (operator != null && op1 != null && op2 != null)
        {
            result = GetValue(op1, op2, operator, useEval);
            result = parseInt(result);                
            Stack.push(result);
            op1 = null, op2 = null, operator = null, value = null;
        }            
    }
    
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
