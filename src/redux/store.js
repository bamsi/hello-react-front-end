import { createStore } from 'redux';

const initialState = { name: 'Hello, greetings!' };

function GreetingReducer(state = initialState, action) {
  console.log(action);
  if (action.type === 'SET_GREETING') {
    return action.payload;
  } else {
    return state;
  }
}

const store = createStore(GreetingReducer);

export default store;
