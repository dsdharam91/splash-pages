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
          y en el Acuerdo para Clientes. Esta lista fue actualizada el 3 de Febrero de 2016.
        </p>
        <p className='para'>
          Si realizas cualquiera de estas actividades, estarás rompiendo tus acuerdos con GoCardless,
          tanto si es el acuerdo de Empresas, el acuerdo de Asociados, el acuerto de clientes o
          cualquier otro acuerdo con Gocardless y puede que tu cuenta sea suspendida y no puedas
          utilizar el servicio de GoCardless. Esto puede suponer que no puedas recibir cobros, o
          hacer pagos a los destinatarios correspondientes. Bajo ninguna circunstancia podrás usar
          el servicio de GoCardless si tienes menos de 18 años.
        </p>
        <p className='para'>Las actividades restringidas que afectan a todos los usuarios de
        GoCardless - tanto clientes, Empresas o Asociados son:</p>
        <ul className='list'>
          <li>
            Usar o intentar usar (o si eres un asociado, permitir que cualquier persona use)
            el servicio de GoCardless en conexión o de alguna manera relacionado con una actividad que:
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
                suponga juego de azar, consejos de apuestas, premios o cualquier forma de lotería;
              </li>
              <li>
                invada la privacidad de cualquier persona;
              </li>
              <li>
                con conocimiento o negligencia transmitir cualquier dato o material que contenga
                virus, caballos de troya, adware, spyware, gusanos, o cualquier otro tipo de
                software malicioso o programa diseñado para afectar negativamente la
                operación de software o hardware;
              </li>
              <li>
                recopile, o transmita información personal de cualquier persona sin su consentimiento;
              </li>
              <li>
                transmita, envíe o suba cualquier anuncio o material promocional no solicitado
                o no autorizado;
              </li>
              <li>
                pudiera ser razonablemente esperable que le dañase, deshabilitase, sobrecargase o
                le estropease, incluyendo, sin limitación, usar GoCardless de forma automatizada;
              </li>
              <li>
                GoCardless pudiera creer razonablemente que habría un abuso del sistema.
                Esto incluye el sistema de afiliados de GoCardless;
              </li>
              <li>
                fuese probable que resultase en una responsabilidad de GoCardless o de cualquier
                otra tercera parte, incluyendo un resultado que genere quejas, disputas,
                devoluciones, comisiones, multas o penalizaciones;
              </li>
              <li>
                haga parecer que actúa como un banco privado u otra entidad de pago;
              </li>
              <li>
                controle una cuenta que está unida a otra cuenta de usuarios que han
                estado involucrados en las actividades aquí mencionadas;
              </li>
              <li>
                soporten esquemas ponzi o piramidales, esquemas de matriz, otros esquemas
                de "hazte rico rápido" o ciertos programas de marketing multi-nivel;
              </li>
              <li>
                transfiera cobros desde y para la misma cuenta o entre cuentas perteneciente
                a un mismo beneficiario;
              </li>
              <li>
                resulte en completar un Mandato SEPA en representación
                de otra parte.
              </li>
              <li>
                acceda o intente acceder a cualquier software subyacente al servicio de
                GoCardless; o
              </li>
              <li>
                puedan resultar en el daño, o el intento de hacer daño a cualquier menor.
              </li>
            </ul>
          </li>
          <li>
        <p className='para'>
          Además, las actividades restringidas que afectan a los usuarios del servicios
          de GoCardless que determinan sobre lo que se puede realizar cobros (para Empresas)
          o que son responsables por lo que otros realizan cobros (esto son los asociados,
          tanto para si mismo como para las Empresas que se registran a través del asociado)
          incluyen lo siguiente, salvo pacto en contrario en un contrato con GoCardless:
        </p>
        <ul className='list'>
          <li>
            Usar GoCardless para vender, ofrecer o tomar cobros para:
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
                apuestas o servicios relacionados;
              </li>
              <li>
                productos financieros, incluyendo o los similares a derivados de FOREX,
                apuestas de spread o contratos por diferencia;
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
               oportunidades de negocio u oportunidades de inversión, inluyendo el Crowdfunding,
               y consejos o servicios de gestión relacionados con cualquiera de estas
               oportunidades;
              </li>
              <li>
                consultoría de hipotecas, servicios de refinanciación o consultoría
                de préstamos;
              </li>
              <li>
                cualquier servicio u objetivo que almacene valor en efectivo o en forma similar
                al efectivo, incluyendo ewallets, tarjetas prepago (incluyendo tarjetas de movil
                prepago) o cualquier otra forma de valor almacenado, tanto si puede como si no ser
                transformado en efectivo;
              </li>
              <li>
                apartamentos de tiempo compartido;
              </li>
              <li>
                bienes o servicios que no serán provistas hasta un momento significativamente
                posterior.
              </li>
              <li>
                actividades de marketing como la compra de seguidores en twitter,
                Me gustas en Facebook o vistas en Youtube.
              </li>
            </ul>
          </li>
        </ul>
      </Translation>
    );
  }
}
