import React from 'react';
import Message from '../../components/message/message';
import ProductComparison from '../../components/product-comparison/product-comparison';
import Tabs from '../../components/tabs/tabs';
import StartTakingPaymentsCTA from '../../components/start-taking-payments/start-taking-payments';
import PayOnePercentCTA from '../../components/pay-one-percent/pay-one-percent';
import ClockIcon from '../../icons/svg/clock';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import CheckListIcon from '../../icons/svg/checklist';
import CustomerIcon from '../../icons/svg/customer';
import SecurityIcon from '../../icons/svg/security';
import DeveloperIcon from '../../icons/svg/developer';
import PhoneIcon from '../../icons/svg/phone';
import Link from '../../components/link/link';
import Translation from '../../components/translation/translation';

export default class FeaturesDe extends React.Component {
  displayName = 'FeaturesDe'

  render() {
    return (
      <Translation locales='de'>
        <div>
          <div className='page-hero page-hero--medium u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='page-hero__inner'>
                <div className='page-hero__text'>
                  <h1 className='u-text-heading u-margin-Tm u-color-invert u-text-center u-text-xl u-text-light'>
                    Start taking payments today
                  </h1>
                  <p className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    GoCardless is the quickest and easiest way to take one-off and <br />recurring payments
                    online in Germany
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='sticky-nav'>
            <div ng-gc-sticky-nav
              className='sticky-nav__inner u-background-light-gray u-text-heading u-text-xxs u-text-light u-text-no-smoothing'>
              <div className='site-container u-padding-Vm'>
                <ul className='u-pull-start u-margin-Txxs'>
                  <li className='sticky-nav__item'>
                    <a href='#overview' du-scrollspy ng-gc-smooth-scroll id='track-sticky-nav-overview' className='sticky-nav__link'>
                      Overview
                    </a>
                  </li>
                  <li className='sticky-nav__item'>
                    <a href='#features' du-scrollspy ng-gc-smooth-scroll id='track-sticky-nav-features' className='sticky-nav__link'>
                      Features
                    </a>
                  </li>
                  <li className='sticky-nav__item'>
                    <a href='#dashboard' du-scrollspy ng-gc-smooth-scroll id='track-sticky-nav-dashboard' className='sticky-nav__link'>
                      Dashboard
                    </a>
                  </li>
                  <li className='sticky-nav__item'>
                    <a href='#pricing' du-scrollspy ng-gc-smooth-scroll id='track-sticky-nav-pricing' className='sticky-nav__link'>
                      Pricing
                    </a>
                  </li>
                </ul>
                <Link to='contact_sales' id='track-sticky-nav-contact-sales'
                  className={
                    'btn btn--small btn--hollow u-pull-end u-text-transform-none ' +
                    'u-text-light u-text-xxs u-text-no-smoothing u-margin-Rs'
                  }>
                  <Message pointer='cta.pro' />
                </Link>
              </div>
              <hr className='u-margin-An' />
            </div>
          </div>
          <div className='section-scroll-target' id='overview'>
            <div className='site-container u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='grid'>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <ClockIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-green' />
                      <ClockIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Get started in 24 hours
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      All you need is a bank account in <Message pointer='country' />. <Link to='contact_sales'>Contact us</Link> in
                      order to get started.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-yellow' />
                      <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      No setup fees
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      GoCardless costs just <Message pointer='pricing.per_transaction_amount_normal' /> per transaction
                      (capped at <Message pointer="pricing.cost_cap" />) with no monthly or setup fees.
                      Scale pricing is also available.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <CheckListIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                      <CheckListIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Automate everything
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      GoCardless automates the taking, tracking and reconciliation of your payments. We do all the hard work for you.
                    </p>
                  </div>
                </div>
                <div className='grid u-margin-Txl u-padding-Tl'>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <CustomerIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-green' />
                      <CustomerIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      High customer retention
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      Because it's built on the Direct Debit system,
                      GoCardless means not losing customers through card expiry or cancellation.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <SecurityIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                      <SecurityIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Military-grade security
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      We store all bank details with RSA encryption and communicate only over secure channels.
                    </p>
                  </div>
                  <div className='grid__cell u-size-1of3'>
                    <figure className='svg-icon svg-icon--small'>
                      <DeveloperIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-yellow' />
                      <DeveloperIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                    </figure>
                    <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                      Modern, RESTful API
                    </div>
                    <p className='u-color-p u-margin-Txs'>
                      Add GoCardless to your site or app in minutes with our easy to use API
                      libraries. <a href='https://developer.gocardless.com/pro'>Learn more</a>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <hr className='u-margin-An' />
          <div className='section-scroll-target' id='features'>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='grid u-padding-Vxl'>
                <div className='grid__cell u-size-1of2 u-text-center'>
                  <img src='/images/products/real-time-reports.jpg' className='basic-page__real-time-reports-image' />
                </div>
                <div className='grid__cell u-size-1of2 u-margin-Tl'>
                  <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-margin-Bl u-margin-Ts'>
                    Take the guesswork out of cashflow
                  </h2>
                  <h3 className='u-text-s'>Up to the second status reports</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    Our simple online dashboard and email notifications keep you updated with comprehensive
                    information on all of your payments and customers.
                  </p>
                  <h3 className='u-text-s'>Export your data</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    View your data the way you want. GoCardless is compatible with the most popular accounting packages.
                  </p>
                  <h3 className='u-text-s'>Submit payments every day</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    With GoCardless you can submit payments as often as you like without any extra hassle or cost.
                  </p>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='grid u-padding-Vxl'>
                <div className='grid__cell u-size-1of2'>
                  <h2 className='u-text-l u-text-heading u-color-heading u-text-light u-margin-Bl'>
                    Your customers will love it
                  </h2>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    GoCardless is a FCA authorised institution which makes
                    payments quick and simple for you and your customers.
                  </p>
                  <h3 className='u-text-s'>Simple online set up</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    The whole process happens online. Using our online form, your customers can authorise
                    payments in minutes — even from their mobile phone.
                  </p>
                  <h3 className='u-text-s'>Your logo, front and centre</h3>
                  <p className='u-color-p u-margin-Bm'>
                    Provide a great user experience by adding your logo to our<br />payment forms and
                    automatically sending customers back<br />to your site after paying.
                  </p>
                  <h3 className='u-text-s'>A safe and easy way to pay</h3>
                  <p className='u-size-5of6 u-color-p u-margin-Bm'>
                    With Direct Debit, there's no need for customers to worry about missing a payment.
                    Customers are also protected by SEPA Direct Debit Customer Protection.
                  </p>
                </div>
                <div className='grid__cell u-size-1of2 u-text-center'>
                  <img src='/images/features/payment-page--gyms.jpg' className='vertical-page__mobile-image' />
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-1of3 u-center'>
                  <figure className='svg-icon u-center'>
                    <PhoneIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <PhoneIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-margin-Tm'>
                    <Message pointer="phone_local" />
                  </h2>
                  <div className='u-center'>
                    <p className='u-text-s u-color-p u-margin-Ts'>
                      Speak with one of our payments experts to learn how GoCardless can help your business.
                    </p>
                  </div>
                  <Link to='contact_sales' id='track-cta-contact-sales' className='btn btn--hollow u-margin-Tm'>
                    <Message pointer='cta.pro' />
                  </Link>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
            <div className='u-text-center u-padding-Vxxl u-background-light-gray'>
              <div className='site-container u-padding-Vxl'>
                <ProductComparison />
                <table className='u-size-full'>
                  <tfoot>
                    <tr className='comparison-table__row'>
                      <td />
                      <td />
                      <td className='u-padding-As u-size-1of3'>
                        <Link to='pro' id='track-comparison-table-pro' className='u-color-primary'>
                          Learn more about GoCardless Pro
                        </Link>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
            <hr className='u-margin-An' />
          </div>
          <div className='section-scroll-target' id='dashboard'>
            <div className='site-container u-text-center u-padding-Vxxl'>
              <div className='u-padding-Vxl'>
                <div className='u-size-2of3 u-center'>
                  <h2 className='u-text-heading u-color-heading u-text-xl u-text-light u-margin-Bs'>
                    Your dashboard
                  </h2>
                  <div className='u-text-heading u-color-heading u-text-l u-text-light'>
                    All online, nothing to install.<br />Everything you need to get paid
                  </div>
                  <hr className='u-margin-Vxxl' />
                </div>
                <div className='u-text-center u-text-heading u-text-upcase u-text-xxs u-text-semi'>
                  <Tabs triggers={[(
                    <a href='#dashboard-home' id='track-dashboard-home'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                      Dashboard home
                    </a>
                  ), (
                    <a href='#add-customers' id='track-dashboard-customers'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                      Add customers
                    </a>
                  ), (
                    <a href='#take-payments' id='track-dashboard-payments'
                      className='tab-link u-padding-Vxxs u-margin-Bxl u-margin-Hs u-inline-block u-padding-Hs u-link-clean'>
                      Take payments
                    </a>
                  ),]}>
                    <div>
                      <img src='/images/basic/fr/basic-dashboard-home.png'
                        className='basic-page__dashboard-image' alt='GoCardless Dashboard interface' />
                    </div>
                    <div>
                      <img src='/images/basic/fr/basic-add-customer.png'
                        className='basic-page__dashboard-image' alt='add customers form' />
                    </div>
                    <div>
                      <img src='/images/basic/fr/basic-take-payment.png'
                        className='basic-page__dashboard-image' alt='payment status timeline' />
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
            <hr className='u-margin-An' />
          </div>
          <div className='section-scroll-target' id='pricing'>
            <PayOnePercentCTA />
            <hr className='u-margin-An' />
            <StartTakingPaymentsCTA />
          </div>
        </div>
      </Translation>
    );
  }
}
