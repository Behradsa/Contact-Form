import FormInput from "./FormInput";
import PopUp from "./PopUp";
import React, { useState, useEffect } from "react";
function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    query: "",
    message: "",
    confirm: "",
  });
  const [errors, setErrors] = useState({
    firstname: false,
    lastname: false,
    email: false,
    query: false,
    message: false,
    confirm: false,
  });

  const [showPopUp, setShowPopUp] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, [showPopUp]);
  let inputs = [
    {
      name: "firstname",
      type: "text",
      title: "First Name",
      errorMessage: "This field is required",
      pattern: "^.+$",
    },
    {
      name: "lastname",
      type: "text",
      title: "Last Name",
      errorMessage: "This field is required",
      pattern: "^.+$",
    },
    {
      name: "email",
      type: "email",
      title: "Email Address",
      errorMessage: "Please enter a valid email address",
      pattern: "[a-z0-9]+@[a-z]+\\.[a-z]{2,3}",
    },
    {
      name: "query",
      type: "query",
      title: "Query Type",
      errorMessage: "Please select a query type",
    },
    {
      name: "message",
      type: "message",
      title: "Message",
      errorMessage: "This field is required",
      pattern: "^.+$",
    },
    {
      name: "confirm",
      type: "checkbox",
      title: "I consent to being contacted by the team",
      errorMessage: "To submit this form, please consent to being contacted",
    },
  ];
  const handleChange = (e) => {
    if (e.target.name != "confirm") {
      setValues((v) => ({ ...v, [e.target.name]: e.target.value }));
    } else {
      setValues((v) => ({ ...v, [e.target.name]: e.target.checked }));
    }

    errors[e.target.name] = false;
  };
  const checkErrors = (formValues) => {
    let number_of_errors = 0;
    for (const i in inputs) {
      if (inputs[i].pattern) {
        const regex = new RegExp(inputs[i].pattern);
        if (
          formValues[inputs[i].name] == 0 ||
          !regex.test(formValues[inputs[i].name])
        ) {
          setErrors((e) => ({ ...e, [inputs[i].name]: true }));
          number_of_errors++;
        } else {
          setErrors((e) => ({ ...e, [inputs[i].name]: false }));
        }
      }
    }
    if (formValues["query"] == "") {
      setErrors((e) => ({ ...e, ["query"]: true }));
      number_of_errors++;
    } else {
      setErrors((e) => ({ ...e, ["query"]: false }));
    }
    if (!formValues["confirm"]) {
      setErrors((e) => ({ ...e, ["confirm"]: true }));
      number_of_errors++;
    } else {
      setErrors((e) => ({ ...e, ["confirm"]: false }));
    }
    return number_of_errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let formValues = values;

    for (let [key, value] of formData.entries()) {
      formValues[key] = value;
    }
    let number_of_errors = checkErrors(formValues);
    console.log(number_of_errors);
    setShowPopUp(false);
    if (number_of_errors == 0) {
      setShowPopUp(true);
    }
  };

  return (
    <>
      {showPopUp ? <PopUp /> : null}
      <main>
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit} noValidate>
          {inputs.map((input) => (
            <FormInput
              key={input.name}
              {...input}
              value={values[input.name]}
              onChange={handleChange}
              error={errors[input.name]}
            />
          ))}

          <button type="submit">Submit</button>
        </form>
      </main>
    </>
  );
}

export default App;
