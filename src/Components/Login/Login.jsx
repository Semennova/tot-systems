import React, { useState, useEffect } from 'react'
import s from './Login.module.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import { Redirect } from 'react-router-dom'

export const Login = (props) => {
    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    const [loginError, setLoginError] = useState(false);
    const [passwordError, setPassWordError] = useState(false);
    const [error, setError] = useState('')

    const errorStyle = {
        border: 'red 2px solid'
    }
    
   const validLogin = new RegExp(
       '^[A-Za-z]{1,10}$'
   )

    const submitUser = (e) => {
    e.preventDefault()
            if(!validLogin.test(loginValue)){
                setLoginError(true)
                setTimeout(()=> setLoginError(false), 3000)
            } else if (!passwordValue) {
                setPassWordError(true)
                setTimeout(()=> setPassWordError(false), 3000)
            } else {
                props.setUserData(loginValue, passwordValue, true);   
            }
        localStorage.setItem('user-data', JSON.stringify({loginValue, passwordValue}))
    }

    if(props.isAuth){
        
        return <Redirect to='/work' />
    }

    return (
        <div className={s.loginContainer}>
          
            <form className={s.loginForm}>
            <h1>Log in <ExitToAppIcon style={{fontSize: 22}}/></h1>
         
                
                <input placeholder='Enter login' className={s.loginInput} type='text' style={loginError ? errorStyle : null} value={loginValue} onChange={(e)=>setLoginValue(e.target.value)}/>
                
                <input placeholder='Enter password' className={s.loginInput} type='password' style={passwordError ? errorStyle : null} value={passwordValue} onChange={(e)=>setPasswordValue(e.target.value)}/>
                
                {loginError && <div className={s.loginError}>Login must be between 1 and 10 latin letters</div>}
                {passwordError && <div className={s.loginError}>Please, enter your password</div>}
                
                <button onClick={submitUser} className={s.submitBtn}>Submit</button>
            </form>
        </div>
    )
}
