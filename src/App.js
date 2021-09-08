import React from "react";
import "./App.css";
import Zoom from "./components/Zoom";

// DEBUG:
import ReceiveDataFromParent from "./utils/ReceiveDataFromParent";

function App() {
  return (
    <>
      {/* DEBUG: */}
      <ReceiveDataFromParent />
      {/* CODE */}
      <Zoom />;
    </>
  );
}

export default App;
