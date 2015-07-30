import React from 'react';
import Link from '../../../../components/link/link';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';
import IfLocale from '../../../../components/if-locale/if-locale';

export default class FaqProDashboardEn extends React.Component {
  displayName = 'FaqProDashboardEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Setup</h2>
        <p className='para'>
          <IfLocale hasInstantSignup>
            With the <a href='https://manage.gocardless.com/' className='u-link-color-p u-text-underline'>GoCardless dashboard</a>,
            you can manage Direct Debit mandates and take recurring payments without any technical integration.
          </IfLocale>
          <IfLocale hasInstantSignup={false}>
            With the GoCardless dashboard you can manage Direct Debit mandates and take recurring payments without any technical
            integration.
          </IfLocale>
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Getting started
        </h3>
        <IfLocale hasInstantSignup>
          <p className='para'>
            You can <Href to='signup.path' className='u-link-color-p u-text-underline'>sign up to GoCardless today</Href> and
            start collecting payments instantly. You'll need to verify your identity before you're able to receive any funds.
          </p>
        </IfLocale>
        <IfLocale hasInstantSignup={false}>
          <p className='para'>
            You can <a href='https://manage-sandbox.gocardless.com/signup' target='_blank'
            className='u-link-color-p u-text-underline'>create a test account</a> for free.
          </p>
          <p className='para'>
            Before you can open a live account and start collecting payments, please
            email <Href to='email' className='u-link-color-p u-text-underline' /> with the following documents:
          </p>
          <ul className='list'>
            <li>
              Confirm that you've read and accepted our <Link to='legal_merchants'
              className='u-link-color-p u-text-underline'>terms and conditions</Link>.
            </li>
            <li>
              Send us a €1 payment from your company bank account.
            </li>
            <li>
              Send us a scanned copy of the passport or ID card of your company director.
              You should also provide scanned ID for any investor that owns 25% or more of your company.
            </li>
          </ul>
          <p className='para'>
            Once these documents have been verified, we'll create a live account for your business (typically in less than 24 hours).
            Once you have the live account, you can use GoCardless to collect Direct Debit payments. There is no need to go via your
            bank to get a SEPA Creditor ID or Bacs SUN.
          </p>
          <p className='para'>
            Please note that anything you do in your test account will not be transferred to your live production account.
          </p>
        </IfLocale>
        <p className='para'>
          If you wish to migrate existing customers where you already have a Direct Debit mandate in place, please
          email us at <Href to='email' className='u-link-color-p u-text-underline' />.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Account preparation
        </h3>
        <p className='para'>
          You can personalise your account in the <a href='https://manage.gocardless.com/settings/company'
          target='_blank' className='u-link-color-p u-text-underline'>Company Info section</a>:
        </p>
        <ul className='list'>
          <li>You can upload a logo to be used on your payment page.</li>
          <li>You can add the bank account where you want us to send collected funds.</li>
        </ul>

      </Translation>
    );
  }
}
