import React, { useState, useEffect } from 'react'
import s from './WorkChat.module.css'
import EditIcon from '@material-ui/icons/Edit'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import BeenhereIcon from '@material-ui/icons/Beenhere'
import SendIcon from '@material-ui/icons/Send'

export const WorkChat = (props) => {
    

    const [messageValue, setMessageValue] = useState('')
    const [edit, setEdit] = useState(null)
    const [editmessageValue, setMessageEditValue] = useState('')
    const [emptyMsgError, setemptyMsgError] = useState(false)


    const submitMessage = () => {
        if(!messageValue){
            setemptyMsgError(true)
            setTimeout(()=>setemptyMsgError(false), 3000)
        } else {
            const newMessage = {
                id: Math.floor(Math.random() * 10000),
                message: messageValue
            }
            props.addMessage(newMessage);
            setMessageValue('')
        }
        
    }

    const removeMsg = (id) => {
        props.deleteMessage(id)
    }

    const goToEditMode = (message) => {
        setEdit(message.id);
        setMessageEditValue(message.message)
    }

    const saveChanges = (id) => {
        const newMessagesArray = props.messages.map(m => {
            if(m.id === id){
                m.message = editmessageValue
            }
            return m
        })
        props.updateMessage(newMessagesArray);
        setEdit(null)
    }



    return (
        <div className={s.workChatContainer}>
            {emptyMsgError && <div className={s.emptyMsgError}>Please, enter your message!</div>}
           <input className={s.workInput} placeholder='Enter work message...' onChange={(e)=> setMessageValue(e.target.value)} value={messageValue}/>
           <button className={`${s.btn} ${s.sendBtn}`} onClick={()=>submitMessage()}><SendIcon style={{fontSize: 20}}/></button>
           <div>
                {props.messages.map(m => (
                    <div key={m.id} className={s.messages}>
                        {edit !== m.id ? <div>
                            <span className={s.message}>{m.message}</span>

                            <button className={`${s.btn} ${s.editBtn}`} onClick={()=> goToEditMode(m)}><EditIcon style={{fontSize: 15}}/></button>

                            <button className={`${s.btn} ${s.deleteBtn}`} onClick={()=> removeMsg(m.id)}><DeleteOutlineIcon style={{fontSize: 15}}/></button>
                            
                        </div>
                        :
                        <form>
                            <input className={s.editInput} value={editmessageValue} onChange={(e)=> setMessageEditValue(e.target.value)}/>
                            <button className={`${s.btn} ${s.saveBtn}`} onClick={()=> saveChanges(m.id)}><BeenhereIcon style={{fontSize: 15}}/></button>
                        </form>
                    }
                        
               </div>
                ))} 
           </div>
        </div>
    )
}
