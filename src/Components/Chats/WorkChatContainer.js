import { connect } from "react-redux";
import { setWorkMessages, addWorkMessage, deleteWorkMessage, updateWorkMessage } from "../../redux/work-reducer";
import { WorkChat } from "./WorkChat";
import { useEffect } from 'react';
import data from '../../StaticState/dataForWork.json'
import { withAuthRedirect } from "../../Hoc/withRedirectToLogin";
import { compose } from "redux";
import { setUserData } from "../../redux/login-reducer";


const WorkChatAPIContainer = (props) => {

    useEffect(()=> {
        props.setWorkMessages(data)
    },[])

        
    useEffect(()=> {
        let data = JSON.parse(localStorage.getItem('work-messages'));
        if(data){
          props.setWorkMessages(data)
        }
      }, []);

      
    useEffect(()=> {
        localStorage.setItem('work-messages', JSON.stringify(props.messages))
    },[props.messages])


    return <WorkChat messages={props.messages}
                     addWorkMessage={props.addWorkMessage}
                     deleteWorkMessage={props.deleteWorkMessage}
                     updateWorkMessage={props.updateWorkMessage}
                     setWorkMessages={props.setWorkMessages}
                     login={props.login}
                     setUserData={props.setUserData}                     
                     />
}


const mapStateToProps = (state) => ({
    messages: state.work.messages,
    isAuth: state.auth.isAuth,
    login: state.auth.login,

})

export default compose(connect(mapStateToProps, {
    setWorkMessages,
    addWorkMessage,
    deleteWorkMessage,
    updateWorkMessage,
    setUserData
}), withAuthRedirect)(WorkChatAPIContainer)