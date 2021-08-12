import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setIsAuthAC } from '../../redux/login-reducer'
import { Login } from '../Login/Login'
import { Header } from './Header'

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const HeaderContainer = connect(mapStateToProps, {
    setIsAuth: setIsAuthAC
})(Header)

export default withRouter(HeaderContainer)

 