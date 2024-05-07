import React, { useEffect, useRef, useState } from "react";
import "./ChatSection.css";
import ChatLayout from "./ChatLayout";
import data from "../Assets/data";

const ChatSection = () => {
  const [currentChat, setCurrentChat] = useState([])
  const [inputData, setInputData] = useState()
  const inputRef = useRef(null)
  const chatContainerRef = useRef(null);
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
  // Function to scroll to the bottom of the chat container
  const scrollToBottom = () => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  };

  // Scroll to bottom on initial render and whenever messages change
  useEffect(() => {
    scrollToBottom();
  }, [currentChat]);
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
        <div className="query" onClick={()=>{setInputData('Hi, what is my location');handleAsk()}}>
          <div className="queryTitle">Hi, what is my location</div>
          <div className="queryDefination">
            Get immediate AI generated response
          </div>
        </div>
        <div className="query" onClick={()=>{setInputData('Hi, what is the temperature');handleAsk()}}>
          <div className="queryTitle">Hi, what is the temperature</div>
          <div className="queryDefination">
            Get immediate AI generated response
          </div>
        </div>
        <div className="query" onClick={()=>{setInputData('Hi, how are you');handleAsk()}}>
          <div className="queryTitle" >Hi, how are you</div>
          <div className="queryDefination">
            Get immediate AI generated response
          </div>
        </div>
      </div></>:
      <div ref={chatContainerRef} className="convoContainer">
        {currentChat.map((el)=>{
        return<>  
          <ChatLayout query={el.question} />
          <ChatLayout response={el.response} />
        </>
        })}
      {/* <ChatLayout query={currentChat[currentChat.length-1].question} />
      <ChatLayout response={currentChat[currentChat.length-1].response} /> */}
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
