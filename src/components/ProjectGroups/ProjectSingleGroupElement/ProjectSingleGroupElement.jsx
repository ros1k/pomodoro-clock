
import React from 'react'


import style from './ProjectSingleGroupElement.module.scss'

const ProjectSingleGroupElement = ({id,parentID,taskColor,taskComments,taskDueDat,taskSubList,taskTitle}) => {
 
 
   return (
      <div className={style.projectSingleElement}>
         <div className={style.topWrapper}>
            <h3>{taskTitle}</h3>
            <span className={style.levelBar} style={{backgroundColor:taskColor}}></span>
         </div>
         <div className={style.bottomWrapper}>
            <span>
               comments ({taskComments.length})
            </span>
            <span>
               links
            </span>
        
         </div>

      </div>
   )
}

export default ProjectSingleGroupElement
