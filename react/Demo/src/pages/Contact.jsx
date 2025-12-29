import React, { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClearForm = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      const data = {
        fullName,
        email,
        message,
      };
      console.log(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
    handleClearForm();
  };

  return (
    <>
    <h1 className=" text-center">Contact Us</h1>
      <div className="text-center d-flex justify-content-center my-2">
        
        <div className="border border-dark w-50 ">
          <form onReset={handleClearForm} onSubmit={handleSubmit}>
            <div className=" m-4 d-flex justify-content-center gap-4">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={fullName}
                onChange={(event) => setFullName(event.target.value)}
                placeholder="Enter your Name"
                className="text-primary"
              />
            </div>
            <div className="m-4 d-flex justify-content-center gap-4">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your Email"
                className="text-primary"
              />
            </div>
            <div className="m-4 d-flex justify-content-center gap-4">
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="Enter your Message"
                className="text-primary"
              ></textarea>
            </div>
            <div className=" d-flex gap-2 m-2 justify-content-center">
              <button type="reset" className="btn btn-danger">
                Clear Form
              </button>
              <button type="submit" className="btn btn-success">
                {isLoading ? "Loading" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
