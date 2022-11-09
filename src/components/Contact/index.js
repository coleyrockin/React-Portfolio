// import "./styles.css";
import axios from "axios";
import { useState } from "react";
//JS
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
          email: "",
          message: ""
        });
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  };
  //HTML FOR CONTACT
  return (
    <div className="Contact">
      <div class="form">
        <h1 className="text-center text-xl m-2">Contact Me</h1>
        <form enctype="multipart/form-data" onSubmit={handleSubmit}>
          <div class="form-group">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="text"
              name="name"
              placeholder="Full name"
              value={query.name}
              onChange={handleChange()}
              required
            />
          </div>
          <div class="form-group">
            <input
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              type="email"
              name="email"
              placeholder="Email"
              value={query.email}
              onChange={handleChange()}
              required
            />
          </div>
          <div class="form-group">
            <textarea id="message"
              type="text"
              name="message"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={handleChange()}
              placeholder="Sweet messages only"
              required
            >
            </textarea>
          </div>
          <div>
            <button class="formbutton" type="submit" input="message" className="align-center text-xl">Send</button>
          </div>
          {formStatus && <p>Message sent, Good day!</p>}
        </form>
      </div>
    </div>
  );
}
export default Contact