import React from 'react';
import XIcon from '../../icons/svg/x';
import CheckMarkIcon from '../../icons/svg/checkmark';
import Message from '../../components/message/message';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import IfLinkExists from '../../components/if-link-exists/if-link-exists';

export default class ProductComparisonDe extends React.Component {
  displayName = 'ProductComparisonDe'

  render() {
    return (
      <Translation locales='de'>
        <IfLinkExists to='features'>
          <IfLinkExists to='pro'>
            <table className='u-size-full'>
              <thead>
                <tr>
                  <th />
                  <th className='u-background-primary u-text-heading-light u-color-invert u-padding-Am u-border-gray'>
                    <div className='u-text-l u-margin-Bxxs'>GoCardless</div>
                    Ganz einfache online Zahlungen
                  </th>
                  <th className='u-background-xdark-gray u-text-heading-light u-color-invert u-padding-Am u-border-gray'>
                    <div className='u-text-l u-margin-Bxxs'>GoCardless Pro</div>
                    Volle Kontrolle über Lastschriften
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Für wen?</td>
                  <td className='comparison-table__cell'>Kleine und mittelständische Unternehmen</td>
                  <td className='comparison-table__cell'>Unternehmen, die volle Kontrolle wünschen</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Online-Dashboard</td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>REST API</td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Automatische Übertragung existierender Lastschriften</td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Erhalt Ihrer eigenen Gläubiger-ID</td>
                  <td className='comparison-table__cell'>
                    <XIcon className='u-fill-dark-gray' alt='✘' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Erstellen Ihrer eigenen Zahlungsformulare</td>
                  <td className='comparison-table__cell'>
                    <XIcon className='u-fill-dark-gray' alt='✘' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <IfLocale hasInstantSignup>
                  <tr className='comparison-table__row'>
                    <td className='comparison-table__cell u-text-end'>Sofortige Online-Einrichtung und Genehmigung</td>
                    <td className='comparison-table__cell'>
                      <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                    </td>
                    <td className='comparison-table__cell'>
                      <XIcon className='u-fill-dark-gray' alt='✘' />
                    </td>
                  </tr>
                </IfLocale>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Unterstützt Unternehmen in...</td>
                  <td className='comparison-table__cell'>In der EU</td>
                  <td className='comparison-table__cell'>Weltweit</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Zahlungen einziehen in...</td>
                  <td className='comparison-table__cell'>22 Ländern (Eurozone + UK)</td>
                  <td className='comparison-table__cell'>22 Ländern (Eurozone + UK)</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Mandate einholen</td>
                  <td className='comparison-table__cell'>Online</td>
                  <td className='comparison-table__cell'>Online, schriftlich, telefonisch</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Zahl der Transaktionen pro Monat</td>
                  <td className='comparison-table__cell'>>0</td>
                  <td className='comparison-table__cell'>>500</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Monatliche Gebühr</td>
                  <td className='comparison-table__cell'>Keine</td>
                  <td className='comparison-table__cell'><Message pointer='pricing.pro_monthly_fee' /></td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Gebühren pro Transaktion</td>
                  <td className='comparison-table__cell'><Message pointer='pricing.per_transaction_amount_normal' />
                  bis höchstens <Message pointer="pricing.cost_cap" /></td>
                  <td className='comparison-table__cell'><Message pointer='pricing.pro_cost_per_transaction' /> je nach Anzahl der Transaktionen</td>
                </tr>
              </tbody>
            </table>
          </IfLinkExists>
        </IfLinkExists>
      </Translation>
    );
  }
}
