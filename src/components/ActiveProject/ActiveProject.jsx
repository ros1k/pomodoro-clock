import React from 'react'
import {  useSelector } from 'react-redux'
import ProjectGroups from '../ProjectGroups/ProjectGroups'

import style from './ActiveProject.module.scss'

const ActiveProject = () => {
   const projects = useSelector(state => state.projects)
   const activeProjectID = useSelector(state => state.activeProject)

   const getTitle = () =>{
      if(activeProjectID.id !== 0){
         return projects.map(project => {
            if(project.id === activeProjectID.id){
               return project.projectName
            }
         })
      }else{
         return projects[0].projectName
      }
   }  
   return (
      <div className={style.renderActiveProject}>
         <h2>{getTitle()}</h2>
         <div> <button>create</button></div>
         <div className="projectGroups">
            <ProjectGroups/>
         </div>
      </div>
   )
}




export default ActiveProject;