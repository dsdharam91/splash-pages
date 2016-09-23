import React from 'react';
import LegalPage from '../../legal-page';
import Link from '../../../../components/link/link';

export default class LegalOldTermsIndex extends React.Component {
  displayName = 'LegalOldTermsIndex'

  render() {
    return (
      <LegalPage>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Previous terms of service</h2>
        <p className='para'>
          This is a list of outdated terms of service for using GoCardless. You can read the up-to-date terms of service here <Link to='legal' className='u-link-color-p u-text-underline'>here</Link>.
        </p>

        <p className='para'><strong>Merchant agreements</strong></p>

        <ul className='list'>
          <li>
            <Link to='legal_old_merchant_agreements_2016_09_20' className='u-link-color-p u-text-underline'>
              Merchant agreement [prior to 23rd September 2016]
            </Link>
          </li>
        </ul>

        <p className='para'><strong>Partner agreements</strong></p>

        <ul className='list'>
          <li>
            <Link to='legal_old_partner_agreements_2016_09_20' className='u-link-color-p u-text-underline'>
              Partner agreement [prior to 23rd September 2016]
            </Link>
          </li>
        </ul>

        <p className='para'><strong>Restricted activities</strong></p>

        <ul className='list'>
          <li>
            <Link to='legal_old_restrictions_2014_07_31' className='u-link-color-p u-text-underline'>
              Restricted activities [prior to 31st July 2014]
            </Link>
          </li>
          <li>
            <Link to='legal_old_restrictions_2014_09_19' className='u-link-color-p u-text-underline'>
              Restricted activities [prior to 19th September 2014]
            </Link>
          </li>
          <li>
            <Link to='legal_old_restrictions_2016_09_20' className='u-link-color-p u-text-underline'>
              Restricted activities [prior to 23rd September 2016]
            </Link>
          </li>
        </ul>

        <p className='para'><strong>Privacy policies</strong></p>

        <ul className='list'>
          <li>
            <Link to='legal_old_privacy_policies_2016_09_23' className='u-link-color-p u-text-underline'>
              Privacy policy [prior to 6th September 2016]
            </Link>
          </li>
        </ul>
      </LegalPage>
    );
  }
}
