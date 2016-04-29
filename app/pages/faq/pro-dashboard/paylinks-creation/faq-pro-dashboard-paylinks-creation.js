import React from 'react';
import FaqProDashboardPage from '../faq-pro-dashboard-page';
import FaqProDashboardPaylinksCreationFr from './faq-pro-dashboard-paylinks-creation.fr';

export default class FaqProDashboardPaylinksCreation extends React.Component {
  displayName = 'FaqProDashboardPaylinksCreation'

  render() {
    return (
      <FaqProDashboardPage>
        <FaqProDashboardPaylinksCreationFr />
      </FaqProDashboardPage>
    );
  }
}
