import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardMandateExportEn from './faq-pro-dashboard-mandate-export.en';
import FaqProDashboardMandateExportFr from './faq-pro-dashboard-mandate-export.fr';

export default class FaqProDashboardMandateExport extends React.Component {
  displayName = 'FaqProDashboardMandateExport'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardMandateExportEn />
        <FaqProDashboardMandateExportFr />
      </FaqProDashboardPage>
    );
  }
}
