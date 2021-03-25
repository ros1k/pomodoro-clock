import React,{ useState } from 'react'
import {  useSelector,useDispatch } from 'react-redux'
import ProjectGroups from '../ProjectGroups/ProjectGroups'
import { addProjectGroup } from '../../store/actions/projectGroupsActions'
import style from './ActiveProject.module.scss'


const ActiveProject = () => {
   const projects = useSelector(state => state.projects)
   const activeProjectID = useSelector(state => state.activeProject)
   const [addNewGroup, setAddNewGroup] = useState(false)
   const [inputValue, setInputValue] = useState()
   const dispatch = useDispatch();
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
   const handleAddNewGroup = () =>{
  
      setAddNewGroup(prev => !prev)
      setInputValue()
   }
   const handleCancelNewList = (e) =>{
      e.preventDefault();
      setAddNewGroup(prev => !prev)
      setInputValue()
   }
   const handleSubmitNewList = (e) =>{
      e.preventDefault();
  

      const newList = {
         groupTitle: inputValue,
         isAllowToDelete: true
      }
      dispatch(addProjectGroup(newList))
   
   }
   return (
      <div className={style.renderActiveProject}>
         <h2>{getTitle()}</h2>
         <div> 
            <button onClick={handleAddNewGroup}>create</button>
            {addNewGroup && 
               <form id="add-new-group" onSubmit={handleSubmitNewList}  >
                  <input type="text" name="addNewGroup" placeholder="List name..." onChange={e => setInputValue(e.target.value)} value={inputValue}/>
                  <button type="submit" form="add-new-group">confirm</button>
                  <button onClick={(event) => handleCancelNewList(event)}>cancel</button>
               </form>}
         </div>
         <div className="projectGroups">
            <ProjectGroups/>
         </div>
      </div>
   )
}




export default ActiveProject;