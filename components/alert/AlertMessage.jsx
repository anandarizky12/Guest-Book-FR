import React from 'react'
import ErrorMessage from './ErrorMessage'
import SuccessMessage from './SuccessMessage'

function AlertMessage({ message, success, show , setShowAlert }) {

    return (
        <div className={`${!show ? 'hidden' : "static"} `}>
            {
                success 
                ? 
                <SuccessMessage setShowAlert={setShowAlert} message={message}/>
                :
                <ErrorMessage setShowAlert={setShowAlert} message={message}/>
            }
        </div>
    )
}

export default AlertMessage
