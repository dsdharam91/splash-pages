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

        <table className='u-size-full'>
          <thead>
            <tr>
              <th className='u-padding-Am'>
                Echec de paiement
              </th>
              <th className='u-padding-Am'>
                Explication
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell'>Insufficient funds (fonds insuffisants)</td>
              <td className='comparison-table__cell'>Le client n'avait pas assez de fonds pour faire le paiement.</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell'>Refer to payer (contactez le client)</td>
              <td className='comparison-table__cell'>C'est souvent utilisé par les banques pour masquer la cause de l'échec et
              indique fréquemment des fonds insuffisants.</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell'>Bank account closed (compte en banque clôturé)</td>
              <td className='comparison-table__cell'>Le compte en banque du client a été clôturé avant que le prélèvement n'ait
              lieu. Le mandat sera annulé.</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell'>Direct Debit not enabled (prélèvement impossible)</td>
              <td className='comparison-table__cell'>Le compte en banque du client ne permet pas les prélèvements. Le mandat
              sera annulé.</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell'>Invalid bank details (données bancaires invalides)</td>
              <td className='comparison-table__cell'>L'IBAN indiqué par le client est incorrect. Le mandat sera annulé.</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell'>Mandate cancelled (mandat annulé)</td>
              <td className='comparison-table__cell'>Soit vous avez annulé le mandat, soit le client l'a annulé auprès de leur
              banque.</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell'>Authorisation disputed (autorisation contestée)</td>
              <td className='comparison-table__cell'>Avec SEPA les clients ont le droit à un remboursement des paiements non
              autorisés pendant 13 mois.</td>
            </tr>
            <tr className='comparison-table__row'>
              <td className='comparison-table__cell'>Refund requested (remboursement demandé)</td>
              <td className='comparison-table__cell'>Avec SEPA les clients ont le droit à un remboursement des paiements autorisés
              pendant 8 semaines.</td>
            </tr>
          </tbody>
        </table>

      </Translation>
    );
  }
}
