function Asserts() {
    this.variable = 0;
    this.areEqual = areEqual;
}
function areEqual(expectedValue, actualValue) {
    if (expectedValue == undefined)
        expectedValue = 'undefined';

    if (actualValue == undefined)
        actualValue = 'undefined';

    if (expectedValue != actualValue)
        Display('Test Fails: ' + expectedValue.toString() + ' does not equal ' + actualValue.toString());
    else
        Display('Test Passes: ' + expectedValue.toString() + ' does equal ' + actualValue.toString());

    Display(' ');
}
