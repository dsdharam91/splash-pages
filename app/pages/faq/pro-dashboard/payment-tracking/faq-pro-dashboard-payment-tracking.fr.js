import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPaymentTrackingFr extends React.Component {
  displayName = 'FaqProDashboardPaymentTrackingFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Suivi de vos paiements</h2>

        <p className='para'>
          Il y a deux façons de suivre le statut de vos prélèvements :
        </p>

        <ul className='list'>
          <li>
            <strong>Dans la <a href='https://manage.gocardless.com/payments'
            target='_blank' className='u-link-color-p u-text-underline'>section Payments</a> du tableau de bord</strong> :
            vous pouvez voir la liste de tous les paiements que vous avez pris. Vous pouvez filtrer ces paiements soit par leur date
            de création, soit par le status actuel du paiement. Une utilisation classique consiste à filtrer les résultats pour voir
            les paiements ayant échoué récemment.
          </li>
          <li>
            <strong>Dans la <a href='https://manage.gocardless.com/customers'
            target='_blank' className='u-link-color-p u-text-underline'>section Customers</a> du tableau de bord</strong> :
            vous pouvez voir la liste de tous les paiements pris d'un client.
          </li>
        </ul>

        <p className='para'>
          Il est possible de filtrer par période ou statut (par exemple pour voir les paiements échoués récemment),
          ainsi que d’exporter vers Excel.
        </p>

        <p className='para'>
          Voici à quoi ressemble l'historique d'un paiement réussi :
        </p>

        <img src='/images/faq/en/payment-success.png' />

        <p className='para'>
          L'historique d'un paiement échoué ressemble à cela :
        </p>

        <img src='/images/faq/en/payment-failed.png' />

        <p className='para'>
          Il vous est possible de <strong>retenter gratuitement un paiement échoué</strong> directement en cliquant “Retry”.
          Il n'y a pas de frais d'incident de paiement.
        </p>

        <img src='/images/faq/en/payment-retry.png' />

      </Translation>
    );
  }
}
