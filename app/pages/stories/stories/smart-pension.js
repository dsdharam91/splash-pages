import React from 'react';
import StoryPageNew from '../story-page-new.en';

export default class StoriesSmartPension extends React.Component {
  displayName = 'StoriesSmartPension'

  render() {
    return (
      <StoryPageNew
        title='GoCardless ensures our transactions are accurate, easy to setup and manage. It is also significantly cheaper compared to credit card.'
        author='Will Wynne'
        position='Co-Founder'
        company='Smart Pension'
        benefits='Technology-focused approach, bolted on to a robust and secure underlying pension product.'
        bgimgUrl='url(/images/stories/story-images/smart-pension/hero-smart-pension.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/smart-pension.png'
        sidebarServices='Helping SMEs with auto-enrolment for employee pension schemes'
        sidebarEmployees='11-50 employees'>
        <div className='story-body'>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Tn'>
            Shaking up UK pensions
          </h2>
          <p className='para'>
            <a href='https://www.autoenrolment.co.uk/' className='u-link-color-p u-text-underline'>Smart Pension</a> was born as a direct
            response to a major shift in the UK pensions landscape. The UK government recently introduced a requirement for all employers
            to provide a workplace pension for their employees. This means that millions of employees will suddenly start saving into a
            pension for the first time. It presented an unmissable opportunity for the founders of Smart Pension, Will Wynne and Andrew
            Evans.
          </p>
          <p className='para'>
            “When I first discussed auto enrolment with my Smart Pension co-founder, Andrew, I had no idea that this change was coming.
            I thought he must be misinformed or even delusional. It seemed a huge change for a company director such as myself never to
            have even heard about. But having researched the market, it turned out Andrew was indeed right!”
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/smart-pension/team@2x.jpg' alt='' />
          </div>
          <p className='para'>
            The existing approach to auto enrolment of employee pensions relied on inefficient manual processes, a ‘mechanical Turk’
            approach, as Will puts it. This was simply not going to work for SMEs, as there were far too many employers to service.
            In response, Smart Pension developed a technology-focused approach, bolted on to a robust and secure underlying pension product.
          </p>
            <p className='para'>
            But at the beginning, credibility was a hurdle for Smart Pension.
            As a startup competing with huge institutions, including FTSE 100 listed companies and the UK Government itself, Smart Pension
            faced a major challenge. How could a new entrant to the market compete with 200 years of pedigree?
          </p>
          <p className='story-page__quote'>
            In the early days we worked hard to prove that we were credible, diligent and experienced - to prove we were the real deal.
            It was very tough at the start but we had a plan, we executed it, and we're now established as part of the workplace pensions
            landscape.
          </p>
          <p className='para'>
            For Smart Pension, the biggest achievement is having built, proven and scaled a product in a highly regulated space that is
            already best in class. Not only that, but also maintaining such a high level of efficiency that Smart Pension can offer the
            product at zero cost to employers. This gives Smart Pension a significant edge over the competition, most of whom charge
            employers to use their services.
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Switching to GoCardless
          </h2>
          <p className='para'>
            Smart Pension considered a number of options for collecting client payments, but decided Direct Debit was the best one for
            keeping payment costs low. The founders needed a system that was simple to set up and offered automation capability.
            Smart Pension also wanted to avoid the hassle of chasing small amounts of money from vast numbers of customers.
            The system had to work smoothly with no manual intervention from the team. Smart Pension also needed to integrate the payment
            provider into the existing solution, so it was important to find a credible partner.
          </p>
          <p className='story-page__quote'>
            We didn’t want to spend time working on integrating a tech solution only for the partner to go bust.
            GoCardless is a big success story so no concerns there.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/smart-pension/website@2x.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            The benefits
          </h2>
          <p className='para'>
            The simple <a href='https://developer.gocardless.com/' className='u-link-color-p u-text-underline'>GoCardless API</a> was easy
            for Smart Pension to integrate into the existing system, via plug and play integration into the Ruby on Rails platform.
            Smart Pension were up and running with GoCardless in under a week, with help from GoCardless support, which ensured existing
            clients were unaffected by the transition.
          </p>
          <p className='story-page__quote'>
            Using GoCardless ensures our transactions are 100% accurate, easy to setup and manage for our clients. It's also significantly
            cheaper when compared to credit card or visa card equivalent transactions.
          </p>
          <p className='para'>
            The future already looks bright for Smart Pension, just 12 months after it started operations. In July 2016, the FTSE 100 firm
            Legal &amp; General Investment Management (LGIM), once a competitor, decided to invest in Smart Pension. This new venture is a
            big win that will give small pension schemes access to a range of LGIM DC pension funds specifically designed for use with the
            Smart Pension product.
          </p>
          </div>
      </StoryPageNew>
    );
  }
}
