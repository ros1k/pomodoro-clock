
import React from 'react'

import style from './ProjectSingleGroupElement.module.scss'

const ProjectSingleGroupElement = () => {
   return (
      <div className={style.projectSingleElement}>
         <div className={style.topWrapper}>
            <h3>list element</h3>
            <span className="bar"></span>
         </div>
         <div className={style.bottomWrapper}>
            <span>
               icon 3
            </span>
            <span>
               icon 8
            </span>
         </div>

      </div>
   )
}

export default ProjectSingleGroupElement
