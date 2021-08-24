import React, { useState } from 'react'
import s from './FloodChat.module.css'
import EditIcon from '@material-ui/icons/Edit'
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline'
import BeenhereIcon from '@material-ui/icons/Beenhere'
import SendIcon from '@material-ui/icons/Send'
import { goToEditMode, removeMsg, saveChanges, submitMessage } from '../../Hoc/MessageHoc'

export const FloodChat = (props) => {
    const [messageValue, setMessageValue] = useState('')
    const [edit, setEdit] = useState(null)
    const [editMessageValue, setEditMessageValue] = useState('')
    const [emptyMsgError, setEmptyMsgError] = useState(false)


    return (
        <div className={s.floodchatContainer}>
             {emptyMsgError && <div className={s.emptyMsgError}>Please, enter your message!</div>}
             <input className={s.floodInput} placeholder='Enter flood message...' value={messageValue} onChange={(e)=>setMessageValue(e.target.value) }/>
            <button className={`${s.btn} ${s.sendBtn}`} onClick={()=>submitMessage(props.addFloodMessage, messageValue, setEmptyMsgError, setMessageValue)}><SendIcon style={{fontSize: 20}}/></button>
            
            {props.messages.map(m=> (
                <div key={m.id} className={s.messages}>
                    {edit !== m.id ? <div>
                        <span className={s.message}>{m.message}</span>
                        
                        <button className={`${s.btn} ${s.editBtn}`} onClick={()=> goToEditMode(setEdit, m.id, setEditMessageValue, m.message)}><EditIcon style={{fontSize: 15}}/></button>

                        <button className={`${s.btn} ${s.deleteBtn}`} onClick={()=>removeMsg(props.deleteFloodMessage, m.id)}><DeleteOutlineIcon style={{fontSize: 15}}/></button>
                    </div>
                    :
                    <form>
                        <input className={s.editInput} value={editMessageValue} onChange={(e)=> setEditMessageValue(e.target.value)}/>
                        <button className={`${s.btn} ${s.saveBtn}`} onClick={()=> saveChanges(props.messages, props.upadateFloodMessage, setEdit, editMessageValue, m.id)}><BeenhereIcon style={{fontSize: 20}}/></button>
                    </form>
                }
                    
                </div>
            ))}
        </div>
    )
}

