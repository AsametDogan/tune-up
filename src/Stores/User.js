import { createSlice } from '@reduxjs/toolkit'


export const user = createSlice({
    name: 'user',
    initialState: {
        user: {
            name: "", 
            surname: "",
            username: "",
            email: "",
            birthday: "",
            gender: "",
            createdAt: "",
            isAdmin: "",
            musics: "",
            profilePhoto: "",
            uid: "",

            //avatar: null,
            //company: null,
            //description: null,
            //email: "",
            //firstWeekDay: "monday",
            //id: "123",
            //name: "User-Name",
            //registerDate: "",
            //timeZone: "UTC-8",
            //webpage: null,
        },
        isLogged: true,

    },
    reducers: {
        setUser: (state, action) => { state.user = (action.payload) },
        setLoggedIn: (state) => { state.isLogged = true },
        setLoggedOut: (state) => { state.isLogged = false },
    },

})

export const { setUser, setLoggedIn, setLoggedOut } = user.actions
export default user.reducer