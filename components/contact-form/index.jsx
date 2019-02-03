import React, { Component } from 'react';
import { boundMethod } from 'autobind-decorator';

import { withNamespaces } from '../../utils/localization';
import style from './style.scss';
import ButtonStyled from '../button-styled';
// import _app from '../../pages/_app';

const isEmail = (email) => {
  const regExTest = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regExTest.test(String(email).toLowerCase());
};

class InputForm extends Component {
  state = {
    subjectError: false,
    emailError: false,
    messageError: false,
  }

  message = React.createRef();

  email = React.createRef();

  subject = React.createRef();

  @boundMethod
  handleSubmit(event) {
    event.preventDefault();
    // console.log('value', event.data);

    const subject = this.subject.current.value;
    const email = !isEmail(this.email.current.value);
    const message = this.message.current.value;

    this.setState({ messageError: message === '' });
    this.setState({ subjectError: subject === '' });
    this.setState({ emailError: email });

    if (!this.state.messageError || !this.state.subjectError || !this.state.emailError) {
      // alert("Prevent Submit");
    }
  }

  render() {
    const { subjectError, messageError, emailError } = this.state;
    const displayNone = { visibility: 'hidden' };

    return (
      <form
        onSubmit={this.handleSubmit}
        className={style.form}
        action="//formspree.io/denis11@abv.bg"
        method="POST"
      >
        <div>
          <h2>
            {this.props.t('title')}
          </h2>
          <p>
            {this.props.t('p')}
          </p>
        </div>
        <div
          className={style.errorMessage}
          style={subjectError ? null : displayNone}
        >
          {this.props.t('errorSubject')}
        </div>
        <input
          type="text"
          placeholder="subject..."
          name="subject"
          ref={this.subject}
        />
        <div
          className={style.errorMessage}
          style={emailError ? null : displayNone}
        >
          {this.props.t('errorMail')}
        </div>
        <input
          // type="email"
          type="text"
          placeholder="your email..."
          name="email"
          ref={this.email}
        />
        <div
          className={style.errorMessage}
          style={messageError ? null : displayNone}
        >
          {this.props.t('errorText')}
        </div>
        <textarea
          name="message"
          placeholder="your message..."
          ref={this.message}
        />
        <ButtonStyled
          onClick={() => null}
          text="Send Message"
          type="submit"
        />
      </form>
    );
  }
}

export default withNamespaces('contacts')(InputForm);
