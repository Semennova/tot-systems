import { connect } from "react-redux";
import { setMessagesAC, addMessageAC, deleteMessageAC, updateMessageAC } from "../../redux/work-reducer";
import { WorkChat } from "./WorkChat";
import { useEffect } from 'react';
import data from '../../StaticState/dataForWork.json'
import { Redirect } from "react-router-dom";


const WorkChatAPIContainer = (props) => {

    useEffect(()=> {
        props.setMessages(data)
    },[])

        
    useEffect(()=> {
        let data = JSON.parse(localStorage.getItem('work-messages'));
        if(data){
          props.setMessages(data)
        }
      }, []);

      
    useEffect(()=> {
        localStorage.setItem('work-messages', JSON.stringify(props.messages))
    },[props.messages])

    if(!props.isAuth){
        return <Redirect to='/login' />
    }


    return <WorkChat messages={props.messages}
                     addMessage={props.addMessage}
                     setMessages={props.setMessages}
                     deleteMessage={props.deleteMessage}
                     updateMessage={props.updateMessage}
                     />
}


const mapStateToProps = (state) => ({
    messages: state.work.messages,
    isAuth: state.auth.isAuth
})

export const WorkChatContainer = connect(mapStateToProps, {
    setMessages: setMessagesAC,
    addMessage: addMessageAC,
    deleteMessage: deleteMessageAC,
    updateMessage: updateMessageAC
})(WorkChatAPIContainer)