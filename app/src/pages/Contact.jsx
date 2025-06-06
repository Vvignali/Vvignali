import "../styles/Contact.css"
import ContactForm from "../components/ContactForm.jsx"

const Contact = () => (
  <section id="contact" className="contact">
    <div className="contact-container">
      <h2>Contact</h2>
      <p>
        Vous avez un projet ou une question&nbsp;? N'hésitez pas à me laisser un
        message via le formulaire ci-dessous.
      </p>
      <ContactForm />
    </div>
  </section>
)

export default Contact
