import uuid from 'uuid';

export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const DELETE = 'DELETE';


export const addList = ({listName}) =>({
      type:ADD,
      payload:{
         id: uuid.v4(),
         listName,
      }

   })
   
export const editList = ({id,listName}) => ({  // ({data})
   type:EDIT,
   payload: {
      //...data
      id,
      listName
   }
})

export const deleteList = id =>({
   type:DELETE,
   payload:{
      id,
   }
})