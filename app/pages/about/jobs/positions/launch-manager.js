import React from 'react';
import JobsPage from '../jobs-page';

export default class LaunchManager extends React.Component {
  displayName = 'LaunchManager'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Launch Manager</h3>
        <p className='para'>
          Help our customers to make recurring payments simple.
        </p>
        <p className='para'>
          GoCardless is growing fast. We’ve built a world-class product that opens up Direct
          Debit to small, medium-sized and large businesses across the UK and beyond. Over
          20,000 business, such as The Guardian, Box.com and Thomas Cook, already rely on us
          to handle their payments, and hundreds more join us every week.
        </p>
        <p className='para'>
          We’re looking for a Launch Manager to help us provide the best onboarding experience
          for new GoCardless customers. The ideal candidate would lead the continuous
          development and improvement of our merchant onboarding support tools and
          implementation processes.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The role</h4>
        <p className='para'>
          You will be responsible for leading the continuous development and improvement of our
          implementation processes and support tools for merchant onboarding.
        </p>
        <p className='para'>Some of the main elements of the role will involve:</p>
        <ul className='list'>
          <li>
            Collaborate with the Sales team to onboard new merchants successfully.
          </li>
          <li>
            Reporting updates on merchant implementation and contributing in forecast meetings.
          </li>
          <li>
            Defining custom implementation programmes for larger merchants with more specific
            needs.
          </li>
          <li>
            Working closely with the Operations team to redefine and improve the new merchant
            onboarding process.
          </li>
        </ul>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>Who we're looking for</h4>
        <ul className='list u-margin-Tm'>
          <li>
            You are extremely organised, structured and process-driven.
          </li>
          <li>
            You are an excellent communicator, and you can effectively convey and share ideas.
          </li>
          <li>
            You have experience prioritising between multiple important and urgent issues.
          </li>
          <li>
            You have a sense of urgency and can work to regular deadlines.
          </li>
          <li>
            You believe in making sure our clients at the forefront of our efforts.
          </li>
        </ul>
        <p className='para'>
          We'd love to hear from you if you're passionate about technology and want to grow
          together with the company. Our team come from a variety of backgrounds and we welcome
          diversity &ndash; if you're unsure, please apply.
        </p>
        <a href='http://boards.greenhouse.io/gocardless/jobs/261489' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
