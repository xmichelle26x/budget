import React from 'react'

const Message = ({ children, typee }) => {
    return (
        <div className={`alerta ${typee}`}>
            {children}
        </div>
    )
}

export default Message