import axios from "axios";
export const config = {
    base_server : "http://localhost:8000/"
} 
export const request = (url,method,param) => {
    return axios({
        url : config.base_server + url ,
        method : method,
        data : param
    }).then(res => {
        return res.data
    }).catch(err => {
        console.error(err)
    })
}