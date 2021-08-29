/** NOTE: communication function with parent dom container for the current document - used for iframe => parent communication **/
export const sendDataToParent = (meetingNumber) => {
  console.log("[iframe] => Sending data to parent container");
  // TODO: need to not to "*" and specify the targetted source
  window.top.postMessage(`iframe:mn:${meetingNumber}`, "*");
};
