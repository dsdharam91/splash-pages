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
          Après la création de votre client, vous pourrez commencer à prendre des prélèvements automatique de
          leur compte en banque. Choisissez le client que vous voulez facturer dans la <a href='https://manage.gocardless.com/customers'
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
          Prendre un paiement de votre client
        </h3>
        <p className='para'>
          Sélectionnez un de vos clients sur la <a href='https://manage.gocardless.com/customers'
          target='_blank' className='u-link-color-p u-text-underline'>section Customers</a>, puis cliquez sur Create &gt; Payment.
        </p>

        <img src='/images/faq/en/payment-create-buttons.png' />

        <p className='para'>
          Vous verrez un écran sur lequel vous pouvez personaliser votre prélèvement :
        </p>
        <ul className='list'>
          <li>
            Choisissez votre montant (max 5.000€)
          </li>
          <li>
            La description vous permet d’identifier la raison pour laquelle vous avez collecté ce paiement
          </li>
          <li>
            La référence apparaîtra sur le relevé bancaire de votre client (cela dépend de leur banque)
          </li>
          <li>
            Vous pouvez soit prendre le prélèvement dès que possible, soit indiquer une date spécifique
          </li>
        </ul>

        <img src='/images/faq/fr/payment-create.png' />

      </Translation>
    );
  }
}
