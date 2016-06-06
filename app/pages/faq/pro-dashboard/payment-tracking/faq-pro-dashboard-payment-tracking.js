import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardPaymentTrackingEn from './faq-pro-dashboard-payment-tracking.en';
import FaqProDashboardPaymentTrackingEs from './faq-pro-dashboard-payment-tracking.es';
import FaqProDashboardPaymentTrackingFr from './faq-pro-dashboard-payment-tracking.fr';
import FaqProDashboardPaymentTrackingDe from './faq-pro-dashboard-payment-tracking.de';

export default class FaqProDashboardPaymentTracking extends React.Component {
  displayName = 'FaqProDashboardPaymentTracking'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardPaymentTrackingEn />
        <FaqProDashboardPaymentTrackingEs />
        <FaqProDashboardPaymentTrackingFr />
        <FaqProDashboardPaymentTrackingDe />
      </FaqProDashboardPage>
    );
  }
}
