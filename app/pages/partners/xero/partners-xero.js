import React from 'react';
import PartnersPage from '../partners-page';

export default class PartnersXero extends React.Component {
  displayName = 'PartnersXero'

  render() {
    return (
      <PartnersPage
      title='Xero'
      logoClass='xero-header-logo'
      blurb={
        'Especially popular with accountants and bookkeepers, our Xero ' +
        'integration lets you collect invoices via Direct Debit.'
      }
      url='http://xero.com/'
      screenshot='/images/partners/xero-frame@2x.jpg' />
    );
  }
}
