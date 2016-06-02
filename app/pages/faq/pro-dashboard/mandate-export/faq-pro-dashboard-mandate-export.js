import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardMandateExportEn from './faq-pro-dashboard-mandate-export.en';
import FaqProDashboardMandateExportEs from './faq-pro-dashboard-mandate-export.es';
import FaqProDashboardMandateExportFr from './faq-pro-dashboard-mandate-export.fr';
import FaqProDashboardMandateExportDe from './faq-pro-dashboard-mandate-export.de';

export default class FaqProDashboardMandateExport extends React.Component {
  displayName = 'FaqProDashboardMandateExport'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardMandateExportEn />
        <FaqProDashboardMandateExportEs />
        <FaqProDashboardMandateExportFr />
        <FaqProDashboardMandateExportDe />
      </FaqProDashboardPage>
    );
  }
}
