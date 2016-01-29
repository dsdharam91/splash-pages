import React from 'react';
import XIcon from '../../icons/svg/x';
import CheckMarkIcon from '../../icons/svg/checkmark';
import Message from '../../components/message/message';
import Translation from '../../components/translation/translation';
import IfLocale from '../../components/if-locale/if-locale';
import IfLinkExists from '../../components/if-link-exists/if-link-exists';

export default class ProductComparisonFr extends React.Component {
  displayName = 'ProductComparisonFr'

  render() {
    return (
      <Translation locales='fr'>
        <IfLinkExists to='features'>
          <IfLinkExists to='pro'>
            <table className='u-size-full'>
              <thead>
                <tr>
                  <th />
                  <th className='u-background-primary u-text-heading-light u-color-invert u-padding-Am u-border-gray'>
                    <div className='u-text-l u-margin-Bxxs'>GoCardless</div>
                    Prélevez facilement et rapidement
                  </th>
                  <th className='u-background-dark-gray-darken u-text-heading-light u-color-invert u-padding-Am u-border-gray'>
                    <div className='u-text-l u-margin-Bxxs'>GoCardless Pro</div>
                    Prenez le contrôle du prélèvement
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Pour qui est-ce ?</td>
                  <td className='comparison-table__cell'>TPEs et PMEs souhaitant un accès rapide et simplifié</td>
                  <td className='comparison-table__cell'>Pour les entreprises souhaitant un contrôle total et personalisé</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Tableau de bord en ligne</td>
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
                  <td className='comparison-table__cell u-text-end'>Migration de mandats existants</td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Obtenez votre propre ICS</td>
                  <td className='comparison-table__cell'>
                    <XIcon className='u-fill-dark-gray' alt='✘' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Créez vos propres pages de paiement</td>
                  <td className='comparison-table__cell'>
                    <XIcon className='u-fill-dark-gray' alt='✘' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Gérez des filiales multiples</td>
                  <td className='comparison-table__cell'>
                    <XIcon className='u-fill-dark-gray' alt='✘' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Chargé de compte</td>
                  <td className='comparison-table__cell'>
                    <XIcon className='u-fill-dark-gray' alt='✘' />
                  </td>
                  <td className='comparison-table__cell'>
                    <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                  </td>
                </tr>
                <IfLocale hasInstantSignup>
                  <tr className='comparison-table__row'>
                    <td className='comparison-table__cell u-text-end'>Accès instantané</td>
                    <td className='comparison-table__cell'>
                      <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
                    </td>
                    <td className='comparison-table__cell'>
                      <XIcon className='u-fill-dark-gray' alt='✘' />
                    </td>
                  </tr>
                </IfLocale>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Vous êtes situés...</td>
                  <td className='comparison-table__cell'>Dans l'UE</td>
                  <td className='comparison-table__cell'>Dans le monde entier</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Prenez vos paiements...</td>
                  <td className='comparison-table__cell'>Dans 22 pays (Eurozone et GB)</td>
                  <td className='comparison-table__cell'>Dans 22 pays (Eurozone et GB)</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Mandats</td>
                  <td className='comparison-table__cell'>Internet</td>
                  <td className='comparison-table__cell'>Internet, téléphone et papier</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Nombre de paiements par mois</td>
                  <td className='comparison-table__cell'>>0</td>
                  <td className='comparison-table__cell'>>500</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Abonnement mensuel</td>
                  <td className='comparison-table__cell'>0€</td>
                  <td className='comparison-table__cell'><Message pointer='pricing.pro_monthly_fee' /></td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Frais par transaction</td>
                  <td className='comparison-table__cell'>1% plafonné à 2 €</td>
                  <td className='comparison-table__cell'>Dégressif à partir de 0,60 €</td>
                </tr>
                <tr className='comparison-table__row'>
                  <td className='comparison-table__cell u-text-end'>Frais de rejet</td>
                  <td className='comparison-table__cell'>Gratuit</td>
                  <td className='comparison-table__cell'>Gratuit</td>
                </tr>
              </tbody>
            </table>
          </IfLinkExists>
        </IfLinkExists>
      </Translation>
    );
  }
}
