import React from 'react';
import Translation from '../../../components/translation/translation';
import OnlineManagementRedIcon from '../../../icons/svg/online-management-red';
import SaveMoneyGreenIcon from '../../../icons/svg/save-money-green';
import AutomatedYellowIcon from '../../../icons/svg/automated-yellow';

export default class PartnersDebitoorDe extends React.Component {
  displayName = 'PartnersDebitoorDe'

  render() {
    return (
      <Translation locales='de'>
        <div className='page-hero page-hero--pricing page-hero--one-product-pricing u-size-full'>
          <div className='u-overflow-hidden u-relative u-size-full'>
            <div className='site-container page-hero__container'>
              <div className='grid u-margin-Vxxl u-padding-Vxl'>
                <div className='grid__cell u-size-1of2 u-margin-Bl'>
                  <h1 className='u-text-heading u-color-primary u-text-xl u-text-light u-margin-Bm'>
                    GoCardless<br />
                    for Debitoor
                  </h1>

                  <p className='u-text-heading u-color-dark-gray u-text-m u-text-light u-margin-Txxs u-text-no-smoothing'>
                    Erstellen und senden Sie Rechnungen<br />
                    an Ihre Kunden und werden Sie via<br />
                    Lastschrift mit GoCardless schneller bezahlt.
                  </p>

                  <div className='u-margin-Tl'>
                    <a href='https://debitoor.de/' className='btn u-pull-start'>
                      Get started
                    </a>

                    <div className='partners-page__button-divider u-pull-start'></div>
                    <figure className='xero-connected-app-logo partners-page__xero-logo u-pull-start'/>
                  </div>
                </div>

                <div className='grid__cell u-size-1of2 u-text-center u-relative'>
                  <img className='partners-page__hero-screenshot partners-page__hero-screenshot--quickbooks'
                  src='/images/partners/xero-screenshot@2x.png'/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='section-scroll-target' id='overview'>
          <div className='site-container u-padding-Vxxl'>
            <div className='grid u-margin-Vl'>
              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <AutomatedYellowIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Schneller bezahlt werden
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Senden Sie Rechnungen mit direkter online Zahlungsoption.
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <OnlineManagementRedIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Guten Service bieten
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Bequem für Sie und Ihre Kunden: Zahlung per Lastschrift.
                </p>
              </div>

              <div className='grid__cell u-size-1of3 u-text-center'>
                <figure className='svg-icon u-center'>
                  <SaveMoneyGreenIcon className='svg-icon__image' />
                </figure>
                <div className='u-text-heading u-color-dark-gray u-text-light u-text-no-smoothing u-text-m u-margin-Tm'>
                  Zeit sparen
                </div>
                <p className='u-size-4of5 u-center u-color-dark-gray u-margin-Txs'>
                  Rechnungen online erstellen und Zahlungen automatisieren.
                </p>
              </div>
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>1</div>
              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Erstellen Sie einen Debitoor-Account
              </h2>
              <p className='u-color-dark-gray u-margin-Bm'>
                Registrieren Sie sich bei Debitoor unter https://debitoor.de/sign-up.

                Die Anmeldung ist kostenlos, für erweiterte Funktionen können Sie sich für ein bezahltes Abo entscheiden. Eine Übersicht finden Sie hier: https://debitoor.de/funktionsueberblick
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__xero-instruction-screenshot'
              src='/images/partners/xero-instruction-1.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>2</div>
              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Verknüpfen Sie Debitoor und Gocardless
              </h2>
              <p className='u-color-dark-gray u-margin-Bm'>
                Loggen Sie sich in Ihren Debitoor-Account ein. 

                Unter Einstellungen > Zahlungen akzeptieren finden Sie GoCardless. 
                Klicken Sie auf Setup. Sie gelangen zu einem Formular, in dem Sie einen GoCardless-Account neu erstellen können. 

                Haben Sie bereits einen GoCardless-Account, können Sie sich einfach unten rechts einloggen.
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__xero-instruction-screenshot'
              src='/images/partners/xero-instruction-2.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='site-container u-text-center u-padding-Vxxl'>
          <div className='grid u-padding-Txl u-padding-Bm'>
            <div className='grid__cell u-size-1of2 u-padding-Rm'>
              <div className='numbered-step u-margin-Bm'>3</div>
              <h2 className='u-text-l u-text-heading u-color-dark-gray u-text-light u-margin-Bm'>
                Per Lastschrift bezahlt werden
              </h2>
              <p className='u-color-dark-gray u-margin-Bm'>
                Sie können nun sofort in Debitoor Ihre Rechnungen mit Lastschrift bezahlen lassen. 


                Erstellen und senden Sie eine neue Rechnung in Debitoor. Ihr Kunde kann Ihnen nun per Klick auf den Bezahl-Button ein Lastschriftmandat erteilen, und zukünftige Rechnungsbeträge werden automatisch eingezogen.


                Ist Ihr GoCardless-Account bereits verifiziert, müssen Sie nichts weiter tun, um die Zahlung zu empfangen.


                Haben Sie einen neuen GoCardless-Account angelegt, müssen Sie ihn, um die eingezogenen Beträge auch ausbezahlt zu bekommen, zunächst durch die Angabe weiterer Daten verifizieren. Dies ist rechtlich erforderlich. Eine Beschreibung des Verifizierungsprozesses finden Sie hier: https://debitoor.de/tutorial/apps-und-partner/so-verbindest-du-debitoor-mit-gocardless
              </p>
            </div>
            <div className='grid__cell u-size-1of2 u-text-center'>
              <img className='partners-page__xero-instruction-screenshot'
              src='/images/partners/xero-instruction-3.jpg' />
            </div>
          </div>
        </div>

        <hr className='section-divider' />
        <div className='u-text-center u-padding-Vxxl'>
          <div className='site-container u-padding-Vxl'>
            <div className='u-size-2of3 u-center'>
              <h2 className='u-text-heading u-color-dark-gray u-text-light u-text-l'>
                Jetzt schneller bezahlt werden
              </h2>
              <p className='u-text-xs u-color-dark-gray u-margin-Vxs'>
                Rechnungen einfach online erstellen, senden und bezahlen lassen.
              </p>
              <a href='https://debitoor.de/' className='btn btn--hollow u-margin-Vm'>
                Rechnung schreiben mit Debitoor
              </a>
            </div>
          </div>
        </div>
      </Translation>
    );
  }
}
