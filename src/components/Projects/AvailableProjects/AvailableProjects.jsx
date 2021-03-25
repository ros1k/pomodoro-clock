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
                  total: 43 tasks<br/>
                  active: 23 tasks
               </span>
            </li>
}

export default AvailableProjects
