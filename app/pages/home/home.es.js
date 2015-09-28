import React from 'react';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import Link from '../../components/link/link';
import Href from '../../components/href/href';

import CheckListIcon from '../../icons/svg/checklist';
import TickSquareIcon from '../../icons/svg/tick-square';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import UsersIcon from '../../icons/svg/users';

export default class HomeEs extends React.Component {
  displayName = 'HomeEs'

  render() {
    return (
      <Translation locales='es'>
        <div className='site-container u-text-center u-padding-Vxxl' id='learn-more'>
          <div className='u-padding-Vxl'>
            <div className='u-center'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light'>
                Nuestra red global de pagos ha procesado más de 1.000.000.000€
              </h2>
            </div>
            <div className='grid u-margin-Tl u-padding-Tm'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <CheckListIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <CheckListIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Completamente Automatizado
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Ahorra tiempo, reduce el error humano y evita cobros fallidos
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <MoneyFlowerIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <MoneyFlowerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Comisiones bájísimas
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Menos de la mitad de lo que cuesta Paypal o Paymill, con tarifas fáciles de entender.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <UsersIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <UsersIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  +12,000 empresas
                </div>
                <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                  Facilitando cobros para compañías a lo largo de todo Europa, ya sean grandes o pequeñas.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl u-background-light-gray'>
          <div className='site-container u-padding-Txl'>
            <div className='u-size-1of2 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                Estarás en buena compañía
              </h2>
            </div>
            <div className='u-text-center u-margin-Vl u-padding-Vs u-center'>
              <img src='/images/logos/pro-logos@2x.png' />
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-heading u-text-light u-text-l'>
                Precios simples y transparentes para todo el mundo
              </h2>
              <p className='u-text-s u-color-p u-margin-Vxs'>
                Tarifas competitivas para todos, desde individuos a grandes empresas
              </p>
              <Link to='pricing' className='btn btn--hollow u-margin-Tm'>
                Descubre más sobre nuestras tarifas
              </Link>
            </div>
          </div>
        </div>
        <IfLocale hasInstantSignup>
          <hr className='u-margin-An' />
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <Href to='signup.path' className='btn'>Empieza a cobrar a través de Domiciliación Bancaria</Href>
              <p className='u-color-p u-margin-Ts'>Sin costes por adelantado, sin comisiones encubiertas, sin compromiso</p>
            </div>
          </div>
        </IfLocale>
      </Translation>
    );
  }
}
