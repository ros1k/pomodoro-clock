import { combineReducers } from 'redux'
import { projectsReducer } from './projectsReducer'
import { projectGroupsReducer } from './projectGroupsReducer'
import { activeProjectReducer } from './activeProjectReducer'
import { tasksReducer } from './tasksReducer'


export const rootReducer = combineReducers({
   projects: projectsReducer,
   activeProject: activeProjectReducer,
   groups: projectGroupsReducer,
   tasks: tasksReducer,
})