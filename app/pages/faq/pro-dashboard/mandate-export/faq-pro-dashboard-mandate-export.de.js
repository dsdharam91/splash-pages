import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqProDashboardMandateExportDe extends React.Component {
  displayName = 'FaqProDashboardMandateExportDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>So exportieren Sie Lastschriftmandate</h2>
        <p className='para'>
          Im Bereich <a href='https://manage.gocardless.com/customers' target='_blank'
          className='u-link-color-p u-text-underline'>Customers</a> Ihres Dashboards können Sie Mandate im
          PDF-Format speichern. Diese Funktion ist hilfreich, wenn Sie Mandatskopien an Ihre Kunden schicken möchten.
        </p>
        <p className='para'>
          Wählen Sie den Kunden aus, dessen Mandat Sie speichern möchten, und klicken Sie auf das Mandat:
        </p>

        <img src='/images/faq/en/mandate-id.png' />

        <p className='para'>
          Jetzt können Sie das Mandat im PDF-Format speichern, indem Sie “Export” aus den Optionen oben rechts wählen:
        </p>

        <img src='/images/faq/en/mandate-export-buttons.png' />

        <p className='para'>
          Darüber hinaus können Sie die Sprache des Mandats wählen:
        </p>

        <img src='/images/faq/de/mandate-export.png' />

        <p className='para'>
          <strong>Hinweis: </strong>Sollten Probleme beim Herunterladen auftreten, empfehlen wir Ihnen, Chrome als
          Internetbrowser zu verwenden.
        </p>
      </Translation>
    );
  }
}
