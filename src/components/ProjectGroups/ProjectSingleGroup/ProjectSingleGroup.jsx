import React from 'react'
import ProjectSingleGroupElement from '../ProjectSingleGroupElement/ProjectSingleGroupElement'

import style from './ProjectSingleGroup.module.scss'

const ProjectSingleGroup = () => {
   return (
      <div className={style.projectGroup}>
         <h2>To do:</h2>
         <ProjectSingleGroupElement/>
      </div>
   )
}

export default ProjectSingleGroup
