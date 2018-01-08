import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
  places: []
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      return {
        ...state,
        places: state.places.concat({
          key: Math.random(),
          name: action.placeName,
          image: {
            uri: "https://static.pexels.com/photos/371633/pexels-photo-371633.jpeg"
          }
        })
      };
      break;
    case DELETE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => {
          return place.key !== action.placeKey;
        })
      };
      break;
    default:
      return state;
  }
};

export default placesReducer;
