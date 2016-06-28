import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class FaqProDashboardSubscriptionCreationEs extends React.Component {
  displayName = 'FaqProDashboardSubscriptionCreationEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Creación de una suscripción</h2>
        <p className='para'>
          Una suscripción permite generar una serie de cobros recurrentes de un importe igual. De ese modo, no
          tendrás que crear el mismo cobro todos los meses.
        </p>
        <p className='para'>
          Después de validar un mandato, podrás definir un plan de cobro de Adeudo Directo recurrente.
          Elige al cliente que deseas cobrar en la <a href='https://manage.gocardless.com/customers'
          target='_blank' className='u-link-color-p u-text-underline'>sección "Customers"</a>.
        </p>
        <ul className='list'>
          <li>
            <strong>Si realizas cobros cuyo importe o frecuencia varían</strong>, debes generar cobros individuales.
            En nuestra <Link to='faq_pro_dashboard_payment_creation' className='u-link-color-p u-text-underline'>
            sección "Payements"</Link> te explicamos cómo hacerlo.
          </li>
          <li>
            <strong>Si deseas cobrar importes fijos a intervalos constantes</strong>, crea una suscripción. En esta
            sección te mostramos cómo hacerlo.
          </li>
        </ul>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Crear una suscripción para tu cliente
        </h3>


        <p className='para'>
          Selecciona a uno de tus clientes y, a continuación, haz clic en "Create" > "Subscription".
        </p>

        <img src='/images/faq/en/subscription-create-buttons.png' />

        <p className='para'>
          A continuación, puedes configurar la suscripción:
        </p>
        <ul className='list'>
          <li>
            Una <strong>descripción</strong> interna que permite organizar los cobros
          </li>
          <li>
            El <strong>importe</strong> a cobrar en cada ocasión
          </li>
          <li>
            Una <strong>referencia</strong> configurable que aparecerá en el extracto bancario de tu cliente
          </li>
          <li>
            La <strong>frecuencia</strong> del cobro: semanal, mensual, anual u otra (por ejemplo, cada 3 meses)
          </li>
          <li>
            La <strong>fecha del primer Adeudo Directo</strong>
          </li>
          <li>
            La <strong>duración de la suscripción</strong> : renovación tácita, una fecha específica o un número de Adeudos
            Directos definidos (por ejemplo, 12 cobros de 100€)
          </li>
        </ul>

        <img src='/images/faq/fr/subscription-create.png' />

      </Translation>
    );
  }
}
