//和用户有关的状态管理
import { createSlice } from "@reduxjs/toolkit";
const userStore = createSlice({
    name: "user",
    initialState: {
        token: ''
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
        }
    }
})

//解构actionCreater
const { setToken } = userStore.reducer
const userReducer = userStore.reducer
export { setToken }
export default userReducer
