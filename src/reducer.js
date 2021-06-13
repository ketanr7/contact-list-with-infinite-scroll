import { combineReducers } from 'redux'

import contactListReducer from './components/ContactListSlice'

const rootReducer = combineReducers({
  // Define a top-level state field named `todos`, handled by `todosReducer`
  contacts: contactListReducer,
})

export default rootReducer