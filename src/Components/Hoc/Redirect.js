import { connect } from "react-redux";
import { Redirect } from 'react-router-dom';
import React from 'react'

let mapStateToPropsForRedirect = (state) => ({
    isAuth: state.auth.isAuth
})

export const ComponentWithRedirect = (Component) => {
    class RedirectComponent extends React.Component{
        render() {
            if(!this.props.isAuth){
                return <Redirect to='/login' />
            }
            return <Component {...this.props} />
        }
    }
    let ConnectedAuthRedirComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)
    return ConnectedAuthRedirComponent
}