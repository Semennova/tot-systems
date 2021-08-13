import React, { useState } from 'react'
import s from './Login.module.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Redirect } from 'react-router-dom'

export const Login = (props) => {
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [passwordError, setPassWordError] = useState(false)

    const errorStyle = {
        border: 'red 2px solid'
    }
    
   const validLogin = new RegExp(
       '^[A-Za-z]{4,6}$'
   )

    const submitUser = (e) => {
        e.preventDefault()
        if(!validLogin.test(loginValue)){
            setLoginError(true)
            setTimeout(()=> setLoginError(false), 3000)
        } else if (!passwordValue) {
            setPassWordError(true)
            setTimeout(()=> setPassWordError(false), 3000)
        } else{
            const userData = {
                login: loginValue,
                password: passwordValue
            }
     
            props.setUserData(userData);
            props.setIsAuth(true);
        }
    }

    if(props.isAuth){
        return <Redirect to='/work' />
    }

    return (
        <div className={s.loginContainer}>
          
            <form className={s.loginForm} onSubmit={submitUser}>
            <h1>Log in <ExitToAppIcon style={{fontSize: 22}}/></h1>
                
                <input placeholder='Enter login' className={s.loginInput} type='text' style={loginError ? errorStyle : null} value={loginValue} onChange={(e)=>setLoginValue(e.target.value)}/>
                <input placeholder='Enter password' className={s.loginInput} type='password' style={passwordError ? errorStyle : null} value={passwordValue} onChange={(e)=>setPasswordValue(e.target.value)}/>
                
                {loginError && <div className={s.loginError}>Login must be between 4 and 6 letters</div>}
                {passwordError && <div className={s.loginError}>Please, enter your password</div>}
                
                <button className={s.submitBtn}>Submit</button>
            </form>
        </div>
    )
}
