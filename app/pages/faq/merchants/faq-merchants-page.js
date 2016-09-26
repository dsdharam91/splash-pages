import React from 'react';
import Page from '../../../components/page/page';
import Message from '../../../components/message/message';
import Href from '../../../components/href/href';
import FaqPage from '../faq-page';
import { PropTypes } from '../../../helpers/prop-types/prop-types';

export default class FaqMerchantsPage extends React.Component {
  displayName = 'FaqMerchantsPage';

  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <Page isInverted={false}>
        <FaqPage
        category='faq.merchants'
        title={(<Message pointer='faq.title' />)}
        subtitle={(
          <p className='u-text-heading-light u-text-m u-color-invert u-padding-Vs'>
            Paid with GoCardless?&nbsp;
            <Href to='customer_queries_link' className='u-text-underline u-link-invert'>
              Read our FAQ for customers
            </Href>
          </p>)
        }>
          {this.props.children}
        </FaqPage>
      </Page>
    );
  }
}
