import React from 'react'
import { useSelector } from 'react-redux'
import ProjectSingleGroupElement from '../ProjectSingleGroupElement/ProjectSingleGroupElement'

import style from './ProjectSingleGroup.module.scss'

const ProjectSingleGroup = ({title,id}) => {
   const tasks = useSelector(state=>state.tasks)
   const taskGroups = useSelector(state=>state.groups)

   const currentTasks = tasks.map((element,i) =>{
     
      element.finished? element.parentID = taskGroups[1].id : element.parentID = taskGroups[0].id;
    
      if(element.parentID === taskGroups[0].id && id === taskGroups[0].id) {
         return <ProjectSingleGroupElement key={element.id} {...element} />

      }

      if(element.parentID === taskGroups[1].id && id === taskGroups[1].id){
         return <ProjectSingleGroupElement key={element.id} {...element} />
      }
      
   })

   return (
      <div className={style.projectGroup}>
         <h2>{title}</h2>
         {currentTasks} 
         {id === taskGroups[0].id ? <button>+ Add New Card</button> : null}
        
      </div>
   )
}

export default ProjectSingleGroup
