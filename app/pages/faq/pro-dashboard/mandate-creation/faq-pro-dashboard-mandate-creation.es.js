import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class FaqProDashboardMandateCreationEs extends React.Component {
  displayName = 'FaqProDashboardMandateCreationEs'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Creación de un mandato</h2>
        <p className='para'>
          Para generar un mandato SEPA, es necesario obtener el consentimiento del pagador.
          GoCardless te permite generar un mandato de tres maneras:
        </p>
        <ul className='list'>
          <li>
          Compartiendo un enlace a un mandato electrónico seguro con tus clientes
          </li>
          <li>
          Enviando un correo electrónico a tus clientes que contenga el mismo enlace a un mandato
          electrónico seguro
          </li>
          <li>
          Indicando directamente los datos de tus clientes, recopilados anteriormente a través de un
          mandato por escrito o por teléfono (reservado a los clientes de GoCardless Pro y Enterprise)
          </li>
        </ul>

        <p className='para'>
          APara comenzar, ve a la pestaña Cliente en el panel de control y haz clic en
          <a href='https://manage.gocardless.com/customers/create' target='_blank'
          className='u-link-color-p u-text-underline'>Añadir clientes</a>.
        </p>

        <img src='/images/faq/en/create-customer.png' />

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          La página de mandato electrónico
        </h3>

        <p className='para'>
          El enlace permite a tus clientes introducir sus datos bancarios de manera segura (en el idioma de su
          elección). El cliente da así su consentimiento para que se le cobre directamente de su cuenta bancaria.
        </p>

        <img src='/images/faq/fr/sepa-mandate-page.png' />

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Mandatos existentes en papel o telefónicos
        </h3>

        <p className='para'>
          Si tienes mandatos de Adeudo Directo existentes, puedes utilizar nuestra
          <a href='https://bulk-changes.gocardless.io' target='_blank'
          className='u-link-color-p u-text-underline'>Herramienta de migración</a>. Si tienes
          alguna duda, siempre puedes contactar con nosotros escribiendo un
          correo electrónico a <Href to='email' className='u-link-color-p u-text-underline' />
          y los importaremos. Si deseas utilizar mandatos en papel o telefónicos, tienes que actualizar
          tu cuenta a GoCardless Pro o Enterprise.
        </p>

      </Translation>
    );
  }
}
