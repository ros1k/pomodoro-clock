import React from 'react'
import ProjectSingleGroup from './ProjectSingleGroup/ProjectSingleGroup'
import {useSelector} from 'react-redux'
//import style from './TaskGroups.module.scss'
import style from './ProjectGroups.module.scss'


const TaskGroups = () => {
   const lists = useSelector(state=>state.groups)

   const renderLists = lists.map((e,v) => {
      console.log(e.parentId);
      return <ProjectSingleGroup key={e.id} title={e.groupTitle} id={e.id}/>
   })
   return (
  
        <div className={style.groupList}>
           {renderLists}
            
        </div>

   )
}

export default TaskGroups
