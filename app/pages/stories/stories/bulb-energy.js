import React from 'react';
import StoryPageNew from '../story-page-new';

export default class StoriesBulbEnergy extends React.Component {
  displayName = 'StoriesBulbEnergy'

  render() {
    return (
      <StoryPageNew
        title='GoCardless was the most simple, reliable and advanced Direct Debit system we found.'
        author='Hayden and Amit'
        position='Co-founders'
        company='Bulb'
        benefits='Low-cost, renewable energy combined with market-leading customer service.'
        bgimgUrl='url(/images/stories/story-images/bulb-energy/hero-bulb.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/bulb-energy.png'
        sidebarServices='Providing low-cost, renewable energy and market-leading customer service.'
        sidebarEmployees='Growing too quickly to keep up!'>
        <div className='story-body'>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Tn'>
            Finding better ways to provide the UK's energy
          </h2>
          <p className='para'>
            <a href='https://bulb.co.uk/' className='u-link-color-p u-text-underline'>Bulb</a> is a technology-led, 100% renewable energy supplier.
            It gives UK consumers and businesses a brand new choice: low-cost, renewable energy combined with market-leading customer service.
          </p>
          <p className='para'>
            The UK energy market is a tricky proposition for new entrants. Long-established providers dominate the scene.
            Many consumers don’t know that they can switch away from the household names and instead benefit from innovative new players.
            Bulb is one of these.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/bulb-energy/launchparty@2x.jpg' alt='' />
          </div>
          <p className='para'>
            Hayden and Amit, Bulb's co-founders, both used to work in the traditional energy industry.
            They soon noticed that energy consumers were getting a raw deal.
            Prices were too high. Customer service was awful. Something had to be done.
          </p>
           <p className='para'>
            But first it was key for Bulb to develop an offering that would make it stand out against the existing behemoths.
            Keeping customer costs low was the best way to do this - so Hayden and Amit leveraged technology to help them get there.
          </p>
          <p className='story-page__quote'>
            “We developed an advanced in-house IT system.
            It automates a lot of the issue-resolution normally done by large teams of employees at other energy companies.
            We also keep all our wholesale energy trading in-house, allowing us to keep costs far lower than our competitors.
            Then we pass this saving on to our members.”
          </p>
          <p className='para'>
            Bulb are encouraging people to switch providers by making sure they know they can do so -  and that it’s incredibly easy! 29 million energy consumers exist in the UK.
            But 60% of them don’t recall ever switching energy suppliers. That creates a perfect target for a disruptor like Bulb.
          </p>
          <p className='story-page__quote'>
            Less than 1% of that market chose to switch to 100% renewable suppliers in the last ten years.
            So we saw a growing market as more people realise they can switch and that renewable energy can be truly affordable.
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Switching to GoCardless
          </h2>
          <p className='para'>
            For Bulb, it was important to have a convenient, flexible and reliable solution for taking payments from the growing customer base.
            That’s why Bulb chose Direct Debit, delivered through GoCardless.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/bulb-energy/website@2x.jpg' alt='' />
          </div>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            The benefits
          </h2>
          <p className='para'>
            According to Bulb, the main benefits of using GoCardless have been its simplicity and ease of use, along with its ability to integrate into the existing Bulb systems.
          </p>
          <p className='story-page__quote'>
            We wanted to give our members whatever payment options they most trusted and were the most convenient.
            GoCardless was the most simple, reliable and advanced Direct Debit system we found.
          </p>
        </div>
      </StoryPageNew>
    );
  }
}
