import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardEn from './faq-pro-dashboard-setup.en';
import FaqProDashboardFr from './faq-pro-dashboard-setup.fr';
import FaqProDashboardDe from './faq-pro-dashboard-setup.de';
import FaqProDashboardEs from './faq-pro-dashboard-setup.es';

export default class FaqProDashboard extends React.Component {
  displayName = 'FaqProDashboard'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardEn />
        <FaqProDashboardFr />
        <FaqProDashboardDe />
        <FaqProDashboardEs />
      </FaqProDashboardPage>
    );
  }
}
