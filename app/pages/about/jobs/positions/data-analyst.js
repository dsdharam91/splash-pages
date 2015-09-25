import React from 'react';
import JobsPage from '../jobs-page';

export default class DataAnalyst extends React.Component {
  displayName = 'DataAnalyst'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Data Analyst</h3>
        <p className='para'>
          Ensure our business decisions are driven by data.
        </p>
        <p className='para'>
          GoCardless is growing fast. Thousands of businesses in the UK already
          trust us with their payments, and hundreds more join us every week.
          We’ve recently launched in France and Germany, and over the coming
          months we will continue our expansion across Europe &ndash; and beyond.
          To drive this growth, people across the company need accurate data:
          our sales team rely on historic transactional data to sell our products;
          our finance team need accurate revenue numbers to manage our accounts;
          our management team need to keep external stakeholders abreast of how
          our company metrics are progressing.
        </p>
        <p className='para'>
          We’re looking for someone bright and self-motivated to work with people
          across the business to understand and meet our business intelligence needs.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The role</h4>
        <p className='para'>
          You will provide the data that people across the company need to make
          critical business decisions. From helping our marketing team decide
          which attribution channels to focus on, to influencing which features
          on our website the designers choose to retain or discard, every area
          of the business will rely on your data to inform their direction.
        </p>
        <p className='para'>
          On a typical day you will be:
        </p>
        <ul className='list'>
          <li>
            Identifying new business intelligence requirements and conducting
            analyses accordingly.
          </li>
          <li>
            Working with the management team to flesh out information packs
            distributed to the board and our investors.
          </li>
          <li>
            Helping to define and monitor business KPIs and developing innovative
            methods to communicate this information effectively.
          </li>
          <li>
            Responding to ad-hoc data requests from other parts of the business
            to make sure everyone has the right data to make informed decisions.
          </li>
        </ul>
        <p className='para'>
          We’ve built a friendly, collaborative culture where we hire and develop
          smart, ambitious people that share our desire to do work we can be proud
          of. We value learning and feedback, and we spur each other on to raise
          the bar of success. You will join our small, friendly data team and
          support teams across the company, so there’s plenty of scope to work
          with and learn from people with different fields of expertise.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The ideal candidate</h4>
        <ul className='list u-margin-Tm'>
          <li>Economics, Engineering, Mathematics or related degree, or experience
            working in a similar role</li>
          <li>Excellent analytical skills and the ability to ask the right questions</li>
          <li>Proficient in Microsoft Excel</li>
          <li>Experience with programming languages, Python preferred</li>
        </ul>
        <p className='para'>Bonus points for:</p>
        <ul className='list'>
          <li>Previous professional experience, e.g. internships</li>
          <li>Experience with query languages, particularly PostgreSQL</li>
        </ul>

        <p className='para'>
          In your application, please include your CV and and tell us about an
          interesting analytics project or problem that you’ve recently worked
          on. This role would ideally suit a recent graduate, or someone with
          1-2 years’ professional experience. If you’re unsure, please apply
          &ndash; we’d love to hear from you.
        </p>
        <a href='http://boards.greenhouse.io/gocardless/jobs/104756' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
