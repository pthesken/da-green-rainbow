import React, { useState, forwardRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import emailjs from "emailjs-com";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";

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
  const [errors, setErrors] = useState({ email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);

  const { width, height } = useWindowSize();

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    let valid = true;
    let emailError = "";
    let phoneError = "";

    if (!validateEmail(email) && email) {
      emailError = "Invalid email format";
      valid = false;
    }

    if (!validatePhone(phone)) {
      phoneError = "Phone number must be 10 digits";
      valid = false;
    }

    if (!name || !phone || !date || !details) {
      alert("Please fill in all required fields.");
      return;
    }

    if (!valid) {
      setErrors({ email: emailError, phone: phoneError });
      return;
    }

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
      setSubmitted(true);
      alert(
        "Message Sent Successfully. Thank you! We will get back to you as soon as we can."
      );
    } catch (error) {
      console.log(error.text);
      alert("Please make sure all needed forms are filled in");
    }

    e.target.reset();
    setErrors({ email: "", phone: "" });
  };

  return (
    <div className="confetti-container">
      {submitted && <Confetti width={width} height={height} />}
      <form className="form-container" ref={ref} onSubmit={handleOnSubmit}>
        <p>
          Please share your preferences with us, and we will respond within a
          few business days.
        </p>
        <label className="form-item">
          Your Name
          <input
            name="from_name"
            type="text"
            onChange={(event) => setName(event.target.value)}
            required
          />
        </label>

        <label className="form-item">
          Phone Number
          <input
            name="phone"
            type="text"
            onChange={(event) => setPhone(event.target.value)}
            required
          />
          {errors.phone && <span className="error">{errors.phone}</span>}
        </label>

        <label className="form-item">
          Email
          <input
            name="email"
            type="text"
            onChange={(event) => setEmail(event.target.value)}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </label>

        <label className="form-item">
          Event Address
          <input
            name="address"
            type="text"
            onChange={(event) => setAddress(event.target.value)}
          />
        </label>

        <label className="form-item">
          Event Date
          <DatePicker
            name="date"
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="MM/dd/yyyy"
            className="date-picker"
            shouldCloseOnSelect
            required
          />
        </label>

        <label className="form-item">
          Event Time
          <input
            name="time"
            type="text"
            onChange={(event) => setTime(event.target.value)}
          />
        </label>

        <label className="form-item">
          Your Budget
          <input
            name="budget"
            type="text"
            onChange={(event) => setBudget(event.target.value)}
          />
        </label>

        <label className="form-item">
          More Event Details
          <input
            name="details"
            type="text"
            onChange={(event) => setDetails(event.target.value)}
            required
          />
        </label>

        <label className="form-item">
          How Can We Assist?
          <input
            name="message"
            type="text"
            onChange={(event) => setAssist(event.target.value)}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
});

Form.displayName = "Form";

export default Form;
