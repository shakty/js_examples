// Stager Exercise.

// Requires the nodegame-client repo.
var ngc = require('./nodegame-client/index.js');

// Extract the Stager from ngc.
var Stager = ngc.Stager;
var stager = new Stager();

// Alternatively.
// var stager = ngc.getStager();

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

// stager.stage('stage 1');
// stager.stage('stage 2');
// stager.stage('stage 3');
// 
// testPositions(stager, 1, true);

// 2. Like 1., but 'stage 2' contains two nested steps.

// 3. Now repeat 'stage 2' 3 times.

// 4. Run the stages in random order

// 5. Run the steps of stage 2 in random order

// 6. Run stage 3 either first or last.

// Advanced exercises:

// 7. Extend the callback of the step of 'stage 1'.
// Make it print the stage position in sequence.
// Hint: this.getCurrentGameStage()
// Question: what exactly is the `this` object here? (more on "this" below)
// Question: what is the difference between:
// stager.extendStep and stager.extendStage? Why?

// 8. Store the 'state' of the stager to a variable.
// Try to add a new stage to the stager. What happens?

// 9. Use the previously saved 'state' of the stager to
// initialize a new stager object. Check its sequence.

// 10. Extend again the step of 'stage 1'.
// Add a callback that calls the previous callback and 
// then adds an item (object) to the `memory` database.
// Hint: this.getCurrentStepObj()
// Hint: the this.memory object is an instance of NDDB
// http://nodegame.github.io/NDDB/

// 11. Set an `init` function for the stager.
// In the init function add an event listener 
// on 'insert' of new items in the memory database.
// When an item is inserted it gets modified by adding your name in a property.
// Repeat step 10, and check what happens when you insert an item.

// 12. The this.pl (PlayerList) object 
// contains the list of currently connected players.
// Check the are no connected players at the moment. Hint .size()

// 13. Extend 'stage 2', and add an object named globals. 
// The object will be available in this.globals when executing any step 
// of stage 2. Check that.
// Question: If, in addition, you extend also one step 
// of 'stage 2' with another globals property, how does the content of
// `this.globals` changes through the stages and steps?

// Go free-style.

// 14. Uncomment the lines below.

stager.stage('stage 1');
stager.stage('stage 2');
stager.stage('stage 3');

stager.setDefaultStepRule(ngc.stepRules.WAIT);
sstate = stager.getState();
node = ngc.getClient();
node.verbosity = 1;
node.setup('plot', sstate);
node.createPlayer({ id: 'testid' });
node.game.start();

// Pay attention to the line:
// stager.setDefaultStepRule(ngc.stepRules.WAIT);

// Step rules determine what to do next when a step is _done_.
// ngc.stepRules.WAIT just says to wait.

// Comment the line: 
// stager.setDefaultStepRule(ngc.stepRules.WAIT);
// and add the line:
// stager.setDefaultStepRule(ngc.stepRules.SOLO);

// What do you think will happen? Why?
// What is the default callback? 
// Hint: console.log(stager.getDefaultCallback().toString());
// What is node.done doing?

// Check out:
// https://github.com/nodeGame/nodegame-client/blob/master/lib/modules/stepRules.js
// for more step rules.

// Important! Different step rules can be applied to
// different stages and steps to let a player advance through some steps,
// but wait for other player to be sync with him/her in others.

// Bonus Question: What is the difference between node.game and `this.game`
// when a step callback is executed?

// Bonus Question: node.player is an important object. What does it contain?

