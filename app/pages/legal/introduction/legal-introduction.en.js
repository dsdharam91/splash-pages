import React from 'react';
import Translation from '../../../components/translation/translation';
import Message from '../../../components/message/message';
import Href from '../../../components/href/href';
import Link from '../../../components/link/link';

export default class LegalIntroductionEn extends React.Component {
  displayName = 'LegalIntroductionEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Introduction</h2>
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
          in our <Href to='customer_queries_link' className='u-link-color-p u-text-underline'>FAQ</Href>.
        </p>

        <Link to='legal_customers' className='legal-contents__link u-link-clean'>
          <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-xs legal-contents__link-heading'>
            Wesbite terms of use
          </h3>
          <p className='para'>
            The terms on which you may make use of our website
          </p>
        </Link>

        <Link to='legal_merchants' className='legal-contents__link u-link-clean'>
          <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-xs legal-contents__link-heading'>
            Merchant agreement
          </h3>
          <p className='para'>
            The terms of use for collecting payments via GoCardless
          </p>
        </Link>

        <Link to='legal_partners' className='legal-contents__link u-link-clean'>
          <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-xs legal-contents__link-heading'>
            Partner agreement
          </h3>
          <p className='para'>
            The terms of use for helping others collect via GoCardless
          </p>
        </Link>

        <Link to='legal_restrictions' className='legal-contents__link u-link-clean'>
          <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-xs legal-contents__link-heading'>
            Restricted activities
          </h3>
          <p className='para'>
            Activities you can't collect payments via GoCardless for
          </p>
        </Link>

        <Link to='legal_privacy' className='legal-contents__link u-link-clean'>
          <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-xs legal-contents__link-heading'>
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
