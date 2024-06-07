import React from "react";
import { useState } from "react";
import axios from "axios";

const NodeMailer = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const postData = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3001/", {
        email: email,
        subject: subject,
        message: message,
      })
      .then(() => {
        setEmail("");
        setSubject("");
        setMessage("");
        console.log("Data Posted Successfully");
      })
      .catch(() => {
        console.log("Error on Posting Data");
      });
  };
  return (
    <div>
      <form onSubmit={postData}>
        <label htmlFor="user">Username</label>
        <input
          id="user"
          type="email"
          placeholder="Enter Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="pass">Subject</label>
        <input
          id="pass"
          type="text"
          placeholder="Enter Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <label htmlFor="mess">Message</label>
        <input
          id="mess"
          type="text"
          placeholder="Enter message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NodeMailer;
