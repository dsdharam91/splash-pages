import React from 'react';
import StoryPageNewEn from '../story-page-new.en';

export default class StoriesHotpodYoga extends React.Component {
  displayName = 'StoriesHotpodYoga'

  render() {
    return (
      <StoryPageNewEn
        title='GoCardless has enabled us to reduce the risks associated with franchise payments.'
        author='Max Henderson'
        position='Co-Founder'
        company='Hotpod Yoga'
        benefits='Seamless money transfers, reducing the risk in franchise payments and excellent customer support.'
        bgimgUrl='url(/images/stories/story-images/hotpod-yoga/hero-hotpod-yoga.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/hotpod-yoga.png'
        sidebarServices='Providing hot yoga to the masses'
        sidebarEmployees='2 employees, 16 franchisees and 45 instructors.'
        sidebarPreviousProvider='Manual invoices'
        sidebarTimeSaved='Currently 1-2 hours per month but this time is growing rapidly as they scale up.'>
        <div className='story-body'>
          <p className='para u-margin-Tn'>
            Hotpod Yoga was founded by Max Henderson and Nick Higgins in January 2007, it was born out of a mission to make the benefits
            of hot yoga accessible to as many people, in as many places as possible.
          </p>
          <p className='para'>
            “We were both really excited by yoga,” explains Max “yet, surprisingly neither of us were really ‘yoga people.’ We both found
            the industry to be quite inaccessible; it felt otherworldly and full of ‘guru’ types. We were just two regular guys who were
            into yoga and could see a huge gap in the market.”
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/hotpod-yoga/founders@2x.jpg' alt='' />
          </div>
          <p className='para'>
            Hotpod Yoga are making hot yoga accessible for the masses by creating low-cost, practical and portable hot yoga studios that
            reduce the risks involved with setting up a studio.
          </p>
          <p className='story-page__quote'>
            Before our offering, opening a hot yoga studio was a pretty terrifying prospect, the costs and risks involved would make it
            near impossible for a regular yoga instructor to undertake.
          </p>
          <p className='para'>
            The Hotpod Yoga team are ambitious and growing quickly, with over twenty-two sites in five different countries in around
            three years. But they see this as just the beginning of their journey.
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Switching to GoCardless
          </h2>
          <p className='para'>
            Hotpod Yoga switched to GoCardless two years ago when they moved their booking system from MindBody to TeamUp. Max felt it
            was a great partnership from day one, GoCardless has enabled them to seamlessly send and receive money whilst TeamUp
            understands and adapts to their business needs, both helping the organisation to run more smoothly.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/hotpod-yoga/benches@2x.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            The benefits
          </h2>
          <p className='para'>
            According to Max, moving to GoCardless has saved them both time and money, the transition from manual invoices has freed up
            some of their valuable time, as the business grows, so will the time saved.
          </p>
          <p className='story-page__quote'>
            Switching to GoCardless cuts out process, frees up time, and avoids the need to employ a dedicated member of staff.
          </p>
          <p className='para'>
            “Our business is growing at a rapid rate,” explains Max “at some point, checking invoices would end up becoming a fulltime
            job. Switching to GoCardless cuts out this process, freeing up time, and avoiding the need to employ a dedicated member of
            staff.”
          </p>
          <p className='para'>
            TeamUp and GoCardless have become important elements of the organisational infrastructure that Hotpod Yoga sells on to
            franchisees; having seamless processes helps news franchises to feel confident and supported.
          </p>
          <p className='para'>
            “Typically, one of main risks associated with operating a franchise is knowing that franchisees are transferring the
            correct amounts in a secure way. GoCardless has enabled us to reduce the risks associated with franchise payments, which
            is also great from our investor’s perspective”
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/hotpod-yoga/bendy@2x.jpg' alt='' />
          </div>
          <p className='para'>
            As well as the functional elements of GoCardless, Max has been impressed by the level of customer support.
          </p>
          <p className='para'>
            “You often imagine a payment provider to be a faceless institution but I’ve always been really amazed by the quick and
            personal response to enquiries. It’s great to know there’s always someone on the other end that’s willing to help. It’s so
            refreshing compared to the behaviour of big institutions that we’re used to.”
          </p>
        </div>
      </StoryPageNewEn>
    );
  }
}
