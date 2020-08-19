// Basic Structure
(() => {
  // Declare private variables and functions
  return {
    // Declare public variables and functions
  }
})();


// STANDARD MODULE PATTERN
const UICtrl = (() => {
  let text = 'Hello World';

  const changeText = () => {
    const element = document.querySelector('h1');
    element.textContent = text;
  };

  return {
    callChangeText: () => {
      changeText();
      console.log(text);
    }
  }
})();

UICtrl.callChangeText();


// REVEALING MODULE PATTERN
const ItemCtrl = (() => {
  let data = [];

  const add = (item) => {
    data.push(item);
    console.log('Item added...');
  };

  const get = (id) => {
    return data.find(item => {
      return item.id === id;
    });
  };

  return {
    add: add,
    get: get
  }
})();

ItemCtrl.add({id: 1, name: 'Jeffrey'});
ItemCtrl.add({id: 2, name: 'Annie'});
console.log(ItemCtrl.get(1));
console.log(ItemCtrl.get(2));