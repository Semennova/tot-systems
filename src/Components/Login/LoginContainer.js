import { connect } from 'react-redux'
import { setUserData, setIsAuth } from '../../redux/login-reducer'
import { Login } from './Login'
import { useEffect } from 'react'



const LoginApiContainer = (props) => {

    useEffect(()=>{ 
        const data = JSON.parse(localStorage.getItem('user-data'))
        if(data){
            props.setIsAuth(true)
        }
    }, [])

    return <Login   setUserData={props.setUserData} 
                    setIsAuth={props.setIsAuth}
                    isAuth={props.isAuth}
                    login={props.login}
                    password={props.password}

                    />
}

const mapStateToProps = (state) => ({
    login: state.auth.login,
    password: state.auth.password,
    isAuth: state.auth.isAuth
})

export const LoginContainer = connect(mapStateToProps, {
    setUserData,
    setIsAuth
})(LoginApiContainer)

