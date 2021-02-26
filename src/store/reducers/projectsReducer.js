
import {
   ADD,EDIT,DELETE
} from '../actions/projectsActions'
import uuid from 'uuid';

const defaultState = {
   id : uuid.v4(),
   projectName: 'Default List'
  
}

export const projectsReducer = (state = [defaultState], action) =>{
   switch(action.type){
      case ADD:
         return [...state, action.payload];
      case EDIT:
         return state.map(currentList =>{
            if(currentList.id !== action.payload.id){
               return currentList 
            }
            return ({
               projectName: action.payload.projectName,
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