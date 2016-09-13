import React from 'react';
import StoryPageNew from '../story-page-new.en';

export default class StoriesNutmeg extends React.Component {
  displayName = 'StoriesNutmeg'

  render() {
    return (
      <StoryPageNew
        title='More than 3 out of 5 of our new customers have set up direct debits.'
        author='Bill Packman'
        position='COO'
        company='Nutmeg Saving and Investment'
        benefits='Ease of use for Nutmeg’s customers, integration, easy-to-use APIs and ability to avoid the legacy bank payments network.'
        bgimgUrl='url(/images/stories/story-images/nutmeg/hero-nutmeg.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/nutmeg.png'
        sidebarServices='An online investment management service'
        sidebarEmployees='80 employees'
        sidebarPreviousProvider='A handful of paper direct debits'
        sidebarTimeSaved='Significant time saving for customers who no longer need to fill out paper forms and return them in the post'>
        <div className='story-body'>
          <p className='para u-margin-Tn'>
            <a href='https://www.nutmeg.com/' className='u-link-color-p u-text-underline'>Nutmeg</a> is an online wealth manager that
            invests money on behalf of customers who are seeking to generate long-term return. The platform allows customers to set
            their risk level to suit their goals. Nutmeg was the first online discretionary investment management company in the UK and
            for the past five years their customer focused approach has been a welcome disruption to the traditional investments sector.
          </p>
          <p className='story-page__quote'>
            Since the introduction of GoCardless in September, more than 3 out of 5 of our new customers have set up direct debits.
            It's a very automated service so we've not needed to add headcount to run this service.
          </p>
          <p className='para'>
            “We’re all about being customer-centric” says Bill. “We like to execute payments rapidly, so customers aren’t left in doubt
            about where their money is. Put simply, our business is: money in, invest, disinvest, money out – so payments are an integral
            part of our service to customers.”
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/nutmeg/team.jpg' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            A modernised payment solution for a forward-looking business
          </h2>
          <p className='para'>
            Before making the switch to GoCardless, Nutmeg were using a handful of direct debits. Unsurprisingly,
            Nutmeg’s customers were finding the paper Direct Debits incredibly cumbersome. As an innovative business, Nutmeg needed to
            bring payment processes into the here and now. After thoroughly researching potential providers of electronic direct
            debits, Nutmeg decided to make the switch to GoCardless.
          </p>
          <p className='para'>
            “We’d heard good things about GoCardless” says Bill. “We decided to switch for a number of reasons, most importantly was
            that GoCardless allows our customers to make changes to their direct debit arrangements with ease; whilst allowing them to do
            this conveniently online.”
          </p>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Not just benefitting customers
          </h2>
          <p className='para'>
            As well as allowing customers to easily set-up and manage their direct debit payments, Nutmeg have benefited from several
            other advantages;
          </p>
          <p className='para'>
            “GoCardless allows for seamless integration with our website, our customers don’t feel they have left the Nutmeg site,
            which improves the overall user experience”
          </p>
          <p className='para'>
            Nutmeg has also taken advantage of GoCardless’s easy to use API. “It’s great from a technical perspective” says Bill.
            “And, using GoCardless means we can avoid the legacy banks payment networks.”
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/nutmeg/product@2x.png' alt='' />
          </div>

          <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-margin-Txl'>
            Confidence in Direct Debit
          </h2>
          <p className='para'>
            But most importantly, GoCardless has allowed Nutmeg to live up to its customer-centric mantra by giving customers the
            freedom and ease of managing their direct debit payments online. Nutmeg’s customers are protected from the Direct Debit
            Guarantee, with 3 out of 5 customers opting to use Direct Debit it’s important to have the right provider.
          </p>
          <p className='para'>
            It’s not just their customers who have saved time, Nutmeg themselves have benefitted from the automated payments, meaning
            they haven't had to employ extra staff to oversee laborious payment processes.
          </p>
          <p className='para'>
            Bill and the Nutmeg team recommend GoCardless to other organisations in the financial services and investments space
            “Because of their easy to use APIs, backed up by a customer portal and excellent customer service, we’d highly recommend
            GoCardless!”
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/nutmeg/world@2x.jpg' alt='' />
          </div>
        </div>
      </StoryPageNew>
    );
  }
}
