import React from 'react';
import JobsPage from '../jobs-page';

export default class EngineeringManager extends React.Component {
  displayName = 'EngineeringManager'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Engineering Manager</h3>
        <p className='para'>
          We’re looking for exceptional managers to help GoCardless build a global payments platform
          for the 21st century.
        </p>
        <p className='para'>
          GoCardless’ annual payment volume exceeds £1 billion, and we’re processing up to hundreds of
          thousands of transactions per day.  The company is growing fast and there is an increasing
          demand for creative and high quality work from our engineering group.
        </p>
        <p className='para'>
          We believe in using the best technology for the task and we’re heavy users of Angular, Ruby
          on Rails and PostgreSQL. Our applications run in Docker containers.  We use some React for
          static web pages, Python for our data projects and Go is used by our infrastructure team. Our
          planning and delivery processes are agile and loosely based on Scrum.
        </p>
        <p className='para'>
          Right now we’re improving the customer experience for first time users of our developer APIs
          and user dashboards, we’re scaling our payments systems to handle ten times our current processing
          capacity, and we’re investing in our infrastructure for improved resilience at scale.  We like to
          share what we learn on <a href='https://gocardless.com/blog/tagged/engineering' target='_blank'>our
          engineering blog</a>.
        </p>
        <h4 className='u-text-s u-margin-Bxs u-margin-Tm'>The role</h4>
        <p className='para'>
          This role would suit someone with previous management experience, or a technical
          leader who wants to take on people management responsibility.
        </p>
        <p className='para'>
          As a GoCardless software engineering manager you will help us build the most creative
          and fulfilled product engineering group.  You will lead talented engineers who build
          products and systems they are proud of. You will push for exceptionally high quality work
          and empower our engineers to make a big impact.
        </p>
        <p className='para'>
          You are a skilled and passionate engineer who wants to stay hands-on but primarily focus
          on leadership and management. You will have responsibility for one or more teams of between
          3 and 6 software engineers and you’ll work closely with non-technical stakeholders. In this
          role you will:
        </p>
        <ul className='list'>
          <li>
            Implement and deploy engineering work with your team.
          </li>
          <li>
            Hire and develop great people.
          </li>
          <li>
            Maintain a supportive and engaging team culture.
          </li>
          <li>
            Insist on high standards of technical design and implementation and ensure your
            systems are operationally excellent.
          </li>
          <li>
            Deliver project work while managing the expectations of your stakeholders.
          </li>
          <li>
            Plan and prioritise impactful technical investment initiatives for your teams.
          </li>
        </ul>
        <p className='para'>
          You will also be a key contributor to:
        </p>
        <ul className='list u-margin-Tm'>
          <li>
            Improve hiring and recruitment processes for the engineering group.
          </li>
          <li>
            Develop product objectives.
          </li>
          <li>
            Invest in GoCardless’ overall technical architecture.
          </li>
          <li>
            Ensure the security of our systems and working practices.
          </li>
        </ul>
        <p className='para'>
          Given the versatile nature of the role, we’re looking for someone who learns fast, enjoys
          leading and collaborating with others, and is a pragmatic decision-maker.
        </p>
        <p className='para'>
          You should apply if you are:
        </p>
        <ul className='list u-margin-Tm'>
          <li>
            Passionate about building motivated, highly performing teams.
          </li>
          <li>
            Passionate about technology and want to stay hands-on.
          </li>
          <li>
            Experienced in building products for the web, and have an awareness of technologies across the stack.
          </li>
          <li>
            Professionally experienced in coding at least one of the following, or similar: Ruby, Python, Go,
            Elixir, Java, C++, Javascript, AngularJS.
          </li>
          <li>
            Committed to building reliable, well-tested systems.
          </li>
          <li>
            Enthusiastic about working in a strong culture of testing and code review.
          </li>
          <li>
            Qualified with a Computer Science degree or equivalent experience.
          </li>
        </ul>
        <p className='para'>
            In your application, please include your CV and a cover letter
            explaining why you are a great candidate for this position.
        </p>
        <p className='para'>
          Our team come from a variety of backgrounds and we welcome diversity &ndash; if you're unsure, please apply.
        </p>
        <a href='http://boards.greenhouse.io/gocardless/jobs/517587' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}