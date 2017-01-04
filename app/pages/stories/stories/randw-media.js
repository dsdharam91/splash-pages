import React from 'react';
import StoryPageNew from '../story-page-new';
import Link from '../../../components/link/link';

export default class StoriesRAndWMedia extends React.Component {
  displayName = 'StoriesRAndWMedia'

  render() {
    return (
      <StoryPageNew
        title='We were amazed at how easy GoCardless was to use, compared to traditional Direct Debit systems, which were complex and costly to set up.'
        author='Steven Wu'
        position='Co-Founder'
        company='R & W Media'
        benefits='No more time spent chasing clients for payments, improved cash flow and easy integration with Xero'
        bgimgUrl='url(/images/stories/story-images/randw-media/hero-randw-media.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/randw-media.png'
        sidebarServices='Web development services, print design, book and toys publishing.'
        sidebarEmployees='10 employees'
        sidebarPartnerIntegration='GoCardless for Xero'>
        <div className='story-body'>
          <p className='para u-margin-Tn'>
            <a href='https://www.randwmedia.com/' className='u-link-color-p u-text-underline'>R & W Media</a>, founded in 2012
            by Craig Randall and Steven Wu, offers Magento ecommerce design and development services
            for retailers and wholesalers, helping them expand their business online. R & W has worked with brands including
            Nickelodeon, Cartoon Network, Warner Brothers, Star Wars and Marvel with the company also developing
            books, toys and merchandise for sale in high street stores and retailers.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/randw-media/branded-products@2x.jpg' alt='' />
          </div>
          <p className='para'>
            The company works closely with numerous partners, such as hosting providers and email marketing providers, as well as
            GoCardless, so a lot of its business comes from referrals.
          </p>
          <p className='para'>
            Since starting up, R & W Media has been
            using <a href='https://www.xero.com/uk/' className='u-link-color-p u-text-underline'>Xero accounting software</a> for its
            cloud-based convenience, easy setup and cost effectiveness.
            Xero made it easy for the company accountant to login and perform tax returns, keeping an eye
            on the finances without any fuss.
          </p>
          <p className='para'>
            After integrating <Link to='partners_xero' className='u-link-color-p u-text-underline'>GoCardless for Xero</Link>,
            R & W Media was able to have clients pay directly using GoCardless.
            That meant no more complex integration with payment gateways or expensive payment processing fees.
          </p>
          <p className='story-page__quote'>
            “We already use GoCardless for all our monthly recurring invoices. We can just invoice customers directly
            and payments will be collected through GoCardless on a regular basis.”
          </p>
          <p className='para'>
            “This has saved a tremendous amount of time, not having to chase clients for payment.
            There's no need to process payments through card machines or over the phone. It is all seamless.
            This has also helped us reduce cash flow problems, which is a big plus for our business,” says Steven.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/randw-media/ecommerce-websites@2x.jpg' alt='' />
          </div>
          <p className='para'>
            R & W Media also offers recurring subscriptions for Magento eCommerce support and hosting management.
            The company needed a way to ensure that fees were collected on a monthly basis. The founders also wanted an automated way of
            billing, rather than wasting time invoicing and chasing payments.
          </p>
          <p className='para'>
            “We were amazed at how easy GoCardless was to use, compared to traditional Direct Debit systems,
            which were complex and costly to set up. GoCardless was also a much cheaper solution when compared to other providers.
            Above all, GoCardless provided excellent support, not just through email but also on the phone,” added Steven.
          </p>
        </div>
      </StoryPageNew>
    );
  }
}
