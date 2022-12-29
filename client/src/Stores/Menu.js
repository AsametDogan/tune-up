import { createSlice } from '@reduxjs/toolkit'


export const menu = createSlice({
    name: 'menu',
    initialState: {
        menu: "home"

    },
    reducers: {
        setMenu: (state, action) => { state.menu = (action.payload) },
    },

})

export const { setMenu } = menu.actions
export default menu.reducer