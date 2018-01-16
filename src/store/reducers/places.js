import { SET_PLACES, REMOVE_PLACE } from '../actions/actionTypes';

const initialState = {
  places: []
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return {
        ...state,
        places: action.places
      };
      break;
    case REMOVE_PLACE:
      return {
        ...state,
        places: state.places.filter((place) => {
          return place.key !== action.key;
        })
      };
      break;
    default:
      return state;
  }
};

export default placesReducer;
