import React from 'react'
import Projects from '../Projects/Projects'
import style from './Navigation.module.scss'

const Navigation = () => {
   return (
      <div className={style.navigation}>
         <h2 className={style.navigationTitle}>Projects:</h2>
      <Projects/>
      </div>
   )
}

export default Navigation
