function Asserts() {
    this.variable = 0;
    this.areEqual = areEqual;
}
function areEqual(expectedValue, actualValue) {
    if (expectedValue != actualValue)
         throw 'Assert Error: ' + expectedValue.toString() + ' does not equal ' + actualValue.toString();
}
