// Window Exercise.

// Copy the commands below inside the JavaScript console of your browser.

// 1. node.say(label, to, data) sends a data message to a recipient
// By default to is 'SERVER', and data is undefined.

// In the javascript console of the monitor get the id the connected player
// and type:

node.say('Hi!', id);

// Check that the player with id id correctly received the message.


// 2. Now register an event listener for incoming messages on the player

node.on.data('Hi!', function(msg) { console.log(msg.from) });

// Resend the message from the monitor to the player, and check if the
// the event listener is called.


// 3. node.on.data is an alias for the more general node.on() incoming
// messages of type 'data'.
// The following event listener declaration would be equivalent.
node.on('in.say.DATA', function(msg) {
    if (msg.text === 'Hi!') {
        // Do something.
    }
});
// Check it.

// 4. node.set sets an object inside the game.memory database
// of the game room logic.

node.set({ foo: 'bar' });

// Cannot be tested in the monitor, but it can be simulated with a say msg.

// Register this handler on the monitor.
node.on.data('fakeSet', function(msg) {
    var o = msg.data;
    o.player = msg.from, o.stage = msg.stage;
    node.game.memory.insert(o);
});

// Send a data message from the client to the monitor, and
// check now the size of the node.game.memory object.


// 5. Messages can be created and sent with a low level interface.

var msg = node.msg.create({
    action: 'say',
    text: 'fakeSet',
    data: { foo: 'bar2' },
    to: id
});

node.socket.send(msg);

// 6. node.get sends a data message and waits for the reply from the receiver

// Monitor.
node.on('get.question', function(msg) {
    return 'the answer is 42';
});

// Client.
node.get('question', function(answer) {
    console.log('answer is ', answer);
}, id);
