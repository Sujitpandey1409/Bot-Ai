import React, { useRef, useState } from "react";
import "./ChatSection.css";
import ChatLayout from "./ChatLayout";
import data from "../Assets/data";

const ChatSection = () => {
  const [currentChat, setCurrentChat] = useState([])
  const [inputData, setInputData] = useState()
  const inputRef = useRef(null)
  const handleAsk = ()=>{
    if(inputData){
      let botReply = 'As an AI Language Model, I don’t have the details'
      for(let i of data){
        if (i.question.toLowerCase() === inputData.toLowerCase() || i.question.toLowerCase().includes(inputData.toLowerCase())){
            botReply = i.response
        }
      }
      setCurrentChat([...currentChat,{'question':inputData,'response':botReply,'liked':true,'dislike':false,'rating':5}])
      inputRef.current.value=''
    }
  }
  return (
    <div className="ChatSectionWrapper">
      <div className="titleText">Bot Ai</div>
      {!currentChat.length?<><div className="greetingLogoWrapper">
        <div className="greeting">How Can I Help You Today?</div>
        <div className="botLogo"></div>
      </div>
      <div className="starterQuery">
        <div className="query" onClick={()=>{setInputData('Hi, what is the weather');handleAsk()}}>
          <div className="queryTitle">Hi, what is the weather</div>
          <div className="queryDefination">
            Get immediate AI generated response
          </div>
        </div>
        <div className="query" onClick={()=>{setInputData('Hi, what is the weather');handleAsk()}}>
          <div className="queryTitle">Hi, what is the weather</div>
          <div className="queryDefination">
            Get immediate AI generated response
          </div>
        </div>
        <div className="query" onClick={()=>{setInputData('Hi, what is the weather');handleAsk()}}>
          <div className="queryTitle">Hi, what is the weather</div>
          <div className="queryDefination">
            Get immediate AI generated response
          </div>
        </div>
        <div className="query" onClick={()=>{setInputData('Hi, what is the weather');handleAsk()}}>
          <div className="queryTitle" >Hi, what is the weather</div>
          <div className="queryDefination">
            Get immediate AI generated response
          </div>
        </div>
      </div></>:
      <div className="convoContainer">
      <ChatLayout query={currentChat[currentChat.length-1].question} />
      <ChatLayout response={currentChat[currentChat.length-1].response} />
      </div>
      }
      <div className="inputAskSave">
        <input ref={inputRef} className="inputBox" onChange={(e)=>setInputData(e.target.value)}/>
        <button className="buttonContainer" onClick={handleAsk} >Ask</button>
        <button className="buttonContainer">Save</button>
      </div>
    </div>
  );
};

export default ChatSection;
