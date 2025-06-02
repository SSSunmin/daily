export const getToken = ()=>{
    return window.localStorage.getItem('at')
}

export const getRefreshToken=()=>{
    return window.localStorage.getItem('rt')
}

export const setAccessToken = (token:string, key:string) => {
    window.localStorage.setItem(key, token);
}

export const clearToken = () => {
    window.localStorage.removeItem('at');
    window.localStorage.removeItem('rt');
}

