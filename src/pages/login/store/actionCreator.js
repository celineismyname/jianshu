import axios from 'axios'
import * as constants from './constants'

const changeLogin = ()=>({
    type:constants.CHANGE_LOGIN,
    value:true
})

const changeLogout = ()=>({
    type:constants.CHANGE_LOGOUT,
    value:false
})

export const login = (account ,password) =>{
    return (dispatch)=>{
        console.log('account ,password',account ,password)
        const params = {
            account:account,
            password:password
        }
        axios.get('/api/login.json',{params}).then((res)=>{
            console.log('res',res)
            const result = res.data.data
            if(result){
                dispatch(changeLogin())
            }else{
                alert('登录失败')
            }
        })
    }
}


export const logout = () =>{
    return (dispatch)=>{
        dispatch(changeLogout())
    }
}