import React, { useEffect } from "react";
import { dataTypeReceiveFromParentDOM } from "../GlobalVars";

// take in the function to manipulate caller's variable
const ReceiveDataFromParent = ({ varUpdateFunction }) => {
  /*** listeners ***/
  // start listening
  useEffect(() => {
    listenFromParent();
  }, []);

  /*** methods ***/
  // function to listen + process data from parent dom
  const listenFromParent = () => {
    console.log("listening data from parent...");
    window.onmessage = (e) => {
      // get message data + metadata
      const messageArray = e.data.split(":");
      if (messageArray.length !== 3) {
        console.log("[ERROR] => Received incorrectly formatted data");
      }

      // get each of the 3 pieces
      let messageFrom, messageType, messageData;
      [messageFrom, messageType, messageData] = messageArray;

      // NOTE: only process received data iff it's from parent
      if (messageFrom === "parent") {
        console.log(
          "====================[MSG from parent site]====================="
        );
        console.log(e.data);
        // KEY: update outside variable using passed in function
        varUpdateFunction(messageType, messageData);
      }
    };
  };

  return <div></div>;
};

export default ReceiveDataFromParent;
