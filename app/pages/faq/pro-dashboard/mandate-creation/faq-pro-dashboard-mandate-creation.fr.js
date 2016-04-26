import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class FaqProDashboardMandateCreationFr extends React.Component {
  displayName = 'FaqProDashboardMandateCreationFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Création de mandat</h2>
        <p className='para'>
          Afin de créer un mandat SEPA, il vous faut obtenir le consentement du payeur.
          GoCardless vous permet de créer un mandat de trois façons:
        </p>
        <ul className='list'>
          <li>
          En partagant un lien vers un mandat électronique sécurisé avec vos clients
          </li>
          <li>
          En envoyant un email à vos clients contenant ce même lien vers un mandat électronique sécurisé
          </li>
          <li>
          En indiquant directement les données de vos clients, auparavant collectées
          via un mandat papier ou par téléphone (réservé aux clients GoCardless Pro et Enterprise)
          </li>
        </ul>

        <p className='para'>
          Afin de commencer, allez sur l'onglet Customer sur le tableau de bord et
          cliquez sur <a href='https://manage.gocardless.com/customers/create' target='_blank'
          className='u-link-color-p u-text-underline'>Add Customers</a>.
        </p>

        <img src='/images/faq/en/create-customer.png' />

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          La page de mandat électronique
        </h3>

        <p className='para'>
          Le lien permet à vos clients de fournir leurs coordonnées bancaires de manière sécurisée (dans la langue
          de leur choix). Le client donne ainsi son consentement à être prélever directement sur leur compte en banque.
        </p>

        <img src='/images/faq/fr/sepa-mandate-page.png' />

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Mandats existants, papier ou téléphonique
        </h3>

        <p className='para'>
          Si vous avez des mandats de prélèvements existants,
          contactez-nous à <Href to='email' className='u-link-color-p u-text-underline' />. pour que nous les
          importions. Si vous souhaitez utiliser des mandats papier ou téléphonique, vous devez upgrader
          à GoCardless Pro ou Enterprise.
        </p>

      </Translation>
    );
  }
}
