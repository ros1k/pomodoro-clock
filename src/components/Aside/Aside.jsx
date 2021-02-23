import React from 'react'
import Navigation from '../Navigation/Navigation'
import style from './Aside.module.scss'

const Aside = () => {
   return (
      <aside className={style.aside}>
         <div className={style.titleWrapper}>
            <h1 className={style.title}>To Do App</h1>
         </div>
         <Navigation/>
      </aside>
   )
}

export default Aside
