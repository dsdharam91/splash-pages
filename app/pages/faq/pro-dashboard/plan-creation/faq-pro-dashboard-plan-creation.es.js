import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardPlanCreationEs extends React.Component {
  displayName = 'FaqProDashboardPlanCreationEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Creación de Planes</h2>
        <p className='para'>
          Los planes permiten realizar cobros de la misma cantidad regularmente con la ayuda de un sencillo enlace.
          Basta con crear un plan de cobros (por ejemplo 9,99 euros al mes durante 12 meses) y enviar el enlace a
          tus clientes, o adjuntarlo a tu sitio. Al validar un plan, tu cliente acepta al mismo tiempo un mandato
          de Adeudo Directo y un plan de cobros.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Definir el plan
        </h3>

        <p className='para'>
          En nuestra sección <a href='https://manage.gocardless.com/plans' target='_blank'
          className='u-link-color-p u-text-underline'>"Plans"</a>, puedes crear un enlace para enviar a
          todos tus clientes.
        </p>

        <p className='para'>
          A continuación, puedes configurar el Plan:
        </p>
        <ul className='list'>
          <li>
            El <strong>nombre del Plan</strong> para que puedas identificarlo
          </li>
          <li>
            El <strong>importe</strong> a cobrar regularmente
          </li>
          <li>
            La <strong>referencia</strong> que aparecerá en el extracto bancario de tu cliente
          </li>
          <li>
            La <strong>frecuencia</strong> : semanal, mensual, anual o personalizada (por ejemplo, cada 3 meses)
          </li>
          <li>
            La <strong>fecha</strong> del primer Adeudo Directo, ya sea con antelación o un día especificado del mes
          </li>
          <li>
            La <strong>duración de la suscripción</strong> : hasta su anulación, una fecha específica o un número de Adeudos Directos definidos
            (por ejemplo, 12 cobros de 100€)
          </li>
          <li>
            Como opción avanzada: <strong>una URL de redirección</strong>, para que, por ejemplo, tus clientes sean redirigidos a tu sitio
            una vez aceptado el plan
          </li>
        </ul>

        <img src='/images/faq/fr/create-plan.png' />

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Compartir el Plan
        </h3>

        <p className='para'>
          Una vez creado el Plan, tienes que compartirlo con tus clientes. Para ello, haz clic en el Plan y,
          a continuación, en "Invitar clientes".
        </p>
        <p className='para'>
          Para validar el mandato del plan, es necesario obtener el consentimiento del pagador. GoCardless te
          permite validar un Plan de dos maneras:
        </p>
        <ul className='list'>
          <li>
            Compartiendo un enlace a un mandato electrónico seguro con tus clientes, que se puede enviar por correo
            electrónico o insertar en tu sitio web.
          </li>
          <li>
            Enviando un correo electrónico a tus clientes que contenga el mismo enlace a un mandato electrónico seguro.
          </li>
        </ul>

        <img src='/images/faq/en/add-to-plan.png' />

        <p className='para'>
          El enlace permite a tus clientes introducir sus datos bancarios de manera segura (en el idioma de su elección).
          Así obtendrás la autorización para comenzar a cobrar directamente de su cuenta bancaria una vez realizado el plan.
          Tus clientes verán la página web siguiente:
        </p>

        <img src='/images/faq/fr/sepa-plan-page.png' />

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Gestionar los planes
        </h3>

        <p className='para'>
          Podrás ver la lista de todos tus Planes en la <a href='https://manage.gocardless.com/plans' target='_blank'
          className='u-link-color-p u-text-underline'>sección Plans</a>, y, al hacer clic sobre el Plan, podrás ver a
          todos los clientes pendientes de validación (si vas a utilizar el correo electrónico de GoCardless) y a los
          clientes que ya han aceptado el Plan.
        </p>

      </Translation>
    );
  }
}
