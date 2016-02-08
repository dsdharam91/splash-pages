import React from 'react';
import LegalPage from '../legal-page';

export default class LegalPaymentTimings extends React.Component {
  displayName = 'LegalPaymentTimings'

  render() {
    return (
      <LegalPage>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>
          Payment timings
        </h2>

        <table className='table table--payment-timings u-margin-Tm'>
          <tr>
            <th>Event/request</th>
            <th>Payment scheme</th>
            <th>Timing</th>
          </tr>

          <tr>
            <td rowSpan='3'>
              Receipt by GoCardless into the GoCardless Client Account of funds from a Customer’s bank, following establishment of a new Payment Scheme Mandate and submission of a Payment Order
            </td>

            <td>UK Direct Debit</td>

            <td>4 Business Days following the Payment Order</td>
          </tr>

          <tr>
            <td>SEPA</td>

            <td>
              3-6 Business Days following the Payment Order
            </td>
          </tr>

          <tr>
            <td>Autogiro (Sweden)</td>

            <td>
              2 Business Days following the Payment Order (with the Payment Scheme Mandate set up 8 Business Days prior)
            </td>
          </tr>

          <tr>
            <td rowSpan='3'>
              Receipt by GoCardless into the GoCardless Client Account of funds from a Customer’s bank, following submission of a Payment Order against an existing Payment Scheme Mandate
            </td>

            <td>UK Direct Debit</td>

            <td>3 Business Days following the Payment Order</td>
          </tr>

          <tr>
            <td>SEPA</td>

            <td>2 Business Days following the Payment Order</td>

          </tr>

          <tr>
            <td>Autogiro (Sweden)</td>

            <td>2 Business Days following the Payment Order</td>

          </tr>

          <tr>
            <td rowSpan='3'>
              Latest time by which a Merchant or Customer may cancel a Payment Scheme Mandate or Payment Order
            </td>

            <td>UK Direct Debit</td>

            <td>4pm 2 Business Days before the Payment Date</td>
          </tr>

          <tr>
            <td>SEPA</td>

            <td>
              4pm:<br/>
                (a) 6 Business Days before the Payment Date for the first Payment Order under a Payment Scheme Mandate or<br/>
                (b) 3 Business Days before the Payment Date for subsequent Payment Orders
            </td>
          </tr>

          <tr>
            <td>Autogiro (Sweden)</td>

            <td>4pm 2 Business Days before the Payment Date</td>
          </tr>

          <tr>
            <td rowSpan='3'>
              Time taken to complete a transfer of funds from the GoCardless Client Account to the Merchant’s Nominated Account
            </td>

            <td>UK Direct Debit</td>

            <td>2 Business Days following the Payment Date</td>
          </tr>

          <tr>
            <td>SEPA</td>

            <td>3-4 Business Days following the Payment Date</td>
          </tr>

          <tr>
            <td>Autogiro (Sweden)</td>

            <td>2 Business Days following the Payment Date</td>
          </tr>
        </table>
      </LegalPage>
    );
  }
}
