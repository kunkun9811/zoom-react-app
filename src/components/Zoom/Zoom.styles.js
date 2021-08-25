import styled from "styled-components";

// TODO:
/* user */
var meetingNumber = "2225825225"; // required
var userName = "Timo"; // required
var userEmail = "test@gmail.com";
var passWord = "QM0zd8"; // MIGHT be required
var language = "en-US"; // good to have

export const ZoomMainContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
`;

export const ZoomInnerContainer = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ZoomContentContainer = styled.div`
  height: 100%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  // TODO: need mediaQuery or min-height / min-width

  background-color: orange;
`;

export const ZoomH1Title = styled.h1`
  color: white;
`;

export const ZoomH3Title = styled.h3`
  color: white;
`;

export const ZoomJoinButton = styled.div`
  margin-top: 20px;
  color: #ffffff;
  background: linear-gradient(to bottom right, #7cc3f1, #b050d2);
  text-decoration: none;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
  display: inline-block;
  border-radius: 10px;
  cursor: pointer;
  border: none;
  outline: none;

  &:hover {
    // TODO: do some cool linear-gradient custom animation
    background: linear-gradient(to bottom right, #b050d2, #7cc3f1);
  }
`;
