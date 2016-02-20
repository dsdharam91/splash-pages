import React from 'react';
import Translation from '../../../components/translation/translation';
import Message from '../../../components/message/message';
import Href from '../../../components/href/href';
import Link from '../../../components/link/link';

export default class LegalIntroductionEs extends React.Component {
  displayName = 'LegalIntroductionEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Introducción</h2>
        <p className='para'>
          Los siguientes documentos resumen los términos y condiciones de uso de GoCardless.
          Deberías leer estos términos antes de usar GoCardless.
        </p>
        <p className='para'>
          Si tienes cualquier pregunta sobre estos términos de servicio, por favor
          contáctanos por email al <Href to='email' className='u-link-color-p u-text-underline'
          itemProp='email' /> o llamando al <Message pointer='phone_local' />.
          { /* FCA requirement. Do not remove. */ }
          &nbsp;Los clientes también pueden encontrar más detalles sobre nuestra estructura de
          clientes en nuestro FAQ.
        </p>

        <Link to='legal_merchants' className='legal-contents__link u-link-clean'>
          <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-xs legal-contents__link-heading'>
            Acuerdo para Empresas
          </h3>
          <p className='para'>
            Los términos de uso para cobrar a través de GoCardless
          </p>
        </Link>

        <Link to='legal_restrictions' className='legal-contents__link u-link-clean'>
          <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-xs legal-contents__link-heading'>
            Actividades Restringidas
          </h3>
          <p className='para'>
            Actividades en las que no puedes cobrar a través de GoCardless
          </p>
        </Link>

        <Link to='legal_privacy' className='legal-contents__link u-link-clean'>
          <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-xs legal-contents__link-heading'>
            Política de Privacidad
          </h3>
          <p className='para'>
            Nuestras prácticas a la hora de administrar tus datos personales
          </p>
        </Link>
      </Translation>
    );
  }
}
