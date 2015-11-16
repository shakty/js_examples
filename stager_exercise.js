// Stager Exercise.

// Requires the nodegame-client repo.
var ngc = require('./nodegame-client/index.js');

// Extract the Stager from ngc.
var Stager = ngc.Stager;
var stager = new Stager();


// Alternatively.
// var stager = ngc.getStager();

// Result variable.
var result;

// Utility functions.

function initGame(stager) {
    var sstate, mynode;
    stager.setDefaultStepRule(ngc.stepRules.WAIT);
    stager.reset();
    sstate = stager.getState();
    mynode = ngc.getClient();
    mynode.verbosity = -1000;
    mynode.setup('plot', sstate);
    mynode.createPlayer({ id: 'testid' });
    mynode.game.start({ step: false });
    return mynode.game;
}

function goThroughSteps(game, result, debug) {
    var id, counter, tmp;
    result = result || {};
    counter = 0;

    // Step through.
    while (hasNextStep(game)) {
        game.step();
        tmp = game.getCurrentStepObj();
        id = tmp.id;
        if (!result[id]) result[id] = [];
        result[id].push(counter);
        counter++;
        if (debug) console.log(id);
    }
    return result;
}

function hasNextStep(game) {
    var curStep, nextStep;
    curStep = game.getCurrentGameStage();
    nextStep = game.plot.next(curStep);
    return nextStep !== ngc.GamePlot.GAMEOVER &&
        nextStep !== ngc.GamePlot.END_SEQ;
}

function testPositions(stager, len, debug) {
    var i, len, game, result;
    i = -1; len = len || 1;
    result = {};
    for ( ; ++i < len ; ) {
        game = initGame(stager);
        goThroughSteps(game, result, debug);
    }
    return result;
}


// Create the following sequences.

// To test your sequence use testPositions(stager, number of tests, verbose)

// 1. Three sequential stages named 'stage 1', 'stage 2', 'stage 3'.
stager.stage('stage 1');
stager.stage('stage 2');
stager.stage('stage 3');

testPositions(stager, 1, true);

// 2. Like 1., but 'stage 2' contains two nested steps.

// 3. Now repeat 'stage 2' 3 times.

// 4. Run the stages in random order

// 5. Run the steps of stage 2 in random order

// 6. Run stage 3 either first or last.

// 7. Reproduce the sequence of the car sharing game.