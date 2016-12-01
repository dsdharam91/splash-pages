import React from 'react';
import StoryPageNew from '../story-page-new';

export default class StoriesTeamUp extends React.Component {
  displayName = 'StoriesTeamUp'

  render() {
    return (
      <StoryPageNew
        title='We thought GoCardless was an incredible leap forward, with a technological solution to a traditional method of payment.'
        author='Tim Green'
        position='Director'
        company='Teamup'
        benefits='TBC'
        bgimgUrl='url(/images/stories/story-images/hotpod-yoga/hero-hotpod-yoga.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/teamup.png'
        sidebarServices='Fitness Business Management Software'
        sidebarEmployees='10+'
        sidebarPreviousProvider='None'>
        <div className='story-body'>
          <p className='para u-margin-Tn'>
            <a href='https://goteamup.com/en-us/' className='u-link-color-p u-text-underline'>Teamup</a> started as a consumer
            facing business tool, which has grown into one of the leading fitness industry focused business platforms. The company has
            developed through listening to customers and implementing feature upgrades that have made their customers more successful.
          </p>
          <p className='para'>
            Five years later, thousands of fitness professionals now rely on Teamup to make sure their customers have a friction-free
            experience with their business.
          </p>
          <p className='para'>
            “Like any new business, establishing a foothold and making your first customers happy is an energetic and exciting process,
            but not without its challenges. Early on we realised that reliable payment processing was absolutely crucial to that
            experience,” says Tim.
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Discovering Direct Debit
          </h2>
          <p className='para'>
            After experimenting with different methods, Teamup discovered GoCardless and developed a custom integration around
            its Direct Debit payment software.
          </p>
          <p className='story-page__quote'>
            “Before GoCardless we were only offering credit card payments, and we knew that this wasn’t ideal for the UK fitness
            market that relies on the revenue from subscriptions.”
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/teamup/teamup1@2x.jpg' alt='' />
          </div>
          <p className='para'>
            According to Teamup, the main benefits for any business of working with GoCardless is the incredibly stable and reliable
            platform. Teamup operate completely via the API, and have built additional functionality on top of the integration that
            helps fitness customers.
          </p>
          <p className='para'>
            But any business can benefit from simply signing up and using the dashboard for recurring payments, without long term
            commitment. In fact, Teamup encourage new businesses to do this for starters, and then when they’re ready, upgrade to
            Teamup to add the extra functionality that the company offers.
          </p>
          <p className='story-page__quote'>
            “The customer support at GoCardless has always been excellent and we've been able to trust the team to handle our
            customers in a personal and professional way, exactly the same as we do ourselves.”
          </p>
          <p className='para'>
            If you are currently offering credit cards, or just want to get started, then the GoCardless Direct Debit system will
            allow you to offer your clients a professional way to pay you.
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Integrating the GoCardless API
          </h2>
          <p className='para'>
            Integrating GoCardless as a partner has been an easy ride for Teamup.
          </p>
          <p className='para'>
            “The key is the professional team behind the platform. The API has developed, and for any capable development team it’s
            simple to integrate it into existing payment flows. With a growing number of partners, it should be possible to find a
            way to simply click and be immediately live – like with Teamup for fitness and class based businesses.”
          </p>
          <p className='story-page__quote'>
            “Customers love GoCardless, and have found it reliable and great value for the benefits they get from it.”
          </p>
          <img src='/images/stories/story-images/teamup/teamup2@2x.jpg' alt='' />
          <p className='para'>
            According to Tim, the fitness industry is micro-niching at some pace. This development is an exciting one for Teamup
            not just because the company helps small to medium businesses grow, but also because it’s full of fitness enthusiasts.
          </p>
          <p className='para'>
            Teamup also sees a huge rise in franchise businesses, so it has developed a special franchise management platform that
            helps both franchisors and franchisees operate with the same ease as any of its customers.
          </p>
          <p className='para'>
            This platform includes custom reporting, revenue share payment management and more. What’s more, Teamup uses GoCardless
            as the mechanism, meaning that every size of business can also benefit from the same reliable payments as existing
            Teamup customers.
          </p>
        </div>
      </StoryPageNew>
    );
  }
}
