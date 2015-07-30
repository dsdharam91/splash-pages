import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPaymentRetryFr extends React.Component {
  displayName = 'FaqProDashboardPaymentRetryFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Représentation de paiement</h2>
        <p className='para'>
          Quand un paiement échoue, nous vous indiquerons la cause ainsi qu'une brève description. Il y a 3 types principaux d'échec :
        </p>
        <ul className='list'>
          <li>
            <strong>Le paiement échoue et peut être représenté</strong> : ceci est principalement le cas pour les cas suivants :
            fonds insuffisants (insufficient funds) et contactez le client (refer to payer)
          </li>
          <li>
            <strong>Le paiement échoue en même temps que le mandat</strong> : vous devez contacter votre client pour mettre un nouveau
            mandat en place
          </li>
          <li>
            <strong>Le paiement est contesté</strong> : vous devez contacter votre client pour comprendre pourquoi ils ont contesté et
            uniquement créer un nouveau paiement une fois que cela a été clarifié avec le client
          </li>
        </ul>

        <p className='para'>
          Quand cela est possible, vous pouvez <strong>représenter le paiement</strong> en cliquant "Retry". Nous resoumettrons votre
          paiement aux banques tout de suite. Vous pouvez voir la nouvelle date de prélèvement ainsi que suivre le statut du paiement
          dans le même historique que le paiement initial.
        </p>

        <img src='/images/faq/fr/payment-retry.png' />

        <p className='para'>
          Nous avons listé ci-dessous la liste complète des échecs de paiement et ce qu'ils signifient.
        </p>

        <table className='table table--faq u-color-heading'>
          <thead>
            <tr>
              <th>
                Echec de paiement
              </th>
              <th>
                Explication
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Insufficient funds (fonds insuffisants)</td>
              <td>Le client n'avait pas assez de fonds pour faire le paiement.</td>
            </tr>
            <tr>
              <td>Refer to payer (contactez le client)</td>
              <td>C'est souvent utilisé par les banques pour masquer la cause de l'échec et
              indique fréquemment des fonds insuffisants.</td>
            </tr>
            <tr>
              <td>Bank account closed (compte en banque clôturé)</td>
              <td>Le compte en banque du client a été clôturé avant que le prélèvement n'ait
              lieu. Le mandat sera annulé.</td>
            </tr>
            <tr>
              <td>Direct Debit not enabled (prélèvement impossible)</td>
              <td>Le compte en banque du client ne permet pas les prélèvements. Le mandat
              sera annulé.</td>
            </tr>
            <tr>
              <td>Invalid bank details (données bancaires invalides)</td>
              <td>L'IBAN indiqué par le client est incorrect. Le mandat sera annulé.</td>
            </tr>
            <tr>
              <td>Mandate cancelled (mandat annulé)</td>
              <td>Soit vous avez annulé le mandat, soit le client l'a annulé auprès de leur
              banque.</td>
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
