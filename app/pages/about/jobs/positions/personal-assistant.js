import React from 'react';
import JobsPage from '../jobs-page';

export default class PersonalAssistant extends React.Component {
  displayName = 'PersonalAssistant'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Personal Assistant </h3>
        <p className='para'>
          GoCardless is growing fast. We’ve built a world-class product that opens up Direct Debit to small
          and medium-sized businesses across the UK and beyond, and we have recently extended our offering to
          multinational companies too. Thousands of businesses in the UK already rely on us to handle their
          payments, and hundreds more join us every week. About a third of these never previously had access
          to Direct Debit, so we are transforming the way they do business.
        </p>
        <p className='para'>
          We’re looking for an enthusiastic and driven personal assistant to join us and offer top-level
          assistance to our management team.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The role</h4>
        <p className='para'>
          You’ll be working closely with our five person management team to help them focus on what matters
          most to them: helping GoCardless to grow. You’ll assist them on a daily basis, some the main
          elements of the role will be:
        </p>
        <ul className='list'>
          <li>
            Diary management for internal and external meetings.
          </li>
          <li>
            Liaising with internal staff & external contacts.
          </li>
          <li>
            Inbox management.
          </li>
          <li>
            Taking messages.
          </li>
          <li>
            Travel bookings.
          </li>
          <li>
            Minute taking.
          </li>
          <li>
            Filing expenses.
          </li>
          <li>
            Preparing letters and documents.
          </li>
        </ul>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>Who we're looking for</h4>
        <ul className='list u-margin-Tm'>
          <li>
            You have previous PA experience at executive level for several stakeholders.
          </li>
          <li>
            You have incredible attention to detail.
          </li>
          <li>
            You have a flawless command of English.
          </li>
          <li>
            You stay calm under pressure and can find creative solutions for complex situations.
          </li>
          <li>
            You are obsessed about organisation and time management.
          </li>
          <li>
            You are trustworthy.
          </li>
          <li>
            You are diplomatic and are very confident working with people across the business.
          </li>
        </ul>
        <p className='para'>
          This role would ideally suit someone with previous experience in a fast-paced environment.
          However our team come from a variety of backgrounds and we welcome diversity &ndash; if you're
          unsure, please apply.
        </p>
        <a href='http://boards.greenhouse.io/gocardless/jobs/264815' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
