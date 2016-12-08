import React from 'react';
import Link from '../link/link';
import Message from '../message/message';

export default class PayOnePercentCTA extends React.Component {
  displayName = 'PayOnePercentCTA'

  render() {
    return (
      <div className='site-container u-padding-Vxxl'>
        <div className='u-text-center u-padding-Vxl'>
          <div className='u-size-1of2 u-center'>
            <h2 className='u-text-heading u-color-dark-gray u-text-xl u-text-light'>
              <Message pointer='basic_pricing_cta.main' />
            </h2>
            <p className='u-color-dark-gray u-margin-Txxs'>
              <Message pointer='basic_pricing_cta.description' />
            </p>
            <Link to='pricing'
            className='btn btn--hollow u-margin-Tm'>
              <Message pointer='basic_pricing_cta.learn_more' />
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
