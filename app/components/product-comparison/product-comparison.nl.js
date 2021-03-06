import React from 'react';
import XIcon from '../../icons/svg/x';
import CheckMarkIcon from '../../icons/svg/checkmark';
import Message from '../../components/message/message';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import IfLinkExists from '../../components/if-link-exists/if-link-exists';

export default class ProductComparisonNl extends React.Component {
  displayName = 'ProductComparisonNl'

  render() {
    return (
      <Translation locales='nl'>
        <IfLinkExists to='features'>
          <IfLinkExists to='pro'>
            <table className='u-size-full'>
              <thead>
                <tr>
                  <th />
                  <th className='u-background-primary u-text-heading-light u-color-invert u-padding-Am u-border-gray'>
                    <div className='u-text-l u-margin-Bxxs'>GoCardless</div>
                    Super simpele online betalingen
                    <br />&nbsp;
                  </th>
                  <th className='u-background-xdark-gray u-text-heading-light u-color-invert u-padding-Am u-border-gray'>
                    <div className='u-text-l u-margin-Bxxs'>GoCardless Pro</div>
                    <Translation locales='nl-NL'>
                      Volledige controle over automatische incasso
                    </Translation>
                    <Translation locales='nl-BE'>
                      Volledige controle over je domiciliëringen
                    </Translation>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Voor wie?</td>
                  <Translation locales='nl-NL'>
                    <td className='comparison-table__cell'>MKB</td>
                  </Translation>
                  <Translation locales='nl-BE'>
                    <td className='comparison-table__cell'>KMO</td>
                  </Translation>
                  <td className='comparison-table__cell'>Bedrijven die volledige controle willen</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Online dashboard</td>
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
                  <Translation locales='nl-NL'>
                  <td className='comparison-table__cell u-text-end'>Automatisch overzetten huidige machtigingen</td>
                  </Translation>
                  <Translation locales='nl-BE'>
                  <td className='comparison-table__cell u-text-end'>Automatisch overzetten huidige mandaten</td>
                  </Translation>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <tr className='comparison-table__row'>
                  <Translation locales='nl-NL'>
                  <td className='comparison-table__cell u-text-end'>Eigen incassant-ID</td>
                  </Translation>
                  <Translation locales='nl-BE'>
                  <td className='comparison-table__cell u-text-end'>Eigen schuldeisersnummer</td>
                  </Translation>
                  <td className='comparison-table__cell'>
                    <XIcon className='u-fill-dark-gray' alt='✘' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Creëer je eigen betalingspagina's</td>
                  <td className='comparison-table__cell'>
                    <XIcon className='u-fill-dark-gray' alt='✘' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <IfLocale hasInstantSignup>
                  <tr className='comparison-table__row'>
                    <td className='comparison-table__cell u-text-end'>Direct starten</td>
                    <td className='comparison-table__cell'>
                      <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                    </td>
                    <td className='comparison-table__cell'>
                      <XIcon className='u-fill-dark-gray' alt='✘' />
                    </td>
                  </tr>
                </IfLocale>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Ondersteunt bedrijven in...</td>
                  <td className='comparison-table__cell'>EU</td>
                  <td className='comparison-table__cell'>Wereldwijd</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Accepteer betalingen uit...</td>
                  <td className='comparison-table__cell'>23 landen (Eurozone, UK, Zweden)</td>
                  <td className='comparison-table__cell'>23 landen (Eurozone, UK, Zweden)</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Manier van machtigen</td>
                  <td className='comparison-table__cell'>Online</td>
                  <td className='comparison-table__cell'>Online, papier, telefoon</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Aantal transacties per maand</td>
                  <td className='comparison-table__cell'>>0</td>
                  <td className='comparison-table__cell'>>500</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Maandelijkse kosten</td>
                  <td className='comparison-table__cell'>€ 0</td>
                  <td className='comparison-table__cell'><Message pointer='pricing.pro_monthly_fee' /></td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Kosten per transactie</td>
                  <td className='comparison-table__cell'>
                    <Message pointer='pricing.per_transaction_amount_normal'/> tot maximaal <Message
                    pointer="pricing.cost_cap" />
                    </td>
                  <td className='comparison-table__cell'><Message pointer='pricing.pro_cost_per_transaction'/> afhankelijk van het aantal transacties</td>
                </tr>
              </tbody>
            </table>
          </IfLinkExists>
        </IfLinkExists>
      </Translation>
    );
  }
}
