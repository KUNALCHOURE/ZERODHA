import React, { useState } from "react";

export default function Login() {
  const [useremail, setUserEmail] = useState("");
  const [userpass, setUserPass] = useState("");
  const [message, setMessage] = useState(""); // New state to hold the login message

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("http://localhost:3030/loginuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: useremail,
          password: userpass,
        }),
      });

      if (res.ok) {
        // If login is successful, set a success message
        const Data = await res.json();
        const username=Data.username;
        localStorage.setItem("username",username);
        console.log("login"+username);
        setMessage("Login successful! Redirecting to the dashboard...");
        setTimeout(() => {
          window.location.href = "http://localhost:5174/"; // Replace with your actual dashboard URL
        }, 2000); // Delay to allow user to see the message before redirection
      } else {
        // Handle errors (e.g., display error messages)
        const errorData = await res.json();
        setMessage(`Login failed: ${errorData.message}`);
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("An error occurred. Please try again.");
    }
  };

  return (
    <>
      <div className="container">
        <div className="row m-5 p-5">
          <div className="col-8 text-center">
            <img src="media/images/landing.png" alt="Landing" style={{ width: "70%" }} />
          </div>
          <div className="col-4">
            <h2 className="text-muted">Login Now</h2>
            <form onSubmit={handleLogin}>
              <div>
                <input
                  type="email"
                  className="border rounded-2 mt-3"
                  placeholder="Enter Email"
                  style={{ width: "300px", height: "40px" }}
                  value={useremail}
                  onChange={(e) => setUserEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  className="border rounded-2 mt-3 mb-3"
                  placeholder="Enter Password"
                  style={{ width: "300px", height: "40px" }}
                  value={userpass}
                  onChange={(e) => setUserPass(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary mt-3">
                Login
              </button>
            </form>
            {/* Conditionally render message */}
            {message && <p className="mt-3 text-center">{message}</p>}
          </div>
        </div>
      </div>
    </>
  );
}
