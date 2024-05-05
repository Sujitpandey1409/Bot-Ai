import React from "react";
import './ChattApp.css'
import ChatSection from "./ChatSection";
import LeftSection from "./LeftSection";
const ChattApp = () => {
  return (
    <div className="ChattApp">
      <LeftSection />
      <ChatSection />
    </div>
  );
};

export default ChattApp;
