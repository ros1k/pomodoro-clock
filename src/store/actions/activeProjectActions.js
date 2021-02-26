export const ACTIVE = 'ACTIVE';

export const activeProject = ({id}) =>({
      type:ACTIVE,
      payload:{
         id:id,
      }
   })
   
