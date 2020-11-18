import emailjs from 'emailjs-com';

function sendEmail(e) {
  e.preventDefault();

  emailjs
    .sendForm('service_ntnstwa', 'template_siaattu', e.target, 'user_Mpbs9elFJYUKcmve5O3Tc')
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
}

export default sendEmail;
