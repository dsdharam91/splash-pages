import React from 'react';
import Translation from '../../../components/translation/translation';
import Link from '../../../components/link/link';

export default class LegalRestrictionsEn extends React.Component {
  displayName = 'LegalRestrictionsEn'

  render() {
    return (
      <Translation locales='en'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Restricted activities</h2>

        <p className='para'>
          <strong>This list was last updated on 3rd January 2017 — you can read our previous lists of restricted activities <Link to='legal_old_terms' className='u-link-color-p u-text-underline'>here</Link>.</strong>
        </p>

        <p className='para'>
          If you undertake any of these activities, you will be in breach of your agreement with GoCardless, whether that is the Merchant Agreement, the Partner Agreement or any other agreement with GoCardless that references this list, and we may suspend your access to your GoCardless Account and you will not be able to use the GoCardless service. This may lead to you being unable to receive payments, or make payments to the intended recipients. In no circumstance are you allowed to use the GoCardless service if you are under the age of eighteen (18) years old.
        </p>

        <p className='para'>
          <strong>Restricted activities that apply to all users of the GoCardless service — whether Customers, Merchants or Partners are:</strong>
        </p>

        <p className='para'>
          Using or attempting to use (or if you are a Partner, permitting any other person to use) GoCardless in any way or in connection with any activity which:
        </p>

        <ul className='numeric-decimals para'>
          <li>
            is fraudulent or unlawful;
          </li>
          <li>
            misrepresents your identity or gives the impression that you are associated or affiliated with a third party if this is not the case;
          </li>
          <li>
            breaches any applicable local, national or international law or regulation (including, but not limited to, using GoCardless in connection with the supply of goods or services that breach any such law or regulation);
          </li>
          <li>
            could reasonably be considered harmful, false, misleading, unlawful, obscene, defamatory, libelous, threatening, pornographic, harassing or hateful;
          </li>
          <li>
            promotes discrimination based on race, sex, religion, nationality, disability, sexual orientation or age;
          </li>
          <li>
            promotes violence, illegal drugs or any other illegal activity;
          </li>
          <li>
            infringes any third party&#39;s intellectual property or other proprietary rights under any jurisdiction;
          </li>
          <li>
            breaches an obligation or duty of confidentiality;
          </li>
          <li>
            involves gambling, betting tips, prize draws or any form of lottery;
          </li>
          <li>
            invades any person&#39;s privacy;
          </li>
          <li>
            knowingly or negligently transmits or attempts to transmit any data or material that contains viruses, Trojan horses, adware, spyware, worms, or other malicious code or program designed to adversely affect the operation of software or hardware;
          </li>
          <li>
            collects, or to collect, or transmit personal information about any person without their consent;
          </li>
          <li>
            transmits, sends or uploads any unsolicited or unauthorised advertising or promotional material;
          </li>
          <li>
            could reasonably be expected to damage, disable, overburden, or impair it, including, without limitation, using the GoCardless Service in an automated manner other than as permitted by the GoCardless API and the relevant documentation;
          </li>
          <li>
            GoCardless might reasonably believe to be an abuse of the GoCardless system or service - this includes the GoCardless referral scheme;
          </li>
          <li>
            is likely to result in liability on the party of GoCardless or any third party, including in any manner likely to result in complaints, disputes, reversals, chargebacks, fees, fines or penalties;
          </li>
          <li>
            might be seen as acting as a private banking or other payment institution
          </li>
          <li>
            support pyramid or ponzi schemes, matrix programs, other &#39;get rich quick&#39; schemes or certain multi-level marketing programs, including the collecting of payments for such schemes;
          </li>
          <li>
            deals in any way with payments to and from the same account or between multiple accounts held by or for the same beneficial owner;
          </li>
          <li>
            results in the completion of Direct Debit mandates on behalf of another party;
          </li>
          <li>
            might result in the harm of, or attempts to harm, any minor;
          </li>
          <li>
            accesses or attempts to access any software underlying the GoCardless service; or
          </li>
          <li>
            relates to the control of an account that is linked to another account, the users of which have engaged in any of the foregoing activities.
          </li>
        </ul>

        <p className='para'>
          <strong>In addition, restricted activities that apply to users of the GoCardless service who determine what to take and accept payments for (that&#39;s Merchants) or are responsible for what others take and accept payments for (that&#39;s Partners both in respect of themselves and Merchants signing up to the Partner&#39;s service) include the following, unless otherwise agreed in a contractual amendment with GoCardless:</strong>
        </p>

        <p className='para'>
          Using or attempting to use (or if you are a Partner, permitting any other person to use) GoCardless in any way or in connection with selling or providing or taking or making payment for any of the following, or activities connected with:
        </p>

        <ul className='numeric-decimals para'>
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
            pension or saving schemes;
          </li>
          <li>
            betting tips or unregulated financial advice;
          </li>
          <li>
            betting and related services;
          </li>
          <li>
            financial-products including or similar to foreign-exchange derivatives, spread betting or contracts for difference;
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
            business opportunities or investment opportunities, including crowdfunding or crowd, and advice or arrangement services relating to any such opportunities;
          </li>
          <li>
            mortgage consulting or reduction services or credit counselling;
          </li>
          <li>
            any service or item that stores value in cash or cash-like form, including e-wallets, pre-paid cards (including pre-paid phone cards), or any other form of stored value, whether or not that value may be exchanged back for cash;
          </li>
          <li>
            timeshares;
          </li>
          <li>
            goods or services that will not be provided until a significantly later date; or
          </li>
          <li>
            media activity such as the provision of Twitter followers, Facebook likes or YouTube views.
          </li>
        </ul>
      </Translation>
    );
  }
}
