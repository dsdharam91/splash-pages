import React from 'react';
import StoryPageNew from '../story-page-new';

export default class StoriesPeterboroughCouncil extends React.Component {
  displayName = 'StoriesPeterboroughCouncil'

  render() {
    return (
      <StoryPageNew
        title='GoCardless was easy to integrate into our online subscription service, and offered value for money for taking multiple payments.'
        author='James Collingridge'
        position='Partnership Manager'
        company='Peterborough City Council'
        benefits='Quick to set up and integrate with existing systems, plus lower processing costs.'
        bgimgUrl='url(/images/stories/story-images/hotpod-yoga/hero-hotpod-yoga.jpg)'
        sidebarLogoSrc='/images/stories/story-logos/peterborough-council.png'
        sidebarServices='Providing local government services to residents in Peterborough.'
        sidebarEmployees='1,400 employees'
        sidebarTimeSaved='Avoided costly integration with the council&apos;s usual payment system.'>
        <div className='story-body'>
          <p className='para u-margin-Tn'>
            Peterborough is one of the fastest growing cities in the UK and has a diverse
            population. <a href='https://www.peterborough.gov.uk/' className='u-link-color-p u-text-underline'>Peterborough City Council</a> aims
            to offer excellent customer service and stay at the forefront of digital solutions.
          </p>
          <p className='para'>
            The city council provides services for around 84,000 households, including social care for children and adults,
            waste and recycling services and street cleaning. It is also accredited as a zero to landfill authority,
            with an Energy Recovery Facility that went online in late 2015.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/peterborough-council/peterborough-city@2x.jpg' alt='' />
          </div>
          <p className='para'>
            Peterborough City Council already has a digital strategy in place that incorporates the ethos of ‘Digital by Default’.
            The city council is working with the private sector to bring in new technology to both benefit residents and also
            improve the way officers work. For example, Peterborough City Council has now moved to Google's cloud-based applications
            and has become much more agile by adopting Chromebooks.
          </p>
          <p className='para'>
            Various departments within the council have also introduced digital solutions, including Salesforce, Arcus,
            Bibliotheca and GoCardless. By incorporating these, the council has streamlined processes and made services
            more accessible to residents.
          </p>
          <p className='para'>
            As with all local authorities, the biggest challenge Peterborough City Council faces is current budgetary pressures.
            With reduced grants from central government, it is important to look at how to maintain high standards of
            services for residents while at the same time driving down costs.
          </p>
          <p className='para'>
            Recently, Peterborough City Council started charging for its garden waste collection service. This had previously
            been a discretionary service. But it became necessary to introduce an annual charge due to year-on-year
            reductions to the government grant plus rising demand for statutory council services.
          </p>
          <p className='para'>
            In addition, Peterborough was paying for garden waste collection out of council taxes when only 30% of
            residents actually used the
            service. <a href='http://www.itpro.co.uk/public-sector/27311/peterborough-council-rolls-out-gocardless-to-save-800k'
            className='u-link-color-p u-text-underline'>To make matters fairer</a> for everyone, the council made
            garden waste collections a separate charge. This now covers the £800,000 annual cost of the service.
          </p>
          <p className='para'>
            But the challenge was collecting payments for this new charge in a way that was painless for both
            the city council and its constituents. Peterborough needed a reliable, accessible and easy-to-manage
            way to collect these payments.
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/peterborough-council/green-bin-1@2x.jpg' alt='' />
          </div>
          <p className='para'>
            Once regular Direct Debit was identified as the most efficient solution, Peterborough City Council discovered
            it was too complicated and costly to integrate within its existing payment services provider.
            This is where GoCardless came in to offer a quick and easy solution.
          </p>
          <p className='story-page__quote'>
            With GoCardless it was really quick to setup and integrate with our existing systems.
          </p>
          <p className='para'>
            “This is exactly the kind of thing that can cause a big headache when setting up. We knew residents might
            have concerns about the charge and so we had to get it right,” James Collingridge explains.
          </p>
          <p className='para'>
            “With GoCardless it was really quick to setup and integrate with our existing systems, and has worked
            smoothly since. The lower processing costs mean we can be more efficient with our budget and with
            automatic payments renewal, residents don’t need to worry about making the payments on time.”
          </p>
          <div className='story-page__image'>
            <img src='/images/stories/story-images/peterborough-council/green-bin-3@2x.jpg' alt='' />
          </div>
          <p className='para'>
            “GoCardless offered a system that was easy to integrate into our online subscription service, it offered
            value for money for taking multiple payments. We also found it easy to navigate, set up payment plans
            and link into the API,” says James.
          </p>
          <p className='para'>
            “I would recommend GoCardless as a cost effective solution for taking Direct Debit or one off payments.
            They do not require any costly software licenses or infrastructure as it is a purely cloud-based solution.”
          </p>
        </div>
      </StoryPageNew>
    );
  }
}
