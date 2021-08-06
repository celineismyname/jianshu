import * as constants from './constants'
import axios from 'axios'

const changeDetail  = (result)=>({
    type:constants.CHANGE_DETAIL,
    title:result.title,
    content:result.content
})

export const getDetail = (id)=>{
    return (dispatch)=>{
        axios.get('/api/detail.json',{params:{id:id}}).then((res)=>{
            dispatch(changeDetail(res.data.data))
        })
    }
}