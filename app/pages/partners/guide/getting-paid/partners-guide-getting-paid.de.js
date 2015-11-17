import React from 'react';
import Translation from '../../../../components/translation/translation';
import Link from '../../../../components/link/link';

export default class PartnersGuideGettingPaidDe extends React.Component {
  displayName = 'PartnersGuideGettingPaidDe'

  render() {
    return (
        <Translation locales='de'>
        <h2>Auszahlungen</h2>

        <p>
          In Deutschland zahlen wir Beträge 3-4 Werktage, nachdem Sie von Ihren Kunden eingezogen wurden, aus. Sie können
          einmalige, regelmäßige oder in Häufigkeit und Höhe variierende Lastschriften einziehen. Sie können Zahlungen an
          jedem beliebigen Tag von Ihren Kunden einziehen (wir geben Ihnen bzgl. der Tage keine Beschränkungen vor). Wir
          zahlen Beträge täglich aus. Mehr Informationen dazu finden Sie <Link to='faq_merchants_how_it_works'>hier</Link>.
        </p>
        </Translation>
    );
  }
}