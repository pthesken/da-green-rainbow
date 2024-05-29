import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "emailjs-com";
const {
  VITE_EMAILJS_SERVICE_ID,
  VITE_EMAILJS_TEMPLATE_ID,
  VITE_EMAILJS_PUBLIC_KEY,
} = import.meta.env;

const Form = forwardRef((props, ref) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [date, setDate] = useState(null);
  const [time, setTime] = useState("");
  const [budget, setBudget] = useState("");
  const [details, setDetails] = useState("");
  const [assist, setAssist] = useState("");

  const handleOnSubmit = async (e) => {
    e.preventDefault();

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

    try {
      const result = await emailjs.sendForm(
        VITE_EMAILJS_SERVICE_ID,
        VITE_EMAILJS_TEMPLATE_ID,
        e.target,
        VITE_EMAILJS_PUBLIC_KEY
      );
      alert("Message Sent Successfully");
    } catch (error) {
      console.log(error.text);
      alert("Something went wrong!");
    }

    e.target.reset();
  };
  return (
    <form className="form-container" ref={ref} onSubmit={handleOnSubmit}>
      <p style={{ color: "#ff7f50" }}>
        Let us know what you like, and we will get back to you in a couple of
        business days.
      </p>
      <label className="form-item">
        Your Name
        <input
          name="from_name"
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setName(value);
          }}
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
        />
      </label>

      <label className="form-item">
        Event Address
        <input
          name="address"
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setAddress(value);
          }}
        />
      </label>

      <label className="form-item">
        Event Date
        <DatePicker
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="MM/dd/yyyy"
          className="date-picker"
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
        />
      </label>
      <label className="form-item">
        More Event Details
        <input
          name="message"
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setDetails(value);
          }}
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
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
});

Form.displayName = "Form";

export default Form;
