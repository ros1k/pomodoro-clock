import uuid from 'uuid';

export const ADD_PROJECT = 'ADD_PROJECT';
export const EDIT_PROJECT = 'EDIT_PROJECT';
export const DELETE_PROJECT = 'DELETE_PROJECT';


export const addProject = ({projectName}) =>({
      type:ADD_PROJECT,
      payload:{
         id: uuid.v4(),
         projectName,
      }

   })
   
export const editProject= ({id,projectName}) => ({  // ({data})
   type:EDIT_PROJECT,
   payload: {
      //...data
      id,
      projectName
   }
})

export const deleteProject = id =>({
   type:DELETE_PROJECT,
   payload:{
      id,
   }
})