/* zoom configurations */
export const zoomConfig = {
  // setup your signature endpoint here: https://github.com/zoom/websdk-sample-signature-node.js
  signatureEndpoint: "http://localhost:4000/",
  apiKey: "PqT9I5o7Q--GqvZXDOMl9w",
  role: 0, // TODO: this might be dynamic in the future
  leaveUrl: "http://localhost:3000", // use the proxied address in the server

  // pass in the registrant's token if your meeting or webinar requires registration. More info here:
  // Meetings: https://marketplace.zoom.us/docs/sdk/native-sdks/web/build/meetings/join#join-registered
  // Webinars: https://marketplace.zoom.us/docs/sdk/native-sdks/web/build/webinars/join#join-registered-webinar
  registrantToken: "",
};
