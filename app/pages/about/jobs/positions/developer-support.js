import React from 'react';
import JobsPage from '../jobs-page';

export default class DeveloperSupport extends React.Component {
  displayName = 'DeveloperSupport'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Developer Support</h3>
        <p className='para'>
          Solve our users’ technical problems and help us build products people want.
        </p>
        <p className='para'>
          We pride ourselves on giving all our users first-rate support. Our simple,
          well-documented API is used by a growing number of our merchants, and we are
          looking for someone versatile, capable and enthusiastic to join our support team
          to go the extra mile for developers building integrations with GoCardless.
        </p>
        <p className='para'>
          We’re looking for a bright, enthusiastic problem-solver to help us develop
          and improve our support tools and processes to benefit the Operations
          team as a whole.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The role</h4>
        <p className='para'>
          As a developer support analyst, you will delve into the product on a technical
          level and assist developers using GoCardless. You'll get to help the first users
          of our incredible new API, answer more general questions about the service and
          Direct Debit, and work on fraud detection and loss prevention processes.
        </p>
        <p className='para'>Everyday you will be:</p>
        <ul className='list'>
          <li>
            Working as part of a close-knit team to provide legendary support.
          </li>
          <li>
            Acting as the first line for technical enquiries across multiple channels.
          </li>
          <li>
            Troubleshooting integration issues while supporting our products.
          </li>
          <li>
            Detecting risk and verifying accounts to protect customers from fraud.
          </li>
          <li>
            Working with the engineering team to ensure that our service meets the highest standards.
          </li>
        </ul>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>What we're looking for</h4>
        <ul className='list u-margin-Tm'>
          <li>
            You love helping people.
          </li>
          <li>
            You have heaps of initiative, enthusiasm, and patience.
          </li>
          <li>
            You have an interest in programming and a desire to further develop your coding
            skills &ndash; even if you wouldn't consider yourself a developer yet.
          </li>
          <li>
            You have a flawless command of English.
          </li>
        </ul>
        <p className='para'>
          You will work with a friendly, enthusiastic team and have opportunities to learn
          from both your colleagues in the support team and our engineers. Our team come
          from a variety of backgrounds and we welcome diversity &ndash; if you're unsure,
          please apply.
        </p>
        <a href='http://boards.greenhouse.io/gocardless/jobs/14105' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
