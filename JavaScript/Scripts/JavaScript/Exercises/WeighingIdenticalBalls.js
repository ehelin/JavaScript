//Suppose you had eight identical balls. One of them is slightly heavier 
//and you are given a balance scale . What's the fewest number of times 
//you have to use the scale to find the heavier ball?”
function WeighingIdenticalBalls() {
    Display('------------------------------------------------------------------');
    Display('Starting Weighing Identical Balls Challenge!');
    Display('Problem: Suppose you had eight identical balls. One of them is slightly heavier ' 
                + 'and you are given a balance scale . What is the fewest number of times '
                + 'you have to use the scale to find the heavier ball?');

    RunTest();
}
var Balls = [];

function RunTest() {
    PopulateBalls();

}

function PopulateBalls() {    
    var ball = null;

    for (var i = 0; i < 7; i++) {
        ball = new Ball('Ball ' + (i+1).toString(), 10);
        Balls[i] = ball;
    }

    ball = new Ball('Ball 8', 11);
    ball.weight = 11;
    Balls[7] = ball;
}

function Ball(pName, pWeight) {
    this.name = pName;
    this.weight = pWeight;
}