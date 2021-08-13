import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { setIsAuth } from '../../redux/login-reducer'
import { Header } from './Header'

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export const HeaderContainer = connect(mapStateToProps, {
    setIsAuth
})(Header)

export default withRouter(HeaderContainer)

 