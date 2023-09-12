import axios from "axios";
import { getAccessToken, login } from "./helper";
import { message } from "antd";

export const config = {
    base_server : "http://localhost:8000/",
    image_path : "",
    version : 1
}
export const request = (url,method,param) => {
    const access_token = getAccessToken();
    return axios({
        url : config.base_server + url,
        method : method,
        data : param,
        headers : {
            Authorization  : "Bearer " + access_token
        }
    }).then(res=>{
        return res.data;
    }).catch(err=>{
        var status = err.response?.status
        // eslint-disable-next-line eqeqeq
        if(status == 404){
            message.error("Route Not Found!")
        // eslint-disable-next-line eqeqeq
        }else if (status == 401){
            login()
        // eslint-disable-next-line eqeqeq
        }else if (status == 500){
            message.error("Internal error server!")
        }else{
            message.error(err.message)
        }
        return false
    }).finally(final=>{
        console.log("final",final)
    })
}