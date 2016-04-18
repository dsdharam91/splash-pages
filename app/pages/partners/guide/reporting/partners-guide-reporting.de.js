import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class PartnersGuideGettingPaidDe extends React.Component {
  displayName = 'PartnersGuideGettingPaidDe'

  render() {
    return (
      <Translation locales='de'>
        <h2>Zahlungsverfolgung</h2>

        <h3>Kann ich Zahlungsinformationen in meiner App anzeigen?</h3>

        <p>
          Ja - GoCardless bietet Webhooks, die über jegliche Änderung von Mandat- und Zahlungsstatus informieren,
          z. B. darüber, wann eine Zahlung eingezogen wurde. Unsere API bietet eine nützliche
          <a href='https://developer.gocardless.com/#events-reconciling-payouts-with-events' target='_blank'> Anleitung </a>
          zum Abgleich von Zahlungen mit Ereignissen. In unserem
          <a href='https://developer.gocardless.com/#webhooks-overview' target='_blank'> Webhook-Handbuch </a>
          finden Sie weitere Informationen zu verfügbaren  Webhooks und deren Nutzung.
        </p>

        <h3>Können wir Ihnen eine Referenz übermitteln, die auf Kontoauszügen erscheint, oder über die Zahlungen
        zugeordnet werden können?</h3>

        <p>
          Ja - Diese Referenzen können individuell angepasst werden, z. B. können Sie eine Referenz für alle Zahlungen angeben,
          die zu einem Mandat gehören, oder Referenzen für spezielle Zahlungen angeben. Diese Referenz erscheint auf den
          Kontoauszügen der Kunden. Es können ebenso zusätzliche Referenzen (Metadaten) für die Zuordnung von Zahlungen
          verwendet werden.
        </p>

        <p>
          Hinweis: Jede Mandatsreferenz muss für eine erteilte Gläubiger-ID (CID) einmalig sein. Aus diesem Grund füllen
          wir die Mandatsreferenz automatisch aus, wenn Sie eine GoCardless-CID verwenden.
        </p>
      </Translation>
    );
  }
}
