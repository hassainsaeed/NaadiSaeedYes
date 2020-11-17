import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';

import { guestbookData } from '../../mock/data';

function Guestbook() {
  const { title, paragraphOne, paragraphTwo, paragraphThree } = guestbookData;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="guestbook">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <Title title={title} />
          <div className="guestbook-wrapper__info">
            <p className="guestbook-wrapper__info-text">{paragraphOne}</p>
            <p className="guestbook-wrapper__info-text">{paragraphTwo}</p>
            <p className="guestbook-wrapper__info-text">{paragraphThree}</p>
          </div>
        </Fade>
      </Container>
    </section>
  );
}

export default Guestbook;
