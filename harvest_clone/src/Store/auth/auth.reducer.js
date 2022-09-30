import { AUTH_SIGNIN_ERROR, AUTH_SIGNIN_LOADING, AUTH_SIGNIN_SUCCESS, AUTH_SIGNOUT, AUTH_SIGNUP_ERROR, AUTH_SIGNUP_LOADING, AUTH_SIGNUP_SUCCESS } from "./auth.types";


let token = localStorage.getItem("token") || "" ;
const initState = {
    token:token,
    loading:false,
    error:false,
}

export const authReducer = (state=initState,{type,payload})=>{
    switch(type){
        case AUTH_SIGNUP_LOADING:{
            return{
                ...state,
                loading:true,
            }
        }
        case AUTH_SIGNUP_ERROR:{
            return{
                ...state,
                loading:false,
                error:true,
            }
        }
        case AUTH_SIGNUP_SUCCESS:{
            localStorage.setItem("token",payload.token);
            return{
                ...state,
                loading:false,
                error:false,
                token:payload.token,
            }
        }

        case AUTH_SIGNIN_LOADING:{
            return{
                ...state,
                loading:true,
            }
        }
        case AUTH_SIGNIN_ERROR:{
            return{
                ...state,
                loading:false,
                error:true,
            }
        }
        case AUTH_SIGNIN_SUCCESS:{
            localStorage.setItem("token",payload.token);
            return{
                ...state,
                loading:false,
                error:false,
                token:payload.token,
            }
        }
            case AUTH_SIGNOUT:{
                localStorage.removeItem("token");
                return{
                    ...state,
                    loading:false,
                    error:false,
                    token:"",
                }
        }
        default:{
            return state
        }
    }

}