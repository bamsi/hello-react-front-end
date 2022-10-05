import { createStore } from 'redux';

const initialState = { name: 'Hello, greetings!' };

function GreetingReducer(state = initialState, action) {
  if (action.type === 'SET_GREETING') {
    return action.payload;
  }
  return state;
}

const store = createStore(GreetingReducer);

export default store;
