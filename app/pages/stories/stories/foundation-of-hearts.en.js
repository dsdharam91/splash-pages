import React from 'react';
import Translation from '../../../components/translation/translation';
import StoryBigQuote from '../story-big-quote';
import StoryPage from '../story-page';
import StoryQuote from '../story-quote';

export default class StoriesFoundationOfHeartsEn extends React.Component {
  displayName = 'StoriesFoundationOfHeartsEn'

  render() {
    return (
      <Translation locales='en'>
        <StoryPage
          title='Foundation of Hearts'
          tagline='The Foundation of Hearts attracts 7500 donations in under 2 months with GoCardless’s simple and easy-to-use system'
          tips={[
            'We helped them set up 7,500 supporters in less than 2 months',
            'GoCardless helped them integrate direct debit payments into their website in less than an hour',
            'We helped them manage online payments with no technical or payments expertise',
          ]}>
          <StoryQuote tag='We needed a payments provider which was easy for us and the fans to use'>
            <p className='para u-margin-Tn'>
              <a href='http://www.foundationofhearts.org/' className='u-link-color-p u-text-underline' target='_blank'>
              The Foundation of Hearts</a> is a not-for-profit organisation made up of thousands of Hearts
              fans aiming to save the Heart of Midlothian FC (a Scottish Premier League team) from
              liquidation by becoming its majority shareholder.
              Fans pledge regular monthly contributions of £10 - £200 to support the purchase.
            </p>
            <p className='para'>
              As the Foundation is run by volunteers they “needed a payments provider which was easy for us, and the fans, to use”.
            </p>
          </StoryQuote>
          <StoryBigQuote heroClass='story-hero--foundation-of-hearts' person='Brian Cormack' position='Foundation of Hearts'>
            We chose GoCardless for three reasons: it's easy for our team to use, easy for our supporters
            to use, and the fees are brilliantly low. What's more, the quality of service we've received
            from the GoCardless team has been fantastic.
          </StoryBigQuote>
          <StoryQuote tag='GoCardless was the simple option'>
            <p className='para u-margin-Tn'>Having spoken to PayPal and their bank about other payment methods the Foundation decided on
            GoCardless as “the simple option”.</p>
            <p className='para'>Brian Cormack, a director of the Foundation of Hearts, says, “We chose GoCardless for three
            reasons: it's easy for our team to use, easy for our supporters to use, and the fees are brilliantly low.
            What's more, the quality of service we've received from the GoCardless team has been fantastic.”</p>
            <p className='para'>The Foundation integrated with the GoCardless API to allow fans to make pledges through their website.
            Reporting is provided to the Foundation's team through the API and the GoCardless dashboard.</p>
          </StoryQuote>
          <StoryQuote tag='The GoCardless team has been fantastic'>
            <p className='para u-margin-Tn'>
              Using GoCardless has made the payment process much simpler to manage. “I'm not the most technical of people,
              and even I have found it simple to use. What's more, the quality of service we've received from the GoCardless
              team has been fantastic” says Brian, director of the Foundation.
            </p>
            <p className='para'>Within two months of launching with GoCardless, 7,500 fans pledged to support the Foundation.
            This has now risen to 8,000 and continues to grow. “We plan to keep expanding, and all pledges
            will be processed by GoCardless.”</p>
          </StoryQuote>
        </StoryPage>
      </Translation>
    );
  }
}
