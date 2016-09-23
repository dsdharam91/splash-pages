import React from 'react';
import LegalPage from '../legal-page';
import Link from '../../../components/link/link';

export default class LegalPartners extends React.Component {
  displayName = 'LegalPartners'

  render() {
    return (
      <LegalPage>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Partner agreement</h2>

        <p className='para'>
          <strong>This Agreement was updated on 23rd September 2016. If you signed up on or after 23rd September 2016, you will be bound by this version of the Agreement. If you signed up before 23rd September 2016, you will be bound by this version of the Agreement from 7th December 2016 onwards. You can find the most recent prior version of this Agreement <Link to='legal_old_terms' className='u-link-color-p u-text-underline'>here</Link>.</strong>
        </p>

        <p className='para'>
          GoCardless enables its partners to offer its payment collection services through their own system. This document sets out the terms of the contract ('<em>Contract</em>') between you, the partner, and GoCardless for you to enable those wishing to collect payments through GoCardless ('<em>Merchants</em>') to do so. These terms and conditions are available on our website and you may ask for a copy of them at any time while you are a partner with us.
        </p>

        <p className='para'>
          Any contracts for the supply of goods and services between you (the partner) and your customers (Merchants) is not affected by this Contract. If there is any difficulty with the goods or services you provide to the Merchants, you remain liable to them directly.
        </p>

        <ol className='list list--numbered u-margin-Tn'>
          <li className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            The GoCardless API and Partner API
          </li>

          <p className='para'>
            GoCardless may make available to you its application programming interface and its application programming interface for partners ("<em>API</em>" and "<em>Partner API</em>" respectively; together '<em>APIs</em>'). Further, it may make available guides and documentation ('<em>GoCardless Documentation</em>'). Where it does, you shall comply with the GoCardless Documentation in connection with the integration and use of the APIs.
          </p>

          <p className='para'>
            You are prohibited from interfacing with the GoCardless APIs in a way which GoCardless has stated is not permitted in the current version of the GoCardless Documentation, or the publicly available documentation relating to the system.
          </p>

          <p className='para'>
            For the avoidance of doubt, as a partner you do not own any of the transaction or other details related to any Merchant's GoCardless account. Your role is only as a facilitator.
          </p>

          <li className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            Your GoCardless partner account
          </li>

          <p className='para'>
            To obtain a GoCardless partner account you will need to provide us with certain information to facilitate any payments to you. We will have to perform some identity and credit checks on you.
          </p>

          <p className='para'>
            We may apply limits for any transactions that are processed in relation to your GoCardless partner account. We will notify you of any limits and any changes that we make to them.
          </p>

          <p className='para'>
            You are prohibited from doing any of the following:
          </p>

          <ul className='list'>
            <li>
              selling, transferring or otherwise allowing third parties to access your GoCardless account; and
            </li>
            <li>
              collecting any customer's personal data that is accessed through your use of GoCardless without that customer's express permission.
            </li>
          </ul>

          <li className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            Charging fees to Merchants
          </li>

          <p className='para'>
            Where you enable Merchants to access their GoCardless account through your services, you may choose to charge fees on top of our fee. You must communicate that fee to us and to Merchants before they sign up to use your services. We will deduct those fees from transactions completed through your services and allocate them to your GoCardless payment account immediately. These fees will then be paid out as detailed in this Contract.
          </p>

          <p className='para'>
            By entering into this Contract you are providing us with a payment instruction requesting us to execute a payment transaction every seven business days. Payments from your GoCardless account will be credited to the account specified to us the next business day. The funds held within your GoCardless account attributable to transactions initiated over seven business days ago will be transferred to the bank account that you have nominated for these purposes, after we have made any authorized deductions. We may deduct:
          </p>

          <ul className='list'>
            <li>
              any costs we have had to incur relating to transactions where we have paid out a refund or the underlying payment transaction has otherwise been reversed (such as a chargeback under the Direct Debit Guarantee).
            </li>
            <li>
              any unauthorised or incorrectly executed payment transactions notified to us by the customer plus any related interest and charges.
            </li>
          </ul>

          <p className='para'>
            If we cannot deduct the above from future payments to you, we may require you to repay them to us.
          </p>

          <li className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            The GoCardless brand
          </li>

          <p className='para'>
            From time to time, GoCardless may set out restrictions about how its name, logo and services should be presented. Your use of the brand is at all times subject to these restrictions.
          </p>

          <li className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            Restricted Activities
          </li>

          <p className='para'>
            GoCardless does not condone the use of its system for certain purposes, as set out on our <Link to='legal_restrictions' className='u-link-color-p u-text-underline'>Restricted Activities page</Link> from time to time. You may enable others to access their accounts through the GoCardless Partner API. However if any of them do so in relation to any of the activities set out on our <Link to='legal_restrictions' className='u-link-color-p u-text-underline'>Restricted Activities page</Link>, we reserve the right to suspend or withdraw all or some of our services to you.
          </p>

          <p className='para'>
            <strong>In the event that you fail to comply with the terms of the Contract, or any instructions for use provided by GoCardless, we shall have no responsibility or liability to you for the performance of payment services.</strong>
          </p>

          <li className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            Suspected Fraud/Illegal Activity by Merchants using your services or their customers
          </li>

          <p className='para'>
            Occasionally, even the most cautious partners can become aware of acts by their customers which may appear to be fraudulent, or connected with some other type of illegal activity, such as money laundering or terrorist financing. We ask that you notify us of any such suspicions or concerns that these types of issues may affect any payments made through your system by email to <a className='u-link-color-p u-text-underline' href="mailto:help@gocardless.com">help@gocardless.com</a> or by phone using the contact details provided on the GoCardless website.
          </p>

          <p className='para'>
            You must use your best efforts to assist us in identifying any suspicious or potentially fraudulent use of GoCardless, including making information relating to merchants using your services available to us. To do this, you must retain records and make them available to us relating to each merchant using your services for a minimum of 1 month after they cease using your services.
          </p>

          <li className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            Termination
          </li>

          <p className='para'>
            This Contract will continue indefinitely until such time as either you or we terminate it in accordance with this section.
          </p>

          <p className='para'>
            You or GoCardless may terminate this Contract in the same circumstances and on the same notice periods as set out in the <Link to='legal_merchants' className='u-link-color-p u-text-underline'>Merchant Terms</Link>.
          </p>

          <li className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            Consequences of termination
          </li>

          <p className='para'>
            On termination of this partner contract with you for any reason, the clause headed Termination' and 'Consequences of Termination' in the <Link to='legal_merchants' className='u-link-color-p u-text-underline'>Merchant Terms</Link> shall apply, but we may also charge you for or deduct fees relating to transactions which have been reversed, as set out under 'Deductions, Payments and Invoicing', 'Processing Payments', and 'Cancellations and Payments' as further set out in the <Link to='legal_merchants' className='u-link-color-p u-text-underline'>Merchant Terms</Link>.
          </p>

          <li className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            Data Protection
          </li>

          <p className='para'>
            We will process information about you, Merchants using your services and other information which either you or your Merchants give us, in accordance with our Privacy Policy. We will have to perform some identity and credit checks on you before we can initiate a payment relationship with you.
          </p>

          <p className='para'>
            You represent and warrant that you have either:
          </p>

          <ul className='list'>
            <li>
              provided notice to, and obtained consent from; or
            </li>
            <li>
              procured that notice has been provided to and consent obtained from
            </li>
          </ul>

          <p className='para'>
            any Merchant (and any of their customers) whose Personal Data you supply to GoCardless.
          </p>

          <p className='para'>
            We are not responsible for any consequences resulting from your failure to provide notice or receive consent from such individuals or for your providing outdated, incomplete, or inaccurate information.
          </p>

          <p className='para'>
            You are responsible for capturing and securing any Personal Data you need prior to submitting it to us for processing. GoCardless will use the Personal Data for processing the payment transactions requested by your customers. For the purposes of the Contract, 'Personal Data' shall have the meaning given to it by the Data Protection Act 1998.
          </p>

          <li className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
            General
          </li>

          <p className='para'>
            The clauses headed 'Unauthorised payments', 'Incorrectly executed payments ', 'Law', 'Disputes and Complaints', 'General ', 'Force majeure/Acts of God', 'Assignment and Subcontractors', 'Getting in touch', 'Waiver', 'Severance', 'No partnership and rejoining to our relationship', 'Third party rights' and 'Change of circumstances' in the <Link to='legal_merchants' className='u-link-color-p u-text-underline'>Merchant Terms</Link> shall apply to our agreement with you as if they were set out here.
          </p>
        </ol>
      </LegalPage>
    );
  }
}
