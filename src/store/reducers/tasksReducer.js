
import {
   ADD_TASK,EDIT_TASK,DELETE_TASK
} from '../actions/tasksActions'
import uuid from 'uuid';

const defaultState = {
   id : uuid.v4(),
   parentID: 0,
   taskTitle:'Finish this to do list app',
   taskColor:"red",
   taskSubList:[],
   taskDueDate:'yesterday',
   taskComments:[],
   finished:false,
}
const n1 = {
   id : uuid.v4(),
   parentID: 0,
   taskTitle:'Stworzyć listę projektów',
   taskColor:"green",
   taskSubList:[],
   taskDueDate:'yesterday',
   taskComments:[],
   finished:true,
}
const n2 = {
   id : uuid.v4(),
   parentID: 0,
   taskTitle:'Dodać elementy do listy',
   taskColor:"green",
   taskSubList:[],
   taskDueDate:'yesterday',
   taskComments:[],
   finished:true,
}
const n3 = {
   id : uuid.v4(),
   parentID: 0,
   taskTitle:'dodawanie i usuwanie elementów',
   taskColor:"green",
   taskSubList:[],
   taskDueDate:'yesterday',
   taskComments:[],
   finished:false,
}
const n4 = {
   id : uuid.v4(),
   parentID: 0,
   taskTitle:'rwd',
   taskColor:"green",
   taskSubList:[],
   taskDueDate:'yesterday',
   taskComments:[],
   finished:false,
}
const n5 = {
   id : uuid.v4(),
   parentID: 0,
   taskTitle:'css/scss',
   taskColor:"green",
   taskSubList:[],
   taskDueDate:'yesterday',
   taskComments:[],
   finished:false,
}

// {
//    name:'Stworzyć listę projektów', 
//    finished:true,
// },
// {
//    name:'Stworzyć listę tasków', 
//    finished:true,
// },
// {
//    name:'Dodać elementy do listy', 
//    finished:true,
// },
// {
//    name:'css/scss', 
//    finished:false,
// },
// {
//    name:'rwd', 
//    finished:false,
// },
// {
//    name:'dodawanie i usuwanie elementów', 
//    finished:false,
// }
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