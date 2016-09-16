import React from 'react';
import StoryPageNewEn from '../story-page-new.en';

export default class StoriesBoostCapital extends React.Component {
  displayName = 'StoriesBoostCapital'

  render() {
    return (
      <StoryPageNewEn
        title='Being able to offer our customers truly paperless Direct Debit is a great selling point. It also helps to speed up on-boarding of customers.'
        author='Alex Littner'
        position='Managing Director'
        company='Boost Capital'
        benefits='Fully automated service, fast funding and a human touch.'
        bgimgUrl='url(/images/stories/story-images/boost-capital/hero-boost-capital.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/boost-capital.png'
        sidebarServices='Providing unsecured loans for small businesses.'
        sidebarEmployees='11-50 employees'
        sidebarPreviousProvider='Eazipay'
        sidebarTimeSaved='Faster onboarding, reduced admin time'>
        <div className='story-body'>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Tn'>
            Open for business when the banks close their doors.
          </h2>
          <p className='para'>
            <a href='http://www.boostcapital.co.uk/' className='u-link-color-p u-text-underline'>Boost Capital</a> helps small businesses
            grow by providing them with unsecured business loans.
            To date, Boost Capital has lent over £750m to businesses across more than 400 different industries in the UK and North America.
            Boost Capital loans don’t require any assets, so the company can lend to businesses in sectors that banks have traditionally
            deemed too risky, including hospitality. Customers usually require funding for short-term cash flow needs, but also for
            expansion, renovation, buying stock, new equipment, and marketing.
          </p>
          <p className='para'>
            “Where many of our peers offer a fully automated service, we are able to provide fast funding AND a human touch, explained Alex.
            We consider each application on a case by case basis and each our customers has direct access to a dedicated relationship manager.”
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/boost-capital/team@2x.jpg' alt='' />
          </div>
          <p className='para'>
            The Boost Capital application process is quick and hassle free, requiring minimal paperwork.
            It can provide small businesses with access to funding in as little as 2 days from start to finish.
          </p>
          <p className='story-page__quote'>
            Being able to offer our customers a truly paperless Direct Debit set up option is a great selling point.
            This also helps speed up on-boarding of customers.
          </p>
          <p className='para'>
            Boost Capital was already using Direct Debit before discovering GoCardless. But the massive volume of paperwork and
            potential for human error compelled the company to seek an alternative provider. GoCardless helped Boost Capital to
            finally reduce its huge paperwork burden. Online functionality and a more automated service were additional factors in
            the decision to switch to GoCardless.
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Switching to GoCardless
          </h2>
          <p className='para'>
            The strong reputation of GoCardless also encouraged Boost Capital to switch its Direct Debit provider.
            Having heard great things about GoCardless from other businesses in the same industry, Boost Capital decided to take the
            leap and switch to GoCardless. Boost Capital takes payment by Direct Debit more often than most businesses, which caused
            some implementation challenges at first. But GoCardless swiftly put together a great solution and Boost Capital has never
            looked back.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/boost-capital/lemons@2x.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            The benefits
          </h2>
          <p className='para'>
            Since switching to use GoCardless, Boost Capital has sped up its on-boarding process for new customers, reduced the
            admin time for staff setting up Direct Debits, achieved full visibility via the GoCardless dashboard, started enjoying
            the freedom of paperless Direct Debit, and, most importantly - offered an all-around better service for its customers.
          </p>
          <p className='story-page__quote'>
            It's a massive help having access to a live dashboard showing at what stage each customer and each payment is at.
          </p>
        </div>
      </StoryPageNewEn>
    );
  }
}
