import React from 'react'
import ToDoList from '../ToDoList/ToDoList'
import style from './Navigation.module.scss'

const Navigation = () => {
   return (
      <div className={style.navigation}>
         <h2 className={style.navigationTitle}>All Lists:</h2>
         <ToDoList />
      </div>
   )
}

export default Navigation
