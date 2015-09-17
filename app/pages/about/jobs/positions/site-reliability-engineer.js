import React from 'react';
import JobsPage from '../jobs-page';

export default class SiteReliabilityEngineer extends React.Component {
  displayName = 'SiteReliabilityEngineer'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Site Reliability Engineer</h3>
        <p className='para'>
          Scale our infrastructure to help thousands of businesses take payments.
        </p>
        <p className='para'>
          GoCardless processes more than £1 billion in payments each year, and
          tens of thousands of transactions every day. This means we need to make
          sure our systems and infrastructure scale adequately not only to keep
          up with demand, but to anticipate it. Businesses across the UK and Europe
          trust us with their payments, so it’s crucial that we can provide
          consistent performance and excellent reliability.
        </p>
        <p className='para'>
          We are looking for engineers to design new systems and continually improve
          our existing systems to ensure we are resilient to failure, and can tackle
          any complex cloud infrastructure problems as they emerge.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The role</h4>
        <p className='para'>
          As one of our Site Reliability Engineers at GoCardless you will be part
          of a small team that sets the direction of our platform and codebase.
          You’ll have ownership over your work and you will make decisions around
          new infrastructure and which technologies are the best suited to help
          our business succeed. You will collaborate with every other team within
          engineering, from product to data, to drive engineering efforts in the company.
        </p>
        <p className='para'>Some projects we have recently worked on:</p>
        <ul className='list'>
          <li><a href='https://gocardless.com/blog/zero-downtime-postgres-migrations-the-hard-parts/'>Dealing
          with the realities of running a relational database at scale</a></li>
          <li>Building a high-availability PostgreSQL cluster</li>
          <li><a href='https://gocardless.com/blog/in-search-of-performance-how-we-shaved-200ms-off-every-post-request/'>improving
          performance with investigative work</a></li>
        </ul>
        <p className='para'>
          Over the coming months, as we continue launching our
          service across new geographies, you’ll help solve problems like how to
          ensure we can operate effectively across the world, and how we can continue
          to provide a robust, reliable service as we add hundreds of new users every
          day.
        </p>
        <p className='para'>What you’ll do here:</p>
        <ul className='list'>
          <li>Design software to improve availability, scalability and efficiency.</li>
          <li>Solve problems and automate responses for recurrent issues.</li>
          <li>Improve performance through troubleshooting and investigative work.</li>
          <li>Design and implement deployment management for our systems.</li>
          <li>Manage and monitor our platform as it grows.</li>
          <li>Tackle every issue that comes your way when you’re on call.</li>
          <li>Create Chef cookbooks to deploy and manage our services.</li>
        </ul>

        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The ideal candidate</h4>
        <p className='para'>
          We want to work with people who are always trying to improve and automate
          processes, who enjoy finding elegant solutions for complex problems,
          who thrive with new challenges and cryptic issues, who believe there
          is always something new to learn and that improvement is an iterative
          process.
        </p>
        <p className='para'>You should apply if you have:</p>
        <ul className='list'>
          <li>experience with systems internals, and knowledge of Unix fundamentals</li>
          <li>experience designing, analysing, and troubleshooting distributed systems</li>
          <li>an in-depth understanding of networking theory</li>
          <li>experience of monitoring and troubleshooting</li>
          <li>familiarity with cloud computing systems</li>
        </ul>
        <p className='para'>Not essential, but nice to have:</p>
        <ul className='list'>
          <li>Formal education in Computer Science</li>
          <li>Strong operational knowledge of PostgreSQL or similar RDBMS</li>
          <li>Fluency in one or more of C, Python, Go, Ruby</li>
        </ul>
        <p className='para'>This role would ideally suit someone with previous
          experience in a similar role, however we welcome a wide diversity of
          candidates from varying backgrounds. If you’re unsure, please apply.
          We offer competitive salary and options package commensurate with you
          experience.
        </p>
        <p className='para'>In your application, please include your CV and a
          link to your GitHub, as well as telling us about an interesting technical
          project or problem that you’ve recently enjoyed working on.
        </p>
        <a href='http://boards.greenhouse.io/gocardless/jobs/7643' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
