import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class FaqMerchantsSigningUpFr extends React.Component {
  displayName = 'FaqMerchantsSigningUpFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-heading'>Inscription</h2>
        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Comment m’inscrire sur GoCardless?
        </h3>
        <p className='para'>
          Vous pouvez <Href to='signup.path' className='u-link-color-p u-text-underline'>créer un compte
          GoCardless</Href> et commencer à prendre des paiements en quelques minutes.
        </p>
        <p className='para'>
          Si vous êtes un développeur et souhaitez intégrer notre API, vous pouvez <a
          href='https://manage-sandbox.gocardless.com/signup' className='u-link-color-p u-text-underline'>
          créer un compte sandbox</a> pour tester votre intégration.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-heading u-margin-Vm u-text-s'>
          Y a-t-il une période d’engagement?
        </h3>
        <p className='para'>
          Non. Vous êtes libre d’essayer le produit sans engagement. Si vous décidez d’utiliser GoCardless,
          vous pouvez résilier à tout moment sans frais.
        </p>
      </Translation>
    );
  }
}
