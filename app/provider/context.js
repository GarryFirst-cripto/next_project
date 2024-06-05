'use client';

import { createContext, useContext, useReducer, useEffect } from 'react';

const StoreContext = createContext();
export const useStore = () => useContext(StoreContext);

const initialState = {
  post: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_POST':
      return {
        ...state,
        post: action.payload,
      };
    case 'LOAD_STATE':
      return {
        post: action.payload,
      };
    default:
      return state;
  }
};

export const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!state.post?.id) {
      const storedState = localStorage.getItem('store');
      dispatch({ type: 'LOAD_STATE', payload: JSON.parse(storedState) });
    }
  }, []);

  useEffect(() => {
    if (state.post?.id) {
      localStorage.setItem('store', JSON.stringify(state.post))
    }
  }, [state]);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  );
};
