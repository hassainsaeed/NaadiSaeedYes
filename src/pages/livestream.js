import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  return (
    <>
      <p>Hello World</p>
      <iframe
        title="livestream"
        src="https://player.twitch.tv/?channel=naadisaeedyes&parent=localhost&autoplay=true"
        height="720"
        width="1280"
        frameBorder="0"
        scrolling="no"
        allowFullScreen="true"
      />
    </>
  );
};
