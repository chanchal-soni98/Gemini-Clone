import React, { useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import run from "../../config/gemini";
const Main = () => {
  const [prompt, setPrompt] = useState("");
  const [isRun, setIsrun] = useState(false);
  const [res, setRes] = useState("");
  const sentResponse = async () => {
    const data = await run(prompt);
    setRes(data);
    setIsrun(true);
  };
  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {isRun ? null : (
          <div className="greet">
            <p>
              <span>Hello, Chanchal</span>
            </p>
            <p>How can I help you</p>
          </div>
        )}

        {isRun ? null : (
          <div className="cards">
            <div className="card">
              <p>Suggest beautiful places to see on an upcoming road trip</p>
              <img src={assets.compass_icon} />
            </div>
            <div className="card">
              <p>Briefly summarize the concept: urban planning</p>
              <img src={assets.bulb_icon} />
            </div>
            <div className="card">
              <p>Brainstorm team bonding activities for our work retreat</p>
              <img src={assets.message_icon} />
            </div>
            <div className="card">
              <p>Improve the readability of the following code</p>
              <img src={assets.code_icon} />
            </div>
          </div>
        )}
        {isRun ? <div className="question">{prompt}</div> : null}
        {isRun ? <div className="response">{res}</div> : null}
        <div className="main-bottom">
          <div className="search-box">
            <input
              type="text"
              placeholder="Enter a prompt here ..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              <img src={assets.send_icon} onClick={sentResponse} alt="" />
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses. Your privacy and Gemini Apps
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
