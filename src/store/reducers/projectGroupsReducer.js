
import {
   ADD_LIST,EDIT_LIST,DELETE_LIST
} from '../actions/projectGroupsActions'
import uuid from 'uuid';

const defaultState = {
   id : uuid.v4(),
   groupTitle: 'To Do',
   isAllowToDelete : false,
  
}

export const projectGroupsReducer = (state = [defaultState], action) =>{
   switch(action.type){
      case ADD_LIST:
         return [...state, action.payload];
      case EDIT_LIST:
         return state.map(currentList =>{
            if(currentList.id !== action.payload.id){
               return currentList 
            }
            return ({
               groupName: action.payload.groupName,
               id: currentList.id
            })
         });
      case DELETE_LIST:
         return state.filter(currentStateList => currentStateList.id !== action.payload.id);
      default:
         console.warn(`Nie mamy akcji typu: ${action.type}`)
         return state;
   }
 
}