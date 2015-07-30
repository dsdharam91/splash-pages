import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardPayoutTrackingEn from './faq-pro-dashboard-payout-tracking.en';
import FaqProDashboardPayoutTrackingFr from './faq-pro-dashboard-payout-tracking.fr';

export default class FaqProDashboardPayoutTracking extends React.Component {
  displayName = 'FaqProDashboardPayoutTracking'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardPayoutTrackingEn />
        <FaqProDashboardPayoutTrackingFr />
      </FaqProDashboardPage>
    );
  }
}
