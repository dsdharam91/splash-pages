import React from 'react';
import Translation from '../../components/translation/translation';

export default class AboutEn extends React.Component {
  displayName = 'AboutEn'

  render() {
    return (
      <Translation locales='en'>
        <div className='site-container u-padding-Vxxl'>
          <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-padding-Txl'>
            About GoCardless
          </h2>
          <div className='grid'>
            <div className='grid__cell u-size-2of3'>
              <p className='para'>
                We’re building the payments network for the internet. Join us.
              </p>
              <p className='para'>
                Since GoCardless was set up in 2011, we have been focussed on
                simplifying Direct Debit and opening up access to companies
                who could never previously use it. We already process
                <a href='http://www.forbes.com/sites/trevorclawson/2015/07/24/the-upward-march-of-fin-tech-gocardless-breaks-the-1bn-barrier/' target='_blank'> over $1bn each year </a>
                for thousands of businesses, and we are growing fast.
              </p>
              <p className='para'>
                We work with a huge range of organisations: small gyms and
                scout groups use us to reduce admin; fast growing companies
                like Funding Circle use us to power their growth; established
                institutions like the Financial Times use us to dramatically
                reduce failure rates.
              </p>
              <p className='para'>
                <a href='https://medium.com/@hirokitakeuchi/a-new-payment-network-for-the-internet-11ffb4d7165b' target='_blank'>Our ambitions go beyond this</a>:
                we want to break down barriers so that businesses can quickly
                and simply start taking payments from anyone, anywhere in the
                world.
              </p>
              <p className='para'>
                Over the last year, we’ve expanded our offering for larger
                organisations, like the Guardian and the UK Government. We’ve
                also added European Direct Debit schemes, so multinational
                companies can collect payments across Europe with ease. We’ve
                recently launched in France and Germany, and in the coming year
                we’ll continue our global expansion, as we create a global
                network for recurring payments.
              </p>
              <p className='para'>
                We’re London-based, and backed by some of the world’s leading
                investors including Balderton Capital, Accel Partners, Passion
                Capital and Y Combinator.
              </p>
            </div>
            <div className='grid__cell u-size-1of3'>
              <div className='u-margin-Txxl'>
                <img src='/images/press/publications-stacked.jpg' />
                <p className='u-text-s u-color-p u-margin-Txxl'>
                  For any press enquiries, please contact <a href='mailto:press@gocardless.com'>the GoCardless PR team</a>,
                  or view our comprehensive <a href='https://www.dropbox.com/sh/sat8xsjntbf5mnh/AACn116IKyIWrNG7c8FnY0cYa?dl=0'>
                    press pack
                  </a>.
                </p>
              </div>
            </div>
          </div>
        </div>
     </Translation>
    );
  }
}
