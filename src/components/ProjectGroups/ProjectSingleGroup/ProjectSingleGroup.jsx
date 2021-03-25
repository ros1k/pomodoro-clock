import React, {useState} from 'react'
import { useSelector,useDispatch } from 'react-redux'
import ProjectSingleGroupElement from '../ProjectSingleGroupElement/ProjectSingleGroupElement'
import { addTask } from '../../../store/actions/tasksActions.js'
import style from './ProjectSingleGroup.module.scss'
import Modal from 'react-modal';


const ProjectSingleGroup = ({title,id}) => {
   const [addNewFormStatus,setAddNewFormStatus] = useState(false);
   const [modalIsOpen,setIsModalOpen] = useState(false);
   const [newItemTitle,setNewItemTitle] = useState()
   const [importantStatus,setImportantStatus] = useState(false)


   const tasks = useSelector(state=>state.tasks)
   const taskGroups = useSelector(state=>state.groups)
   const dispatch = useDispatch();

   const openModal = () => {
      setIsModalOpen(true);
      console.log(modalIsOpen);
    }
   
    const afterOpenModal = () => {
      // references are now sync'd and can be accessed.
    
    }
   
    const closeModal = () => {
      setIsModalOpen(false);
      console.log(modalIsOpen);
    }


   const currentTasks = tasks.map((element,i) =>{
     
      element.finished? element.parentID = taskGroups[1].id : element.parentID = taskGroups[0].id;
    
      if(element.parentID === taskGroups[0].id && id === taskGroups[0].id) {
         return <ProjectSingleGroupElement key={element.id} {...element} isChecked={false} />

      }

      if(element.parentID === taskGroups[1].id && id === taskGroups[1].id){
         return <ProjectSingleGroupElement key={element.id} {...element} isChecked={true}/>
      }
      
   })
   const handleNewItemTitle = (event) =>{ 
      setNewItemTitle(event.target.value)
      console.log(newItemTitle);
   }
   const handleImportantStatus = (event) =>{
      setImportantStatus(prev=>!prev)
      console.log(importantStatus);
   }
   const handleAddNewItem = (event) => {
      dispatch(addTask({
         parentID: taskGroups[0].id,
         taskTitle: newItemTitle,
         important: importantStatus,
      }))
   }

   const customStyles = {
      content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
      }
    };
   return (
      <div className={style.projectGroup}>
         <h2>{title}</h2>
         {currentTasks} 
         
         
          <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          ariaHideApp={false}
          contentLabel='addNewTaskItemModal'
        >
 
          {/* <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2> */}
            
          
          <form className={style.modalForm}>
            <p>Task title: <input type='text' onChange={handleNewItemTitle}/></p>
            <p className={style.isImportant}>Is task important ? 
               {!importantStatus &&
                  <span className={style.fakeCheckbox }> <input onChange={handleImportantStatus} type="checkbox"/></span>
               }
               {importantStatus &&
                  <span className={style.fakeCheckboxChecked}> <input onChange={handleImportantStatus} type="checkbox"/></span>
               }
               
               </p>

            <button onClick={handleAddNewItem}>add</button>
            <button onClick={closeModal}>cancel</button>
           
          </form>
        </Modal>
   
         
         {id === taskGroups[0].id ? <button onClick={openModal}>+ Add New Task</button> : null}
      </div>
   )
}

export default ProjectSingleGroup
