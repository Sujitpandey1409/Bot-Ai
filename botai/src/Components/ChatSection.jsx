import React from "react";
import "./ChatSection.css";
const ChatSection = () => {
  return (
    <div className="ChatSectionWrapper">
      <div className="titleText">Bot Ai</div>
      <div className="greetingLogoWrapper">
        <div className="greeting">How Can I Help You Today?</div>
        <div className="botLogo"></div>
      </div>
      <div className="starterQuery">
        <div className="query">
          <div className="queryTitle">Hi, what is the weather</div>
          <div className="queryDefination">
            Get immediate AI generated response
          </div>
        </div>
        <div className="query">
          <div className="queryTitle">Hi, what is the weather</div>
          <div className="queryDefination">
            Get immediate AI generated response
          </div>
        </div>
        <div className="query">
          <div className="queryTitle">Hi, what is the weather</div>
          <div className="queryDefination">
            Get immediate AI generated response
          </div>
        </div>
        <div className="query">
          <div className="queryTitle">Hi, what is the weather</div>
          <div className="queryDefination">
            Get immediate AI generated response
          </div>
        </div>
      </div>
      <div className="inputAskSave">
        <div className="inputBox"></div>
        <button className="buttonContainer">Ask</button>
        <button className="buttonContainer">Save</button>
      </div>
    </div>
  );
};

export default ChatSection;
