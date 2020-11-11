import React from 'react';
import { Helmet } from 'react-helmet';
import Livestream from '../components/Livestream/Livestream';
import { livestreamData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = livestreamData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <Livestream />
    </>
  );
};
