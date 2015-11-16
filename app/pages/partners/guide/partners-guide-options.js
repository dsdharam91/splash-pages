i.mport React from 'react';
import PartnersGuidePage from '../partners-guide-page';
import XIcon from '../../../../icons/svg/x';
import CheckMarkIcon from '../../../../icons/svg/checkmark';
import Link from '../../../../components/link/link';
import Href from '../../../../components/href/href';

export default class PartnersGuideOptions extends React.Component {
  displayName = 'PartnersGuideOptions'

  render() {
    return (
      <PartnersGuidePage>
        <h2>Options</h2>

        <p>
          There are three ways you can partner with GoCardless:
        </p>

        <ul>
          <li>
            <b>Affiliate programme</b> -  earn commission when you refer new merchants to GoCardless.
          </li>

          <li>
            <b>App integration</b> -  connect your customers’ accounts to GoCardless, and
            make it easy for them to collect recurring payments from within your platform.
          </li>

          <li>
            <b>White label integration</b> -  take full control of payments using our White label integration.
          </li>
        </ul>

        <p>
          Below is a quick way to help you work out the way to partner with GoCardless that suits you best:
        </p>

        <h3>Are you looking to integrate Direct Debit payments by GoCardless into your product?</h3>

        <p>
          If <strong>yes</strong>, either our App or White label options are best for you - continue below to find out more.
        </p>

        <p>
          If <strong>no</strong>, our Affiliate programme is best for you - get in touch
          at <Href to='partners_email' itemProp='email' /> to find out more.
        </p>

        <h3>
          Are you planning to receive the funds yourself and distribute them on to your
          merchants? (common for Payment Services Providers)
        </h3>

        <p>If <strong>yes</strong>, please
        complete <a href='/partner-info-template.xlsx' target='_blank'>this
        form</a> and send it to <Href to='partners_email' itemProp='email' />. You will need
        to be sufficiently regulated to handle client monies. You will also need to be approved by our supporting bank to be
        set up as a Master Merchant within the GoCardless system.</p>

        <p>If <strong>no</strong>, either our App integration or White label options are best for you - continue below to find out more</p>

        <h3>Do any of the following statements apply to you?</h3>

        <ul>
          <li>
            You want to do the extra work to customise the customer experience and add your own branding, such as during
            merchant on-boarding, on customer payment pages and notifications, or having your own name on the customer’s bank statement.
          </li>

          <li>
            You already collect information from merchants to perform Anti-Money Laundering (Verification checks)? If you’re
            not sure, read our sections on verifications for <Link to='partners_guide_app_integration'>App
            integrations</Link> or <Link to='partners_guide_white_label_integration'>White label integrations</Link> to find out more.
          </li>

          <li>
            You have a large number of merchants collecting fewer than 1000 transactions per month, who need to be charged
            below our standard fees (1% per transaction, capped at £2).
          </li>
        </ul>

        <p>
          If <strong>yes</strong> to any of these, our White label option may be best for you - find out more in
          the <Link to='partners_guide_white_label_integration'>White label integration</Link> section.
        </p>

        <p>
          If <strong>no</strong> to all of these, our App integration is best for you - find out more in
          the <Link to='partners_guide_app_integration'>App integration</Link> section.
        </p>

        <h3>Do you have support resources available to answer merchant and customer queries about Direct Debit?</h3>

        <p>
          If <strong>yes</strong>, our White label option is best for you - find out more in
          the <Link to='partners_guide_white_label_integration'>White label integration</Link> section.
        </p>

        <p>
          If <strong>no</strong>, our App integration is best for you - find out more in
          the <Link to='partners_guide_app_integration'>App integration</Link> section.
        </p>

        <h3>Comparing your options</h3>

        <p>
          Below is a table summarising the differences between App integration and White label:
        </p>

        <table>
          <tr>
            <th />
            <th>App integration</th>
            <th>White label integration</th>
          </tr>

          <tr>
            <td>Onboarding</td>
            <td>GoCardless</td>
            <td>Partner</td>
          </tr>

          <tr>
            <td>Required to collect verification information?</td>

            <td>
              <XIcon className='u-fill-dark-gray' alt='✘' />
            </td>

            <td>
              <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
            </td>
          </tr>

          <tr>
            <td>End customer support required?</td>

            <td>
              <XIcon className='u-fill-dark-gray' alt='✘' />
            </td>

            <td>Yes if Partner’s name on bank statement</td>
          </tr>

          <tr>
            <td>Merchant support required?</td>

            <td>
              <XIcon className='u-fill-dark-gray' alt='✘' />
            </td>

            <td>
              <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
            </td>
          </tr>

          <tr>
            <td>Partner customised payment pages</td>

            <td>
              Yes but will mean 'GoCardless' appears on customer bank statement
            </td>

            <td>
              <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
            </td>
          </tr>

          <tr>
            <td>Merchant hosted customised payment pages</td>

            <td>
              <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
            </td>

            <td>
              <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
            </td>
          </tr>

          <tr>
            <td>GoCardless hosted, merchant branded payment pages</td>

            <td>
              <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
            </td>

            <td>
              <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
            </td>
          </tr>

          <tr>
            <td>Customer notifications</td>
            <td>GoCardless or Merchant</td>
            <td>GoCardless or Partner</td>
          </tr>

          <tr>
            <td>Customer bank statement</td>

            <td>
              “GoCardless re: [mandate reference] [payment reference]”
              <br/>OR
              <br/>“[Merchant name] re: [mandate reference] [payment reference]”
            </td>

            <td>
              “GoCardless re: [mandate reference] [payment reference]
              <br/>OR
              <br/>“[Partner name] re: [mandate reference] [payment reference]”
            </td>
          </tr>

          <tr>
            <td>Merchant bank statement</td>
            <td>“GC C1 re: [custom reference] [custom reference]”</td>
            <td>“GC C1 re: [custom reference] [custom reference]”</td>
          </tr>

          <tr>
            <td>Merchant fee collection</td>
            <td>GoCardless - deductions or invoicing</td>
            <td>Partner</td>
          </tr>

          <tr>
            <td>
              Merchant pricing
            </td>

            <td>
              1% per transaction, capped at £2 (2€). Volume discounts available for >1000 payments per month, on a per merchant basis.
              <br/><br/>
              Partner can charge additional fees. GoCardless can deduct these or
              invoice the merchant for them.
            </td>

            <td>
              Handled by Partner. GoCardless charges the Partner for fees on the aggregated volume across all merchants.
            </td>
          </tr>

          <tr>
            <td>
              Partner fee collection
            </td>

            <td>
              Partner invoices GoCardless for 10% revenue share and any additional
              fees GoCardless has collected from the merchant.
            </td>

            <td>
              GoCardless invoices partner for fees.
            </td>
          </tr>

          <tr>
            <td>Partner pricing</td>
            <td>N/A</td>

            <td>
              Typically 0.9% capped at £1.80/1.80€. Volume pricing available on a per merchant basis.
            </td>
          </tr>

          <tr>
            <td>Chargeback liability</td>
            <td>Held by the merchant</td>

            <td>
              Recouped from merchant but ultimate liability held by the partner
            </td>
          </tr>

          <tr>
            <td>Telephone and paper mandate collections</td>

            <td>
              <XIcon className='u-fill-dark-gray' alt='✘' />
            </td>

            <td>
              <CheckMarkIcon className='u-fill-dark-gray' alt='✓' />
            </td>
          </tr>

          <tr>
            <td>
              Reporting
            </td>

            <td>
              Merchants have access to GoCardless dashboards.
              <br/><br/>
              Partner receives reporting through the
              GoCardless API, but no dashboard available.
            </td>

            <td>
              No merchant access to GoCardless dashboards. Partner can develop reports through the GoCardless API.
              <br/><br/>
              Partner has access to GoCardless dashboard.
            </td>
          </tr>

          <tr>
            <td>Availability</td>
            <td>Now</td>
            <td>February/March 2016</td>
          </tr>

          <tr>
            <td>
              API documentation
            </td>

            <td>
              <a href='https://developer.gocardless.com/pro/#guides-oauth' target='_blank'>View</a>
            </td>

            <td>
              <a href='https://developer.gocardless.com/pro/#whitelabel-partner-endpoints' target='_blank'>View</a>
            </td>
          </tr>

          <tr>
            <td>Required development resource</td>
            <td>Less of the two.</td>
            <td>More resource - verification information collection, reporting and custom payment pages.</td>
          </tr>

        </table>

        <p>
          We're always working to improve our products - if there's anything you're interested in that you can't see here,
          please get in touch at <Href to='partners_email' itemProp='email' />.
        </p>
      </PartnersGuidePage>
    );
  }
}
