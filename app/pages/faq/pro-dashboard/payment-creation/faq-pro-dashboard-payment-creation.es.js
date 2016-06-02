import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class FaqProDashboardPaymentCreationEs extends React.Component {
  displayName = 'FaqProDashboardPaymentCreationEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Creación de cobros</h2>
        <p className='para'>
          Una vez validado un mandato, podrás realizar tus primeras Domiciliaciones Bancarias. Elige al cliente que deseas
          cobrar en la <a href='https://manage.gocardless.com/customers'
          target='_blank' className='u-link-color-p u-text-underline'>sección "Customers"</a>.
        </p>
        <ul className='list'>
          <li>
            <strong>Si realizas cobros cuyo importe o frecuencia varían</strong>, debes generar cobros individuales.
            En esta página te mostramos cómo hacerlo.
          </li>
          <li>
            <strong>Si deseas cobrar importes fijos a intervalos constantes</strong>, crea una suscripción. En nuestra
            <Link to='faq_pro_dashboard_subscription_creation' className='u-link-color-p u-text-underline'>
            sección Suscripciones</Link> te explicamos cómo hacerlo.
          </li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Realizar un cobro de Adeudo Directo puntual a un cliente.
        </h3>
        <p className='para'>
          Selecciona a uno de tus clientes en la <a href='https://manage.gocardless.com/customers'
          target='_blank' className='u-link-color-p u-text-underline'>sección "Customers"</a>, y a continuación
          haz click en "Create" > "Payment".
        </p>

        <img src='/images/faq/en/payment-create-buttons.png' />

        <p className='para'>
          A continuación, puedes configurar el Adeudo Directo:
        </p>
        <ul className='list'>
          <li>
            El <strong>importe</strong>
          </li>
          <li>
            Una <strong>descripción</strong> interna que permite organizar los cobros
          </li>
          <li>
            Una <strong>referencia</strong> configurable que aparecerá en el extracto bancario de tu cliente
          </li>
          <li>
            La <strong> fecha del cobro</strong>, ya sea cuanto antes o en una fecha específica futura
          </li>
        </ul>

        <img src='/images/faq/fr/payment-create.png' />

      </Translation>
    );
  }
}
