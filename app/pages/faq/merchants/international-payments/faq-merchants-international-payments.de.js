import React from 'react';
import Translation from '../../../../components/translation/translation';
import IfLocale from '../../../../components/if-locale/if-locale';

export default class FaqMerchantsInternationalPaymentsDe extends React.Component {
  displayName = 'FaqMerchantsInternationalPaymentsDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Internationale Zahlungen</h2>
        
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          In welchen Ländern ist GoCardless verfügbar?
        </h3>
        <p className='para'>
          GoCardless ist in Deutschland, Österreich, Frankreich, Belgien und dem Vereinigten Königreich verfügbar.
          GoCardless Pro ist in allen Ländern verfügbar, die einem verantwortungsvollen Geldwäschegesetz unterliegen.
          Sie brauchen außerdem ein Bankkonto in der Eurozone oder im Vereinigten Königreich.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Von wo in Europa kann ich Zahlungen einziehen?
        </h3>
        <p className='para'>
          Mit GoCardless können Sie dank SEPA in folgenden Ländern Zahlungen einziehen: Belgien, Deutschland, Estland, Finnland,
          Frankreich, Griechenland, Italien, Irland, Lettland, Litauen, Luxemburg, Malta, Niederlande, Portugal, Slowakei,
          Slowenien, Spanien, Österreich und Zypern.
        </p>
        <p className='para'>
          Sie können außerdem Zahlungen in Pfund im Vereinigten Königreich einziehen.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Was ist das SEPA Lastschriftverfahren?
        </h3>
        <p className='para'>
          SEPA ist ein neues Zahlungsschema, das es erlaubt Lastschriftzahlungen innerhalb
          der <a href='http://en.wikipedia.org/wiki/Single_Euro_Payments_Area' target='_blank'
          className='u-link-color-p u-text-underline'>Single Euro Payments Area (SEPA)</a> zu veranlassen.
        </p>
        <p className='para'>
          Erfahren Sie mehr über das SEPA Lastschriftverfahren in unserem <a href='https://gocardless.com/de/handbuch/sepa/'
          className='u-link-color-p u-text-underline'>Handbuch</a>.
        </p>

        { /* Bacs is only an international scheme for SEPA countries */ }
        <IfLocale domesticScheme='sepa'>
          <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
            Was ist Bacs Direct Debit?
          </h3>
          <p className='para'>
            Bacs Direct Debit ist das Äquivalent zum SEPA Lastschriftverfahren im Vereinigten Königreich und wird
            von <a href='http://www.bacs.co.uk/Bacs/Businesses/DirectDebit/Pages/DirectDebit.aspx' target='_blank'
            className='u-link-color-p u-text-underline'>Bacs</a> organisiert.
          </p>
          <p className='para'>
            Sie können mehr über Bacs in unserem englisch-sprachigen <a href='/direct-debit/'
            className='u-link-color-p u-text-underline'>Handbuch zum Bacs Direct Debit scheme</a> erfahren.
          </p>
        </IfLocale>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Welche Währungen unterstützt GoCardless?
        </h3>
        <p className='para'>
          Wir unterstützen Zahlungen in EUR (€) sowie in Pfund (£).
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Wann wird GoCardless auch außerhalb Europas verfügbar sein?
        </h3>
        <p className='para'>
          GoCardless wird noch nicht im Laufe von 2015 außerhalb Europas verfügbar sein. Wir arbeiten aber sehr hart daran
          in weitere Territorien zu expandieren.
        </p>
      </Translation>
    );
  }
}
