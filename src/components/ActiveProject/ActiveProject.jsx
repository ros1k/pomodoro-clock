import React from 'react'
import { connect } from 'react-redux'
import ProjectGroups from '../ProjectGroups/ProjectGroups'

import style from './ActiveProject.module.scss'

const ActiveProject = ({projects,activeProjectID}) => {
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




const listReduxStateToProps = store => ({
   projects: store.projects,
   activeProjectID: store.activeProject
})

const currentActiveProject = connect(listReduxStateToProps)(ActiveProject);

export default currentActiveProject;