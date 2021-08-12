import React, { useState } from 'react'
import s from './Login.module.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Redirect } from 'react-router-dom';

export const Login = (props) => {

    const [loginValue, setLoginValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
    
   
    const submitUser = (e) => {
        e.preventDefault()
      const userData = {
          login: loginValue,
          password: passwordValue
      }
     
        props.setUserData(userData);
        props.setIsAuth(true)
        console.log(userData)
        console.log(props.isAuth)
    }

    if(props.isAuth){
        return <Redirect to='/work' />
    }


    
    return (
        <div className={s.loginContainer}>
          
            <form className={s.loginForm} onSubmit={submitUser}>
            <h1>Log in <ExitToAppIcon style={{fontSize: 22}}/></h1>
                
                <input className={s.loginInput} type='text' value={loginValue} onChange={(e)=>setLoginValue(e.target.value)}/>
                <input className={s.loginInput} type='password' value={passwordValue} onChange={(e)=>setPasswordValue(e.target.value)}/>
                <button className={s.submitBtn}>Submit</button>
            </form>
        </div>
    )
}
