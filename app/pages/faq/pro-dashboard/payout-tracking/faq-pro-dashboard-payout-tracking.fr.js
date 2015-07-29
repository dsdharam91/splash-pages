import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPayoutTrackingFr extends React.Component {
  displayName = 'FaqProDashboardPayoutTrackingFr'

  render() {
    return (
       <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Suivi de vos encaissements</h2>
        <p className='para'>
          GoCardless versera les fonds collectés automatiquement chaque jour ouvré. Il n’y a pas de palier minimal ni de réserve.
          Nos <Link to='pricing' className='u-link-color-p u-text-underline'>frais</Link> sont automatiquement déduits de ce reversement.
        </p>
        <p className='para'>
         Vous pouvez suivre nos versements dans notre <a href='https://manage.gocardless.com/payouts'
          target='_blank' className='u-link-color-p u-text-underline'>section Payouts</a>.
        </p>

        <img src='/images/faq/fr/payout.png' />

        <p className='para'>
          Nous indiquons la référence qui s’affichera sur votre compte en banque (ici W-ZFQSSPNDR689DW).
        </p>
        <p className='para'>
          Vous pouvez voir la liste de tous les paiements individuels faisant partie d’un virement. Cette information vous permet de
          réconcilier ces paiements au niveau comptable.
        </p>

      </Translation>
    );
  }
}
