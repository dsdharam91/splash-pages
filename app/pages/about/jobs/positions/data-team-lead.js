import React from 'react';
import JobsPage from '../jobs-page';

export default class DataTeamLead extends React.Component {
  displayName = 'DataTeamLead'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Data Team Lead</h3>
        <p className='para'>
          Help us build scalable, robust data systems.
        </p>
        <p className='para'>
          Annual payment volume at GoCardless exceeds $1 billion, and we’re
          processing up to hundreds of thousands of transactions per day. As the
          company grows, there is an increasing demand for the data behind these
          transactions, and our ability to make sound and timely business decisions
          is hugely dependent on the availability and reliability of this data.
        </p>
        <p className='para'>
          We’re looking for a hands-on manager to help us build data systems
          that scale with this demand.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The role</h4>
        <p className='para'>
          You will lead the planning and implementation of the Data
          Analysis and Engineering development strategy. You'll be managing a team of
          two Data Scientists, and be an influential member of the Engineering group
          management team. You’ll lead the productionisation of new data systems, as well
          as scaling and improving existing ones, such as our in-house fraud detection system.
          You will work with people across technical and commercial teams to understand their
          data needs, and implement the best possible infrastructure to meet them.
        </p>
        <p className='para'>
          We’re in the process of implementing Tableau to make our data more accessible to everyone
          at GoCardless. The backend for this is a data warehouse in Google BigQuery, which receives
          data via a pipeline built using the Luigi Python library.
        </p>
        <p className='para'>
          You’ll be responsible for improving, scaling and maintaining these systems, as well as leading
          the adoption of best practices in testing, monitoring and security.
        </p>
        <p className='para'>
          In terms of our stack, we’re heavy users of Postgres - both our primary application database and
          analytics database run Postgres 9.4. Our backend technology is built in Ruby, but we use Python for
          our data projects, plus a fair amount of Go is used by our infrastructure team.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>Who we're looking for</h4>
        <p className='para'>
          We want to work with people who are committed and collaborative leaders. You should be strong technically,
          and be passionate about building and maintaining performant systems, with practical experience of doing so.
          You will have proven experience of successfully managing people and projects, and a strong professional
          background in software engineering and relational databases. Given the versatile nature of the role, we’re
          looking for someone who learns fast, enjoys leading and working with others, and is a pragmatic decision-maker.
        </p>
        <p className='para'>
          Bonus points for:
        </p>
        <ul className='list'>
          <li>
            Strong Python skills.
          </li>
          <li>
            Experience designing data warehouses and assembling data pipelines.
          </li>
          <li>
            Familiarity with modern data warehousing tools such as Amazon RedShift and Google BigQuery.
          </li>
          <li>
            Computer Science degree, or equivalent experience.
          </li>
          <li>
            Experience with Python's core data science libraries, e.g. pandas, scikit-learn etc.
          </li>
        </ul>
        <p className='para'>
          Our team come from a variety of backgrounds and we welcome diversity
          – if you’re unsure, please apply. We offer a competitive salary and
          options package, commensurate with your experience.
        </p>
        <p className='para'>
          In your application, please include your CV and a link to your GitHub,
          and a brief description of any interesting projects you’ve worked on
          that would be relevant to the role.
        </p>
        <a href='https://boards.greenhouse.io/gocardless/jobs/101665' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
