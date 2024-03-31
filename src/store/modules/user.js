//和用户有关的状态管理
import { createSlice } from "@reduxjs/toolkit";
import { removeToken, request } from "@/utils";
import { setToken as _setToken, getToken } from "@/utils";
const userStore = createSlice({
    name: "user",
    initialState: {
        //token: localStorage.getItem('token_key') || ''
        token: getToken() || '',
        userInfo: {}
    },
    reducers: {
        setToken(state, action) {
            state.token = action.payload
            //localStorage.setItem('token_key', action.payload)
            _setToken(action.payload)
        },
        setUserInfo(state, action) {
            state.userInfo = action.payload
        },
        clearUserInfo(state, action) {
            state.token = ''
            state.userInfo = action.payload
            removeToken()
        }

    }
})

//解构actionCreater
const { setToken, setUserInfo, clearUserInfo } = userStore.actions
const userReducer = userStore.reducer

const fetchLogin = (loginForm) => {
    return async (dispatch) => {
        const res = await request.post('/authorizations', loginForm)

        dispatch(setToken(res.data.token))
    }
}
//获取个人信息异步方法
const fetchUserInfo = () => {
    return async (dispatch) => {
        const res = await request.get('/user/profile')
        dispatch(setUserInfo(res.data))
    }
}
export { fetchLogin, setToken, fetchUserInfo, clearUserInfo }
export default userReducer
