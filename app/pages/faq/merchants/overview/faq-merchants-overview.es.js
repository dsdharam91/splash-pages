import React from 'react';
import Translation from '../../../../components/translation/translation';
import IfLocale from '../../../../components/if-locale/if-locale';
import Link from '../../../../components/link/link';
import Href from '../../../../components/href/href';
import Message from '../../../../components/message/message';

export default class FaqMerchantsEs extends React.Component {
  displayName = 'FaqMerchantsEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'><strong>Resumen</strong><br></br></h2>
        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
        <strong>
          ¿Cómo puedo usar GoCardless?
        </strong>
        </h3>
        <p className='para'>
          Hay tres maneras de utilizar GoCardless:
        </p>
        <ul className='list'>
          <li>
            <strong>Nuestro panel de control </strong> - genera y gestiona cobros de Adeudo Directo
            con tus clientes utilizando nuestro sencillo panel de control online.
          </li>
          <li>
            <strong>Nuestros softwares asociados</strong> - Trabajamos con una creciente lista de <Link to='partners'
            className='u-link-color-p u-text-underline'>Partners / Asociados</Link>, para que puedas cobrar a tus clientes
            desde los servicios online que ya utilizas.
          </li>
          <li>
            <strong>Nuestra sencilla API REST</strong> - Integra GoCardless en tu sitio web usando
            nuestra <Href to='developer_link' className='u-link-color-p u-text-underline'>API REST</Href>.<br></br>
          </li>
        </ul>
        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
        <strong>
          ¿A quién está dirigido GoCardless?
        </strong>
        </h3>
        <p className='para'>
          GoCardless está dirigido a cualquiera que quiera realizar cobros directamente de la cuenta bancaria de los
          clientes en Reino Unido, la Eurozona y Suecia. Es especialmente idóneo para B2B (business-to-business)
          y cobros recurrentes.
        </p>
        <p className='para'>
          Nuestro panel de control fácil de usar y nuestra potente API hacen de GoCardless una poderosa plataforma
          para todos, desde empresas pequeñas hasta corporaciones multinacionales.
        </p>
        <p className='para'>
          En España, estamos integrados con algunos de los software de contabilidad más populares
          para facilitar la facturación y la reconciliación de cobros. Descubre
          más <Link to='features' className='u-link-color-p u-text-underline'>aquí</Link>.<br></br>
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
        <strong>
          ¿Para qué no puedo usar GoCardless?
        </strong>
        </h3>
        <p className='para'>
          GoCardless es ideal para muchos usos. No obstante nuestro servicio presenta algunas limitaciones. No podrás:
        </p>
        <ul className='list'>
          <li>
            <strong>Aceptar cobros con tarjetas de crédito</strong> - sin embargo, <strong>puedes</strong> utilizar
            otro proveedor de pago junto con GoCardless.
          </li>
          <li>
            <strong>Aceptar cobros instantáneos</strong> - Los cobros de Adeudo Directo tardan en llegar entre 3 y 5
            días hábiles, por lo que no son ideales para productos que se tienen que enviar rápidamente.
          </li>
        </ul>
        <p className='para'>
          Aceptamos todo tipo de clientes, pero hay algunas excepciones: para obtener más información,
          consulta <Link to='legal_restrictions' className='u-link-color-p u-text-underline'>nuestra
          página de actividades restringidas.</Link>.<br></br>
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
        <strong>
          ¿Hay algún límite en cuanto a la cantidad que puedo cobrar?
        </strong>
        </h3>
        <p className='para'>
          No hay ningún límite en cuanto al número de transacciones que puedes realizar.
        </p>
        <p className='para'>
          En cuanto a la cantidad de dinero que puedes cobrar, el importe mínimo es de 1 euro, y el máximo de 5000 euros.
          Este límite se podría ampliar realizando controles de verificación adicionales<br></br>
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
        <strong>
          ¿Cómo recibo los fondos que he recaudado con GoCardless?
        </strong>
        </h3>
        <p className='para'>
          Los fondos recaudados llegarán directamente a tu cuenta bancaria.
        </p>
        <p className='para'>
          Con GoCardless Pro y Enterprise, te enviaremos una factura
          con <Link to='pricing' title='Pricing' className='u-link-color-p u-text-underline'>tus comisiones</Link>.
        </p>
        <p className='para'>
          Con GoCardless, te deduciremos directamente las <Link to='pricing' title='Pricing' className='u-link-color-p u-text-underline'>
          comisiones</Link>.<br></br>
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
        <strong>
          ¿Cuándo recibo mi cobro?
        </strong>
        </h3>
        <p className='para'>
          Todos los cobros se pagan en un plazo de 3-4 días hábiles desde el momento de la recaudación.
        </p>
        <p className='para'>
          No mantenemos ninguno de tus fondos en reserva.<br></br>
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
        <strong>
          ¿Se aceptan tarjetas de crédito o de débito?
        </strong>
        </h3>
        <p className='para'>
          No, GoCardless es una compañía de Adeudo Directo y Domiciliación Bancaria.<br></br>
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
        <strong>
          ¿Por qué GoCardless es mejor que cualquier otra de las opciones que estoy considerando?
        </strong>
        </h3>
        <p className='para'>
          A continuación, detallamos algunos de los motivos por los que nos eligen:
        </p>

        <ul className='list'>
          <li>
            <strong>Administración reducida</strong> - Recauda automáticamente tus cobros recurrentes y
            puntuales, haciendo clic en un botón. Gestionamos todo lo demás por ti.
          </li>
          <IfLocale hasPercentagePricing>
            <li>
               <strong>Tarifas bajas y sencillas</strong> - Cobramos un <Link to='pricing'
               className='u-link-color-p u-text-underline'><Message pointer='pricing.per_transaction_amount_normal' /> por
               transacción</Link>, y nunca más de <Message pointer='pricing.cost_cap' />. También ofrecemos precio
               por volumen.
            </li>
          </IfLocale>
          <li>
            <strong>Potentes herramientas que se adaptan a tus necesidades</strong> - Tienes todo lo que necesitas para realizar,
            recaudar y gestionar cobros de Adeudo Directo con nuestro sencillo panel de control o <Href to='developer_link'
            className='u-link-color-p u-text-underline'>nuestra API REST</Href>.
          </li>
          <li>
            <strong>El toque personal</strong> - Nuestro equipo de asistencia se enorgullece de estar ahí siempre que nos necesites.
          </li>
        </ul>
      </Translation>
    );
  }
}
