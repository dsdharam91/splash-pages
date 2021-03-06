import React from 'react';
import Message from '../../../../components/message/message';
import Translation from '../../../../components/translation/translation';
import IfLocale from '../../../../components/if-locale/if-locale';

export default class FaqMerchantsSecurityEn extends React.Component {
  displayName = 'FaqMerchantsSecurityEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Security</h2>
        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          How do I know my money is safe?
        </h3>
        <Translation locales={['en']} exclude={['en-GB']}>
          <p className='para'>
            We are authorised by the Financial Conduct Authority in the United Kingdom to provide payment services as
            an <a href='https://register.fca.org.uk/ShPo_FirmDetailsPage?id=001b000000NMgMPAA1'
            title='FCA Registration' target='_blank' className='u-link-color-p u-text-underline'>Authorised Payment Institution</a> and
            currently serve more <Message pointer='number_of_merchants' /> businesses.
          </p>
          <p className='para'>
            All money collected is held in a secure client monies account with one of our partner banks.
          </p>
        </Translation>
        <Translation locales='en-GB'>
          <p className='para'>
            We are authorised by the Financial Conduct Authority to provide payment services as
            an <a href='https://register.fca.org.uk/ShPo_FirmDetailsPage?id=001b000000NMgMPAA1'
            title='FCA Registration' target='_blank' className='u-link-color-p u-text-underline'>Authorised Payment Institution</a>.
            We serve more businesses than any other Direct Debit provider.
          </p>
          <p className='para'>
            All money collected is held in a secure client monies account with either the Royal Bank of Scotland, Barclays Bank or SEB.
          </p>
        </Translation>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          How does GoCardless protect my data?
        </h3>
        <p className='para'>
          At GoCardless we know security is important, especially when it comes to payments. Our merchants rely on us to invest in
          security and maintain robust data protection for them and their customers.
        </p>
        <ul className='list'>
          <li>Our access to the Direct Debit system is provided by some of Europe's major banks, who have approved our systems.</li>
          <li>All customer data is treated in accordance with European data protection laws, including the Data Protection Act 1998.</li>
          <li>Our financial data server is separated from our application server by multiple firewalls.</li>
          <li>All client-server communication is 256-bit SSL encrypted. The banking system requires just 128-bit.</li>
          <li>We have received ISO 27001 certification for information security.</li>
        </ul>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          What is ISO 27001 certification?
        </h3>
        <p className='para'>
          GoCardless has been awarded ISO 27001 certification. ISO 27001 is a widely recognised, internationally accepted standard
          for information security and we have attained it across all GoCardless services and products.
        </p>
        <p className='para'>
          An accredited independent auditor has assessed our processes and controls, and confirmed they align with the certification
          standard. Certification Europe, an ISO accredited certification body, has certified our compliance with the ISO standard.
        </p>
        <p className='para'>
          Having ISO 27001 certification helps assure our merchants and their customers that we take information security
          management seriously. GoCardless will ensure that an independent auditor will reassess our Information Security
          Management System on an annual basis.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          What do you do with my money before it is paid out?
        </h3>
        <p className='para'>
          All money collected is held in a secure client monies account held with one of our partner banks.
          Funds are held fully in accordance with safeguarding provisions.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Is it safe for my customers?
        </h3>
        <IfLocale domesticScheme='sepa'>
          <p className='para'>
            Yes. Your customers are protected by <a href='/guides/sepa/protection/'
            className='u-link-color-p u-text-underline'>SEPA Direct Debit Customer Protection</a> in the Eurozone and
            the <a href='/direct-debit/guarantee/' className='u-link-color-p u-text-underline'>Direct Debit Guarantee</a> in the UK.
          </p>
        </IfLocale>
        <IfLocale domesticScheme='bacs'>
          <p className='para'>
            Yes. Your customers are fully protected by the <a href='/direct-debit/guarantee/'
            className='u-link-color-p u-text-underline'>Direct Debit Guarantee</a>. This entitles them to a full and immediate
            refund of any payments taken from their account in error.
          </p>
        </IfLocale>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Vulnerability Disclosure
        </h3>

        <p className='para'>We care deeply about keeping our users safe. If you believe you have
          discovered a vulnerability, we ask that you disclose it in a responsible manner. Sharing vulnerabilities
          publicly puts our entire user base at risk, so we urge you to keep issues private until we've
          had a chance to release a fix.
        </p>

        <p className='para'>If you are interested in testing our service for vulnerabilities then we would appreciate
          any reports regarding our new dashboard and API, as the current dashboards will be replaced soon.
          You can <a href="https://manage-sandbox.gocardless.com/signup" className="u-link-color-p u-text-underline">sign up
          for a sandbox account</a> to get started.
        </p>

        <p className='para'>In recognition of your efforts, and as thanks for working with us to keep GoCardless safe,
            we offer financial rewards for responsible vulnerability disclosures. Rewards are issued at our discretion,
            determined by the severity of the issue.
          </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Reporting issues
        </h3>

        <ul className='list'>
          <li>
            Email us at <a href='mailto:security@gocardless.com'
            className='u-link-color-p u-text-underline'>security@gocardless.com</a> as soon as you become aware of
            the issue. Our GPG key id is <code>684ED3A3</code>, and its fingerprint
            is <code>8A4C 2665 6632 8EC4 1C83 6BB4 D9E1 ADB2 684E D3A3</code>
          </li>
          <li>
            Include as much detail as possible, including steps for reproducing the issue
          </li>
          <li>
            Do not exploit the vulnerability, except to demonstrate the issue to GoCardless staff
          </li>
          <li>
            Please do not disclose the issue to anyone else before we've rolled out a fix
          </li>
        </ul>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Reward eligibility
        </h3>

        <p className='para'>
          We appreciate the effort security researchers go to in order to keep the web safe,
          and we're keen to reward them for their work. However, we will not reward malicious
          behavior, or actions that deliberately cause a disruption to our service. Reward eligibility
          is decided on a case-by-case basis, but we will never provide rewards for:
        </p>
        <ul className='list'>
          <li>
            Denial of service attacks
          </li>
          <li>
            Using automated tools such as scanners and fuzzers as they can negatively impact our service,
            and create large amounts of noise that costs us time to clear up
          </li>
          <li>
            Social engineering attacks
          </li>
          <li>
            Physical attacks or threats against our staff or users
          </li>
        </ul>
      </Translation>
    );
  }
}
