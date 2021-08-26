import s from './Header.module.css'
import logo from '../../Img/logo.png'
import { useEffect } from 'react'

export const Header = (props) => {

    const logout = ()=> {
        // e.preventDefault();
        props.setIsAuth(false)
        localStorage.setItem('user-data', null)
    }



    return (

        <div className={s.headerContainer}>
                <img alt='logo' className={s.logo} src={logo}/>
                <h2>PLANCTONICS</h2>
                {props.isAuth ? <button onClick={logout} className={s.logBtn}>Logout</button> : <button className={s.logBtn} onClick={()=> props.history.push('/login')}>Login</button>}
           
        </div>
    )
}

// <button className={s.logBtn} onClick={props.isAuth ? ()=>logout() : ()=> {props.history.push('/login')}}>{props.isAuth ? 'Logout' : 'Login'}</button>