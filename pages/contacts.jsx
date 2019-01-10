import React from 'react';
import ContactMap from '../components/contact-map';
import ContactForm from '../components/contact-form';
import style from './style.scss';

const page = () => (
  <>
      <div className={style.container}>
        <div className={style.map}>
        <ContactMap />
        </div>
        <ContactForm />
      </div>
  </>
);
export default page;
