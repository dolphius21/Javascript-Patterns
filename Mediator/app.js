class User {
  constructor(name) {
    this.name = name;
    this.chatroom = null;
  }

  send(message, to) {
    this.chatroom.send(message, this, to);
  }

  receive(message, from) {
    console.log(`${from.name} to ${this.name}: ${message}`);
  }
}

class Chatroom {
  constructor() {
    this.users = {};
  }

  register(user) {
    this.users[user.name] = user;
    user.chatroom = this;
  }

  send(message, from, to) {
    if(to) {
      // Single user message
      to.receive(message, from);
    }else {
      // Mass message
      for(let key in this.users) {
        if(this.users[key] !== from) {
          this.users[key].receive(message, from);
        }
      }
    }
  }
}


// Instantiate Users
const jeff = new User('Jeff');
const abed = new User('Abed');
const annie = new User('Annie');

// Instantiate Chatroom
const chatroom = new Chatroom();

chatroom.register(jeff);
chatroom.register(abed);
chatroom.register(annie);

jeff.send('Hello Annie', annie);
annie.send('Hello Jeff, heart heart', jeff);
abed.send('Hello Everyone!!')