import React from 'react';
import Translation from '../../../components/translation/translation';
import Message from '../../../components/message/message';
import Href from '../../../components/href/href';
import Link from '../../../components/link/link';

export default class LegalIntroductionEs extends React.Component {
  displayName = 'LegalIntroductionEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Introducción</h2>
        <p className='para'>
          The following documents outline the terms of service for using GoCardless.
          You should read through these terms before using GoCardless.
        </p>
        <p className='para'>
          If you have any questions about our terms of service, then please get in
          touch by emailing <Href to='email' className='u-link-color-p u-text-underline'
          itemProp='email' /> or calling <Message pointer='phone_local' />.
          { /* FCA requirement. Do not remove. */ }
          &nbsp;Customers can also find more details about our transaction structure
           in our FAQ.
        </p>

        <Link to='legal_merchants' className='legal-contents__link u-link-clean'>
          <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-xs legal-contents__link-heading'>
            Merchant agreement
          </h3>
          <p className='para'>
            The terms of use for collecting payments via GoCardless
          </p>
        </Link>

        <Link to='legal_restrictions' className='legal-contents__link u-link-clean'>
          <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-xs legal-contents__link-heading'>
            Restricted activities
          </h3>
          <p className='para'>
            Activities you can't collect payments via GoCardless for
          </p>
        </Link>

        <Link to='legal_privacy' className='legal-contents__link u-link-clean'>
          <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-xs legal-contents__link-heading'>
            Privacy Policy
          </h3>
          <p className='para'>
            Our practices towards handling your personal information
          </p>
        </Link>
      </Translation>
    );
  }
}
