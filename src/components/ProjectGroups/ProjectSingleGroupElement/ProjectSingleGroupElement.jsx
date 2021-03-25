
import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { changeTaskStatus, deleteTask } from '../../../store/actions/tasksActions.js'
import style from './ProjectSingleGroupElement.module.scss'

const ProjectSingleGroupElement = ({id,parentID,taskColor,taskTitle,important,finished,isChecked}) => {
   const tasks = useSelector(store => store.tasks)
   const groups = useSelector(store => store.groups)
   const dispatch = useDispatch();

   const handleCheckboxChange = (event) => {
      if(event.target.checked){
         console.log(id);
         const changeStatus = {
            id:id,
            parentID: groups[1].id,
            finished: event.target.checked
         }
         dispatch(changeTaskStatus(changeStatus))

      }else{
         const changeStatus = {
            id:id,
            parentID: groups[0].id,
            finished: event.target.checked
         }
         dispatch(changeTaskStatus(changeStatus))
      }
      
   }
   
   const handleDeleteItem = () =>{
      dispatch(deleteTask(id))
   }

   if(finished){
      return (
         <div className={style.projectSingleElement}>
            <div className={style.topWrapper}>
               <span className={style.levelBar} style={important?{backgroundColor:'red'}:{backgroundColor:'limegreen'}}></span>
               <span className={style.fakeCheckboxChecked}>
                  {isChecked
                  ?<input onChange={handleCheckboxChange} type="checkbox" checked /> 
                  :<input onChange={handleCheckboxChange} type="checkbox"/> 
                  }
               
               </span>
               <h3>{taskTitle}</h3>
               <button onClick={handleDeleteItem}> usuń </button>

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
               <span className={style.levelBar} style={important?{backgroundColor:'red'}:{backgroundColor:'limegreen'}}></span>
               <span className={style.fakeCheckbox}>
               {isChecked
                  ?<input onChange={handleCheckboxChange} type="checkbox" checked /> 
                  :<input onChange={handleCheckboxChange} type="checkbox"/> 
                  }
               </span>
               <h3>{taskTitle}</h3>
               <button onClick={handleDeleteItem}> usuń </button>
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
