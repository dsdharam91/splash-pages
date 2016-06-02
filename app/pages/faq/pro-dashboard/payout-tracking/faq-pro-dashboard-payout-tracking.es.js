import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class FaqProDashboardPayoutTrackingEs extends React.Component {
  displayName = 'FaqProDashboardPayoutTrackingEs'

  render() {
    return (
       <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Control de los fondos transferidos</h2>
        <p className='para'>
          GoCardless transferirá los fondos recaudados automáticamente cada día hábil. No hay importe mínimo ni de reserva. 
          Nuestros <Link to='pricing' className='u-link-color-p u-text-underline'>gastos</Link> se deducen automáticamente
          de la transferencia o se cobran a final de mes (sólo para cuentas Pro y Enterprise).
        </p>
        <p className='para'>
         Puedes seguir nuestras transferencias en la <a href='https://manage.gocardless.com/payouts'
          target='_blank' className='u-link-color-p u-text-underline'>sección "Payouts"</a>.
        </p>

        <img src='/images/faq/en/payout.png' />

        <p className='para'>
          Indicamos la referencia que aparecerá en tu cuenta bancaria (aquí W-ZFQSSPNDR689DW).
        </p>
        <p className='para'>
          Podrás ver la lista de todos los pagos individuales incluidos en una transferencia. Esta información te permite
          conciliar los cobros en cuanto a contabilidad.
        </p>

      </Translation>
    );
  }
}
