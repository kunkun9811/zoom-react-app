/* TODO: Board */
// Meeting Language

import React, { useState, useEffect } from "react";
import { zoomConfig } from "./zoomGlobalVars";
import {
  dataTypeToParentDOM,
  dataTypeReceiveFromParentDOM,
  userRoleType,
} from "../../GlobalVars";

// utils
import { sendDataToParent } from "../../utils/sendDataToParent";
import ReceiveDataFromParent from "../../utils/ReceiveDataFromParent";

declare var ZoomMtg;

ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.7/lib", "/av");

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK(); // NOTE: this insert necessary scripts and elements including <div id="zmmtg-root">
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load("en-US");
ZoomMtg.i18n.reload("en-US");

const Zoom = () => {
  /*** states ***/
  const [meetingNumber, setMeetingNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState(0); // 0 = student, 1 = host/instructor

  // load zoom support language  ['de-DE', 'es-ES', 'en-US', 'fr-FR', 'jp-JP', 'pt-PT','ru-RU', 'zh-CN', 'zh-TW', 'ko-KO', 'it-IT', 'vi-VN']
  // const [meetingLang, setMeetingLang] = useState(""); // TODO: allow change language

  /*** methods ***/
  // KEY: get signature to launch zoom meeting on success
  const getSignature = () => {
    fetch(zoomConfig.signatureEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        meetingNumber: meetingNumber,
        role: zoomConfig.role,
      }),
    })
      .then((res) => res.json())
      .then((response) => {
        // KEY: start meeting
        startMeeting(response.signature);
        // TODO: to be deleted KEY: send meeting number to parent site or container
        // sendDataToParent(
        //   meetingNumber,
        //   dataTypeToParentDOM.TYPE_MEETING_NUMBER
        // );
        // KEY: send user selected role to parent site or container
        // sendDataToParent(userRole, dataTypeToParentDOM.TYPE_USER_ROLE);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // KEY: signal zoom library to start meeting
  const startMeeting = (signature) => {
    document.getElementById("zmmtg-root").style.display = "block";

    ZoomMtg.init({
      leaveUrl: zoomConfig.leaveUrl,
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          signature: signature,
          meetingNumber: meetingNumber,
          userName: name,
          apiKey: zoomConfig.apiKey,
          userEmail: email,
          passWord: password,
          tk: zoomConfig.registrantToken,
          success: (success) => {
            console.log(success);
          },
          error: (error) => {
            console.log(error);
          },
        });
      },
      error: (error) => {
        console.log(error);
      },
    });
  };

  // NOTE: function used to update state variable in current component
  const updateInputFields = (messageType, data) => {
    switch (messageType) {
      case dataTypeReceiveFromParentDOM.TYPE_MEETING_NUMBER:
        console.log("=====[MEETING NUMBER RECEIVED]");
        console.log(`meeting number = ${data}`);
        setMeetingNumber(data);
        break;
      case dataTypeReceiveFromParentDOM.TYPE_MEETING_PASSWORD:
        console.log("=====[MEETING PASSWORD RECEIVED]");
        console.log(`meeting password = ${data}`);
        setPassword(data);
        break;
      case dataTypeReceiveFromParentDOM.TYPE_USER_NAME:
        console.log("=====[USER NAME RECEIVED]");
        console.log(`user name = ${data}`);
        setName(data);
        break;
      case dataTypeReceiveFromParentDOM.TYPE_USER_EMAIL:
        console.log("=====[USER EMAIL RECEIVED]");
        console.log(`user email = ${data}`);
        setEmail(data);
        break;
      default:
        console.log(
          "-----[UNRELATED DATA RECEIVED, did not set any variables]"
        );
    }
  };

  // check if all necessary inputs are received
  const checkReceivedAllUserInputs = () => {
    const receivedMeetingNumber = meetingNumber.length > 0 ? true : false;
    // const receivedpassword = password.length > 0 ? true : false;
    const receivedUserName = name.length > 0 ? true : false;
    // const receivedUserEmail = email.length > 0 ? true : false;

    if (
      receivedMeetingNumber && // check if received all necessary input
      // receivedpassword &&
      receivedUserName
      // receivedUserEmail
    ) {
      return true;
    }
    return false;
  };

  /*** listeners ***/
  useEffect(() => {
    if (checkReceivedAllUserInputs()) {
      getSignature();
    }
  }, [meetingNumber, password, name, email]);

  return (
    <div>
      <h1>Hello from Iframe</h1>
      <ReceiveDataFromParent varUpdateFunction={updateInputFields} />
    </div>
  );
};

export default Zoom;
