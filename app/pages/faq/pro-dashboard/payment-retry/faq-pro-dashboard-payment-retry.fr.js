import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPaymentRetryFr extends React.Component {
  displayName = 'FaqProDashboardPaymentRetryFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Représentation de paiement</h2>
        <p className='para'>
          Quand un paiement échoue, nous vous indiquerons lemotif ainsi qu'une brève description. Il y a 3 types principaux de rejets :
        </p>
        <ul className='list'>
          <li>
            <strong>Le paiement a échoué et peut être représenté</strong> : ceci arrive principalement quand il n'y pas assez de fonds
            sur le compte en banque de votre client (insufficient funds) ou quand le rejet "contactez le client" (refer to payer) a été
            reçu.
          </li>
          <li>
            <strong>Le paiement a échoué ainsi que le mandat</strong> : vous devez contacter votre client pour mettre un nouveau
            mandat en place.
          </li>
          <li>
            <strong>Le paiement a été contesté par le client</strong> : vous devez contacter votre client pour comprendre pourquoi ils
            ont contesté. Vous ne devriez uniquement créer un nouveau paiement qu'une fois que la contestation a été réglée.
          </li>
        </ul>

        <p className='para'>
          Quand il est possible de représenter le paiement, vous verrez un boutton "Retry" en haut à droite de la page d'historique
          du paiement. Si vous cliquez sur ce bouton nous resoumettrons immédiatement votre paiement aux banques. Vous pouvez voir la
          nouvelle date de prélèvement ainsi que suivre le statut du paiement dans le même historique que le paiement initial.
        </p>

        <img src='/images/faq/fr/payment-retry.png' />

        <p className='para'>
          Ce tableau énumére la liste complète des rejets de paiement possibles ainsi qu'une explication du message de rejet :
        </p>

        <table className='table table--faq u-color-heading'>
          <thead>
            <tr>
              <th>
                Rejet de paiement
              </th>
              <th>
                Explication
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Insufficient funds (fonds insuffisants)</td>
              <td>Le compte en banque de votre client n'avait pas assez de fonds pour faire le paiement.</td>
            </tr>
            <tr>
              <td>Refer to payer (contactez le client)</td>
              <td>Ce motif est souvent utilisé par les banques pour masquer la cause de l'échec.
              Il indique fréquemment des fonds insuffisants.</td>
            </tr>
            <tr>
              <td>Bank account closed (compte en banque clôturé)</td>
              <td>Le compte en banque du client a été clôturé avant que le prélèvement n'ait
              lieu. Le mandat et tous les futurs paiements seront annulés.</td>
            </tr>
            <tr>
              <td>Direct Debit not enabled (prélèvement impossible)</td>
              <td>Le compte en banque du client ne permet pas les prélèvements, par exemple parce qu'il est sur liste noir ou que c'est
              un compte épargne. Le mandat et tous les futurs paiements seront annulés.</td>
            </tr>
            <tr>
              <td>Invalid bank details (données bancaires invalides)</td>
              <td>L'IBAN indiqué par le client est incorrect. Le mandat et tous les futurs paiements seront annulés.</td>
            </tr>
            <tr>
              <td>Mandate cancelled (mandat annulé)</td>
              <td>Soit vous avez annulé le mandat, soit le client l'a annulé auprès de leur banque.</td>
            </tr>
            <tr>
              <td>Authorisation disputed (autorisation contestée)</td>
              <td>Avec SEPA les clients ont le droit à un remboursement des paiements non
              autorisés pendant 13 mois.</td>
            </tr>
            <tr>
              <td>Refund requested (remboursement demandé)</td>
              <td>Avec SEPA les clients ont le droit à un remboursement des paiements autorisés
              pendant 8 semaines.</td>
            </tr>
          </tbody>
        </table>

      </Translation>
    );
  }
}
