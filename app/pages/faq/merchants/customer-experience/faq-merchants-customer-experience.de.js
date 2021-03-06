import React from 'react';
import Translation from '../../../../components/translation/translation';

export default class FaqMerchantsCustomerExperienceDe extends React.Component {
  displayName = 'FaqMerchantsCustomerExperienceDe'

  render() {
    return (
      <Translation locales='de'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Kundenerlebnis</h2>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Wie können meine Kunden mich bezahlen?
        </h3>
        <p className='para'>
          Ihre Kunden können ihre Bankdaten online über GoCardless eingeben. Falls Sie GoCardless
          Pro benutzen, können Ihre Kunden Ihnen diese auch über ein Papiermandat oder am Telefon nennen.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Bleiben meine Kunden auf meiner Website?
        </h3>
        <p className='para'>
          Das hängt von dem jeweiligen Produkt ab, das Sie wählen. Mit GoCardless sind die Zahlungsseiten auf
          unserem Server gespeichert. Mit GoCardless Pro können Sie auswählen, ob Sie bevorzugen die von uns
          zur Verfügung gestellten Zahlungsseiten zu benutzen oder Ihre eigenen Zahlungsseiten auf Ihrem Server
          zu speichern. In letzterem Fall haben Sie volle Kontrolle über das Design dieser Seiten.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Sind auch iFrames möglich?
        </h3>
        <p className='para'>
          Nein, wir bieten keine Lösungen für die Zahlungsseiten via iFrames an. Einige unserer Partner allerdings,
          z.B. Zuora, stellen die Zahlungsseiten als iFrames zur Verfügung. Wenn Sie GoCardless Pro benutzen,
          dann bieten wir Ihnen einen Javascript Flow, der es Ihnen erlaubt, die Zahlungen zu veranlassen ohne die
          Bankdaten Ihrer Kunden auf Ihrem eigenen Server zu speichern.
        </p>

        <h3 className='u-color-dark-gray u-margin-Txl u-margin-Bm u-text-s'>
          Können Kunden auch mobil mit ihrem Handy zahlen?
        </h3>
        <p className='para'>
          Ja - GoCardless funktioniert genauso auf mobilen Geräten, z.B. Smartphones oder Tablets. Die von uns zur Verfügung
          gestellten Zahlungsseiten funktionieren auch in jedem Internet Browser.
        </p>

      </Translation>
    );
  }
}
