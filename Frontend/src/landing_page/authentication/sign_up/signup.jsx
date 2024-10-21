import React, { useState } from "react";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3030/signupuser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Signup successful!");
      } else {
        setMessage(data.message || "Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      setMessage("Something went wrong!");
    }
  };

  return (
    <>
      <div className="container mt-5 p-5">
        <div className="row ">
          <div className="col-8 text-center">
            <img src="media/images/landing.png" alt="" style={{ width: "70%" }} />
          </div>
          <div className="col-4 mt-1">
            <h3 className="text-muted mb-3">Signup now</h3>
            <p className="text-muted mb-4">Or track your existing application</p>
            <form onSubmit={handleSignup}>
              <div>
                <input
                  type="text"
                  className="border rounded-2 mb-3"
                  placeholder="Enter Username"
                  style={{ width: "300px", height: "40px" }}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="email"
                  className="border rounded-2"
                  placeholder="Enter Email"
                  style={{ width: "300px", height: "40px" }}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  className="border rounded-2 mt-3 mb-4"
                  placeholder="Enter password"
                  style={{ width: "300px", height: "40px" }}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button className="btn btn-primary mb-2" type="submit">
                Continue
              </button>
            </form>
            {message && <p>{message}</p>}
            <br />

            <a href="" className="text-decoration-none">
              Want to open an NRI account?
            </a>
          </div>

          <p className="text-muted text-center m-3" style={{ fontSize: "smaller" }}>
            I authorise Zerodha to contact me even if my number is registered on DND. I authorise Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit{" "}
            <a href="" className="text-decoration-none">
              this article
            </a>{" "}
            to know more.
          </p>

          <p className="text-muted text-center" style={{ fontSize: "smaller" }}>
            If you are looking to open a HUF, Corporate, Partnership, or NRI account, you have to use the{" "}
            <a href="" className="text-decoration-none">
              offline forms
            </a>
            . For help,{" "}
            <a href="" className="text-decoration-none">
              click here.
            </a>
          </p>
        </div>
      </div>
    </>
  );
}
