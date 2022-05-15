import React from 'react'

function MessageInput() {
    return (
        <div className="MessagesInput">
            <div className="MessagesInput__title">
                <div>Message</div>
            </div>
            <div className="MessagesInput__input">
                <div className="MessagesInput__input_border">
                    <input className="MessagesInput__input_box"></input>
                </div>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default MessageInput