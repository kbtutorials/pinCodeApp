import React, { useState } from "react";
import "./PinForm.css";
import PostalAPI from "../API/PostalAPI";

function PinForm() {
  const [pinData, setPinData] = useState("");
  const [passFlag, setPassFlag] = useState(false);

  function getPinCode(event) {
    setPinData(event.target.value);
    setPassFlag(false);
  }

  function passPinCode() {
    console.log("passing to API" + pinData);
    setPassFlag(true);
  }
  function resetPinCode() {
    setPinData("");
    setPassFlag(false);
  }
  return (
    <div>
      <label>PinCode</label>
      <input
        type="text"
        placeholder="Enter Pin Code"
        onChange={getPinCode}
        value={pinData}
      />
      <button onClick={passPinCode}>Submit</button>
      <button onClick={resetPinCode}> Re-set</button>
      {passFlag === true && <PostalAPI pinCode={pinData}></PostalAPI>}
    </div>
  );
}

export default PinForm;
