import { configureStore } from "@reduxjs/toolkit";

const counterReducer = (state, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = configureStore({
  reducer: {
    counterReducer,
  },
});

const counterSubscriber = () => {
  const latestState = store.getState();

  console.log(latestState);
};

store.subscribe(counterSubscriber);
