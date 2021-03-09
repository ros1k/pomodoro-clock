import uuid from 'uuid';

export const ADD_LIST = 'ADD_LIST';
export const EDIT_LIST = 'EDIT_LIST';
export const DELETE_LIST = 'DELETE_LIST';


export const addProjectGroup = ({groupTitle,isAllowToDelete}) =>({
      type:ADD_LIST,
      payload:{
         id: uuid.v4(),
         groupTitle: groupTitle,
         isAllowToDelete: isAllowToDelete
      }

   })
   
export const editProjectGroup = ({id,groupTitle}) => ({  // ({data})
   type:EDIT_LIST,
   payload: {
      //...data
      id,
      groupTitle
   }
})

export const deleteProjectGroup = id =>({
   type:DELETE_LIST,
   payload:{
      id,
   }
})