// import "./styles.css";
import axios from "axios";
import { useState } from "react";

function Contact() {
  const [formStatus, setFormStatus] = useState(false);
  const [loading, setLoading] = useState(false);
  const [query, setQuery] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = () => (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);
    const formData = new FormData();
    Object.entries(query).forEach(([key, value]) => {
      formData.append(key, value);
    });

    axios
      .post(
        "https://getform.io/f/a52040d1-8d60-403e-b0b4-2e087c95c65c",
        formData,
        { headers: { Accept: "application/json" } }
      )
      .then(function (response) {
        setFormStatus(true);
        setQuery({
          name: "",
          email: ""
        });
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };
  return (
    <div className="Contact">
      <div class="form">
        <h1 className="text-center text-xl m-2">Contact Me</h1>
        <form enctype="multipart/form-data" onSubmit={handleSubmit}>
          <div class="form-group">
            <input
              type="text"
              name="name"
              placeholder="Full name"
              value={query.name}
              onChange={handleChange()}
            />
          </div>
          <div class="form-group">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={query.email}
              onChange={handleChange()}
            />
          </div>
          <div class="form-group">
            <input type="text" name="message" rows="5" placeholder="Message" onChange={handleChange()} />
          </div>
          <div>
            <button type="submit" className="items-center text-xl m-2">Send</button>
          </div>
          {formStatus && <p>Message sent.</p>}
        </form>
      </div>
    </div>
  );
}
export default Contact