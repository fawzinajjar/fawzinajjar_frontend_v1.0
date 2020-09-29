import React from "react";
import Button from "../Button";

const Welcome = ({ greeting, text }) => {
  return (
    <div className="container">
      <div className="greeting-container">
        <h4 className="title">{greeting}</h4>
        <h1 className="message">{text}</h1>
      </div>
      <div className="buttons_container">
        <Button text="HIRE ME NOW" color="#F16D3F" />
        <Button text="DOWNLOAD CV" color="#2E3991" />
      </div>

      <style jsx>
        {`
          .container {
            font-family: Averia Serif Libre, Cursive;
            color: white;
            display: flex;
            flex-direction: column;
          }
          .greeting-container {
          }
          .title {
            font-size: 20px;
          }
          .message {
            font-size: 50px;
          }
          .buttons_container {
            display: flex;
          }
          h4 {
            margin-bottom: 0;
          }
          h1 {
            margin-top: 0;
          }
        `}
      </style>
    </div>
  );
};

export default Welcome;
