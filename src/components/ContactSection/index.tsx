
import { ContactStyles } from "./styles";
import {MdSmartphone} from "react-icons/md";
import{FiAtSign} from "react-icons/fi";
import {FaTwitterSquare} from "react-icons/fa";
import {FaGithub} from "react-icons/fa";
import {AiFillFacebook} from "react-icons/ai";

export default function ContactSection() {
  return (

      <ContactStyles>
        <section id="contact" className="contact-section">
          <div className="contact-section-header">
            <h2>Vamos trabalhar juntos...</h2>
            <p>Gosta de Café?</p>
          </div>
          <div className="contact-links">
            <a
              href="https://facebook.com/freecodecamp"
              target="_blank"
              className="btn contact-details"
            >
              <AiFillFacebook /> Facebook
            </a>
            <a
              id="profile-link"
              href="https://github.com/freecodecamp"
              target="_blank"
              className="btn contact-details"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="https://twitter.com/freecodecamp"
              target="_blank"
              className="btn contact-details"
            >
              <FaTwitterSquare /> Twitter
            </a>
            <a href="mailto:example@example.com" className="btn contact-details">
              <FiAtSign/> Mande um e-mail
            </a>
            <a href="tel:555-555-5555" className="btn contact-details">
              <MdSmartphone/>Me liga
            </a>
          </div>
        </section>
      </ContactStyles>
  );
}
