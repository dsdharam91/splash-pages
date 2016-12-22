import React from 'react';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import ProspectForm from '../../components/prospect-form/prospect-form';
import Slider from '../../components/slider/slider';

import SliderArrow from '../../icons/svg/slider-arrow';
import ReadPdf from '../../icons/svg/ReadPdf';
import DeveloperAPI from '../../icons/svg/DeveloperAPI';
import DevelopTestIterate from '../../icons/svg/DevelopTestIterate';
import ApiFirst from '../../icons/svg/ApiFirst';
import EuropeIcon from '../../icons/svg/globe-europe';
import FutureProof from '../../icons/svg/FutureProof';
import TransformCustomer from '../../icons/svg/TransformCustomer';

export default class IntegrateFeatures extends React.Component {
  displayName = 'IntegrateFeatures'

  render() {
    return (
      <Page isInverted>
        <div className='page-hero u-padding-Bxxl page-hero--funnels'>
          <div className='site-container u-padding-Bxl u-text-center'>
              <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
                A powerful payments API
              </h1>

              <p className='u-text-heading-light u-text-m u-color-invert'>
                 Streamline workflows by integrating Direct Debit with your business.
              </p>

              <Link to='contact_sales' id='track-sticky-nav-contact-sales'
              className='btn btn--invert u-margin-Tl'>
                Get in touch
              </Link>
          </div>
        </div>

        <div className='site-container u-padding-Vxxl'>
          <div className='u-margin-Vl grid'>
            <div className='grid__cell u-size-1of3 u-text-center'>
              <figure className='svg-icon svg-icon--medium u-center'>
                <FutureProof className='svg-icon__image svg-icon__image--medium' />
              </figure>

              <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                Future proof payments technology
              </div>

              <p className='u-center u-color-dark-gray u-margin-Txs'>
                Our continuously improving, cutting edge online Direct Debit solution means no need for upgrades.
              </p>
            </div>

            <div className='grid__cell u-size-1of3 u-text-center'>
              <figure className='svg-icon svg-icon--medium u-center'>
                <TransformCustomer className='svg-icon__image svg-icon__image--medium' />
              </figure>

              <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                Transform your customer experience
              </div>

              <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                Feed real-time payments data to internal teams for smarter customer interactions.
              </p>
            </div>

            <div className='grid__cell u-size-1of3 u-text-center'>
              <figure className='svg-icon svg-icon--medium u-center'>
                <EuropeIcon className='svg-icon__image svg-icon__image--medium' />
              </figure>

              <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                One integration for the UK, Eurozone and Sweden
              </div>

              <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                We handle the complexities of Direct Debit across geographies.
              </p>
            </div>
          </div>

          <p className='u-text-s u-text-center u-color-dark-gray u-padding-Vxl'>See our&nbsp;
            <Href to='api_docs.path'>
              API reference docs
            </Href></p>
        </div>

        <hr className='section-divider' />

        <div className='u-padding-Vxxl'>
          <div className='u-padding-Vxl site-container u-text-center'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
              An intuitive API with built-in Direct Debit logic at its core
            </h2>

            <p className='u-color-dark-gray u-margin-Txs u-size-3of4 u-center'>
              We've created an API optimised for Direct Debit, so that you can craft powerful integrations with less development time. Integrate as much or as little as you need, at once or over time.
            </p>

            <div className='u-margin-Tl u-padding-Tm u-center u-size-2of4 u-text-start'>
              <div className='integration-step u-margin-Bxxl'>
                <span className='integration-step__check'>
                  &#x2714;
                </span>

                <div className='integration-step__text u-padding-Txs'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Bs'>
                    Automatic Direct Debit logic
                  </h3>
                  <ul className='list u-margin-An'>
                    <li className='u-margin-Bs'>Direct Debit timings built-in for automatic calculation of next available charge date</li>
                    <li>Ready to use subscriptions logic eliminates the need to build from scratch</li>
                  </ul>
                </div>
              </div>

              <div className='integration-step u-margin-Bxxl'>
                <span className='integration-step__check'>
                  &#x2714;
                </span>

                <div className='integration-step__text u-padding-Txs'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Bs'>
                    Reduced errors and failures
                  </h3>
                  <ul className='list u-margin-An'>
                    <li className='u-margin-Bs'>Unique request tokens reduce duplicate payments through idempotency keys</li>
                    <li>Automatic bank validation checks for lower payment failure rates</li>
                  </ul>
                </div>
              </div>

              <div className='integration-step u-margin-Bxxl'>
                <span className='integration-step__check'>
                  &#x2714;
                </span>

                <div className='integration-step__text u-padding-Txs'>
                  <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Bs'>
                    Compliance ensured
                  </h3>
                  <ul className='list u-margin-An'>
                    <li className='u-margin-Bs'>Pre-built notification templates for clear, compliant, ready to use emails</li>
                    <li>Pdf mandates generated automatically and pre-filled with customer details</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='site-container u-padding-Vxxl u-text-center'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-center u-text-heading u-color-dark-gray u-text-l u-text-light'>
              Direct Debit for the Digital Age
            </h2>
            <div className='u-padding-Vxl grid'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon svg-icon--medium u-center'>
                  <ApiFirst className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Fully customisable integration
                </div>

                <p className='u-center u-color-dark-gray u-margin-Txs'>
                  Connect to the systems you use everyday to unlock insights.
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon svg-icon--medium u-center'>
                  <DevelopTestIterate className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Simple to develop, test &amp; iterate
                </div>

                <p className='u-center u-color-dark-gray u-margin-Txs'>
                   Free sandbox environment, clear documentation and step-by-step guides.
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon svg-icon--medium u-center'>
                  <DeveloperAPI className='svg-icon__image svg-icon__image--medium' />
                </figure>

                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Developer-friendly API
                </div>

                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Pre-built code for popular programming languages.
                </p>
              </div>
            </div>

            <Link to='contact_sales'
            className='btn btn--hollow u-margin-Tl u-margin-Rs'>
              Get in touch
            </Link>
          </div>
        </div>

        <hr className='section-divider' />

        <div className='u-margin-Txxl'>
          <div className='site-container u-text-center u-padding-Txl'>
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
                  <img src='/images/logos/funding-circle-logo-white.png' className='u-block u-center u-size-1of4 u-margin-Bl quote__logo' />
                  <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bl'>
                    "GoCardless is one of the best payments companies we've worked with. I'd highly recommend them to any company that cares about a providing good user experience and using the best available technology."
                  </p>
                  <p className='u-color-invert u-margin-Bl u-text-s'>Elsa Ferreira, Payments Team Leader</p>
                </div>

                <div className='slider--slide slider--slide--1'>
                  <img src='/images/logos/bulb-white.png' className='u-block u-center u-size-1of4 u-margin-Bl quote__logo' />
                  <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bl'>
                    "The simplicity and ease of use of GoCardless and it's ability to be integrated into our other systems have been a real positive."
                  </p>
                  <p className='u-color-invert u-margin-Bl u-text-s'>Hayden Wood & Amit Gudka, Co-Founders</p>
                </div>

                <div className='slider--slide slider--slide--1'>
                  <img src='/images/logos/smart-pension-white.png' className='u-block u-center u-size-1of4 u-margin-Bl quote__logo' />
                  <p className='u-text-heading u-color-invert u-text-light u-text-l u-margin-Bl'>
                    "We didn’t want to spend time working on integrating a tech solution only for the provider to go bust. GoCardless is a big success story so no concerns there."
                  </p>
                  <p className='u-color-invert u-margin-Bl u-text-s'>Will Wynne, Co-Founder</p>
                </div>
              </Slider>
            </div>
          </div>
        </div>

        <div className='site-container grid grid--center u-margin-Vxl u-padding-Vxl'>
          <h2 className='u-text-heading u-color-dark-gray u-text-light u-padding-Bxl'>Want to talk? So do we.</h2>
          <div className='grid__cell u-size-1of2 u-padding-Bxl'>
            <ProspectForm prospectType='sales' />
          </div>

          <p className='u-text-center u-color-dark-gray u-margin-Bs u-text-s'>
            To speak to us immediately call: <Message pointer='phone_full' />
          </p>
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
                    Direct <br/>Debit Guide
                  </h2>

                  <hr className='u-margin-Vxl'/>

                  <a href='https://www.gocardless.com/direct-debit/'>
                    <ReadPdf className='u-inline-block useful-resource__icon' />
                    Read
                  </a>
                </div>
              </div>

              <div className='grid__cell u-size-1of3 u-margin-Bm'>
                <div className='u-border-radius u-shadow-medium u-padding-Axl u-background-white'>
                  <h2 className='u-text-heading u-color-dark-gray u-text-light useful-resource__title'>
                    API <br/>Reference Docs
                  </h2>

                  <hr className='u-margin-Vxl'/>

                  <a href='https://developer.gocardless.com/'>
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
