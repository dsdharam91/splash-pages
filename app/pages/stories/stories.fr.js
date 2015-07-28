import React from 'react';
import Translation from '../../components/translation/translation';
import Tabs from '../../components/tabs/tabs';
import Page from '../../components/page/page';
import StartTakingPaymentsCTA from '../../components/start-taking-payments/start-taking-payments';
import Link from '../../components/link/link';

export default class Stories extends React.Component {
  displayName = 'StoriesFr'

  render() {
    return (
      <Translation locales='fr'>
        <Page isInverted={true}>
          <div className='page-hero page-hero--large u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='page-hero__inner stories-hero-heading'>
                <div className='page-hero__text'>
                  <h1 className='u-text-heading u-color-invert u-text-center u-text-xl u-text-light'>
                    Thousands of happy customers
                  </h1>
                  <div className='u-text-heading u-text-center u-color-invert u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    From individuals to multi-national corporations, GoCardless<br />
                    helps thousands of businesses with their payments everyday
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className='site-container u-padding-Vxxl u-margin-Bxxl'>
            <div className='u-padding-Vxxl u-relative u-margin-Bxxl'>
              <div className='u-padding-Bl'>
                <div className='stories-spotlight grid u-margin-Hn u-size-full'>
                  <Link to='stories_1001_menus' className='grid__cell u-text-center u-size-1of2 u-link-clean u-padding-Rxs u-padding-Ln'>
                    <div className='stories-spotlight__item stories-spotlight__item--has-bean-coffee
                    u-relative u-padding-Vl'>
                      <div className='stories-spotlight__item-text u-margin-Vl'>
                        <p className='u-padding-Al u-padding-Bn u-text-heading u-color-invert u-text-m'>
                          “GoCardless gives us control over when<br />we get paid and takes away<br />
                          the uncomfortable conversations<br />about money.”
                        </p>
                        <div className='u-color-invert u-margin-Tm'>
                          Steve Leighton, Has Bean Coffee
                        </div>
                      </div>
                    </div>
                    <div className='stories-spotlight__btn btn u-size-full'>Read the case study</div>
                  </Link>
                  <Link to='stories_the_french_talents' className='grid__cell u-text-center u-size-1of2
                  u-link-clean u-padding-Lxs u-padding-Rn'>
                    <div className='stories-spotlight__item stories-spotlight__item--crossfit-hackney u-relative u-padding-Vl'>
                      <div className='stories-spotlight__item-text u-margin-Vl'>
                        <p className='u-padding-Al u-padding-Bn u-text-heading u-color-invert u-text-m'>
                          “Taking payments with GoCardless costs us less than half the price of using PayPal
                          and the integration with TeamUp has definitely reduced our admin.”
                        </p>
                        <div className='u-color-invert u-margin-Tm'>
                          Geoff Stewart, Momentum Training
                        </div>
                      </div>
                    </div>
                    <div className='stories-spotlight__btn btn u-size-full'>Read the case study</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <hr className='u-margin-An' />
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <Tabs triggers={[
                (<a href='' className={'grid__cell u-padding-Hl stories-testimonials__link--guardian' +
                   ' u-size-1of3 stories-testimonials__link u-link-clean'}>
                  <img src='/images/stories/guardian-logo@2x.jpg' />
                </a>),
                (<a href=''
                   className={'grid__cell u-padding-Hl stories-testimonials__link--funding-circle' +
                   ' u-size-1of3 stories-testimonials__link u-link-clean'}>
                  <img className='stories-testimonials__link-image--funding-circle' src='/images/stories/funding-circle-logo@2x.jpg' />
                </a>),
                (<a href=''
                   className={'grid__cell u-padding-Hl stories-testimonials__link--lendable' +
                   ' u-size-1of3 stories-testimonials__link u-link-clean'}>
                  <img className='stories-testimonials__link-image--lendable' src='/images/stories/lendable-logo@2x.jpg' />
                </a>),
              ]}>
                <div className='stories-testimonials__quote stories-testimonials__quote--guardian u-relative u-margin-Txxl u-padding-Al'>
                  <p className="u-text-heading u-color-heading u-text-light u-text-m">
                    "The Guardian is always looking to give the best customer experience and has chosen
                    GoCardless to make its recurring payment experience
                    as seamless as possible."
                  </p>
                </div>
                <div className={'stories-testimonials__quote stories-testimonials__quote--funding-circle' +
                  ' u-relative u-margin-Txxl u-padding-Al'}>
                  <p className="u-text-heading u-color-heading u-text-light u-text-m">
                    "GoCardless is one of the best payments companies we've worked with.
                    Their API was simple to integrate and allows us to use Direct Debit in a fully automated way.
                    I'd highly recommend them to any company that cares about a providing good user experience and using the
                    best available technology for their Direct Debit in the UK and Europe."
                  </p>
                </div>
                <div className='stories-testimonials__quote stories-testimonials__quote--lendable u-relative u-margin-Txxl u-padding-Al'>
                  <p className="u-text-heading u-color-heading u-text-light u-text-m">
                    "We moved to GoCardless as collections can be managed by one person instead of a whole department.
                    It's great to work with another financial technology company who are committed to helping businesses."
                  </p>
                </div>
              </Tabs>
            </div>
          </div>
          <hr className='u-margin-An' />
          <StartTakingPaymentsCTA />
        </Page>
      </Translation>
  );
  }
}
