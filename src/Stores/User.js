import { createSlice } from '@reduxjs/toolkit'


export const user = createSlice({
    name: 'user',
    initialState: {
        user: {
            avatar: null,
            company: null,
            description: null,
            email: "",
            firstWeekDay: "monday",
            id: "",
            language: "tr",
            name: "name",
            registerDate: "",
            timeZone: "UTC-8",
            webpage: null,
        },
        isLogged: false,

    },
    reducers: {
        setUser: (state, action) => { state.user = (action.payload) },
        setLoggedIn: (state) => { state.isLogged = true },
        setLoggedOut: (state) => { state.isLogged = false },
    },

})

export const { setUser, setLoggedIn, setLoggedOut } = user.actions
export default user.reducer