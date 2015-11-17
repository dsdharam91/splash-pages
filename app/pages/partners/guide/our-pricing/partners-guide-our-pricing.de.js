import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class PartnersGuideOurPricingDe extends React.Component {
  displayName = 'PartnersGuideOurPricingDe'

  render() {
    return (
        <Translation locales='de'>
         <h2>Unsere Preise</h2>

        <h3>Was sind GoCardless-Gebühren?</h3>

        <p>
          Wir berechnen 1 % und höchstens 2 € pro Transaktion.
          Wir gewähren Händlern Mengenrabatte, die mehr als 1.000 Zahlungen pro Monat einziehen.
          Wenn Sie möchten, dass wir in Ihrem Auftrag eine Gläubiger-ID für Sie beantragen und Ihnen die Funktionen
          von GoCardless Pro zur Verfügung stellen, fallen Gebühren von 250 € pro Monat an.
        </p>

        <h3>Bieten Sie Ihren Partnern eine Gewinnbeteiligung?</h3>

        <p>
          Ja - Wir bieten Partnern eine Beteiligung am GoCardless-Gewinn,
          den wir durch den jeweiligen Partner erwirtschaftet haben, in Höhe von 10 %.
        </p>

        <h3>Kann ich eine Zusatzgebühr auf die GoCardless-Transaktionsgebühr aufschlagen?</h3>

        <p>
          Ja - Sie können neben den GoCardless-Transaktionsgebühren einen zusätzlichen Prozentsatz
          und/oder eine Pauschalgebühr pro Transaktion erheben.
        </p>
        </Translation>
    );
  }
}
