import React from 'react';
import MobileIcon from '../../icons/svg/mobile';
import CheckListIcon from '../../icons/svg/checklist';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import Footer from '../../components/footer/footer';
import Message from '../../components/message/message';
import Link from '../../components/link/link';
import Logo from '../../icons/logo/logo';
import ProspectForm from '../../components/prospect-form/prospect-form';

export default class HomeHoldingPage extends React.Component {
  displayName = 'HomeHoldingPage';

  render() {
    return (
      <div className='site-wrapper'>
        <div className='site-header-wrapper'>
          <div className='site-header u-relative u-text-center'>
            <Link to='home' id='track-nav-home' className='header-logo u-relative u-block u-padding-Vl'>
              <Logo className='site-logo__image u-fill-invert' />
            </Link>
          </div>
        </div>

        <div className='page-hero page-hero--holding-page page-hero--large u-relative u-size-full'>
          <div className='site-container page-hero__container'>
            <div className='page-hero__inner'>
              <div className='page-hero__text'>
                <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                  <Message pointer='holding_page.headline' />
                </h1>

                <div className={
                  'u-text-heading u-text-center u-color-invert ' +
                  'u-text-m u-text-light u-margin-Txxs u-text-no-smoothing page-hero__text__desc'
                }>
                  <Message pointer='holding_page.tagline' />
                </div>

                <div className='email-capture u-center u-margin-Txl u-size-1of2
                u-padding-Al'>
                  <p className="u-text-xxs u-text-light u-text-heading u-text-center u-center u-size-4of5 u-margin-Bm">
                    <Message pointer='holding_page.prospect_form_message' />
                  </p>

                  <ProspectForm prospectType='holding' />
                </div>
              </div>
            </div>
          </div>

          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <div className='u-center'>
                <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light'>
                  <Message pointer='holding_page.benefits_headline' />
                </h2>
              </div>
              <div className='grid u-margin-Tl u-padding-Tm'>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <MobileIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                    <MobileIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    <Message pointer='holding_page.benefit1_headline' />
                  </div>
                  <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                    <Message pointer='holding_page.benefit1_description' />
                  </p>
                </div>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <CheckListIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <CheckListIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    <Message pointer='holding_page.benefit2_headline' />
                  </div>
                  <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                    <Message pointer='holding_page.benefit2_description' />
                  </p>
                </div>

                <div className='grid__cell u-size-1of3 u-text-center'>
                  <figure className='svg-icon u-center'>
                    <MoneyFlowerIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                    <MoneyFlowerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    <Message pointer='holding_page.benefit3_headline' />
                  </div>
                  <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                    <Message pointer='holding_page.benefit3_description' />
                  </p>
                </div>
              </div>
            </div>
          </div>

          <hr className='u-margin-An' />

          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Txl'>
              <div className='u-center'>
                <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                  <Message pointer='holding_page.global_headline' />
                </h2>
              </div>
              <div className='u-text-center u-margin-Vl u-padding-Vs u-center u-size-1of2'>
                <img src='/images/partners/partners-map@2x.jpg' />
              </div>
              <p className='u-text-xs u-color-dark-gray u-margin-Txs'>
                <Message pointer='holding_page.global_description' /><br />
                <Message pointer='holding_page.global_description2' />
              </p>
            </div>
          </div>

          <hr className='u-margin-An' />

          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Txl'>
              <div className='u-center'>
                <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                  <Message pointer='holding_page.trusted_headline' />
                </h2>
              </div>
              <div className='u-text-center u-margin-Vl u-padding-Vs u-center'>
                <img src='/images/logos/pro-logos@2x.png' />
              </div>
            </div>
          </div>

          <hr className='u-margin-An' />

          <div className='u-text-center u-padding-Vxxl u-background-light-gray'>
            <div className='site-container u-padding-Vxl'>
              <div className='u-size-2of3 u-center'>
                <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                  <Message pointer='holding_page.learn_more_headline' />
                </h2>

                <a href='https://gocardless.com/en-eu/' className='btn u-margin-Tm'>
                  <Message pointer='holding_page.learn_more_link' />
                </a>
              </div>
            </div>
          </div>

          <Footer />
        </div>
      </div>
    );
  }
}
