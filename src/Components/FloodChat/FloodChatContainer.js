import { connect } from "react-redux"
import { setFloodMessagesAC, addFloodMessageAC, deleteFloodMessageAC, upadateMessageAC } from "../../redux/flood-reducer"
import { FloodChat } from "./FloodChat"
import { useEffect } from 'react'
import  data  from '../../StaticState/dataForFlood.json'
import { Redirect } from "react-router-dom"


const FloodChatApiContainer = (props) => {

    useEffect(()=> {
        props.setFloodMessages(data)
    }, [])
            
    useEffect(()=> {
        let data = JSON.parse(localStorage.getItem('flood-messages'));
        if(data){
            props.setFloodMessages(data)
        }
        console.log('get')
    }, [])

    useEffect(() => {
        localStorage.setItem('flood-messages', JSON.stringify(props.messages));
        console.log('set')
      }, [props.messages]);

    
      if(!props.isAuth){
        return <Redirect to='/login' />
    }
    
    return <FloodChat messages={props.messages}
                      setFloodMessages={props.setFloodMessages}
                      addFloodMessage={props.addFloodMessage}
                      deleteFloodMessage={props.deleteFloodMessage}
                      upadateMessage={props.upadateMessage}
                                                    />
}

const mapStateToProps = (state) => ({
    messages: state.flood.messages,
    isAuth: state.auth.isAuth
})

export const FloodChatContainer = connect(mapStateToProps, {
    setFloodMessages: setFloodMessagesAC,
    addFloodMessage: addFloodMessageAC,
    deleteFloodMessage: deleteFloodMessageAC,
    upadateMessage: upadateMessageAC
})(FloodChatApiContainer)