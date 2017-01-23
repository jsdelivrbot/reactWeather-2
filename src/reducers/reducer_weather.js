import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action){
  // Always make sure we return a new state, never modify the existing state. If need to maintain previous state
  // add it to the new item being returned, do not modify it.
  switch (action.type){
    case FETCH_WEATHER:
      // return state.concat([action.payload.data]); //Below line is nearly identical using ES6 syntax
      return [ action.payload.data, ...state]; // [ city, city, city] NOT [city, [city, city]]
  }

  return state;
}
