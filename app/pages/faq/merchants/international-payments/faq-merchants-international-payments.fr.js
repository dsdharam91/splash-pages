import React from 'react';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';

export default class FaqMerchantsInternationalPaymentsFr extends React.Component {
  displayName = 'FaqMerchantsInternationalPaymentsFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Paiements à l'étranger</h2>
        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Dans quels pays GoCardless est-il disponible ?
        </h3>
        <p className='para'>
          GoCardless Pro est disponible dans tous les pays respectant les normes anti-blanchiment. La possibilité
          de créer un compte instantanément est disponible en France, Grande-Bretagne, Allemagne et Irlande.
          Vous aurez besoin d’avoir un compte en banque dans la zone Euro ou en Grande-Bretagne.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Dans quels pays puis-je prendre des paiements ?
        </h3>
        <p className='para'>
          Avec SEPA, vous pouvez collecter des fonds dans les 21 pays de la zone Euro :  Allemagne, Autriche,
          Belgique, Chypre, Espagne, Estonie, Finlande, France (et DOM-TOM), Grèce, Irlande, Italie, Lettonie, Lituanie,
          Luxembourg, Malte, Monaco, Pays-Bas, Portugal, San Marino, Slovaquie, Slovénie.
        </p>
        <p className='para'>
          Vous pouvez également collecter des fonds en Grande-Bretagne en Livres Sterling.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Qu'est ce que le prélèvement SEPA?
        </h3>
        <p className='para'>
          Le prélèvement SEPA est un nouvel instrument de paiement introduit par l’Union Européenne en Août
          2014 qui remplace le prélèvement national. Il permet de collecter des fonds sur les comptes bancaires
          en Euro dans toute <a href='https://gocardless.com/fr/guides/sepa/qu-est-ce-le-sepa/' target='_blank'
          className='u-link-color-p u-text-underline'>la zone SEPA</a>.
        </p>
        <p className='para'>
          Vous pouvez en apprendre plus dans <Href to='guides.path'
          className='u-link-color-p u-text-underline'>notre guide SEPA</Href>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Qu’est ce que le prélèvement BACS?
        </h3>
        <p className='para'>
          Le prélèvement BACS est l’équivalent du prélèvement SEPA en Grande-Bretagne et est régi
          par <a href='http://www.bacs.co.uk/Bacs/Businesses/DirectDebit/Pages/DirectDebit.aspx'
          target='_blank' className='u-link-color-p u-text-underline'>l'organisme BACS</a>.
        </p>
        <p className='para'>
          Vous pouvez en apprendre plus dans <a href='/direct-debit/'
          className='u-link-color-p u-text-underline'>notre guide BACS (en Anglais)</a>.
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Quelles devises sont supportées par GoCardless?
        </h3>
        <p className='para'>
          Nous acceptons les paiements en EUR (Euro) et GBP (Livres Sterling).
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Les coûts à l’étranger sont-ils les mêmes?
        </h3>
        <p className='para'>
          Oui, vous bénéficiez d’un tarif unique dans la devise de votre choix (EUR ou GBP).
        </p>

        <h3 className='section-heading u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Quand est-ce que GoCardless sera disponible hors d’Europe?
        </h3>
        <p className='para'>
          GoCardless ne sera pas disponible hors d’Europe en 2015. Nous travaillons sur l'ajout d’autres pays,
          et vous tiendrons informé sur notre blog.
        </p>
      </Translation>
    );
  }
}
