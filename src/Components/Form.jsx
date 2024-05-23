import React, { useState, forwardRef } from "react";

const Form = forwardRef(({ onFocus, onBlur }, ref) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");
  const [assist, setAssist] = useState("");

  return (
    <form className="form-container" ref={ref}>
      <p style={{ color: "#ff7f50" }}>
        Let us know what you like, and we will get back to you in a couple of
        business days.
      </p>
      <label className="form-item">
        Your Name
        <input
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setName(value);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </label>

      <label className="form-item">
        Phone Number
        <input
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setPhone(value);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </label>

      <label className="form-item">
        Email
        <input
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setEmail(value);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </label>

      <label className="form-item">
        Event Address
        <input
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setAddress(value);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </label>

      <label className="form-item">
        Event Date
        <input
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setDate(value);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </label>

      <label className="form-item">
        Event Time
        <input
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setTime(value);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </label>

      <label className="form-item">
        Your Budget
        <input
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setBudget(value);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </label>
      <label className="form-item">
        More Event Details
        <input
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setDetails(value);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </label>
      <label className="form-item">
        How Can We Assist?
        <input
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setAssist(value);
          }}
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </label>

      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          // Perform form submission logic here
          console.log({
            name,
            phone,
            email,
            address,
            date,
            time,
            budget,
            details,
            assist,
          });
        }}
      >
        Submit
      </button>
    </form>
  );
});

Form.displayName = "Form";

export default Form;
