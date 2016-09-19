import React from 'react';
import StoryPageNew from '../story-page-new';

export default class StoriesFundingCircle extends React.Component {
  displayName = 'StoriesFundingCircle'

  render() {
    return (
      <StoryPageNew
        title='We needed a payments tool that could scale with the business. GoCardless really improve & tailor their product to each customer’s specific needs.'
        author='Elsa Ferreira'
        position='Payments Team Leader'
        company='Funding Circle'
        benefits='Automating a huge number of tasks and paying out to multiple bank accounts with a single integration.'
        bgimgUrl='url(/images/stories/story-images/funding-circle/hero-funding-circle.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/funding-circle.png'
        sidebarServices='Peer-to-peer lending for SMEs'
        sidebarEmployees='500+ employees'
        sidebarPreviousProvider='Link Financial'
        sidebarTimeSaved='5 hours+'>
        <div className='story-body'>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Tn'>
            Boosting the UK's small businesses
          </h2>
          <p className='para'>
            <a href='https://www.fundingcircle.com/uk/' className='u-link-color-p u-text-underline'>Funding Circle</a> launched in the
            gloomy aftermath of the financial crisis. As SMEs everywhere struggled to access bank finance, the peer-to-peer lending
            platform began facilitating much-needed loans to businesses across the UK. Within months the platform took off.
          </p>
          <p className='para'>
            Two years later it expanded to the US, and in October 2015 began operating in Germany, Spain and the Netherlands.
            At the time of writing, Funding Circle has lent more than $2.5bn to 20,000 businesses globally, employs over 500 people and
            continues to grow at an astonishing rate.
          </p>
          <p className='para'>
            “We’ve needed to continually reassess our processes to make sure we’re using the correct tools to grow efficiently,”
            explains Elsa, who’s been with the company for just over 2 years and is now Payments Team Leader.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/funding-circle/founders1@2x.jpg' alt='' />
          </div>
           <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Switching to GoCardless
          </h2>
          <p className='para'>
            In June 2013 the team began looking for a new provider, and soon found GoCardless. By December, Funding Circle had made the switch – initially to GoCardless before upgrading to GoCardless Pro in March 2015. To ensure the process went as smoothly as possible, GoCardless account managers were on hand to answer any query at the touch of a button.
          </p>
           <p className='story-page__quote'>
            GoCardless really want to improve and tailor their product to each customer’s specific needs.
            They are quick to respond when you contact them, with very good customer support.
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Growing into Pro
          </h2>
          <p className='para'>
          According to the payments team, moving to GoCardless meant a dramatic reduction in admin overheads almost immediately, with customer refunds and partial payments “much easier to process”.
          But as Funding Circle continued to grow, it soon became apparent that GoCardless Pro – which is designed for larger firms and enables complete control over payment pages and customer notifications – would be an even better solution.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/funding-circle/founders2@2x.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            The benefits
          </h2>
          <p className='para'>
          So in March 2015 the team moved to GoCardless Pro and took advantage of the improved API to automate more of the process.
          “Now with access to the API we can automate a huge number of tasks, which results in considerable time saving,” explains Jinden Badesha, Senior Product Manager at Funding Circle.
          </p>
          <p className='story-page__quote'>
            What’s more, GoCardless Pro allows us to pay out to multiple bank accounts with a single integration.
          </p>
          <p className='para'>
            In fact, Elsa’s team alone have found that they can save at least five hours a week thanks to GoCardless Pro’s automated service – a time saving that will grow as more parts of the process are automated and the business continues to scale.
          </p>
          <p className='para'>
            Other benefits of Pro include complete control over branding. With the Pro offering, Funding Circle ensures that only its own branding appears on client bank statements, payment pages and emails – helping Funding Circle maintain its brand as it expands into new markets.
          </p>
          <p className='para'>
            And there are cost savings too. By upgrading to GoCardless Pro, Funding Circle moves from the standard 1% transaction fee to a tiered transaction fee, which is set to automatically reduce as the business grows.
          </p>
          <p className='para'>
           “It’s simple really,” explains Elsa. “We just make sure that we always use tools that can scale efficiently with our business.”
          </p>
        </div>
      </StoryPageNew>
    );
  }
}