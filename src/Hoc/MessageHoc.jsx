export const submitMessage = (reduxFunction, messageValue, setEmptyMsgError, setMessageValue) => {
    if(!messageValue) {
        setEmptyMsgError(true);
        setTimeout(()=> setEmptyMsgError(false), 3000)
    } else {
        const newMessage = {
            id: Math.floor(Math.random() * 10000),
            message: messageValue
        }
        reduxFunction(newMessage);
        setMessageValue('')
    }
 
}


export const removeMsg = (reduxFunction, messageId) => {
    reduxFunction(messageId)
}


export const goToEditMode = (setEdit, messageId, setEditMessageValue, message) => {
    setEdit(messageId);
    setEditMessageValue(message)
}

export const saveChanges = (messagesArray, upadateFloodMessage, setEdit, editMessageValue, messageId) => {
    const newMessagesArray = messagesArray.map(m=> {
        if(m.id === messageId){
            m.message = editMessageValue
        }
        return m
    })
    upadateFloodMessage(newMessagesArray)
    setEdit(null)
}

