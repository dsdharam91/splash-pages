import React from 'react';
import JobsPage from '../jobs-page';

export default class DevopsEngineer extends React.Component {
  displayName = 'DevopsEngineer'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-dark-gray'>DevOps Engineer</h3>
        <p className='para'>
          GoCardless is looking for a DevOps Engineer to help scale our infrastructure
          so that the thousands of businesses using our service across Europe can take payments.
        </p>
        <h4 className='u-text-xs u-margin-Bxs u-margin-Tm'>The role</h4>
        <p className='para'>
          As a DevOps Engineer at GoCardless you will be part of a small team that sets the
          direction of the GoCardless core stack and you will work very closely with an experienced member of the
          team. You will have to think through all the moving pieces and issues that can arise, and collaborate
          with every other team within engineering &ndash; from product to data &ndash; to drive engineering efforts
          in the company.
        </p>
        <p className='para'>Some projects we have recently worked on:</p>
          <ul className='list'>
            <li><a href='https://gocardless.com/blog/from-idea-to-reality-containers-in-production-at-gocardless/'>Moving
          to a container-based infrastructure.</a></li>
            <li><a href='https://gocardless.com/blog/zero-downtime-postgres-migrations-the-hard-parts/'>Dealing
          with the realities of running a relational database at scale.</a></li>
            <li>Building a high-availability PostgreSQL cluster.</li>
            <li><a href='https://gocardless.com/blog/in-search-of-performance-how-we-shaved-200ms-off-every-post-request/'>Improving
          performance with investigative work.</a></li>
        </ul>
        <p className='para'>What you’ll do here:</p>
        <ul className='list'>
          <li>Create Chef cookbooks to deploy and manage our services.</li>
          <li>Deploy software to improve availability, scalability and efficiency.</li>
          <li>Troubleshoot problems and automate responses for recurrent issues.</li>
          <li>Investigate and fix performance issue.</li>
          <li>Tackle the issues that come your way when you’re on call, with assistance from the rest of the team when needed.</li>
        </ul>
        <h4 className='u-text-xs u-margin-Bxs u-margin-Tm'>What we're looking for</h4>
        <p className='para'>
          We want to work with people who are eager to trying to improve and automate
          changes to infrastructure, who enjoy finding elegant solutions for complex problems,
          who thrive with new challenges and seemingly cryptic issues, who believe there
          is always something new to learn and that improvement is an iterative
          process.
        </p>
        <p className='para'>You should apply if:</p>
        <ul className='list'>
          <li>You have knowledge of Unix fundamentals.</li>
          <li>You have some experience designing, analysing, and troubleshooting distributed systems.</li>
          <li>You have some knowledge of TCP/IP networking.</li>
          <li>You are familiar with cloud computing systems.</li>
        </ul>
        <p className='para'>Not essential, but nice to have:</p>
        <ul className='list'>
          <li>Formal education in Computer Science.</li>
          <li>Some experience with operating PostgreSQL or similar RDBMS.</li>
          <li>Fluency in one or more programming languages, and you write clean and
          effective code.</li>
        </ul>
        <p className='para'>
          This role would ideally suit someone with some previous
          experience in a similar role or as a Software Engineer but keen to transition
          into a Devops Engineer role.
        </p>
        <p className='para'>
          In your application, please include your CV and a
          link to your GitHub, and tell us about an interesting technical
          project or problem that you’ve recently enjoyed working on.
        </p>
        <a href='http://boards.greenhouse.io/gocardless/jobs/209771' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
