//In front of you are three light switches. Only one does   anything, and it turns on 
//the light downstairs. From here you can't see the light, and it makes no sound. You 
//must determine which switch operates the light, BUT you can only go check it once. 
//How do you figure out which switch is for the light? 
function LightSwitch() {
    Display('------------------------------------------------------------------');
    Display('Starting Light Switch Example!');
    Display('Problem:   In front of you are three light switches. Only one does anything, and it turns on the light downstairs. '
        + ' From here you cannot see the light, and it makes no sound. You must determine which switch operates the light, BUT you '
        + ' can only go check it once. How do you figure out which switch is for the light?');

    RunLightSwitchTest();
}
var LightSwitches = [];

function RunLightSwitch() {
    PopulateSwitches();
    FindSwitchV1();  //This was my original one
    FindSwitchV2();  //This was after reading an answer online...not even close(http://www.braingle.com/brainteasers/teaser.php?op=2&id=363&comm=0)
}

function FindSwitchV1() {
    Display("Turning on switch 1 and 2");

    if (LightSwitches[0].isSwitch == true || LightSwitches[1] == true)
        Display("Answer is switch 1 or 2");
    else
        Display("Answer is switch 3");
}

function FindSwitchV2() {
   //TODO - Code answer
}

function PopulateSwitches() {
    Display('Populating Light Switches...');

    var lightSwitch = new LightSwitch('LightSwitch 1', false);
    LightSwitches[0] = lightSwitch;

    lightSwitch = new LightSwitch('LightSwitch 2', true);
    LightSwitches[1] = lightSwitch;

    lightSwitch = new LightSwitch('LightSwitch 1', false);
    LightSwitches[2] = lightSwitch;
}

function LightSwitch(pName, isSwitch) {
    this.name = pName;
    this.isSwitch = isSwitch;
}

//function FindDifferentWeightV2() {
//    Display('V2 - Finding ball with different weight...');

//    var total1 = Balls[0].weight + Balls[1].weight + Balls[2].weight;
//    var total2 = Balls[3].weight + Balls[4].weight + Balls[5].weight;

//    if (total1 == total2) {         //answer is last two balls
//        if (Balls[6].weight < Balls[7].weight)
//            Display('Ball 8 is heaviest!');
//        else
//            Display('Ball 7 is heaviest!');
//    }
//    else if (total2 < total1) {     //answer is in total1 balls
//        if (Balls[1].weight < Balls[2].weight)
//            Display('Ball 3 is heaviest!');
//        else if (Balls[0].weight < Balls[1].weight)
//            Display('Ball 2 is heaviest!');
//        else
//            Display('Ball 1 is heaviest!');
//    }
//    else {                          //answer is in total1 balls
//        if (Balls[4].weight < Balls[5].weight)
//            Display('Ball 6 is heaviest!');
//        else if (Balls[3].weight < Balls[4].weight)
//            Display('Ball 5 is heaviest!');
//        else
//            Display('Ball 4 is heaviest!');
//    }
//}

//function FindDifferentWeightV1() {
//    Display('V1 - Finding ball with different weight...');
//    var curWeight = 0;
//    var fnd = false;
//    var ctr = 0;

//    for (var i = 0; i < Balls.length; i++) {
//        Display('Ball ' + Balls[i].name.toString() + ' has a weight of ' + Balls[i].weight.toString());

//        if (i == 0)
//            curWeight = Balls[i].weight;
//        else if (curWeight != Balls[i].weight) {
//            fnd = true;
//            curWeight = Balls[i].weight;
//            ctr = i;
//            break;
//        }
//    }

//    //TODO - make an assert
//    if (fnd)
//        Display('Found!  Ball ' + ctr.toString() + ' with a weight of '
//                + curWeight.toString() + ' was different at interval '
//                + ctr);
//    else
//        Display('Not Found!');
//}
