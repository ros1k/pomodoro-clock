import React from 'react'
import { useSelector } from 'react-redux'
import ProjectSingleGroupElement from '../ProjectSingleGroupElement/ProjectSingleGroupElement'

import style from './ProjectSingleGroup.module.scss'

const ProjectSingleGroup = ({title,id}) => {
   const tasks = useSelector(state=>state.tasks)
   const taskGroups = useSelector(state=>state.groups)
   console.log(tasks);
   console.log(taskGroups);
   const currentTasks = tasks.map((element,i) =>{
      console.log(element.parentID);
      console.log(id);
      console.log(taskGroups[0].id);
      if(element.parentID === 0 && id === taskGroups[0].id) {
         return <ProjectSingleGroupElement key={element.id} {...element} />
      }else{
         console.log('nioe');
      }
   })

   return (
      <div className={style.projectGroup}>
         <h2>{title}</h2>
         {currentTasks} 
         
         
      </div>
   )
}

export default ProjectSingleGroup
