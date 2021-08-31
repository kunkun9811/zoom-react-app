import { dataTypeToParentDOM } from "../GlobalVars";

/** NOTE: communication function with parent dom container for the current document - used for iframe => parent communication **/
export const sendDataToParent = (data, type) => {
  console.log("[iframe] => Sending data to parent container");
  const from = "iframe";
  let type_code;

  switch (type) {
    case dataTypeToParentDOM.TYPE_MEETING_NUMBER:
      type_code = "mn";
      break;
    case dataTypeToParentDOM.TYPE_USER_ROLE:
      type_code = "USER_ROLE";
      break;
    default:
      type_code = "NONE";
      break;
  }

  // don't send msg if did not specify type
  if (type_code === "NONE") return;

  // TODO: need to not to "*" and specify the targetted source
  window.top.postMessage(`${from}:${type_code}:${data}`, "*");
};
