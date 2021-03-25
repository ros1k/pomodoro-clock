
import {
   ADD_TASK,EDIT_TASK,CHANGE_TASK_STATUS,DELETE_TASK
} from '../actions/tasksActions'
import uuid from 'uuid';

const defaultState = {
   id : uuid.v4(),
   parentID: 0,
   taskTitle:'Finish this to do list app',
   important:true,
   finished:false,
}
const n1 = {
   id : uuid.v4(),
   parentID: 0,
   taskTitle:'Stworzyć listę projektów',
   important:false,
   finished:true,
}
const n2 = {
   id : uuid.v4(),
   parentID: 0,
   taskTitle:'Dodać elementy do listy',
   important:false,
   finished:true,
}
const n3 = {
   id : uuid.v4(),
   parentID: 0,
   taskTitle:'dodawanie i usuwanie elementów',
   important:false,
   finished:false,
}
const n4 = {
   id : uuid.v4(),
   parentID: 0,
   taskTitle:'rwd',
   important:false,
   finished:false,
}
const n5 = {
   id : uuid.v4(),
   parentID: 0,
   taskTitle:'css/scss',
   important:false,
   finished:false,
}


export const tasksReducer = (state = [defaultState,n1,n2,n3,n4,n5], action) =>{
   switch(action.type){
      case ADD_TASK:
         return [...state, action.payload];
      case EDIT_TASK:
         return state.map(currentList =>{
            if(currentList.id !== action.payload.id){
               return currentList 
            }
            return ({
               id: currentList.id,
               finished: action.payload.finished,
            })
         });   
      case CHANGE_TASK_STATUS:
         return state.map(currentList =>{
            if(currentList.id !== action.payload.id){
               return currentList 
            }
   
            return ({
               id: currentList.id,
               parentID: currentList.parentID,
               taskTitle: currentList.taskTitle,
               important: currentList.important,
               finished: action.payload.finished,
            })
         });

      case DELETE_TASK:
         return state.filter(currentStateList => currentStateList.id !== action.payload.id);
      default:
         console.warn(`Nie mamy akcji typu: ${action.type}`)
         return state;
   }
 
}