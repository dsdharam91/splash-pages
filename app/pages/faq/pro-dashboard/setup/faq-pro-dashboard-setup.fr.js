import React from 'react';
import Link from '../../../../components/link/link';
import Translation from '../../../../components/translation/translation';
import Href from '../../../../components/href/href';
import IfLocale from '../../../../components/if-locale/if-locale';

export default class FaqProDashboardFr extends React.Component {
  displayName = 'FaqProDashboardFr'

  render() {
    return (
      <Translation locales='fr'>
        <h2 className='u-text-heading-light u-text-m u-color-dark-gray'>Mise en place</h2>
        <p className='para'>
          <IfLocale hasInstantSignup>
            GoCardless vous permet de créer des mandats de prélèvement SEPA et d'encaisser des
            paiement récurrents directement à partir
            de notre <a href='https://manage.gocardless.com/'
            className='u-link-color-p u-text-underline'>tableau de bord en ligne</a> ou
            via notre API REST.
          </IfLocale>
          <IfLocale hasInstantSignup={false}>
            GoCardless vous permet d’obtenir des mandats de prélèvement SEPA et d'encaisser des
            paiement récurrents sans la moindre intégration technique, directement à partir
            de notre tableau de bord en ligne.
          </IfLocale>
        </p>

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Démarrage
        </h3>
        <IfLocale hasInstantSignup>
          <p className='para'>
            Vous pouvez <Href to='signup.path' className='u-link-color-p u-text-underline'>
            créer un compte GoCardless</Href> et commencer à prendre des prélèvements instantanément.
            Suivez le guide ci-dessous afin de vérifier votre compte.
          </p>
        </IfLocale>
        <IfLocale hasInstantSignup={false}>
          <p className='para'>
            Vous pouvez <a href='https://manage-sandbox.gocardless.com/signup' target='_blank'
            className='u-link-color-p u-text-underline'>créer un compte test</a> gratuitement.
          </p>
          <p className='para'>
            Afin de prélever des paiements réels, il suffit d'envoyer à <Href to='email'
            className='u-link-color-p u-text-underline'/> les documents suivants :
          </p>
          <ul className='list'>
            <li>Confirmer que vous avez lu et accepté nos <Link to='legal_merchants'
            className='u-link-color-p u-text-underline'>Conditions Générales d'Utilisation</Link></li>
            <li>Envoyer un RIB au nom de votre société</li>
            <li>Envoyer une copie de la carte d’identité ou du passeport de votre gérant et de chaque individu
            qui détient plus de 25% du capital de votre société</li>
          </ul>
          <p className='para'>
            Une fois ces documents fournis, nous vous créerons un compte (typiquement sous 24 heures) et vous
            pourrez commencer à utiliser GoCardless pour vos clients, sans avoir besoin de passer par votre banque
            ou contrat VAD.
          </p>
          <p className='para'>
            Veuillez noter que ce que vous créez dans votre compte test ne sera pas transmis au compte en production.
          </p>
        </IfLocale>
        <p className='para'>
          Si vous souhaitez migrer des clients avec lesquels vous avez déjà un mandat de prélèvement bancaire,
          veuillez nous contacter à <Href to='email' className='u-link-color-p u-text-underline' />.
        </p>
        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Vérification de compte
        </h3>

        <img src='/images/faq/fr/verification-flow.png' />

        <p className='para'>
          Afin de respecter les lois anti-blanchiments européennes, nous devons vérifier
          votre identité et votre compte bancaire. Si vous êtes une entreprise, vous devrez nous fournir les
          informations suivantes :
        </p>
        <ul className='list'>
          <li>
            Votre SIREN
          </li>
          <li>
            Le nom, l'adresse de domicile <strong>personnelle</strong> et
            la date de naissance d'un des dirigeants
          </li>
          <li>
            Le nom, l'adresse de domicile <strong>personnelle</strong> et la date de naissance de tout
            actionnaire possédant plus de 25% des parts de l'entreprise
          </li>
          <li>
            Le compte bancaire de reversement qui doit être au nom de l'entreprise
          </li>
        </ul>

        <img src='/images/faq/fr/company-verification.png' />

        <p className='para'>
          Une fois que vous avez fourni ces informations, nous devons les vérifier. Nous vous demanderons:
        </p>
        <ul className='list'>
          <li>
            Une <strong>pièce d'identité</strong> (passeport ou <strong>recto / verso </strong>
            d'une Carte d'Identité Nationale) du dirigeant sélectionné et des actionnaires
            possédant plus de 25% des parts
          </li>
          <li>
            Un <strong>justificatif de domicile récent</strong> (moins de 6 mois) du dirigeant
            sélectionné et des actionnaires
            possédant plus de 25% des parts, par exemple une quittance d'électricité,
            de gaz ou d'eau, une facture téléphonique fixe, mobile ou internet, un document de
            taxe foncière ou d'habitation...
          </li>
          <li>
            Un <strong>virement de 0,01 €</strong> ou le montant minimum à partir du compte bancaire
            de reversement indiqué vers notre compte désigné
            (notre RIB vous sera communiqué lors de l'inscription)
          </li>
        </ul>

        <img src='/images/faq/fr/verification-document.png' />

        <h3 className='u-text-heading-light u-color-dark-gray u-margin-Vm u-text-s'>
          Préparation du compte
        </h3>
        <p className='para'>
          Vous pouvez personnaliser votre compte dans la <a href='https://manage.gocardless.com/settings/company'
          target='_blank' className='u-link-color-p u-text-underline'>section Company Info</a> :
        </p>
        <ul className='list'>
          <li>Ajouter un logo qui sera utilisé sur votre page de mandat</li>
          <li>Ajouter un compte en banque, sur lequel nous verserons vos paiements</li>
        </ul>

      </Translation>
    );
  }
}
