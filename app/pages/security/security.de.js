import React from 'react';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import Message from '../../components/message/message';
import Link from '../../components/link/link';

export default class SecurityDe extends React.Component {
  displayName = 'SecurityDe'

  render() {
    return (
      <Translation locales='de'>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-center u-padding-Vxm'>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>
                Authorisiert von der FCA
              </h2>
              <p className='u-size-2of3 u-center u-color-dark-gray u-margin-Txs'>
                <Message pointer='security.fca_authorised_byline' />
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>
                Tausende Kunden vertrauen uns
              </h2>
              <p className='u-size-2of3 u-center u-color-dark-gray u-margin-Txs'>
                <Message pointer='security.trusted_by_thousands_byline' />
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>
                Von hochrangingen Investoren unterstützt
              </h2>
              <p className='u-size-2of3 u-center u-color-dark-gray u-margin-Txs'>
                Balderton Capital und Accel Partners gehören zu den Investoren von GoCardless.
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>
                <Message pointer='security.consumer_protection_title' />
              </h2>
              <p className='u-size-2of3 u-center u-color-dark-gray u-margin-Txs'>
                Falls bei einer Zahlung irgendetwas schief geht, stehen dem Zahlenden sofortige
                Rückerstattungen zu.
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>
               Verschlüsselung wie beim Militär
              </h2>
              <p className='u-size-2of3 u-center u-color-dark-gray u-margin-Txs'>
                Alle vertraulichen Informationen sind RSA verschlüsselt und werden ausschließlich
                über sichere Kanäle kommuniziert.
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>
                Geschützte Bankkonten
              </h2>
              <p className='u-size-2of3 u-center u-color-dark-gray u-margin-Txs'>
                Geld, das von GoCardless eingezogen wird, wird in designierten Konten für
                unsere Kundengelder aufbewahrt.
              </p>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <IfLocale hasInstantSignup>
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <a href='/merchants/new' className='btn'>
                <Message pointer='cta.basic' />
              </a>
              <p className='u-color-dark-gray u-margin-Ts'>Keine Anschlussgebühr, keine versteckten Kosten, keine Verpflichtungen.</p>
            </div>
          </div>
        </IfLocale>
        <IfLocale hasInstantSignup={false}>
          <div className='site-container u-text-center u-padding-Tm u-padding-Bxxl'>
            <div className='u-padding-Vxl'>
              <h2 className='u-text-heading u-text-l u-color-dark-gray u-text-light'>Haben Sie Fragen?</h2>
              <p className='u-color-dark-gray u-margin-Ts'>Sprechen Sie mit einem unserer Experten unter <Message pointer='phone_local' /></p>
              <Link to='contact_sales' query={{ s: 'security' }} className='btn btn--hollow u-margin-Tm'>Fragen Sie uns</Link>
            </div>
          </div>
        </IfLocale>
      </Translation>
    );
  }
}
