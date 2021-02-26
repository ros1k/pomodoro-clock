import React from 'react'

import style from './AvailableProjects.module.scss'

const AvailableProjects = ({id,projectName,isActive,handleChangeListView}) => {

   return <li className={isActive? style['projects-list__element--active'] : style['projects-list__element']} 
               key={id} 
               id={id}
               active='active'
               onClick={handleChangeListView}
               >
               {projectName}
               <span className={style['project-list__element-details'] }>
                  3 boards and 43 active tasks
               </span>
            </li>
}

export default AvailableProjects
