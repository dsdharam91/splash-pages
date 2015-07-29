import React from 'react';
import JobsPage from '../jobs-page';

export default class AccountExecutive extends React.Component {
  displayName = 'AccountExecutive'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Account Executive</h3>
        <p className='para'>
          Help prospective customers get the information they need.
        </p>
        <p className='para'>
          GoCardless is growing fast. We've recently started serving large organisations
          like The Guardian, TripAdvisor, and the UK Government, and we're launching
          across Europe. Thousands of businesses in the UK already trust us with their
          payments, and hundreds more join us every week.
        </p>
        <p className='para'>
          We're looking for bright, ambitious people to join our talented sales team and
          accelerate our growth in the UK market.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The role</h4>
        <p className='para'>
          You'll be the first point of contact for new customers who get in touch to find
          out more about us. By becoming an expert on our product and the wide variety
          of ways it can be used, you'll advise people on their best option for taking
          payments. You'll listen to our customers, spot opportunities where we can add value
          for them, and do everything you can to give them the best possible chance of success.
        </p>
        <p className='para'>
          You'll learn and execute our sales processes, making improvements wherever
          you find scope to do so. By collaborating with the rest of the sales team,
          you'll work out smart solutions for customers with thorny problems. You'll
          also have the chance to feed the needs of our prospective customers into our
          product roadmap to make sure we're always building something people want.
        </p>
        <p className='para'>
          We've built a dynamic, collaborative culture where we hire and develop smart,
          ambitious people that share our desire to do work we can be proud of. We value
          learning and feedback, and we spur each other on to raise the bar of success.
          We work in cross-functional teams so there's plenty of scope to work with and
          learn from people with different fields of expertise.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The ideal candidate</h4>
        <ul className='list u-margin-Tm'>
          <li>
            You have strong interpersonal skills and love connecting with people.
          </li>
          <li>
            You're attentive to detail and extremely organised.
          </li>
          <li>
            You have excellent written and oral communication skills.
          </li>
          <li>
            You learn fast and constantly strive to improve.
          </li>
          <li>
            You have a strong work ethic.
          </li>
        </ul>
        <p className='para'>
          Our current team come from a variety of backgrounds: straight out of
          university, consulting and startups. We welcome a wide diversity of
          candidates - if you're unsure, please apply. To help you, we've written a
          <a href='https://gocardless.com/blog/the-account-executive-interview-process/' target='_blank'> blog post </a>
          which takes you through our interview process and gives you some
          tips on what to expect, and you can also read about the training
          you'll be getting in your first month <a href='https://gocardless.com/blog/how-we-train-salespeople/' target='_blank'>
          here</a>.
        </p>
        <a href='http://boards.greenhouse.io/gocardless/jobs/37249' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
