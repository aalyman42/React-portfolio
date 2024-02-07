import { useState } from "react";
export default function Contact() {
  const [senderName, setSenderName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleFormChange = (event) => {
    const { name, value } = event.target;

    if (name === "senderName") {
      return setSenderName(value);
    } else if (name === "email") {
      return setEmail(value);
    } else {
      return setMessage(value);
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(
      `Thanks for your message ${senderName}! The contact feature is still under development.`
    );

    setSenderName("");
    setEmail("");
    setMessage("");
  };
  return (
    <div>
      <h3>Contact me:</h3>
      <form class="row g-3" onSubmit={handleFormSubmit}>
        <div class="col-md-6">
          <label for="inputEmail4" class="form-label">
            Email
          </label>
          <input
            type="email"
            class="form-control"
            id="inputEmail4"
            name="email"
            value={email}
            onChange={handleFormChange}
          />
        </div>
        <div class="col-md-6">
          <label class="form-label">Name</label>
          <input
            type="text"
            class="form-control"
            name="senderName"
            value={senderName}
            onChange={handleFormChange}
          />
        </div>
        <div class="col-12">
          <label class="form-label">Message</label>
          <input
            type="text"
            class="form-control"
            placeholder="Type your message"
            name="message"
            value={message}
            onChange={handleFormChange}
          />
        </div>
        <button class="btn btn-success">Send Message</button>
      </form>
    </div>
  );
}
