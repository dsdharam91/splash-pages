import React from 'react';
import LegalPage from '../../../legal-page';
import Link from '../../../../../components/link/link';

export default class LegalOldRestrictions20140919 extends React.Component {
  displayName = 'LegalOldRestrictions20140919'

  render() {
    return (
      <LegalPage>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Restricted activities [prior to 19th September 2014]</h2>
        <p className='para'>
          This is an outdated list of restricted activities for which you may not use the services GoCardless offers.
          You can read an up-to-date list of our Restricted Activities <Link to='legal_restrictions'
          className='u-link-color-p u-text-underline'>here</Link>.
        </p>
        <p className='para'>
          If you undertake any of these activities, you will be in breach of the Merchant Agreement or the
          Customer Agreement (as the case may be) and we may suspend your access to your GoCardless Account and you
          will not be able to use the GoCardless service.  This may lead to you being unable to make payments to
          the intended recipients.
        </p>
        <p className='para'>The restricted activities are:</p>
        <ul className='list'>
          <li>
            Using the GoCardless service in any way or in connection with any activity which:
            <ul className='list u-margin-Tn'>
              <li>
                is fraudulent or unlawful;
              </li>
              <li>
                misrepresents your identity or gives the impression that you are associated or affiliated
                with a third party if this is not the case;
              </li>
              <li>
                breaches any applicable local, national or international law or regulation (including, but
                  not limited to, using GoCardless in connection with the supply of goods or services that
                  breach any such law or regulation);
              </li>
              <li>
                could reasonably be considered harmful, false, misleading, unlawful, obscene, defamatory, libelous,
                threatening, pornographic, harassing or hateful;
              </li>
              <li>
                promotes discrimination based on race, sex, religion, nationality, disability,
                sexual orientation or age;
              </li>
              <li>
                promotes violence, illegal drugs or any other illegal activity;
              </li>
              <li>
                infringes any third party's intellectual property or other proprietary rights under any jurisdiction;
              </li>
              <li>
                breaches an obligation or duty of confidentiality;
              </li>
              <li>
                involves gambling, betting tips, prize draws or any form of lottery; or
              </li>
              <li>
                invades any person's privacy.
              </li>
            </ul>
          </li>
          <li>
            Using GoCardless to sell or provide or take or make payment for:
            <ul className='list u-margin-Tn'>
              <li>
                items that require a licence or permission from any third party unless you have such licence;
              </li>
              <li>
                drugs or drugs paraphernalia;
              </li>
              <li>
                pay day loans;
              </li>
              <li>
                betting tips or unregulated financial advice;
              </li>
              <li>
                currency conversion services;
              </li>
              <li>
                money remittance services;
              </li>
              <li>
                counterfeit goods including but not limited to designer handbags, clothing, accessories and consumer electricals;
              </li>
              <li>
                extended warranties;
              </li>
              <li>
                debt recovery services;
              </li>
              <li>
                business opportunities, investment opportunities, mortgage consulting or reduction services or credit counselling;
              </li>
              <li>
                prepaid phone cards;
              </li>
              <li>
                timeshares; or
              </li>
              <li>
                media activity such as the provision of Twitter followers, Facebook likes or Youtube views.
              </li>
            </ul>
          </li>
          <li>
            Accessing or attempting to access any software underlying the GoCardless service.
          </li>
          <li>
            Any attempt to harm any minor.
          </li>
          <li>
            Knowingly or negligently transmitting any data or material that contains viruses, Trojan horses, adware, spyware,
            worms, or other malicious code or program designed to adversely affect the operation of software or hardware.
          </li>
          <li>
            Transmitting, sending or uploading any unsolicited or unauthorised advertising or promotional material.
          </li>
          <li>
            Using the GoCardless service to collect, or attempt to collect, or transmit personal information about
            any person without their consent.
          </li>
          <li>
            Using the GoCardless service if you are under the age of eighteen (18).
          </li>
          <li>
            Using the GoCardless service in order to act as a private banking institution.
          </li>
          <li>
            Using the GoCardless service to take advance payments for goods or services that will not be provided
            until a significantly later date.
          </li>
          <li>
            Using the GoCardless service in any manner that could reasonably be expected to damage, disable, overburden,
            or impair it, including, without limitation, using the GoCardless Service in an automated manner.
          </li>
          <li>
            Using the GoCardless service in a manner that GoCardless reasonably believe to be an abuse of the
            system. This includes the GoCardless referral scheme.
          </li>
          <li>
            Using the GoCardless service in a manner likely to result in liability on the party of GoCardless
            or any third party, including in any manner likely to result in complaints, disputes, reversals,
            chargebacks, fees, fines or penalties.
          </li>
          <li>
            Using the GoCardless service to control an account that is linked to another account the users of
          which have engaged in any of the foregoing activities.
          </li>
          <li>
            Using the GoCardless service to collect payments that support pyramid or ponzi schemes, matrix
            programs, other 'get rich quick' schemes or certain multi-level marketing programs.
          </li>
          <li>
            Using the GoCardless service to transfer payments to and from the same account or between
            multiple accounts held by or for the same beneficial owner.
          </li>
        </ul>
      </LegalPage>
    );
  }
}
