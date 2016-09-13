import React from 'react';
import StoryPageNew from '../story-page-new.en';
import Link from '../../../components/link/link';

export default class StoriesLylesSutherland extends React.Component {
  displayName = 'StoriesLylesSutherland'

  render() {
    return (
      <StoryPageNew
        title='GoCardless has been a real game-changer. It’s been fantastic knowing that money is coming in every month without us
          having to chase it.'
        author='Fraser Sutherland'
        position='Co-Founder'
        company='Lyles Sutherland'
        benefits='Removing the headache of chasing late payments and helping to make the business scalable over time.'
        bgimgUrl='url(/images/stories/story-images/lyles-sutherland/hero-lyles-sutherland.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/lyles-sutherland.png'
        sidebarServices='Digital agency and software developer'
        sidebarEmployees='16 employees'
        sidebarPreviousProvider='New to Direct Debit'
        sidebarTimeSaved='A couple of hours a week'>
        <div className='story-body'>
          <p className='para u-margin-Tn'>
            <a href='http://www.lyles-sutherland.co.uk/' className='u-link-color-p u-text-underline'>Lyles Sutherland</a> knows all about
            the importance of integrated solutions.
          </p>
          <p className='para'>
            The hyper-growth Edinburgh digital agency has not only brought its cloud-based property management
            software, <a href='http://www.smeprofessional.co.uk/' className='u-link-color-p u-text-underline'>SME Professional</a>, to
            market, but has also diversified into website design, digital marketing and front-end development for its letting agent
            customers.
          </p>
          <p className='para'>
            With flexibility and connectivity so ingrained in its ethos, it’s no surprise that Lyles Sutherland
            chose <Link to='partners_freeagent'  className='u-link-color-p u-text-underline'>FreeAgent and GoCardless</Link> for managing
            the financial side of its growing business.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/lyles-sutherland/founders.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Evolving a digital agency for property companies
          </h2>
          <p className='para'>
            Fraser Sutherland and his co-founder and technical director, Robin Lyles, started out by providing technology for areas
            as diverse as nuclear submarines and the oil and gas market.
          </p>
          <p className='para'>
            In 2006, Fraser decided to broaden his horizons and open a letting agency. This was a shrewd move, as he explains:
          </p>
          <p className='para'>
            “The software for lettings was all very ‘1990s’ in approach. So we wrote our own property management software to automate the letting agency
            business.
          </p>
          <p className='para'>
            Before we knew it, we had a massive property management software system that could handle all aspects of letting agency work. So, about three years
            ago, we launched SME Professional as a software solution for lettings.
          </p>
          <p className='para'>
            “We have almost one in every two Edinburgh agencies now using SME Professional.
            New companies are coming on every week based in areas from Shetland to Ayrshire and the Borders to Aberdeen - the customer base is expanding quickly.
            It’s a one-stop solution for everything a letting agent needs.”
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            FreeAgent as the accounting package of choice
          </h2>
          <p className='para'>
            Lyles Sutherland needed a cloud accounting solution that could meet all business needs as it grew over time. One essential
            requirement was producing monthly invoices for SME Professional customer subscriptions.
          </p>
          <p className='para'>
            “We’d decided that desktop accounting packages were quite antiquated. We needed software that invoiced automatically
            for recurring payments without having to manually raise all those invoices every month. The FreeAgent solution had
              exactly that.”
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/lyles-sutherland/office@2x.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Bringing Direct Debit and GoCardless into the mix
          </h2>
          <p className='para'>
            The next step was to streamline the payment process with Direct Debit and GoCardless. Full integration between FreeAgent
            and GoCardless has removed much of the hassle involved in getting paid on time.
          </p>
          <p className='story-page__quote'>
            “GoCardless has been a real game-changer. It’s been fantastic knowing that the money is coming in every month without us
            having to chase it. It’s really streamlined the business.”
          </p>
          <p className='para'>
            “When we create a new client, the integration with FreeAgent means we don’t have to replicate them in two different systems.
            So it’s also a great time-saver from that perspective.”
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Saving time with GoCardless
          </h2>
          <p className='para'>
            As the company grew, Fraser and Robin got increasingly busy – leaving little time for credit control. GoCardless has
            removed much of this headache.
          </p>
          <p className='para'>
            “We didn’t spend a huge amount of time chasing payments. It wasn’t more than a few hours, but it was ultimately a few
            hours that I could spend trying to bring in sales.
          </p>
          <p className='para'>
            The time-saving has meant that staff are available to deal with customer enquiries rather than chasing up payments.”
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Making your payments and your business scalable
          </h2>
          <p className='para'>
            Fraser has certainly seen the long-term benefits of moving to GoCardless, and he’s not shy about telling other small
            businesses to make the same move.
          </p>
          <p className='story-page__quote'>
            “I tell all my customers to use GoCardless – I think it’s a fantastic system. The interface is so simple and so nice.
            Even though there’s a cost, it’s a way of knowing that their businesses will become scalable.”
          </p>
        </div>
      </StoryPageNew>
    );
  }
}
