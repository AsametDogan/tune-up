import { createSlice } from '@reduxjs/toolkit'


export const user = createSlice({
    name: 'user',
    initialState: {
        user: {
            name: "",
            email: "",
        },
        isLogged: false,

    },
    reducers: {
        login: (state,action) => { 
            state.isLogged = true
            state.user = action.payload
         },
        logout: (state) => {
            state.isLogged = false
        },
    },

})

export const { login, logout } = user.actions
export default user.reducer