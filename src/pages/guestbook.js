import React from 'react';
import { Helmet } from 'react-helmet';
import Guestbook from '../components/Guestbook/Guestbook';
import { guestbookData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/main.scss';

export default () => {
  const { title, lang, description } = guestbookData;

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title}</title>
        <html lang={lang} />
        <meta name="description" content={description} />
      </Helmet>
      <Guestbook />
    </>
  );
};
