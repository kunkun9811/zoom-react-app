import React, { useEffect } from "react";
import "./App.css";
import Zoom from "./components/Zoom";

function App() {
  /***** KEY: DEBUG: testing iframe and parent communication *****/
  useEffect(() => {
    console.log("HELLO FROM iframe");
    window.top.postMessage("From Iframe!", "*");
  }, []);
  /***** END DEBUG: *****/

  return <Zoom />;
}

export default App;
