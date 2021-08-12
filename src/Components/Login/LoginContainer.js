import { connect } from "react-redux"
import { setUserDataAC, setIsAuthAC } from "../../redux/login-reducer"
import { Login } from "./Login"

const mapStateToProps = (state) => ({
    login: state.auth.login,
    password: state.auth.password,
    isAuth: state.auth.isAuth
})

export const LoginContainer = connect(mapStateToProps, {
    setUserData: setUserDataAC,
    setIsAuth: setIsAuthAC
})(Login)

