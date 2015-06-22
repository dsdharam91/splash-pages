import React from 'react';
import IfLocale from '../if-locale/if-locale';
import Message from '../message/message';
import Translation from '../../components/translation/translation';

export default class StartTakingPaymentsCTA extends React.Component {
  displayName = 'StartTakingPaymentsCTA'

  render() {
    return (
      <IfLocale hasInstantSignup>
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-heading u-text-light u-text-l u-margin-Bm'>
              <Message pointer='signup_cta.main' />
            </h2>
            <Translation locales='en'>
              <a href='/merchants/new' className='btn'>
                <Message pointer='signup_cta.button_text' />
              </a>
            </Translation>
            <Translation locales='fr'>
              <a href='https://manage.gocardless.com/signup' className='btn'>
                <Message pointer='signup_cta.button_text' />
              </a>
            </Translation>
            <p className='u-color-p u-margin-Ts'>
              <Message pointer='signup_cta.description' />
            </p>
          </div>
        </div>
      </IfLocale>
    );
  }
}
