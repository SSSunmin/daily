import {Get, Post} from "../axios.ts";
import {setAccessToken} from "../util/common.ts";

interface SignInData{
    "loginId":string,
    "password": string
}

interface SignUpData extends SignInData{
    "nickName": string
    "name": string
}


export const signup = async (data:SignUpData) => {
    const res = await Post('/auth/signup',data);
    console.log(res);
}

export const login = async (data:SignInData)=>{
    const res = await Post<{data:{accessToken:string, refreshToken:string, userPid:string}},SignInData>('/auth/login',data);
    setAccessToken(res.data.accessToken,'at')
    setAccessToken(res.data.refreshToken,'rt')
}

export const logout = async ()=>{
    const res =await Get('/auth/logout');
    console.log(res);
}