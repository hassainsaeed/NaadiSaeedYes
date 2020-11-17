import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import Title from '../Title/Title';

import { livestreamData } from '../../mock/data';
import useScript from '../../hooks/useScript';

function LiveStream() {
  const { title, paragraphOne } = livestreamData;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useScript('https://embed.twitch.tv/embed/v1.js');

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  useEffect(() => {
    function twitchScriptLoaded() {
      new window.Twitch.Embed('twitch-embed', {
        width: 854,
        height: 480,
        channel: 'naadisaeedyes',
        collection: 'fk2-tojtRxbMNg',
        autoplay: true,
        // only needed if your site is also embedded on embed.example.com and othersite.example.com
        parent: [`${process.env.GATSBY_PARENT_URL}`, `www.${process.env.GATSBY_PARENT_URL}`],
      });
    }
    const script = document.createElement('script');
    const url = 'https://embed.twitch.tv/embed/v1.js';
    script.src = url;
    script.async = true;
    script.onload = () => twitchScriptLoaded();

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section id="livestream">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <Title title={title} />
          <div className="livestrean-wrapper__info">
            <p className="livestrean-wrapper__info-text">{paragraphOne}</p>
            <p className="livestrean-wrapper__info-text">
              If the event is live now you can watch below, or if you missed it go to our{' '}
              <a href="https://www.twitch.tv/naadisaeedyes"> Twitch Channel</a> for the recorded
              videos.
            </p>
          </div>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <div id="twitch-embed" />
        </Fade>
      </Container>
    </section>
  );
}

export default LiveStream;
