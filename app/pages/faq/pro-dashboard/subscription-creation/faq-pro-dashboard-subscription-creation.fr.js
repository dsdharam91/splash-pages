import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class FaqProDashboardSubscriptionCreationFr extends React.Component {
  displayName = 'FaqProDashboardSubscriptionCreationFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Création d'abonnement</h2>
        <p className='para'>
          Un abonnement vous permet de créer une suite de paiements réguliers d’un montant fixe : cela vous
          évite de devoir créer le même paiement tous les mois.
        </p>
        <p className='para'>
          Après la création de votre client, vous pourrez définir un échéancier de prélèvements automatiques réguliers.
          Choisissez le client que vous voulez facturer dans la <a href='https://manage.gocardless.com/customers'
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

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Créer un abonnement avec votre client
        </h3>


        <p className='para'>
          Sélectionnez un de vos clients, puis cliquez sur Create > Subscription.
        </p>

        <img src='/images/faq/fr/subscription-create-buttons.png' />

        <p className='para'>
          Vous verrez un écran sur lequel vous pouvez personaliser votre abonnement :
        </p>
        <ul className='list'>
          <li>
            Le nom de l'abonnement vous permet d'identifier les paiements (par exemple le nom d'un plan ou service)
          </li>
          <li>
            Choisissez votre montant (max 5.000€). Ce montant sera collecté à chaque fois.
          </li>
          <li>
            La référence apparaîtra sur le relevé bancaire de votre client (cela dépend de leur banque)
          </li>
          <li>
            Choisissez la fréquence : hebdomadaire, mensuelle, annuelle ou personalisée (par exemple tous les 3 mois)
          </li>
          <li>
            Choisissez la date du premier prélèvement
          </li>
          <li>
            Choisissez la durée de l’abonnement : jusqu’à annulation, une date spécifique ou un nombre de prélèvements
            définis (par exemple 12 paiements de 100€)
          </li>
        </ul>

        <img src='/images/faq/fr/subscription-create.png' />

      </Translation>
    );
  }
}
