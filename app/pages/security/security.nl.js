import React from 'react';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import Href from '../../components/href/href';

export default class SecurityNl extends React.Component {
  displayName = 'SecurityNl'

  render() {
    return (
      <Translation locales='nl'>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-center u-padding-Vxm'>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>
                FCA vergunning
              </h2>
              <p className='u-size-2of3 u-center u-color-dark-gray u-margin-Txs'>
                <Message pointer='security.fca_authorised_byline' />
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>
                Duizenden organisaties vertrouwen op ons
              </h2>
              <p className='u-size-2of3 u-center u-color-dark-gray u-margin-Txs'>
                <Message pointer='security.trusted_by_thousands_byline' />
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>
                Vooraanstaande investeerders
              </h2>
              <p className='u-size-2of3 u-center u-color-dark-gray u-margin-Txs'>
                Onder andere Balderton Capital en Accel Partners hebben in GoCardless geïnvesteerd.
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>
                <Message pointer='security.consumer_protection_title' />
              </h2>
              <p className='u-size-2of3 u-center u-color-dark-gray u-margin-Txs'>
                Gaat er iets mis met een transactie? Betalers mogen het bedrag direct terugboeken.
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>
                Beveiligd op het hoogste niveau
              </h2>
              <p className='u-size-2of3 u-center u-color-dark-gray u-margin-Txs'>
                We slaan alle gevoelige gegevens op met RSA encryptie en communiceren uitsluitend via veilige kanalen.
              </p>
            </div>
            <div className='grid__cell u-text-center u-size-1of2 u-padding-Vxl'>
              <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>
                Gewaarborgde bankrekeningen
              </h2>
              <p className='u-size-2of3 u-center u-color-dark-gray u-margin-Txs'>
                Geld geïncasseerd door GoCardless wordt bewaard in een gewaarborgde derdengeldenrekening.
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
              <p className='u-color-dark-gray u-margin-Ts'>Geen opstartkosten, verborgen kosten of verplichtingen</p>
            </div>
          </div>
        </IfLocale>
        <IfLocale hasInstantSignup={false}>
          <div className='site-container u-text-center u-padding-Tm u-padding-Bxxl'>
            <div className='u-padding-Vxl'>
              <h2 className='u-text-heading u-text-l u-color-dark-gray u-text-light'>Vragen?</h2>
              <p className='u-color-dark-gray u-margin-Ts'>Neem contact met ons op via <Message pointer='phone_local' /></p>
              <Link to='contact_sales' className='btn btn--hollow u-margin-Tm'>Neem contact op</Link>
            </div>
          </div>
        </IfLocale>
      </Translation>
    );
  }
}
