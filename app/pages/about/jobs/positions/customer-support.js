import React from 'react';
import JobsPage from '../jobs-page';

export default class CustomerSupport extends React.Component {
  displayName = 'CustomerSupport'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Customer Support</h3>
        <p className='para'>
          Go the extra mile to delight our customers.
        </p>
        <p className='para'>
          GoCardless provides simple Direct Debit to thousands of small and
          medium-sized businesses. We pride ourselves on listening to our users
          and doing everything we can to solve their problems and to keep
          them happy. We're looking for enthusiastic, empathic people to join
          our friendly support team and provide first-rate support and guidance
          to our users.
        </p>
        <p className='para'>
          Every day, you'll be answering calls and emails from our merchants
          and from customers using GoCardless to pay. You'll listen to our
          users, help them with problems and go the extra mile to ensure
          they're happy. You'll make sure our emails are always accurate and
          helpful, and you'll assist new merchants with verifying their accounts
          and getting set up with GoCardless. As well as that, you'll
          represent the customer's voice and help inform our product roadmap.
        </p>
        <p className='para'>
          You'll work as part of a close-knit team who help each other to solve
          the tough problems and provide legendary service. We run regular
          internal training sessions to ensure the whole team understand the
          complexities of the product and the implications of any new features.
        </p>
        <p className='para'>
          We've built a friendly, collaborative culture where we hire and develop
          smart, driven people that share our desire to do work we can be proud
          of. We value learning and feedback, and are devoted to encouraging and
          supporting each other's professional growth.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>You should apply if:</h4>
        <ul className='list u-margin-Tm'>
          <li>
            You love helping people
          </li>
          <li>
            You're organised and diligent
          </li>
          <li>
            You thrive in small teams
          </li>
          <li>
            You have a flawless command of English and great attention to detail
          </li>
          <li>
            You have a strong work ethic
          </li>
        </ul>
        <a href='http://boards.greenhouse.io/gocardless/jobs/20916' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
