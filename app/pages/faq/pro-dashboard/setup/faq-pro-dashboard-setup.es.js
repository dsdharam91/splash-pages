import React from 'react';
import Link from '../../../../components/link/link';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';
import IfLocale from '../../../../components/if-locale/if-locale';

export default class FaqProDashboardEs extends React.Component {
  displayName = 'FaqProDashboardEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Activación</h2>
        <p className='para'>
          <IfLocale hasInstantSignup>
            GoCardless permite generar mandatos de Adeudo Directo SEPA y realizar cobros recurrentes
            directamente a partir de nuestro <a href='https://manage.gocardless.com/signup?lang=es'
            className='u-link-color-p u-text-underline'>panel de control online</a> o de
            nuestra API REST.
          </IfLocale>
          <IfLocale hasInstantSignup={false}>
            GoCardless vous permet d’obtenir des mandats de prélèvement SEPA et d'encaisser des
            paiement récurrents sans la moindre intégration technique, directement à partir
            de notre tableau de bord en ligne.
          </IfLocale>
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Inicio
        </h3>
        <IfLocale hasInstantSignup>
          <p className='para'>
            Puedes crear una <Href to='signup.path' className='u-link-color-p u-text-underline'>cuenta GoCardless</Href> y comenzar
            a realizar cobros de Adeudo Directo instantáneamente. Sigue la guía que encontrarás a continuación
            para verificar tu cuenta.
          </p>
        </IfLocale>
        <IfLocale hasInstantSignup={false}>
          <p className='para'>
            Vous pouvez <a href='https://manage-sandbox.gocardless.com/signup' target='_blank'
            className='u-link-color-p u-text-underline'>créer un compte test</a> gratuitement.
          </p>
          <p className='para'>
            Afin de prélever des paiements réels, il suffit d'envoyer à <Href to='email'
            className='u-link-color-p u-text-underline'/> les documents suivants :
          </p>
          <ul className='list'>
            <li>Confirmer que vous avez lu et accepté nos <Link to='legal_merchants'
            className='u-link-color-p u-text-underline'>Conditions Générales d'Utilisation</Link></li>
            <li>Envoyer un RIB au nom de votre société</li>
            <li>Envoyer une copie de la carte d’identité ou du passeport de votre gérant et de chaque individu
            qui détient plus de 25% du capital de votre société</li>
          </ul>
          <p className='para'>
            Une fois ces documents fournis, nous vous créerons un compte (typiquement sous 24 heures) et vous
            pourrez commencer à utiliser GoCardless pour vos clients, sans avoir besoin de passer par votre banque
            ou contrat VAD.
          </p>
          <p className='para'>
            Veuillez noter que ce que vous créez dans votre compte test ne sera pas transmis au compte en production.
          </p>
        </IfLocale>
        <p className='para'>
          Si deseas migrar los clientes con los que ya dispones de un mandato bancario de Adeudo Directo,
          ponte en contacto con nosotros escribiendo un correo electrónico a <Href to='email'
          className='u-link-color-p u-text-underline' />.
        </p>
        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Verificación de cuenta
        </h3>

        <img src='/images/faq/fr/verification-flow.png' />

        <p className='para'>
          Con el fin de respetar las leyes europeas contra el blanqueo de dinero, debemos verificar tu identidad
          y la de tu cuenta bancaria. Si eres una empresa, deberás proporcionarnos la siguiente información:
        </p>
        <ul className='list'>
          <li>
            Tu CIF
          </li>
          <li>
            El nombre, el domicilio <strong>personal</strong> y la fecha de nacimiento de uno de los administradores
          </li>
          <li>
            El nombre, la dirección <strong>personal</strong> y la fecha de nacimiento de todos los accionistas
            que posean más de un 25 % de las acciones de la empresa
          </li>
          <li>
            La cuenta bancaria para las transferencias que debe estar a nombre de la empresa
          </li>
        </ul>

        <img src='/images/faq/fr/company-verification.png' />

        <p className='para'>
          Una vez que nos hayas proporcionado esta información, tenemos que verificarla. Te pediremos:
        </p>
        <ul className='list'>
          <li>
            Un <strong>documento de identidad</strong> (pasaporte o <strong>anverso / reverso</strong>
            de un documento nacional de identidad) del responsable seleccionado y de los accionistas
            que posean más de un 25 % de las acciones
          </li>
          <li>
            Una <strong>prueba reciente de residencia</strong> (menos de 6 meses) del responsable seleccionado
            y de los accionistas que posean más del 25 % de las acciones, por ejemplo, un recibo de electricidad,
            de gas o de agua, una factura de telefonía fija, móvil o de Internet, el impuesto sobre bienes inmuebles
            o la tasa de habitabilidad...
          </li>
          <li>
            Una <strong>transferencia de 0,01 € </strong>o el importe mínimo desde la cuenta bancaria a la que quieres que
            enviemos el dinero recaudado por Adeudo Directo a nuestra cuenta designada (te indicaremos los datos por email)
          </li>
        </ul>

        <img src='/images/faq/fr/verification-document.png' />

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Personaliza tu cuenta
        </h3>
        <p className='para'>
          Puedes personalizar tu cuenta en la <a href='https://manage.gocardless.com/settings/company'
          target='_blank' className='u-link-color-p u-text-underline'>sección "Company Info"</a> :
        </p>
        <ul className='list'>
          <li>Adjunta un logotipo que se utilizará en tu página de mandato</li>
          <li>Adjunta una cuenta bancaria, en la que ingresaremos los cobros</li>
          <li>Modifica la referencia que quieras que aparezca en el extractor bancario de tus clientes</li>
        </ul>

      </Translation>
    );
  }
}
