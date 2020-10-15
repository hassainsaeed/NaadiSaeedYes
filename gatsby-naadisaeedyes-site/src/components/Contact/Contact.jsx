import React, { useContext, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';

const Contact = () => {
  const { contact } = useContext(PortfolioContext);
  const { title, cta, phone } = contact;
  const [buttonText, setButtonText] = useState('Lets Talk');

  return (
    <section id="contact">
      <Container>
        <Title title={title} />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">{cta}</p>

            <button
              onClick={() => {
                setButtonText(phone);
              }}
              className="cta-btn cta-btn--resume"
              type="button"
            >
              {buttonText}
            </button>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
