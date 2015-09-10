import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardPaymentRetryEn from './faq-pro-dashboard-payment-retry.en';
import FaqProDashboardPaymentRetryFr from './faq-pro-dashboard-payment-retry.fr';
import FaqProDashboardPaymentRetryDe from './faq-pro-dashboard-payment-retry.de';

export default class FaqProDashboardPaymentRetry extends React.Component {
  displayName = 'FaqProDashboardPaymentRetry'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardPaymentRetryEn />
        <FaqProDashboardPaymentRetryFr />
        <FaqProDashboardPaymentRetryDe />
      </FaqProDashboardPage>
    );
  }
}
