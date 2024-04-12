import { useState } from "react";
import { nanoid } from "nanoid";

export default function Form({ setBookList, bookList }) {
  const [bookImage, setBookImage] = useState(BookImage);
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [description, setDescription] = useState("");

  return (
    <form className="form-container">
      <label className="form-item">
        Book Title:
        <input
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setBookTitle(value);
          }}
        />
      </label>

      <label className="form-item">
        Image:
        <input
          type="url"
          onChange={(event) => {
            const value = event.target.value;
            setBookImage(value);
          }}
        />
      </label>

      <label className="form-item">
        Author:
        <input
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setAuthor(value);
          }}
        />
      </label>

      <label className="form-item">
        Genre:
        <input
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setGenre(value);
          }}
        />
      </label>

      <label className="form-item">
        Description:
        <input
          type="text"
          onChange={(event) => {
            const value = event.target.value;
            setDescription(value);
          }}
        />
      </label>
      <button
        type="submit"
        onClick={(event) => {
          event.preventDefault();
          const newBook = {
            id: nanoid(),
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
        Add New Book
      </button>
    </form>
  );
}
