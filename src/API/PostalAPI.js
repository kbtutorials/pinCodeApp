import React, { useState, useEffect } from "react";
import DisplayInTabularFormat from "../TableData/DisplayInTabularFormat";

function PostalAPI(props) {
  const [pinResponse, setPinResponse] = useState([]);
  const [passFlag, setPassFlag] = useState(false);
  const pinCode = props.pinCode;

  useEffect(() => {
    getPostalDetails();
  }, [pinCode]);

  async function getPostalDetails() {
    let url = "https://api.postalpincode.in/pincode/" + pinCode;
    console.log(url);
    setPassFlag(false);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        console.log("Error Found");
        throw new Error("Something went wrong pls try");
      }
      const data = await response.json();
      console.log(data);
      setPinResponse(data);
      setPassFlag(true);
    } catch (error) {
      setPassFlag(false);
    }
  }

  return (
    <div>
      {passFlag === true && pinResponse[0].Status === "Success" && (
        <DisplayInTabularFormat response={pinResponse}></DisplayInTabularFormat>
      )}
      {passFlag === true && pinResponse[0].Status !== "Success" && (
        <p>Something went wrong ,pls try again</p>
      )}
      {passFlag === false && <p>Loading...</p>}
    </div>
  );
}
export default PostalAPI;
