import React from 'react';
import StoryPageNew from '../story-page-new';

export default class StoriesSoaringFalcon extends React.Component {
  displayName = 'StoriesSoaringFalcon'

  render() {
    return (
      <StoryPageNew
        title='Cash flow is key for the growth of my business. GoCardless gives me a regular income so I can use the funds for my next growth plans.'
        author='Alex Falcon Huerta'
        position='Founder'
        company='Soaring Falcon Accountancy'
        benefits='Saving time, saving money, growing faster'
        bgimgUrl='url(/images/stories/story-images/hotpod-yoga/hero-hotpod-yoga.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/soaring-falcon.png'
        sidebarServices='Tech-focused cloud accounting services'
        sidebarEmployees='Three'
        sidebarPreviousProvider='Used GoCardless from the very beginning'
        sidebarTimeSaved='Two days every month'>
        <div className='story-body'>
         <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Soaring towards growth
          </h2>

          <p className='para'>
            Alex Falcon Huerta launched Soaring Falcon Accounting in April 2015. Prior to that she worked for a small accounting practice.
            It was around the time that accountants were becoming more aware of tech. That encouraged Alex to start out on her own.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/soaring-falcon/alex@2x.jpg' alt='' />
          </div>
          <p className='story-page__quote'>
            “There were so many cool add-ons available, but my previous firm wasn’t really embracing them.
            It was quite demoralising for me at the time because having the tech would have made life so much easier,” says Alex.
          </p>
          <p className='para'>
            At her previous job, Alex had her own internal systems set up for her clients while everyone else used their old ones.
            Because of this she was working far more efficiently than the others, getting her tax returns done really quickly.
          </p>
          <p className='story-page__quote'>
            “Making sure the new business is 100% cloud has been my biggest achievement.
            GoCardless has allowed me to grow further without having to spend lots of money on hiring staff. Now I can set up and make payments immediately.”
          </p>
          <p className='para'>
            GoCardless has saved Alex a lot of time. For example, she can use the system instead of doing standing orders by paper.
            This could save a day, or even two days, because without it clients risk taking ages to send back the paperwork.

            “I didn’t want something like PayPal, as it just wasn’t a good fit.
            I have fixed fees for my clients on a monthly basis. Also, I wanted something user friendly with good interface and good support,"says Alex.

          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Growing with GoCardless
          </h2>
          <p className='para'>
            “With my new venture I’ve used GoCardless from the very beginning.
            Cash flow is key for the growth of my business and GoCardless gives me a regular income.
            I can then use the funds to support my plans for growth.”
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/soaring-falcon/office@2x.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Future plans
          </h2>
          <p className='para'>
            AAlex uses social media to make people aware that she runs a tech-savvy cloud business.
            She also relies on client recommendations that highlight how she has made her business more efficient thanks to technology.
          </p>
          <p className='story-page__quote'>
            “My future goals are to keep growing the business. I want to specialise so I need to make sure I’ve a good team to support me.
            I’m looking at added value services and I also want to collaborate with bookkeeping companies and add-on partners.
          </p>
          <p className='para'>
            “I’ve got two staff at present and am aiming for another two or three.
            I don’t need to go too crazy with hiring, as I have the tech to support me. But I’m still hiring a tax specialist - because tech can’t yet replace one of those!”
          </p>
        </div>
      </StoryPageNew>
    );
  }
}
