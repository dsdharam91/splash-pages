import React from 'react';
import JobsPage from '../jobs-page';

export default class CustomerSuccessManager extends React.Component {
  displayName = 'CustomerSuccessManager'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Customer Success Manager </h3>
        <p className='para'>
          Help our larger customers make recurring payments simple.
        </p>
        <p className='para'>
          GoCardless is growing fast. We’ve built a world-class product that opens up Direct Debit to
          small and medium-sized businesses across the UK and beyond, and we have recently extended
          our offering to larger companies like the Guardian, TripAdvisor and Box.
          Thousands of business already rely on us to handle their payments, and hundreds more join us every week.
        </p>
        <p className='para'>
          We’re looking for a conscientious, creative and organised problem-solver to
          join our growing Customer Success team.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The role</h4>
        <p className='para'>
          As a Customer Success Manager, you will be responsible for the long term success of our larger merchants with GoCardless.
        </p>
        <p className='para'>Day to day, you will:</p>
        <ul className='list'>
          <li>
            Proactively organise operational and strategic conduct reviews with our merchants to optimise
            their usage of GoCardless.
          </li>
          <li>
            Be creative in discovering opportunities to add use cases, creating value for customers and GoCardless.
          </li>
          <li>
            Work closely with the Head of Customer Success to refine and improve processes.
          </li>
          <li>
            Manage and co-ordinate escalations by working with our Operations and Engineering teams.
          </li>
          <li>
            Create and update account plans for each account, for example, forecasting.
          </li>
          <li>
            Advocate for our merchants internally by delivering informed, quantified feedback.
          </li>
          <li>
            Help the Sales team successfully onboard new merchants.
          </li>
          <li>
            Support the Marketing team by delighting customers, leading to referrals, testimonials and case studies.
          </li>
        </ul>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>What we're looking for</h4>
        <p className='para'>
          We’re looking for someone who relishes the challenge of understanding each merchant and their industry.
        </p>
        <p className='para'>You should apply if:</p>
        <ul className='list u-margin-Tm'>
          <li>
            You enjoy solving problems, but prefer preventing them.
          </li>
          <li>
            You have a proven track record in understanding complexity and then simplifying.
          </li>
          <li>
            You enjoy the relationship side of business, and partnering with customers.
          </li>
          <li>
            You are commercially astute.
          </li>
          <li>
            You are naturally inquisitive.
          </li>
          <li>
            You are able to stay organised and calm, even in high pressure situations.
          </li>
          <li>
            You have experience prioritising between multiple important and urgent issues.
          </li>
          <li>
            You are passionate about technology.
          </li>
          <li>
            You believe in making sure our customers are at the forefront of our efforts.
          </li>
        </ul>
        <p className='para'>
          This role particularly suits people with previous Customer Success experience for a B2B SaaS
          company. However our team come from a variety of backgrounds and we welcome diversity &ndash;
          if you’re unsure, please apply.
        </p>
        <p className='para'>
          In your application, please include your CV and a cover letter
          explaining why you are a great candidate for this position.
        </p>
        <a href='http://boards.greenhouse.io/gocardless/jobs/175808' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
