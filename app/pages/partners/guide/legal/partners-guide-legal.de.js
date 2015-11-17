import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class PartnersGuideLegalDe extends React.Component {
  displayName = 'PartnersGuideLegalDe'

  render() {
    return (
        <Translation locales='de'>
        <h2>Rechtliche Hinweise</h2>

        <p>
          Unsere Partnervereinbarung finden Sie <a href="https://gocardless.com/legal/partners/">hier</a>. Wenn Sie eine
          White-Label-Vereinbarung anfragen möchten oder spezielle Fragen haben, schreiben Sie uns
          an <Href to='partners_email' itemProp='email' />.
        </p>

        <p>
          GoCardless berechnet Händlern im Regelfall eine Transaktionsgebühr von 1 % und höchstens 2 €
          pro Transaktion. Wir bieten Partnern eine Gewinnbeteiligung an den GoCardless-Gebühren in Höhe von 10 %.
        </p>

        <p>
          Wir bieten zudem Pauschalgebühren für White-Label-Partner oder einzelne Händler, die eine bestimmte
          Anzahl an Zahlungen einziehen (normalerweise über 1.000 Transaktionen pro Monat). Diese Gebühren
          belaufen sich auf 60ct-1ct pro Transaktion und werden je Händler erhoben. Schreiben Sie uns
          an <Href to='partners_email' itemProp='email' /> und erfahren Sie mehr darüber.
        </p>

        <p>
          Wenn Sie Ihre eigene Gläubiger-ID (CID) oder Service User Number (SUN) wünschen, können wir Ihnen bei deren
          Beantragung für einen Aufpreis von 250 € pro Monat pro CID/SUN helfen. Damit erhalten Sie auch Zugang
          zu allen GoCardless Pro Funktionen.
        </p>
        </Translation>
    );
  }
}
