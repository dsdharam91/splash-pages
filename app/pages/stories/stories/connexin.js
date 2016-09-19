import React from 'react';
import StoryPageNew from '../story-page-new';

export default class StoriesConnexin extends React.Component {
  displayName = 'StoriesConnexin'

  render() {
    return (
      <StoryPageNew
        title='Our monthly bill runs are quick and easy since switching to GoCardless'
        author='Alex Yeung'
        position='Co-founder'
        company='Connexin'
        benefits='Huge reduction in payment processing admin, increased flexibility in payment timings, better signup experience'
        bgimgUrl='url(/images/hero/hero-stories.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/connexin.png'
        sidebarServices='Business telephony services, VoIP, fibre & data services'
        sidebarEmployees='23 employees'
        sidebarPreviousProvider='Cashbacs'
        sidebarTimeSaved='12 days per year'>
        <div className='story-body'>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Tn'>
            From humble beginnings to international reach
          </h2>
          <p className='para'>
            Founded in the city of Hull as a bedroom
            hobby, <a href='http://www.connexin.co.uk/' className='u-link-color-p u-text-underline'>Connexin</a> provides hosted
            telephony services to both business and residential customers, while also owning and managing two UK fibre networks.
            Connexin offers wireless broadband, without line rental, at speeds of up to 2 Gbps for businesses and up to 60 Mbps
            for residential customers. Before Connexin started there was only one internet provider in Hull.
            The founders, Alex and Furqan, spotted a gap in the market and decided to offer an alternative option.
            They created the first metropolitan wireless and fibre hybrid network in the city.
          </p>
          <p className='para'>
            “We questioned why it cost so much to make telephone calls abroad. This curiosity led us to learning about how phone
            systems worked and how calls were carried,” says Alex.
            “We felt that the technology was outdated and that things could be done greener and better. So we built our own voice
            platform and before we knew it, Connexin was born.”
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/connexin/connexin@2x.jpg' alt='' />
          </div>
          <p className='para'>
            Alex ran the business during daytime while Furqan handled the night shift. As families and friends started
            using the alternative, they started to think that maybe they had a viable product.
            Now Connexin is a ten year old business, still based in Hull, but with a view to expand to 20 more cities around the UK.
            But how did they handle all their customer payments? Before switching to GoCardless, Connexin used Cashbacs to process
            direct debits.
          </p>
          <p className='story-page__quote'>
            “The process of invoicing was long and labour intensive; once a month we’d spend a whole day inputting numbers into
            the Cashbacs software. Some days I’d still be at my desk by 10pm!”
          </p>
          <p className='para'>
            Connexin needed a solution that would fully integrate into their own CRM system.
            Alex says: "It would have been very difficult to integrate Cashbacs into our CRM, as a growing business
            we needed a scalable solution.”
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Switching to GoCardless
          </h2>
          <p className='para'>
            Alex eventually discovered GoCardless and decided to switch. “Transferring to GoCardless has hugely reduced
            the time we spend processing payments. It also allows us to take payments more than once a month and we can
            offer our customers one-off payments without taking card details over the phone.”
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            The benefits
          </h2>
          <p className='para'>
            The Connexin founders chose GoCardless due to its simplicity and ease of use.
            “Our customers were finding the old system difficult to navigate,” says Alex.
            “The sign-up process and front end design of GoCardless gives them a much better experience.”
          </p>
          <p className='story-page__quote'>
            Switching to GoCardless cuts out process, frees up time, and avoids the need to employ a dedicated member of staff.
          </p>
          <p className='para'>
            As the Connexin business grows, Alex and his team are happy they switched to GoCardless.
          </p>
          <p className='para'>
            "Finding the right software for your business is so important. You need a solution that scales and can work around you.
            GoCardless is simple, easy to use and has reduced the time and money we spend on processing direct debits.”
          </p>
        </div>
      </StoryPageNew>
    );
  }
}
