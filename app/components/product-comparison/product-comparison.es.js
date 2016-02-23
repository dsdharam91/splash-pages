import React from 'react';
import XIcon from '../../icons/svg/x';
import CheckMarkIcon from '../../icons/svg/checkmark';
import Message from '../../components/message/message';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import IfLinkExists from '../../components/if-link-exists/if-link-exists';

export default class ProductComparisonEs extends React.Component {
  displayName = 'ProductComparisonEs'

  render() {
    return (
      <Translation locales='es'>
        <IfLinkExists to='features'>
          <IfLinkExists to='pro'>
            <table className='u-size-full'>
              <thead>
                <tr>
                  <th />
                  <th className='u-background-primary u-text-heading-light u-color-invert u-padding-Am u-border-gray'>
                    <div className='u-text-l u-margin-Bxxs'>GoCardless</div>
                    Cobra de forma sencilla y rápida
                  </th>
                  <th className='u-background-xdark-gray u-text-heading-light u-color-invert u-padding-Am u-border-gray'>
                    <div className='u-text-l u-margin-Bxxs'>GoCardless Pro</div>
                    Controla totalmente tus Domiciliaciones
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>¿Para quién es?</td>
                  <td className='comparison-table__cell'>Pymes que quieren acceso rápido y sencillo</td>
                  <td className='comparison-table__cell'>Empresas que quieran personalización y control total</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Panel de Control Online</td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>API REST</td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Migración de los mandatos existentes</td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Obten tu propio Id de Acreedor</td>
                  <td className='comparison-table__cell'>
                    <XIcon className='u-fill-dark-gray' alt='✘' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Crea tus propias páginas de pago</td>
                  <td className='comparison-table__cell'>
                    <XIcon className='u-fill-dark-gray' alt='✘' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Gestión de empresas filiales</td>
                  <td className='comparison-table__cell'>
                    <XIcon className='u-fill-dark-gray' alt='✘' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Administrador de Cuenta</td>
                  <td className='comparison-table__cell'>
                    <XIcon className='u-fill-dark-gray' alt='✘' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <IfLocale hasInstantSignup>
                  <tr className='comparison-table__row'>
                    <td className='comparison-table__cell u-text-end'>Acceso Instantáneo</td>
                    <td className='comparison-table__cell'>
                      <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                    </td>
                    <td className='comparison-table__cell'>
                      <XIcon className='u-fill-dark-gray' alt='✘' />
                    </td>
                  </tr>
                </IfLocale>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Tu estás...</td>
                  <td className='comparison-table__cell'>En la UE</td>
                  <td className='comparison-table__cell'>En todo el Mundo</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Acepta tus cobros...</td>
                  <td className='comparison-table__cell'>De 23 países (Eurozona, R.U. y Suecia)</td>
                  <td className='comparison-table__cell'>De 23 países (Eurozona, R.U. y Suecia)</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Mandatos</td>
                  <td className='comparison-table__cell'>Internet</td>
                  <td className='comparison-table__cell'>Internet, teléfono y papel</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Número de cobros al mes</td>
                  <td className='comparison-table__cell'>>0</td>
                  <td className='comparison-table__cell'>>500</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Cuota Mensual</td>
                  <td className='comparison-table__cell'>0€</td>
                  <td className='comparison-table__cell'><Message pointer='pricing.pro_monthly_fee' /></td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Precio por transacción</td>
                  <td className='comparison-table__cell'>1% máximo de 2 €</td>
                  <td className='comparison-table__cell'>Decreciente a partir de 0,60 €</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Precio por devoluciones o errores</td>
                  <td className='comparison-table__cell'>Gratis</td>
                  <td className='comparison-table__cell'>Gratis</td>
                </tr>
              </tbody>
            </table>
          </IfLinkExists>
        </IfLinkExists>
      </Translation>
    );
  }
}
