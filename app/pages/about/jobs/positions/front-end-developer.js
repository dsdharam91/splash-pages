import React from 'react';
import JobsPage from '../jobs-page';

export default class FEDeveloper extends React.Component {
  displayName = 'FEDeveloper'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Front-end Developer</h3>
        <p className='para'>
          GoCardless are looking for a Front-end Developer who is keen to join a young and
          fast-paced technology business. You will be an extremely valuable addition to the
          expanding team who can create industry-leading solutions to help make our customers’
          lives easier.
        </p>
        <p className='para'>
          You will join initially as the primary developer for the marketing team and also
          manage smaller everyday front-end tasks, but will collaborate with product engineers
          and designers on a daily basis.
        </p>
        <p className='para'>
          Founded in 2011, GoCardless makes collecting by Direct Debit easy for everyone from
          individuals to multinational corporations. We are looking to scale from processing $1
          billion a year to over $10 billion. Our vision is to create a global payments network,
          making payments on the internet much simpler no matter what country you're in.
        </p>
        <p className='para'>
          Working out from the HQ in Angel, you will join a team of 80+ people all working in a
          hugely passionate and creative environment.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The role</h4>
        <ul className='list'>
          <li>
            Write HTML and CSS using our existing framework to optimise current or new website pages.
          </li>
          <li>
            Work with fellow engineers, members of the UX team and business stakeholders to discuss and
            design the most appropriate solutions for our clients.
          </li>
          <li>
            Create and code email templates and work within email clients such as Campaign Monitor.
          </li>
          <li>
            Build simple HTML5 or GIF banners where necessary.
          </li>
          <li>
            Use Photoshop and Sketch and collaborate with the design team to create pixel-perfect CSS mark-up.
          </li>
        </ul>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>Who we're looking for</h4>
        <ul className='list u-margin-Tm'>
          <li>
            You have experience of website design and front end development.
          </li>
          <li>
            You have advanced knowledge of HTML5 and CSS3.
          </li>
          <li>
            You have experience with web performance optimisation and web browser testing.
          </li>
          <li>
            You have designed and built responsive websites.
          </li>
          <li>
            You have experience working with version control tools, such as git.
          </li>
          <li>
            You have knowledge of Javascript, with bonus points for any React JavaScript experience.
          </li>
          <li>
            You have experience with content management systems (CMS).
          </li>
          <li>
            You understand and apply research & audience insights.
          </li>
          <li>
            You can take design mock-ups (PSD, Sketch) to HTML and CSS markup.
          </li>
          <li>
            You can write semantic, clean markup and modular, cascading, reusable CSS with consistent documentation.
          </li>
          <li>
            You have excellent communication skills and the ability to learn and share knowledge with team.
          </li>
          <li>
            You understand current trends and technological advancements on the web.
          </li>
        </ul>
        <p className='para'>
            In your application, please include your CV and a cover letter
            explaining why you are a great candidate for this position.
        </p>
        <a href='http://boards.greenhouse.io/gocardless/jobs/266687' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
