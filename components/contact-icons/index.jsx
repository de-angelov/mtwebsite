import React from 'react';
import style from './style.scss';
// import { boundMethod } from 'autobind-decorator';

const ContactIcons = () => (
  <div className={style.container}>

    <div className={style.infoCard}>
      <div
        className={style.infoCarIcon}
      >
        <img
          alt="location icon"
          src="icon-envelope.png"
        />
      </div>
      <div className={style.infoCardText}>
        <p className={style.textBold}>
          MT Design
        </p>
        <p className={style.textNormal}>
          50A Alabin Str, apt. 6, 1000 Sofia, Bulgaria
        </p>
      </div>
    </div>

    {/* <div>
      <div>
        <img
          alt="email icon"
          src="icon-marker.png"
        />
      </div>
      <p
        className={style.Text}
      >office@mt-design.bg</p>
    </div> */}

  </div>
);

export default ContactIcons;
