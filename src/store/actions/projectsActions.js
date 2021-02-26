import uuid from 'uuid';

export const ADD = 'ADD';
export const EDIT = 'EDIT';
export const DELETE = 'DELETE';


export const addProject = ({projectName}) =>({
      type:ADD,
      payload:{
         id: uuid.v4(),
         projectName,
      }

   })
   
export const editProject= ({id,projectName}) => ({  // ({data})
   type:EDIT,
   payload: {
      //...data
      id,
      projectName
   }
})

export const deleteProject = id =>({
   type:DELETE,
   payload:{
      id,
   }
})