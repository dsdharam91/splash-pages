import React from 'react';
import StoryPageNew from '../story-page-new.en';

export default class StoriesRockChoir extends React.Component {
  displayName = 'StoriesRockChoir'

  render() {
    return (
      <StoryPageNew
        title='Rather than chasing people to update their details, we can now retry failed payments at the click of a button'
        author='Dave Lusher'
        position='Director'
        company='Rock Choir'
        benefits='Keeping more customers on the platform and dramatically reducing the administrative burden.'
        bgimgUrl='url(/images/stories/story-images/rock-choir/hero-rock-choir.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/rock-choir.png'
        sidebarServices='Providing music, friendship and confidence'
        sidebarEmployees='31 employees'
        sidebarPreviousProvider='Used credit or debit cards to take recurring payments'
        sidebarTimeSaved='Many hours every month'>
        <div className='story-body'>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Tn'>
            Slashing failed payments and boosting growth
          </h2>
          <p className='para'>
            Rock Choir is the UK’s leading contemporary choir group, founded in 2005.
            The business now has over 20,000 members around the country and has plans to keep growing.
          </p>
          <p className='para'>
           The founder, Caroline Redman Lusher, came up with the concept of creating a glamorous contemporary choir that welcomes everyone, with no auditions and no requirement to read music.
           She wanted people from all walks of life to be able to come together in their local communities and enjoy the benefits of singing pop songs.
           Caroline left her job as a teacher to set up Rock Choir – a name her mum came up with over a cup of tea!
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/rock-choir/caroline@2x.jpg' alt='' />
          </div>
          <p className='para'>
            In the early days, Rock Choir asked its members to pay with credit or debit card.
            But the failure rates on these recurring payments approached 5% every month, largely due to card expiry & cancellation.
            Collecting regular monthly payments had become a logistical nightmare.
          </p>
          <p className='story-page__quote'>
            I seemed to spend all of my time chasing people to update their card details.
            There was no way of retrying these payments, explains David Lusher.
          </p>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Switching to GoCardless
          </h2>
          <p className='para'>
            Rock Choir decided to integrate GoCardless into the company website, allowing members to set up a Direct Debit in seconds.
            Recurring failure rates were slashed to around 1%.
            This kept more customers on the platform and dramatically reduced the administrative burden.
          </p>
           <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            The benefits
          </h2>
            <p className='story-page__quote'>
            Rather than chasing people to update their details, we can now retry failed payments at the click of a button.
          </p>
          <p className='para'>
            With GoCardless, Rock Choir managed to slash failure rates from 5% (card) down to 1% (Direct Debit).
            Every month, GoCardless saved hours of admin time for Rock Choir, and kept more customers paying every month - boosting cash flow and enabling the business to grow faster as a result.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/rock-choir/rock-choir@2x.jpg' alt='' />
          </div>
        </div>
      </StoryPageNew>
    );
  }
}
