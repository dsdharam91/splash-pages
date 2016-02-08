import React from 'react';
import JobsPage from '../jobs-page';

export default class SoftwareEngineer extends React.Component {
  displayName = 'SoftwareEngineer'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Software Engineer</h3>
        <p className='para'>
          We’re looking for talented engineers to help us reimagine how payments software looks and works.
          We have frontend, backend and full stack positions available at all levels &ndash; junior to senior.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>Our work</h4>
        <p className='para'>
          At GoCardless we find creative ways to deliver simple solutions to complex problems.
          We do this by keeping our development cycles fast, by reviewing and adapting our plans
          frequently, and by investing in a culture of continuous feedback.
        </p>
        <p className='para'>
          We build simple, reliable systems on top of technologies we understand and trust. We're primarily
          built in Ruby and JavaScript using Rails and Angular, and we rely on Postgres, Elasticsearch, RabbitMQ, and Chef.
          However, we believe in using the best technologies for each task &ndash; we have used React where server rendering
          is needed, Go for our infrastructure, and Python for our data analysis.
        </p>
        <p className='para'>
          We are looking for people who share our desire to build high quality products that put customers
          at the forefront of our development. As a member of our engineering team you will build and improve
          our products, add new features, and work closely with other teams across the company to define our
          engineering roadmap and to understand what is most important to the customer.
        </p>
        <p className='para'>
          We value learning and feedback and are committed to encouraging and supporting each other’s
          professional growth. Moreover, we believe in sharing our knowledge with and contributing to the wide
          tech community. We frequently host meetups, hackathons, and we open source projects we are proud of.
        </p>
        <p className='para'>
          Some projects we’ve done recently:
        </p>
        <ul className='list'>
          <li>
            <a href='https://github.com/gocardless/es6-angularjs'>An example of an open source project </a>
            for a tool for deploying ES6 applications using <a href='https://github.com/gocardless/systemjs-assetgraph'>
            System.JS and AssetGraph.</a>
          </li>
          <li>
            <a href='https://github.com/gocardless/angularjs-style-guide'>Angular Style Guide.</a>
          </li>
          <li>
            <a href='https://github.com/gocardless/http-api-design'>HTTP API Design Standards guide.</a>
          </li>
          <li>
            <a href='https://github.com/gocardless/hutch'>Hutch</a>: a Ruby library for enabling
            asynchronous inter-service communication in a service-oriented architecture,
            using RabbitMQ.
          </li>
          <li>
            <a href='https://github.com/gocardless/statesman'>Statesman</a>: an opinionated state
            machine library designed to provide a robust audit trail and data integrity.
          </li>
        </ul>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>Ideal candidate</h4>
        <p className='para'>
          You should apply if:
        </p>
        <ul className='list'>
          <li>
            You're passionate about technology.
          </li>
          <li>
            You have experience building products for the web, and have an awareness
            of technologies across the stack.
          </li>
          <li>
            You care deeply about building reliable, well-tested systems.
          </li>
          <li>
            You enjoy solving problems and automating responses for recurrent issues.
          </li>
          <li>
            You thrive in a culture of code review.
          </li>
        </ul>
        <p className='para'>
          Not essential, but nice to have:
        </p>
        <ul className='list'>
          <li>
            Computer Science degree, or equivalent experience.
          </li>
          <li>
            Fluency in one or more of: Ruby, Javascript, Angular, Python, or Go.
          </li>
        </ul>
        <p className='para'>In your application, please include your CV and a link to
          your GitHub, as well as telling us about an interesting technical project or
          problem that you've recently worked on recently.</p>
        <a href='http://boards.greenhouse.io/gocardless/jobs/163987' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
