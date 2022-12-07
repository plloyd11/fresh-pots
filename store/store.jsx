import { createContext, useReducer } from 'react'

export const StoreContext = createContext({})

export const ACTION_TYPES = {
  SET_LOCATION: 'SET_LOCATION',
  SET_COFFEE_STORES: 'SET_COFFEE_STORES',
}

const storeReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_LOCATION:
      return {
        ...state,
        location: action.payload.location,
      }
    case ACTION_TYPES.SET_COFFEE_STORES:
      return {
        ...state,
        coffeeStores: action.payload.coffeeStores,
      }
    default:
      throw new Error(`Invalid action type ${action.type}`)
  }
}

const StoreProvider = ({ children }) => {
  const initialState = {
    location: '',
    coffeeStores: [],
  }
  const [state, dispatch] = useReducer(storeReducer, initialState)
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
