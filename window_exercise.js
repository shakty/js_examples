// Window Exercise.

// Copy the commands below inside the JavaScript console of your browser.

// 0. Clear the page to start afresh.
node.window.clearPage();

// 1. Add the two main elements of the page:
//
//  - the header
//  - the mainframe
//

node.window.generateHeader();
node.window.generateFrame();

// or try the shortcut.

// W.generateHeader();
// W.generateFrame();

// 2. Add the VisualRound and VisualTimer widgets to the header.
// Hint: node.widgets.append()

// 3. Move the header around.
// Hint: W.setHeaderPosition('left')

// 4. Load a the game inside the mainframe
// Hint: W.loadFrame('game.htm');
// Question: what happens with W.loadFrame('http://google.com') ?

// 5. Access the input box and set it to 100.
// Hint: W.getElementWithId() and check what is the id of the input

// 6. Access the button and onclick calls node.done() 
// with the current value of the input.

