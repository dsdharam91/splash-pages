import React from 'react';
import Page from '../../components/page/page';

// For each merchant offer, need to set up a relevant redirect to the partner's landing page in config/redirects.json
let customerOffers = [
  {
    id: 'quickbooks',
    title: 'Up to 60% off QuickBooks for the first 6 months',
    description: 'QuickBooks is online accounting software that allows you to manage your finances in a few taps. Get up to 60% off for the first 6 months.',
    logoSrc: '/images/merchant-offers/quickbooks.png',
    logoWidth: '180',
  },
  {
    id: 'enterprise-nation',
    title: '3 months free membership to Enterprise Nation',
    description: `Enterprise Nation is the leading UK small business network. Receive 3 months free exclusive access to experts, events and more.`,
    logoSrc: '/images/merchant-offers/enterprise-nation.png',
    logoWidth: '140',
  },
  {
    id: 'nutmeg',
    title: '6 months no portfolio management fees',
    description: 'Nutmeg provides an intelligent, fully-managed investment portfolio. GoCardless customers can receive\ntheir first six months for free.',
    logoSrc: '/images/merchant-offers/nutmeg.png',
    logoWidth: '140',
  },
];

export default class CustomerOffers extends React.Component {
  displayName = 'CustomerOffers'

  render() {
    const newLineToBr = function(text) {
      return (
        <span key={ text }>
          { text }
          <br />
        </span>
      );
    };

    return (
      <Page isInverted>
        <div className='page-hero page-hero--customer-offers u-padding-Bxxl'>
          <div className='site-container u-padding-Vxxl u-text-center'>
            <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
              Get great deals from our partners
            </h1>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
              We've teamed up with some of our other customers to provide exclusive offers and discounts.
            </p>
          </div>
        </div>

        <div className="stories-industries">
          <div className="stories-list u-padding-Vxxl">
            <div className="site-container u-margin-Vxl grid">
              { customerOffers.map((offer) => {
                return (
                  <div className="grid__cell u-size-1of3 u-text-center" key={ offer.id }>
                    <div className="story-card">
                      <div className={'story-card__logo story-card__' + offer.tag}>
                        <img src={ offer.logoSrc } width={ offer.logoWidth } className='u-block u-center' />
                      </div>

                      <h2 className='u-text-light u-text-m u-color-dark-gray u-text-no-smoothing u-margin-Bs'>
                        { offer.title.split('\n').map(newLineToBr)}
                      </h2>

                      <p className='u-text-light u-text-xs u-color-dark-gray u-text-no-smoothing u-margin-Bl'>
                        { offer.description.split('\n').map(newLineToBr)}
                      </p>

                      <a href={ '/customer-offers/' + offer.id + '/' } className='btn btn--small u-block'>
                        View offer
                      </a>
                    </div>
                  </div>
                );
              }) }
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
