import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addList,editList,deleteList } from '../../store/actions/listActions'



import style from './ToDoList.module.scss'

const ToDoList = ({lists,addList,editList,deleteList}) => {
   const [add,setAdd] = useState(false);
   const [inputName,setInputName] = useState();




   const AvailableLists = lists.map(list=>{
      return <li className={style.listElement} key={list.id} list-Id={list.id}>{list.listName}</li>
   })

   const handleInputChange = (event) =>{
      setInputName(event.target.value)
   }

   const handleOnClick = (event) =>{
      event.preventDefault();
      console.log("handleOnClick");
      setAdd(prev => !prev);
   }
  
   const handleSubmit = (event) =>{
      event.preventDefault();
      console.log(event.target);
      if(!inputName.length){
         return;
      }

      const newList = {
         listName : inputName
      }
      
      addList(newList)

      
   }
   
   return (
      <div className={style.toDoList}>
         <ul className={style.lists}>
            {AvailableLists}
         </ul>
         <form onSubmit={handleSubmit}>
            {add && <input type="text" onChange={handleInputChange}/>}
            {add && <button type="submit">Dodaj</button>}
            <button onClick={handleOnClick} >{add?"Anuluj":"Dodaj nową listę"}</button>
            
         </form>
        
      </div>
      
   )
}

const listActionsToProps = ({
   addList,
   editList,
   deleteList
})

const listReduxStateToProps = store => ({
   lists: store.list
})

const ConsumerToDoList = connect(listReduxStateToProps, listActionsToProps)(ToDoList)

export default ConsumerToDoList;
