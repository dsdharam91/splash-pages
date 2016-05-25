import React from 'react';
import FaqMerchantsPage from '../faq-merchants-page';
import FaqMerchantsCustomerExperienceEn from './faq-merchants-customer-experience.en';
import FaqMerchantsCustomerExperienceFr from './faq-merchants-customer-experience.fr';
import FaqMerchantsCustomerExperienceDe from './faq-merchants-customer-experience.de';
import FaqMerchantsCustomerExperienceEs from './faq-merchants-customer-experience.es';

export default class FaqMerchantsCustomerExperience extends React.Component {
  displayName = 'FaqMerchantsCustomerExperience'

  render() {
    return (
      <FaqMerchantsPage>
        <FaqMerchantsCustomerExperienceEn />
        <FaqMerchantsCustomerExperienceFr />
        <FaqMerchantsCustomerExperienceDe />
        <FaqMerchantsCustomerExperienceEs />
      </FaqMerchantsPage>
    );
  }
}
