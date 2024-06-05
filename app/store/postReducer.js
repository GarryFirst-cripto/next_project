const postReducer = (state = {}, action) => {
  switch (action.type) {
    case 'SET_POST':
      return {
        ...state,
        post: action.payload,
      };
    default:
      return state;
  }
};

export default postReducer;
