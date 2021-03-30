//NOTE The goal of the store is to hold all the data for the entire application
// the store holds all of the models based on the data provided

//The state holds all the data (THIS IS PRIVATE)
let _state = {};


class Store {
  get State() {
    return _state;
  }


  commit(prop, data) {
    _state[prop] = data;
  }
}

const store = new Store();
export default store;