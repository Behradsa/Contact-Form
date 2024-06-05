import React from "react";

function FormInput(props) {
  const { name, type, title, errorMessage, onChange, error } = props;
  if (type == "text" || type == "email") {
    return (
      <div className="formInput">
        <label htmlFor={name} className="title">
          {title} <span id="star">*</span>
        </label>
        <input name={name} id={name} type={type} onChange={onChange} />
        <span className="error" hidden={!error}>
          {errorMessage}
        </span>
      </div>
    );
  }
  if (type == "query") {
    return (
      <div className="formInput">
        <label className="title">
          {title} <span id="star">*</span>
        </label>
        <div className="radio-container">
          <input
            name={name}
            id="q-1"
            type="radio"
            onChange={onChange}
            value={"General Enquiry"}
          />
          <label htmlFor="q-1">General Enquiry</label>
        </div>
        <div className="radio-container">
          <input
            name={name}
            id="q-2"
            type="radio"
            onChange={onChange}
            value={"Support Request"}
          />
          <label htmlFor="q-2">Support Request</label>
        </div>

        <span className="error" hidden={!error}>
          {errorMessage}
        </span>
      </div>
    );
  }
  if (type == "message") {
    return (
      <div className="formInput">
        <label htmlFor={name} className="title">
          {title} <span id="star">*</span>
        </label>
        <textarea name={name} id={name} onChange={onChange} />
        <span className="error" hidden={!error}>
          {errorMessage}
        </span>
      </div>
    );
  }
  if (type == "checkbox") {
    return (
      <div className="formInput">
        <div id="confirm-container">
          <input name={name} id={name} type={type} onChange={onChange} />
          <label htmlFor={name}>
            {title} <span id="star">*</span>
          </label>
        </div>

        <span className="error" hidden={!error}>
          {errorMessage}
        </span>
      </div>
    );
  }
}
export default FormInput;
