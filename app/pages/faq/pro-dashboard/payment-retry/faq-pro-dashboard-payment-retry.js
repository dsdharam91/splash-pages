import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardPaymentRetryEn from './faq-pro-dashboard-payment-retry.en';
import FaqProDashboardPaymentRetryEs from './faq-pro-dashboard-payment-retry.es';
import FaqProDashboardPaymentRetryFr from './faq-pro-dashboard-payment-retry.fr';
import FaqProDashboardPaymentRetryDe from './faq-pro-dashboard-payment-retry.de';

export default class FaqProDashboardPaymentRetry extends React.Component {
  displayName = 'FaqProDashboardPaymentRetry'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardPaymentRetryEn />
        <FaqProDashboardPaymentRetryEs />
        <FaqProDashboardPaymentRetryFr />
        <FaqProDashboardPaymentRetryDe />
      </FaqProDashboardPage>
    );
  }
}
