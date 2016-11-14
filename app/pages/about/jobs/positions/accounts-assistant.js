import React from 'react';
import JobsPage from '../jobs-page';

export default class AccountsAssistant extends React.Component {
  displayName = 'AccountsAssistant'

  render() {
    return (
      <JobsPage>
            <h3 className='u-text-heading-light u-text-m u-color-heading'>Accounts Assistant</h3>
        <p className='para'>
          GoCardless is growing fast. We’ve built a world-class product that opens up Direct Debit to
          small and medium-sized businesses across the UK and beyond, and we have
          recently extended our offering to multinational companies like the Guardian,
          TripAdvisor and Box. Thousands of business in the UK already rely on us to
          handle their payments, and hundreds more join us every week.
        </p>
        <p className='para'>
          We’re looking for an accounts assistant to support our Finance team with the daily
          bookkeeping operations of the company.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The role</h4>
        <p className='para'>
          As a member of the Finance team you will be responsible for ensuring our accounts
          are accurate and our processes and controls are maintained.
        </p>
        <p className='para'>You will be responsible for:</p>
        <ul className='list'>
          <li>
            Managing the day-to-day bookkeeping.
          </li>
          <li>
            Monthly reconciliation of balance sheet ledgers (including purchase ledgers,
            cash accounts, and the fixed asset register).
          </li>
          <li>
            Assisting the People team with monthly payroll.
          </li>
          <li>
            Inputting and maintaining all manual journal entries.
          </li>
          <li>
            Initiating and making payments (business and personal).
          </li>
          <li>
            Supporting monthly accounts preparation, and yearly audit.
          </li>
        </ul>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>What we're looking for</h4>
        <p className='para'>
          We’re looking for a team player, capable of working with people from different
          backgrounds and experience.
        </p>
        <p className='para'>
          You should apply if:
        </p>
        <ul className='list u-margin-Tm'>
          <li>
            You have previous experience as a bookkeeper preferably working with SMEs or startups.
          </li>
          <li>
            You have completed, or are in the process of completing your AAT, or equivalent exams.
          </li>
          <li>
            You have strong working knowledge of Xero.
          </li>
          <li>
            You are detail orientated, highly organised and can work without direction.
          </li>
          <li>
            You are innovative and willing to look to implement new processes within the finance team around bookkeeping.
          </li>
          <li>
            You have great communication and interpersonal skills, and are able to build strong and productive relationships.
          </li>
        </ul>
        <p className='para'>
          This role would ideally suit someone with experience in a fast-paced startup, who is looking for a new challenge,
          and to tackle a high growth company. However, our team comes from a variety of backgrounds and we
          welcome diversity &ndash; if you are unsure, please apply.
        </p>
        <a href='http://boards.greenhouse.io/gocardless/jobs/173054' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
