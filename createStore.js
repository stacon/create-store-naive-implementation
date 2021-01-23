const createStore = (reducer, initialState = {}) => {
  const listeners = [];
  let state = { ...initialState };

  return {
    getState: () => state,
    dispatch: (action) => {
      state = reducer(state, action);
      listeners.forEach((listener) => listener());
    },
    subscribe: (listener) => {
      listeners.push(listener);
      return () => {
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      };
    },
  };
};

module.exports = { createStore };
