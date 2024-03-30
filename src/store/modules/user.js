//和用户有关的状态管理
import { createSlice } from "@reduxjs/toolkit";
import { request } from "@/utils";
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

const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await request.post('/authorizations', loginForm)

        dispatch(setToken(res.data.data))
    }
}
export { fetchLogin, setToken }
export default userReducer
