import React from 'react';
import Page from '../../components/page/page';
import ProspectForm from '../../components/prospect-form/prospect-form';
import Message from '../../components/message/message';
import ClockIcon from '../../icons/svg/clock';
import CheckListIcon from '../../icons/svg/checklist';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import CustomerIcon from '../../icons/svg/customer';
import SecurityIcon from '../../icons/svg/security';
import DeveloperIcon from '../../icons/svg/developer';
import TickIcon from '../../icons/svg/tick';
import AddPartnerIcon from '../../icons/svg/add-partner';

export default class AuddisDirectDebit extends React.Component {
  displayName = 'AuddisDirectDebit'

  render() {
    return (
      <Page>
        <div className='page-hero u-padding-Bxxl'>
          <div className='site-container u-padding-Vxxl u-text-center'>
            <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
              The Easiest Way To Be An AUDDIS<br />Direct Debit Originator
            </h1>
            <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
              Discover an easier &amp; smarter way to collect Direct Debit payments and to be AUDDIS-compliant
            </p>
          </div>
        </div>
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='grid u-center u-text-center'>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <ClockIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                  <ClockIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Get started in only 2 weeks
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  There’s no need to go through an extensive approval process or to lodge a bond at your sponsor bank for AUDDIS Direct Debit.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <AddPartnerIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                  <AddPartnerIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  No more software upgrades
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  GoCardless automatically stays on top of all AUDDIS requirements. Say goodbye to expensive software maintenance contracts.
                </p>
              </div>
              <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                <figure className='svg-icon u-center'>
                  <CheckListIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                  <CheckListIcon className='svg-icon__image u-fill-dark-gray' />
                </figure>
                <h3 className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Fewer compliance requirements
                </h3>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  There’s no need to hire a consultant to stay on top of your AUDDIS requirements.
                  Our modern API does all of the hard work for you.
                </p>
              </div>
            </div>
            <div className='u-padding-Tm u-margin-Tm u-text-center'>
              <a href='#contact-us' className='btn u-padding-Hl'>Speak to our experts</a>
            </div>
          </div>
        </div>
        <hr className='u-margin-An' />

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Vxl'>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img src='/images/why-dd/slide-1.png' className='u-padding-Rxxl'/>
            </div>
            <div className='grid__cell u-size-1of2'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-margin-Bl'>
                Get started in only 2 weeks
              </h2>
              <h3 className='u-text-s'>The easy way to access Direct Debit</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                GoCardless is the easiest way to get access to Direct Debit. We’re a Bacs approved bureau and we can help you to get set up
                in as little as 2 weeks. With a bank, it can take 6 months or more to be approved for AUDDIS Direct Debit.
              </p>
              <h3 className='u-text-s'>Optimised approved process</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                We’ll help you to get your Direct Debit materials approved by the bank. As part of this optimised approval process, we’ll
                vet your payment pages and e-mails so they’ll be approved first time.
              </p>
              <h3 className='u-text-s'>No capital requirements</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                We don’t require you to provide a bond and we also won’t hold back any of your funds. With a bank, you’ll need to provide
                a bond for indemnity claims and go through credit committees.
              </p>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Vxl'>
            <div className='grid__cell u-size-1of2'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-margin-Bl'>
                No more software upgrades
              </h2>
              <h3 className='u-text-s'>Direct Debit for the Digital Age</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                With GoCardless, your Direct Debit software lives in the cloud. This means no more expensive software upgrades and
                maintenance contracts: you’ll always be up-to-date with the latest AUDDIS requirements.
              </p>
              <h3 className='u-text-s'>TLS and SHA-2 Compliant</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                GoCardless is fully compliant with the
                upcoming <a href='https://gocardless.com/guides/posts/bacs-tls-sha2-security-updates/'
                className='u-link-color-p u-text-underline'>TLS and SHA-2 security
                requirements</a> from Bacs.
              </p>
              <h3 className='u-text-s'>Clean, modern API</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                Our RESTful API is clean, modern and easy-to-use. We’ve made integrating with your systems as painless as possible.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img src='/images/why-dd/slide-3.png' className='u-padding-Lxxl' />
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Vxl'>
            <div className='grid__cell u-size-1of2 u-text-center u-padding-Rl'>
              <img src='/images/features/pro-dashboard-timeline.png' />
            </div>
            <div className='grid__cell u-size-1of2'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-margin-Bl'>
                Fewer compliance requirements
              </h2>
              <h3 className='u-text-s'>AUDDIS made easy</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                With GoCardless, you’ll never need to deal with
                another <a href='https://gocardless.com/direct-debit/receiving-messages/' className='u-link-color-p u-text-underline'>
                AUDDIS report</a>. We'll automatically handle your Bacs reports for you (including AUDDIS, ADDACS, ARUDD and DDICA
                messages) to give you actionable information in our dashboard and API.
              </p>
              <h3 className='u-text-s'>Improve customer service</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                GoCardless integrates with billing &amp; CRM systems to provide actionable account information, enabling faster resolution
                to customer contacts. Reduced manual admin and payment failures with automatic reconciliation of payments against bills.
              </p>
              <h3 className='u-text-s'>Modulus checking</h3>
              <p className='u-size-5of6 u-color-p u-margin-Bm'>
                GoCardless provides <a href='https://gocardless.com/guides/posts/modulus-checking/'
                className='u-link-color-p u-text-underline'>modulus checking</a> at no extra charge. This reduces payment failures and
                keeps your customers happy.
              </p>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-text-center'>
              GoCardless powers online Direct Debit for over <Message pointer='number_of_merchants' /> businesses
            </h2>
            <div className='grid__cell u-size-1of2 u-link-clean u-padding-Rxs u-padding-Vm'>
              <div className='spotlight-grid__container u-text-center u-padding-Vl'>
                <i role='img' className='greater-anglia-logo stories-item__logo--greater-anglia'></i>
                <p className='u-size-3of4 u-center u-color-dark-gray u-margin-Txxs'>
                  "Switching to GoCardless has saved us time and money. GoCardless have taken all of the pain out of setting up and
                  managing Direct Debit. Their system is incredibly simple and their expertise is second to none."
                </p>
              </div>
            </div>
            <div className='grid__cell u-size-1of2 u-link-clean u-padding-Rxs u-padding-Vm'>
              <div className='spotlight-grid__container u-text-center u-padding-Vl'>
                <i role='img' className='funding-circle-logo stories-item__logo--funding-circle'></i>
                <p className='u-size-3of4 u-center u-color-dark-gray u-margin-Txxs'>
                  "GoCardless is one of the best payments companies we've worked with. I'd highly recommend them to any company
                  that cares about a providing good user experience and using the best available technology."
                </p>
              </div>
            </div>
            <div className='u-text-center u-padding-Vs u-center'>
              <img src='/images/logos/pro-logos@2x.png' className='u-size-2of3' />
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-padding-Vxxl'>
          <div className='u-padding-Vxl'>
            <div className='grid'>
              <div className='grid__cell u-size-1of3'>
                <figure className='svg-icon svg-icon--small'>
                  <TickIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-green' />
                  <TickIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                  Move your existing customers
                </div>
                <p className='u-color-p u-margin-Txs'>
                  It’s easy to migrate all of your existing customers over to GoCardless.
                </p>
              </div>
              <div className='grid__cell u-size-1of3'>
                <figure className='svg-icon svg-icon--small'>
                  <DeveloperIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-yellow' />
                  <DeveloperIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                  Automatic notifications
                </div>
                <p className='u-color-p u-margin-Txs'>
                  Get real-time alerts about failed or cancelled payments.
                </p>
              </div>
              <div className='grid__cell u-size-1of3'>
                <figure className='svg-icon svg-icon--small'>
                  <CheckListIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                  <CheckListIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                  Collect Paperless Direct Debit
                </div>
                <p className='u-color-p u-margin-Txs'>
                  Take payments online and over the phone. You can also take paper Direct Debit.
                </p>
              </div>
            </div>
            <div className='grid u-margin-Txl u-padding-Tl'>
              <div className='grid__cell u-size-1of3'>
                <figure className='svg-icon svg-icon--small'>
                  <CustomerIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-green' />
                  <CustomerIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                  Connected to your business
                </div>
                <p className='u-color-p u-margin-Txs'>
                  Integrate with your CRM and billing system. Our modern API makes this as easy and painless as possible.
                </p>
              </div>
              <div className='grid__cell u-size-1of3'>
                <figure className='svg-icon svg-icon--small'>
                  <SecurityIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-blue' />
                  <SecurityIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                  Transparent pricing
                </div>
                <p className='u-color-p u-margin-Txs'>
                  Fees from 1p-60p per transaction. No set up costs, hidden charges or minimum commitments.
                </p>
              </div>
              <div className='grid__cell u-size-1of3'>
                <figure className='svg-icon svg-icon--small'>
                  <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small svg-icon__image--small-shadow u-fill-yellow' />
                  <MoneyFlowerIcon className='svg-icon__image svg-icon__image--small u-fill-dark-gray' />
                </figure>
                <div className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-s u-margin-Tm'>
                  Collect in £ and €
                </div>
                <p className='u-color-p u-margin-Txs'>
                  Take payments from over 22 countries in a single integration. Take Bacs Direct Debit and SEPA Direct Debit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className='u-margin-An' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='u-padding-Vxl u-text-center u-center' id='contact-us'>
            <h2 className='u-text-heading u-color-dark-gray u-text-l u-text-light u-text-center u-margin-Bl'>
              Want to learn more? Speak with our Direct Debit experts
            </h2>
            <div className='grid__cell u-size-1of2'>
              <ProspectForm prospectType='sales' />
              <hr />
              <p className='u-text-center u-color-dark-gray u-margin-Bs'>
                <b><Message pointer='contact_sales.talk_to_us' /></b><br />
                <Message pointer='contact_sales.call_us' /> <Message pointer='phone_local' />
              </p>
              <hr />
              <p className='u-text-center u-color-dark-gray u-margin-Bs'>
                <b><Message pointer='contact_sales.information1' /></b><br />
                <Message pointer='contact_sales.information2' />
              </p>
            </div>
          </div>
        </div>
      </Page>
    );
  }
}
