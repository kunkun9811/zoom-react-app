// TODO: use MuiStyles to change styles of the TextField

import React from "react";
import { ZoomMainContainer, ZoomInnerContainer, ZoomContentContainer, ZoomH1Title, ZoomH3Title, ZoomJoinButton } from "./Zoom.styles";
import { TextField } from "@material-ui/core";

declare var ZoomMtg;

ZoomMtg.setZoomJSLib("https://source.zoom.us/1.9.7/lib", "/av");

ZoomMtg.preLoadWasm();
ZoomMtg.prepareWebSDK();
// loads language files, also passes any error messages to the ui
ZoomMtg.i18n.load("en-US");
ZoomMtg.i18n.reload("en-US");

const Zoom = () => {
  // setup your signature endpoint here: https://github.com/zoom/websdk-sample-signature-node.js
  var signatureEndpoint = "http://localhost:4000/";
  var apiKey = "PqT9I5o7Q--GqvZXDOMl9w";
  // var meetingNumber = "95191237891"; // tejas
  var meetingNumber = "2225825225"; // timo
  var role = 0;
  var leaveUrl = "http://localhost:3000"; // use the proxied address in the server
  var userName = "Timo";
  var userEmail = "test@gmail.com";
  var passWord = "QM0zd8";
  // pass in the registrant's token if your meeting or webinar requires registration. More info here:
  // Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/build/meetings/join#join-registered
  // Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/build/webinars/join#join-registered-webinar
  var registrantToken = "";

  function getSignature(e) {
    e.preventDefault();

    fetch(signatureEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        meetingNumber: meetingNumber,
        role: role,
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
  }

  function startMeeting(signature) {
    document.getElementById("zmmtg-root").style.display = "block";

    ZoomMtg.init({
      leaveUrl: leaveUrl,
      success: (success) => {
        console.log(success);

        ZoomMtg.join({
          signature: signature,
          meetingNumber: meetingNumber,
          userName: userName,
          apiKey: apiKey,
          userEmail: userEmail,
          passWord: passWord,
          tk: registrantToken,
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
  }

  return (
    <ZoomMainContainer id="zoom-main-container">
      {/* <Script url="https://webgazer.cs.brown.edu/webgazer.js" onLoad={handleScriptLoad} onError={handleScriptError} /> */}
      <ZoomInnerContainer>
        <ZoomContentContainer>
          <ZoomH1Title>Welcome to Aankh Zoom Analytics</ZoomH1Title>
          <ZoomH3Title>Please fill out the following meeting information and your desired name and email</ZoomH3Title>
          <TextField id="outlined-basic" label="meeting number" variant="outlined" />
          <TextField id="outlined-basic" label="meeting password" variant="outlined" />
          <TextField id="outlined-basic" label="your name" variant="outlined" />
          <TextField id="outlined-basic" label="your email" variant="outlined" />
          <ZoomJoinButton onClick={getSignature}>Join Meeting</ZoomJoinButton>
        </ZoomContentContainer>
      </ZoomInnerContainer>
    </ZoomMainContainer>
  );
};

export default Zoom;
