import uuid from 'uuid';

export const ADD_TASK = 'ADD_TASK';
export const EDIT_TASK = 'EDIT_TASK';
export const CHANGE_TASK_STATUS = 'CHANGE_TASK_STATUS';
export const DELETE_TASK = 'DELETE_TASK';


export const addTask = ({taskTitle,important,parentID}) =>({
      type:ADD_TASK,
      payload:{
         id: uuid.v4(),
         parentID,
         taskTitle,
         important,
      }

   })
   
export const editTask= ({id,parentID,taskTitle,important,finished}) => ({  // ({data})
   type:EDIT_TASK,
   payload: {
      //...data
      id,
      parentID,
      taskTitle,
      important,
      finished,
   }
})
export const changeTaskStatus = ({id,parentID,finished}) => ({  // ({data})
   type:CHANGE_TASK_STATUS,
   payload: {
      //...data
      id,
      parentID,
      finished,
   }
})

export const deleteTask = id =>({
   type:DELETE_TASK,
   payload:{
      id,
   }
})