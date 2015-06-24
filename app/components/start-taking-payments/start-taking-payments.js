import React from 'react';
import IfLocale from '../if-locale/if-locale';
import Message from '../message/message';
import Href from '../href/href';

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
            <Href to='signup.path' className='btn'
            pointer='signup_cta.button_text' />
            <p className='u-color-p u-margin-Ts'>
              <Message pointer='signup_cta.description' />
            </p>
          </div>
        </div>
      </IfLocale>
    );
  }
}
