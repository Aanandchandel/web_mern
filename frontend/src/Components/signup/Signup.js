import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const colectData = async (event) => {
    event.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await fetch("http://localhost:3001/reg", {
        method: "post",
        body: JSON.stringify({ name, password, email }),
        headers: { "Content-Type": "application/json" },
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const result = await response.json();
      setMessage(result.message); // Set message based on server response
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setMessage("An error occurred while processing your request");
    }
  };

  return (
    <div id="signup">
      <div>
        <h1>Register</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={colectData} type="button">
          Submit
        </button>
        {message && <p>{message}</p>} {/* Display message if not empty */}
      </div>
    </div>
  );
};

export default Signup;
