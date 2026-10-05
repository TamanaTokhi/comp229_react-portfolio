import { useNavigate } from "react-router-dom";

export default function Contact() {
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    // Redirect to Home after submitting the form
    navigate("/");
  }

  return (
    <section>
      <h1>Contact Me</h1>

      <p>
        I would love to hear from you. Please use the form below to get in
        touch with me.
      </p>

      <form onSubmit={handleSubmit}>

        {/* First Name */}
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          placeholder="Enter your first name"
          required
        />

        {/* Last Name */}
        <label htmlFor="lastName">Last Name</label>
        <input
          id="lastName"
          type="text"
          placeholder="Enter your last name"
          required
        />

        {/* Contact Number */}
        <label htmlFor="contactNumber">Contact Number</label>
        <input
          id="contactNumber"
          type="tel"
          placeholder="Enter your contact number"
          required
        />

        {/* Email */}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Enter your email"
          required
        />

        {/* Message */}
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          placeholder="Enter your message"
          required
        ></textarea>

        {/* Submit Button */}
        <button type="submit">Send Message</button>

      </form>
    </section>
  );
}