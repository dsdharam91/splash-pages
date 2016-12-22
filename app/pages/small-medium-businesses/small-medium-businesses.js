import React from 'react';
import Page from '../../components/page/page';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import Slider from '../../components/slider/slider';

import ReduceChurn from '../../icons/svg/ReduceChurn';
import LessAdmin from '../../icons/svg/LessAdmin';
import PlugIn from '../../icons/svg/PlugIn';
import TransparentCosts from '../../icons/svg/TransparentCosts';
import NoSetUpFees from '../../icons/svg/NoSetUpFees';
import Pricingfrom1 from '../../icons/svg/Pricingfrom1';
import ScalablePlans from '../../icons/svg/ScalablePlans';
import PredictablePricing from '../../icons/svg/PredictablePricing';
import SliderArrow from '../../icons/svg/slider-arrow';
import ReadPdf from '../../icons/svg/ReadPdf';

export default class SmallMediumBusinesses extends React.Component {
  displayName = 'SmallMediumBusinesses'

  render() {
    return (
      <Page isInverted>
        <div className='page-hero u-padding-Bxxl page-hero--funnels'>
          <div className='site-container u-padding-Bxxl u-text-center'>
            <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
              Take control of your payments
            </h1>

            <p className='u-text-heading-light u-text-m u-color-invert'>
              Automatic payments by Direct Debit made simple
            </p>

            <Href to='signup.path' className='btn btn--invert u-margin-Tl'>
              Sign up now
            </Href>
          </div>
        </div>

        <div className='u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl site-container'>
            <div className='grid u-padding-Lxl'>
              <div className='grid__cell u-size-1of2'>
                <figure className='svg-icon svg-icon--medium u-pull-start u-inline-block'>
                  <ReduceChurn className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-pull-start u-inline-block u-size-2of3 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Improve cashflow
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    Get paid on time, every time. No more chasing late payments or bad debt.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2'>
                <figure className='svg-icon svg-icon--medium u-pull-start u-inline-block'>
                  <LessAdmin className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-pull-start u-inline-block u-size-2of3 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Save money
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    Get set up in minutes: import existing customers and then start taking payments.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2 u-margin-Txxl u-padding-Txxl'>
                <figure className='svg-icon svg-icon--medium u-pull-start u-inline-block'>
                  <PlugIn className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-pull-start u-inline-block u-size-2of3 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Spend less time on admin
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    Simple online management and automated payment collection.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2 u-margin-Txxl u-padding-Txxl'>
                <figure className='svg-icon svg-icon--medium u-pull-start u-inline-block'>
                  <TransparentCosts className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-pull-start u-inline-block u-size-2of3 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Plug into your business
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    Easily integrate with the systems that you use everyday.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl site-container'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bxl'>
              Connect GoCardless with your existing software
            </h2>

            <div className='grid'>
              <div className='grid__cell u-size-1of2'>
                <img src='/images/funnels/smb-integrations.png' width='344px' />
              </div>

              <div className='grid__cell u-size-1of2'>
                <div className='u-size-3of4'>
                  <p className='u-color-dark-gray u-margin-Bm'>
                    With a host of pre-built integrations, using Direct Debit has never been easier.
                  </p>
                  <ul className='list u-margin-An'>
                    <li>
                      <p className='u-color-dark-gray u-margin-Tm'>
                        Get set up in minutes: import existing customers and start taking payments.
                      </p>
                    </li>
                    <li>
                      <p className='u-color-dark-gray u-margin-Tm'>
                        Streamline workflows by connecting Direct Debit to your business.
                      </p>
                    </li>
                    <li>
                      <p className='u-color-dark-gray u-margin-Tm'>
                        Automatic reconciliation with your accounts
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='u-margin-Tm'>
              <Link to='partners' className='btn btn--hollow u-margin-Tl u-margin-Rs'>
                Explore all integrations
              </Link>
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='u-margin-Vxxl'>
          <div className='site-container u-text-center u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
              You’re in good company
            </h2>
            <div className='u-text-center u-margin-Bxxl u-margin-Tm u-center'>
              <img src='/images/logos/pro-logos-colour@2x.png' />
            </div>
            <div className='quote page-hero--icon-background u-relative'>
              <Slider
              prev={(
              <span className='slider-nav slider-nav__prev'>
                <SliderArrow className='svg-icon__image' />
              </span>
              )}
              next={(
              <span className='slider-nav slider-nav__next'>
                <SliderArrow className='svg-icon__image' />
              </span>
              )}>
                <div className='slider--slide slider--slide--1'>
                  <img src='/images/logos/fd-white.png' className='u-block u-center u-size-1of4 u-margin-Bl quote__logo' />
                  <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bl'>
                    "Since moving to GoCardless, we know exactly what’s coming down the cash pipeline each month – and that makes it so much easier to plan internal finances and spending."
                  </p>
                  <p className='u-color-invert u-margin-Bl u-text-s'>Barbara Gaunt, Office Manager</p>
                </div>

                <div className='slider--slide slider--slide--1'>
                  <img src='/images/logos/has-bean-white.png' className='u-block u-center u-size-1of4 u-margin-Bl quote__logo' />
                  <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bl'>
                    "For collecting ongoing monthly payments, GoCardless is perfect – you can collect one-off payments, easily adjust the subscription amounts, and you don’t suffer from the problem of failed payments caused by expired credit or debit cards."
                  </p>
                  <p className='u-color-invert u-margin-Bl u-text-s'>Steve Leighton, Founder</p>
                </div>

                <div className='slider--slide slider--slide--1'>
                  <img src='/images/logos/lws-white.png' className='u-block u-center u-size-1of4 u-margin-Bl quote__logo' />
                  <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bl'>
                    "In 4 months we moved 50% of our recurring payments to Direct Debit after we discovered GoCardless. This has had a huge impact on the company – boosting cash flow, morale and ease of admin. Average debtor days have reduced from 122 days to 7 days."
                  </p>
                  <p className='u-color-invert u-margin-Bl u-text-s'>Claire Love</p>
                </div>
              </Slider>
            </div>

            <Link to='stories' className='btn btn--hollow u-margin-Txxl'>
              Read our customer stories
            </Link>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='u-padding-Vxxl u-text-center'>
          <div className='site-container u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-padding-Bxl'>
              Our pricing
            </h2>

            <div className='u-text-center'>
              <div className='u-inline-block u-text-start'>
                <div className='u-inline-block'>
                  <figure className='svg-icon svg-icon--small u-pull-start u-inline-block'>
                    <NoSetUpFees className='svg-icon__image svg-icon--small' />
                  </figure>

                  <p className='u-color-dark-gray u-margin-Txs u-margin-Ls u-inline-block'>
                    Tranparent, predictable pricing.
                  </p>
                </div>

                <br/>

                <div className='u-inline-block u-margin-Txl'>
                  <figure className='svg-icon svg-icon--small u-pull-start u-inline-block'>
                    <PredictablePricing className='svg-icon__image svg-icon--small' />
                  </figure>

                  <p className='u-color-dark-gray u-margin-Txs u-margin-Ls u-inline-block'>
                    No set up or hidden charges, or minimum contract.
                  </p>
                </div>
              </div>

              <div className='u-inline-block u-text-start u-margin-Lxxl u-align-top'>
                <div className='u-inline-block'>
                  <figure className='svg-icon svg-icon--small u-pull-start u-inline-block'>
                    <Pricingfrom1 className='svg-icon__image svg-icon--small' />
                  </figure>

                  <p className='u-color-dark-gray u-margin-Txs u-margin-Ls u-inline-block'>
                    1% per successful transaction, capped at £2.
                  </p>
                </div>

                <br/>

                <div className='u-inline-block u-margin-Txl'>
                  <figure className='svg-icon svg-icon--small u-pull-start u-inline-block'>
                    <ScalablePlans className='svg-icon__image svg-icon--small' />
                  </figure>

                  <p className='u-color-dark-gray u-margin-Txs u-margin-Ls u-inline-block'>
                    Scalable plans designed for your needs.
                  </p>
                </div>
              </div>
            </div>

            <div className='u-text-center'>
              <Link to='pricing' className='btn btn--hollow u-margin-Txxl'>
                  Learn more about our pricing
              </Link>
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light'>
                Ready to get started?
              </h2>

              <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                Signup to start taking payments today
              </p>

              <Href to='signup.path' className='btn u-margin-Tm'>
                Sign up today
              </Href>
            </div>
          </div>
        </div>

        <div className='u-padding-Vxxl u-text-center u-background-light-gray'>
          <div className='site-container u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-padding-Bl'>
              Useful resources
            </h2>

            <div className='grid integrations-grid u-text-center'>
              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='u-border-radius u-shadow-medium u-padding-Axl u-background-white'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-light useful-resource__title'>
                    Direct Debit in <br/>a nutshell
                  </h2>

                  <hr className='u-margin-Vxl'/>

                  <a href='https://gocardless.com/guides/intro-to-direct-debit/merchants-guide/'>
                    <ReadPdf className='u-inline-block useful-resource__icon' />
                    Read
                  </a>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='u-border-radius u-shadow-medium u-padding-Axl u-background-white'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-light useful-resource__title'>
                    How to get paid on time
                  </h2>

                  <hr className='u-margin-Vxl'/>

                  <a href='https://gocardless.com/guides/posts/get-paid-on-time-every-time/'>
                    <ReadPdf className='u-inline-block useful-resource__icon' />
                    Read
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
