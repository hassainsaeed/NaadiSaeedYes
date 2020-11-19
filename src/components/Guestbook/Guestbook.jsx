import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import emailjs from 'emailjs-com';

import Button from 'antd/lib/button';
import Form from 'antd/lib/form';
import Input from 'antd/lib/input';
import Title from '../Title/Title';
import 'antd/lib/form/style/index.css';
import 'antd/lib/input/style/index.css';
import 'antd/lib/button/style/index.css';

import { guestbookData } from '../../mock/data';

const FormItem = Form.Item;
const { TextArea } = Input;

function Guestbook() {
  const { title, paragraphOne, paragraphTwo, paragraphThree } = guestbookData;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    setDisabled({
      disabled: true,
    });

    emailjs
      .sendForm('service_ntnstwa', 'template_siaattu', e.target, 'user_Mpbs9elFJYUKcmve5O3Tc')
      .then(
        (result) => {
          console.log(result.text);
          alert('Your message has been sent sucessfully. Thanks!');
        },
        (error) => {
          console.log(error.text);
          alert('Something went wrong, and your message failed to send. Sorry!');
        }
      );
  };

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
    <>
      <section id="guestbook">
        <Container>
          <Fade left={isDesktop} top={isMobile} duration={1000} delay={500} distance="30px">
            <Title title={title} />
            <div className="guestbook-wrapper__info">
              <p className="guestbook-wrapper__info-text">{paragraphOne}</p>
              <p className="guestbook-wrapper__info-text">{paragraphTwo}</p>
              <p className="guestbook-wrapper__info-text">{paragraphThree}</p>
            </div>
          </Fade>
        </Container>
      </section>
      <section id="form">
        <br />
        <br />
        <Fade bottom duration={1000} delay={500} distance="30px">
          <form name="contact" onSubmit={sendEmail}>
            <FormItem
              label="Name"
              name="from_name"
              rules={[{ whitespace: true, required: true }]}
              style={{ width: '50%', margin: '0 auto' }}
            >
              <Input name="from_name" />
            </FormItem>
            <FormItem
              label="E-mail"
              name="user_email"
              rules={[
                {
                  message: 'Please input your e-mail address!',
                  whitespace: true,
                  type: 'email',
                },
              ]}
              style={{ width: '50%', margin: '0 auto' }}
            >
              <Input name="user_email" />
            </FormItem>
            <FormItem
              label="Message"
              name="message"
              rules={[{ required: true, message: 'Please input your message!', whitespace: true }]}
              style={{ width: '50%', margin: '0 auto' }}
            >
              <TextArea name="message" placeholder="" autosize={{ minRows: 4, maxRows: 10 }} />
            </FormItem>
            <FormItem style={{ marginTop: '30px' }}>
              <Button type="primary" htmlType="submit" disabled={disabled}>
                Submit
              </Button>
            </FormItem>
          </form>
        </Fade>
      </section>
    </>
  );
}

export default Guestbook;
