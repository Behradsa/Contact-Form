import React, { useState } from "react";

function Form() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [eamil, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [confirm, setConfirm] = useState(false);

  let handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <main>
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label htmlFor="firstname">
            First Name<span>*</span>
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            required
          />
          <span id="firstnameError"></span>
        </div>

        <div className="input-container">
          <label htmlFor="lastname">
            Last Name <span>*</span>
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            required
          />
          <span id="lastnameError"></span>
        </div>

        <div className="input-container">
          <label htmlFor="email">
            Email Address <span>*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={eamil}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <span id="emailError"></span>
        </div>

        <div className="input-container">
          <label>
            Query Type <span>*</span>
          </label>
          <div className="checkbox-1-container">
            <input
              type="radio"
              id="checkbox-1"
              value="General Enquiry"
              name="checkbox"
              onChange={(e) => setQuery(e.target.value)}
              required
            />
            <label htmlFor="checkbox-1">General Enquiry</label>
          </div>
          <div className="checkbox-2-container">
            <input
              type="radio"
              id="checkbox-2"
              value="Support Request"
              name="checkbox"
              onChange={(e) => setQuery(e.target.value)}
              required
            />
            <label htmlFor="checkbox-2">Support Request</label>
          </div>
          <span id="queryError"></span>
        </div>

        <div className="input-container">
          <label htmlFor="message">
            Message<span>*</span>
          </label>
          <textarea
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
          <span id="messageError"></span>
        </div>

        <div className="confirm-checkbox-container">
          <input
            type="checkbox"
            id="confirm"
            name="confirm"
            checked={confirm}
            onChange={() => setConfirm(!confirm)}
          />
          <label htmlFor="confirm">
            I consent to being contacted by the team <span>*</span>
          </label>
        </div>

        <button type="submit">Submit</button>
      </form>
    </main>
  );
}

export default Form;
