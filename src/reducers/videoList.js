import Redux from 'redux';

var videoListReducer = (state = sampleData, action) => {
  if (action.type === 'NEW_VIDEOS') {
    let newState = Object.assign({}, state);
    newState.videos = action.videos;
    return newState;
  }
  return state;
};

export default videoListReducer;
