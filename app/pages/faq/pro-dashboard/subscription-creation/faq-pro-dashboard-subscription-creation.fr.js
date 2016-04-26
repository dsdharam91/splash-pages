import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class FaqProDashboardSubscriptionCreationFr extends React.Component {
  displayName = 'FaqProDashboardSubscriptionCreationFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Création d'abonnement</h2>
        <p className='para'>
          Un abonnement vous permet de créer une série de paiements récurrents au montant similaire.
          Ainsi, vous évitez de devoir créer le même paiement tous les mois.
        </p>
        <p className='para'>
          Après la validation d'un mandat, vous pourrez définir un échéancier de prélèvements récurrents.
          Choisissez le client que vous souhaitez prélever dans la <a href='https://manage.gocardless.com/customers'
          target='_blank' className='u-link-color-p u-text-underline'>section Customers</a>.
        </p>
        <ul className='list'>
          <li>
            <strong>Si vous prenez des paiements dont le montant ou la fréquence varient</strong>, créez des paiements
            individuels. Notre <Link to='faq_pro_dashboard_payment_creation' className='u-link-color-p u-text-underline'>
            section paiement</Link> vous expliquera comment faire.
          </li>
          <li>
            <strong>Si vous souhaitez prélever des montants fixes à intervalle constant</strong>, créez un abonnement.
            Cette section vous montre comment faire.
          </li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Créer un abonnement pour votre client
        </h3>


        <p className='para'>
          Sélectionnez un de vos clients, puis cliquez sur Create > Subscription.
        </p>

        <img src='/images/faq/en/subscription-create-buttons.png' />

        <p className='para'>
          Vous pouvez ensuite paramétrer l'abonnement :
        </p>
        <ul className='list'>
          <li>
            Une description interne vous permettant d'organiser vos paiements
          </li>
          <li>
            Le montant à encaisser à chaque occurence.
          </li>
          <li>
            Une référence paramétrable qui apparaîtra sur le relevé de compte de votre client
          </li>
          <li>
            Une fréquence : hebdomadaire, mensuelle, annuelle ou autre (par exemple tous les 3 mois)
          </li>
          <li>
            La date du premier prélèvement
          </li>
          <li>
            La durée de l’abonnement : tacite reconduction, une date spécifique ou un nombre de prélèvements
            définis (par exemple 12 paiements de 100€)
          </li>
        </ul>

        <img src='/images/faq/fr/subscription-create.png' />

      </Translation>
    );
  }
}
