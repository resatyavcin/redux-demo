import { createSlice, configureStore } from "@reduxjs/toolkit";

export const CHANGE_VISIBILITY = "CHANGE_VISIBILITY";
export const INCREMENT = "INCREMENT";
export const INCREASE = "INCREASE";
export const DECREMENT = "DECREMENT";

const counterInitialState = {
  counter: 9,
  visibility: false,
};

const counterSlice = createSlice({
  name: "counter",
  initialState: counterInitialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter += action.payload;
    },
    changeVisibility(state) {
      state.visibility = !state.visibility;
    },
  },
});

const authenticationInitialState = {
  isAuthenticate: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState: authenticationInitialState,
  reducers: {
    login(state) {
      state.isAuthenticate = true;
    },
    logout(state) {
      state.isAuthenticate = false;
    },
  },
});

const store = configureStore(
  {
    reducer: {
      counter: counterSlice.reducer,
      auth: authSlice.reducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;
