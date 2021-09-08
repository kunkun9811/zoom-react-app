/*** variables for Zoom Config in ZoomGlobalVars.js ***/
const DEV_LEAVE_URL = "http://localhost:3001/overlay";
const PROD_LEAVE_URL = "https://www.zoomdemo.aankh.co/overlay";
export const ZOOM_LEAVE_URL =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? DEV_LEAVE_URL
    : PROD_LEAVE_URL;
export const ZOOM_SIGNATURE_ENDPOINT =
  "https://www.zoomdemo.aankh.co/signature";

/*** data types SENDING to parent dom container ***/
export const dataTypeToParentDOM = {
  TYPE_MEETING_NUMBER: 0,
  TYPE_USER_ROLE: 1,
};

Object.freeze(dataTypeToParentDOM);

/*** data types RECEIVED from parent dom container ***/
export const dataTypeReceiveFromParentDOM = {
  TYPE_MEETING_NUMBER: "mn",
  TYPE_MEETING_PASSWORD: "pw",
  TYPE_USER_NAME: "un",
  TYPE_USER_EMAIL: "ue",
};

/* different user roles */
export const userRoleType = {
  STUDENT: 0,
  INSTRUCTOR: 1,
};

Object.freeze(userRoleType);
