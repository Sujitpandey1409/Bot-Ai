import React from 'react';
import './LeftSection.css'
const LeftSection = () => {
    return ( 
        <div className="leftSectionWrapper">
            <div className="leftSection">
                <div className="newChat">
                    <div className="iconContainer"></div>
                    <div className="textHeader">New Chat</div>
                    <div className="editButtonNewChat"></div>
                </div>
                <button className="pastConvoBtn">Past Conversations</button>
            </div>
        </div>
     );
}
 
export default LeftSection;