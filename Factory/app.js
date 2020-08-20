function MemberFactory() {
  this.createMember = (name, type) => {
    let member;

    if (type === 'simple') {
      member = new SimpleMembership(name);
    } else if (type === 'standard') {
      member = new StandardMembership(name);
    } else if (type === 'super') {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function() {
      console.log(`${this.name} (${this.type}): ${this.cost}`)
    };

    return member;
  };
}

function SimpleMembership(name) {
  this.name = name;
  this.cost = '$5';
};

function StandardMembership(name) {
  this.name = name;
  this.cost = '$15';
};

function SuperMembership(name) {
  this.name = name;
  this.cost = '$25';
};

const members = [];
const factory = new MemberFactory();

members.push(factory.createMember('Jeffrey Winger', 'super'));
members.push(factory.createMember('Abed Nadir', 'standard'));
members.push(factory.createMember('Annie Edison', 'standard'));
members.push(factory.createMember('Britta Perry', 'simple'));
members.push(factory.createMember('Troy Barnes', 'standard'));

console.log(members);

members.forEach(member => member.define());