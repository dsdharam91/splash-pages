import React from 'react';
import JobsPage from '../jobs-page';

export default class DataEngineer extends React.Component {
  displayName = 'DataEngineer'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Data Engineer</h3>
        <p className='para'>
          Help us scale our data projects.
        </p>
        <p className='para'>
          Annual payment volume at GoCardless exceeds $1 billion, and we’re processing
          tens of thousands of transactions every day. There’s a company wide
          need for accurate data: our sales team rely on historic transactional
          data to sell our products; our finance team need accurate revenue numbers
          to manage our accounts; our management team need to keep external stakeholders
          abreast of how our company metrics are progressing. We need to make
          sure our systems and infrastructure keep up with ever-increasing demand.
        </p>
        <p className='para'>
          We’re looking for a data engineer to support our data team and
          continually improve our existing systems.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The role</h4>
        <p className='para'>
          You will develop, implement, maintain and monitor our data pipelines,
          working closely with the web operations team to build out our existing
          data infrastructure. You will be responsible for integrating these
          pipelines with data exploration tools used within the company.
        </p>
        <p className='para'>
          On a typical day you will be:
        </p>
        <ul className='list'>
          <li>Designing, building and launching new data ETL processes in production</li>
          <li>Moving data models into production</li>
          <li>Working closely with engineering and data peers to understand their data needs</li>
          <li>Supporting and optimising existing processes in production</li>
        </ul>
        <p className='para'>
          You’ll have ownership over your work and you will play a major role
          in selecting and implementing our data warehouse stack, while being
          fully supported by our data and engineering teams. We are looking for
          someone who takes initiative and loves to work with others.
        </p>
        <p className='para'>
          We’ve built a friendly, collaborative culture, where we hire and develop
          ambitious people that share our desire to do work we can be proud of.
          We value learning and feedback, and are committed to encouraging and
          supporting each other’s continual professional growth.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The ideal candidate</h4>
        <ul className='list u-margin-Tm'>
          <li>
            1+ years’ experience in the data warehouse space
          </li>
          <li>
            1+ years’ experience in custom ETL design, implementation and maintenance
          </li>
          <li>
            1+ years’ experience with programming languages, preferably Python
          </li>
          <li>
            Familiarity with cloud computing platforms, especially AWS
          </li>
          <li>
            Experience with schema design
          </li>
        </ul>
        <p className='para'>Bonus points for:</p>
        <ul className='list'>
          <li>Experience with machine learning</li>
          <li>Computer Science or Engineering degree</li>
          <li>Familiarity with Ruby</li>
        </ul>

        <p className='para'>
          In your application, please include your CV and a link to
          your GitHub, as well as telling us about an interesting technical project or
          problem that you’ve recently worked on.
        </p>
        <p className='para'>
          This role would ideally suit someone with 1-2 years’ related experience.
          If you’re unsure, please apply &ndash; we’d love to hear from you.
        </p>
        <a href='http://boards.greenhouse.io/gocardless/jobs/101665' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
