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

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>Les statuts</h3>

        <table className='table table--faq u-color-dark-gray'>
          <thead>
            <tr>
              <th>
                Statut
              </th>
              <th>
                Explication
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Created (Créé)</td>
              <td>Vous avez créé un paiement et il n'a pas encore été envoyé aux banques.</td>
            </tr>
            <tr>
              <td>Submitted (Envoyé aux banques)</td>
              <td>L'ordre de prélèvement a été envoyé aux banques.</td>
            </tr>
            <tr>
              <td>Confirmed (Confirmé)</td>
              <td>Le prélèvement a été exécuté et GoCardless a reçu un rapport d'exécution des banques positifs.
              GoCardless va donc procéder à l'envoi des fonds collectés.</td>
            </tr>
            <tr>
              <td>Paid out (Reversé)</td>
              <td>Les fonds collectés vous ont été reversés sur votre compte bancaire désigné.</td>
            </tr>
            <tr>
              <td>Failed (Echoué)</td>
              <td>Le prélèvement a échoué. Ce statut peut arriver le jour du prélèvement ou jusqu'à cinq jours après
              le prélèvement et peut donc intervenir après la reception d'un statut Confirmed ou Paid out.</td>
            </tr>
            <tr>
              <td>Late failure settled (Echec tardif compensé)</td>
              <td>Si l'échec est tardif et que les fonds collectés vont ont déjà été reversés (statut 'Paid out'),
              GoCardless doit récupérer les fonds auprès de vous. Ce statut indique que GoCardless a réussi
              à récuperer les fonds.</td>
            </tr>
            <tr>
              <td>Charged back (Opposition)</td>
              <td>Le client a fait opposition au paiement et a exigé un remboursement conformément à la
              protection du consommateur définie par la réglementation SEPA.</td>
            </tr>
            <tr>
              <td>Chargeback settled (Opposition compensée)</td>
              <td>Le client ayant fait opposition, GoCardless doit récupérer les fonds auprès de vous
              afin de procéder au remboursement du client.
              Ce statut indique que GoCardless a réussi à récuperer les fonds.</td>
            </tr>
          </tbody>
        </table>

        <h3 className='u-text-heading-light u-text-m u-color-dark-gray'>Les séquences classiques</h3>

        <p className='para'>
          Paiement réussi :
        </p>

        <img src='/images/faq/en/payment-success.png' />

        <p className='para'>
         Paiement échoué :
        </p>

        <img src='/images/faq/en/payment-failed.png' />

        <p className='para'>
         Paiement échoué tardivement :
        </p>

        <img src='/images/faq/en/payment-late-failure' />

        <p className='para'>
         Paiement opposé :
        </p>

        <img src='/images/faq/en/payment-chargebacked.png' />

        <p className='para'>
          Il vous est possible de <strong>retenter gratuitement un paiement échoué</strong> directement en cliquant “Retry”.
          Il n'y a pas de frais d'incident de paiement.
        </p>

        <img src='/images/faq/en/payment-retry.png' />

      </Translation>
    );
  }
}
