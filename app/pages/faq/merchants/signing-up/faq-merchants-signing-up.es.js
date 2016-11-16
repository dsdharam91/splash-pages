import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';
import Href from '../../../../components/href/href';

export default class FaqMerchantsSigningUpEs extends React.Component {
  displayName = 'FaqMerchantsSigningUpEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Registro<br></br></h2>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Cómo me registro en GoCardless?
        </h3>
        <p className='para'>
          Puedes crear una cuenta de prueba o Sandbox
          desde <a href='https://manage-sandbox.gocardless.com/signup?lang=es' className='u-link-color-p u-text-underline'>aquí</a>.
          Para crear una cuenta en producción y empezar a cobrar a tus clientes, necesitas
          ir <a href='https://manage.gocardless.com/signup?lang=es' className='u-link-color-p u-text-underline'>aquí</a>.<br></br>
        </p>
        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Qué necesito para registrarme?
        </h3>
        <p className='para'>
          Necesitarás pasar el análisis de Blanqueo de Capitales, tal como nos exige Banco de España. Para ello
          necesitaremos algunos datos personales para verificar la identidad del administrador, información sobre
          la empresa y una transferencia bancaria desde la cuenta en la que quieres recibir el dinero.<br></br>
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Cómo puedo probar el producto?
        </h3>
        <p className='para'>
          Después de registrarte online, recomendamos que hagas un cobro de prueba a tí mismo (de un importe pequeño, 1€ por ejemplo). No te
          llevará más de 5 minutos y no tiene riesgo alguno.<br></br>
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Puedo registrarme si no soy una empresa registrada?
        </h3>
        <p className='para'>
          Depende - GoCardless está disponible para entidades sin ánimo de lucro, Sociedades Anónimas,
          Sociedades limitas y para individuos. Si no eres ninguna de esto, contacta
          con <Link to='contact_sales' className='u-link-color-p u-text-underline'>nuestro equipo de ventas</Link>.
        </p>
        <p className='para'>
          Si eres una empresa pero no estás registrado, deberás registrarte como autónomo.
          Esto no afectará a la operativa de tu cuenta.<br></br>
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Que hago si soy un programador o desarrollador?
        </h3>
        <p className='para'>
          Los desarrolladores deberán registrarse normalmente. Nuestra documentación de la API la
          puedes encontrar <Href to='api_reference_link' className='u-link-color-p u-text-underline'>aquí</Href>.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Si me registro ¿Hay algún compromiso o cuota que tenga que pagar?
        </h3>
        <p className='para'>
          No, ninguno. Registrarse solo implica que has creado una cuenta desde la que puedes
          probar el producto; puedes dejar de utilizarlo sin tener que pagar nada en absoluto.
        </p>
      </Translation>
    );
  }
}
