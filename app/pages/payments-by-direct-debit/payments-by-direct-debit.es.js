import React from 'react';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
import ClockIcon from '../../icons/svg/clock';
import ImproveCashflowIcon from '../../icons/svg/improve-cashflow';
import CheckListIcon from '../../icons/svg/checklist';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import Translation from '../../components/translation/translation';

export default class PaymentsByDirectDebitEs extends React.Component {
  displayName = 'PaymentsByDirectDebitEs'

  render() {
    return (
      <Translation locales='es'>
        <Page>
          <div className='page-hero u-padding-Bxxl'>
            <div className='site-container u-padding-Vxxl u-text-center'>
              <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
                Haz tus cobros recurrentes por Internet a través de la Domiciliación Bancaria de GoCardless
              </h1>
              <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
                No vuelvas a tener retrasos en los pagos. Empieza a cobrar de forma automática en menos de 2 minutos.
              </p>
            </div>
          </div>
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <div className='grid u-center u-text-center'>
                <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                  <figure className='svg-icon u-center'>
                    <ImproveCashflowIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                    <ImproveCashflowIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Gestiona tus cobros automáticamente
                  </h3>
                  <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                    Sigue cada cobro desde tu panel de control y consulta si ya han pagado, reintenta pagos fallidos o
                    devuelve el dinero a tus clientes en un solo click.
                  </p>
                </div>
                <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                  <figure className='svg-icon u-center'>
                    <ClockIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                    <ClockIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Reduce el tiempo de administración
                  </h3>
                  <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                    Olvídate de entrar en tu banca online cada día para enviar Remesas o saber el estado de tus cobros.
                    Administra tu cuenta online y recibe emails sobre impagos o el resumen de cada mes.
                  </p>
                </div>
                <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                  <figure className='svg-icon u-center'>
                    <CheckListIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <CheckListIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Crea tu propia página de cobro online al instante
                  </h3>
                  <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                    En menos de 2 minutos, podrás empezar a cobrar tus suscripciones o planes en tu web, personalizadas a tus tarifas y con tu logo.
                  </p>
                </div>
              </div>
              <div className='u-padding-Tm u-margin-Tm u-text-center'>
                <Href to='signup.path' className='btn u-padding-Hl'>Regístrate ahora</Href>
                <Link to='features' className='btn u-padding-Hl btn--hollow u-margin-Lm'>Descubre más</Link>
              </div>
            </div>
          </div>

          <hr className='u-margin-An' />
          <div className='site-container u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-text-center'>
                GoCardless ayuda a más de <Message pointer='number_of_merchants' /> empresas con sus Domiciliaciones Bancarias Online.
              </h2>
              <div className='u-text-center u-margin-Tl u-padding-Vs u-center'>
                <img src='/images/logos/pro-logos@2x.png' />
              </div>
            </div>
          </div>

          <hr className='u-margin-An' />
          <div className='site-container u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-text-center'>
                GoCardless hace el cobrar más fácil que nunca
              </h2>
              <div className='grid u-center u-text-center u-padding-Tl u-margin-Ts'>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m'>Abre una cuenta al momento</h3>
                  <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                    Crea una cuenta, introduce el banco donde recibir el dinero y
                    empieza a realizar cobros en solo 2 minutos.</p>
                </div>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m'>Se integra con tu software</h3>
                  <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                    GoCardless se integra con los mejores softwares de contabilidad y también en tu software.</p>
                </div>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m'>
                    Únete a <Message pointer='number_of_merchants' />+ empresas
                  </h3>
                  <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                    Hemos movido más de <Message pointer='payments_processed_volume' /> para
                    más de <Message pointer='number_of_merchants' /> empresas.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className='u-margin-An' />
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl u-text-center u-center'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-text-center u-margin-Bl'>
                Sólo se tarda 2 minutos en abrir una cuenta
              </h2>
              <Href to='signup.path' className='btn'>Empieza a cobrar</Href>
              <p className='u-color-p u-margin-Ts'>No hay costes de Setup, ni mensualidades ni costes ocultos</p>
              <hr className='u-size-1of2 u-center u-margin-Vxxl' />
              <p className='u-color-p'><strong>¿Quieres hablar con alguien primero?</strong><br />
                Llama a nuestros expertos al <Message pointer='phone_local' /><br />
                Estamos disponibles de 10.00 a 19.00 de Lunes a Viernes<br />
                También puedes <Link to='contact_sales' className='u-link-color-p u-text-underline'>pedir que alguien de nuestro equipo te llame</Link>.
              </p>
            </div>
          </div>
        </Page>
      </Translation>
    );
  }
}
