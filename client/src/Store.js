import { configureStore } from '@reduxjs/toolkit'
import userReducer from './Stores/User'
import menuReducer from './Stores/Menu'

export default configureStore({
    reducer: {
        user: userReducer,
        menu: menuReducer,
    },
})