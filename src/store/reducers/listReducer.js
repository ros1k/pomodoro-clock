
import {
   ADD,EDIT,DELETE
} from '../actions/listActions'
import uuid from 'uuid';

const defaultState = {
   listName: 'Default List',
   id : uuid.v4()
}

export const listReducer = (state = [defaultState], action) =>{
   switch(action.type){
      case ADD:
         return [...state, action.payload];
      case EDIT:
         return state.map(currentList =>{
            if(currentList.id !== action.payload.id){
               return currentList 
            }
            return ({
               listName: action.payload.listName,
               id: currentList.id
            })
         });
      case DELETE:
         return state.filter(currentStateList => currentStateList.id !== action.payload.id);
      default:
         console.warn(`Nie mamy akcji typu: ${action.type}`)
         return state;
   }
 
}