import React from 'react';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import ProspectForm from '../../components/prospect-form/prospect-form';
import Slider from '../../components/slider/slider';

import ReadPdf from '../../icons/svg/ReadPdf';
import TransparentCosts from '../../icons/svg/TransparentCosts';
import SecurityCompliance from '../../icons/svg/SecurityCompliance';
import AheadOfChurn from '../../icons/svg/AheadOfChurn';
import EuropeIcon from '../../icons/svg/globe-europe';
import DigitalAge from '../../icons/svg/DigitalAge';
import PaymentFlows from '../../icons/svg/PaymentFlows';
import NoSetUpFees from '../../icons/svg/NoSetUpFees';
import Pricingfrom1 from '../../icons/svg/Pricingfrom1';
import ScalablePlans from '../../icons/svg/ScalablePlans';
import PredictablePricing from '../../icons/svg/PredictablePricing';
import ReduceChurn from '../../icons/svg/ReduceChurn';
import IncreaseConversion from '../../icons/svg/IncreaseConversion';
import SliderArrow from '../../icons/svg/slider-arrow';

export default class NewToDirectDebit extends React.Component {
  displayName = 'NewToDirectDebit'

  render() {
    return (
      <Page isInverted>
        <div className='page-hero u-padding-Bxxl page-hero--funnels'>
          <div className='site-container u-padding-Bxl u-text-center'>
            <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
              Reduce churn through Direct Debit
            </h1>

            <p className='u-text-heading-light u-text-m u-color-invert'>
              Keep customers happy with hassle-free payments
            </p>

            <Link to='contact_sales' id='track-sticky-nav-contact-sales'
            className='btn btn--invert u-margin-Tl'>
              <Message pointer='cta.get_in_touch' />
            </Link>
          </div>
        </div>

        <div className='u-padding-Vxxl'>
          <div className='site-container grid u-margin-Vl'>
            <div className='grid__cell u-size-1of3 u-text-center'>
              <figure className='svg-icon u-center'>
                <IncreaseConversion className='svg-icon__image' />
              </figure>

              <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                Increase conversion
              </div>

              <p className='u-center u-color-dark-gray u-margin-Txs'>
                Direct Debit is the preferred payment method for many customers.
              </p>
            </div>

            <div className='grid__cell u-size-1of3 u-text-center'>
              <figure className='svg-icon u-center'>
                <TransparentCosts className='svg-icon__image' />
              </figure>

              <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                Transparent pricing
              </div>

              <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                Reduce the high fees of other payment solutions.
              </p>
            </div>

            <div className='grid__cell u-size-1of3 u-text-center'>
              <figure className='svg-icon u-center'>
                <ReduceChurn className='svg-icon__image' />
              </figure>

              <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                Reduce churn
              </div>

              <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                Bank to bank payments prevent card expiry issues.
              </p>
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='site-container'>
          <div className='product-grid__container u-padding-Vxxl'>
            <div className='product-grid__section u-text-center u-padding-Vxl'>
              <img src='/images/funnels/new-to-dd-integrations.png' width='247px' />

              <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-l u-margin-Txl'>
                Connect through
                <br/>our pre-built integrations
              </p>

              <ul className='list u-margin-Tn u-margin-Bxxl u-text-start'>
                <li className='list__item u-margin-Tm'>
                  Use GoCardless with your <br/>existing software.
                </li>

                <li className='list__item u-margin-Tm'>
                  Streamline workflows by connecting Direct Debit to your business.
                </li>
              </ul>

              <Link to='partners' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                See all integrations
              </Link>
            </div>

            <div className='product-grid__section product-grid__section--left-border u-text-center u-padding-Bxl'>
              <img src='/images/funnels/api_screenshot.png' width='302px'/>

              <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-l u-margin-Txl'>
                Create custom integrations with our powerful API
              </p>

              <ul className='list u-margin-Tn u-margin-Bxxl u-text-start'>
                <li className='list__item u-margin-Tm'>
                  All the tools to build, test and iterate - quickly and easily.
                </li>

                <li className='list__item u-margin-Tm'>
                  Limitless possibilities - you decide how to integrate our API to suit your business.
                </li>
              </ul>

              <Link to='integrate_features' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                Learn about our API
              </Link>
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl site-container'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Bl'>
              Turn payments into a competitive advantage
            </h2>

            <div className='grid'>
              <div className='grid__cell u-size-1of2'>
                <figure className='svg-icon svg-icon--medium u-pull-start u-inline-block'>
                  <DigitalAge className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Direct Debit for the digital age
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    A cutting-edge online Direct Debit solution that's simple to setup, manage and use.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2'>
                <figure className='svg-icon svg-icon--medium u-pull-start u-inline-block'>
                  <AheadOfChurn className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Keep a step ahead of churn
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    Real-time notifications of failed or cancelled payments enable swift issue resolution.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2 u-margin-Txxl u-padding-Txxl'>
                <figure className='svg-icon svg-icon--medium u-pull-start u-inline-block'>
                  <EuropeIcon className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Collect payments across Europe
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    We process Direct Debit payments for Bacs, SEPA and Autogiro through a single integration.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2 u-margin-Txxl u-padding-Txxl'>
                <figure className='svg-icon svg-icon--medium u-pull-start u-inline-block'>
                  <PaymentFlows className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Create advanced payment flows
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    Re-tries, refunds and subscriptions: automate processes and configure logic around your needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='u-margin-Vxxl'>
          <div className='site-container u-text-center u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
              You’re in good company
            </h2>
            <div className='u-text-center u-margin-Bxxl u-margin-Tl u-center'>
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
                  <img src='/images/logos/box-white.png' className='u-block u-center u-size-1of4 u-margin-Bl quote__logo' />
                  <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bl'>
                    "The GoCardless implementation was incredibly simple both because of the robust, prebuilt, integration with Zuora and the amazing people supporting us.  The GoCardless team were with us every step of the way, answering all of our questions and providing valuable insights into Direct Debit best practices."
                  </p>
                  <p className='u-color-invert u-margin-Bl u-text-s'>Zach Zemarkowitz, Billing & Payment </p>
                </div>
                <div className='slider--slide slider--slide--1'>
                  <img src='/images/logos/smart-pension-white.png' className='u-block u-center u-size-1of4 u-margin-Bl quote__logo' />
                  <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bl'>
                    "GoCardless ensures our transactions are accurate, easy to setup and manage. It is also significantly cheaper compared to credit cards."
                  </p>
                  <p className='u-color-invert u-margin-Bl u-text-s'>Will Wynne, Co-Founder</p>
                </div>
                <div className='slider--slide slider--slide--1'>
                  <img src='/images/logos/nutmeg-white.png' className='u-block u-center u-size-1of4 u-margin-Bl quote__logo' />
                  <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bl'>
                    "Since the introduction of GoCardless, more than 4 out of 5 of our new customers have set up direct debits. It's a very automated service so we've not needed to add headcount to run this service."
                  </p>
                  <p className='u-color-invert u-margin-Bl u-text-s'>Bill Packman, COO</p>
                </div>
              </Slider>
            </div>

            <Link to='stories' className='btn btn--hollow u-margin-Txxl'>
              Read more customer stories
            </Link>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='site-container u-margin-Bxxl'>
          <div className='u-padding-Vxl u-margin-Txxl u-center u-size-3of5'>
            <figure className='svg-icon svg-icon--medium u-pull-start u-margin-Txxs'>
              <SecurityCompliance className='svg-icon__image svg-icon__image--medium' />
            </figure>

            <div className='security-benefit__text u-text-start'>
              <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                Security and compliance guaranteed
              </h3>

              <p className='u-color-dark-gray u-margin-Txs'>
                Authorised by the Financial Conduct Authority, ISO27001 certified, payments protected under the Direct Debit Guarantee.
              </p>
            </div>
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
                    <PredictablePricing className='svg-icon__image svg-icon--small' />
                  </figure>

                  <p className='u-color-dark-gray u-margin-Txs u-margin-Ls u-inline-block'>
                    Tranparent, predictable pricing.
                  </p>
                </div>

                <br/>

                <div className='u-inline-block u-margin-Txl'>
                  <figure className='svg-icon svg-icon--small u-pull-start u-inline-block'>
                    <NoSetUpFees className='svg-icon__image svg-icon--small' />
                  </figure>

                  <p className='u-color-dark-gray u-margin-Txs u-margin-Ls u-inline-block'>
                    No additional costs for chargebacks and<br/> failed payments.
                  </p>
                </div>
              </div>

              <div className='u-inline-block u-text-start u-margin-Lxxl u-align-top'>
                <div className='u-inline-block'>
                  <figure className='svg-icon svg-icon--small u-pull-start u-inline-block'>
                    <ScalablePlans className='svg-icon__image svg-icon--small' />
                  </figure>

                  <p className='u-color-dark-gray u-margin-Txs u-margin-Ls u-inline-block'>
                    Based on transaction volumes and sizes.
                  </p>
                </div>

                <br/>

                <div className='u-inline-block u-margin-Txl'>
                  <figure className='svg-icon svg-icon--small u-pull-start u-inline-block'>
                    <Pricingfrom1 className='svg-icon__image svg-icon--small' />
                  </figure>

                  <p className='u-color-dark-gray u-margin-Txs u-margin-Ls u-inline-block'>
                    We only charge for successful payments.
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

        <div className='site-container u-padding-Vxxl'>
          <div className='site-container grid grid--center u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-light u-padding-Bxl'>Want to talk? So do we.</h2>
            <div className='grid__cell u-size-1of2 u-margin-Bxl'>
              <ProspectForm prospectType='sales' />
            </div>

            <p className='u-text-center u-color-dark-gray u-margin-Bs u-text-s'>
              To speak to us immediately call: <Message pointer='phone_full' />
            </p>
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
                    How to avoid high payment fees with Direct Debit
                  </h2>

                  <hr className='u-margin-Vxl'/>

                  <a href='https://gocardless.com/blog/avoid-hefty-card-fees/'>
                    <ReadPdf className='u-inline-block useful-resource__icon' />
                    Read
                  </a>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='u-border-radius u-shadow-medium u-padding-Axl u-background-white'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-light useful-resource__title'>
                    Direct Debit: from low tech to digital
                  </h2>

                  <hr className='u-margin-Vxl'/>

                  <a href='https://gocardless.com/guides/posts/direct-debit-in-the-digital-age/'>
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
