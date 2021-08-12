import s from './Header.module.css'
import logo from '../../Img/logo.png'

export const Header = (props) => {

    return (
        <div className={s.headerContainer}>
            <img className={s.logo} src={logo}/>
            <h2>PLANCTONICS</h2>
           {props.isAuth ? <button onClick={()=> props.setIsAuth(false)} className={s.logBtn}>Logout</button> : <button className={s.logBtn} onClick={()=> props.history.push('/login')}>Login</button>}
        </div>
    )
}
