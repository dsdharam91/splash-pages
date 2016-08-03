import React from 'react';
import JobsPage from '../jobs-page';

export default class DataEngineer extends React.Component {
  displayName = 'DataEngineer'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Software Engineer, Data Systems</h3>
        <p className='para'>
          Help us to build scalable, robust data systems.
        </p>
        <p className='para'>
          Annual payment volume at GoCardless exceeds $1 billion, and we’re processing tens
          of thousands of transactions every day. As the company grows, there is an increasing
          demand for the data behind these transactions, and our ability to make sound and
          timely business decisions is hugely dependent on the availability and reliability
          of this data.
        </p>
        <p className='para'>
            We’re looking for a software engineer (Data systems) who can help us build data systems that scale
          with this demand.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The role</h4>
        <p className='para'>
          As our first dedicated Data Engineer, you will help drive our Data Engineering
          development strategy from day one. You'll be joining a team of two Data Scientists,
          who sit within the wider Engineering team. You’ll play a vital role in productionising new
          data systems, as well as scaling and improving existing ones, such as our in-house fraud
          detection system. You will also work with people across technical and commercial teams to
          understand their data needs, and implement the best possible infrastructure to meet them.
        </p>
        <p className='para'>
          In terms of our stack, we’re heavy users of Postgres &ndash; both our primary
          application database and analytics database run Postgres 9.4. Our backend technology is
          built in Ruby, but we use Python for our data projects, and a fair amount of Go in our
          infrastructure team.
        </p>
        <p className='para'>
          We’re currently implementing Tableau to give everyone at GoCardless simple,
          self-service access to our data. The backend for this is a data warehouse in Google
          BigQuery, which receives data via a pipeline built using the Luigi Python library.
          You’ll be responsible for improving, scaling and maintaining these systems,and
          leading the adoption of best practices in testing, monitoring and security.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>What we're looking for</h4>
        <p className='para'>
          We want to work with people who are passionate about building and maintaining
          reliable, performant systems, and have practical experience of doing so. You
          should have a solid professional background in software engineering, and a
          deep understanding of relational databases. Given the versatile nature of
          the role, we’re looking for someone who can learn fast, enjoys working with
          others, and is a pragmatic decision-maker.
        </p>
        <p className='para'>
          Bonus points for:
        </p>
        <ul className='list'>
          <li>
            You have strong Python skills.
          </li>
          <li>
            You have experience designing data warehouses and assembling data pipelines.
          </li>
          <li>
            You are familiar with modern data warehousing tools such as Amazon RedShift and
            Google BigQuery.
          </li>
          <li>
            You have a computer Science degree, or equivalent experience.
          </li>
          <li>
            You have experience with Python's core data science libraries, e.g. pandas,
            scikit-learn etc.
          </li>
        </ul>
        <p className='para'>
          Our team come from a variety of backgrounds and we welcome diversity
          &ndash; if you’re unsure, please apply. We offer a competitive salary and
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
