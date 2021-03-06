import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardPaymentCreationEn from './faq-pro-dashboard-payment-creation.en';
import FaqProDashboardPaymentCreationEs from './faq-pro-dashboard-payment-creation.es';
import FaqProDashboardPaymentCreationFr from './faq-pro-dashboard-payment-creation.fr';
import FaqProDashboardPaymentCreationDe from './faq-pro-dashboard-payment-creation.de';

export default class FaqProDashboardPaymentCreation extends React.Component {
  displayName = 'FaqProDashboardPaymentCreation'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardPaymentCreationEn />
        <FaqProDashboardPaymentCreationEs />
        <FaqProDashboardPaymentCreationFr />
        <FaqProDashboardPaymentCreationDe />
      </FaqProDashboardPage>
    );
  }
}
