
import {
   ADD,EDIT,DELETE
} from '../actions/projectGroupsActions'
import uuid from 'uuid';

const defaultState = {
   id : uuid.v4(),
   groupTitle: 'To Do',
   isAllowToDelete : false,
  
}

export const projectGroupsReducer = (state = [defaultState], action) =>{
   switch(action.type){
      case ADD:
         return [...state, action.payload];
      case EDIT:
         return state.map(currentList =>{
            if(currentList.id !== action.payload.id){
               return currentList 
            }
            return ({
               groupName: action.payload.groupName,
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