import React from 'react';
import JobsPage from '../jobs-page';

export default class LeadDataEngineer extends React.Component {
  displayName = 'LeadDataEngineer'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Lead Data Engineer</h3>
        <p className="para">We’re looking for a manager to lead our Data team, and help us develop the skills, systems and best practices that will enable us to get the most out of data at GoCardless.</p>

        <h4 className="u-text-s u-margin-Bxs u-margin-Tm">The role</h4>

        <p className="para">You will lead the Data team, making sure it can fulfil its objectives in four main areas: BI and reporting infrastructure, internal data products, customer-facing data products, and internal consultancy for other teams.</p>

        <p className="para">Your main responsibilities will be:</p>
        <ul>
          <li className="list">Defining long-term strategy and managing the data roadmap by gathering requirements from other teams, and working with Product to guide proactive data projects.</li>
          <li className="list">Coaching and mentoring our team of two Data Scientists.</li>
          <li className="list">Contributing directly to data projects. Past projects include building a fraud detection system, and rebuilding our BI &amp; reporting system to make it easier for everyone at GoCardless to access data.</li>
          <li className="list">Ensuring operational responsibilities are being fulfilled, and driving the adoption of best practices in testing, security, and monitoring for availability and correctness of data.</li>
          <li className="list">Hiring to build out the Data team.</li>
        </ul>
        <h4 className="u-text-s u-margin-Bxs u-margin-Tm">Who we're looking for</h4>

        <p className="para">We want to work with collaborative leaders, who have a strong background in software engineering and data systems. We’re looking for someone who learns fast, communicates clearly, enjoys working with others, and is a pragmatic decision-maker.</p>

        <p className="para">You may be a good fit if:</p>
        <ul>
          <li className="list">You have strong Python skills.</li>
          <li className="list">You have managed and shipped technical projects. </li>
          <li className="list">You’ve been involved in setting long-term strategy.</li>
          <li className="list">You’ve built and maintained performant data systems.</li>
          <li className="list">You’re an advocate for innovation and engineering best practice.</li>
          <li className="list">You’re passionate about coaching, mentoring, and helping teammates advance in their careers.</li>
        </ul>

        <p className="para">Bonus points for:</p>
        <ul>
          <li className="list">Experience designing data warehouses and assembling data pipelines, including familiarity with tools such as Amazon RedShift and Google BigQuery.</li>
          <li className="list">Computer Science degree, or equivalent experience.</li>
          <li className="list">Experience with Python's core data science libraries, e.g. pandas, scikit-learn etc.</li>
          <li className="list">Proven experience in hiring &amp; building out awesome teams.</li>
        </ul>

      <p className="para">Our team come from a variety of backgrounds and we welcome persity – if you’re unsure, please apply. We offer a competitive salary and options package, commensurate with your experience.</p>
      <p className="para">In your application, please include your CV and a link to your GitHub, and a brief description of any interesting projects you’ve worked on that would be relevant to the role.</p>
        <a href='https://boards.greenhouse.io/gocardless/jobs/101665' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
