import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes';

const initialState = {
  places: [],
  selectedPlace: null
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
          return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
      };
      break;
    case SELECT_PLACE:
      return {
        ...state,
        selectedPlace: state.places.find((place) => {
          return place.key === action.placeKey;
        })
      };
      break;
    case DESELECT_PLACE:
      return {
        ...state,
        selectedPlace: null
      }
      break;
    default:
      return state;
  }
};

export default placesReducer;
