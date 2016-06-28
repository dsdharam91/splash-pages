import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class FaqProDashboardDe extends React.Component {
  displayName = 'FaqProDashboardDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>So richten Sie Ihren Account ein</h2>
        <p className='para'>
            Mit dem <a href='https://manage.gocardless.com/'
            className='u-link-color-p u-text-underline'>GoCardless-Dashboard</a> können Sie sich SEPA-Lastschriftmandate
            einholen, diese managen und wiederkehrende Zahlungen einziehen – ganz ohne technische Integration.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Erste Schritte
        </h3>
        <p className='para'>
          Sie können noch heute Ihren <Href to='signup.path'
          className='u-link-color-p u-text-underline'>GoCardless-Account</Href> einrichten und sofort mit dem Einziehen
          von Zahlungen beginnen. Bevor Sie Zahlungen empfangen können, müssen Sie uns eine Kopie Ihres Ausweises sowie
          einen Adressnachweis übermitteln.
        </p>
        <p className='para'>
          Wenn Sie Kunden, für die Sie bereits über eine Einzugsermächtigung verfügen, in Ihr Dashboard übertragen möchten,
          schreiben Sie uns an <Href to='email' className='u-link-color-p u-text-underline' />.
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          So personalisieren Sie Ihren Account
        </h3>
        <p className='para'>
          Im Bereich <a href='https://manage.gocardless.com/settings/company'
          target='_blank' className='u-link-color-p u-text-underline'>Company Info</a> können Sie Ihren Account individuell anpassen:
        </p>
        <ul className='list'>
          <li>Laden Sie ein Logo für Ihre Zahlungsseite hoch.</li>
          <li>Fügen Sie ein Bankkonto hinzu, auf das die Zahlungen eingehen sollen.</li>
        </ul>

      </Translation>
    );
  }
}
