import React from 'react'
import ProjectSingleGroup from './ProjectSingleGroup/ProjectSingleGroup'
import {useSelector} from 'react-redux'
//import style from './TaskGroups.module.scss'

const TaskGroups = () => {
   const lists = useSelector(state=>state.groups)

   const renderLists = lists.map((e,v) => {
      return    <ProjectSingleGroup key={e.id} title={e.groupTitle} id={e.id}/>
   })
   return (
      <>
       project groups
        <div className='groups-wrapper'>
           {renderLists}
        </div>
      
      </>
   )
}

export default TaskGroups
