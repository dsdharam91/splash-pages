import React from 'react';
import Translation from '../../../components/translation/translation';

export default class LegalRestrictionsDe extends React.Component {
  displayName = 'LegalRestrictionsDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Verbotene Aktivitäten</h2>
        <p className='para'>
          Dies ist die aktuelle Liste verbotener Aktivitäten, für die Sie den
          GoCardless-Dienst nicht benutzen dürfen. Diese Liste wurde zuletzt im Mai 2015 aktualisiert.
        </p>
        <p className='para'>
          GoCardless kann die Bereitstellung der Dienste an Sie einstellen, wenn die GoCardless-Dienste
          für eine der verbotenen Aktivitäten benutzt werden.
          Dies kann dazu führen, dass Gelder nicht an den vorgesehenen Empfänger ausgezahlt werden.
        </p>
        <p className='para'>Die verbotenen Aktivitäten sind:</p>
        <ul className='list'>
          <li>
            Benutzung des GoCardless-Dienstes auf eine Weise oder im Zusammenhang
            mit einer Aktivität, die:
            <ul className='list u-margin-Tn'>
              <li>
                betrügerisch oder gesetzwidrig ist;
              </li>
              <li>
                Ihre Identität verfälscht oder den Eindruck vermittelt,
                dass Sie mit einem Dritten verbunden sind, wenn dies nicht der Fall ist;
              </li>
              <li>
                gegen geltendes örtliches, nationales oder internationales Recht oder
                Vorschriften verstößt (insbesondere Benutzung von GoCardless im Zusammenhang
                mit der Lieferung von Waren oder der Erbringung von Dienstleistungen,
                die gegen ein solches Gesetz oder eine solche Vorschrift verstoßen);
              </li>
              <li>
                Diskriminierung aufgrund von Rasse, Geschlecht, Religion, Nationalität,
                Behinderung, sexueller Orientierung oder Alter fördert;
              </li>
              <li>
                Gewalt, illegale Drogen oder eine sonstige illegale Aktivität fördert;
              </li>
              <li>
                die Rechte des geistigen Eigentums oder sonstige Eigentumsrechte
                eines Dritten in einer Rechtsordnung verletzt;
              </li>
              <li>
                gegen eine Verpflichtung zur Wahrung der Vertraulichkeit verstößt;
              </li>
              <li>
                Glücksspiel, Wetttipps, Verlosungen oder jegliche Art von Lotterie
                beinhaltet, außer wenn es gesetzlich gestattet ist; oder
              </li>
              <li>
                die Rechte auf Privatsphäre einer Person verletzt.
              </li>
            </ul>
          </li>
          <li>
            Benutzung von GoCardless zum Verkauf oder zur
            Bereitstellung oder Annahme oder Leistung einer Zahlung für:
            <ul className='list u-margin-Tn'>
              <li>
               Artikel, die eine Lizenz oder Erlaubnis von einem Dritten
               erfordern, es sei denn, dass Sie eine solche Lizenz haben;
              </li>
              <li>
                Drogen oder Drogenutensilien;
              </li>
              <li>
                Überbrückungsdarlehen;
              </li>
              <li>
                Wetttipps oder nicht regulierte Finanzberatung;
              </li>
              <li>
                Währungsumtauschdienste;
              </li>
              <li>
                Finanztransferdienste;
              </li>
              <li>
                nachgeahmte Waren, insbesondere Designer-Handtaschen,
                Kleidung, Accessoires und Elektrogeräte für Verbraucher;
              </li>
              <li>
                erweiterte Garantien;
              </li>
              <li>
                Inkasso;
              </li>
              <li>
                Geschäftsgelegenheiten, Investitionsgelegenheiten,
                Hypothekenberatungs- oder -minderungsdienste oder Kreditberatung;
              </li>
              <li>
                Prepaid-Telefonkarten;
              </li>
              <li>
                Teilzeitnutzungsrechte; oder
              </li>
              <li>
                Medienaktivität, wie die Bereitstellung von
                Twitter-Followers, Facebook-Likes oder Ansichten auf YouTube.
              </li>
            </ul>
          </li>
          <li>
            Zugriff oder versuchter Zugriff auf eine Software, die dem GoCardless-Dienst zugrunde liegt.
          </li>
          <li>
            Wissentliche oder fahrlässige Übermittlung von Daten oder Material, das Viren,
            Trojaner, werbefinanzierte Software, Spionagesoftware, Würmer oder sonstige schädliche
            Codes oder Programme enthält,
            die dazu dienen, den Betrieb von Software oder Hardware zu beeinträchtigten.
          </li>
          <li>
            Übermittlung, Versendung oder Hochladen von unerwünschter oder nicht
            autorisierter Werbung oder von verkaufsförderndem Material.
          </li>
          <li>
            Benutzung des GoCardless-Dienstes zur Erfassung oder versuchten Erfassung oder
            Übermittlung personenbezogener Daten über eine Person ohne ihre Einwilligung.
          </li>
          <li>
            Benutzung des GoCardless-Dienstes als privates Bankinstitut.
          </li>
          <li>
            Benutzung des GoCardless-Dienstes, um Vorauszahlungen für Waren oder Dienstleistungen zu erhalten,
            die erst erheblich später geliefert beziehungsweise erbracht werden.
          </li>
          <li>
            Benutzung des GoCardless-Dienstes auf eine Weise, die nach vernünftiger Ansicht von
            GoCardless einen Missbrauch des Systems darstellt.
            Hierzu gehört auch das GoCardless-Überweisungssystem.
          </li>
          <li>
            Benutzung des GoCardless-Dienstes auf eine Weise, die wahrscheinlich die Haftung
            von GoCardless oder eines Dritten auslöst, insbesondere auf eine Weise,
            die wahrscheinlich zu Beschwerden, Streitigkeiten,
            Stornierungen, Rückbuchungen, Gebühren, Bußgeldern oder Strafen führt.
          </li>
          <li>
            Benutzung des GoCardless-Dienstes, um ein Konto zu kontrollieren,
            das mit einem anderen Konto verbunden ist,
            dessen Nutzer eine der obigen Aktivitäten ausgeführt haben.
          </li>
          <li>
            Benutzung des GoCardless-Dienstes zum Erhalt von Zahlungen,
            die Pyramiden- oder Schneeballsysteme, Matrixprogramme,
            sonstige „Schnell-reich-werden“-Systeme oder bestimmte
            Multi-Level-Marketingprogramme unterstützen.
          </li>
          <li>
            Benutzung des GoCardless-Dienstes zur Überweisung von Zahlungen an und von
            demselben Konto oder zwischen mehreren Konten,
            die von oder für denselben wirtschaftlichen Eigentümer geführt werden.
          </li>
          <li>
            Benutzung des GoCardless-Dienstes zur Erteilung von Einzugsermächtigungen
            im Namen einer anderen Partei.
          </li>
        </ul>
      </Translation>
    );
  }
}
