import React from 'react';
import JobsPage from '../jobs-page';

export default class DataEngineer extends React.Component {
  displayName = 'DataEngineer'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Data Engineer</h3>
        <p className='para'>
          We’re looking for a Data Engineer to help build systems and
          infrastructure that provide everyone at GoCardless with simple,
          self-service access to our data.
        </p>
        <p className='para'>
          Annual payment volume at GoCardless exceeds $1 billion, and we’re
          processing tens of thousands of transactions every day. There’s a
          company wide need for accurate data: our sales team rely on historic
          transactional data to sell our products; our finance team need
          accurate revenue numbers to manage our accounts; our management team
          need to keep external stakeholders abreast of how our company metrics
          are progressing.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The role</h4>
        <p className='para'>
          As our first dedicated Data Engineer, you will help drive our Data
          Engineering development strategy from day one. You'll be joining a
          team of three Data Scientists, who sit within the wider Engineering
          team. You will work with people across technical and commercial teams
          to understand their needs, consider how best to put the data they
          need in their hands, then build & deliver the solution. For instance,
          you will help to decide whether to adopt tools like RedShift or
          BigQuery to enable performant ad-hoc analysis,  integrate with
          systems like Tableau or Looker to make it easier to share data
          across the company, and assist with building dashboards to show an
          at-a-glance view of the business’ performance.
        </p>
        <p className='para'>
          You’ll also have a hand in scaling and improving our existing data
          systems, including our in-house fraud detection system, metrics
          dashboards, and reporting tools.
        </p>
        <p className='para'>
          In terms of our stack, we’re heavy users of Postgres - both our
          primary application database and analytics database run Postgres 9.4.
          Our backend technology is built in Ruby, but we use Python for our
          data projects, and a fair amount of Go in our infrastructure team.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>Ideal candidate</h4>
        <p className='para'>
          We want to work with people who are passionate about making data
          accessible to help people make better decisions. Given the versatile
          nature of this role, we’re looking for someone who can learn fast,
          enjoys working with others, and is a pragmatic decision-maker.
        </p>
        <p className='para'>
          You should have a solid professional background in software
          engineering and should be capable of building and maintaining
          reliable and performant systems. We also expect that you’ll have a
          deep, but practical understanding of relational databases.
        </p>
        <p className='para'>
          Bonus points for:
        </p>
        <ul className='list'>
          <li>
            Experience designing data warehouses and assembling data pipelines.
          </li>
          <li>
            Familiarity with modern data warehousing tools such as Amazon RedShift and Google BigQuery.
          </li>
          <li>
            Prior use of BI tools such as Tableau, QlikView, Power BI, and Looker.
          </li>
          <li>
            Computer Science degree, or equivalent experience.
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
