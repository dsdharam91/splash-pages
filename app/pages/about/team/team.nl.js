import React from 'react';
import Translation from '../../../components/translation/translation';
import { team } from '../../../constants/team';

export default class TeamNl extends React.Component {
  displayName = 'TeamNl'

  render() {
    return (
      <Translation locales='nl'>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-padding-Txl'>
            <div className='grid__cell u-size-1of3'>
              <h2 className='u-text-heading-light u-text-m u-color-dark-gray u-margin-Bm'>
                We zijn een klein team dat een nieuw betalingsnetwerk voor het internet bouwt.
              </h2>
            </div>
            <div className='grid__cell u-size-2of3'>
              <span className='u-text-heavy u-color-dark-gray'>GoCardless is: </span><span className='u-color-dark-gray'>
                {team.join(', ')}
              .</span>
            </div>
          </div>
        </div>
        <div className='site-container u-padding-Vxxl'>
          <div className='grid u-padding-Bxl'>
            <div className='grid__cell u-size-1of3'>
              <img src='/images/office/office-picnic-table.jpg' />
            </div>
            <div className='grid__cell u-size-2of3'>
              <img src='/images/office/office-support-booths.jpg' />
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
