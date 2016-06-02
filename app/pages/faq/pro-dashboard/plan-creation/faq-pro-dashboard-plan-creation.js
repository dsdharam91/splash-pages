import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardPlanCreationFr from './faq-pro-dashboard-plan-creation.fr';

export default class FaqProDashboardPlanCreation extends React.Component {
  displayName = 'FaqProDashboardPlanCreation'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardPlanCreationFr />
        <FaqProDashboardPlanCreationEs />
      </FaqProDashboardPage>
    );
  }
}
