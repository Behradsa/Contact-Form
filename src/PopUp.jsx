import React from "react";

export default function PopUp() {
  return (
    <div className="popup scale-in-center scale-out-center">
      <div className="popup-sent-container">
        <img src="icon-success-check.svg" alt="icon" />
        <h3>Message Sent!</h3>
      </div>
      <p>Thanks for completing the form. We'll be in touch soon!</p>
    </div>
  );
}
