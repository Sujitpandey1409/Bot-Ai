import React, { useEffect, useRef } from 'react';
import './ChatLayout.css'
const ChatLayout = (props) => {
    const iconRef = useRef(null)
    useEffect(()=>{
        props.query?iconRef.current.className='avatar iconUser':iconRef.current.className='avatar iconAI'
    },[])
    return ( <div className="ChatLayoutWrapper">
        <div ref={iconRef} className="avatar iconUser"></div>
        <div className="messageContainer">
            <div className="headText">{props.query?'you':'Soul AI'}</div>
            <div className="messageText">{props.query?props.query:props.response}</div>
            {props.response&&<div className="timeStamp">{new Date().toLocaleTimeString().slice(0, -6)+' PM'}</div>}
        </div>
    </div> );
}
 
export default ChatLayout;