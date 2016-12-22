import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';
import Href from '../../../../components/href/href';

export default class FaqMerchantsSigningUpEs extends React.Component {
  displayName = 'FaqMerchantsSigningUpEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'><strong>Registro</strong></h2>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          <strong>
            ¿Cómo me registro en GoCardless?
          </strong>
        </h3>
        <p className='para'>
          Puedes crear una cuenta de prueba o Sandbox
          desde <a href='https://manage-sandbox.gocardless.com/signup?lang=es' className='u-link-color-p u-text-underline'>aquí</a>.
          Para crear una cuenta en producción y empezar a cobrar a tus clientes, necesitas
          ir <a href='https://manage.gocardless.com/signup?lang=es' className='u-link-color-p u-text-underline'>aquí</a>.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          <strong>
            ¿Qué necesito para registrarme?
          </strong>
        </h3>
        <p className='para'>
          Necesitarás pasar el análisis de Blanqueo de Capitales, tal como nos exige Banco de España. Para ello
          necesitaremos algunos datos personales para verificar la identidad del administrador, información sobre
          la empresa y una transferencia bancaria desde la cuenta en la que quieres recibir el dinero.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          <strong>
            ¿Cómo puedo probar el producto?
          </strong>
        </h3>
        <p className='para'>
          Después de registrarte online, recomendamos que hagas un cobro de prueba a tí mismo (de un importe pequeño, 1€ por ejemplo). No te
          llevará más de 5 minutos y no tiene riesgo alguno.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          <strong>
            ¿Puedo registrarme si no soy una empresa registrada?
          </strong>
        </h3>
        <p className='para'>
          Depende - GoCardless está disponible para entidades sin ánimo de lucro, Sociedades Anónimas,
          Sociedades limitas y para individuos. Si no eres ninguna de esto, contacta
          con <Link to='contact_sales' className='u-link-color-p u-text-underline'>nuestro equipo de ventas</Link>.
        </p>
        <p className='para'>
          Si eres una empresa pero no estás registrado, deberás registrarte como autónomo.
          Esto no afectará a la operativa de tu cuenta.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          <strong>
            ¿Que hago si soy un programador o desarrollador?
          </strong>
        </h3>
        <p className='para'>
          Los desarrolladores deberán registrarse normalmente. Nuestra documentación de la API la
          puedes encontrar <Href to='api_docs.path' className='u-link-color-p u-text-underline'>aquí</Href>.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          <strong>
            Si me registro ¿Hay algún compromiso o cuota que tenga que pagar?
          </strong>
        </h3>
        <p className='para'>
          No, ninguno. Registrarse solo implica que has creado una cuenta desde la que puedes
          probar el producto; puedes dejar de utilizarlo sin tener que pagar nada en absoluto.
        </p>
      </Translation>
    );
  }
}
