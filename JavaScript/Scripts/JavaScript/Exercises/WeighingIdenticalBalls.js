//Suppose you had eight identical balls. One of them is slightly heavier 
//and you are given a balance scale . What's the fewest number of times 
//you have to use the scale to find the heavier ball?”
function WeighingIdenticalBalls() {
    Display('------------------------------------------------------------------');
    Display('Starting Weighing Identical Balls Challenge!');
    Display('Problem: Suppose you had eight identical balls. One of them is slightly heavier ' 
                + 'and you are given a balance scale . What is the fewest number of times '
                + 'you have to use the scale to find the heavier ball?');

    RunWeighingIdenticalBallsTest();
}
var Balls = [];

function RunWeighingIdenticalBallsTest() {
    PopulateBalls();
    FindDifferentWeightV1();  //This was my original one
    FindDifferentWeightV2();  //This was after reading an answer online
}

function FindDifferentWeightV2() {
    Display('V2 - Finding ball with different weight...');

    var total1 = Balls[0].weight + Balls[1].weight + Balls[2].weight;
    var total2 = Balls[3].weight + Balls[4].weight + Balls[5].weight;

    if (total1 == total2) {         //answer is last two balls
        if (Balls[6].weight < Balls[7].weight)
            Display('Ball 8 is heaviest!');
        else
            Display('Ball 7 is heaviest!');
    }
    else if (total2 < total1) {     //answer is in total1 balls
        if (Balls[1].weight < Balls[2].weight)
            Display('Ball 3 is heaviest!');
        else if (Balls[0].weight < Balls[1].weight)
            Display('Ball 2 is heaviest!');
        else
            Display('Ball 1 is heaviest!');
    }
    else {                          //answer is in total1 balls
        if (Balls[4].weight < Balls[5].weight)
            Display('Ball 6 is heaviest!');
        else if (Balls[3].weight < Balls[4].weight)
            Display('Ball 5 is heaviest!');
        else
            Display('Ball 4 is heaviest!');
    }
}

function FindDifferentWeightV1() {
    Display('V1 - Finding ball with different weight...');
    var curWeight = 0;
    var fnd = false;
    var ctr = 0;

    for (var i = 0; i < Balls.length; i++) {
        Display('Ball ' + Balls[i].name.toString() + ' has a weight of ' + Balls[i].weight.toString());

        if (i == 0)
            curWeight = Balls[i].weight;
        else if (curWeight != Balls[i].weight) {
            fnd = true;
            curWeight = Balls[i].weight;
            ctr = i;
            break;
        }
    }

    //TODO - make an assert
    if (fnd)
        Display('Found!  Ball ' + ctr.toString() + ' with a weight of '
                + curWeight.toString() + ' was different at interval '
                + ctr);
    else
        Display('Not Found!');
}

function PopulateBalls() {
    Display('Populating Ball array...');
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