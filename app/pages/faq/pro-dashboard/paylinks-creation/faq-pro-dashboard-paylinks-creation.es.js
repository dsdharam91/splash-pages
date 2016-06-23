import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPaylinksCreationEs extends React.Component {
  displayName = 'FaqProDashboardPaylinksCreationEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Creación de Paylinks</h2>
        <p className='para'>
          Los Paylinks te permiten recibir un importe específico de tus clientes, como por ejemplo, un
          cobro puntual de 10€. Basta con especificar el importe al enviar el enlace a tus clientes, o
          adjuntarlo en tu sitio. Al validar un Paylink, tu cliente acepta al mismo tiempo un mandato de
          Adeudo Directo y un plan puntual.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Definir el Paylink
        </h3>

        <p className='para'>
          En nuestra <a href='https://manage.gocardless.com/payments' target='_blank'
          className='u-link-color-p u-text-underline'>sección "Payments"</a>, puedes crear un Paylink que enviar a
          todos tus clientes.
        </p>

        <p className='para'>
          A continuación, puedes configurar el Paylink:
        </p>
        <ul className='list'>
          <li>
            El <strong>nombre del Paylink</strong>  para identificarlo
          </li>
          <li>
            El <strong>importe</strong> a cobrar regularmente
          </li>
          <li>
            El <strong>permiso otorgado con el mandato</strong>: Al cobrar un Paylink, puedes poner una retricción a futuros cobros
            para que los clientes estén más tranquilos a la hora de pagar. Seleccionando esta opción, si volvieses a cobrar a un cliente
            con este mandato, éste tendrá que dar su consentimiento a través del correo electrónico.
          </li>
          <li>
            Como opción avanzada: una <strong>URL de redirección</strong>, para que, por ejemplo, tus clientes sean redirigidos a tu sitio
            una vez aceptado el plan
          </li>
        </ul>

        <img src='/images/faq/fr/create-paylink.png' />

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Compartir el Paylink
        </h3>

        <p className='para'>
          Una vez creado el Paylink, tienes que compartirlo con tus clientes. Para ello, haz clic en el Plan y, a continuación, en
          "Invitar clientes".
        </p>
        <p className='para'>
          Para validar el mandato y el cobro puntual, es necesario obtener el consentimiento del pagador. GoCardless te permite
          validar un Paylink compartiendo un enlace a un mandato electrónico seguro con tus clientes, que se puede enviar por
          correo electrónico o insertar en tu sitio web.
       </p>

        <img src='/images/faq/fr/add-to-paylink.png' />

        <p className='para'>
          El enlace permite a tus clientes introducir sus datos bancarios de manera segura (en el idioma de su elección). Así
          obtendrás la autorización para comenzar a cobrar directamente de su cuenta bancaria una vez definido el cobro puntual.
          Tus clientes verán la página web siguiente:
        </p>

        <img src='/images/faq/fr/sepa-paylinks-page.png' />

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Gestionar los Paylinks
        </h3>

        <p className='para'>
          Podrás ver la lista de todos tus Paylinks en el <a href='https://manage.gocardless.com/payments/paylinks' target='_blank'
          className='u-link-color-p u-text-underline'>botón Paylinks</a>.
        </p>

      </Translation>
    );
  }
}
