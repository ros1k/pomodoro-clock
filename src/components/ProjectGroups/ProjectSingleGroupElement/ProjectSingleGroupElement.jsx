
import React from 'react'


import style from './ProjectSingleGroupElement.module.scss'

const ProjectSingleGroupElement = ({id,parentID,taskColor,taskComments,taskDueDat,taskSubList,taskTitle,finished}) => {
 
   if(finished){
      return (
         <div className={style.projectSingleElement}>
            <div className={style.topWrapper}>
               <span className={style.levelBar} style={{backgroundColor:taskColor}}></span>
               <span className={style.fakeCheckboxChecked}>
                  <input type="checkbox"/>
               </span>
               <h3>{taskTitle}</h3>
            </div>
            {/* <div className={style.bottomWrapper}>
               <span>
                  comments ({taskComments.length})
               </span>
               <span>
                  links
               </span>
           
            </div> */}
   
         </div>
      )
   }else{
      return (
         <div className={style.projectSingleElement}>
            <div className={style.topWrapper}>
               <span className={style.levelBar} style={{backgroundColor:taskColor}}></span>
               <span className={style.fakeCheckbox}>
                  <input type="checkbox"/>
               </span>
               <h3>{taskTitle}</h3>
            </div>
            {/* <div className={style.bottomWrapper}>
               <span>
                  comments ({taskComments.length})
               </span>
               <span>
                  links
               </span>
           
            </div> */}
   
         </div>
      )
   }
   
}

export default ProjectSingleGroupElement
