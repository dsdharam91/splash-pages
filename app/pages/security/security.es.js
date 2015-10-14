import React from 'react';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import Href from '../../components/href/href';

export default class SecurityEs extends React.Component {
  displayName = 'SecurityEs'

  render() {
    return (
      <Translation locales='es'>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-center u-padding-Vxm'>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-heading'>
                Autorizado por la FCA
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-margin-Txs'>
                <Message pointer='security.fca_authorised_byline' />
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-heading'>
                Miles confían en nosotros
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-margin-Txs'>
                <Message pointer='security.trusted_by_thousands_byline' />
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-heading'>
                Financiada por prestigiosos inversores
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-margin-Txs'>
                Balderton Capital y Accel Partners son algunos de los inversores de GoCardless.
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-heading'>
                <Message pointer='security.consumer_protection_title' />
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-margin-Txs'>
                Si algo va mal con una transacción, los pagadores obtendran una devolución inmediata.
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-heading'>
                Encriptación de grado Militar
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-margin-Txs'>
                Todos los datos importantes están encriptados con RSA, y solo nos comunicamos por canales seguros.
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-heading'>
                Cuentas bancarias seguras
              </h2>
              <p className='u-size-2of3 u-center u-color-p u-margin-Txs'>
                El dinero recogido por GoCardless se guarda en cuentas desigandas a cada cliente.
              </p>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <IfLocale hasInstantSignup>
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <Href to='signup.path' className='btn'>
                <Message pointer='cta.basic' />
              </Href>
              <p className='u-color-p u-margin-Ts'>Sin costes por adelantado, sin comisiones ocultas, sin compromiso</p>
            </div>
          </div>
        </IfLocale>
        <IfLocale hasInstantSignup={false}>
          <div className='site-container u-text-center u-padding-Tm u-padding-Bxxl'>
            <div className='u-padding-Vxl'>
              <h2 className='u-text-heading u-text-l u-color-heading u-text-light'>¿Alguna pregunta?</h2>
              <p className='u-color-p u-margin-Ts'>Habla con uno de nuestros expertos en <Message pointer='phone_local' /></p>
              <Link to='contact_sales' query={{ s: 'security' }} className='btn btn--hollow u-margin-Tm'>Contacta con nosotros</Link>
            </div>
          </div>
        </IfLocale>
      </Translation>
    );
  }
}
