import React from 'react';
import FaqMerchantsPage from '../faq-merchants-page';

export default class FaqMerchantsVerification extends React.Component {
  displayName = 'FaqMerchantsVerification'

  render() {
    return (
      <FaqMerchantsPage>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Verificación</h2>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Qué es la verificación y porque es importante?
        </h3>
        <p className='para'>
          Nada más crear tu cuenta de GoCardless, te pedimos que verifiques unos datos. Esto no es un capricho nuestro,
          sino que es un requisito legal para que podamos enviarte el dinero que cobras a tus clientes. Concretamente,&nbsp;
          <a href='http://noticias.juridicas.com/base_datos/Fiscal/528771-rd-304-2014-de-5-may-aprueba-el-regl-de-la-ley-10-2010-de-28-abr-de-prevencion.html'
          className='u-link-color-p u-text-underline'>la Ley 10/2010 de Blanqueo de Capitales</a> y que nosotros,
          como todo el resto de Entidades de Pago reguladas por el EPC y el Banco de España, tenemos que cumplir.
        </p>
        <p className='para'>&nbsp;</p>
        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Que puedo y que no puedo hacer mientras mi cuenta esté en proceso de verificación?
        </h3>
        <p className='para'>
          Aunque tu cuenta esté en verificación, tu cuenta de GoCardless está totalmente operativa.
          Podrás crear clientes, que firmen mandatos SEPA y empezar a hacer tus cobros.
          Lo único que no podremos hacer será enviarte el dinero a tu cuenta bancaria hasta que
          tu cuenta esté totalmente verificada. Afortunadamente, si rellenas los datos correctamente
          y <strong>sigues los siguientes pasos,</strong> tu verificación estará lista en 2-3 días.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Paso 1: Rellene los datos solicitados
        </h3>
        <p className='para'>
          Los datos son los siguientes:
        </p>
        <p className='para'>
          <strong>Información de la compañía:</strong>
        </p>
        <ul className='list'>
          <li>Country (País): España</li>
          <li>Business Type (Tipo de Negocio): Autónomo, Empresa u ONG</li>
          <li>What does your Business do? (¿Qué hace tu empresa?): Descripción corta sobre tu actividad profesional</li>
          <li>CIF (Número de identificación fiscal)</li>
        </ul>

        <p className='para'>
          <strong>Director/Individual details (Detalles del Administrador de la empresa o, si eres autónomo, tu nombre):</strong>
        </p>
        <ul className='list'>
          <li>Given Name (Nombre)</li>
          <li>Family Name (Apellidos)</li>
          <li>Address (Dirección)</li>
          <li>City (Ciudad)</li>
          <li>Post Code (Código postal)</li>
          <li>Date of Birth (Fecha de nacimiento)</li>
        </ul>

        <p className='para'>
          <strong>Shareholders info (Información de los accionistas que tengan más de un 25% de la empresa):</strong>
        </p>
        <ul className='list'>
          <li>Given and Family Name (Nombre y apellidos)</li>
          <li>Date of Birth (Fecha de nacimiento)</li>
        </ul>

        <p className='para'>
          <strong>Bank Account details (Cuenta Bancaria donde quieres recibir el dinero de tus clientes)</strong>
        </p>
        <ul className='list'>
          <li>Account holder name (Titular de la cuenta bancaria)</li>
          <li>Country (País)</li>
          <li>Account Number (Número de cuenta)</li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Paso 2: Verifica tu cuenta Bancaria
        </h3>
        <p className='para'>
          Para poder verificar tu cuenta, la mejor manera es que envíes una transferencia de 0.01€ a la cuenta
          de GoCardless desde la cuenta a la que quieres que te enviemos los cobros.
          Los datos de nuestra cuenta son:
        </p>
        <ul className='list'>
          <li>Nombre: GoCardless Ltd</li>
          <li>BIC BARCGB22</li>
          <li>IBAN: GB48 BARC 2017 2242 909977</li>
        </ul>
        <p className='para'>
          En la Referencia de la transferencia, pon el usuario de GoCardless con el que te registraste (normalmente tu email)
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Paso 3: Envío de documentos de acreditación
        </h3>
        <p className='para'>
          Si alguno de los checks automáticos que hacemos falla por cualquier razón, entonces te pediremos que nos envíes
          algunos documentos para identificarte:

          - DNI: Es importante que nos envíes, en un solo archivo, un escaneado de las dos caras. Si no lo tienes ya,
          puedes crearlo en un momento con tu Smartphone preferido con la App Camscanner, gratuita y disponible en
          todas las plataformas, <a href='https://itunes.apple.com/es/app/camscanner-free/id388627783?mt=8'
          className='u-link-color-p u-text-underline'> Iphone</a>,
          <a href='https://play.google.com/store/apps/details?id=com.intsig.camscanner&feature=search_result'
          className='u-link-color-p u-text-underline'> Android</a> o
          <a href='https://www.microsoft.com/es-es/store/apps/camscanner/9wzdncrfhv2s'
          className='u-link-color-p u-text-underline'> Windows Phone</a>

          - Factura donde venga tu nombre y tu domicilio
        </p>
      </FaqMerchantsPage>
    );
  }
}