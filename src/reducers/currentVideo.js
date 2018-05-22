import Redux from 'redux';

// reducers accept state, the action payload. They then execute logic to create new state
const currentVideoReducer = (state, action) => {
  // for any action recognized, return a new state.
  if (action.type === 'CHANGE_VIDEO') {
    let newState = Object.assign({}, state);
    newState.currentVideo = action.video;
    return newState;
  }
  // for any action not recognized, return the unmodified state
  return state;
};

export default currentVideoReducer;
