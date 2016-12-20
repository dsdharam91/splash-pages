import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsCustomerExperienceEn extends React.Component {
  displayName = 'FaqMerchantsCustomerExperienceEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Customer Experience</h2>
        <Translation locales='en-GB'>
          <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
            Can I fill in the payment pages on my customer's behalf?
          </h3>
          <p className='para'>
            No - due to strict rules around Direct Debit, customers must fill in their payment details
            and go through the signup process themselves.
          </p>

          <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
            Will my name appear on my customer's bank statement?
          </h3>
          <p className='para'>
            With GoCardless, your business name will normally appear on the bank statement as the reference for the Direct Debit with
            GoCardless as the recipient. With GoCardless Pro, only your business name will appear on the bank statement.
          </p>
          <p className='para'>
            You can customise how we display your business name on customer bank statements from the
            Settings page of your merchant dashboard.
          </p>
        </Translation>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          How can my customer pay me?
        </h3>
        <p className='para'>
          Your customer can enter their bank details online via GoCardless; if you use GoCardless Pro they can also
          do so by phone or paper.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Can I host the payment pages on my site?
        </h3>
        <p className='para'>
          Again this depends on which of our products you choose. With GoCardless, in order to comply
          with the Direct Debit scheme rules the payment pages are securely hosted on our site. You can
          redirect the customer to our payment page and we will redirect them back to your site. Alternatively
          you can allow them to access them via a pop-out from your site.
        </p>
        <p className='para'>
          With GoCardless Pro, you can host the payment pages on your own site so will not need to redirect customers.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Do you offer iFrames?
        </h3>
        <p className='para'>
          No - we do not offer iFraming of our payment pages. If you use GoCardless Pro, we offer a Flow JS which
          lets you avoid having any bank data on your server.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Can payments be made directly via the API?
        </h3>
        <p className='para'>
          Only once authorisation is in place. Customers must be sent to our secure payment pages to give
          initial authorisation of the Direct Debit.
        </p>
        <p className='para'>
          Once authorisation is in place payment can be requested via the API.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Can customers pay from their mobile?
        </h3>
        <p className='para'>
          Yes - GoCardless is compatible with mobiles and tablets. Our payment pages will work in any Internet browser.
        </p>
      </Translation>
    );
  }
}
