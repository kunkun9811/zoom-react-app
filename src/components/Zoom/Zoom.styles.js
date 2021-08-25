import styled from "styled-components";

// TODO:
/* user */
var meetingNumber = "2225825225"; // required
var userName = "Timo"; // required
var userEmail = "test@gmail.com";
var passWord = "QM0zd8"; // MIGHT be required

export const ZoomMainContainer = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
`;

export const ZoomInnerContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ZoomH1Title = styled.h1`
  color: white;
`;

export const ZoomJoinButton = styled.div`
  margin-top: 20px;
  background-color: #2d8cff;
  color: #ffffff;
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
    background-color: #2681f2;
  }
`;
