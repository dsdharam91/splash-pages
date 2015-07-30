import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardSubscriptionCreationEn from './faq-pro-dashboard-subscription-creation.en';
import FaqProDashboardSubscriptionCreationFr from './faq-pro-dashboard-subscription-creation.fr';

export default class FaqProDashboardSubscriptionCreation extends React.Component {
  displayName = 'FaqProDashboardSubscriptionCreation'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardSubscriptionCreationEn />
        <FaqProDashboardSubscriptionCreationFr />
      </FaqProDashboardPage>
    );
  }
}
