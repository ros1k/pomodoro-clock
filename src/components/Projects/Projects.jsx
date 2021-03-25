import React, { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addProject } from '../../store/actions/projectsActions'
import { activeProject } from '../../store/actions/activeProjectActions'
import AvailableProjects from './AvailableProjects/AvailableProjects'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEdit } from '@fortawesome/free-solid-svg-icons'

import style from './Projects.module.scss'

const Projects = () => {
   const [add,setAdd] = useState(false);
   const [inputName,setInputName] = useState();
   const dispatch = useDispatch();
   const projects = useSelector(store => store.projects)
   const activeProjectID = useSelector(store => store.activeProject)
   const handleChangeListView = ( newId ) =>{
      const setNewActiveProject = {
         id: newId
      }
      dispatch(activeProject(setNewActiveProject))
   }
   
   const projectList = projects.map((project,i)=>{
     
      const isActive = () =>{
         if((activeProjectID.id === 0) && (i === 0)) {
            dispatch(activeProject({id:project.id}))
            return true
         }
         if(activeProjectID.id === project.id){
           
            return true
         }
         return false
      }
      if(i === 0){
         return <AvailableProjects 
         key={project.id} 
         {...project} 
         handleChangeListView={event => handleChangeListView(event.currentTarget.id)} 
         isActive={isActive()} />
      }
     
      
    
   })
   
   const handleInputChange = (event) =>{
      setInputName(event.target.value)
   }

   const handleOnClick = (event) =>{
      event.preventDefault();

      setAdd(prev => !prev);
   }
  
   const handleSubmit = (event) =>{
      event.preventDefault();

      if(!inputName.length){
         return;
      }

      const newProject = {
         projectName : inputName
      }
      
      dispatch(addProject(newProject))
     
      
   }

   return (
      <div className={style.projects}>
         <ul className={style['projects-list']}>
            {projectList}
         </ul>
         <form id="new-project" onSubmit={handleSubmit}>
            {add && <input type="text" onChange={handleInputChange}/>}
            {add && <button type="submit" form="new-project">Dodaj</button>}
            {/* <button onClick={handleOnClick} >{add?"Anuluj":"Dodaj nowy projekt"}</button> */}
         </form>
      </div>
      
   )
}




export default Projects;
