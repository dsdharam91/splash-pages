import React from 'react';
import JobsPage from '../jobs-page';

export default class FEDeveloper extends React.Component {
  displayName = 'FEDeveloper'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-heading'>Front End Developer</h3>

        <p className='para'>
        We’re looking for a front end developer to help us reimagine how our brand looks and feels.
        </p>

        <h4 className='u-text-s u-margin-Tm'>The role</h4>

        <p className='para'>
          You’ll join our website team working alongside both marketing, design and engineering
          to help set the direction of the GoCardless brand across our content websites.
        </p>
        <p className='para'>
          Initially you’ll work on a redesign of our website, using our React based site.
          You will be working with an experienced member of the UX team to get up to speed
          with our tools and conventions. Longer term there's the opportunity to lead on the
          technical architecture behind our website, this could be taking our React site to
          the next level using a headless CMS to power the content.
        </p>

        <p className='para'>Some projects we have recently worked on:</p>
        <ul className='list'>
          <li><a href='https://gocardless.com/blog/how-we-built-the-new-gocardless.com/'>How we built the new gocardless.com.</a></li>
          <li><a href='https://github.com/gocardless/es6-angularjs'>An example of an open source project </a>
            for a tool for deploying ES6 applications using System.JS.</li>
          <li><a href='https://github.com/gocardless/angularjs-style-guide'>Angular Style Guide.</a></li>
        </ul>

        <p className='para'>What you’ll do here:</p>
        <ul className='list'>
          <li>Work on our existing React based website to optimise current pages or add new ones.</li>
          <li>Create reusable email templates that are easy to use.</li>
          <li>Work with the UX & Design teams to design and build new ways of interacting with our website and products.</li>
          <li>Take on requests from different teams to continuously improve our website.</li>
          <li>Use Sketch to collaborate with design to turn mockups into great looking, responsive sites, taking the lead on how the responsive sites should look and feel.</li>
        </ul>

        <h4 className='u-text-s u-margin-Tm'>What we're looking for</h4>

        <p className='para'>
          We want to work with people who care about how things are built and how they look, who enjoy
          spending the time it takes to make something great, who believe there is always something
          new to learn and that improvement is an iterative process.
        </p>

        <p className='para'>You should apply if:</p>
        <ul className='list'>
          <li>You're passionate about technology and have an appreciation for good design.</li>
          <li>You have experience building websites, and have an awareness of the technologies used.</li>
          <li>You have knowledge of HTML, CSS and JavaScript and are always seeking out best practices.</li>
          <li>You sweat the details and care deeply about building memorable web experiences.</li>
          <li>You thrive in a culture of peer review.</li>
        </ul>

        <p className='para'>Not essential, but nice to have:</p>
        <ul className='list'>
          <li>Some experience with a static site generator, e.g. Jekyll.</li>
          <li>Some experience using a JavaScript framework, e.g. React or Angular.</li>
          <li>Experience designing marketing content for the web.</li>
        </ul>

        <p className='para'>
          This role would ideally suit someone with some previous experience in a similar
          role or as a designer but keen to transition into a front end role.
        </p>

        <p className='para'>
          In your application, please include your CV and a link to your GitHub/Portfolio,
          and tell us about an interesting project or problem that you’ve recently enjoyed working on.
        </p>

        <p className='para'>
          We believe in equal opportunity and value diversity. We believe that varied
          perspectives, experiences and backgrounds lead a workplace that's better for everyone.
        </p>

        <a href='http://boards.greenhouse.io/gocardless/jobs/266687' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
