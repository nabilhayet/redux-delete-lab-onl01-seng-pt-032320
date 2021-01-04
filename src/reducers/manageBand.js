import uuid from 'uuid';

export default function manageBand(state = {
  bands: []
}, action) {
  switch (action.type) {
    case 'ADD_BAND':

    const band = {
      id: uuid(),
      name: action.payload.name 
    }

      // return { ...state, bands: [...state.bands, action.name] }
    return {bands: state.bands.concat(band) };

    case 'DELETE_BAND':
      return {bands: state.bands.filter(band => band.id !== action.payload.id )}

    default:
      return state;
  }
};
