import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class PartnersGuideGettingStartedEn extends React.Component {
  displayName = 'PartnersGuideGettingStartedEn'

  render() {
    return (
        <Translation locales='en'>
        <h2>Getting started</h2>

        <h3>Develop your integration</h3>

        <p>
          If you’ve decided on either App integration or White label, you should get familiar with
          our <a href='https://developer.gocardless.com/pro/#overview' target='_blank'>API documentation</a>. Specific
          sections on App integration (using OAuth) can be
          found <a href='https://developer.gocardless.com/pro/#guides-oauth' target='_blank'>here</a>. Specific sections on
          White label integration can be found <a
          href='https://developer.gocardless.com/pro/#whitelabel-partner-endpoints' target='_blank'>here</a>.
        </p>

        <p>
          You can start developing and testing out our API immediately using a sandbox
          account <a href='https://manage-sandbox.gocardless.com/signup' target='_blank'>here</a>.
        </p>

        <p>
          If you have any questions, contact our developer support team
          at <Href to='email' itemProp='email' />. Our developers are on hand 9am-6pm,
          Mon-Fri to help with your technical queries.
        </p>

        <h3>Demo your integration with us and go live</h3>

        <p>
          Once you have completed your first round of development and testing in our sandbox
          environment, get in touch with us at <Href to='partners_email' itemProp='email' /> to demo your integration
          so we can make sure you have the best advice and assistance while building your integration.
        </p>

        <p>
          Once both sides are happy we can switch your account to live.
        </p>

        <h3>Create a guide to help your customers navigate your new integration</h3>

        <p>
          Your support guide should include an overview of the integration, setup details, general usage instructions
          and FAQs. This information should be easily accessible by customers and for GoCardless to point customers at.
          If there are any changes to the integration, be sure to keep this documentation up to date!
        </p>

        <p>
          If there are several setup steps, we recommend a few short (1-3 mins) screencasts.
        </p>

        <h3>Promote the partnership!</h3>

        <p>
          We recommend that our partners promote their new payments functionality to existing and new
          customers using your website, email, social, blogs and events.
        </p>
        </Translation>
    );
  }
}
