/* TODO: Board */
// Meeting Language

import React, { useState } from "react";
import { ZoomMainContainer, ZoomInnerContainer, ZoomContentContainer, ZoomH1Title, ZoomH3Title, ZoomInputForm, ZoomeTextFieldBox, ZoomTextField, ZoomJoinButton } from "./Zoom.styles";
import { zoomConfig } from "./zoomGlobalVars";

declare var ZoomMtg;

ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.7/lib", "/av");

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load("en-US");
ZoomMtg.i18n.reload("en-US");

const Zoom = () => {
  /* states */
  const [meetingNumber, setMeetingNumber] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // load zoom support language  ['de-DE', 'es-ES', 'en-US', 'fr-FR', 'jp-JP', 'pt-PT','ru-RU', 'zh-CN', 'zh-TW', 'ko-KO', 'it-IT', 'vi-VN']
  const [meetingLang, setMeetingLang] = useState(""); // TODO: allow change language

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
      })
      .catch((error) => {
        console.error(error);
      });
  };

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

  const updateInputVal = (event) => {
    const curInputVal = event.target.value;
    console.log(curInputVal);
    switch (event.target.id) {
      case "mn-input":
        setMeetingNumber(curInputVal);
        console.log("in [mn-input]");
        break;
      case "pw-input":
        setPassword(curInputVal);
        console.log("in [pw-input]");
        break;
      case "name-input":
        setName(curInputVal);
        console.log("in [name-input]");
        break;
      case "email-input":
        setEmail(curInputVal);
        console.log("in [email-input]");
        break;
    }
  };

  const onJoinBtnClicked = () => {
    getSignature();
  };

  return (
    <ZoomMainContainer id="zoom-main-container">
      {/* <Script url="https://webgazer.cs.brown.edu/webgazer.js" onLoad={handleScriptLoad} onError={handleScriptError} /> */}
      <ZoomInnerContainer>
        <ZoomContentContainer>
          <ZoomH1Title>Welcome to Aankh Zoom Analytics</ZoomH1Title>
          <ZoomH3Title>Please fill out the following meeting information and your desired name and email</ZoomH3Title>

          <ZoomInputForm>
            <ZoomeTextFieldBox>
              <ZoomTextField id="mn-input" placeholder="meeting number" onChange={updateInputVal} />
            </ZoomeTextFieldBox>
            <ZoomeTextFieldBox>
              <ZoomTextField id="pw-input" placeholder="meeting password" onChange={updateInputVal} />
            </ZoomeTextFieldBox>
            <ZoomeTextFieldBox>
              <ZoomTextField id="name-input" placeholder="your name" onChange={updateInputVal} />
            </ZoomeTextFieldBox>
            <ZoomeTextFieldBox>
              <ZoomTextField id="email-input" placeholder="your email" onChange={updateInputVal} />
            </ZoomeTextFieldBox>
            {/* <ZoomJoinButton onClick={getSignature}>Join Meeting</ZoomJoinButton> */}
            <ZoomJoinButton onClick={onJoinBtnClicked}>Join Meeting</ZoomJoinButton>
          </ZoomInputForm>
        </ZoomContentContainer>
      </ZoomInnerContainer>
    </ZoomMainContainer>
  );
};

export default Zoom;
