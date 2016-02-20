import React from 'react';
import Translation from '../../../components/translation/translation';

export default class LegalRestrictionsEs extends React.Component {
  displayName = 'LegalRestrictionsEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Actividades Restringidas</h2>
        <p className='para'>
          Esta es una lista de las actividades restringidas referidas en el Acuerdo para Empresas
          y en el Acuerdo para Clientes. Esta lista fue actualizada el 19 de Septiembre de 2014.
        </p>
        <p className='para'>
          Si realizas cualquiera de estas actividades, estarás rompiendo los términos de los
          Acuerdos y tu cuenta de GoCardless podrá ser suspendida y no podrás seguir utilizando
          el servicio de GoCardless. Esto podrá ocasionar que no puedas realizar cobros.
        </p>
        <p className='para'>Las actividades restringidas son:</p>
        <ul className='list'>
          <li>
            Usar el servicio de GoCardless en conexión o de alguna manera relacionado con una actividad que:
            <ul className='list u-margin-Tn'>
              <li>
                sea fraudulenta o ilegal;
              </li>
              <li>
                oculte tu identidad o de la impresión de que estás asociado o afiliado
                a una tercera parte si este no es el caso;
              </li>
              <li>
                vulnera cualquier ley o reguación aplicable a nivel local, nacional o internacional
                (incluyendo, pero no limitándose, a usar GoCardless en conexión con el suministro
                de bienes o servicios que vulneren esas leyes o regulaciones);
              </li>
              <li>
                podría razonablemente considerarse dañina, falsa, engañosa, ilegal, obscena
                defamatoria, difamatoria, amenazante, pornográfica, intimidante u odiosa;
              </li>
              <li>
                promueva la discriminación en base a la raza, religión, nacionalidad,
                discapacidad, orientación sexual o edad;
              </li>
              <li>
                promueva la violencia, drogas ilegales o cualquier otro tipo de actividad ilegal;
              </li>
              <li>
                infringe cualquier propiedad intelectual de terceras partes u otros derechos de
                propiedad bajo cualquier jurisdicción;
              </li>
              <li>
                vulnera la obligación o deber de confidencialidad;
              </li>
              <li>
                suponga juego de azar, consejos de apuestas, premios o cualquier forma de lotería; o
              </li>
              <li>
                invada la privacidad de cualquier persona.
              </li>
            </ul>
          </li>
          <li>
            Usar GoCardless para vender u ofrecer o tomar cobros para:
            <ul className='list u-margin-Tn'>
              <li>
                objetos que requieran una licencia o permiso por una tercera parte
                salvo que tengas dicha licencia;
              </li>
              <li>
                drogas o parafernalia de drogas;
              </li>
              <li>
                avances de nómina;
              </li>
              <li>
                consejos de apuestas o aseosramiento financiero no regulado;
              </li>
              <li>
                servicios de cambio de divisas;
              </li>
              <li>
                servicios de remesas de dinero;
              </li>
              <li>
                bienes de imitación incluidos pero no limitados los bolsos de diseño,
                ropa, accesorios y electrónica de consumo;
              </li>
              <li>
                garantías extendidas;
              </li>
              <li>
                servicios de recuperación de deudas;
              </li>
              <li>
                oportunidades de negocio, oportunidades de inversión, consultoría
                de hipotecas, servicios de refinanciación o consultoría de préstamos;
              </li>
              <li>
                tarjetas de movil prepago;
              </li>
              <li>
                apartamentos de tiempo compartido; o
              </li>
              <li>
                actividades de marketing como la compra de seguidores en twitter,
                Me gustas en Facebook o vistas en Youtube.
              </li>
            </ul>
          </li>
          <li>
            Acceder o intentar acceder a cualquier software subyacente al servicio de GoCardless.
          </li>
          <li>
            Cualquier intento de hacer daño a un menor.
          </li>
          <li>
            Con conocimiento o negligencia transmitir cualquier dato o material que contenga
            virus, caballos de troya, adware, spyware, gusanos, o cualquier otro tipo de
            software malicioso o programa diseñado para afectar negativamente la
            operación de software o hardware.
          </li>
          <li>
            Transmitir, enviar o subir cualquier anuncio o material promocional no solicitado
            o no autorizado.
          </li>
          <li>
            Usar el servicio de GoCardless para cobrar, intentar cobrar o transmitir por
            la información personal de cualquier persona sin su consentimiento.
          </li>
          <li>
            Usar el servicio de GoCardless si eres menor de 18 años (18).
          </li>
          <li>
            Usar el servicio de GoCardless para actuar como una entidad bancaria privada.
          </li>
          <li>
            Usar el servicio de GoCardless para realizar cobros por adelantado de bienes o
            servicios que no serán provistas hasta un momento significativamente posterior.
          </li>
          <li>
            Usar el servicio de GoCardless en cualquier manera que pudiera ser razonablemente
            esperable que le dañase, deshabilitase, sobrecargase o le estropease, incluyendo,
            sin limitación, usar GoCardless de forma automatizada.
          </li>
          <li>
            Usar el servicio de GoCardless de manera que GoCardless pudiera creer razonablemente
            que habría un abuso del sistema. Esto incluye el sistema de afiliados de GoCardless.
          </li>
          <li>
            Usar el servicio de GoCardless de manera que fuese probable que resultase en una
            responsabilidad de GoCardless o de cualquier otra tercera parte, incluyendo un
            resultado que genere quejas, disputas, devoluciones, comisiones, multas o penalizaciones.
          </li>
          <li>
            Usar el servicio de GoCardless para controlar una cuenta que está unida a otra
            cuenta de usuarios que han estado involucrados en las actividades aquí
            mencionadas.
          </li>
          <li>
            Usar el servicio de GoCardless para cobrar pagos que soporten esquemas ponzi
            o piramidales, esquemas de matriz, otros esquemas de "hazte rico rápido" o
            ciertos programas de marketing multi-nivel.
          </li>
          <li>
            Usar el servicio de GoCardless para transferir cobros entre cuentas o en la misma
            cuenta perteneciente a un mismo beneficiario.
          </li>
          <li>
            Usar el servicio de GoCardless para completar un Mandato SEPA en representación
            de otra parte.
          </li>
        </ul>
      </Translation>
    );
  }
}
