import { combineReducers } from 'redux'
import add from './add'

const shoppingCart = combineReducers({
    add,
})

  
export default function root(state, action) {
    return shoppingCart(state, action)
}
  