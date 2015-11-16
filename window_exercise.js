// Window Exercise.

// Copy the commands below inside the JavaScript console of your browser.

// 0. Clear the page to start afresh.
node.window.clearPage();
// or
node.window.clearPageBody();
// to keep what is in the head.

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

// 5. Make the DIV element 'dictator' visible.
// Hint: W.getElementById('dictator') and check the style property.

// 6. Access the input box and set it to 100.
// Hint: .value = 100

// 7. Check what W.lockScreen(); and W.unlockScreen() do.

// 7. Access the button in the page and add and onclick
// event handler. When the button is clicked make a call to
// node.done({value: x});
// where x is the current value of the input.

