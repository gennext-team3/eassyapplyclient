import * as actionType from '../actionType';

export const Login = (data)=>{
    return async dispatch=>{
        dispatch(loginInit())
        try{
            const response = await fetch('',{
                method:'post',
                header:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            });
            const json = response.json();
            if(json.message!=="Success"){
                dispatch(Logout())
            }else{
                const expirationDate = new Date(new Date().getTime() + 60*60*1000)
                const expirationTime = 60*60*1000;
                localStorage.setItem('expirationDate',expirationDate);
                dispatch(checkAuthTimeout(expirationTime));
                dispatch(loginSuccess(json.data))
            }
        }catch(err){dispatch(Logout())}
    }
}

export const Logout = ()=>{
    return  dispatch=>{
        dispatch({
            type:actionType.LOGOUT_INIT
        })
        try{
            localStorage.removeItem("expirationDate");
            dispatch({
                type:actionType.LOGOUT_SUCCESS,
            })
        }catch(err){
            dispatch({
                type:actionType.AUTH_FAIL,
                payload:err
            })
        }
    }
}

export const loginInit = ()=>{
    return {
        type:actionType.AUTH_INIT
    }
}

export const loginSuccess = (data)=>{
    return {
        type:actionType.AUTH_SUCCESS,
        payload:data
    }
}

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(Logout());
        }, expirationTime);
    };
};


export const checkAuthState = ()=>{
    return async dispatch=>{
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(Logout())
        }else{
            const expirationDate = localStorage.getItem('expirationDate');
            if(expirationDate<=new Date()){
                dispatch(Logout());
            }else{
                // const userId = localStorage.getItem('userId');
                const bearer = 'Bearer '+ token;
                dispatch(loginInit())
                const response = await fetch('',{
                    method:'get',
                    headers:{
                        'Authorization':bearer,
                        'Content-Type':'application/json'
                    }
                });
                const json = await response.json();
                if(json.message === "Success"){
                    dispatch(checkAuthTimeout(expirationDate.getTime() - new Date().getTime()));
                    dispatch(loginSuccess(json.data))
                }else{
                    dispatch(Logout())
                }
            }
        }
    }
}