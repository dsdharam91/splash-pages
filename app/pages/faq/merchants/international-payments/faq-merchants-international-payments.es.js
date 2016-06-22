import React from 'react';
import Translation from '../../../../components/translation/translation';
import Message from '../../../../components/message/message';

export default class FaqMerchantsInternationalPaymentsEs extends React.Component {
  displayName = 'FaqMerchantsInternationalPaymentsEs'

  render() {
    return (
      <Translation locales='es'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>International payments</h2>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Desde qué países de Europa puedo cobrar?
        </h3>
        <p className='para'>
          Puedes realizar cobros de Adeudo Directo desde los siguientes países: Austria, Bélgica, Chipre, Estonia, Finlandia,
          Francia, Alemania, Grecia, Irlanda, Italia, Letonia, Luxemburgo, Malta, Mónaco, Países Bajos, Portugal, San Marino,
          Eslovaquia, Eslovenia, España, Suecia y Reino Unido.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Qué divisas admite GoCardless?
        </h3>
        <p className='para'>
          Admitimos cobros en GBP, EUR y SEK.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Qué es el Adeudo Directo SEPA?
        </h3>
        <p className='para'>
          El Adeudo Directo SEPA permite realizar cobros denominados en euros de una cuenta bancaria en
          el <a href='https://gocardless.com/es/guias/sepa/que-es-sepa/' target='_blank'
          className='u-link-color-p u-text-underline'>la zona única de pagos en euros (SEPA)</a>.
          Encontrarás más información en <a href='https://gocardless.com/es/guias/sepa/'
          className='u-link-color-p u-text-underline'>nuestra guía de Adeudo Directo SEPA</a>.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Qué es el Adeudo Directo Bacs?
        </h3>
        <p className='para'>
          El Adeudo Directo Bacs es el equivalente en Reino Unido al Adeudo Directo SEPA. Permite recaudar cobros denominados en
          libras de cuentas bancarias de Reino Unido. Encontrarás más información en <a href='/direct-debit/'
          className='u-link-color-p u-text-underline'>nuestra guía de Adeudo Directo Bacs</a>.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Qué es Autogiro Bg?
        </h3>
        <p className='para'>
          Autogiro Bg te permite realizar cobros denominados en coronas de cuentas bancarias de Suecia.
          Encontrarás más información en <a href='/guides/bg-autogiro/'
          className='u-link-color-p u-text-underline'>nuestra guía de Autogiro Bg</a>.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Costarán los cobros internacionales lo mismo que en <Message pointer='country' />?
        </h3>
        <p className='para'>
          En los países de la Eurozona, cobraremos un 1 % por transacción, con un límite de 2 euros.
          En el Reino Unido, cobraremos un 1 % por transacción (con un límite de 2 libras). En Suecia,
          cobraremos un 1 % por transacción (con un límite de 20 coronas).
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          ¿Cuándo estará disponible GoCardless fuera de Europa?
        </h3>
        <p className='para'>
          Estamos trabajando duro para expandir pronto nuestro servicio a más países.
        </p>
      </Translation>
    );
  }
}
