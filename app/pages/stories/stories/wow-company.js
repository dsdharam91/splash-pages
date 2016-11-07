import React from 'react';
import StoryPageNew from '../story-page-new';
import Link from '../../../components/link/link';

export default class StoriesWowCompany extends React.Component {
  displayName = 'StoriesWowCompany'

  render() {
    return (
      <StoryPageNew
        title='I couldn’t quite believe that a system had been created that solved almost a decade of billing and payment headaches for us. Ever since that day, we’ve never looked back.'
        author='Peter Czapp'
        position='Co-Founder and Director'
        company='The Wow Company'
        benefits='TBC'
        bgimgUrl='url(/images/stories/story-images/wow-company/hero-wow-company.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/the-wow-company.png'
        sidebarServices='TBC'
        sidebarEmployees='TBC employees'
        sidebarTimeSaved='TBC'>
        <div className='story-body'>
          <p className='para u-margin-Tn'>
            <a href='http://www.thewowcompany.com/' className='u-link-color-p u-text-underline'>The Wow Company</a> is a firm of
            cloud accountants and business advisers that aims to take the boring out of bookkeeping and make small business finance
            something to get excited about.
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Advising small businesses
          </h2>
          <p className='para'>
            The role of the accountant in the business world is changing. Computers and technology are automating so many of the
            things accountants did in the past. The role of the accountant is now about being an adviser.
          </p>
          <p className='para'>
            “At Wow, we help businesses look forward, not just back at last year’s numbers. And a big part of that ‘looking forward’
            mentality is to give them the right tools and advice to help them do what they do best,” said Peter.
          </p>
          <p className='para'>
            This prompted Peter and his co-founder, Paul Bulpitt, to set up The Wow Company in 2004, with a team that’s at one with
            technology, has a real focus on amazing customer service and strives to make a genuine difference for clients.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/wow-company/team@2x.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Seek out the best tech
          </h2>
          <p className='para'>
            The Wow Company’s ethos is all about stressing the importance of small businesses seeking out new technology that makes their
            lives easier. This is how Peter first discovered GoCardless – while looking for a solution to solve cash-collection issues.
          </p>
          <p className='para'>
            “As a business, we have recurring billing. A decade ago, that meant going into a Word template, changing the dates,
            changing the amounts and putting the invoice into an email – and that was a nightmare. You’d spend days doing it each month.
          </p>
          <p className='para'>
            Then <a href='http://www.xero.com/' className='u-link-color-p u-text-underline'>Xero online accounting software</a> came along
            and automated that whole billing process, but clients were still using standing orders to pay those fees.
            Every time a client changed their monthly amount, or had additional billing, that
            standing order had to be changed – creating a nightmare that had no benefit for us or our clients.”
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            A flexible payment solution
          </h2>
          <p className='para'>
            Peter started looking around at better ways to collect company fees. He knew Direct Debit was a great option, but had
            been put off by the £25k bond the bank had insisted on – not to mention the unlimited personal guarantee they were asking for.
          </p>
          <p className='para'>
            “We felt there had to be a better way to collect those monthly fees. So I did a Google search for Direct Debit providers
            and up popped the GoCardless site,” Peter said.
          </p>
          <p className='para'>
            Within less than 20 mins he was set up and had completed a test payment.
          </p>
          <p className='story-page__quote'>
            “I was just amazed and in awe. I couldn’t quite believe that a system had been created that solved almost a decade of
            billing and payment headaches for us. Ever since that day, we’ve never looked back.”
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/wow-company/website@2x.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            How GoCardless transformed the business
          </h2>
          <p className='para'>
            Part of what Peter really loves about GoCardless is that it doesn’t just collect all the retainer fees, but the payments
            for ad-hoc work throughout the month too.
          </p>
          <p className='para'>
            “We’re connected up using <Link to='partners_xero' className='u-link-color-p u-text-underline'>GoCardless for Xero</Link>,
            so when we bill for additional work, that money is collected 48 hours later. We don’t have to lift a finger.
            It means that we don’t have to employ a finance team to chase our debts, and that’s a cost-saving
            we can invest back into the business and into improving the impact we have for clients.
          </p>
          <p className='para'>
            Our people can focus on higher-value tasks and client relationships, rather than chasing bills. GoCardless, as a solution,
            has just been an absolute revelation for our business and I can’t imagine life without it now."
          </p>
          <p className='story-page__quote'>
            "Moving payment collection to GoCardless has been transformational for us. We’re a completely different business as a
            result of GoCardless and the second we discovered it we started recommending it to our clients. For anyone who wants to
            sharpen up their cash-collection function it really is an astonishing tool.”
          </p>
        </div>
      </StoryPageNew>
    );
  }
}
