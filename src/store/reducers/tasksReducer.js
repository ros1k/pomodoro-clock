
import {
   ADD_TASK,EDIT_TASK,DELETE_TASK
} from '../actions/tasksActions'
import uuid from 'uuid';

const defaultState = {
   id : uuid.v4(),
   parentID: 0,
   taskTitle:'Finish this to do list app',
   taskColor:"red",
   taskSubList:[
      {
         name:'Stworzyć listę projektów', 
         finished:true,
      },
      {
         name:'Stworzyć listę tasków', 
         finished:true,
      },
      {
         name:'Dodać elementy do listy', 
         finished:true,
      },
      {
         name:'css/scss', 
         finished:false,
      },
      {
         name:'rwd', 
         finished:false,
      },
      {
         name:'dodawanie i usuwanie elementów', 
         finished:false,
      }],
   taskDueDate:'yesterday',
   taskComments:[],
  
}

export const tasksReducer = (state = [defaultState], action) =>{
   switch(action.type){
      case ADD_TASK:
         return [...state, action.payload];
      case EDIT_TASK:
         return state.map(currentList =>{
            if(currentList.id !== action.payload.id){
               return currentList 
            }
            return ({
               projectName: action.payload.projectName,
               id: currentList.id
            })
         });
      case DELETE_TASK:
         return state.filter(currentStateList => currentStateList.id !== action.payload.id);
      default:
         console.warn(`Nie mamy akcji typu: ${action.type}`)
         return state;
   }
 
}