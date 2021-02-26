
import {ACTIVE} from '../actions/activeProjectActions'

export const activeProjectReducer = (state = {id:0}, action) =>{
   switch(action.type){
      case ACTIVE:
         return {
            id: action.payload.id
         }
      default:
         console.warn(`Nie mamy akcji typu: ${action.type}`)
         return state;
   }
 
}