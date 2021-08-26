import { connect } from "react-redux"
import { setFloodMessages, addFloodMessage, deleteFloodMessage, upadateFloodMessage } from "../../redux/flood-reducer"
import { useEffect } from 'react'
import  data  from '../../StaticState/dataForFlood.json'
import { compose } from "redux"
import { withAuthRedirect } from "../../Hoc/withRedirectToLogin"
import { FloodChat } from "./FloodChat"



const FloodChatApiContainer = (props) => {

    useEffect(()=> {
        props.setFloodMessages(data)
    }, [])
            
    useEffect(()=> {
        let data = JSON.parse(localStorage.getItem('flood-messages'));
        if(data){
            props.setFloodMessages(data)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('flood-messages', JSON.stringify(props.messages));
      }, [props.messages]);
    
    return <FloodChat messages={props.messages}
                      setFloodMessages={props.setFloodMessages}
                      addFloodMessage={props.addFloodMessage}
                      deleteFloodMessage={props.deleteFloodMessage}
                      upadateFloodMessage={props.upadateFloodMessage}
                                                    />

        
}

const mapStateToProps = (state) => ({
    messages: state.flood.messages,
    isAuth: state.auth.isAuth
})



export default compose(connect(mapStateToProps, {
    setFloodMessages,
    addFloodMessage,
    deleteFloodMessage,
    upadateFloodMessage
}), withAuthRedirect)(FloodChatApiContainer)