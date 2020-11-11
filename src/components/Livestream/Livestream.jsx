import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';

import { livestreamData } from '../../mock/data';

function LiveStream() {
  const { title } = livestreamData;
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
    <section id="livestream" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="livestrean-title">{title}</h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <iframe
            title="livestream"
            src="https://player.twitch.tv/?channel=naadisaeedyes&parent=localhost&autoplay=true"
            height="720"
            width="1280"
            frameBorder="0"
            scrolling="no"
            allowFullScreen="true"
          />
        </Fade>
      </Container>
    </section>
  );
}

export default LiveStream;
