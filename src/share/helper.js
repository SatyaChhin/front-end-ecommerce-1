import moment from "moment"

export const isEmptyOrNull = (value) => {
    // eslint-disable-next-line eqeqeq
    return !!((value == "" || value == null || value == undefined))
}

export const getUser = () => {
    var user = localStorage.getItem("user")
    if(!isEmptyOrNull(user)){
        user = JSON.parse(user)
        return user
    }else{
        return null
    }
}

export const getPermission = () => {
    var permission = localStorage.getItem("permission")
    if(!isEmptyOrNull(permission)){
        permission = JSON.parse(permission)
        return permission
    }else{
        return null
    }
}

export const isPersmission = (code_permission) => { // code_permission = category.Delete
    const arrPermission = getPermission();
    if(arrPermission){
        return !!(arrPermission.includes(code_permission)); // no permission
    }else{
       return false // no permission
    }
}

export const getAccessToken = () => {
    var access_token = localStorage.getItem("access_token")
    if(!isEmptyOrNull(access_token)){
        return access_token;
    }else{
        return null
    }
}

export const getRefreshToken = () => {
    var refresh_token = localStorage.getItem("refresh_token")
    if(!isEmptyOrNull(refresh_token)){
        refresh_token = JSON.parse(refresh_token)
        return refresh_token
    }else{
        return null
    }
}


export const formatDateClient = (date) => {
    if(!isEmptyOrNull(date)){
        return moment(date).format("DD/MM/YYYY hh:mm");
    }
    return null
}

export const formatDateServer = (date) => {
    if(!isEmptyOrNull(date)){
        return moment(date).format("YYYY-MM-DD");
    }
    return null
}

export const login = () => {
    localStorage.setItem("login" , "0")
    window.location.href = ('/login')
}