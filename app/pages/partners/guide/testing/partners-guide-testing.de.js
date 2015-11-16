import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class PartnersGuideTestingDe extends React.Component {
  displayName = 'PartnersGuideTestingDe'

  render() {
    return (
        <Translation locales='de'>
        <h2>Developing and testing</h2>

        <h3>Where can I find your API documentation?</h3>

        <p>
          Our API documentation can be found <a href='https://developer.gocardless.com/pro/' target='_blank'>here</a>. You
          can find specific guides to our App integration using
          OAuth <a href='https://developer.gocardless.com/pro/#guides-oauth' target='_blank'>here</a>.
        </p>

        <h3>Do you have a sandbox account so that I can test my integration?</h3>

        <p>
          Yes - you can sign up instantly for a sandbox
          account <a href='https://manage-sandbox.gocardless.com/signup' target='_blank'>here</a>.
        </p>

        <h3>What programming languages can I use?</h3>

        <p>
          Our API is adherent to the RESTful style and published in the JSON schema. We also publish
          client libraries to help our integrators - those are
          published <a href='https://developer.gocardless.com/pro/#overview-client-libraries' target='_blank'>here</a>.
        </p>

        <h3>Where can I get technical support?</h3>

        <p>
          You can email us at <Href to='email' itemProp='email' />. Our developers are on hand
          9am-6pm, Mon-Fri to help with your technical queries.
        </p>

        <h3>How do I migrate from test to live?</h3>

        <p>
          Once you have completed testing in our sandbox environment, get in touch with
          us at <Href to='partners_email' itemProp='email' /> to demo your
          integration. If there are no problems then we will switch your account to live.
        </p>
        </Translation>
    );
  }
}
