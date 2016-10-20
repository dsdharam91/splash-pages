import React from 'react';
import StoryPageNew from '../story-page-new';

export default class StoriesYourParkingSpace extends React.Component {
  displayName = 'StoriesYourParkingSpace'

  render() {
    return (
      <StoryPageNew
        title='With affordable fees, seamless integration, and easy-to-use customer experience, switching to GoCardless was an easy decision.'
        author='Charles Cridland'
        position='Technical Director'
        company='YourParkingSpace.co.uk'
        benefits='TBC'
        bgimgUrl=''
        sidebarLogoSrc='/images/stories/story-logos/your-parking-space.png'
        sidebarServices='An online marketplace designed to make parking your car easier'
        sidebarEmployees='10 employees'
        sidebarPreviousProvider='TBC'
        sidebarTimeSaved='Countless hours!'>
        <div className='story-body'>
          <p className='para u-margin-Tn'>
            <a href='https://www.yourparkingspace.co.uk/' className='u-link-color-p u-text-underline'>YourParkingSpace</a> is one of the
            UK’s fastest growing sharing economy companies, enabling private individuals, landowners and commercial organisations to
            capitalise on their underutilised parking inventory.
          </p>
          <p className='para'>
            Since launching in 2006, YourParkingSpace has experienced huge growth and now has over 250,000 parking spaces
            available to book online.
          </p>
          <p className='para'>
            In October 2014, YourParkingSpace celebrated £250,000 in funding thanks to a partnership deal with leading UK car parking
            business NCP (National Car Parks). YourParkingSpace needed a Direct Debit payment provider to keep up with its success.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/your-parking-space/website@2x.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Reducing the cost
          </h2>
          <p className='para'>
            Before switching to GoCardless, YourParkingSpace was using a traditional Direct Debit provider. But Charles and his team
            found that the costs were high; with additional fees on top of transactions and customer cancellations all adding up.
          </p>
          <p className='para'>
            In addition, there were high admin overheads. “Everything had to be done manually, from creating the CSV file to submitting
            it via email each month, and then having to manually reconcile all the payments that were collected.” said Charles.
          </p>
          <p className='para'>
            “It was inflexible too - we could only charge payments once a month, meaning that every one of our monthly parking customers
            had to have their first payment adjusted to get them on the right payment cycle.”
          </p>
          <p className='para'>
            As a rapidly growing business, YourParkingSpace needed a scalable Direct Debit payment solution.
          </p>
          <p className='para'>
            “For a few hundred Direct Debit payments the old system just about worked; but for a few thousand it would have been a
            complete nightmare.”
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/your-parking-space/team@2x.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Reaping the benefits
          </h2>
          <p className='para'>
            YourParkingSpace reaped the benefits after switching, thanks to affordable fees, seamless integration, and an
            easy-to-use customer experience. “GoCardless showed us how easy it was to transfer our existing Direct Debit customers over.”
          </p>
          <p className='para'>
            YourParkingSpace has found the GoCardless customer experience is one of the key benefits.“Not even once have we had a
            customer complain or even ask a question about the signup process,” says Charles.
          </p>
          <p className='para'>
            Charles and the YourParkingSpace team would recommend GoCardless for any business that collects recurring monthly payments.
          </p>
          <p className='para'>
            “You’d be hard-pressed to find a better solution that either isn’t GoCardless or doesn’t include GoCardless,” says Charles.
          </p>
          <p className='story-page__quote'>
            “For collecting ongoing monthly payments, GoCardless is perfect – you can collect one-off payments, easily adjust the
            subscription amounts, and you don’t suffer from the problem of failed payments caused by expired credit or debit cards.”
          </p>
        </div>
      </StoryPageNew>
    );
  }
}
