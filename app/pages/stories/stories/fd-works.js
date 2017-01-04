import React from 'react';
import StoryPageNew from '../story-page-new';
import Link from '../../../components/link/link';

export default class StoriesFdWorks extends React.Component {
  displayName = 'StoriesFdWorks'

  render() {
    return (
      <StoryPageNew
        title='When we heard about how easy GoCardless made the Direct Debit process we knew it was a no-brainer to start using it'
        author='Barbara Gaunt'
        position='Office Manager'
        company='FD Works'
        benefits='Streamlined processes and improved efficiency'
        bgimgUrl='url(/images/stories/story-images/fd-works/hero-fd-works.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/fd-works.png'
        sidebarServices='Management accountancy and business advisors'
        sidebarEmployees='8 employees'
        sidebarTimeSaved='2 hours every week'
        sidebarPartnerIntegration='GoCardless for Xero'>
        <div className='story-body'>
          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Tn'>
            A best friend in finance
          </h2>
          <p className='para'>
            In 2013, Jonathan Gaunt decided he’d had enough of being an in-house corporate management accountant. He wanted to
            start his own practice for small businesses in Bristol and the South West. That’s
            when <a href='http://www.fd-works.co.uk/' className='u-link-color-p u-text-underline'>FD Works</a> was born.
          </p>
          <p className='para'>
            “We’d seen so many accountants who only delivered the absolute basics: doing the statutory accounts and tax returns.
            As a management accountant, I knew how much value a business owner can get from having the right numbers and reporting
            at their fingertips,” said Jonathan.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/fd-works/jonathan@2x.jpg' alt='' />
          </div>
          <p className='para'>
            The close relationships that Jonathan, Barbara and the team build with their clients have got many Bristol-based
            creative agencies coming back for more.
          </p>
          <p className='para'>
            “Our tagline is ‘Your best friend in finance’ and that’s really what we’re about – being the trusted friend clients can
            come to when they’ve got a problem, or a question. It’s all about personal service, getting under the skin of the business
            and knowing what makes every client tick,” says Barbara.
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            A more efficient way to get paid
          </h2>
          <p className='para'>
            Many accountants struggle to get clients to pay their fees on time. This was certainly a challenge for FD Works at first.
          </p>
          <p className='para'>
            Unpaid invoices can leave a cash-flow hole, along with all the hassle of chasing up late payers. That’s how
            FD Works came to GoCardless – as a simple solution to this problem.
          </p>
          <p className='para'>
            As Barbara points out, it made all their client invoicing and credit control processes far less labour-intensive too.
          </p>
          <p className='para'>
            “We’ve been using GoCardless pretty much from the start of the business in 2013. It was Jonathan’s idea
            in the first instance – he’s always looking at new ways to streamline our processes and software tools
            that can improve our efficiency. I run most of the back-office finance work, so when we heard about how
            easy <Link to='partners_xero' className='u-link-color-p u-text-underline'>GoCardless for Xero</Link> made
            the Direct Debit process we knew it was a no-brainer to start using it.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/fd-works/barbara@2x.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            The benefits of moving to GoCardless
          </h2>
          <p className='para'>
            Barbara says the whole FD Works payment process has been transformed by the move to a simple Direct Debit approach.
          </p>
          <p className='para'>
            “The biggest benefit of GoCardless has been the time saved having to chase customers who’ve not paid. I was spending
            several hours a week on the phone, or sending out polite chaser emails to clients – and that time tends
            to stop you being efficient.”
          </p>
          <p className='para'>
            But once FD Works had GoCardless set up alongside their internal Xero online accounting software, it
            really cut back on that chasing time. Once a client has filled out
            the <Link to='example_checkout' className='u-link-color-p u-text-underline'>online e-mandate</Link>, they could just collect
            their payment at the same time every month.
          </p>
          <p className='story-page__quote'>
            “Before we moved to GoCardless, cash flow could be quite up and down, depending on who’d paid their bill and
            how big the hole was in our income for the month. Since we’ve put everyone onto the new payment model, we
            know exactly what’s coming down the cash pipeline each month – and that makes it so much easier to plan
            internal finances and spending.”
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Happy clients and an efficient payment process
          </h2>
          <p className='para'>
            FD Work’s clients love the fact they can automate their fee payments too – something that was a great additional
            bonus for Barbara.
          </p>
          <p className='story-page__quote'>
            “Clients really love the simplicity of the Direct Debit approach and they’ve been really positive about paying
            through GoCardless. Most are keen to set it up and to not have to worry any more about paying their invoices
            manually. It’s one less thing for them to worry about.”
          </p>
          <p className='para'>
            What works for FD Works is also great for their clients’ businesses too, something that Jonathan is keen
            to underline when talking to business owners about their own payment issues.
          </p>
          <p className='para'>
            “Cash flow is such an important stumbling block for new start-ups and small businesses. So we’ll always
            advise clients to put GoCardless in place and to move their payment options over to a more effective, cloud-based
            solution. The easier it is for their customers to pay a bill, the sooner that money’s in the bank, and the less
            time the business has to spend asking politely for their payment.”
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            A future focus on growth
          </h2>
          <p className='para'>
            “We’ve got ambitious plans for the next few years. We’ve already expanded from a core business of two, to a
            team of eight people. And we’re carving a great little niche in the creative industry too, alongside clients in
            the food, hospitality and technology sectors.”
          </p>
          <p className='para'>
            “With GoCardless taking care of payments, and that stable flow of income coming into the business, I think we’re
            in a good place to think about expanding even further and bringing our unique style of business advice
            to an even wider range of businesses.”
          </p>

        </div>
      </StoryPageNew>
    );
  }
}
