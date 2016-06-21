import React from 'react';
import JobsPage from '../jobs-page';

export default class MarketAnalystInternship extends React.Component {
  displayName = 'MarketAnalystInternship'

  render() {

    return (
      <JobsPage>
        <h3 className='u-text-heading-light u-text-m u-color-dark-gray'>Market Analyst Internship</h3>
        <p className='para'>
          Maximise your summer by helping to drive GoCardless’s global growth!
        </p>
        <p className='para'>
          At GoCardless we are looking to scale from processing $1 billion a year to over $10 billion worldwide.
          Our <a href='https://gocardless.com/blog/a-new-payment-network-for-the-internet/' target='_blank'> vision </a>
          is to create a global payments network, making payments simpler on
          the internet no matter what country you're in.
        </p>
        <p className='para'>
          This summer we're looking for a bright, ambitious individual to join our talented New Business Development
          team and accelerate our growth in the UK and across Europe.
        </p>
        <h4 className='u-text-xs u-margin-Bxs u-margin-Tm'>The role</h4>
        <p className='para'>
          The New Business Development team at GoCardless sits within our sales function and combines deep product expertise,
          in depth knowledge of the payments industry, and a consultative approach to help generate new opportunities for the business.
        </p>
        <p className='para'>
          As a Market Analyst you'll work alongside our New Business Development representatives to identify target customers in the UK and
          across Europe before carrying out a detailed analysis of how these potential customers currently collect payments and where
          GoCardless could add value. This will include helping us define the vertical markets in a useful way, organising and enriching
          the existing data we have about potential customers, and then identifying ways to prioritise those prospects based upon
          their attractiveness. You’ll also be responsible for making the information available to teams in the most effective way.
        </p>
        <h4 className='u-text-xs u-margin-Bxs u-margin-Tm'>What we're looking for</h4>
        <ul className='list u-margin-Tm'>
          <li>
            You're an undergraduate student or recent graduate with commercial or technical backgrounds.
          </li>
          <li>
            You have strong analytical skills and the ability to use a wide range of resources to come to clear conclusions and recommendations.
          </li>
          <li>
            You are a numerate individual that relishes the process of analysing data to extract insights.
          </li>
          <li>
            You have the motivation and flexibility to work well in a rapidly changing, high-growth environment.
          </li>
          <li>
            You have superb verbal and written communication skills.
          </li>
        </ul>
        <p className='para'>
          This role would ideally suit someone passionate for technology, the startup community, and supporting other businesses as they grow.
          If you’re unsure, please apply &ndash; we’d love to hear from you. This role will be based in London.
        </p>
        <h4 className='u-text-xs u-margin-Bxs u-margin-Tm'>The perks</h4>
        <ul className='list u-margin-Tm'>
          <li>
            Macbook Air and 27" Thunderbolt display.
          </li>
          <li>
            Bi-weekly and monthly all team lunches and evenings out.
          </li>
          <li>
            Stocked kitchen and unlimited (great) coffee!
          </li>
        </ul>
        <a href='http://boards.greenhouse.io/gocardless/jobs/235054' className='btn u-margin-Vs'>
          Apply now
        </a>
      </JobsPage>
    );
  }
}
