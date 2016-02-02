import React from 'react';
import JobsPage from '../jobs-page';

export default class Designers extends React.Component {
  displayName = 'Designers'

  render() {
    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-dark-gray'>Designers</h3>
        <p className='para'>
          We're looking for amazing designers to help us shape the way businesses get paid.
        </p>
        <p className='para'>
          We're also always looking for talented freelancers to come and work with us,
          so if this sounds interesting but you're not looking for a full-time gig,
          get in touch by
          emailing <a href='mailto:tom@gocardless.com'>tom@gocardless.com</a>.
        </p>
        <h4 className='u-text-xs u-margin-Bxs u-margin-Tm'>Our work</h4>
        <p className='para'>
          Over the past few years, GoCardless' products have allowed small companies
          to take subscriptions for the first time &ndash; fundamentally changing the way
          they do business. But we're not done yet. We've just scratched the surface
          for small companies, and we want to do the same thing for the biggest
            organisations on the planet.
        </p>
        <p className='para'>
          We have a roadmap packed full of projects that will help us create a platform
          for controlling recurring payments like never before. This includes reimagining
            how enterprise software should work and be experienced by both employees and customers.
        </p>
        <h4 className='u-text-xs u-margin-Bxs u-margin-Tm'>Our culture</h4>
        <p className='para'>
          With a small, talented team and an amazing new office in central London, we
          feel like we're in a great position to tackle these challenges. New designers
          will play a key role in shaping our team and culture, as well as the direction
          of our product. You'll work with a tight, talented group of designers and engineers,
          as well as the founders of GoCardless.
        </p>
        <p className='para'>
          Despite the scale of our work, we're small and friendly, with strong shared values.
          We get on well and enjoy spending time together, whether working in the office,
          chatting over lunch or out for drinks after work. We're passionate about learning,
          and we all care deeply about the quality of what we make.
        </p>
        <p className='para'>
          We’re creating a strong design culture at GoCardless, and we'll support you by paying
          for training, events, and sending you to conferences around the world (if that's what you're into).
        </p>
        <h4 className='u-text-xs u-margin-Bxs u-margin-Tm'>What we're looking for</h4>
        <p className='para'>
          We're looking for designers with real experience designing digital products. People
          who think about systems, not just screens. People who really care about creating great experiences.
        </p>
        <p className='para'>
          Our main roles are product and web design (but that doesn’t mean you can’t do both),
          and we work collaboratively across teams on interesting problems.
        </p>
        <p className='para'>Main responsibilities:</p>
        <ul className='list'>
          <li>
            Contributing to the design of our products (both current and future)
          </li>
          <li>
            Producing great work for our website and our marketing materials
          </li>
          <li>
            Speaking to users to identify the problems and opportunities that lie ahead
          </li>
          <li>
            Pushing the team to consistently raise the bar for visual design and
            simplicity
          </li>
        </ul>
        <h4 className='u-text-xs u-margin-Bxs u-margin-Tm'>What we offer</h4>
        <p className='para'>
          We're a successful, well-funded company and believe that treating people
          well is the absolute key to our future success. As such, we work hard to
          make people feel respected, comfortable and happy.
        </p>
        <ul className='list u-margin-Tm'>
          <li>
            Competitive salary and options package
          </li>
          <li>
            Spec your own Macbook Pro, and plug it into a 27' Thunderbolt display
          </li>
          <li>
            £1500 conference budget, plus 5 days (on top of holidays) to attend them
          </li>
          <li>
            Work from home when you need to
          </li>
        </ul>
        <a href='https://boards.greenhouse.io/gocardless/jobs/42134' className='btn u-margin-Vs'>
          Apply now
        </a>
        <p className='para'>
          If you have any questions before applying, please
          contact <a href='mailto:tom@gocardless.com'>tom@gocardless.com</a>
        </p>
        <p className='para'>
          No recruiters please.
        </p>
      </JobsPage>
    );
  }
}
