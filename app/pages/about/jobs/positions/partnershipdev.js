import React from 'react';
import JobsPage from '../jobs-page';

export default class PartnershipDevelopmentManager extends React.Component {
  displayName = 'PartnershipDevelopmentManager'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Partnership Development Manager</h3>
        <p className='para'>
          GoCardless processes more than £1 billion in payments each year. Thousands of businesses across the UK and beyond
          rely on us to handle their payments, and hundreds more sign up every week. About a third of these have never previously
          had access to Direct Debit, so we are transforming the way they do business.
        </p>

        <p>First job post!</p>
      </JobsPage>
    );
  }
}
