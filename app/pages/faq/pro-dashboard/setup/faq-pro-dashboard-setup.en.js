import React from 'react';
import Link from '../../../../components/link/link';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';
import IfLocale from '../../../../components/if-locale/if-locale';

export default class FaqProDashboardEn extends React.Component {
  displayName = 'FaqProDashboardEn'

  render() {
    return (
      <Translation locales={['en']} exclude={['en-GB']}>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Setup</h2>
        <p className='para'>
          With the GoCardless dashboard you can manage SEPA Direct Debit mandates and take recurring payments without any
          technical integration.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Getting started
        </h3>
        <IfLocale hasInstantSignup>
          <p className='para'>
            You can <Href to='signup.path' target='_blank'>
            create your GoCardless account
            </Href> and start collecting payments instantly.
            You will just need to add identity verification documents to be able to receive funds.
          </p>
        </IfLocale>
        <IfLocale hasInstantSignup={false}>
          <p className='para'>
           You can <a href='https://manage-sandbox.gocardless.com/signup' target='_blank'
            className='u-link-color-p u-text-underline'>create a test account</a> for free.
          </p>
          <p className='para'>
            In order to open a real account and start collecting payments, please email <Href to='email' /> the
            following documents :
          </p>
          <ul className='list'>
            <li>Confirm that you read and accepted our
            <Link to='legal_merchants'> Terms and Conditions</Link></li>
            <li>Wire €1 to us from your company bank account</li>
            <li>Send a passport or ID card of your Director and any investor who owns over 25% of your company</li>
          </ul>
          <p className='para'>
            Once these documents have been verified, we will create an account (typically under 24h) and you will
            be able to start using GoCardless to collect Direct Debit payments, without having to go through your
            bank or get a SEPA Creditor ID.
          </p>
          <p className='para'>
            Please note that anything you do in your test account won't be passed to your real account.
          </p>
        </IfLocale>
        <p className='para'>
          If you wish to migrate existing customers where you already have a Direct Debit mandate in place, please
          email us at <Href to='email' />.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Account preparation
        </h3>
        <p className='para'>
          You can personalise your account in the <a href='https://manage.gocardless.com/settings/company'
          target='_blank' className='u-link-color-p u-text-underline'>Company Info section</a> :
        </p>
        <ul className='list'>
          <li>Upload a logo which will be used on your mandate page</li>
          <li>Add the bank account where you want us to wire the funds</li>
        </ul>

      </Translation>
    );
  }
}
