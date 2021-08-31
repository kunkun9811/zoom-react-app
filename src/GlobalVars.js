/*** variables for Zoom Config in ZoomGlobalVars.js ***/
const DEV_LEAVE_URL = "https://localhost:3001";
const PROD_LEAVE_URL = "https://www.zoomdemo.aankh.co/overlay";
export const ZOOM_LEAVE_URL = !process.env.NODE_ENV || process.env.NODE_ENV === "development" ? DEV_LEAVE_URL : PROD_LEAVE_URL;
export const ZOOM_SIGNATURE_ENDPOINT = "https://www.zoomdemo.aankh.co/signature";

/*** data types sending to parent dom container ***/
export const dataTypeToParentDOM = {
  TYPE_MEETING_NUMBER: 0,
  TYPE_USER_ROLE: 1,
};

Object.freeze(dataTypeToParentDOM);

/* different user roles */
export const userRoleType = {
  STUDENT: 0,
  INSTRUCTOR: 1,
};

Object.freeze(userRoleType);
