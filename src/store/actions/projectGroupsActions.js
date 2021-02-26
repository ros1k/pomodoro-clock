import uuid from 'uuid';

export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const DELETE = 'DELETE';


export const addProjectGroup = ({groupTitle,isAllowToDelete}) =>({
      type:ADD,
      payload:{
         id: uuid.v4(),
         groupTitle,
         isAllowToDelete: isAllowToDelete
      }

   })
   
export const editProjectGroup = ({id,groupTitle}) => ({  // ({data})
   type:EDIT,
   payload: {
      //...data
      id,
      groupTitle
   }
})

export const deleteProjectGroup = id =>({
   type:DELETE,
   payload:{
      id,
   }
})