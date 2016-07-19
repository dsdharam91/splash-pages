import React from 'react';
import JobsPage from '../jobs-page';

export default class ITtechnician extends React.Component {
  displayName = 'ITtechnician'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>IT Technician </h3>
        <p className='para'>
          Help us to build and maintain an efficient and effective IT infrastructure.
        </p>
        <p className='para'>
          GoCardless is growing fast. We’ve built a world-class product that opens up Direct Debit to small
          and medium-sized businesses across the UK and beyond, and we’ve recently extended our offering to
          multinational companies as well. Thousands of businesses already trust us to handle their payments,
          and hundreds more join us every week.
        </p>
        <p className='para'>
          We look for long-lasting, creative solutions to complex problems. We search for people who want to share
          our desire to build high-quality systems and processes regardless of which department they work in.
        </p>
        <p className='para'>
          We pride ourselves on providing our customers with the best product and support possible. We’re looking for
          someone to help build the IT platforms and processes necessary to enable everyone in the company to do just that.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The role</h4>
        <p className='para'>
          You’ll be responsible for keeping GoCardless’ employees up and running on a day-to-day basis.
          You’ll work with all departments within the company, and will have the chance to own and collaborate on
          IT and security projects and set-ups, learning from our team of experienced software and infrastructure engineers.
          You’ll also have huge amounts of autonomy and the opportunity to design and build many of our IT systems from scratch.
        </p>
        <p className='para'>A typical day will include:</p>
        <ul className='list'>
          <li>
            Being the key point of contact for any IT-related queries.
          </li>
          <li>
            Office networking and wifi.
          </li>
          <li>
            Directory and identity services.
          </li>
          <li>
            Single sign on and access to third party services.
          </li>
          <li>
            Procuring, managing, provisioning, and decommissioning employee Macs.
          </li>
          <li>
            Backing up employee laptops.
          </li>
          <li>
          Enforcing IT security policies, such as laptop disk encryption and password policies.
          </li>
        </ul>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>What we're looking for</h4>
        <p className='para'>
          We’re looking for someone who is self-motivated and comfortable in a fast-paced and technical environment. The ideal
          candidate has a positive and enthusiastic attitude, and is confident working autonomously or as part of a team.
        </p>
        <p className='para'>
          We'd love to hear from you if:
        </p>
        <ul className='list u-margin-Tm'>
          <li>
            You have strong IT experience.
          </li>
          <li>
            You have an excellent grasp working with Apple hardware and software products.
          </li>
          <li>
            You have a good knowledge of Google and all related apps and products.
          </li>
          <li>
            You have an understanding of IT setups and processes for businesses, and you enjoy solving problems and creating
            long-lasting solutions for them.
          </li>
          <li>
            You have experience managing a fleet of Macs in a business environment, using tools such as
            OS X Server, Munki, DeployStudio, or Casper Suite.
          </li>
        </ul>
        <p className='para'>
          Our team come from a variety of backgrounds and we welcome diversity &ndash; if you're unsure, please apply.
          In your application, please include your CV and a cover letter
          explaining why you are a great candidate for this position.
        </p>
        <a href='http://boards.greenhouse.io/gocardless/jobs/249591' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
