import "../style/contact.css";

export default function Contact() {
  return (
    <div className="contact">
      <h2>Get In Touch</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
