import s from './Header.module.css'
import logo from '../../Img/logo.png'

export const Header = (props) => {

    const logout = (e)=> {
        e.preventDefault()
        props.setIsAuth(false)
    }

    return (

        <div className={s.headerContainer}>

                <img alt='logo' className={s.logo} src={logo}/>
                <h2>PLANCTONICS</h2>
          
           {props.isAuth ? <button onClick={logout} className={s.logBtn}>Logout</button> : <button className={s.logBtn} onClick={()=> props.history.push('/login')}>Login</button>}
        </div>
    )
}
