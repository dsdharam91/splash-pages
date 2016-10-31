import React from 'react';
import StoryPageNew from '../story-page-new';

export default class StoriesSlmConnect extends React.Component {
  displayName = 'StoriesSlmConnect'

  render() {
    return (
      <StoryPageNew
        title='With live and up-to-date customer payment status information, we can achieve our business needs and improve our credit control process.'
        author='Bilal Uddin'
        position='Financial Controller'
        company='SLM Connect'
        benefits='Simplicity, more control, up-to-date payment information, charged on a percentage basis rather than per transaction.'
        bgimgUrl='url(/images/hero/hero-stories.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/slm-connect.png'
        sidebarServices='UK-based telemarketing agency that thrives on bringing people together'
        sidebarEmployees='120 employees'
        sidebarPreviousProvider='Eazipay'
        sidebarTimeSaved='An hour per month'>
        <div className='story-body'>
          <p className='para u-margin-Tn'>
            <a href='http://www.slmconnect.co.uk/' className='u-link-color-p u-text-underline'>SLM Connect</a> started up in 2008 as a
            contact centre. Since then it has supplied over 200,000 clients and customers. The business was founded as a part of
            the ‘Incubator Project’, a government-sponsored programme that supports growing businesses, allowing them to rent
            state-of-the-art office space in a vibrant and supportive environment, so that they can focus on developing the business.
          </p>
          <p className='para'>
            The team at SLM Connect pride themselves on taking time to understand their customers’ sales strategy and executing
            it through consultancy, telemarketing and direct email. An innovative UK-based telemarketing agency that thrives
            on bringing people together.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/slm-connect/slm-connect-website@2x.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            The need for a new provider
          </h2>
          <p className='para'>
            Before switching to GoCardless, SLM Connect was using Eazipay to handle its Direct Debits. “We found our previous
            provider didn’t give us enough control, which really affected our credit control processes” said Bilal.
            “We were being charged per transaction, meaning costs were high and extra charges were incurred for cancelled
            and failed Direct Debits.”
          </p>
          <p className='para'>
            Bilal and his team sat down to compare the costs and benefits of their previous provider to GoCardless, and soon
            realised how much better off they could be using GoCardless.
          </p>
          <p className='para'>
            “After seeing the low fees and benefits of GoCardless, we decided to transfer. It would have been foolish not to.”
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Taking control of payments
          </h2>
          <p className='para'>
            According to Bilal, moving to GoCardless has given SLM Connect more control over its customer base.
          </p>
          <p className='story-page__quote'>
            “With live and up-to-date customer payment status information, we can achieve our business needs and
            improve our credit control process.”
          </p>
          <p className='para'>
            SLM Connect has benefitted from GoCardless’ simplified charges based on a percentage, rather than per transaction.
            “It’s much easier to take payments from customers as it can happen more frequently without us having to worry about fees;
            plus there are no extra charges for cancelled or failed Direct Debits.”
          </p>
          <p className='para'>
            Bilal and his team at SLM Connect have no regrets about switching.
          </p>
          <p className='para'>
            “I’d recommend GoCardless to any business dealing with Direct Debits. It’s simple and easy to use and there are no hidden costs.”
          </p>
        </div>
      </StoryPageNew>
    );
  }
}
