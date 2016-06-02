import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardMandateCreationEn from './faq-pro-dashboard-mandate-creation.en';
import FaqProDashboardMandateCreationEs from './faq-pro-dashboard-mandate-creation.es';
import FaqProDashboardMandateCreationFr from './faq-pro-dashboard-mandate-creation.fr';
import FaqProDashboardMandateCreationDe from './faq-pro-dashboard-mandate-creation.de';

export default class FaqProDashboardMandateCreation extends React.Component {
  displayName = 'FaqProDashboardMandateCreation'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardMandateCreationEn />
        <FaqProDashboardMandateCreationEs />
        <FaqProDashboardMandateCreationFr />
        <FaqProDashboardMandateCreationDe />
      </FaqProDashboardPage>
    );
  }
}
