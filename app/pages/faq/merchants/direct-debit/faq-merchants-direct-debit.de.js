import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class FaqMerchantsDirectDebitDe extends React.Component {
  displayName = 'FaqMerchantsDirectDebitDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Lastschriften</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Was ist das SEPA Lastschriftverfahren?
        </h3>
        <p className='para'>
          Das SEPA Lastschriftverfahren ist ein neues paneuropäisches System für Lastschriften, das im August 2014
          von der Europäischen Union eingeführt wurde. Es ersetzt dadurch die vorher dagewesenen nationalen
          Lastschriftsysteme und erlaubt es Händlern in Europa Eurozahlungen aus der gesamten SEPA Länderzone
          einzuziehen.
        </p>

        <p className='para'>
          Sie können in unserem <Href to='guides.path'
          className='u-link-color-p u-text-underline'>SEPA Handbuch</Href> mehr zum SEPA Lastschriftverfahren erfahren.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Wie steht es um Kundenschutz?
        </h3>
        <p className='para'>
          Kunden, die das Lastschriftverfahren als Zahlungsmittel nutzen, haben das Recht, ihre Zahlungen zurückzurufen.
          Dazu muss der Kunde bis spätestens acht Wochen nach Zahlung eine Rückerstattung der Zahlung bei seiner Bank
          in Auftrag geben.
        </p>
        <p className='para'>
            Ebenso können Kunden nach einer sofortigen Rückzahlung eines nicht autorisierten oder betrügerischen
            Lastschrifteinzugs fragen. Dies muss so bald wie möglich geschehen und spätestens 13 Monate nach dem Einzug
            der Lastschrift.
          </p>
          <p className='para'>
            Eine von der Bank erstatte Rückzahlung bedeutet nicht, dass die zugrundeliegende Rechnung nicht weiter Bestand hat.
            Es liegt dann am Händler den Disput oder das Missverständnis mit seinem Kunden zu klären.
          </p>

          <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
            Zahlt der Kunde Gebühren?
          </h3>
          <p className='para'>
            Nein, im SEPA Lastschriftverfahren sind Banken gezwungen, keine Gebühren vom Zahlungspflichtigen einzuziehen.
          Es ist daher kostenlos für Ihre Kunden das Lastschriftverfahren zu nutzen.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Benötige ich eine SEPA Gläubiger ID?
        </h3>
        <p className='para'>
          Nein, wir können Ihnen eine SEPA Gläubiger ID über unsere Partnerbank zur Verfügung stellen.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Für welche Art von Zahlungen ist das Lastschriftverfahren besonders geeignet?
        </h3>

        <p className='para'>
          Lastschriften sind besonders geeignet für:
        </p>
        <ul className='list'>
          <li>Wiederkehrende Zahlungen (z.B. Abonnements oder Mitgliedschaftsbeiträge)</li>
          <li>Kunden mit einer langfristigen Geschäftsbeziehung (z.B. Stammkunden)</li>
          <li>Dienstleistungen, die in Rechnung gestellt werden (z.B. Rechts- oder Steuerberatung)</li>
        </ul>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Für welche Arten von Zahlungen kommt es weniger in Frage?
        </h3>
        <ul className='list'>
          <li>Transaktionen, die sofort durchgeführt werden müssen (oft z.B. in E-Commerce)</li>
          <li>Sehr hohe einmalige Zahlungen für wertvolle Gegenstände (z.B. Goldbarren)</li>
          <li>Zahlungen, die mit hoher Wahrscheinlichkeit zurückgefordert werden (z.B. Glücksspiele)</li>
        </ul>


        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Wie lange braucht eine Lastschriftzahlung?
        </h3>
        <p className='para'>
          Alle SEPA Lastschriftzahlungen werden drei Tage nach der Belastung des Kontos Ihres Kunden an Sie ausgezahlt.
        </p>
        <p className='para'>
          Für einen neuen Kunden muss zunächst ein Mandat ausgestellt werden, das mit der ersten Zahlung bei der Bank
          des Kunden eingereicht wird. Im SEPA Basislastschriftverfahren muss dies sechs Tage vor der Belastung
          des Kontos Ihres Kunden passieren.
        </p>
        <p className='para'>
          All diese vorgeschriebenen Zeiten werden ganz automatisch von GoCardless eingehalten, die oben gemachten Angaben
          dienen nur zu Ihrer Information.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
            Ist es auch möglich einzelne Zahlungen per Lastschrift einzuziehen?
        </h3>
        <p className='para'>
          Ja. Das Lastschriftverfahren ist zwar besonders für wiederkehrende Zahlungen geeignet, aber ebenso können Sie
          damit einzelne Zahlungen einziehen.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Ist es einfach den Lastschriftanbieter zu wechseln?
        </h3>
        <p className='para'>
          Ja, es reicht die existierenden Mandate so abzuändern, dass sie die neue Gläubiger Identifikationsnummer
          beinhalten. Sie müssen außerdem Ihre Kunden über den Wechsel informieren, allerdings benötigen Sie keine
          Zustimmung von Ihren Kunden.
        </p>
        <p className='para'>
          GoCardless kümmert sich für Sie kostenfrei um diesen Prozess.
        </p>

        </Translation>
    );
  }
}
