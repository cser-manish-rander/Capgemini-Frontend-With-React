function Contact() {
  return (
    <section className="section contact">
      <h2>Contact Us</h2>

      <form>
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <textarea placeholder="Enter your message"></textarea>
        <button type="button">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;