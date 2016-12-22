import React from 'react';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import ProspectForm from '../../components/prospect-form/prospect-form';
import Slider from '../../components/slider/slider';

import SliderArrow from '../../icons/svg/slider-arrow';
import SecurityCompliance from '../../icons/svg/SecurityCompliance';
import SimpleSetup from '../../icons/svg/SimpleSetup';
import LessAdmin2 from '../../icons/svg/LessAdmin2';
import Transparentfees from '../../icons/svg/Transparentfees';
import ConnectTeams from '../../icons/svg/ConnectTeams';
import EuropeIcon from '../../icons/svg/globe-europe';
import FutureProof from '../../icons/svg/FutureProof';
import TransformExperience from '../../icons/svg/TransformExperience';
import NoSetUpFees from '../../icons/svg/NoSetUpFees';
import Pricingfrom1 from '../../icons/svg/Pricingfrom1';
import PredictablePricing from '../../icons/svg/PredictablePricing';
import ScalablePlans from '../../icons/svg/ScalablePlans';
import ReadPdf from '../../icons/svg/ReadPdf';

export default class ExistingDirectDebitUser extends React.Component {
  displayName = 'ExistingDirectDebitUser'

  render() {
    return (
      <Page isInverted>
        <div className='page-hero u-padding-Bxxl page-hero--funnels'>
          <div className='site-container u-padding-Bxl u-text-center'>
            <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
               Direct Debit for the digital age
            </h1>

            <p className='u-text-heading-light u-text-m u-color-invert'>
               A cutting edge platform for managing recurring payments
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
              <figure className='svg-icon svg-icon--medium u-center'>
                <SimpleSetup className='svg-icon__image svg-icon__image--medium' />
              </figure>

              {/* <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                Simple setup and migration
              </div> */}

              <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                Simple migration
              </div>

              <p className='u-center u-color-dark-gray u-margin-Txs'>
                It's quick and easy to move existing customers to GoCardless.
              </p>
            </div>

            <div className='grid__cell u-size-1of3 u-text-center'>
              <figure className='svg-icon svg-icon--medium u-center'>
                <Transparentfees className='svg-icon__image svg-icon__image--medium' />
              </figure>

              <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                Transparent fees
              </div>

              <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                No set up fees or bonds — only pay for successful transactions.
              </p>
            </div>

            <div className='grid__cell u-size-1of3 u-text-center'>
              <figure className='svg-icon svg-icon--medium u-center'>
                <LessAdmin2 className='svg-icon__image svg-icon__image--medium' />
              </figure>

              <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                Reduce admin
              </div>

              <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                Manage customers and payments online, automate reconciliation.
              </p>
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='site-container'>
          <div className='product-grid__container u-padding-Vxxl'>
            <div className='product-grid__section u-text-center u-padding-Vxl'>
              <img src='/images/funnels/existing-dd-integrations.png' width='252px' />

              <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-l u-margin-Tm'>
                Connect through
                <br/>our pre-built integrations
              </p>

              <ul className='list u-margin-Tn u-margin-Bxxl u-text-start'>
                <li className='list__item u-margin-Tm'>
                  Use GoCardless with your <br/>existing software.
                </li>

                <li className='list__item u-margin-Tm'>
                  Streamline workflows by connecting <br/>Direct Debit to your business.
                </li>
              </ul>

              <Link to='partners' className='u-color-primary u-text-upcase u-text-xxs u-text-heading u-text-semi'>
                See all integrations
              </Link>
            </div>

            <div className='product-grid__section u-text-center u-padding-Vxl product-grid__section--left-border'>
              <img src='/images/funnels/api_screenshot.png' width='302px'/>

              <p className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-l u-margin-Tm'>
                Create custom integrations with our powerful API
              </p>

              <ul className='list u-margin-Tn u-margin-Bxxl u-text-start'>
                <li className='list__item u-margin-Tm'>
                  All the tools to build, test and iterate — quickly and easily.
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

        <div className='u-text-center u-padding-Vxl'>
          <div className='u-padding-Vxl site-container'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
              Turn payments into a competitive advantage
            </h2>

            <div className='grid u-margin-Tl u-padding-Tm'>
              <div className='grid__cell u-size-1of2'>
                <figure className='svg-icon svg-icon--medium u-pull-start u-inline-block'>
                  <ConnectTeams className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                     Use data to connect & power teams
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    Feed real-time payments data to internal teams for smarter customer interactions.
                  </p>
                </div>
              </div>

              <div className='grid__cell u-size-1of2'>
                <figure className='svg-icon svg-icon--medium u-pull-start u-inline-block'>
                  <TransformExperience className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                    Transform your customer experience
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    Our flexible solution allows customers to pay on the date and time that suits them.
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
                  <FutureProof className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-inline-block u-pull-start u-size-3of4 u-margin-Lm'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m'>
                     Future proof your payments
                  </h3>

                  <p className='u-color-dark-gray u-margin-Txs'>
                    Our best-in-class technology is continuously improving and always industry compliant.
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
                  <img src='/images/logos/connexin-white.png' className='u-block u-center u-size-1of4 u-margin-Bl quote__logo' />
                  <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bl'>
                    "GoCardless helped us improve both the speed and accuracy of our bill run without any of the complexity of traditional providers. We can easily see who’s paid, and it automatically notifies us when payments fail."
                  </p>
                  <p className='u-color-invert u-margin-Bl u-text-s'>Alex Yeung, Co-Founder</p>
                </div>
                <div className='slider--slide slider--slide--1'>
                  <img src='/images/logos/box-white.png' className='u-block u-center u-size-1of4 u-margin-Bl quote__logo' />
                  <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bl'>
                    "GoCardless is one of the best payments companies we've worked with. I'd highly recommend them to any company that cares about a providing good user experience and using the best available technology."
                  </p>
                  <p className='u-color-invert u-margin-Bl u-text-s'>Elsa Ferreira, Payments Team Leader</p>
                </div>
                <div className='slider--slide slider--slide--1'>
                  <img src='/images/logos/boost-white.png' className='u-block u-center u-size-1of4 u-margin-Bl quote__logo' />
                  <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bl'>
                    "Being able to offer our customers a truly paperless Direct Debit set up option is a great selling point. This also helps speed up on-boarding of customers."
                  </p>
                  <p className='u-color-invert u-margin-Bl u-text-s'>Alex Littner, Managing Director</p>
                </div>
              </Slider>
            </div>

            <Link to='stories' className='btn btn--hollow u-margin-Txxl'>
              Read our customer stories
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
                    Tranparent, predictable pricing
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
                    Cost-effective payments for Bacs, SEPA <br/>and Autogiro.
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
                    How to move customers to GoCardless
                  </h2>

                  <hr className='u-margin-Vxl'/>

                  <a href='https://gocardless.com/guides/posts/switching-to-gocardless/'>
                    <ReadPdf className='u-inline-block useful-resource__icon' />
                    Read
                  </a>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='u-border-radius u-shadow-medium u-padding-Axl u-background-white'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-light useful-resource__title'>
                    Should you change Direct Debit provider?
                  </h2>

                  <hr className='u-margin-Vxl'/>

                  <a href='https://gocardless.com/guides/posts/dd-provider/'>
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
