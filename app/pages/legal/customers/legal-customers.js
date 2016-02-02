import React from 'react';
import LegalPage from '../legal-page';
import Link from '../../../components/link/link';
import Href from '../../../components/href/href';

export default class LegalCustomers extends React.Component {
  displayName = 'LegalCustomers'

  render() {
    return (
      <LegalPage>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Customer agreement</h2>
        <p className='para'>
          GoCardless enables suppliers to let their customers pay securely by direct debit over the
          internet. We also allow customers to monitor the payments they make through GoCardless. This
          document sets out the terms between you and GoCardless, and applies to the account that you open
          with GoCardless for these purposes.  These terms and conditions are available on our website and
        you may ask for a copy of them at any time while you have an account with us.
        </p>
        <p className='para'>
          Your contract for goods and services is with a supplier which wants to let you use our payment
          processing services. GoCardless is not involved in the actual supply of any goods and services
          from the supplier. If there is a difficulty with the goods or services the supplier is providing,
          or is going to provide, you must contact the supplier directly.
        </p>
        <p className='para u-text-heavy'>
          The supplier you are buying from must initiate any refunds relating to their goods and
          services – we cannot, and cancelling a payment with us does not cancel your obligation
          to ensure the supplier is paid for any goods or services that have been provided to you.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Opening a GoCardless Account
        </h3>
        <p className='para'>
          When you sign up to GoCardless, you will need to provide us with certain information to create a
          GoCardless account and to set up a direct debit connection to your bank account. We will have to
          perform some identity checks on you before we can initiate a direct debit with you.
        </p>
        <p className='para'>
          After you have signed up and your GoCardless account is active, we will provide you with a password
          which you will need to access your account and make payments to suppliers who use GoCardless.  When
          you first sign up to GoCardless, it takes 2-4 working days to set up the direct debit mandate.
        </p>
        <p className='para'>
          Your GoCardless 'account' allows you to access information about your past, current and future payment
          transactions linked to your account at the moment. It is not a bank account and there will not be any
          cash held within your GoCardless account at any time as our role relates to the processing of payments.
          Credit, or any other form of overdraft or loan, will also not be available on your GoCardless account.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Processing payments through GoCardless
        </h3>
        <p className='para'>
          The time of receipt of your payment order will be when it is received by us.  Where we receive your
          payment order after 4.30pm on a working day, it will be deemed to have been received on the next business
          day. We will then process the payment, by direct debit, for the amount that you have been asked to pay to
          the supplier for the relevant goods and services.  We do not charge you a fee for processing payments through
          GoCardless.  The amount the supplier has told you to pay is the amount which we will take from your bank account.
        </p>
        <p className='para'>
          Once your GoCardless account and direct debit mandate have been set up (as set out under 'Opening a GoCardless
            Account', above), we will transmit each payment order that you make through your GoCardless account to enable
          the settlement of each direct debit to occur on the agreed due date. It usually takes a maximum of 2 working days
          to take money from your bank account.  By providing your email address and password in relation to processing a
          particular payment, you consent to us processing the relevant payment through the GoCardless payment system (which
            can only be cancelled in the circumstances outlined in these terms and conditions under the heading <a href='#cancellation'
            className='u-link-color-p u-text-underline'>Cancellation of a payment transaction</a>).  We may apply spending limits for
          any payment transactions that take place through your GoCardless account.  We will notify you of any spending limits and
          any changes that we make to them.
        </p>
        <p className='para'>
          Any payments that we process are ultimately governed by the terms and conditions issued by your bank relating to your
          relevant bank account.  Like any other payments that you make, other than in the circumstances outlined in these terms
          and conditions you should contact the bank where your account is held if you have any questions relating to your bank
          account and any payments that are made through the GoCardless system.
        </p>
        <p className='para'>
          Each time we take a payment, an entry for 'gocardless.com' will appear on your bank statement. You can log in to your
          account at any time on the GoCardless website to view a summary of the payments you have instructed us to make.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Security of your GoCardless Account
        </h3>
        <p className='para'>
          You must not disclose your account details to any other person (unless you have informed us in writing that you intend
            to disclose your account details to a particular person e.g. under a power of attorney) and must take reasonable steps
          to keep your account details safe and prevent fraudulent use of your account (and must ensure that any person to whom you
            disclose your account details takes the same reasonable steps).
        </p>
        <p className='para'>
          Such precautions should include keeping you account related paperwork in a safe place, not writing down your email
          address and password and taking reasonable care to ensure that other people do not oversee or hear you using your
          personal account details. You must inform us without undue delay on becoming aware of the loss, theft, misappropriation
          or unauthorised use of your account details.
        </p>
        <p className='para'>
          We are entitled to immediately suspend or withdraw your right to make payment transactions through your GoCardless account
          where we have reasonable grounds to believe that there may be a breach in the security of your account details, we suspect
          the unauthorised or fraudulent use of your account details or where we are required by law. Where we decide to take this action,
          we will write to you in advance informing you that we intend to do so and the reasons for our actions other than where this is not
          possible, in which case we will inform you at the earliest opportunity and in any event within the time that you would expect any
          payments that are made through GoCardless to be processed. We will not inform you where this would compromise our reasonable
          security measures or is otherwise unlawful. If the reasons for our actions then cease to exist, we will then either reinstate
          your access to your GoCardless account or issue you with new account details as soon as practicable.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s' id='cancellation'>
          Cancellation of a payment transaction
        </h3>
        <p className='para'>
          You can cancel your instruction to make a payment up to 6pm of the working day two working days before the day agreed to take
          the payment from your bank account. You can cancel by logging in to your account, clicking 'view details' and clicking the
          'cancel' link.
        </p>
        <p className='para'>
          While you can ask us to cancel a payment, this may not automatically cancel your order with the supplier. If you wish
          to cancel an order with a supplier, or there is a problem with any of the goods or services you have ordered, please
          contact the supplier directly. GoCardless cannot initiate refunds for transactions that are processed through the
          GoCardless system.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Cancelling the direct debit mandate within the GoCardless Account
        </h3>
        <p className='para'>
          Payments that take place through GoCardless are made under the UK Direct Debit Scheme.  Therefore, you can, of course,
          cancel your direct debit mandate held by GoCardless under the terms of the Direct Debit Guarantee stated above. However,
          you should be aware that doing so could have serious implications for you. If you do:
        </p>
        <ul className='list'>
          <li>
            we will be unable to process any payments from you to anyone that you have committed to pay through GoCardless;
          </li>
          <li>
            we will contact you to make sure you have not done it in mistake. If you have we will tell you what you need to do
            to set up a replacement mandate;
          </li>
          <li>
            we will have to inform any suppliers to whom you have committed to make payment, and any partner which was
            enabling the payment that you have cancelled your payments; and
          </li>
          <li>
            you may still be contractually bound to pay those suppliers to whom you have committed to make payment and
            they may be able to pursue you for their payment and for the cost of getting such payment from you;
          </li>
          <li>
            If, under the direct debit guarantee scheme, you have claimed back any payments which had already been made
            to us which were not initiated as a result of fraud, you will owe us an amount equal to the money you have
            claimed back. We may pursue you for those sums and for the cost of getting them from you.
          </li>
        </ul>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Cancelling your order with the supplier
        </h3>
        <p className='para'>
          GoCardless cannot initiate refunds for transactions that are processed through the GoCardless system.
          Please contact the relevant supplier if you want to cancel an order or seek a refund.
        </p>
        <p className='para'>
          If you cancel your order with a supplier, that supplier will either (i) tell us not to take payment if we
          are not already processing the payment or (ii) arrange to refund you. If we are told by a supplier that an
          order has been cancelled, we will tell you and any partner which was enabling the payment that the supplier
          has cancelled your payments.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Unauthorised payment transactions
        </h3>
        <p className='para'>
          Upon becoming aware of any unauthorised or incorrectly executed payment transaction from your
          GoCardless account, you must notify us by email to <Href to='email'
          className='u-link-color-p u-text-underline' itemProp='email' /> or by phone
          using the contact details provided on the GoCardless website.
        </p>
        <p className='para'>
          In relation to unauthorised payment transactions, you must contact us without undue delay by email
          to <Href to='email' className='u-link-color-p u-text-underline'
          itemProp='email' /> or by phone using the contact details provided on
          the GoCardless website and in any event no later than 13 months after the date of the relevant payment
          transaction from your account. Following any investigations that we may undertake, where you have notified
          us in the above circumstances we will immediately arrange for the refund of the amount of the unauthorised
          payment transaction to you and any related interest and charges. We will not be liable to make or arrange
          any further payments to you.
        </p>
        <p className='para'>
          Where an unauthorised payment transaction is made using your GoCardless account you may be liable
          (up to a maximum of £50.00 unless you have acted fraudulently, have not used your GoCardless account
            in accordance with these terms and conditions either intentionally or otherwise through your fault, where
            you may be liable for greater sums) for any losses incurred as a result of:
        </p>
        <ul className='list'>
          <li>
            unauthorised payment transactions arising from the use of your GoCardless account details when these
            have been lost or stolen; or
          </li>
          <li>
            where you have failed to keep your GoCardless account details safe (outlined in these terms and
              conditions under <Link to='security' className='u-link-color-p u-text-underline'>Security of your
              GoCardless account</Link>).
          </li>
        </ul>
        <p className='para'>
          However, except where you have acted fraudulently, you will not be liable for any losses incurred in
          respect of unauthorised payment transactions:
        </p>
        <ul className='list'>
          <li>
            arising after you have notified us of the loss, theft, misuse, misappropriation or unauthorised
            use of your GoCardless account details;
          </li>
          <li>
            where we have failed to provide you with the appropriate means to notify us (unless this is due
              to abnormal and unforeseen circumstances beyond our control or as a result of our compliance with
              European or national law); or
          </li>
          <li>
            where your account details have been used in connection with certain types of distance contract.
          </li>
        </ul>
        <p className='para'>
          In relation to incorrectly executed payment transactions, if you confirm to us that a payment from
          your account was incorrectly executed we will make immediate efforts to trace the payment transaction
          and notify you of the outcome.  Where we are liable, we will (i) without undue delay refund the amount
          of the incorrectly executed transaction and restore the debited payment account to the state in which
          it would have been had the incorrectly executed payment transactions not taken place, or (ii) in the
          case of direct debit payment re-transmit the direct debit, unless in either case we can prove that the
          recipient's payment service provider (e.g. the recipient's banks) received the amount of the payment transaction,
          in which case the recipient's payment service provider is liable to the recipient for the correct execution of
          the payment transaction.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Restricted Activities
        </h3>
        <p className='para u-text-heavy'>
          GoCardless does not condone the use of its system for certain purposes, as set out on our <Link to='legal_restrictions'
          className='u-link-color-p u-text-underline'>Restricted Activities page</Link> from time to time. If you engage or attempt
          to engage in those activities using GoCardless, we reserve the right to suspend or withdraw all or some of our services to you.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Termination
        </h3>
        <p className='para'>
          Your account with GoCardless will remain open unless it is terminated by you or us.  Unless there are exceptional circumstances,
          we may close your account after giving you at least two months notice in writing. You may close your account at any time by
          giving us notice by email to <Href to='email' className='u-link-color-p u-text-underline'
          itemProp='email' />. You will remain liable for all transactions or obligations which are incurred
          before and after termination of your account.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Data Protection
        </h3>
        <p className='para'>
          We will process information about you and other information which you give us in accordance with our Privacy Policy.  We will
          have to perform some identity checks on you before we can initiate a direct debit with you.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Resolving disputes
        </h3>
        <p className='para'>
          Should you have any concerns or complaints about the service we provide, please contact us in the first instance using any
          of the methods set out on the GoCardless website. We will work with you in order to understand your issue and work towards a
          swift resolution. More information about how we handle complaints is available on our website and can be provided to
          you on request.
        </p>
        <p className='para'>
          If we are unable to resolve your issue to your satisfaction, you may be able to refer your complaint to the Financial Ombudsman
          Service. The Financial Ombudsman Service is a free and independent service which seeks to settle disputes between certain parties.
          You can find more information about the Financial Ombudsman Service on its
          website: <a href='http://www.financial-ombudsman.org.uk/' target='_blank'
          className='u-link-color-p u-text-underline'>http://www.financial-ombudsman.org.uk/</a>.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Law
        </h3>
        <p className='para'>
          Our relationship with you is governed by English law. For complaints that cannot be resolved between us, you may be
          able to bring a claim in the English courts or any other court in the country in which you are resident.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          General provisions
        </h3>
        <p className='para'>
          These terms and conditions are in English and all correspondence will be in English.
        </p>
        <p className='para'>
          Any changes to these terms and conditions will be advised to you in writing, either to the email address or postal
          address that you have provided, no later than two months before the date on which they are to take effect. You will
          be deemed to accept these changes unless you notify us in writing before the changes are proposed to enter into force.
          In these circumstances you have the right to close your GoCardless account (without incurring any charges or
            other penalties).
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Contact
        </h3>
        <p className='para'>
          If you have any queries or wish to discuss our services, please contact us in writing or by telephone as set out
          on the GoCardless website or by email at <Href to='email'
          className='u-link-color-p u-text-underline' itemProp='email' />.
        </p>
        <p className='para'>
          We will contact you using the contact details you provided when you signed up to this service, or any updated
          details you have provided to us. It is your responsibility to update us with any new contact information, including
          any change in address. We will send any correspondence to the most recent email address or postal address that you
          have provided to us for your account and, therefore, you must advise us promptly of any change of your contact details
          in the interests of security (including name or address) and provide appropriate supporting evidence as required by us.
        </p>
      </LegalPage>
    );
  }
}
