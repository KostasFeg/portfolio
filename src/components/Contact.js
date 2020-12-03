import React, { useState } from 'react';
import '../Styles/Contact.css';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleSubmit = (e) => {
    const objectTobeSubmitted = { name: name, email: email, message: message };
    console.log(objectTobeSubmitted);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': 'contact',
        ...objectTobeSubmitted,
      }),
    })
      .then(() => alert('Success'))
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <div className="welcomeContainer">
      <div className="card">
        <div className="cardContent">
          <h2>Contact me</h2>
          <form className="form" onSubmit={handleSubmit} netlify>
            <label for="name">Name</label>
            <input
              placeholder="Your name"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label for="email">Email</label>
            <input
              placeholder="E-mail"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label for="message">Message</label>
            <textarea
              placeholder="Type your message..."
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <button className="submitBtn" type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
