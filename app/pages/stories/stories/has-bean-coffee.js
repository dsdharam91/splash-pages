import React from 'react';
import StoryPageNew from '../story-page-new';
import Link from '../../../components/link/link';

export default class StoriesHasBeanCoffee extends React.Component {
  displayName = 'StoriesHasBeanCoffee'

  render() {
    return (
      <StoryPageNew
        title='GoCardless gives us control over when we get paid and takes away the uncomfortable conversations about money.'
        author='Steve Leighton'
        position='Founder'
        company='Has Bean Coffee'
        benefits='Control over payment timings, improved cash flow, shorter average payment period'
        bgimgUrl='url(/images/stories/story-images/has-bean-coffee/hero-has-bean-coffee.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/has-bean-coffee.png'
        sidebarServices='Supplying high quality coffee'
        sidebarEmployees=' 15 employees'
        sidebarTimeSaved='Reduced average payment period from 62 days to 41'
        sidebarPartnerIntegration='GoCardless for KashFlow'>
        <div className='story-body'>
         <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Tn'>
            Bringing the world's finest coffee to the UK
          </h2>
          <p className='para'>
            Once upon a time, Has Bean Coffee founder Steve Leighton worked at an all-night petrol station. Having always loved
            freshly brewed coffee, he started making it not only to stay awake, but also to forge friendships with the other night
            workers. Steve’s passion for coffee soon led him to open a small coffee shop, with setting up a website to sell coffee
            beans being the next logical step after that. Has Bean Coffee was born.
          </p>
          <p className='para'>
            <a href='https://www.hasbean.co.uk/' className='u-link-color-p u-text-underline'>Has Bean Coffee</a> is now a major supplier
            of high quality coffee to the retail and wholesale industries. In an industry with lead times of up to a year, it is crucial
            for the business to maintain strong cash flow.
          </p>
          <p className='para'>
            With cafés often strapped for cash, customers would often pay their invoices up to four months late. This drove
            Has Bean Coffee crazy. But the business was growing so fast and things were so busy that Steve felt compelled to keep
            sending out coffee to customers even when they had long overdue invoices. Because of this, he was left with uncertain
            cash flow and numerous bad debtors.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/has-bean-coffee/hasbeancoffee1@2x.jpg' alt='' />
          </div>
          <p className='story-page__quote'>
            Customers paying invoices up to 4 months late drove us crazy.
          </p>
          <p className='para'>
            Today, Has Bean Coffee uses GoCardless integrated with the accounting
            software, <Link to='partners_kashflow' className='u-link-color-p u-text-underline'>KashFlow</Link>.
            Now, the company can send out Direct Debit requests with invoices to all its wholesale customers.
            As soon as an invoice becomes due, payment can automatically be taken from the customer.
          </p>
          <p className='story-page__quote'>
            Now we can automatically take payment when issuing invoices.
          </p>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Switching to GoCardless
          </h2>
          <p className='para'>
            As a bonus, the seamless integration of GoCardless with Kashflow means that these payments are automatically
            reconciled in the Has Bean Coffee accounts. Since making the switch, Has Bean Coffee’s average payment period has
            been reduced from 62 days to 41. The business cash flow has improved by 30%.
          </p>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            The benefits
          </h2>
          <p className='para'>
            Thanks to its use of GoCardless, Has Bean Coffee is now in control of when client payments are received.
            This move has vastly improved cashflow and helped the company keep uncomfortable conversations about money to a minimum.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/has-bean-coffee/hasbean2@2x.jpg' alt='' />
          </div>
        </div>
      </StoryPageNew>
    );
  }
}