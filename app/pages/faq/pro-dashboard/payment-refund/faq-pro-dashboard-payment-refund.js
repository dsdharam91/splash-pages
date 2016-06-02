import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardPaymentRefundEn from './faq-pro-dashboard-payment-refund.en';
import FaqProDashboardPaymentRefundEs from './faq-pro-dashboard-payment-refund.es';
import FaqProDashboardPaymentRefundFr from './faq-pro-dashboard-payment-refund.fr';
import FaqProDashboardPaymentRefundDe from './faq-pro-dashboard-payment-refund.de';

export default class FaqProDashboardPaymentRefund extends React.Component {
  displayName = 'FaqProDashboardPaymentRefund'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardPaymentRefundEn />
        <FaqProDashboardPaymentRefundEs />
        <FaqProDashboardPaymentRefundFr />
        <FaqProDashboardPaymentRefundDe />
      </FaqProDashboardPage>
    );
  }
}
