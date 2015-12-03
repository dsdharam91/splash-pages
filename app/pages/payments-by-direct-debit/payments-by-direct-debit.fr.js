import React from 'react';
import Page from '../../components/page/page';
import Message from '../../components/message/message';
import ClockIcon from '../../icons/svg/clock';
import ImproveCashflowIcon from '../../icons/svg/improve-cashflow';
import MoneyFlowerIcon from '../../icons/svg/money-flower';
import Link from '../../components/link/link';
import Href from '../../components/href/href';
import Translation from '../../components/translation/translation';

export default class PaymentsByDirectDebitFr extends React.Component {
  displayName = 'PaymentsByDirectDebitFr'

  render() {
    return (
      <Translation locales='fr'>
        <Page>
          <div className='page-hero u-padding-Bxxl'>
            <div className='site-container u-padding-Vxxl u-text-center'>
              <h1 className='u-text-heading u-color-invert u-text-xl u-text-light'>
                Take recurring payments online with Direct Debit
              </h1>
              <p className='u-text-heading-light u-text-m u-color-invert u-padding-Ts'>
                No more chasing late payments. Flexible, automated online payments with just a 1% fee.
              </p>
            </div>
          </div>
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <div className='grid u-center u-text-center'>
                <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                  <figure className='svg-icon u-center'>
                    <ImproveCashflowIcon className='svg-icon__image svg-icon__image--shadow u-fill-green' />
                    <ImproveCashflowIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Take control of your payments
                  </h3>
                  <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                    No more cashflow issues. With Direct Debit, you'll get paid on time every time.
                  </p>
                </div>
                <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                  <figure className='svg-icon u-center'>
                    <ClockIcon className='svg-icon__image svg-icon__image--shadow u-fill-yellow' />
                    <ClockIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    Reduce admin time
                  </h3>
                  <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                    Manage your account online and always know the status of your payments.
                  </p>
                </div>
                <div className='grid__cell u-size-1of3 u-padding-Hn u-text-center'>
                  <figure className='svg-icon u-center'>
                    <MoneyFlowerIcon className='svg-icon__image svg-icon__image--shadow u-fill-blue' />
                    <MoneyFlowerIcon className='svg-icon__image u-fill-dark-gray' />
                  </figure>
                  <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                    1% fees, capped at £2
                  </h3>
                  <p className='u-size-4of5 u-center u-color-p u-margin-Txs'>
                    Cheaper than taking credit cards and no hidden fees. Just 1%, capped at £2 per transaction.
                  </p>
                </div>
              </div>
              <div className='u-padding-Tm u-margin-Tm u-text-center'>
                <Href to='signup.path' className='btn u-padding-Hl'>Sign up now</Href>
                <Link to='features' className='btn u-padding-Hl btn--hollow u-margin-Lm'>Find out more</Link>
              </div>
            </div>
          </div>
          <hr className='u-margin-An' />

          <div className='site-container u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-text-center'>
                GoCardless powers online Direct Debit for over 13,000 merchants
              </h2>
              <div className='u-text-center u-margin-Tl u-padding-Vs u-center'>
                <img src='/images/fr/logos/pro-logos-fr@2x.jpg' />
              </div>
              <div className='grid u-margin-Hn u-size-full u-padding-Txl'>
                <Link to='stories_zenchef' className='grid__cell u-text-center u-size-1of2 u-link-clean u-padding-Rxs u-padding-Ln'>
                  <div className='stories-spotlight__item stories-spotlight__item--zenchef
                  u-relative u-padding-Vl'>
                    <div className='stories-spotlight__item-text u-margin-Vl'>
                      <p className='u-padding-Al u-padding-Bn u-text-heading u-color-invert u-text-m'>
                        “GoCardless a complètement fluidifié le prélèvement comparé aux prestataires historiques.
                        L'automatisation a réduit le taux d'impayés de 50% et augmenté notre chiffre d'affaires de 90.000 €.”
                      </p>
                      <div className='u-color-invert u-margin-Tm'>
                        Julien Balmont, Zenchef
                      </div>
                    </div>
                  </div>
                  <div className='stories-spotlight__btn btn u-size-full'>Voir la référence</div>
                </Link>
                <Link to='stories_the_french_talents' className='grid__cell u-text-center u-size-1of2
                u-link-clean u-padding-Lxs u-padding-Rn'>
                  <div className='stories-spotlight__item stories-spotlight__item--french-talents u-relative u-padding-Vl'>
                    <div className='stories-spotlight__item-text u-margin-Vl'>
                      <p className='u-padding-Al u-padding-Bn u-text-heading u-color-invert u-text-m'>
                        “Réduire de 50% les retards de paiements a aidé à améliorer la trésorerie et
                        a permis à nos équipes de se concenter sur des activités à plus forte valeur ajoutée.”
                      </p>
                      <div className='u-color-invert u-margin-Tm'>
                        Martin Gentil, Directeur commercial
                      </div>
                    </div>
                  </div>
                  <div className='stories-spotlight__btn btn u-size-full'>Voir la référence</div>
                </Link>
              </div>
            </div>
          </div>

          <hr className='u-margin-An' />
          <div className='site-container u-padding-Vxxl'>
            <div className='u-padding-Vxl'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-text-center'>
                GoCardless makes getting paid easier than ever
              </h2>
              <div className='grid u-center u-text-center u-padding-Tl u-margin-Ts'>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m'>Really simple setup</h3>
                  <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                    Create an account and start taking payments in only five minutes.</p>
                </div>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m'>Integrates with your software</h3>
                  <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                    GoCardless integrates with leading accountancy software packages.</p>
                </div>
                <div className='grid__cell u-size-1of3 u-text-center'>
                  <h3 className='u-text-heading u-color-heading u-text-light u-text-no-smoothing u-text-m'>Join 13,000+ businesses</h3>
                  <p className='u-color-p u-margin-Txs u-size-5of6 u-center'>
                    We've collected more than $1 billion for over 13,000 merchants.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className='u-margin-An' />
          <div className='site-container u-text-center u-padding-Vxxl'>
            <div className='u-padding-Vxl u-text-center u-center'>
              <h2 className='u-text-heading u-color-heading u-text-l u-text-light u-text-center u-margin-Bl'>
                It takes just 5 minutes to set up an account
              </h2>
              <Href to='signup.path' className='btn'>Start taking payments</Href>
              <p className='u-color-p u-margin-Ts'>There are no set up costs, no monthly fees and no hidden charges</p>
              <hr className='u-size-1of2 u-center u-margin-Vxxl' />
              <p className='u-color-p'><strong>Want to talk to someone first?</strong><br />
                Call our payments experts on <Message pointer='phone_local' /><br />
                We're available 9am - 6pm Monday to Friday<br />
                You can also <Link to='contact_sales' className='u-link-color-p u-text-underline'>request a call back from our team</Link>.
              </p>
            </div>
          </div>
        </Page>
      </Translation>
    );
  }
}
