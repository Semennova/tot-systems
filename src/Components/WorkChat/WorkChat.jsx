import React, { useState } from 'react'
import s from './WorkChat.module.css'
import EditIcon from '@material-ui/icons/Edit'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import BeenhereIcon from '@material-ui/icons/Beenhere'
import SendIcon from '@material-ui/icons/Send'
import { goToEditMode, removeMsg, saveChanges, submitMessage } from '../../Hoc/MessageHoc'

export const WorkChat = (props) => {

    const [messageValue, setMessageValue] = useState('')
    const [edit, setEdit] = useState(null)
    const [editMessageValue, setMessageEditValue] = useState('')
    const [emptyMsgError, setEmptyMsgError] = useState(false)


    return (
        <div className={s.workChatContainer}>
            {emptyMsgError && <div className={s.emptyMsgError}>Please, enter your message!</div>}
           <input className={s.workInput} placeholder='Enter work message...' onChange={(e)=> setMessageValue(e.target.value)} value={messageValue}/>
           <button className={`${s.btn} ${s.sendBtn}`} onClick={()=>submitMessage(props.addWorkMessage, messageValue, setEmptyMsgError, setMessageValue)}><SendIcon style={{fontSize: 20}}/></button>
           <div>
               
                {props.messages.map(m => (
                    <div key={m.id} className={s.messages}>
                        {edit !== m.id ? <div>
                            <span className={s.message}>{m.message}</span>

                            <button className={`${s.btn} ${s.editBtn}`} onClick={()=> goToEditMode(setEdit, m.id, setMessageEditValue, m.message)}><EditIcon style={{fontSize: 15}}/></button>

                            <button className={`${s.btn} ${s.deleteBtn}`} onClick={()=> removeMsg(props.deleteWorkMessage, m.id)}><DeleteOutlineIcon style={{fontSize: 15}}/></button>
                            
                        </div>
                        :
                        <form>
                            <input className={s.editInput} value={editMessageValue} onChange={(e)=> setMessageEditValue(e.target.value)}/>
                            <button className={`${s.btn} ${s.saveBtn}`} onClick={()=> saveChanges(props.messages, props.updateWorkMessage, setEdit, editMessageValue, m.id)}><BeenhereIcon style={{fontSize: 15}}/></button>
                        </form>
                    }
                        
               </div>
                ))} 
           </div>
        </div>
    )
}
