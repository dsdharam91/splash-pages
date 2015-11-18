import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class PartnersGuideRestrictionsDe extends React.Component {
  displayName = 'PartnersGuideRestrictionsDe'

  render() {
    return (
      <Translation locales='de'>
        <h2>Einschränkungen</h2>

        <h3>Gibt es bestimmte Kunden, denen Sie Ihren Service nicht zur Verfügung stellen?</h3>

        <p>
          Auch wenn wir Ausnahmen akzeptieren, falls eine niedrige Rückbuchungsquote oder eine hohe Anzahl an
          Zahlungen zu erwarten ist, neigen wir dennoch dazu, für unsere Tätigkeit keine Risiken einzugehen und es wird
          uns von unseren Kreditinstituten untersagt, unseren Service zu den <Link to='legal_restrictions'>hier </Link>
          aufgelisteten Zwecken bereitzustellen.
        </p>

        <p>
          Bevor wir Ihnen unseren Service zur Verfügung stellen, möchten wir die wahrscheinlich zu erwartende Rückbuchungsquote
          einschätzen und uns ein genaues Bild von Ihrer Tätigkeit machen können. Im Regelfall arbeiten wir nicht mit Händlern
          zusammen, deren Rückbuchungsquote 1 % übersteigt. Sollten diese Händler Quoten von über 1 % aufweisen,
          kann mit uns über einen Risikoaufschlag und/oder Sicherheitsrücklagen verhandelt werden.
        </p>

        <h3>Gibt es einen Mindest- oder Höchstbetrag für Zahlungen?</h3>

        <p>
          In der Eurozone beläuft sich der Höchstbetrag für einzelne Transaktionen auf 5.000 €. Im Vereinigten Königreich
          beläuft sich der Mindestbetrag für einzelne Transaktionen auf £ 1 und der Höchstbetrag auf £ 5.000.
        </p>

        <p>
          GoCardless kann den Höchstbetrag bei zusätzlichen Verifizierungsprüfungen erhöhen.
        </p>
      </Translation>
    );
  }
}
