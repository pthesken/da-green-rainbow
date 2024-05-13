import { useState } from "react";
import { nanoid } from "nanoid";

export default function Form({ formRef }) {
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
    <form className="form-container" ref={formRef}>
      <p>
        let us know what you like we will get back to you in a couple business
        days
      </p>
      <label className="form-item">
        Your Name
        <input
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
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setAddress(value);
          }}
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
        More event details
        <input
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setDetails(value);
          }}
        />
      </label>
      <label className="form-item">
        How can we assist?
        <input
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setAssist(value);
          }}
        />
      </label>

      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          const newBook = {
            title: bookTitle,
            author,
            genre,
            description,
            image: bookImage.trim() ? bookImage : BookImage, //ternary: if true whats after "?", if not then what's after the colon
          };
          //move to new function? ^

          setBookList([...bookList, newBook]);
        }}
      >
        Submit
      </button>
    </form>
  );
}
