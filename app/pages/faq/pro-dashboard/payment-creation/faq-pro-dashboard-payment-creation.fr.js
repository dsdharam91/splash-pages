import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class FaqProDashboardPaymentCreationFr extends React.Component {
  displayName = 'FaqProDashboardPaymentCreationFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Création de paiement</h2>
        <p className='para'>
          Une fois un mandat validé, vous pourrez encaisser vos premiers prélèvements.
          Choisissez le client que vous souhaitez prélever dans la <a href='https://manage.gocardless.com/customers'
          target='_blank' className='u-link-color-p u-text-underline'>section Customers</a>.
        </p>
        <ul className='list'>
          <li>
            <strong>Si vous prenez des paiements dont le montant ou la fréquence varient</strong>, vous devez créer des paiements
            individuels. Cette page vous montre comment le faire.
          </li>
          <li>
            <strong>Si vous souhaitez prélever des montants fixes à intervalle constant</strong>, créez un abonnement.
            Notre <Link to='faq_pro_dashboard_subscription_creation' className='u-link-color-p u-text-underline'>
            section abonnement</Link> vous expliquera comment faire.
          </li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Encaisser un prélèvement ponctuel sur un client
        </h3>
        <p className='para'>
          Sélectionnez un de vos clients sur la <a href='https://manage.gocardless.com/customers'
          target='_blank' className='u-link-color-p u-text-underline'>section Customers</a>, puis cliquez
          sur Create &gt; Payment.
        </p>

        <img src='/images/faq/en/payment-create-buttons.png' />

        <p className='para'>
          Vous pouvez ensuite paramétrer le prélèvement :
        </p>
        <ul className='list'>
          <li>
            Le montant
          </li>
          <li>
            Une description interne vous permettant d'organiser vos paiements
          </li>
          <li>
            Une référence paramétrable qui apparaîtra sur le relevé de compte de votre client
          </li>
          <li>
            La date de prélèvement, soit au plus tôt, soit une date spécifique
          </li>
        </ul>

        <img src='/images/faq/fr/payment-create.png' />

      </Translation>
    );
  }
}
